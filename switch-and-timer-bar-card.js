class SwitchAndTimerBarCard extends HTMLElement {
    setConfig(config) {
        this._config = {
            active_color: '#2196F3',
            button_position: 'left',
            ...config
        };
        this.render();
    }
    set hass(hass) {
        this._hass = hass;
        this.render();
        if(!this._interval) {
            this._interval = setInterval(() => {
                if(this.isConnected) this.render();
            }, 1000);
        }
    }
    disconnectedCallback() {
        if(this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
    render() {
        if(!this._hass || !this._config.entities) return;
        const header = this._config.title ? `header="${this._config.title}"` : '';
        this.innerHTML = `
      <ha-card ${header}>
        <div class="container">
          ${this._config.entities.map(entity => this.renderEntity(entity)).join('')}
        </div>
      </ha-card>
      <style>${this.getStyles()}</style>
    `;
        this.addEventListeners();
    }
    parseDuration(duration) {
        if(!duration) return 0;
        if(typeof duration === 'string' && duration.includes(':')) {
            const parts = duration.split(':');
            if(parts.length === 3) {
                return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
            }
        }
        return parseFloat(duration) || 0;
    }
    calculateActivePercent(elapsedTime, totalDuration) {
        return totalDuration > 0 ? (elapsedTime / totalDuration) * 100 : 0;
    }
    formatTime(seconds) {
        if(isNaN(seconds) || seconds === 0) return '0m 00s';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}m ${secs.toString().padStart(2, '0')}s`;
    }
    getStatusText(switchState, timerState) {
        if(switchState?.state === 'on') return 'Watering';
        if(switchState?.state === 'off') return 'Ready';
        return 'Unavailable';
    }
    getLastWateringText(sensorState, switchState) {
        if(switchState?.state === 'on') return 'Active';
        if(!sensorState || !sensorState.state) return '';
        const now = new Date();
        const wateringDate = new Date(sensorState.state);
        if(isNaN(wateringDate.getTime())) return sensorState.state;
        const diffSeconds = Math.floor((now - wateringDate) / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        if(diffSeconds < 60) return 'Just now';
        if(diffMinutes < 60) return `${diffMinutes} minutes ago`;
        if(diffHours < 24) return `${diffHours} hours ago`;
        return `${diffDays} days ago`;
    }
    renderTimerControls(timerState, timerEntity, switchEntity) {
        return `
      <div class="timer-controls">
        ${(this._hass.states[switchEntity]?.state === 'off') ?
          `<button class="control-btn start" data-entity="${timerEntity}">
            <ha-icon icon="mdi:play"></ha-icon>
          </button>` : ''}  
        ${(this._hass.states[switchEntity]?.state === 'on') ? 
          `<button class="control-btn stop" data-timer="${timerEntity}" data-switch="${switchEntity}">
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>` : ''}
      </div>
    `;
    }
    addEventListeners() {
        this.querySelectorAll('.control-btn.start').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const entity = e.currentTarget.dataset.entity;
                this._hass.callService('timer', 'start', {
                    entity_id: entity
                });
            });
        });
        this.querySelectorAll('.control-btn.stop').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const timerEntity = e.currentTarget.dataset.timer;
                const switchEntity = e.currentTarget.dataset.switch;
                if(timerEntity) {
                    await this._hass.callService('timer', 'finish', {
                        entity_id: timerEntity
                    });
                }
                if(switchEntity) {
                    await this._hass.callService('switch', 'turn_off', {
                        entity_id: switchEntity
                    });
                }
            });
        });
    }
    renderEntity(entityConfig) {
        const {
            switch: switchEntity,
            timer: timerEntity,
            sensor: sensorEntity
        } = entityConfig;
        const switchState = this._hass.states[switchEntity];
        const timerState = this._hass.states[timerEntity];
        const sensorState = this._hass.states[sensorEntity];
        const activeColor = entityConfig.active_color || this._config.active_color;
        const buttonPosition = entityConfig.button_position || this._config.button_position;
        const activeTime = switchState?.state === 'on' ?
            Math.min((Date.now() - new Date(switchState.last_changed).getTime()) / 1000, 1800) : 0;
        const totalDuration = this.parseDuration(timerState?.attributes.duration) || 0;
        let remainingTime = 0;
        let elapsedTime = 0;
        if(timerState?.state === 'active') {
            const finishTime = new Date(timerState.last_changed).getTime() +
                (this.parseDuration(timerState.attributes.duration) * 1000);
            remainingTime = Math.max(0, (finishTime - Date.now()) / 1000);
            elapsedTime = Math.max(0, totalDuration - remainingTime);
        } else if(switchState?.state === 'on') {
            elapsedTime = activeTime;
            remainingTime = Math.max(0, totalDuration - elapsedTime);
        }
        const activePercent = this.calculateActivePercent(elapsedTime, totalDuration);
        return `
      <div class="entity-card">
        <div class="header">
          <div class="title" style="${switchState?.state === 'on' ? 'color: #2196F3' : ''}">
            ${entityConfig.name || switchState?.attributes.friendly_name || switchEntity}
          </div>
          <div class="status ${switchState?.state || 'off'} ${timerState?.state || 'idle'}">
            ${this.getStatusText(switchState, timerState)}
          </div>
        </div>
        
        <div class="control-wrapper ${buttonPosition}">
          ${buttonPosition === 'left' ? this.renderTimerControls(timerState, timerEntity, switchEntity) : ''}
          
          <div class="timeline-container">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${activePercent}%; background: ${activeColor}"></div>
            </div>
            <div class="time-info">
              <span>${this.getLastWateringText(sensorState, switchState)}</span>
              <span>${this.formatTime(elapsedTime)} / ${this.formatTime(totalDuration)}</span>
            </div>
          </div>
  
          ${buttonPosition === 'right' ? this.renderTimerControls(timerState, timerEntity, switchEntity) : ''}
        </div>
      </div>
    `;
    }
    getStyles() {
        return `
    .control-btn {
      align-items: center;
      background: #4CAF50;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      height: 48px;
      justify-content: center;
      width: 48px;
      margin-top: 0px;
    }
  
    .control-btn ha-icon {
      color: white;
      height: 24px;
      width: 24px;
    }
  
    .control-btn.stop {
      background: #2196F3 !important;
    }
  
    .control-wrapper {
      align-items: center;
      display: flex;
      gap: 1.5rem;
    }
  
    .entity-card {
      background: var(--secondary-background-color);
      border-radius: 0px;
      box-shadow: 0px 1px 0px rgba(255,255,255,0.25);
      margin-bottom: 1px;
      padding: 16px;
    }
  
    .header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
  
    .progress-bar {
      background: var(--disabled-color);
      border-radius: 5px;
      height: 10px;
      overflow: hidden;
    }
  
    .progress-fill {
      height: 100%;
      transition: width 1s linear;
    }
  
    .status {
      border-radius: 16px;
      color: white !important;
      font-size: 0.9em;
      padding: 4px 12px;
    }
  
    .status.on {
      background: #2196F3 !important;
    }
  
    .status.off {
      background: #4CAF50 !important;
    }
  
    .status.unavailable {
      background:rgb(231, 29, 29) !important;
    }
  
    .time-info {
      color: var(--secondary-text-color);
      display: flex;
      font-size: 0.85em;
      justify-content: space-between;
      margin: 0.5rem 0 0 0;
    }
  
    .timer-controls {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      margin: 0 0 0.4rem 0rem;
    }
  
    .timeline-container {
      flex-grow: 1;
      position: relative;
    }
  
    .title {
      font-weight: bold;
    }
    `;
    }
}
customElements.define('switch-and-timer-bar-card', SwitchAndTimerBarCard);

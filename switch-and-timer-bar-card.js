import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class SwitchAndTimerBarCard extends LitElement {
    static get properties() {
        return {
            hass: {},
            _config: {},
            _timer: {}
        };
    }

    // Styles updated to remove hardcoded colors that will now be dynamic
    static get styles() {
        return css `
          :host {
              background: var(--ha-card-background, var(--card-background-color, white));
              border-radius: var(--ha-card-border-radius, 12px);
              box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));
              color: var(--primary-text-color);
              display: block;
              position: relative;
          }
          .card-header {
              font-size: var(--ha-card-header-font-size, 24px);
              font-weight: normal;
              padding: 24px 16px 16px;
          }
          .control-btn {
              align-items: center;
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
              height: 24px;
              width: 24px;
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
          .entity-card:first-of-type {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
          }
          .entity-card:last-of-type {
              margin-bottom: 0;
              border-bottom: 0;
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
              color: white !important; /* Text color on status is kept white for readability */
              font-size: 0.9em;
              padding: 4px 12px;
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

    setConfig(config) {
        const defaults = {
            button_position: 'left',
            colors: {
                on: '#2196F3',
                ready: '#4CAF50',
                unavailable: '#F44336',
                button_start: '#4CAF50',
                button_stop: '#2196F3',
                icon: 'white',
                progress_fill: '#2196F3'
            },
            icons: {
                start: 'mdi:play',
                stop: 'mdi:stop'
            },
            labels: {
                status_on: 'Watering',
                status_ready: 'Ready',
                status_unavailable: 'Unavailable',
                last_on_active: 'Active',
                last_on_now: 'Just now',
                last_on_ago_minutes: 'minutes ago',
                last_on_ago_hours: 'hours ago',
                last_on_ago_days: 'days ago',
                time_format_zero: '0m 00s',
                time_unit_minutes: 'm',
                time_unit_seconds: 's'
            }
        };

        // Deep merge of defaults and user config
        this._config = {
            ...defaults,
            ...config,
            colors: {
                ...defaults.colors,
                ...(config.colors || {})
            },
            icons: {
                ...defaults.icons,
                ...(config.icons || {})
            },
            labels: {
                ...defaults.labels,
                ...(config.labels || {})
            },
        };
    }

    render() {
        if (!this.hass || !this._config) {
            return html ``;
        }
        return html `
          ${this._config.title ? html`<div class="card-header">${this._config.title}</div>` : ''}
          <div class="container">
              ${this._config.entities.map(entity => this.renderEntity(entity))}
          </div>
      `;
    }

    renderEntity(entityConfig) {
        const switchEntity = entityConfig.switch;
        const timerEntity = entityConfig.timer;
        const sensorEntity = entityConfig.sensor;
        const switchState = this.hass.states[switchEntity];
        const timerState = this.hass.states[timerEntity];
        const sensorState = this.hass.states[sensorEntity];

        if (!switchState) {
            return html `<div class="warning">Entity not found: ${switchEntity}</div>`;
        }

        // Create entity-specific configs by overriding global configs
        const buttonPosition = entityConfig.button_position || this._config.button_position;
        const colors = { ...this._config.colors, ...(entityConfig.colors || {}) };
        const icons = { ...this._config.icons, ...(entityConfig.icons || {}) };
        const labels = { ...this._config.labels, ...(entityConfig.labels || {}) };

        const activeTime = switchState.state === 'on' ?
            Math.min((Date.now() - new Date(switchState.last_changed).getTime()) / 1000, 1800) : 0;

        const totalDuration = this.parseDuration(timerState?.attributes.duration);
        let elapsedTime = 0;

        if (timerState?.state === 'active') {
            const finishTime = new Date(timerState.last_changed).getTime() + (this.parseDuration(timerState.attributes.duration) * 1000);
            const remainingTime = Math.max(0, (finishTime - Date.now()) / 1000);
            elapsedTime = Math.max(0, totalDuration - remainingTime);
        } else if (switchState.state === 'on') {
            elapsedTime = activeTime;
        }

        const activePercent = this.calculateActivePercent(elapsedTime, totalDuration);

        // Determine dynamic styles from config
        let statusStyle = `background-color: ${colors.unavailable};`;
        if (switchState.state === 'on') statusStyle = `background-color: ${colors.on};`;
        if (switchState.state === 'off') statusStyle = `background-color: ${colors.ready};`;
        
        const startBtnStyle = `background-color: ${colors.button_start};`;
        const stopBtnStyle = `background-color: ${colors.button_stop};`;
        const iconStyle = `color: ${colors.icon};`;
        
        const timerControls = html `
          <div class="timer-controls">
              ${switchState.state === 'off' ?
              html`<button
                      class="control-btn start"
                      style="${startBtnStyle}"
                      @click=${() => this._handleStart(timerEntity)}>
                      <ha-icon icon="${icons.start}" style="${iconStyle}"></ha-icon>
                  </button>` : ''}
              ${switchState.state === 'on' ?
              html`<button
                      class="control-btn stop"
                      style="${stopBtnStyle}"
                      @click=${() => this._handleStop(timerEntity, switchEntity)}>
                      <ha-icon icon="${icons.stop}" style="${iconStyle}"></ha-icon>
                  </button>` : ''}
          </div>
        `;

        return html `
          <div class="entity-card">
              <div class="header">
                  <div class="title" style="${switchState.state === 'on' ? `color: ${colors.on}` : ''}">
                      ${entityConfig.name || switchState.attributes.friendly_name || switchEntity}
                  </div>
                  <div class="status" style="${statusStyle}">
                      ${this.getStatusText(switchState, timerState, labels)}
                  </div>
              </div>
              <div class="control-wrapper ${buttonPosition}">
                  ${buttonPosition === 'left' ? timerControls : ''}
                  <div class="timeline-container">
                      <div class="progress-bar">
                          <div class="progress-fill" style="width: ${activePercent}%; background-color: ${colors.progress_fill};"></div>
                      </div>
                      <div class="time-info">
                          <span>${this.getLastWateringText(sensorState, switchState, labels)}</span>
                          <span>${this.formatTime(elapsedTime, labels)} / ${this.formatTime(totalDuration, labels)}</span>
                      </div>
                  </div>
                  ${buttonPosition === 'right' ? timerControls : ''}
              </div>
          </div>
        `;
    }

    _handleStart(timerEntity) {
        this.hass.callService('timer', 'start', { entity_id: timerEntity });
    }

    async _handleStop(timerEntity, switchEntity) {
        if (timerEntity) {
            await this.hass.callService('timer', 'finish', { entity_id: timerEntity });
        }
        if (switchEntity) {
            await this.hass.callService('switch', 'turn_off', { entity_id: switchEntity });
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this._interval = setInterval(() => { this._timer = new Date(); }, 1000);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this._interval);
    }

    parseDuration(duration) {
        if (!duration) return 0;
        if (typeof duration === 'string' && duration.includes(':')) {
            const parts = duration.split(':');
            if (parts.length === 3) {
                return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
            }
        }
        return parseFloat(duration) || 0;
    }

    calculateActivePercent(elapsedTime, totalDuration) {
        return totalDuration > 0 ? (elapsedTime / totalDuration) * 100 : 0;
    }

    // Helper functions now accept a 'labels' object from config
    formatTime(seconds, labels) {
        if (isNaN(seconds) || seconds === 0) return labels.time_format_zero;
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}${labels.time_unit_minutes} ${secs.toString().padStart(2, '0')}${labels.time_unit_seconds}`;
    }

    getStatusText(switchState, timerState, labels) {
        if (switchState?.state === 'on') return labels.status_on;
        if (switchState?.state === 'off') return labels.status_ready;
        return labels.status_unavailable;
    }

    getLastWateringText(sensorState, switchState, labels) {
        if (switchState?.state === 'on') return labels.last_on_active;
        if (!sensorState || !sensorState.state) return '';
        const now = new Date();
        const wateringDate = new Date(sensorState.state);
        if (isNaN(wateringDate.getTime())) return sensorState.state;

        const diffSeconds = Math.floor((now - wateringDate) / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffSeconds < 60) return labels.last_on_now;
        if (diffMinutes < 60) return `${diffMinutes} ${labels.last_on_ago_minutes}`;
        if (diffHours < 24) return `${diffHours} ${labels.last_on_ago_hours}`;
        return `${diffDays} ${labels.last_on_ago_days}`;
    }
}

customElements.define('switch-and-timer-bar-card', SwitchAndTimerBarCard);

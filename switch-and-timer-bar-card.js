const _0x1522fd=_0x33d2;(function(_0x6e0a2d,_0x36ac72){const _0x46d058=_0x33d2,_0x1ffb75=_0x6e0a2d();while(!![]){try{const _0x31483f=parseInt(_0x46d058(0x282))/0x1+-parseInt(_0x46d058(0x32e))/0x2*(-parseInt(_0x46d058(0x308))/0x3)+parseInt(_0x46d058(0x25a))/0x4*(-parseInt(_0x46d058(0x208))/0x5)+-parseInt(_0x46d058(0x24b))/0x6*(parseInt(_0x46d058(0x30c))/0x7)+-parseInt(_0x46d058(0x2a1))/0x8+-parseInt(_0x46d058(0x240))/0x9+parseInt(_0x46d058(0x283))/0xa;if(_0x31483f===_0x36ac72)break;else _0x1ffb75['push'](_0x1ffb75['shift']());}catch(_0xa08dc){_0x1ffb75['push'](_0x1ffb75['shift']());}}}(_0x4317,0x9d35b));let HaLitBase,haHtml,haCss;{const base=window[_0x1522fd(0x2f4)]||(customElements[_0x1522fd(0x1df)](_0x1522fd(0x2bb))?Object['getPrototypeOf'](customElements[_0x1522fd(0x1df)](_0x1522fd(0x2bb))):null);if(!base||!base[_0x1522fd(0x253)]?.['html']||!base[_0x1522fd(0x253)]?.[_0x1522fd(0x277)]){const msg=_0x1522fd(0x2a0);console[_0x1522fd(0x235)](msg),HaLitBase=class{},haHtml=()=>'',haCss=()=>'';}else HaLitBase=base,haHtml=base['prototype'][_0x1522fd(0x1f8)],haCss=base[_0x1522fd(0x253)][_0x1522fd(0x277)];}class SwitchAndTimerBarCard extends HaLitBase{static get['properties'](){return{'hass':{},'_config':{},'_timer':{},'_durationEditor':{},'_startConfirm':{}};}static get['DEFAULTS'](){const _0x13e94c=_0x1522fd;return{'button_position':_0x13e94c(0x20f),'colors':{'on':'#2196F3','ready':_0x13e94c(0x2f2),'unavailable':'#F44336','button_start':_0x13e94c(0x2f2),'button_stop':'#2196F3','icon':'#FFFFFF','progress_fill':'#2196F3'},'icons':{'start':_0x13e94c(0x252),'stop':'mdi:stop'},'labels':{'status_on':'Watering','status_ready':_0x13e94c(0x214),'status_unavailable':_0x13e94c(0x320),'last_on_active':_0x13e94c(0x2af),'last_on_now':_0x13e94c(0x2ee),'last_on_ago_minutes':_0x13e94c(0x22d),'last_on_ago_hours':'hours\x20ago','last_on_ago_days':_0x13e94c(0x30e),'time_format_zero':_0x13e94c(0x2e9),'time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':_0x13e94c(0x239),'edit_duration_hours':'Hours','edit_duration_minutes':_0x13e94c(0x2cd),'edit_duration_seconds':_0x13e94c(0x286),'edit_duration_apply':'Apply','edit_duration_reset':_0x13e94c(0x1f2),'edit_duration_cancel':_0x13e94c(0x206),'edit_duration_tooltip':_0x13e94c(0x248),'start_confirm_body':_0x13e94c(0x272),'start_confirm_ok':_0x13e94c(0x30a),'start_confirm_cancel':'Cancel'}};}static async['getConfigElement'](){const _0x450d5b=_0x1522fd;return document[_0x450d5b(0x2ad)](_0x450d5b(0x2e4));}static[_0x1522fd(0x28b)](){const _0xdce7bd=_0x1522fd;return{'title':_0xdce7bd(0x1ec),'entities':[{'name':_0xdce7bd(0x2bc),'switch':_0xdce7bd(0x238),'timer':_0xdce7bd(0x223),'sensor':'sensor.example_last_watered','timer_and_entity_connected_via_automation':!![]}]};}static get[_0x1522fd(0x20c)](){return haCss`
      :host {
        display: block;
        position: relative;
        color: var(--primary-text-color);
      }
      ha-card {
        /* ha-card already provides theme-aware background, border-radius
           and box-shadow via its own CSS variables. Keeping it explicit
           here so card-mod / themes can target either selector. */
        overflow: hidden;
      }
      .warning {
        padding: 16px;
        color: var(--error-color);
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
        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
        margin-bottom: 1px;
        padding: 16px;
      }
      .entity-card:first-of-type {
        border-top-left-radius: var(--ha-card-border-radius, 12px);
        border-top-right-radius: var(--ha-card-border-radius, 12px);
      }
      .entity-card:last-of-type {
        border-bottom-left-radius: var(--ha-card-border-radius, 12px);
        border-bottom-right-radius: var(--ha-card-border-radius, 12px);
        box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.25);
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
      .battery {
        align-items: center;
        color: var(--secondary-text-color);
        display: inline-flex;
        font-size: 0.75em;
        font-weight: normal;
        gap: 2px;
        margin-left: 0.4rem;
        vertical-align: middle;
        white-space: nowrap;
      }
      .battery ha-icon {
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color);
        margin-bottom: 5px;
      }
      /* ---- Duration editor (clickable total time) ---- */
      .duration-editable {
        align-items: center;
        border-radius: 4px;
        cursor: pointer;
        display: inline-flex;
        gap: 4px;
        padding: 2px 4px;
        transition: background-color 0.15s, opacity 0.15s;
      }
      .duration-editable:hover {
        background-color: var(--secondary-background-color);
        opacity: 0.9;
      }
      .duration-editable .edit-icon {
        --mdc-icon-size: 14px;
        opacity: 0.6;
      }
      /* ---- Duration dialog ---- */
      .duration-dialog-body {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        min-width: 260px;
        padding: 8px 4px;
      }
      .duration-fields {
        align-items: flex-end;
        display: flex;
        gap: 0.5rem;
        justify-content: center;
      }
      .duration-field {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .duration-field-label {
        color: var(--secondary-text-color);
        font-size: 0.75em;
      }
      .duration-field input {
        background: var(--secondary-background-color);
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 6px;
        color: var(--primary-text-color);
        font-size: 1.4em;
        padding: 8px;
        text-align: center;
        width: 64px;
      }
      .duration-field input:focus {
        border-color: var(--primary-color);
        outline: none;
      }
      .duration-sep {
        color: var(--secondary-text-color);
        font-size: 1.4em;
        padding-bottom: 8px;
      }
      .duration-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-end;
      }
      .dlg-btn {
        background: transparent;
        border: none;
        border-radius: 6px;
        color: var(--primary-color);
        cursor: pointer;
        font-size: 0.95em;
        font-weight: 500;
        padding: 8px 14px;
        text-transform: uppercase;
      }
      .dlg-btn:hover {
        background-color: rgba(var(--rgb-primary-color, 33, 150, 243), 0.08);
      }
      .dlg-btn-primary {
        color: var(--primary-color);
      }
      .dlg-btn-reset {
        color: var(--secondary-text-color);
        margin-right: auto;
      }
      /* ---- Unattended-start confirm dialog (Issue #11) ---- */
      .stbc-modal {
        align-items: center;
        background: rgba(0, 0, 0, 0.55);
        display: flex;
        inset: 0;
        justify-content: center;
        padding: 16px;
        position: fixed;
        z-index: 9999;
      }
      .stbc-modal-card {
        background: var(--ha-card-background, var(--card-background-color, var(--primary-background-color, #1c1c1c)));
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
        box-sizing: border-box;
        max-width: 460px;
        padding: 20px;
        width: 100%;
      }
      .confirm-callout {
        align-items: flex-start;
        background: rgba(255, 167, 38, 0.12);
        border-left: 3px solid var(--warning-color, #ffa726);
        border-radius: 8px;
        box-sizing: border-box;
        display: flex;
        gap: 10px;
        margin-bottom: 4px;
        padding: 14px 16px;
        width: 100%;
      }
      .confirm-callout ha-icon {
        --mdc-icon-size: 22px;
        color: var(--warning-color, #ffa726);
        flex-shrink: 0;
        margin-top: 1px;
      }
      .confirm-callout span {
        color: var(--primary-text-color);
        font-size: 0.92em;
        line-height: 1.45;
      }
    `;}constructor(){const _0x5b22e4=_0x1522fd;super(),this[_0x5b22e4(0x266)]=null,this[_0x5b22e4(0x263)]=0x3e8,this[_0x5b22e4(0x21a)]=![],this['__lastOffAt']=new Map(),this[_0x5b22e4(0x2ca)]=0x9c4,this[_0x5b22e4(0x310)]=new Set(),this['__durationOverrides']=new Map(),this[_0x5b22e4(0x296)]=_0x5b22e4(0x291),this[_0x5b22e4(0x21f)](),this['__armedTimers']=new Map(),this[_0x5b22e4(0x2f0)]=_0x5b22e4(0x2bf),this[_0x5b22e4(0x20d)](),this[_0x5b22e4(0x2ff)]=![],this['_startConfirm']=null,this[_0x5b22e4(0x2b2)]=_0x5c8fc4=>{const _0xf9643d=_0x5b22e4;if(_0x5c8fc4[_0xf9643d(0x322)]===_0xf9643d(0x313)&&this['_startConfirm'])this[_0xf9643d(0x304)]();},this[_0x5b22e4(0x2e7)]=null;}[_0x1522fd(0x21f)](){const _0x34c956=_0x1522fd;try{const _0x6939c5=window[_0x34c956(0x20b)]?.['getItem'](this[_0x34c956(0x296)]);if(!_0x6939c5)return;const _0xa3ce1c=JSON['parse'](_0x6939c5);_0xa3ce1c&&typeof _0xa3ce1c===_0x34c956(0x265)&&(this[_0x34c956(0x2cf)]=new Map(Object[_0x34c956(0x1ff)](_0xa3ce1c)));}catch(_0x55a963){}}['_saveDurationOverrides'](){const _0xdbb688=_0x1522fd;try{const _0x30c6aa=Object[_0xdbb688(0x275)](this[_0xdbb688(0x2cf)]);window[_0xdbb688(0x20b)]?.[_0xdbb688(0x24c)](this[_0xdbb688(0x296)],JSON['stringify'](_0x30c6aa));}catch(_0xe69725){}}[_0x1522fd(0x20d)](){const _0x12ab6f=_0x1522fd;try{const _0xfa16e3=window['localStorage']?.[_0x12ab6f(0x24a)](this[_0x12ab6f(0x2f0)]);if(!_0xfa16e3)return;const _0x133ad9=JSON[_0x12ab6f(0x270)](_0xfa16e3);_0x133ad9&&typeof _0x133ad9==='object'&&(this['__armedTimers']=new Map(Object[_0x12ab6f(0x1ff)](_0x133ad9)));}catch(_0x2495e6){}}[_0x1522fd(0x244)](){const _0x59e1ad=_0x1522fd;try{const _0x299848=Object['fromEntries'](this[_0x59e1ad(0x314)]);window[_0x59e1ad(0x20b)]?.[_0x59e1ad(0x24c)](this[_0x59e1ad(0x2f0)],JSON['stringify'](_0x299848));}catch(_0x8ebf9d){}}[_0x1522fd(0x2a8)](_0x2d6ed4,_0x3be9dc,_0x31e50e){const _0x2cd032=_0x1522fd;if(!_0x2d6ed4||!_0x3be9dc)return;const _0x105f89=Number[_0x2cd032(0x219)](_0x31e50e)?_0x31e50e:null,_0x4016ed=this[_0x2cd032(0x314)][_0x2cd032(0x1df)](_0x2d6ed4);if(_0x4016ed&&_0x4016ed[_0x2cd032(0x1e8)]===_0x3be9dc&&_0x4016ed[_0x2cd032(0x1ed)]===_0x105f89)return;this[_0x2cd032(0x314)][_0x2cd032(0x31d)](_0x2d6ed4,{'switch':_0x3be9dc,'finishesAt':_0x105f89}),this[_0x2cd032(0x244)]();}[_0x1522fd(0x2e1)](_0x4e38d8){const _0x41c9e1=_0x1522fd;if(!_0x4e38d8||!this['__armedTimers'][_0x41c9e1(0x2fe)](_0x4e38d8))return;this[_0x41c9e1(0x314)][_0x41c9e1(0x30b)](_0x4e38d8),this[_0x41c9e1(0x244)]();}['_maybeReconcile'](){const _0x4c3bf6=_0x1522fd;if(this[_0x4c3bf6(0x2ff)])return;if(!this['hass']||!this[_0x4c3bf6(0x2dd)]?.[_0x4c3bf6(0x245)])return;this[_0x4c3bf6(0x2ff)]=!![],this[_0x4c3bf6(0x23d)]();}['_reconcileMissedTimers'](){const _0x1a19d1=_0x1522fd;if(!this[_0x1a19d1(0x230)]||!this[_0x1a19d1(0x314)][_0x1a19d1(0x26c)])return;const _0x4d4788=this['hass']['states']||{},_0x513e41=new Map();for(const _0x210a18 of this[_0x1a19d1(0x2dd)]?.[_0x1a19d1(0x245)]||[]){if(_0x210a18[_0x1a19d1(0x2d9)])continue;if(_0x210a18[_0x1a19d1(0x1e4)]&&_0x210a18[_0x1a19d1(0x1e8)])_0x513e41['set'](_0x210a18[_0x1a19d1(0x1e4)],_0x210a18);}let _0x330ac5=![];for(const [_0x2965e3,_0x4dafb8]of[...this[_0x1a19d1(0x314)]['entries']()]){const _0x3e68ab=_0x513e41[_0x1a19d1(0x1df)](_0x2965e3),_0x5a0ed7=_0x4d4788[_0x2965e3];if(!_0x3e68ab||!_0x5a0ed7){this['__armedTimers'][_0x1a19d1(0x30b)](_0x2965e3),_0x330ac5=!![];continue;}const _0x5b1ac0=_0x5a0ed7[_0x1a19d1(0x2b8)];if(_0x5b1ac0===_0x1a19d1(0x2d3)||_0x5b1ac0==='paused'){if(_0x5b1ac0==='active'){const _0xbbfcbd=Date[_0x1a19d1(0x270)](_0x5a0ed7[_0x1a19d1(0x23e)]?.[_0x1a19d1(0x2eb)]||''),_0x4e32a5=Number[_0x1a19d1(0x219)](_0xbbfcbd)?_0xbbfcbd:null;_0x4dafb8['finishesAt']!==_0x4e32a5&&(this['__armedTimers']['set'](_0x2965e3,{'switch':_0x3e68ab[_0x1a19d1(0x1e8)],'finishesAt':_0x4e32a5}),_0x330ac5=!![]);}continue;}const _0x21ac56=_0x3e68ab[_0x1a19d1(0x1e8)],_0x132186=_0x4d4788[_0x21ac56];if(_0x132186&&this['_isActive'](_0x132186)){let _0x3eeb88=![];this['__sharedSwitches'][_0x1a19d1(0x2fe)](_0x21ac56)&&(_0x3eeb88=(this[_0x1a19d1(0x2dd)][_0x1a19d1(0x245)]||[])[_0x1a19d1(0x2ea)](_0xa98014=>_0xa98014[_0x1a19d1(0x1e8)]===_0x21ac56&&_0xa98014['timer']&&_0xa98014[_0x1a19d1(0x1e4)]!==_0x2965e3&&_0x4d4788[_0xa98014['timer']]?.[_0x1a19d1(0x2b8)]==='active'));if(!_0x3eeb88){const _0x5a1a3b=Date[_0x1a19d1(0x261)](),_0x57e253=this['__lastOffAt'][_0x1a19d1(0x1df)](_0x21ac56)||0x0;_0x5a1a3b-_0x57e253>=this['__offDebounceMs']&&(this['__lastOffAt'][_0x1a19d1(0x31d)](_0x21ac56,_0x5a1a3b),this[_0x1a19d1(0x20a)](_0x21ac56,_0x1a19d1(0x300)));}}this[_0x1a19d1(0x314)][_0x1a19d1(0x30b)](_0x2965e3),_0x330ac5=!![];}if(_0x330ac5)this['_saveArmedTimers']();}['setConfig'](_0x38b2af){const _0x2c4220=_0x1522fd;if(!_0x38b2af)throw new Error(_0x2c4220(0x209));const _0x375a1e=SwitchAndTimerBarCard[_0x2c4220(0x2e5)],_0x5e1b4f=JSON[_0x2c4220(0x270)](JSON[_0x2c4220(0x2a2)](_0x38b2af));(!_0x5e1b4f[_0x2c4220(0x245)]||!Array['isArray'](_0x5e1b4f['entities']))&&(console['warn'](_0x2c4220(0x2b4)),_0x5e1b4f[_0x2c4220(0x245)]=[]);_0x5e1b4f['entities'][_0x2c4220(0x1fd)](_0x2bf503=>{const _0x26e8d6=_0x2c4220;_0x2bf503[_0x26e8d6(0x2d9)]===undefined&&(_0x2bf503[_0x26e8d6(0x2d9)]=!![]);}),this[_0x2c4220(0x2dd)]={..._0x375a1e,..._0x5e1b4f,'colors':{..._0x375a1e['colors'],..._0x5e1b4f[_0x2c4220(0x2da)]||{}},'icons':{..._0x375a1e[_0x2c4220(0x232)],..._0x5e1b4f[_0x2c4220(0x232)]||{}},'labels':{..._0x375a1e[_0x2c4220(0x2f3)],..._0x5e1b4f[_0x2c4220(0x2f3)]||{}}};const _0x5bfb67=new Map();for(const _0x1ea9f5 of this[_0x2c4220(0x2dd)][_0x2c4220(0x245)]){if(_0x1ea9f5[_0x2c4220(0x1e8)])_0x5bfb67[_0x2c4220(0x31d)](_0x1ea9f5[_0x2c4220(0x1e8)],(_0x5bfb67['get'](_0x1ea9f5[_0x2c4220(0x1e8)])||0x0)+0x1);}this[_0x2c4220(0x310)]=new Set(Array['from'](_0x5bfb67[_0x2c4220(0x1ff)]())[_0x2c4220(0x2b9)](([,_0x5f57f0])=>_0x5f57f0>0x1)[_0x2c4220(0x225)](([_0x8e7a5c])=>_0x8e7a5c)),this[_0x2c4220(0x224)]();}[_0x1522fd(0x26e)](){const _0x384aa5=_0x1522fd;super[_0x384aa5(0x26e)]?.(),this[_0x384aa5(0x224)](),this[_0x384aa5(0x287)](),window[_0x384aa5(0x247)](_0x384aa5(0x227),this[_0x384aa5(0x2b2)]);}[_0x1522fd(0x32d)](){const _0x226dec=_0x1522fd;super[_0x226dec(0x32d)]?.(),this[_0x226dec(0x21d)](),window[_0x226dec(0x312)](_0x226dec(0x227),this[_0x226dec(0x2b2)]),this[_0x226dec(0x2ff)]=![];}['updated'](_0x3eaa7f){const _0x48f27b=_0x1522fd;if(_0x3eaa7f[_0x48f27b(0x2fe)]('hass')){this[_0x48f27b(0x224)](),this[_0x48f27b(0x287)]();if(!this['_config']?.[_0x48f27b(0x245)])return;const _0x45c221=_0x3eaa7f[_0x48f27b(0x1df)](_0x48f27b(0x230));for(const _0x30f336 of this[_0x48f27b(0x2dd)][_0x48f27b(0x245)]){if(_0x30f336['timer_and_entity_connected_via_automation'])continue;const _0x3690d2=_0x30f336[_0x48f27b(0x1e4)],_0x45ad3c=_0x30f336[_0x48f27b(0x1e8)];if(!_0x3690d2||!_0x45ad3c)continue;const _0x533497=this['hass']?.['states']?.[_0x3690d2],_0x375de7=this[_0x48f27b(0x230)]?.[_0x48f27b(0x215)]?.[_0x45ad3c];if(!_0x533497)continue;if(_0x533497[_0x48f27b(0x2b8)]===_0x48f27b(0x2d3)){const _0x442397=Date['parse'](_0x533497[_0x48f27b(0x23e)]?.['finishes_at']||'');this[_0x48f27b(0x2a8)](_0x3690d2,_0x45ad3c,_0x442397);}const _0x363d82=_0x45c221?.[_0x48f27b(0x215)]?.[_0x3690d2];if(!_0x363d82)continue;if(_0x363d82[_0x48f27b(0x2b8)]===_0x48f27b(0x2d3)&&_0x533497[_0x48f27b(0x2b8)]===_0x48f27b(0x2d0)){this[_0x48f27b(0x2e1)](_0x3690d2);if(!_0x375de7)continue;if(!this[_0x48f27b(0x1fa)](_0x375de7))continue;if(this[_0x48f27b(0x310)][_0x48f27b(0x2fe)](_0x45ad3c)){const _0x30d285=this[_0x48f27b(0x2dd)][_0x48f27b(0x245)][_0x48f27b(0x2ea)](_0x557bd2=>_0x557bd2[_0x48f27b(0x1e8)]===_0x45ad3c&&_0x557bd2[_0x48f27b(0x1e4)]&&_0x557bd2[_0x48f27b(0x1e4)]!==_0x3690d2&&this[_0x48f27b(0x230)][_0x48f27b(0x215)]?.[_0x557bd2[_0x48f27b(0x1e4)]]?.[_0x48f27b(0x2b8)]===_0x48f27b(0x2d3));if(_0x30d285)continue;}const _0x2eb02e=Date[_0x48f27b(0x261)](),_0x318f29=this[_0x48f27b(0x267)]['get'](_0x45ad3c)||0x0;if(_0x2eb02e-_0x318f29<this[_0x48f27b(0x2ca)])continue;this[_0x48f27b(0x267)]['set'](_0x45ad3c,_0x2eb02e),this[_0x48f27b(0x20a)](_0x45ad3c,_0x48f27b(0x300));}}}}[_0x1522fd(0x279)](){const _0x208475=_0x1522fd;if(this['__interval'])return;this['__interval']=setInterval(()=>{const _0x57482c=_0x33d2;this['_timer']=Date[_0x57482c(0x261)]();},this[_0x208475(0x263)]);}[_0x1522fd(0x21d)](){const _0x7c6ff4=_0x1522fd;if(!this[_0x7c6ff4(0x266)])return;clearInterval(this[_0x7c6ff4(0x266)]),this[_0x7c6ff4(0x266)]=null;}[_0x1522fd(0x224)](){const _0x301841=_0x1522fd;if(!this[_0x301841(0x230)]||!this['_config']?.[_0x301841(0x245)]?.[_0x301841(0x260)]){this[_0x301841(0x21a)]=![],this[_0x301841(0x21d)]();return;}const _0x30bcc5=this[_0x301841(0x230)][_0x301841(0x215)]||{};let _0x463828=![];for(const _0x5c1b02 of this[_0x301841(0x2dd)][_0x301841(0x245)]){const _0x5a842e=_0x5c1b02[_0x301841(0x1e8)];if(!_0x5a842e)continue;const _0x1c8f2b=_0x5c1b02[_0x301841(0x1e4)],_0x4ca121=_0x1c8f2b?_0x30bcc5[_0x1c8f2b]:null;if(this['__sharedSwitches'][_0x301841(0x2fe)](_0x5a842e)){if(_0x4ca121&&_0x4ca121['state']===_0x301841(0x2d3)){_0x463828=!![];break;}continue;}const _0x35b50f=_0x30bcc5[_0x5a842e];if(_0x35b50f&&this['_isActive'](_0x35b50f)){_0x463828=!![];break;}if(_0x4ca121&&_0x4ca121['state']==='active'){_0x463828=!![];break;}}this[_0x301841(0x21a)]=_0x463828;if(_0x463828)this[_0x301841(0x279)]();else this['__stopTick']();}['_getEffectiveDuration'](_0x2150c5,_0x5b463b){const _0x581d81=_0x1522fd,_0x137749=_0x2150c5?.['timer'];if(_0x137749&&this[_0x581d81(0x2cf)]['has'](_0x137749)){const _0x3a9c7a=Number(this[_0x581d81(0x2cf)][_0x581d81(0x1df)](_0x137749));if(Number[_0x581d81(0x219)](_0x3a9c7a)&&_0x3a9c7a>=0x0)return _0x3a9c7a;}if(_0x2150c5&&_0x2150c5['duration']!==undefined&&_0x2150c5[_0x581d81(0x2c3)]!==null&&_0x2150c5['duration']!==''){const _0x553ca3=this[_0x581d81(0x254)](_0x2150c5[_0x581d81(0x2c3)]);if(_0x553ca3>0x0)return _0x553ca3;}return this[_0x581d81(0x254)](_0x5b463b?.[_0x581d81(0x23e)]?.['duration']);}[_0x1522fd(0x226)](_0x520482){const _0x4405c0=_0x1522fd,_0x438649=_0x520482?.['timer'];if(_0x438649&&this[_0x4405c0(0x2cf)][_0x4405c0(0x2fe)](_0x438649))return!![];if(_0x520482?.['duration']!==undefined&&_0x520482[_0x4405c0(0x2c3)]!==null&&_0x520482[_0x4405c0(0x2c3)]!=='')return!![];return![];}[_0x1522fd(0x319)](_0x423dba){const _0x48665f=_0x1522fd;return!!(_0x423dba&&this['__durationOverrides'][_0x48665f(0x2fe)](_0x423dba));}[_0x1522fd(0x29a)](_0xff2112){const _0x32a878=_0x1522fd,_0x6250d=Math[_0x32a878(0x2a7)](0x0,Math[_0x32a878(0x200)](Number(_0xff2112)||0x0)),_0x37fe10=Math[_0x32a878(0x200)](_0x6250d/0xe10),_0x39acbf=Math[_0x32a878(0x200)](_0x6250d%0xe10/0x3c),_0x4600b1=_0x6250d%0x3c,_0x57a2ca=_0x537011=>String(_0x537011)['padStart'](0x2,'0');return _0x57a2ca(_0x37fe10)+':'+_0x57a2ca(_0x39acbf)+':'+_0x57a2ca(_0x4600b1);}['_openDurationEditor'](_0x449f6e,_0x21e8a0,_0x1b5988){const _0x3fbf28=_0x1522fd;if(!_0x21e8a0)return;const _0x2c5b9c=Math[_0x3fbf28(0x2a7)](0x0,Math[_0x3fbf28(0x200)](Number(_0x1b5988)||0x0));this[_0x3fbf28(0x2e7)]={'open':!![],'timerEntity':_0x21e8a0,'h':Math['floor'](_0x2c5b9c/0xe10),'m':Math[_0x3fbf28(0x200)](_0x2c5b9c%0xe10/0x3c),'s':_0x2c5b9c%0x3c,'hasOverride':this['_hasUIDurationOverride'](_0x21e8a0)};}[_0x1522fd(0x1ee)](){const _0x38490c=_0x1522fd;this[_0x38490c(0x2e7)]=null;}['_onDurationFieldChange'](_0x308479,_0x232a74){const _0x3ea3ef=_0x1522fd;if(!this['_durationEditor'])return;let _0x45175a=parseInt(_0x232a74,0xa);if(!Number['isFinite'](_0x45175a)||_0x45175a<0x0)_0x45175a=0x0;if(_0x308479==='m'||_0x308479==='s')_0x45175a=Math[_0x3ea3ef(0x273)](_0x45175a,0x3b);if(_0x308479==='h')_0x45175a=Math[_0x3ea3ef(0x273)](_0x45175a,0x63);this[_0x3ea3ef(0x2e7)]={...this[_0x3ea3ef(0x2e7)],[_0x308479]:_0x45175a};}[_0x1522fd(0x27c)](){const _0x422185=_0x1522fd;if(!this[_0x422185(0x2e7)])return;const {timerEntity:_0xf392e0,h:_0x486f2b,m:_0x3c3428,s:_0x2d5e33}=this[_0x422185(0x2e7)],_0x7091fd=_0x486f2b*0xe10+_0x3c3428*0x3c+_0x2d5e33;_0xf392e0&&_0x7091fd>0x0&&(this[_0x422185(0x2cf)]['set'](_0xf392e0,_0x7091fd),this[_0x422185(0x2a6)]()),this[_0x422185(0x2e7)]=null,this[_0x422185(0x224)]();}[_0x1522fd(0x2ed)](){const _0x49596b=_0x1522fd;if(!this[_0x49596b(0x2e7)])return;const {timerEntity:_0x34efa9}=this[_0x49596b(0x2e7)];_0x34efa9&&this[_0x49596b(0x2cf)][_0x49596b(0x2fe)](_0x34efa9)&&(this[_0x49596b(0x2cf)][_0x49596b(0x30b)](_0x34efa9),this[_0x49596b(0x2a6)]()),this[_0x49596b(0x2e7)]=null;}[_0x1522fd(0x20a)](_0x13ab4a,_0x1b3eab){const _0x283443=_0x1522fd;if(!this[_0x283443(0x230)]||!_0x13ab4a)return;const _0x2add81=_0x13ab4a[_0x283443(0x298)]('.')[0x0];let _0x15bbcc;switch(_0x2add81){case _0x283443(0x1e6):_0x15bbcc=_0x1b3eab==='on'?_0x283443(0x32a):_0x283443(0x2de);break;case _0x283443(0x204):_0x15bbcc=_0x1b3eab==='on'?_0x283443(0x1dc):_0x283443(0x25f);break;case _0x283443(0x264):_0x15bbcc=_0x1b3eab==='on'?'lock':_0x283443(0x1eb);break;default:_0x15bbcc=_0x1b3eab==='on'?'turn_on':'turn_off';break;}this[_0x283443(0x230)][_0x283443(0x1e0)](_0x2add81,_0x15bbcc,{'entity_id':_0x13ab4a});}[_0x1522fd(0x1fa)](_0x12765b){const _0x2e30fc=_0x1522fd;if(!_0x12765b)return![];const _0x1b4d95=_0x12765b[_0x2e30fc(0x21c)][_0x2e30fc(0x298)]('.')[0x0],_0x359856=_0x12765b['state'];switch(_0x1b4d95){case _0x2e30fc(0x1e6):return _0x359856===_0x2e30fc(0x2fc);case _0x2e30fc(0x204):return _0x359856===_0x2e30fc(0x26f)||_0x359856===_0x2e30fc(0x317);case'lock':return _0x359856===_0x2e30fc(0x2fd);case _0x2e30fc(0x28d):return[_0x2e30fc(0x30f),_0x2e30fc(0x203),'on'][_0x2e30fc(0x1ea)](_0x359856);default:return _0x359856==='on';}}[_0x1522fd(0x210)](){const _0x305246=_0x1522fd;if(!HaLitBase||!haHtml)return'';if(!this[_0x305246(0x230)]||!this['_config'])return haHtml``;const _0xaef255=Date[_0x305246(0x261)]();return haHtml`
      <ha-card>
        ${this[_0x305246(0x2dd)]['title']?haHtml`<div class="card-header">${this[_0x305246(0x2dd)][_0x305246(0x32b)]}</div>`:''}
        <div class="container">
          ${this['_config']['entities']&&this[_0x305246(0x2dd)][_0x305246(0x245)][_0x305246(0x225)](_0x4d4f62=>this['renderEntity'](_0x4d4f62,_0xaef255))}
        </div>
      </ha-card>
      ${this[_0x305246(0x216)]()}
      ${this['_renderStartConfirmDialog']()}
    `;}['_renderStartConfirmDialog'](){const _0x58c156=_0x1522fd;if(!this[_0x58c156(0x269)])return'';const _0x48c26e=this[_0x58c156(0x2dd)]?.[_0x58c156(0x2f3)]||{};return haHtml`
      <div class="stbc-modal" @click=${()=>this[_0x58c156(0x304)]()}>
        <div class="stbc-modal-card" @click=${_0x241e3c=>_0x241e3c[_0x58c156(0x231)]()}>
          <div class="confirm-callout">
            <ha-icon icon="mdi:alert-outline"></ha-icon>
            <span>${_0x48c26e[_0x58c156(0x262)]||_0x58c156(0x272)}</span>
          </div>
          <div class="duration-actions">
            <button
              class="dlg-btn dlg-btn-text"
              @click=${()=>this[_0x58c156(0x304)]()}
            >${_0x48c26e[_0x58c156(0x2d7)]||'Cancel'}</button>
            <button
              class="dlg-btn dlg-btn-primary"
              @click=${()=>this['_confirmStart']()}
            >${_0x48c26e[_0x58c156(0x29c)]||_0x58c156(0x30a)}</button>
          </div>
        </div>
      </div>
    `;}[_0x1522fd(0x216)](){const _0x3c72b7=_0x1522fd;if(!this[_0x3c72b7(0x2e7)]||!this[_0x3c72b7(0x2e7)][_0x3c72b7(0x26f)])return'';const _0x12ddee=this[_0x3c72b7(0x2dd)]?.[_0x3c72b7(0x2f3)]||{},_0x5048bd=this[_0x3c72b7(0x2e7)];return haHtml`
      <ha-dialog
        open
        hideActions
        heading="${_0x12ddee['edit_duration_title']||_0x3c72b7(0x239)}"
        @closed=${()=>this[_0x3c72b7(0x1ee)]()}
      >
        <div class="duration-dialog-body">
          <div class="duration-fields">
            <label class="duration-field">
              <span class="duration-field-label">${_0x12ddee[_0x3c72b7(0x27d)]||'Hours'}</span>
              <input
                type="number"
                min="0"
                max="99"
                inputmode="numeric"
                .value=${String(_0x5048bd['h'])}
                @input=${_0x56fb67=>this[_0x3c72b7(0x1f9)]('h',_0x56fb67[_0x3c72b7(0x241)]['value'])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0x12ddee[_0x3c72b7(0x327)]||_0x3c72b7(0x2cd)}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x5048bd['m'])}
                @input=${_0x2c6b10=>this[_0x3c72b7(0x1f9)]('m',_0x2c6b10[_0x3c72b7(0x241)]['value'])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0x12ddee[_0x3c72b7(0x22e)]||_0x3c72b7(0x286)}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x5048bd['s'])}
                @input=${_0x16d69f=>this[_0x3c72b7(0x1f9)]('s',_0x16d69f[_0x3c72b7(0x241)]['value'])}
              />
            </label>
          </div>
          <div class="duration-actions">
            <button
              class="dlg-btn dlg-btn-text"
              @click=${()=>this[_0x3c72b7(0x1ee)]()}
            >${_0x12ddee['edit_duration_cancel']||_0x3c72b7(0x206)}</button>
            ${_0x5048bd['hasOverride']?haHtml`<button
                  class="dlg-btn dlg-btn-text dlg-btn-reset"
                  @click=${()=>this[_0x3c72b7(0x2ed)]()}
                >${_0x12ddee['edit_duration_reset']||_0x3c72b7(0x1f2)}</button>`:''}
            <button
              class="dlg-btn dlg-btn-primary"
              @click=${()=>this['_applyDurationEditor']()}
            >${_0x12ddee[_0x3c72b7(0x31b)]||_0x3c72b7(0x2d4)}</button>
          </div>
        </div>
      </ha-dialog>
    `;}[_0x1522fd(0x201)](_0x1ffc2a,_0x36261e){const _0x4b8761=_0x1522fd,_0x278b49=_0x1ffc2a[_0x4b8761(0x1e8)],_0x556868=_0x1ffc2a[_0x4b8761(0x1e4)],_0x562ec0=_0x1ffc2a[_0x4b8761(0x25c)],_0x1ef220=_0x1ffc2a[_0x4b8761(0x2db)];if(!_0x278b49)return haHtml`<div class="warning">Entity 'switch' is not defined.</div>`;const _0x28ae59=this['hass'][_0x4b8761(0x215)]||{},_0xc02af2=_0x28ae59[_0x278b49],_0x1e9158=_0x556868?_0x28ae59[_0x556868]:undefined,_0x316765=_0x562ec0?_0x28ae59[_0x562ec0]:undefined;let _0x34f93d;if(typeof _0x1ef220===_0x4b8761(0x217)&&_0x28ae59[_0x1ef220])_0x34f93d=_0x28ae59[_0x1ef220];else _0x1ef220!==undefined&&_0x1ef220!==null&&_0x1ef220!==''&&Number['isFinite'](Number(_0x1ef220))?_0x34f93d={'state':String(Number(_0x1ef220)),'attributes':{'unit_of_measurement':'%'}}:_0x34f93d=undefined;if(!_0xc02af2)return haHtml`<div class="warning">Entity not found: ${_0x278b49}</div>`;const _0x439c67=this[_0x4b8761(0x1fa)](_0xc02af2),_0x6fa12=[_0x4b8761(0x326),_0x4b8761(0x1f1)][_0x4b8761(0x1ea)](_0xc02af2['state']),_0x1998f5=_0x1ffc2a['button_position']||this[_0x4b8761(0x2dd)][_0x4b8761(0x2f5)],_0x1bf7d1=this[_0x4b8761(0x310)][_0x4b8761(0x2fe)](_0x278b49),_0x59db91=_0x1bf7d1&&_0x1e9158?_0x1e9158['state']===_0x4b8761(0x2d3):_0x439c67,_0x24aad={...this[_0x4b8761(0x2dd)]['colors'],..._0x1ffc2a[_0x4b8761(0x2da)]||{}},_0x1a9cab={...this['_config'][_0x4b8761(0x232)],..._0x1ffc2a[_0x4b8761(0x232)]||{}},_0x57e52d={...this[_0x4b8761(0x2dd)][_0x4b8761(0x2f3)],..._0x1ffc2a['labels']||{}},_0x5d90ba=this[_0x4b8761(0x254)](_0x1e9158?.['attributes']?.[_0x4b8761(0x2c3)]),_0x136dbd=_0x1e9158?.[_0x4b8761(0x2b8)]==='active',_0x21f246=_0x136dbd?_0x5d90ba:this[_0x4b8761(0x31f)](_0x1ffc2a,_0x1e9158),_0x52b0d1=_0x1ffc2a[_0x4b8761(0x25b)]!==undefined?!!_0x1ffc2a['editable_duration']:!!this[_0x4b8761(0x2dd)][_0x4b8761(0x25b)],_0x34b70d=_0x52b0d1&&!!_0x556868&&!_0x59db91;let _0xe721c1=0x0;if(_0x439c67){const _0x46563f=Date[_0x4b8761(0x270)](_0xc02af2[_0x4b8761(0x2f1)]);!Number[_0x4b8761(0x29b)](_0x46563f)&&(_0xe721c1=Math[_0x4b8761(0x273)]((_0x36261e-_0x46563f)/0x3e8,0x708));}let _0x347712=0x0;if(_0x1e9158?.['state']===_0x4b8761(0x2d3)&&_0x21f246>0x0){const _0x2b4960=Date['parse'](_0x1e9158[_0x4b8761(0x2f1)]),_0x4296af=(Number[_0x4b8761(0x29b)](_0x2b4960)?_0x36261e:_0x2b4960)+_0x21f246*0x3e8,_0x2128cc=Math[_0x4b8761(0x2a7)](0x0,(_0x4296af-_0x36261e)/0x3e8);_0x347712=Math[_0x4b8761(0x2a7)](0x0,_0x21f246-_0x2128cc);}else _0x59db91&&(_0x347712=_0xe721c1);const _0x540eae=this[_0x4b8761(0x2c9)](_0x347712,_0x21f246);let _0xbaf08d=_0x4b8761(0x2c2)+_0x24aad[_0x4b8761(0x1f7)]+';';if(_0x6fa12)_0xbaf08d=_0x4b8761(0x2c2)+_0x24aad[_0x4b8761(0x326)]+';';else{if(_0x59db91)_0xbaf08d=_0x4b8761(0x2c2)+_0x24aad['on']+';';}const _0x102766=_0x4b8761(0x2c2)+_0x24aad[_0x4b8761(0x2a4)]+';',_0x2ee8b7=_0x4b8761(0x2c2)+_0x24aad[_0x4b8761(0x2c8)]+';',_0x45dacf='color:\x20'+_0x24aad['icon']+';',_0x48ad4a=haHtml`
      <div class="timer-controls">
        ${!_0x59db91&&_0x556868?haHtml`<button
              class="control-btn start"
              style="${_0x102766}"
              @click=${()=>this[_0x4b8761(0x2b0)](_0x556868,_0x278b49,_0x1ffc2a,_0x21f246)}
            >
              <ha-icon icon="${_0x1a9cab[_0x4b8761(0x1f5)]}" style="${_0x45dacf}"></ha-icon>
            </button>`:''}
        ${_0x59db91&&_0x556868?haHtml`<button
              class="control-btn stop"
              style="${_0x2ee8b7}"
              @click=${()=>this['_handleStop'](_0x556868,_0x278b49,_0x1ffc2a)}
            >
              <ha-icon icon="${_0x1a9cab[_0x4b8761(0x21e)]}" style="${_0x45dacf}"></ha-icon>
            </button>`:''}
      </div>
    `,_0x34dab8=this['formatTime'](_0x347712,_0x57e52d)+'\x20/\x20'+this[_0x4b8761(0x328)](_0x21f246,_0x57e52d),_0x103cce=_0x34b70d?haHtml`<span
          class="duration-editable"
          title="${_0x57e52d['edit_duration_tooltip']}"
          @click=${()=>this[_0x4b8761(0x1f0)](_0x1ffc2a,_0x556868,_0x21f246)}
        >
          ${_0x34dab8}
          <ha-icon icon="mdi:pencil" class="edit-icon"></ha-icon>
        </span>`:haHtml`<span>${_0x34dab8}</span>`;return haHtml`
      <div class="entity-card">
        <div class="header">
          <div class="title" style="${_0x59db91?_0x4b8761(0x299)+_0x24aad['on']:''}">
            ${_0x1ffc2a[_0x4b8761(0x22c)]||_0xc02af2['attributes'][_0x4b8761(0x2a5)]||_0x278b49}
            ${this['_renderBattery'](_0x34f93d)}
          </div>
          <div class="status" style="${_0xbaf08d}">
            ${this[_0x4b8761(0x1ef)](_0xc02af2,_0x1e9158,_0x57e52d,_0x59db91)}
          </div>
        </div>

        <div class="control-wrapper ${_0x1998f5}">
          ${_0x1998f5===_0x4b8761(0x20f)?_0x48ad4a:''}
          <div class="timeline-container">
            <div class="progress-bar">
              <div
                class="progress-fill"
                style="width: ${_0x540eae}%; background-color: ${_0x24aad[_0x4b8761(0x2a9)]};"
              ></div>
            </div>
            <div class="time-info">
              <span>${this[_0x4b8761(0x2c0)](_0x316765,_0xc02af2,_0x57e52d,_0x36261e,_0x59db91)}</span>
              ${_0x103cce}
            </div>
          </div>
          ${_0x1998f5===_0x4b8761(0x2ae)?_0x48ad4a:''}
        </div>
      </div>
    `;}async['_handleStart'](_0x2a1d14,_0x38f603,_0x35c360,_0x198963){const _0x2743e9=_0x1522fd,_0x2f1653=!_0x35c360?.['timer_and_entity_connected_via_automation']&&_0x2a1d14;if(_0x2f1653){this[_0x2743e9(0x269)]={'timerEntity':_0x2a1d14,'controllableEntity':_0x38f603,'entityConfig':_0x35c360,'totalDuration':_0x198963};return;}this['_performStart'](_0x2a1d14,_0x38f603,_0x35c360,_0x198963);}[_0x1522fd(0x325)](){const _0x2c1ff4=_0x1522fd,_0x287a43=this[_0x2c1ff4(0x269)];this['_startConfirm']=null;if(!_0x287a43)return;this[_0x2c1ff4(0x280)](_0x287a43[_0x2c1ff4(0x28f)],_0x287a43[_0x2c1ff4(0x2b7)],_0x287a43[_0x2c1ff4(0x218)],_0x287a43[_0x2c1ff4(0x306)]);}['_cancelStart'](){const _0x3fd7c4=_0x1522fd;this[_0x3fd7c4(0x269)]=null;}[_0x1522fd(0x280)](_0x13b793,_0x5b7682,_0x2362df,_0x229aac){const _0x17dffb=_0x1522fd;if(!_0x2362df[_0x17dffb(0x2d9)])this[_0x17dffb(0x20a)](_0x5b7682,'on');if(!_0x2362df[_0x17dffb(0x2d9)]&&_0x13b793&&_0x5b7682){const _0x101c5d=Number[_0x17dffb(0x219)](_0x229aac)&&_0x229aac>0x0?Date[_0x17dffb(0x261)]()+_0x229aac*0x3e8:null;this[_0x17dffb(0x2a8)](_0x13b793,_0x5b7682,_0x101c5d);}const _0x2e8def={'entity_id':_0x13b793};this[_0x17dffb(0x226)](_0x2362df)&&Number[_0x17dffb(0x219)](_0x229aac)&&_0x229aac>0x0&&(_0x2e8def[_0x17dffb(0x2c3)]=this[_0x17dffb(0x29a)](_0x229aac)),this['hass']['callService'](_0x17dffb(0x1e4),_0x17dffb(0x1f5),_0x2e8def);}async[_0x1522fd(0x295)](_0x23afe3,_0x59e385,_0x10027c){const _0x174514=_0x1522fd;this['_disarmTimer'](_0x23afe3);if(_0x23afe3)await this[_0x174514(0x230)]['callService'](_0x174514(0x1e4),'finish',{'entity_id':_0x23afe3});if(!_0x59e385)return;if(_0x10027c?.['timer_and_entity_connected_via_automation'])return;if(this[_0x174514(0x310)][_0x174514(0x2fe)](_0x59e385)){const _0x391438=this[_0x174514(0x2dd)]?.[_0x174514(0x245)]?.[_0x174514(0x2ea)](_0x4f0ee7=>_0x4f0ee7['switch']===_0x59e385&&_0x4f0ee7[_0x174514(0x1e4)]&&_0x4f0ee7[_0x174514(0x1e4)]!==_0x23afe3&&this[_0x174514(0x230)]['states']?.[_0x4f0ee7[_0x174514(0x1e4)]]?.[_0x174514(0x2b8)]===_0x174514(0x2d3));if(_0x391438)return;}this[_0x174514(0x20a)](_0x59e385,_0x174514(0x300));}[_0x1522fd(0x254)](_0x39fcc1){const _0x19161d=_0x1522fd;if(!_0x39fcc1)return 0x0;if(typeof _0x39fcc1===_0x19161d(0x217)&&_0x39fcc1[_0x19161d(0x1ea)](':')){const _0x35457e=_0x39fcc1['split'](':');if(_0x35457e['length']===0x3){const _0x35c79b=parseInt(_0x35457e[0x0],0xa),_0x42dc3a=parseInt(_0x35457e[0x1],0xa),_0x1f6915=parseInt(_0x35457e[0x2],0xa);return(Number[_0x19161d(0x29b)](_0x35c79b)?0x0:_0x35c79b)*0xe10+(Number[_0x19161d(0x29b)](_0x42dc3a)?0x0:_0x42dc3a)*0x3c+(Number[_0x19161d(0x29b)](_0x1f6915)?0x0:_0x1f6915);}}const _0x3728e7=typeof _0x39fcc1===_0x19161d(0x25e)?_0x39fcc1:parseFloat(_0x39fcc1);return Number[_0x19161d(0x219)](_0x3728e7)?_0x3728e7:0x0;}[_0x1522fd(0x2c9)](_0x3a820e,_0x17efb4){const _0x32a609=_0x1522fd;if(!(_0x17efb4>0x0))return 0x0;const _0x33ace8=_0x3a820e/_0x17efb4*0x64;return Math[_0x32a609(0x273)](0x64,Math[_0x32a609(0x2a7)](0x0,_0x33ace8));}[_0x1522fd(0x328)](_0x927fb1,_0x41b362){const _0x106973=_0x1522fd,_0xf0fad9=Number(_0x927fb1);if(!Number['isFinite'](_0xf0fad9)||_0xf0fad9<=0x0)return _0x41b362[_0x106973(0x2d5)];const _0x12bd5b=Math['floor'](_0xf0fad9/0x3c),_0x2a0c87=Math[_0x106973(0x200)](_0xf0fad9%0x3c);return''+_0x12bd5b+_0x41b362[_0x106973(0x2d6)]+'\x20'+String(_0x2a0c87)[_0x106973(0x229)](0x2,'0')+_0x41b362['time_unit_seconds'];}[_0x1522fd(0x288)](_0x1bafe4){const _0x250da3=_0x1522fd;if(!_0x1bafe4)return'';const _0x5b4e1f=_0x1bafe4[_0x250da3(0x2b8)];if(_0x5b4e1f==null||['unavailable',_0x250da3(0x1f1),''][_0x250da3(0x1ea)](String(_0x5b4e1f)))return'';const _0x3fbd1a=Number(_0x5b4e1f),_0x11b4a1=Number[_0x250da3(0x219)](_0x3fbd1a),_0x3c9e5f=_0x1bafe4[_0x250da3(0x23e)]?.[_0x250da3(0x2fb)]||(_0x11b4a1?'%':''),_0x5e63=_0x11b4a1?''+Math[_0x250da3(0x301)](_0x3fbd1a)+_0x3c9e5f:''+_0x5b4e1f+(_0x3c9e5f?'\x20'+_0x3c9e5f:''),_0x171081=_0x1bafe4['attributes']||{},_0x5c4124=_0x171081[_0x250da3(0x278)]===!![]||_0x171081[_0x250da3(0x2c6)]===!![]||[_0x250da3(0x2c6),'on'][_0x250da3(0x1ea)](String(_0x171081[_0x250da3(0x268)]??'')[_0x250da3(0x2d8)]());let _0x24551d=_0x250da3(0x290);if(_0x11b4a1){const _0x110a98=Math['max'](0x0,Math[_0x250da3(0x273)](0x64,_0x3fbd1a)),_0x4c0e95=Math[_0x250da3(0x301)](_0x110a98/0xa)*0xa;_0x5c4124?_0x24551d=_0x4c0e95<=0x0?'mdi:battery-charging-outline':_0x4c0e95>=0x64?_0x250da3(0x243):_0x250da3(0x237)+_0x4c0e95:_0x24551d=_0x4c0e95<=0x0?'mdi:battery-outline':_0x4c0e95>=0x64?'mdi:battery':_0x250da3(0x22a)+_0x4c0e95;}return haHtml`<span class="battery"><ha-icon icon="${_0x24551d}"></ha-icon>${_0x5e63}</span>`;}[_0x1522fd(0x1ef)](_0x28f74f,_0x1f4a71,_0x1964f3,_0x27ca60){const _0x226cfc=_0x1522fd;if(!_0x28f74f)return _0x1964f3[_0x226cfc(0x2a3)];if(['unavailable',_0x226cfc(0x1f1)][_0x226cfc(0x1ea)](_0x28f74f[_0x226cfc(0x2b8)]))return _0x1964f3[_0x226cfc(0x2a3)];const _0x58d0=_0x27ca60!==undefined?_0x27ca60:this['_isActive'](_0x28f74f);if(_0x58d0)return _0x1964f3[_0x226cfc(0x2f6)];return _0x1964f3[_0x226cfc(0x26d)];}[_0x1522fd(0x2c0)](_0x472678,_0x3aadb1,_0x3b3354,_0x1f3eb0,_0x5cd302){const _0x546dff=_0x1522fd,_0x6503e2=_0x5cd302!==undefined?_0x5cd302:this[_0x546dff(0x1fa)](_0x3aadb1);if(_0x6503e2)return _0x3b3354[_0x546dff(0x23a)];if(!_0x472678||!_0x472678['state'])return'';const _0x2d48f3=Date[_0x546dff(0x270)](_0x472678[_0x546dff(0x2b8)]);if(Number[_0x546dff(0x29b)](_0x2d48f3))return _0x472678[_0x546dff(0x2b8)];const _0x41841a=Math['floor']((_0x1f3eb0-_0x2d48f3)/0x3e8),_0x189f27=Math[_0x546dff(0x200)](_0x41841a/0x3c),_0x40ff25=Math[_0x546dff(0x200)](_0x189f27/0x3c),_0x57d12e=Math[_0x546dff(0x200)](_0x40ff25/0x18);if(_0x41841a<0x3c)return _0x3b3354[_0x546dff(0x2be)];if(_0x189f27<0x3c)return _0x189f27+'\x20'+_0x3b3354[_0x546dff(0x302)];if(_0x40ff25<0x18)return _0x40ff25+'\x20'+_0x3b3354[_0x546dff(0x1f3)];return _0x57d12e+'\x20'+_0x3b3354[_0x546dff(0x249)];}}customElements[_0x1522fd(0x27f)](_0x1522fd(0x2e6),SwitchAndTimerBarCard);class SwitchAndTimerBarCardEditor extends HaLitBase{static get[_0x1522fd(0x31a)](){return{'hass':{},'_config':{'state':!![]},'_expanded':{'state':!![]},'_dragOverIndex':{'state':!![]},'_showSensorHelp':{'state':!![]},'_mainTab':{'state':!![]},'_entityTabs':{'state':!![]}};}constructor(){const _0x3c8a8d=_0x1522fd;super(),this[_0x3c8a8d(0x242)]=new Map(),this[_0x3c8a8d(0x285)]=null,this['_expanded']={'global_overrides':![],'entities':![]},this[_0x3c8a8d(0x21b)]=null,this[_0x3c8a8d(0x2c4)]=null,this[_0x3c8a8d(0x316)]=![],this[_0x3c8a8d(0x2b3)]=_0x3c8a8d(0x2c1),this[_0x3c8a8d(0x2f7)]={},this[_0x3c8a8d(0x23f)]=_0x17a99d=>{const _0x53bb1d=_0x3c8a8d;if(_0x17a99d)_0x17a99d[_0x53bb1d(0x231)]();this[_0x53bb1d(0x316)]=!![];},this[_0x3c8a8d(0x293)]=()=>{const _0x2ee95f=_0x3c8a8d;this[_0x2ee95f(0x316)]=![];};}[_0x1522fd(0x1de)](_0xab284e){const _0x4f0b0d=_0x1522fd,_0x4704e6=JSON[_0x4f0b0d(0x270)](JSON[_0x4f0b0d(0x2a2)](_0xab284e||{}));if(!Array['isArray'](_0x4704e6['entities']))_0x4704e6['entities']=[];_0x4704e6[_0x4f0b0d(0x2da)]=_0x4704e6[_0x4f0b0d(0x2da)]||{},_0x4704e6['icons']=_0x4704e6[_0x4f0b0d(0x232)]||{},_0x4704e6[_0x4f0b0d(0x2f3)]=_0x4704e6[_0x4f0b0d(0x2f3)]||{},_0x4704e6[_0x4f0b0d(0x245)]['forEach']((_0x5e82c9,_0x749fc4)=>{const _0x43916c=_0x4f0b0d;if(this[_0x43916c(0x1fc)]['entity_'+_0x749fc4]===undefined)this[_0x43916c(0x1fc)][_0x43916c(0x2fa)+_0x749fc4]=![];}),this['_config']=_0x4704e6;}['shouldUpdate'](_0x2d144e){const _0x27e3c0=_0x1522fd;if(_0x2d144e[_0x27e3c0(0x2fe)]('_config')||_0x2d144e[_0x27e3c0(0x2fe)](_0x27e3c0(0x1fc))||_0x2d144e[_0x27e3c0(0x2fe)]('_dragOverIndex')||_0x2d144e[_0x27e3c0(0x2fe)](_0x27e3c0(0x316))||_0x2d144e[_0x27e3c0(0x2fe)](_0x27e3c0(0x2b3))||_0x2d144e[_0x27e3c0(0x2fe)](_0x27e3c0(0x2f7)))return!![];if(_0x2d144e['has'](_0x27e3c0(0x230))){const _0x2e8fa5=this[_0x27e3c0(0x31c)](this[_0x27e3c0(0x230)]);if(_0x2e8fa5!==this[_0x27e3c0(0x285)])return this[_0x27e3c0(0x285)]=_0x2e8fa5,this[_0x27e3c0(0x242)]['clear'](),!![];return![];}return!![];}[_0x1522fd(0x31c)](_0x48bfae){const _0x2d67eb=_0x48bfae?.['states']||{};let _0x361d76=0x0;for(const _0x490d4f in _0x2d67eb)_0x361d76++;return''+_0x361d76;}['_pruneDefaults'](_0x57f080){const _0x4dc5b8=_0x1522fd,_0x434c4e=SwitchAndTimerBarCard[_0x4dc5b8(0x2e5)],_0xd45c1c=JSON[_0x4dc5b8(0x270)](JSON[_0x4dc5b8(0x2a2)](_0x57f080||{}));for(const _0x1d2afa of[_0x4dc5b8(0x2f3),_0x4dc5b8(0x2da),'icons']){const _0xb63ba9=_0x434c4e[_0x1d2afa],_0x3a0555=_0xd45c1c[_0x1d2afa];if(_0x3a0555&&typeof _0x3a0555==='object'&&!Array[_0x4dc5b8(0x2cc)](_0x3a0555)&&_0xb63ba9){for(const _0x90e1 of Object['keys'](_0x3a0555)){if(_0x90e1 in _0xb63ba9&&_0x3a0555[_0x90e1]===_0xb63ba9[_0x90e1])delete _0x3a0555[_0x90e1];}if(Object['keys'](_0x3a0555)[_0x4dc5b8(0x260)]===0x0)delete _0xd45c1c[_0x1d2afa];}}for(const _0x1e59cf of Object[_0x4dc5b8(0x228)](_0x434c4e)){if(_0x1e59cf===_0x4dc5b8(0x245))continue;if(_0x434c4e[_0x1e59cf]&&typeof _0x434c4e[_0x1e59cf]===_0x4dc5b8(0x265))continue;if(_0x1e59cf in _0xd45c1c&&_0xd45c1c[_0x1e59cf]===_0x434c4e[_0x1e59cf])delete _0xd45c1c[_0x1e59cf];}return _0xd45c1c;}[_0x1522fd(0x2dc)](_0x8f56e5){const _0x294ad7=_0x1522fd,_0x2ebfa2=this['_pruneDefaults'](_0x8f56e5);this[_0x294ad7(0x2dd)]=_0x2ebfa2,this[_0x294ad7(0x297)](),this[_0x294ad7(0x2ef)](new CustomEvent(_0x294ad7(0x233),{'detail':{'config':_0x2ebfa2},'bubbles':!![],'composed':!![]}));}['_valueChanged'](_0x2997c3){const _0x606415=_0x1522fd;if(!this[_0x606415(0x2dd)]||!this[_0x606415(0x230)])return;const _0x5142f9=_0x2997c3[_0x606415(0x241)],_0x4b5c57=_0x5142f9['configValue']||_0x5142f9[_0x606415(0x1dd)](_0x606415(0x2e8));if(!_0x4b5c57)return;const _0x90f78d=_0x4b5c57['split']('.');let _0x51b147;if(_0x5142f9[_0x606415(0x2c7)]===_0x606415(0x23b))_0x51b147=_0x5142f9[_0x606415(0x281)];else{if(_0x2997c3['detail']?.[_0x606415(0x255)]!==undefined)_0x51b147=_0x2997c3[_0x606415(0x274)][_0x606415(0x255)];else{if(_0x5142f9['value']!==undefined)_0x51b147=_0x5142f9[_0x606415(0x255)];else _0x51b147='';}}if(_0x51b147===_0x606415(0x1e3))_0x51b147='';const _0x3125b6=JSON['parse'](JSON[_0x606415(0x2a2)](this[_0x606415(0x2dd)]));let _0x4f8b09=_0x3125b6;for(let _0x15a105=0x0;_0x15a105<_0x90f78d[_0x606415(0x260)]-0x1;_0x15a105++){const _0xae5731=_0x90f78d[_0x15a105];if(_0x4f8b09[_0xae5731]===undefined)_0x4f8b09[_0xae5731]=!isNaN(parseInt(_0x90f78d[_0x15a105+0x1],0xa))?[]:{};_0x4f8b09=_0x4f8b09[_0xae5731];}const _0x80a860=_0x90f78d[_0x90f78d['length']-0x1];if(_0x51b147===''||_0x51b147===null||Array[_0x606415(0x2cc)](_0x51b147)&&_0x51b147[_0x606415(0x260)]===0x0){delete _0x4f8b09[_0x80a860];if(_0x90f78d['length']>0x1){let _0x1ece11=_0x3125b6;for(let _0x5c08b1=0x0;_0x5c08b1<_0x90f78d[_0x606415(0x260)]-0x2;_0x5c08b1++)_0x1ece11=_0x1ece11[_0x90f78d[_0x5c08b1]];if(Object[_0x606415(0x228)](_0x4f8b09)[_0x606415(0x260)]===0x0&&_0x1ece11[_0x90f78d[_0x90f78d[_0x606415(0x260)]-0x2]])delete _0x1ece11[_0x90f78d[_0x90f78d[_0x606415(0x260)]-0x2]];}}else _0x4f8b09[_0x80a860]=_0x51b147;this[_0x606415(0x2dc)](_0x3125b6);}[_0x1522fd(0x1fe)](_0x113431){const _0x295172=_0x1522fd;this[_0x295172(0x1fc)]={...this[_0x295172(0x1fc)],[_0x113431]:!this[_0x295172(0x1fc)][_0x113431]};}[_0x1522fd(0x2d2)](_0x5783a3){const _0x18b68e=_0x1522fd,_0x21977a=_0x18b68e(0x2fa)+_0x5783a3,_0x1a2cdb=!!this[_0x18b68e(0x1fc)][_0x21977a];if(_0x1a2cdb){this[_0x18b68e(0x1fc)]={...this[_0x18b68e(0x1fc)],[_0x21977a]:![]};return;}const _0xb1e5cc={...this[_0x18b68e(0x1fc)]};Object[_0x18b68e(0x228)](_0xb1e5cc)[_0x18b68e(0x2b9)](_0x4b6714=>_0x4b6714[_0x18b68e(0x2e2)]('entity_'))[_0x18b68e(0x1fd)](_0x40683a=>_0xb1e5cc[_0x40683a]=![]),_0xb1e5cc[_0x21977a]=!![],_0xb1e5cc['entities']=!![],this[_0x18b68e(0x1fc)]=_0xb1e5cc,requestAnimationFrame(()=>{const _0x45678d=_0x18b68e;requestAnimationFrame(()=>this[_0x45678d(0x2b1)](_0x5783a3));});}[_0x1522fd(0x2b1)](_0x55abb1){const _0xeeac63=_0x1522fd,_0x51ed8=this['renderRoot']?.[_0xeeac63(0x311)](_0xeeac63(0x2d1)+_0x55abb1+'\x22]');if(!_0x51ed8)return;const _0x2c50f0=_0x51ed8['querySelector'](_0xeeac63(0x2f8))||_0x51ed8;try{_0x2c50f0['scrollIntoView']({'behavior':_0xeeac63(0x276),'block':_0xeeac63(0x1f5),'inline':_0xeeac63(0x32c)});}catch(_0x454420){_0x2c50f0['scrollIntoView'](!![]);}}[_0x1522fd(0x211)]=()=>{const _0x162d9f=_0x1522fd,_0x2e6956=JSON[_0x162d9f(0x270)](JSON[_0x162d9f(0x2a2)](this[_0x162d9f(0x2dd)]));_0x2e6956[_0x162d9f(0x245)]=_0x2e6956[_0x162d9f(0x245)]||[],_0x2e6956[_0x162d9f(0x245)]['push']({'name':'','switch':'','timer':'','sensor':'','timer_and_entity_connected_via_automation':!![]});const _0x53f289=_0x2e6956[_0x162d9f(0x245)][_0x162d9f(0x260)]-0x1,_0x3f5bf7={...this[_0x162d9f(0x1fc)]};Object['keys'](_0x3f5bf7)[_0x162d9f(0x2b9)](_0x354eca=>_0x354eca[_0x162d9f(0x2e2)]('entity_'))['forEach'](_0x26b931=>_0x3f5bf7[_0x26b931]=![]),_0x3f5bf7[_0x162d9f(0x2fa)+_0x53f289]=!![],_0x3f5bf7[_0x162d9f(0x245)]=!![],this['_expanded']=_0x3f5bf7,this['_dispatchConfig'](_0x2e6956);};[_0x1522fd(0x2ac)](_0x323d66){const _0x165fd3=_0x1522fd,_0x302dd5=JSON[_0x165fd3(0x270)](JSON[_0x165fd3(0x2a2)](this[_0x165fd3(0x2dd)]));_0x302dd5['entities'][_0x165fd3(0x28e)](_0x323d66,0x1);const _0x28a342={...this[_0x165fd3(0x1fc)]};Object[_0x165fd3(0x228)](_0x28a342)[_0x165fd3(0x2b9)](_0xc96416=>_0xc96416['startsWith'](_0x165fd3(0x2fa)))[_0x165fd3(0x1fd)](_0x5e5dee=>delete _0x28a342[_0x5e5dee]),_0x302dd5[_0x165fd3(0x245)][_0x165fd3(0x1fd)]((_0x3f02b5,_0x5e5826)=>_0x28a342['entity_'+_0x5e5826]=![]),this[_0x165fd3(0x1fc)]=_0x28a342,this[_0x165fd3(0x2dc)](_0x302dd5);}[_0x1522fd(0x323)](_0x15707b){const _0x32c161=_0x1522fd,_0x5c48df=JSON['parse'](JSON[_0x32c161(0x2a2)](this[_0x32c161(0x2dd)])),_0x25b155=JSON['parse'](JSON[_0x32c161(0x2a2)](_0x5c48df[_0x32c161(0x245)][_0x15707b]));if(_0x25b155[_0x32c161(0x22c)])_0x25b155[_0x32c161(0x22c)]=_0x25b155[_0x32c161(0x22c)]+_0x32c161(0x292);_0x5c48df[_0x32c161(0x245)]['splice'](_0x15707b+0x1,0x0,_0x25b155);const _0x2c6474={...this['_expanded']};Object[_0x32c161(0x228)](_0x2c6474)[_0x32c161(0x2b9)](_0x4b44e1=>_0x4b44e1[_0x32c161(0x2e2)](_0x32c161(0x2fa)))[_0x32c161(0x1fd)](_0xe2f24f=>_0x2c6474[_0xe2f24f]=![]),_0x2c6474[_0x32c161(0x2fa)+(_0x15707b+0x1)]=!![],_0x2c6474[_0x32c161(0x245)]=!![],this[_0x32c161(0x1fc)]=_0x2c6474,this['_dispatchConfig'](_0x5c48df);}['_onDragStart'](_0x10dd55,_0x12332e){const _0x15e11f=_0x1522fd;this[_0x15e11f(0x2c4)]=_0x10dd55;try{_0x12332e['dataTransfer']['effectAllowed']='move',_0x12332e[_0x15e11f(0x259)][_0x15e11f(0x257)]('text/plain',String(_0x10dd55));}catch(_0x155684){}}[_0x1522fd(0x207)](_0x256dd5,_0x365639){const _0x18addd=_0x1522fd;_0x365639['preventDefault'](),this['_dragOverIndex']=_0x256dd5;try{_0x365639[_0x18addd(0x259)][_0x18addd(0x27a)]=_0x18addd(0x1f6);}catch(_0x441a2c){}}['_onDragLeave'](_0x210d26,_0x1aa489){}[_0x1522fd(0x321)](_0x44ddf9,_0x46630f){const _0x4242d4=_0x1522fd;_0x46630f[_0x4242d4(0x1e9)]();let _0x441513=this[_0x4242d4(0x2c4)];try{const _0x560eb9=_0x46630f[_0x4242d4(0x259)][_0x4242d4(0x1e2)]('text/plain'),_0x3a4b8f=parseInt(_0x560eb9,0xa);if(!Number[_0x4242d4(0x29b)](_0x3a4b8f))_0x441513=_0x3a4b8f;}catch(_0x292505){}if(_0x441513===null||_0x441513===undefined)return;this[_0x4242d4(0x271)](_0x441513,_0x44ddf9),this[_0x4242d4(0x2c4)]=null,this[_0x4242d4(0x21b)]=null;}[_0x1522fd(0x271)](_0x1db386,_0x29a033){const _0x654dfc=_0x1522fd;if(_0x1db386===_0x29a033)return;const _0x4f0e3d=JSON[_0x654dfc(0x270)](JSON[_0x654dfc(0x2a2)](this['_config'])),_0x2c8471=_0x4f0e3d[_0x654dfc(0x245)]||[];if(_0x1db386<0x0||_0x1db386>=_0x2c8471[_0x654dfc(0x260)]||_0x29a033<0x0||_0x29a033>=_0x2c8471[_0x654dfc(0x260)])return;const _0x47ea62=(this[_0x654dfc(0x2dd)][_0x654dfc(0x245)]||[])[_0x654dfc(0x2df)]((_0xfece7a,_0x335305)=>!!this['_expanded']['entity_'+_0x335305]),[_0x15115d]=_0x2c8471[_0x654dfc(0x28e)](_0x1db386,0x1);_0x2c8471[_0x654dfc(0x28e)](_0x29a033,0x0,_0x15115d);let _0x1c59bc=_0x47ea62;if(_0x47ea62===_0x1db386)_0x1c59bc=_0x29a033;else{if(_0x1db386<_0x47ea62&&_0x29a033>=_0x47ea62)_0x1c59bc=_0x47ea62-0x1;else{if(_0x1db386>_0x47ea62&&_0x29a033<=_0x47ea62)_0x1c59bc=_0x47ea62+0x1;}}const _0x1b6ff2={...this['_expanded']};Object[_0x654dfc(0x228)](_0x1b6ff2)['filter'](_0x1acbf7=>_0x1acbf7[_0x654dfc(0x2e2)]('entity_'))[_0x654dfc(0x1fd)](_0x38a616=>delete _0x1b6ff2[_0x38a616]),_0x2c8471[_0x654dfc(0x1fd)]((_0x9a54cd,_0x2c8441)=>_0x1b6ff2[_0x654dfc(0x2fa)+_0x2c8441]=![]);if(_0x1c59bc>=0x0&&_0x1c59bc<_0x2c8471[_0x654dfc(0x260)])_0x1b6ff2[_0x654dfc(0x2fa)+_0x1c59bc]=!![];this['_expanded']=_0x1b6ff2,this[_0x654dfc(0x2dc)](_0x4f0e3d);}['_renderEntityPicker'](_0x1deb97,_0x25dfd,_0x4fd86b,_0xc9c16a,_0x1bf0fa=''){const _0x5da27b=_0x1522fd,_0x439f42=Array[_0x5da27b(0x2cc)](_0xc9c16a)?_0xc9c16a:undefined,_0x84aca9=_0x1bf0fa?'\x20field--'+_0x1bf0fa:'',_0x45139d=_0x1bf0fa?_0x5da27b(0x2b6)+_0x1bf0fa:'';return haHtml`
      <div class="field${_0x84aca9}">
        <div class="field-label${_0x45139d}">${_0x1deb97}</div>
        <div class="picker-wrap">
          <ha-selector
            .hass=${this['hass']}
            .label=${''}
            .selector=${_0x439f42?{'entity':{'domain':_0x439f42}}:{'entity':{}}}
            .value=${_0x25dfd||''}
            .configValue=${_0x4fd86b}
            @value-changed=${this['_valueChanged']}
          ></ha-selector>
        </div>
      </div>
    `;}[_0x1522fd(0x307)](_0x10022d,_0x89f7b2,_0x1092ff,_0x2c61af=''){const _0x363134=_0x1522fd,_0x81e52=_0x2c61af?_0x363134(0x324)+_0x2c61af:'',_0x504bf1=_0x2c61af?_0x363134(0x27b)+_0x2c61af:'';return haHtml`
      <div class="field${_0x81e52}">
        <div class="label-row${_0x504bf1}">
          <div class="label-text">${_0x10022d}</div>
          <button class="help-btn" type="button" title="Help" @click=${this[_0x363134(0x23f)]}>
            <span class="help-q">?</span>
          </button>
        </div>

        <div class="picker-wrap">
          <ha-selector
            .hass=${this[_0x363134(0x230)]}
            .label=${''}
            .selector=${{'entity':{'domain':[_0x363134(0x25c),'input_datetime']}}}
            .value=${_0x89f7b2||''}
            .configValue=${_0x1092ff}
            @value-changed=${this[_0x363134(0x284)]}
          ></ha-selector>
        </div>
      </div>
    `;}[_0x1522fd(0x29f)](_0x13b646){const _0x50642f=_0x1522fd,_0xb29bea={'colors':{'on':_0x50642f(0x289),'ready':_0x50642f(0x2f2),'unavailable':_0x50642f(0x2bd),'button_start':_0x50642f(0x2f2),'button_stop':'#2196F3','icon':_0x50642f(0x205),'progress_fill':_0x50642f(0x289)},'icons':{'start':_0x50642f(0x252),'stop':_0x50642f(0x1e5)},'labels':{'status_on':_0x50642f(0x29e),'status_ready':_0x50642f(0x214),'status_unavailable':'Unavailable','last_on_active':'Active','last_on_now':'Just\x20now','last_on_ago_minutes':'minutes\x20ago','last_on_ago_hours':'hours\x20ago','last_on_ago_days':_0x50642f(0x30e),'time_format_zero':'0m\x2000s','time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':'Set\x20duration','edit_duration_hours':_0x50642f(0x256),'edit_duration_minutes':_0x50642f(0x2cd),'edit_duration_seconds':'Seconds','edit_duration_apply':_0x50642f(0x2d4),'edit_duration_reset':_0x50642f(0x1f2),'edit_duration_cancel':_0x50642f(0x206),'edit_duration_tooltip':'Click\x20to\x20change\x20duration','start_confirm_body':_0x50642f(0x272),'start_confirm_ok':_0x50642f(0x30a),'start_confirm_cancel':_0x50642f(0x206)}};return _0xb29bea[_0x13b646];}[_0x1522fd(0x2e0)](_0x5442dd){return{...this['_getBuiltInDefaults'](_0x5442dd),...this['_config']?.[_0x5442dd]||{}};}[_0x1522fd(0x258)](_0x16b8e7){const _0x1b7455=_0x1522fd,_0x448fe9=JSON[_0x1b7455(0x270)](JSON['stringify'](this[_0x1b7455(0x2dd)])),_0x365204=_0x16b8e7['split']('.');let _0x3d7ca7=_0x448fe9;for(let _0x319bfd=0x0;_0x319bfd<_0x365204['length']-0x1;_0x319bfd++){_0x3d7ca7=_0x3d7ca7?.[_0x365204[_0x319bfd]];if(!_0x3d7ca7)break;}if(_0x3d7ca7&&typeof _0x3d7ca7===_0x1b7455(0x265))delete _0x3d7ca7[_0x365204[_0x365204[_0x1b7455(0x260)]-0x1]];this[_0x1b7455(0x2dc)](_0x448fe9);}[_0x1522fd(0x2b5)](_0x1e6d38){return haHtml`<span class="tip-wrap" tabindex="-1">
      <svg class="tip-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      <span class="tip-box">${_0x1e6d38}</span>
    </span>`;}[_0x1522fd(0x2aa)](_0x3e64ef,_0x615a7a,_0x276f2c){const _0x4c1c3b=_0x1522fd,_0x401fc1=_0x3e64ef||{},_0x2d8ed0=_0x276f2c||this[_0x4c1c3b(0x29f)](_0x4c1c3b(0x2da));return haHtml`
      <div class="color-grid">
        ${Object[_0x4c1c3b(0x228)](_0x2d8ed0)[_0x4c1c3b(0x225)](_0x59819f=>{const _0x59226f=_0x4c1c3b,_0x5198c9=_0x59819f[_0x59226f(0x1e7)](/_/g,'\x20'),_0x27da25=_0x401fc1[_0x59819f]||_0x2d8ed0[_0x59819f]||_0x59226f(0x309);return haHtml`
            <div class="color-tile">
              <span class="color-name">${_0x5198c9}</span>
              <input
                class="color-swatch"
                type="color"
                .value="${_0x27da25}"
                @input=${_0x4d1103=>this[_0x59226f(0x284)]({'target':{'configValue':_0x615a7a+'.'+_0x59819f,'value':_0x4d1103[_0x59226f(0x241)][_0x59226f(0x255)]},'detail':{'value':_0x4d1103[_0x59226f(0x241)]['value']}})}
              />
              <input
                class="ed-input color-hex"
                type="text"
                .value="${_0x401fc1[_0x59819f]||''}"
                placeholder="${_0x2d8ed0[_0x59819f]}"
                .configValue="${_0x615a7a}.${_0x59819f}"
                @change=${this['_valueChanged']}
              />
            </div>
          `;})}
      </div>
    `;}[_0x1522fd(0x305)](_0x43ed04,_0x309488,_0x2ebc2c){const _0x1c0c37=_0x1522fd,_0x58949f=_0x43ed04||{},_0x4faa40=_0x2ebc2c||this['_getBuiltInDefaults'](_0x1c0c37(0x232));return haHtml`
      <div class="grid grid-2">
        ${Object[_0x1c0c37(0x228)](_0x4faa40)[_0x1c0c37(0x225)](_0x5864d6=>haHtml`
            <div class="field">
              <ha-icon-picker
                label="${_0x5864d6[_0x1c0c37(0x318)](0x0)[_0x1c0c37(0x29d)]()+_0x5864d6[_0x1c0c37(0x30d)](0x1)} Icon"
                .value="${_0x58949f[_0x5864d6]||''}"
                .placeholder="${_0x4faa40[_0x5864d6]}"
                .configValue="${_0x309488}.${_0x5864d6}"
                @value-changed=${this[_0x1c0c37(0x284)]}
              ></ha-icon-picker>
            </div>
          `)}
      </div>
    `;}[_0x1522fd(0x212)](_0x330509,_0xb2b904,_0x1fdb2d){const _0x543616=_0x1522fd,_0x18bd8a=new Set(['edit_duration_title',_0x543616(0x27d),'edit_duration_minutes','edit_duration_seconds','edit_duration_apply',_0x543616(0x22f),_0x543616(0x246),_0x543616(0x2ba),'start_confirm_body','start_confirm_ok',_0x543616(0x2d7)]),_0x57d3ce=_0x330509||{},_0x266180=_0x1fdb2d||this['_getBuiltInDefaults'](_0x543616(0x2f3)),_0x45e238=Object[_0x543616(0x228)](_0x266180)['filter'](_0x1162d3=>!_0x18bd8a[_0x543616(0x2fe)](_0x1162d3));return haHtml`
      <div class="ovr-grid">
        ${_0x45e238[_0x543616(0x225)](_0x346ba5=>haHtml`
            <label class="ovr-field">
              <span class="ovr-label">${_0x346ba5['replace'](/_/g,'\x20')}</span>
              <input
                class="ed-input"
                type="text"
                .value="${_0x57d3ce[_0x346ba5]||''}"
                placeholder="${_0x266180[_0x346ba5]}"
                .configValue="${_0xb2b904}.${_0x346ba5}"
                @change=${this[_0x543616(0x284)]}
              />
            </label>
          `)}
      </div>
    `;}[_0x1522fd(0x20e)](){const _0x374b02=_0x1522fd,_0x221c40=customElements['get'](_0x374b02(0x222))?_0x374b02(0x222):_0x374b02(0x2ab),_0x339e29='template:\x0a\x20\x20-\x20trigger:\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20event\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_type:\x20timer.finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_data:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20timer.zone_1_timer\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20state\x0a\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20switch.zone_1\x20\x20\x20#\x20For\x20non-switch\x20domains,\x20change\x20to\x20your\x20entity\x0a\x20\x20\x20\x20\x20\x20\x20\x20from:\x20\x27on\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20to:\x20\x27off\x27\x0a\x20\x20\x20\x20sensor:\x0a\x20\x20\x20\x20\x20\x20-\x20name:\x20zone_1_is_finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20state:\x20\x22{{\x20now().timestamp()\x20|\x20as_datetime\x20}}\x22';if(_0x221c40===_0x374b02(0x222))return haHtml`
        <ha-dialog
          .open=${this['_showSensorHelp']}
          @closed=${this[_0x374b02(0x293)]}
          heading="How to create a trigger-based sensor"
        >
          <div class="help-content">
            <div class="help-title">🧪 How to create a trigger-based sensor</div>
            <div class="help-text">
              To show "last run" on the card, you can create a template sensor that updates when the timer finishes
              (works for all domains) and/or when the device turns off. Example below uses both a
              <code>timer.finished</code> event and a switch turning off; adapt the second trigger for your domain if needed.
            </div>
            <pre class="code"><code>${_0x339e29}</code></pre>
          </div>
          <mwc-button slot="primaryAction" @click=${this[_0x374b02(0x293)]}>Close</mwc-button>
        </ha-dialog>
      `;return haHtml`
      <mwc-dialog
        ?open=${this[_0x374b02(0x316)]}
        @closed=${this['_closeSensorHelp']}
        heading="How to create a trigger-based sensor"
      >
        <div class="help-content">
          <div class="help-title">🧪 How to create a trigger-based sensor</div>
          <div class="help-text">
            To show "last run" on the card, you can create a template sensor that updates when the timer finishes
            (works for all domains) and/or when the device turns off. Example below uses both a
            <code>timer.finished</code> event and a switch turning off; adapt the second trigger for your domain if needed.
          </div>
          <pre class="code"><code>${_0x339e29}</code></pre>
        </div>
        <mwc-button slot="primaryAction" @click=${this['_closeSensorHelp']}>Close</mwc-button>
      </mwc-dialog>
    `;}[_0x1522fd(0x210)](){const _0xc2ec62=_0x1522fd;if(!this[_0xc2ec62(0x230)]||!this['_config'])return haHtml``;const _0x65846a=!this[_0xc2ec62(0x1fc)][_0xc2ec62(0x26a)],_0x1d9ffc=!this['_expanded']['entities'],_0x3fc4f4=this[_0xc2ec62(0x2b3)]||'general';return haHtml`
      <div class="editor">
        <!-- GLOBAL SETTINGS PANEL -->
        <div class="panel ${_0x65846a?'':'open'}">
          <div class="panel-header" @click=${()=>this['_toggleExpand'](_0xc2ec62(0x26a))}>
            <div class="panel-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <div class="panel-text">
              <span class="panel-title">Global Settings</span>
              <span class="panel-subtitle">Defaults applied to all entities unless overridden</span>
            </div>
            <span class="panel-chevron">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </div>

          ${_0x65846a?'':haHtml`
            <div class="panel-body">
              <div class="tabs">
                <button class="tb ${_0x3fc4f4===_0xc2ec62(0x2c1)?_0xc2ec62(0x2d3):''}" @click=${()=>{const _0x414425=_0xc2ec62;this[_0x414425(0x2b3)]='general';}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  General
                </button>
                <button class="tb ${_0x3fc4f4===_0xc2ec62(0x232)?'active':''}" @click=${()=>{const _0x39c7c4=_0xc2ec62;this[_0x39c7c4(0x2b3)]=_0x39c7c4(0x232);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  Icons
                </button>
                <button class="tb ${_0x3fc4f4===_0xc2ec62(0x2da)?_0xc2ec62(0x2d3):''}" @click=${()=>{const _0x34fe60=_0xc2ec62;this[_0x34fe60(0x2b3)]=_0x34fe60(0x2da);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                  Colors
                </button>
                <button class="tb ${_0x3fc4f4===_0xc2ec62(0x2f3)?_0xc2ec62(0x2d3):''}" @click=${()=>{const _0x3e5d1a=_0xc2ec62;this['_mainTab']=_0x3e5d1a(0x2f3);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                  Labels
                </button>
              </div>

              <!-- General Tab -->
              <div class="tc ${_0x3fc4f4===_0xc2ec62(0x2c1)?_0xc2ec62(0x2d3):''}">
                <div class="fg">
                  <div class="fgl">Card</div>
                  <div class="grid grid-pair">
                    <div class="field">
                      <div class="field-label">Title ${this['_tip'](_0xc2ec62(0x31e))}</div>
                      <input
                        class="ed-input"
                        type="text"
                        .value="${this['_config'][_0xc2ec62(0x32b)]||''}"
                        .configValue=${'title'}
                        @change=${this[_0xc2ec62(0x284)]}
                      />
                    </div>

                    <div class="field">
                      <div class="field-label">Button Position ${this[_0xc2ec62(0x2b5)](_0xc2ec62(0x28c))}</div>
                      <div class="picker-wrap">
                        <ha-selector
                          .hass=${this[_0xc2ec62(0x230)]}
                          .label=${_0xc2ec62(0x26b)}
                          .selector=${{'select':{'options':[{'value':'left','label':_0xc2ec62(0x294)},{'value':_0xc2ec62(0x2ae),'label':_0xc2ec62(0x2f9)}],'mode':_0xc2ec62(0x1e1)}}}
                          .value=${this[_0xc2ec62(0x2dd)]['button_position']||_0xc2ec62(0x20f)}
                          .configValue=${_0xc2ec62(0x2f5)}
                          @value-changed=${this[_0xc2ec62(0x284)]}
                        ></ha-selector>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-2">
                    <div class="field">
                      <div class="field-label">Editable duration (global default) ${this[_0xc2ec62(0x2b5)](_0xc2ec62(0x329))}</div>
                      <div class="toggle-row">
                        <label class="si">
                          <div class="st">
                            <ha-switch
                              .checked="${!!this[_0xc2ec62(0x2dd)][_0xc2ec62(0x25b)]}"
                              .configValue=${_0xc2ec62(0x25b)}
                              @change=${this[_0xc2ec62(0x284)]}
                            ></ha-switch>
                          </div>
                          <div class="sl">
                            <span class="sn">Allow editing duration from the card</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Colors Tab -->
              <div class="tc ${_0x3fc4f4==='colors'?_0xc2ec62(0x2d3):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Colors</div>
                    <button class="reset-btn" @click=${()=>this[_0xc2ec62(0x258)](_0xc2ec62(0x2da))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this[_0xc2ec62(0x2aa)](this[_0xc2ec62(0x2dd)][_0xc2ec62(0x2da)],_0xc2ec62(0x2da),this[_0xc2ec62(0x29f)](_0xc2ec62(0x2da)))}
                </div>
              </div>

              <!-- Icons Tab -->
              <div class="tc ${_0x3fc4f4==='icons'?_0xc2ec62(0x2d3):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Icons</div>
                    <button class="reset-btn" @click=${()=>this['_resetPath'](_0xc2ec62(0x232))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this[_0xc2ec62(0x305)](this[_0xc2ec62(0x2dd)][_0xc2ec62(0x232)],_0xc2ec62(0x232),this[_0xc2ec62(0x29f)](_0xc2ec62(0x232)))}
                </div>
              </div>

              <!-- Labels Tab -->
              <div class="tc ${_0x3fc4f4===_0xc2ec62(0x2f3)?'active':''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Labels</div>
                    <button class="reset-btn" @click=${()=>this['_resetPath'](_0xc2ec62(0x2f3))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this['_renderLabelOptions'](this[_0xc2ec62(0x2dd)][_0xc2ec62(0x2f3)],'labels',this['_getBuiltInDefaults'](_0xc2ec62(0x2f3)))}
                </div>
              </div>
            </div>
          `}
        </div>

        <!-- ENTITIES PANEL -->
        <div class="panel ${_0x1d9ffc?'':_0xc2ec62(0x26f)}">
          <div class="panel-header" @click=${()=>this[_0xc2ec62(0x1fe)]('entities')}>
            <div class="panel-icon ent-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
            <div class="panel-text">
              <span class="panel-title">Entities <span class="badge">${(this[_0xc2ec62(0x2dd)][_0xc2ec62(0x245)]||[])[_0xc2ec62(0x260)]}</span></span>
              <span class="panel-subtitle">Drag & drop to reorder. Click entity to expand.</span>
            </div>
            <span class="panel-chevron">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </div>

          ${_0x1d9ffc?'':haHtml`
            <div class="panel-body entity-list">
              ${(this['_config'][_0xc2ec62(0x245)]||[])['map']((_0x6750ad,_0x33712c)=>this[_0xc2ec62(0x2cb)](_0x6750ad,_0x33712c))}
              <button class="add-btn" @click=${this[_0xc2ec62(0x211)]}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add Entity
              </button>
            </div>
          `}
        </div>
      </div>

      ${this[_0xc2ec62(0x20e)]()}
    `;}[_0x1522fd(0x2cb)](_0x5d9191,_0x2bfe8a){const _0x43cc2d=_0x1522fd,_0x175b26='entities.'+_0x2bfe8a,_0x339eac=!!this[_0x43cc2d(0x1fc)][_0x43cc2d(0x2fa)+_0x2bfe8a],_0x2da49e=_0x5d9191['name']?.[_0x43cc2d(0x213)]()?_0x5d9191[_0x43cc2d(0x22c)]:this[_0x43cc2d(0x230)]?.[_0x43cc2d(0x215)]?.[_0x5d9191['switch']]?.[_0x43cc2d(0x23e)]?.[_0x43cc2d(0x2a5)]||_0x43cc2d(0x25d)+(_0x2bfe8a+0x1),_0x23f07e=this[_0x43cc2d(0x21b)]===_0x2bfe8a,_0x484d34=this['_entityTabs'][_0x2bfe8a]||_0x43cc2d(0x2c1);return haHtml`
      <div
        class="ec ${_0x339eac?_0x43cc2d(0x26f):''} ${_0x23f07e?_0x43cc2d(0x22b):''}"
        data-entity-index="${_0x2bfe8a}"
        @dragover=${_0x2b1f44=>this['_onDragOver'](_0x2bfe8a,_0x2b1f44)}
        @drop=${_0x4d60a8=>this[_0x43cc2d(0x321)](_0x2bfe8a,_0x4d60a8)}
        @dragleave=${_0x5114f6=>this[_0x43cc2d(0x220)](_0x2bfe8a,_0x5114f6)}
      >
        <div class="eh" @click=${()=>this[_0x43cc2d(0x2d2)](_0x2bfe8a)}>
          <div class="ed"
            title="Drag to reorder"
            draggable="true"
            @dragstart=${_0x1de2ab=>this[_0x43cc2d(0x28a)](_0x2bfe8a,_0x1de2ab)}
            @click=${_0x5f3c24=>_0x5f3c24[_0x43cc2d(0x231)]()}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>
          </div>
          <div class="ei">
            <span class="en">${_0x2da49e}</span>
          </div>
          <div class="ea">
            <button class="etb" @click=${_0x475579=>{const _0x555112=_0x43cc2d;_0x475579['stopPropagation'](),this[_0x555112(0x2d2)](_0x2bfe8a);}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <button class="edup" title="Duplicate" @click=${_0x2f23f7=>{const _0x3a1e5d=_0x43cc2d;_0x2f23f7[_0x3a1e5d(0x231)](),this[_0x3a1e5d(0x323)](_0x2bfe8a);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
            <button class="edb" @click=${_0x115131=>{const _0x2f904a=_0x43cc2d;_0x115131[_0x2f904a(0x231)](),this[_0x2f904a(0x2ac)](_0x2bfe8a);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>

        ${_0x339eac?haHtml`
          <div class="eb">
            <div class="tabs">
              <button class="tb ${_0x484d34===_0x43cc2d(0x2c1)?_0x43cc2d(0x2d3):''}" @click=${()=>{const _0xdd5072=_0x43cc2d;this[_0xdd5072(0x2f7)]={...this[_0xdd5072(0x2f7)],[_0x2bfe8a]:_0xdd5072(0x2c1)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                General
              </button>
              <button class="tb ${_0x484d34===_0x43cc2d(0x232)?_0x43cc2d(0x2d3):''}" @click=${()=>{const _0x228d8f=_0x43cc2d;this[_0x228d8f(0x2f7)]={...this[_0x228d8f(0x2f7)],[_0x2bfe8a]:_0x228d8f(0x232)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                Icons
              </button>
              <button class="tb ${_0x484d34===_0x43cc2d(0x2da)?_0x43cc2d(0x2d3):''}" @click=${()=>{const _0xfd073b=_0x43cc2d;this['_entityTabs']={...this[_0xfd073b(0x2f7)],[_0x2bfe8a]:_0xfd073b(0x2da)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                Colors
              </button>
              <button class="tb ${_0x484d34===_0x43cc2d(0x2f3)?_0x43cc2d(0x2d3):''}" @click=${()=>{const _0x4e2b09=_0x43cc2d;this[_0x4e2b09(0x2f7)]={...this[_0x4e2b09(0x2f7)],[_0x2bfe8a]:_0x4e2b09(0x2f3)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                Labels
              </button>
            </div>

            <!-- Entity General Tab -->
            <div class="tc ${_0x484d34===_0x43cc2d(0x2c1)?_0x43cc2d(0x2d3):''}">
              <div class="fg">
                <div class="fgl">Entity Setup</div>
                <div class="grid grid-pair">
                  <div class="field">
                    <div class="field-label">Display Name ${this[_0x43cc2d(0x2b5)](_0x43cc2d(0x250))}</div>
                    <input
                      class="ed-input"
                      type="text"
                      .value="${_0x5d9191[_0x43cc2d(0x22c)]||''}"
                      .configValue="${_0x175b26}.name"
                      @change=${this[_0x43cc2d(0x284)]}
                    />
                  </div>

                  <div class="field">
                    <div class="field-label">Button Position ${this['_tip']('Override\x20global\x20button\x20position\x20for\x20this\x20entity\x20only.')}</div>
                    <div class="picker-wrap">
                      <ha-selector
                        .hass=${this[_0x43cc2d(0x230)]}
                        .label=${'Position'}
                        .selector=${{'select':{'options':[{'value':_0x43cc2d(0x1e3),'label':'Use\x20global'},{'value':_0x43cc2d(0x20f),'label':_0x43cc2d(0x294)},{'value':_0x43cc2d(0x2ae),'label':_0x43cc2d(0x2f9)}],'mode':'dropdown'}}}
                        .value=${_0x5d9191[_0x43cc2d(0x2f5)]||_0x43cc2d(0x1e3)}
                        .configValue="${_0x175b26}.button_position"
                        @value-changed=${this[_0x43cc2d(0x284)]}
                      ></ha-selector>
                    </div>
                  </div>
                </div>
              </div>

              <div class="fg">
                <div class="fgl">Entities</div>
                <div class="grid grid-2">
                  ${this[_0x43cc2d(0x1fb)]('Control\x20entity\x20(switch\x20/\x20light\x20/\x20cover\x20/\x20valve\x20/\x20lock\x20/\x20etc.)',_0x5d9191[_0x43cc2d(0x1e8)]||'',_0x175b26+_0x43cc2d(0x221),['switch',_0x43cc2d(0x303),_0x43cc2d(0x1e6),_0x43cc2d(0x204),_0x43cc2d(0x264),_0x43cc2d(0x28d),'input_boolean',_0x43cc2d(0x202)],_0x43cc2d(0x2c5))}
                  ${this[_0x43cc2d(0x1fb)](_0x43cc2d(0x27e),_0x5d9191[_0x43cc2d(0x1e4)]||'',_0x175b26+_0x43cc2d(0x236),[_0x43cc2d(0x1e4)],_0x43cc2d(0x1e4))}
                </div>
                <div class="grid grid-2">
                  ${this['_renderSensorPickerWithHelp'](_0x43cc2d(0x251),_0x5d9191[_0x43cc2d(0x25c)]||'',_0x175b26+'.sensor',_0x43cc2d(0x25c))}
                  <div class="field">
                    <div class="field-label">Automation Link ${this[_0x43cc2d(0x2b5)](_0x43cc2d(0x23c))}</div>
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${_0x5d9191['timer_and_entity_connected_via_automation']!==![]}"
                            .configValue="${_0x175b26}.timer_and_entity_connected_via_automation"
                            @change=${this['_valueChanged']}
                          ></ha-switch>
                        </div>
                        <div class="sl">
                          <span class="sn">Timer ↔ Entity linked via automation</span>
                        </div>
                      </label>
                    </div>
                    ${_0x5d9191[_0x43cc2d(0x2d9)]===![]?haHtml`<div class="inline-warn">
                          <ha-icon icon="mdi:alert-outline"></ha-icon>
                          <span>Direct control runs in your browser — the device won't switch off if no dashboard is open when the timer ends. For unattended use, keep this on and add a <code>timer.finished</code> automation (see the Help panel).</span>
                        </div>`:''}
                  </div>
                </div>
                <div class="grid grid-2">
                  ${this[_0x43cc2d(0x1fb)](_0x43cc2d(0x2ec),_0x5d9191[_0x43cc2d(0x2db)]||'',_0x175b26+'.battery',[_0x43cc2d(0x25c)],'battery')}
                </div>
                <div class="grid grid-2">
                  <div class="field field--duration">
                    <div class="field-label field-label--duration">Default duration override ${this['_tip'](_0x43cc2d(0x2ce))}</div>
                    <input
                      class="ed-input"
                      type="text"
                      placeholder="e.g. 00:10:00"
                      .value="${_0x5d9191[_0x43cc2d(0x2c3)]??''}"
                      .configValue="${_0x175b26}.duration"
                      @change=${this[_0x43cc2d(0x284)]}
                    />
                  </div>
                  <div class="field field--editable-duration">
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${!!_0x5d9191[_0x43cc2d(0x25b)]}"
                            .configValue="${_0x175b26}.editable_duration"
                            @change=${this[_0x43cc2d(0x284)]}
                          ></ha-switch>
                        </div>
                        <div class="sl">
                          <span class="sn">Allow editing duration from the card</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Entity Colors Tab -->
            <div class="tc ${_0x484d34==='colors'?_0x43cc2d(0x2d3):''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Colors</div>
                  <button class="reset-btn" @click=${()=>this[_0x43cc2d(0x258)](_0x175b26+_0x43cc2d(0x24d))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global colors for this entity. Unset values inherit from global settings.</div>
                ${this[_0x43cc2d(0x2aa)](_0x5d9191['colors'],_0x175b26+_0x43cc2d(0x24d),this[_0x43cc2d(0x2e0)](_0x43cc2d(0x2da)))}
              </div>
            </div>

            <!-- Entity Icons Tab -->
            <div class="tc ${_0x484d34===_0x43cc2d(0x232)?'active':''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Icons</div>
                  <button class="reset-btn" @click=${()=>this['_resetPath'](_0x175b26+_0x43cc2d(0x24f))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global icons for this entity. Unset values inherit from global settings.</div>
                ${this[_0x43cc2d(0x305)](_0x5d9191[_0x43cc2d(0x232)],_0x175b26+'.icons',this[_0x43cc2d(0x2e0)]('icons'))}
              </div>
            </div>

            <!-- Entity Labels Tab -->
            <div class="tc ${_0x484d34===_0x43cc2d(0x2f3)?_0x43cc2d(0x2d3):''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Labels</div>
                  <button class="reset-btn" @click=${()=>this[_0x43cc2d(0x258)](_0x175b26+_0x43cc2d(0x1f4))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global labels for this entity. Unset values inherit from global settings.</div>
                ${this[_0x43cc2d(0x212)](_0x5d9191[_0x43cc2d(0x2f3)],_0x175b26+_0x43cc2d(0x1f4),this[_0x43cc2d(0x2e0)](_0x43cc2d(0x2f3)))}
              </div>
            </div>
          </div>
        `:''}
      </div>
    `;}static get[_0x1522fd(0x20c)](){return haCss`
      /* ===== CSS Variables ===== */
      :host {
        display: block;
        font-size: 13px;
        color: var(--primary-text-color);
        --ac: var(--primary-color, #4A90D9);
        --acr: 74, 144, 217;
        --bg: var(--card-background-color, var(--ha-card-background, #fff));
        --sf: var(--secondary-background-color, #f5f5f5);
        --bd: var(--divider-color, #e0e0e0);
        --tx: var(--primary-text-color, #333);
        --ts: var(--secondary-text-color, #666);
        --dg: #e74c3c;
        --rd: 12px;
        --mdc-theme-primary: var(--input-accent-color, var(--primary-color));

        /* HA 2026.4 — global input background fix */
        --ha-color-form-background: var(--sf);
        --ha-color-form-background-hover: var(--sf);
        --ha-color-form-background-disabled: var(--sf);
        --ha-color-neutral-95: var(--sf);
        --text-field-background-color: var(--sf);
        --mdc-text-field-fill-color: var(--sf);
        --mdc-select-fill-color: var(--sf);
        --mdc-menu-surface-fill-color: var(--bg);
        --input-fill-color: var(--sf);
        --input-dropdown-icon-color: var(--ts);
        --mdc-theme-surface: var(--bg);
      }

      * { box-sizing: border-box; }

      .editor { display: grid; gap: 16px; }

      /* ===== Panel (Accordion) ===== */
      .panel {
        background: var(--bg);
        border: 1px solid var(--bd);
        border-radius: var(--rd);
        overflow: visible;
        transition: box-shadow .2s;
      }
      .panel:hover { box-shadow: 0 2px 12px rgba(0,0,0,.06); }

      .panel-header {
        display: grid;
        grid-template-columns: 36px 1fr auto;
        align-items: center;
        gap: 0 10px;
        padding: 14px 16px;
        cursor: pointer;
        user-select: none;
        transition: background .15s;
      }
      .panel-header:hover { background: var(--sf); }

      .panel-icon {
        width: 36px; height: 36px;
        display: flex; align-items: center; justify-content: center;
        border-radius: 10px;
        background: rgba(var(--acr), .1);
        color: var(--ac);
      }
      .ent-icon {
        background: rgba(76, 175, 80, .1);
        color: #4CAF50;
      }

      .panel-text { display: flex; flex-direction: column; gap: 2px; }
      .panel-title {
        font-weight: 600; font-size: 15px; line-height: 1.2;
        text-transform: uppercase; letter-spacing: .04em;
        display: flex; align-items: center; gap: 8px;
      }
      .panel-subtitle { font-size: 11px; color: var(--ts); }

      .panel-chevron {
        color: var(--ts);
        transition: transform .3s cubic-bezier(.4,0,.2,1);
        display: flex;
      }
      .panel.open .panel-chevron { transform: rotate(180deg); }

      .panel-body {
        padding: 0 16px 16px;
      }

      /* ===== Badge ===== */
      .badge {
        display: inline-flex; align-items: center; justify-content: center;
        min-width: 22px; height: 22px; padding: 0 6px;
        border-radius: 11px; font-size: 11px; font-weight: 600;
        background: rgba(var(--acr), .12); color: var(--ac);
        text-transform: none; letter-spacing: 0;
      }

      /* ===== Tabs ===== */
      .tabs {
        display: flex; gap: 2px; padding: 4px;
        margin: 6px 0 8px; background: var(--sf);
        border-radius: 10px;
        border: 1px solid var(--bd);
      }
      .tb {
        flex: 1; display: flex; align-items: center; justify-content: center;
        gap: 4px; padding: 8px 8px;
        border: none; background: none; border-radius: 8px;
        font-size: 11px; font-weight: 600; color: var(--ts);
        cursor: pointer; transition: all .2s;
        text-transform: uppercase; letter-spacing: .04em;
      }
      .tb:hover { color: var(--tx); background: rgba(var(--acr), .05); }
      .tb.active {
        background: var(--bg); color: var(--ac);
        box-shadow: 0 1px 4px rgba(0,0,0,.08);
      }
      .tb svg { flex-shrink: 0; }

      /* ===== Tab Content ===== */
      .tc { display: none; padding: 8px 0; }
      .tc.active { display: block; }

      /* ===== Field Group ===== */
      .fg { margin-bottom: 16px; }
      .fg:last-child { margin-bottom: 0; }

      .fgl {
        font-size: 11.5px; font-weight: 600;
        text-transform: uppercase; letter-spacing: .06em;
        color: var(--ts); margin-bottom: 10px; padding: 8px 0;
        border-bottom: 1px solid var(--bd);
        flex: 1;
      }
      .fgl-row {
        display: flex; align-items: center; justify-content: space-between;
        gap: 8px;
      }
      .fgl-row .fgl { flex: 1; }

      /* ===== Grid ===== */
      .grid { display: grid; gap: 12px; }
      .grid-2 { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
      .grid-3 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
      .grid-pair { grid-template-columns: 1fr 1fr; }

      /* ===== Field ===== */
      .field { display: grid; gap: 2px; min-width: 0; }
      /* ---- Per-field style hooks (entity General tab) — edit freely ---- */
      .field--control { border-left: 3px solid #5aa9f0; border-radius: 0; padding-left: 10px; }
      .field--timer { border-left: 3px solid #5fc06a; border-radius: 0; padding-left: 10px; }
      .field--sensor { border-left: 3px solid #e0a23c; border-radius: 0; padding-left: 10px; }
      .field--battery { border-left: 3px solid #2bc0a8; border-radius: 0; padding-left: 10px; }
      .field--duration { border-left: 3px solid #b07fe0; border-radius: 0; padding-left: 10px; }
      .field--editable-duration { border-left: 3px solid #e88a8a; border-radius: 0; padding-left: 10px; }

      .field-label.field-label--control { color: #5aa9f0; }
      .field-label.field-label--timer { color: #5fc06a; padding-top: 20px }
      .field-label.field-label--battery { color: #2bc0a8; padding-top: 20px}
      .field-label.field-label--duration { color: #b07fe0; padding-top: 20px}
      .field-label.field-label--editable-duration { color: #e88a8a; }
      .label-row--sensor .label-text { color: #e0a23c; padding-top: 20px }
      .label-row--sensor .help-btn { margin-top: 20px; }

      .field-label {
        font-size: 11.5px; font-weight: 500; color: var(--ts);
        margin: 2px 0; letter-spacing: .02em;
        display: flex; align-items: center; gap: 2px; padding-top: 15px
      }
      .hint { font-size: 11px; color: var(--ts); line-height: 1.4; opacity: .7; }
      .inline-warn {
        align-items: flex-start;
        background: rgba(255, 167, 38, 0.12);
        border-left: 3px solid var(--warning-color, #ffa726);
        border-radius: 4px;
        color: var(--primary-text-color);
        display: flex;
        font-size: 11px;
        gap: 6px;
        line-height: 1.4;
        margin-top: 8px;
        padding: 8px 10px;
      }
      .inline-warn ha-icon {
        --mdc-icon-size: 16px;
        color: var(--warning-color, #ffa726);
        flex-shrink: 0;
      }
      .inline-warn code {
        background: var(--sf); padding: 1px 5px;
        border-radius: 4px; font-size: 11px; font-family: monospace;
      }
      .hint code {
        background: var(--sf); padding: 1px 5px;
        border-radius: 4px; font-size: 11px; font-family: monospace;
      }

      /* ===== HA Components ===== */
      ha-textfield, ha-selector, ha-icon-picker, ha-formfield {
        width: 100%;
        --ha-color-form-background: var(--sf);
        --ha-color-form-background-hover: var(--sf);
        --mdc-text-field-fill-color: var(--sf);
        --mdc-select-fill-color: var(--sf);
        --input-fill-color: var(--sf);
      }

      /* ===== HA 2026.4 Entity Picker Fix ===== */
      .picker-wrap {
        position: relative;
        z-index: 50;
        --ha-color-form-background: var(--sf);
        --ha-color-form-background-hover: var(--sf);
        --ha-color-form-background-disabled: var(--sf);
        --ha-color-neutral-95: var(--sf);
        --text-field-background-color: var(--sf);
        --mdc-text-field-fill-color: var(--sf);
        --mdc-select-fill-color: var(--sf);
        --mdc-menu-surface-fill-color: var(--bg);
        --ha-card-background: var(--bg);
        --input-fill-color: var(--sf);
        --input-dropdown-icon-color: var(--ts);
        --mdc-theme-surface: var(--bg);
      }
      .picker-wrap ha-selector, .picker-wrap ha-entity-picker {
        display: block;
      }

      /* ===== Native inputs (ed-input) ===== */
      .ed-input {
        width: 100%; box-sizing: border-box;
        background: var(--sf); color: var(--tx);
        border: 1px solid var(--bd); border-radius: 10px;
        padding: 9px 11px; font-size: 13px; font-family: inherit;
        outline: none; transition: border-color .15s ease;
      }
      .ed-input:hover { border-color: var(--ts); }
      .ed-input:focus { border-color: var(--ac); }
      .ed-input::placeholder { color: var(--ts); opacity: .55; }

      /* ===== Override grids (labels) ===== */
      .ovr-grid {
        display: grid; gap: 12px 14px;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      }
      .ovr-field { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
      .ovr-label { font-size: 11px; color: var(--ts); text-transform: capitalize; }
      .ovr-field .ed-input { padding: 7px 9px; font-size: 12.5px; }

      /* ===== Color grid (3 per row) ===== */
      .color-grid {
        display: grid; gap: 14px 12px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .color-tile { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
      .color-name { font-size: 11px; color: var(--ts); text-transform: capitalize; }
      .color-swatch {
        width: 100%; height: 30px; padding: 0; cursor: pointer;
        border: 1px solid var(--bd); border-radius: 8px; background: none;
      }
      .color-swatch::-webkit-color-swatch-wrapper { padding: 0; }
      .color-swatch::-webkit-color-swatch { border: none; border-radius: 7px; }
      .color-swatch::-moz-color-swatch { border: none; border-radius: 7px; }
      .color-hex { font-family: var(--code-font-family, monospace); font-size: 11.5px; padding: 6px 8px; }

      /* ===== Toggle Row ===== */
      .toggle-row { padding: 4px 0; }
      .si {
        display: flex; align-items: center; gap: 10px;
        padding: 6px 0; cursor: pointer;
      }
      .st { flex-shrink: 0; }
      .sl { display: flex; flex-direction: column; min-width: 0; }
      .sn { font-size: 13px; font-weight: 500; }

      /* ===== Reset Button ===== */
      .reset-btn {
        display: flex; align-items: center; gap: 4px;
        padding: 4px 10px; border: 1px solid var(--bd);
        background: none; border-radius: 6px;
        font-size: 11px; font-weight: 500; color: var(--ts);
        cursor: pointer; transition: all .15s;
        white-space: nowrap;
      }
      .reset-btn:hover {
        border-color: var(--dg); color: var(--dg);
        background: rgba(231,76,60,.06);
      }

      /* ===== Entity Card ===== */
      .entity-list { display: flex; flex-direction: column; gap: 8px; }

      .ec {
        border: 1px solid var(--bd); border-radius: var(--rd);
        background: var(--bg); overflow: hidden;
        transition: box-shadow .2s, border-color .2s;
      }
      .ec.open { overflow: visible; }
      .ec:hover { box-shadow: 0 2px 10px rgba(0,0,0,.06); }
      .ec.drag-over { border-color: var(--ac); border-style: dashed; }

      .eh {
        display: flex; align-items: center; gap: 10px;
        padding: 11px 14px;
        transition: background .15s; cursor: pointer; user-select: none;
      }
      .eh:hover { background: var(--sf); }

      .ed {
        cursor: grab; opacity: .3; transition: opacity .2s;
        display: flex; align-items: center;
      }
      .ed:hover { opacity: .7; }

      .ei { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; }
      .en {
        font-weight: 600; font-size: 13px;
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }

      .ea { display: flex; align-items: center; gap: 2px; }
      .etb, .edup, .edb {
        width: 30px; height: 30px;
        display: flex; align-items: center; justify-content: center;
        border: none; background: none; border-radius: 8px;
        color: var(--ts); cursor: pointer; transition: background .15s, color .15s;
      }
      .etb:hover { background: var(--sf); color: var(--tx); }
      .edup:hover { background: rgba(var(--acr), .08); color: var(--ac); }
      .edb:hover { background: rgba(231,76,60,.08); color: var(--dg); }

      .ec.open .etb svg { transform: rotate(180deg); }
      .etb svg { transition: transform .3s cubic-bezier(.4,0,.2,1); }

      .eb { padding: 0 14px 14px; }

      /* ===== Add Button ===== */
      .add-btn {
        display: flex; align-items: center; justify-content: center;
        gap: 8px; width: 100%; padding: 12px;
        border: 2px dashed var(--bd); background: none;
        border-radius: var(--rd); font-size: 13px; font-weight: 600;
        color: var(--ts); cursor: pointer; transition: all .2s;
      }
      .add-btn:hover {
        border-color: var(--ac); color: var(--ac);
        background: rgba(var(--acr), .04);
      }

      /* ===== Tooltip ===== */
      .tip-wrap {
        position: relative; display: inline-flex; align-items: center;
        vertical-align: middle; margin-left: 3px; outline: none;
      }
      .tip-icon {
        color: var(--ts); opacity: .5; cursor: help;
        flex-shrink: 0; transition: opacity .15s;
      }
      .tip-wrap:hover .tip-icon, .tip-wrap:focus .tip-icon {
        opacity: 1; color: var(--ac);
      }
      .tip-box {
        visibility: hidden; opacity: 0;
        position: absolute; bottom: calc(100% + 6px);
        left: 50%; transform: translateX(-50%);
        background: var(--tx); color: var(--bg);
        font-size: 11.5px; line-height: 1.45;
        padding: 7px 10px; border-radius: 8px;
        white-space: normal; width: 200px;
        pointer-events: none;
        transition: opacity .15s .1s;
        z-index: 999; box-shadow: 0 4px 16px rgba(0,0,0,.25);
        font-weight: 400; letter-spacing: 0; text-transform: none;
      }
      .tip-wrap:hover .tip-box, .tip-wrap:focus .tip-box {
        visibility: visible; opacity: 1;
      }

      /* ===== Sensor Help ===== */
      .label-row { display: flex; align-items: center; gap: 10px; }
      .label-text { font-size: 12px; color: var(--ts); font-weight: 600; }
      .help-btn {
        width: 24px; height: 24px; border-radius: 999px;
        border: 1px solid var(--bd);
        background: var(--sf); cursor: pointer;
        display: inline-flex; align-items: center; justify-content: center;
        padding: 20px; line-height: 1; flex: 0 0 auto;
        transition: all .15s;
      }
      .help-btn:hover { border-color: var(--ac); background: rgba(var(--acr), .06); }
      .help-q {
        font-weight: 800; font-size: 14px; color: var(--tx); opacity: .8;
      }

      .help-content { display: grid; gap: 10px; max-width: 860px; }
      .help-title { font-size: 16px; font-weight: 800; }
      .help-text { color: var(--tx); opacity: .9; line-height: 1.45; }
      .code {
        margin: 0; padding: 12px; border-radius: 10px;
        border: 1px solid var(--bd);
        background: var(--sf); overflow: auto;
      }
      .code code {
        white-space: pre;
        font-family: var(--code-font-family, monospace);
        font-size: 12px;
      }

      /* ===== Responsive ===== */
      @media (max-width: 500px) {
        .grid-2 { grid-template-columns: 1fr; }
        .grid-3 { grid-template-columns: 1fr 1fr; }
        .grid-pair { grid-template-columns: 1fr; }
        .color-grid { grid-template-columns: repeat(2, 1fr); }
        .tabs { flex-wrap: wrap; }
        .tb { font-size: 10px; padding: 6px 6px; }
      }
    `;}}function _0x33d2(_0xffb0e9,_0x25726b){_0xffb0e9=_0xffb0e9-0x1dc;const _0x431788=_0x4317();let _0x33d275=_0x431788[_0xffb0e9];return _0x33d275;}customElements[_0x1522fd(0x27f)]('switch-and-timer-bar-card-editor',SwitchAndTimerBarCardEditor),window[_0x1522fd(0x2e3)]=window['customCards']||[];!window[_0x1522fd(0x2e3)][_0x1522fd(0x2ea)](_0x344ab9=>_0x344ab9[_0x1522fd(0x315)]===_0x1522fd(0x2e6))&&window[_0x1522fd(0x2e3)][_0x1522fd(0x24e)]({'type':_0x1522fd(0x2e6),'name':_0x1522fd(0x234),'description':_0x1522fd(0x234),'preview':!![]});function _0x4317(){const _0xb07d9f=['mdi:battery','switch-and-timer-bar-card:durations','\x20(copy)','_closeSensorHelp','Left','_handleStop','__durationStorageKey','requestUpdate','split','color:\x20','_secondsToHHMMSS','isNaN','start_confirm_ok','toUpperCase','Watering','_getBuiltInDefaults','switch-and-timer-bar-card:\x20Lit\x20not\x20found.\x20This\x20card\x20must\x20run\x20inside\x20Home\x20Assistant.','5916632NysBvH','stringify','status_unavailable','button_start','friendly_name','_saveDurationOverrides','max','_armTimer','progress_fill','_renderColorOptions','mwc-dialog','_removeEntity','createElement','right','Active','_handleStart','_scrollEntityIntoView','__onConfirmKeyDown','_mainTab','Switch\x20and\x20Timer\x20Bar\x20Card:\x20\x27entities\x27\x20is\x20not\x20a\x20list\x20or\x20is\x20missing.','_tip','\x20field-label--','controllableEntity','state','filter','edit_duration_tooltip','ha-panel-lovelace','Front\x20Yard','#F44336','last_on_now','switch-and-timer-bar-card:armed','getLastWateringText','general','background-color:\x20','duration','_dragFromIndex','control','charging','tagName','button_stop','calculateActivePercent','__offDebounceMs','_renderEntitySection','isArray','Minutes','Optional.\x20If\x20set\x20(HH:MM:SS\x20or\x20seconds),\x20this\x20overrides\x20the\x20timer\x20helper’s\x20configured\x20duration\x20when\x20starting\x20from\x20this\x20card.\x20Leave\x20empty\x20to\x20use\x20the\x20helper\x20default.','__durationOverrides','idle','[data-entity-index=\x22','_toggleEntityExpand','active','Apply','time_format_zero','time_unit_minutes','start_confirm_cancel','toLowerCase','timer_and_entity_connected_via_automation','colors','battery','_dispatchConfig','_config','open_cover','findIndex','_getEffectiveGlobal','_disarmTimer','startsWith','customCards','switch-and-timer-bar-card-editor','DEFAULTS','switch-and-timer-bar-card','_durationEditor','configValue','0m\x2000s','some','finishes_at','Battery\x20(optional)','_resetDurationOverride','Just\x20now','dispatchEvent','__armedStorageKey','last_changed','#4CAF50','labels','LitElement','button_position','status_on','_entityTabs','.entity-head','Right','entity_','unit_of_measurement','closed','unlocked','has','__reconciledOnce','off','round','last_on_ago_minutes','light','_cancelStart','_renderIconOptions','totalDuration','_renderSensorPickerWithHelp','2427QvETdq','#000000','Start\x20anyway','delete','7zeGedz','slice','days\x20ago','playing','__sharedSwitches','querySelector','removeEventListener','Escape','__armedTimers','type','_showSensorHelp','opening','charAt','_hasUIDurationOverride','properties','edit_duration_apply','_computeEntitySig','set','Shown\x20at\x20the\x20top\x20of\x20the\x20card.\x20Leave\x20empty\x20to\x20hide.','_getEffectiveDuration','Unavailable','_onDrop','key','_duplicateEntity','\x20field--','_confirmStart','unavailable','edit_duration_minutes','formatTime','Default\x20for\x20all\x20entities.\x20If\x20enabled,\x20users\x20can\x20tap\x20the\x20total\x20time\x20on\x20the\x20card\x20to\x20change\x20the\x20duration.\x20Each\x20entity\x20can\x20still\x20override\x20this.','close_cover','title','nearest','disconnectedCallback','740JtsAle','open_valve','getAttribute','setConfig','get','callService','dropdown','getData','global','timer','mdi:stop','cover','replace','switch','preventDefault','includes','unlock','Irrigation\x20Control','finishesAt','_closeDurationEditor','getStatusText','_openDurationEditor','unknown','Reset\x20to\x20default','last_on_ago_hours','.labels','start','move','ready','html','_onDurationFieldChange','_isActive','_renderEntityPicker','_expanded','forEach','_toggleExpand','entries','floor','renderEntity','fan','streaming','valve','#FFFFFF','Cancel','_onDragOver','30YpzIxl','Invalid\x20configuration.','_callService','localStorage','styles','_loadArmedTimers','_renderSensorHelpDialog','left','render','_addEntity','_renderLabelOptions','trim','Ready','states','_renderDurationDialog','string','entityConfig','isFinite','__needsTick','_dragOverIndex','entity_id','__stopTick','stop','_loadDurationOverrides','_onDragLeave','.switch','ha-dialog','timer.example_timer','__recomputeTickNeedAndApply','map','_hasAnyDurationOverride','keydown','keys','padStart','mdi:battery-','drag-over','name','minutes\x20ago','edit_duration_seconds','edit_duration_reset','hass','stopPropagation','icons','config-changed','Switch\x20&\x20Timer\x20Bar\x20Card','error','.timer','mdi:battery-charging-','switch.example_switch','Set\x20duration','last_on_active','HA-SWITCH','If\x20enabled,\x20card\x20only\x20starts/stops\x20the\x20timer;\x20your\x20automation\x20controls\x20the\x20entity.\x20If\x20disabled,\x20card\x20turns\x20entity\x20on/off\x20directly.','_reconcileMissedTimers','attributes','_openSensorHelp','2038446VNdbXz','target','__itemsCache','mdi:battery-charging-100','_saveArmedTimers','entities','edit_duration_cancel','addEventListener','Click\x20to\x20change\x20duration','last_on_ago_days','getItem','6048960GlNnJU','setItem','.colors','push','.icons','Optional\x20custom\x20name.\x20If\x20empty,\x20card\x20uses\x20entity\x20friendly\x20name.','Last\x20run\x20sensor\x20(optional)','mdi:play','prototype','parseDuration','value','Hours','setData','_resetPath','dataTransfer','569564qktKjj','editable_duration','sensor','Entity\x20#','number','close_valve','length','now','start_confirm_body','__tickMs','lock','object','__interval','__lastOffAt','battery_state','_startConfirm','global_overrides','Position','size','status_ready','connectedCallback','open','parse','_reorderEntities','This\x20timer\x20switches\x20the\x20device\x20off\x20via\x20your\x20browser.\x20If\x20no\x20dashboard\x20tab\x20is\x20open\x20on\x20your\x20browser\x20or\x20your\x20HA\x20app\x20is\x20closed\x20when\x20the\x20timer\x20ends,\x20the\x20device\x20won\x27t\x20turn\x20off.\x20For\x20unattended\x20use,\x20enable\x20“Automation\x20Link”\x20for\x20this\x20entity\x20and\x20let\x20a\x20Home\x20Assistant\x20automation\x20handle\x20the\x20switch-off.','min','detail','fromEntries','smooth','css','is_charging','__startTick','dropEffect','\x20label-row--','_applyDurationEditor','edit_duration_hours','Timer\x20entity','define','_performStart','checked','108200MVqThi','30649800RgUxLT','_valueChanged','__lastEntitySig','Seconds','_maybeReconcile','_renderBattery','#2196F3','_onDragStart','getStubConfig','Where\x20Start/Stop\x20buttons\x20appear\x20by\x20default\x20for\x20all\x20entities.','media_player','splice','timerEntity'];_0x4317=function(){return _0xb07d9f;};return _0x4317();}

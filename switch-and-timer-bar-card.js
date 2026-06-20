const _0x1a7b4c=_0x37df;(function(_0x1b6602,_0x5c1088){const _0x289d19=_0x37df,_0x2b150f=_0x1b6602();while(!![]){try{const _0x316ab6=-parseInt(_0x289d19(0x1ac))/0x1*(-parseInt(_0x289d19(0x206))/0x2)+-parseInt(_0x289d19(0x1f5))/0x3*(-parseInt(_0x289d19(0x254))/0x4)+parseInt(_0x289d19(0x15f))/0x5+parseInt(_0x289d19(0x1d2))/0x6*(-parseInt(_0x289d19(0x151))/0x7)+parseInt(_0x289d19(0x16a))/0x8*(-parseInt(_0x289d19(0x191))/0x9)+parseInt(_0x289d19(0x1f1))/0xa*(parseInt(_0x289d19(0x22a))/0xb)+-parseInt(_0x289d19(0x27d))/0xc;if(_0x316ab6===_0x5c1088)break;else _0x2b150f['push'](_0x2b150f['shift']());}catch(_0x46c219){_0x2b150f['push'](_0x2b150f['shift']());}}}(_0x1949,0x948e6));function _0x37df(_0x1a4609,_0x41137b){_0x1a4609=_0x1a4609-0x141;const _0x19493f=_0x1949();let _0x37dfcb=_0x19493f[_0x1a4609];return _0x37dfcb;}let HaLitBase,haHtml,haCss;{const base=window['LitElement']||(customElements[_0x1a7b4c(0x228)](_0x1a7b4c(0x14e))?Object['getPrototypeOf'](customElements[_0x1a7b4c(0x228)]('ha-panel-lovelace')):null);if(!base||!base[_0x1a7b4c(0x204)]?.[_0x1a7b4c(0x1b2)]||!base['prototype']?.[_0x1a7b4c(0x1c2)]){const msg='switch-and-timer-bar-card:\x20Lit\x20not\x20found.\x20This\x20card\x20must\x20run\x20inside\x20Home\x20Assistant.';console[_0x1a7b4c(0x210)](msg),HaLitBase=class{},haHtml=()=>'',haCss=()=>'';}else HaLitBase=base,haHtml=base[_0x1a7b4c(0x204)][_0x1a7b4c(0x1b2)],haCss=base[_0x1a7b4c(0x204)][_0x1a7b4c(0x1c2)];}class SwitchAndTimerBarCard extends HaLitBase{static get[_0x1a7b4c(0x16b)](){return{'hass':{},'_config':{},'_timer':{},'_durationEditor':{},'_startConfirm':{}};}static get[_0x1a7b4c(0x281)](){const _0x47c61b=_0x1a7b4c;return{'button_position':_0x47c61b(0x1a7),'colors':{'on':_0x47c61b(0x257),'ready':_0x47c61b(0x28a),'unavailable':_0x47c61b(0x161),'button_start':'#4CAF50','button_stop':_0x47c61b(0x257),'icon':_0x47c61b(0x234),'progress_fill':'#2196F3'},'icons':{'start':'mdi:play','stop':_0x47c61b(0x235)},'labels':{'status_on':_0x47c61b(0x1dc),'status_ready':_0x47c61b(0x26b),'status_unavailable':_0x47c61b(0x19e),'last_on_active':_0x47c61b(0x1e5),'last_on_now':_0x47c61b(0x177),'last_on_ago_minutes':_0x47c61b(0x1ba),'last_on_ago_hours':_0x47c61b(0x241),'last_on_ago_days':_0x47c61b(0x1e1),'time_format_zero':'0m\x2000s','time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':_0x47c61b(0x175),'edit_duration_hours':_0x47c61b(0x1a0),'edit_duration_minutes':_0x47c61b(0x1ea),'edit_duration_seconds':_0x47c61b(0x1cb),'edit_duration_apply':_0x47c61b(0x142),'edit_duration_reset':_0x47c61b(0x1a2),'edit_duration_cancel':_0x47c61b(0x188),'edit_duration_tooltip':_0x47c61b(0x1ec),'start_confirm_body':_0x47c61b(0x231),'start_confirm_ok':_0x47c61b(0x284),'start_confirm_cancel':_0x47c61b(0x188)}};}static async['getConfigElement'](){const _0x335964=_0x1a7b4c;return document[_0x335964(0x253)]('switch-and-timer-bar-card-editor');}static[_0x1a7b4c(0x192)](){const _0x155213=_0x1a7b4c;return{'title':'Irrigation\x20Control','entities':[{'name':'Front\x20Yard','switch':_0x155213(0x1a1),'timer':_0x155213(0x1d6),'sensor':_0x155213(0x17f),'timer_and_entity_connected_via_automation':!![]}]};}static get[_0x1a7b4c(0x264)](){return haCss`
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
    `;}constructor(){const _0x548e7c=_0x1a7b4c;super(),this[_0x548e7c(0x1c1)]=null,this['__tickMs']=0x3e8,this['__needsTick']=![],this['__lastOffAt']=new Map(),this[_0x548e7c(0x185)]=0x9c4,this[_0x548e7c(0x163)]=new Set(),this['__durationOverrides']=new Map(),this[_0x548e7c(0x1ed)]=_0x548e7c(0x222),this[_0x548e7c(0x268)](),this[_0x548e7c(0x184)]=new Map(),this[_0x548e7c(0x1ab)]=_0x548e7c(0x27a),this[_0x548e7c(0x233)](),this[_0x548e7c(0x1de)]=![],this[_0x548e7c(0x232)]=null,this[_0x548e7c(0x214)]=_0x56d0d4=>{const _0x378641=_0x548e7c;if(_0x56d0d4[_0x378641(0x180)]==='Escape'&&this[_0x378641(0x232)])this['_cancelStart']();},this[_0x548e7c(0x1ef)]=null;}[_0x1a7b4c(0x268)](){const _0x299627=_0x1a7b4c;try{const _0x62204=window['localStorage']?.[_0x299627(0x1f7)](this[_0x299627(0x1ed)]);if(!_0x62204)return;const _0x38e725=JSON['parse'](_0x62204);_0x38e725&&typeof _0x38e725===_0x299627(0x197)&&(this[_0x299627(0x14c)]=new Map(Object['entries'](_0x38e725)));}catch(_0x1f7abd){}}['_saveDurationOverrides'](){const _0x24f7b7=_0x1a7b4c;try{const _0x317b01=Object[_0x24f7b7(0x1c6)](this[_0x24f7b7(0x14c)]);window[_0x24f7b7(0x1cc)]?.[_0x24f7b7(0x24d)](this[_0x24f7b7(0x1ed)],JSON[_0x24f7b7(0x25e)](_0x317b01));}catch(_0x494a66){}}['_loadArmedTimers'](){const _0x330860=_0x1a7b4c;try{const _0x5e631f=window[_0x330860(0x1cc)]?.[_0x330860(0x1f7)](this['__armedStorageKey']);if(!_0x5e631f)return;const _0x4c2b16=JSON[_0x330860(0x196)](_0x5e631f);_0x4c2b16&&typeof _0x4c2b16==='object'&&(this[_0x330860(0x184)]=new Map(Object['entries'](_0x4c2b16)));}catch(_0x2264d6){}}['_saveArmedTimers'](){const _0x203df8=_0x1a7b4c;try{const _0x14187c=Object['fromEntries'](this[_0x203df8(0x184)]);window[_0x203df8(0x1cc)]?.[_0x203df8(0x24d)](this[_0x203df8(0x1ab)],JSON[_0x203df8(0x25e)](_0x14187c));}catch(_0x5b61f0){}}[_0x1a7b4c(0x1c8)](_0x28985f,_0x4d2747,_0x19c219){const _0x3e8cb3=_0x1a7b4c;if(!_0x28985f||!_0x4d2747)return;const _0x35a401=Number['isFinite'](_0x19c219)?_0x19c219:null,_0x1dceb8=this[_0x3e8cb3(0x184)][_0x3e8cb3(0x228)](_0x28985f);if(_0x1dceb8&&_0x1dceb8[_0x3e8cb3(0x27e)]===_0x4d2747&&_0x1dceb8[_0x3e8cb3(0x258)]===_0x35a401)return;this['__armedTimers'][_0x3e8cb3(0x17e)](_0x28985f,{'switch':_0x4d2747,'finishesAt':_0x35a401}),this[_0x3e8cb3(0x270)]();}[_0x1a7b4c(0x1fd)](_0x3322d6){const _0x558e90=_0x1a7b4c;if(!_0x3322d6||!this['__armedTimers'][_0x558e90(0x1bf)](_0x3322d6))return;this[_0x558e90(0x184)][_0x558e90(0x1eb)](_0x3322d6),this[_0x558e90(0x270)]();}['_maybeReconcile'](){const _0x4ef80a=_0x1a7b4c;if(this[_0x4ef80a(0x1de)])return;if(!this[_0x4ef80a(0x16f)]||!this[_0x4ef80a(0x1f0)]?.['entities'])return;this[_0x4ef80a(0x1de)]=!![],this['_reconcileMissedTimers']();}[_0x1a7b4c(0x23e)](){const _0x71d290=_0x1a7b4c;if(!this[_0x71d290(0x16f)]||!this[_0x71d290(0x184)]['size'])return;const _0xedb6f4=this[_0x71d290(0x16f)][_0x71d290(0x162)]||{},_0x28b4e9=new Map();for(const _0x4a1d92 of this['_config']?.[_0x71d290(0x266)]||[]){if(_0x4a1d92[_0x71d290(0x1a5)])continue;if(_0x4a1d92['timer']&&_0x4a1d92['switch'])_0x28b4e9[_0x71d290(0x17e)](_0x4a1d92[_0x71d290(0x23a)],_0x4a1d92);}let _0x216ea8=![];for(const [_0x2a8aa9,_0x6f0579]of[...this[_0x71d290(0x184)]['entries']()]){const _0x455a94=_0x28b4e9['get'](_0x2a8aa9),_0x116ffc=_0xedb6f4[_0x2a8aa9];if(!_0x455a94||!_0x116ffc){this['__armedTimers']['delete'](_0x2a8aa9),_0x216ea8=!![];continue;}const _0x1af2c9=_0x116ffc['state'];if(_0x1af2c9===_0x71d290(0x240)||_0x1af2c9===_0x71d290(0x164)){if(_0x1af2c9===_0x71d290(0x240)){const _0x4e89e1=Date['parse'](_0x116ffc[_0x71d290(0x20c)]?.[_0x71d290(0x226)]||''),_0xf52165=Number['isFinite'](_0x4e89e1)?_0x4e89e1:null;_0x6f0579[_0x71d290(0x258)]!==_0xf52165&&(this[_0x71d290(0x184)][_0x71d290(0x17e)](_0x2a8aa9,{'switch':_0x455a94['switch'],'finishesAt':_0xf52165}),_0x216ea8=!![]);}continue;}const _0x4ff765=_0x455a94[_0x71d290(0x27e)],_0x4a9b03=_0xedb6f4[_0x4ff765];if(_0x4a9b03&&this['_isActive'](_0x4a9b03)){let _0x36fd60=![];this[_0x71d290(0x163)][_0x71d290(0x1bf)](_0x4ff765)&&(_0x36fd60=(this[_0x71d290(0x1f0)][_0x71d290(0x266)]||[])[_0x71d290(0x20f)](_0x27fde2=>_0x27fde2['switch']===_0x4ff765&&_0x27fde2['timer']&&_0x27fde2[_0x71d290(0x23a)]!==_0x2a8aa9&&_0xedb6f4[_0x27fde2[_0x71d290(0x23a)]]?.[_0x71d290(0x20d)]===_0x71d290(0x240)));if(!_0x36fd60){const _0x2b5ffa=Date[_0x71d290(0x156)](),_0x6ce84a=this['__lastOffAt'][_0x71d290(0x228)](_0x4ff765)||0x0;_0x2b5ffa-_0x6ce84a>=this[_0x71d290(0x185)]&&(this[_0x71d290(0x183)][_0x71d290(0x17e)](_0x4ff765,_0x2b5ffa),this['_callService'](_0x4ff765,_0x71d290(0x225)));}}this[_0x71d290(0x184)][_0x71d290(0x1eb)](_0x2a8aa9),_0x216ea8=!![];}if(_0x216ea8)this['_saveArmedTimers']();}[_0x1a7b4c(0x26a)](_0x263e4e){const _0x1834ad=_0x1a7b4c;if(!_0x263e4e)throw new Error(_0x1834ad(0x18c));const _0x392f16=SwitchAndTimerBarCard[_0x1834ad(0x281)],_0x4cb432=JSON[_0x1834ad(0x196)](JSON[_0x1834ad(0x25e)](_0x263e4e));(!_0x4cb432['entities']||!Array[_0x1834ad(0x227)](_0x4cb432['entities']))&&(console[_0x1834ad(0x28d)](_0x1834ad(0x15e)),_0x4cb432[_0x1834ad(0x266)]=[]);_0x4cb432[_0x1834ad(0x266)][_0x1834ad(0x19d)](_0x47a45b=>{const _0x5242b1=_0x1834ad;_0x47a45b['timer_and_entity_connected_via_automation']===undefined&&(_0x47a45b[_0x5242b1(0x1a5)]=!![]);}),this[_0x1834ad(0x1f0)]={..._0x392f16,..._0x4cb432,'colors':{..._0x392f16[_0x1834ad(0x20e)],..._0x4cb432[_0x1834ad(0x20e)]||{}},'icons':{..._0x392f16[_0x1834ad(0x1e0)],..._0x4cb432[_0x1834ad(0x1e0)]||{}},'labels':{..._0x392f16[_0x1834ad(0x174)],..._0x4cb432['labels']||{}}};const _0x2d868c=new Map();for(const _0x2ac17d of this[_0x1834ad(0x1f0)][_0x1834ad(0x266)]){if(_0x2ac17d[_0x1834ad(0x27e)])_0x2d868c[_0x1834ad(0x17e)](_0x2ac17d[_0x1834ad(0x27e)],(_0x2d868c['get'](_0x2ac17d[_0x1834ad(0x27e)])||0x0)+0x1);}this[_0x1834ad(0x163)]=new Set(Array['from'](_0x2d868c[_0x1834ad(0x1cf)]())[_0x1834ad(0x21c)](([,_0x34a695])=>_0x34a695>0x1)[_0x1834ad(0x269)](([_0x11acc5])=>_0x11acc5)),this[_0x1834ad(0x202)]();}[_0x1a7b4c(0x1df)](){const _0x13c2d6=_0x1a7b4c;super[_0x13c2d6(0x1df)]?.(),this[_0x13c2d6(0x202)](),this[_0x13c2d6(0x271)](),window['addEventListener']('keydown',this['__onConfirmKeyDown']);}[_0x1a7b4c(0x283)](){const _0x28c1d6=_0x1a7b4c;super[_0x28c1d6(0x283)]?.(),this['__stopTick'](),window[_0x28c1d6(0x17b)](_0x28c1d6(0x1c0),this[_0x28c1d6(0x214)]),this[_0x28c1d6(0x1de)]=![];}[_0x1a7b4c(0x1fc)](_0x5685e7){const _0x278b8f=_0x1a7b4c;if(_0x5685e7[_0x278b8f(0x1bf)](_0x278b8f(0x16f))){this[_0x278b8f(0x202)](),this['_maybeReconcile']();if(!this[_0x278b8f(0x1f0)]?.[_0x278b8f(0x266)])return;const _0xcb0957=_0x5685e7[_0x278b8f(0x228)](_0x278b8f(0x16f));for(const _0x4b76a5 of this[_0x278b8f(0x1f0)]['entities']){if(_0x4b76a5[_0x278b8f(0x1a5)])continue;const _0x3a7468=_0x4b76a5[_0x278b8f(0x23a)],_0x4c2f60=_0x4b76a5[_0x278b8f(0x27e)];if(!_0x3a7468||!_0x4c2f60)continue;const _0x4b2e4f=this[_0x278b8f(0x16f)]?.['states']?.[_0x3a7468],_0x3e6873=this[_0x278b8f(0x16f)]?.['states']?.[_0x4c2f60];if(!_0x4b2e4f)continue;if(_0x4b2e4f[_0x278b8f(0x20d)]==='active'){const _0x485559=Date[_0x278b8f(0x196)](_0x4b2e4f['attributes']?.[_0x278b8f(0x226)]||'');this[_0x278b8f(0x1c8)](_0x3a7468,_0x4c2f60,_0x485559);}const _0x1ec438=_0xcb0957?.[_0x278b8f(0x162)]?.[_0x3a7468];if(!_0x1ec438)continue;if(_0x1ec438['state']==='active'&&_0x4b2e4f[_0x278b8f(0x20d)]===_0x278b8f(0x216)){this[_0x278b8f(0x1fd)](_0x3a7468);if(!_0x3e6873)continue;if(!this[_0x278b8f(0x22e)](_0x3e6873))continue;if(this[_0x278b8f(0x163)]['has'](_0x4c2f60)){const _0x325cab=this[_0x278b8f(0x1f0)][_0x278b8f(0x266)]['some'](_0x5a3e09=>_0x5a3e09[_0x278b8f(0x27e)]===_0x4c2f60&&_0x5a3e09['timer']&&_0x5a3e09[_0x278b8f(0x23a)]!==_0x3a7468&&this[_0x278b8f(0x16f)][_0x278b8f(0x162)]?.[_0x5a3e09[_0x278b8f(0x23a)]]?.[_0x278b8f(0x20d)]===_0x278b8f(0x240));if(_0x325cab)continue;}const _0x31657d=Date['now'](),_0x4bc187=this[_0x278b8f(0x183)]['get'](_0x4c2f60)||0x0;if(_0x31657d-_0x4bc187<this[_0x278b8f(0x185)])continue;this[_0x278b8f(0x183)][_0x278b8f(0x17e)](_0x4c2f60,_0x31657d),this[_0x278b8f(0x1be)](_0x4c2f60,_0x278b8f(0x225));}}}}[_0x1a7b4c(0x18a)](){const _0x403d52=_0x1a7b4c;if(this[_0x403d52(0x1c1)])return;this[_0x403d52(0x1c1)]=setInterval(()=>{const _0x1450e9=_0x403d52;this[_0x1450e9(0x1f9)]=Date[_0x1450e9(0x156)]();},this[_0x403d52(0x168)]);}['__stopTick'](){const _0x3ccf44=_0x1a7b4c;if(!this[_0x3ccf44(0x1c1)])return;clearInterval(this[_0x3ccf44(0x1c1)]),this[_0x3ccf44(0x1c1)]=null;}[_0x1a7b4c(0x202)](){const _0x59831a=_0x1a7b4c;if(!this[_0x59831a(0x16f)]||!this[_0x59831a(0x1f0)]?.[_0x59831a(0x266)]?.[_0x59831a(0x195)]){this[_0x59831a(0x23f)]=![],this['__stopTick']();return;}const _0x41a86e=this[_0x59831a(0x16f)][_0x59831a(0x162)]||{};let _0x2d6a7e=![];for(const _0xccc201 of this['_config'][_0x59831a(0x266)]){const _0x5e7ae2=_0xccc201[_0x59831a(0x27e)];if(!_0x5e7ae2)continue;const _0x23c2df=_0xccc201['timer'],_0x1e5641=_0x23c2df?_0x41a86e[_0x23c2df]:null;if(this[_0x59831a(0x163)]['has'](_0x5e7ae2)){if(_0x1e5641&&_0x1e5641[_0x59831a(0x20d)]==='active'){_0x2d6a7e=!![];break;}continue;}const _0x1921bc=_0x41a86e[_0x5e7ae2];if(_0x1921bc&&this['_isActive'](_0x1921bc)){_0x2d6a7e=!![];break;}if(_0x1e5641&&_0x1e5641[_0x59831a(0x20d)]==='active'){_0x2d6a7e=!![];break;}}this[_0x59831a(0x23f)]=_0x2d6a7e;if(_0x2d6a7e)this[_0x59831a(0x18a)]();else this['__stopTick']();}[_0x1a7b4c(0x25d)](_0x57429c,_0x1db13d){const _0x3c120f=_0x1a7b4c,_0x129417=_0x57429c?.[_0x3c120f(0x23a)];if(_0x129417&&this[_0x3c120f(0x14c)][_0x3c120f(0x1bf)](_0x129417)){const _0x40babc=Number(this['__durationOverrides'][_0x3c120f(0x228)](_0x129417));if(Number[_0x3c120f(0x250)](_0x40babc)&&_0x40babc>=0x0)return _0x40babc;}if(_0x57429c&&_0x57429c[_0x3c120f(0x24b)]!==undefined&&_0x57429c[_0x3c120f(0x24b)]!==null&&_0x57429c[_0x3c120f(0x24b)]!==''){const _0x1f6330=this[_0x3c120f(0x26c)](_0x57429c[_0x3c120f(0x24b)]);if(_0x1f6330>0x0)return _0x1f6330;}return this[_0x3c120f(0x26c)](_0x1db13d?.[_0x3c120f(0x20c)]?.[_0x3c120f(0x24b)]);}[_0x1a7b4c(0x193)](_0x398c18){const _0x3cc410=_0x1a7b4c,_0x4e805d=_0x398c18?.[_0x3cc410(0x23a)];if(_0x4e805d&&this[_0x3cc410(0x14c)][_0x3cc410(0x1bf)](_0x4e805d))return!![];if(_0x398c18?.[_0x3cc410(0x24b)]!==undefined&&_0x398c18[_0x3cc410(0x24b)]!==null&&_0x398c18['duration']!=='')return!![];return![];}[_0x1a7b4c(0x290)](_0x3dc982){const _0x125358=_0x1a7b4c;return!!(_0x3dc982&&this[_0x125358(0x14c)]['has'](_0x3dc982));}[_0x1a7b4c(0x17a)](_0x49ee14){const _0x37e28f=_0x1a7b4c,_0x3ac908=Math[_0x37e28f(0x19a)](0x0,Math[_0x37e28f(0x150)](Number(_0x49ee14)||0x0)),_0x2d2ce9=Math['floor'](_0x3ac908/0xe10),_0x22a9ba=Math[_0x37e28f(0x150)](_0x3ac908%0xe10/0x3c),_0x3ec08e=_0x3ac908%0x3c,_0xe57213=_0xf36f4f=>String(_0xf36f4f)[_0x37e28f(0x1d7)](0x2,'0');return _0xe57213(_0x2d2ce9)+':'+_0xe57213(_0x22a9ba)+':'+_0xe57213(_0x3ec08e);}[_0x1a7b4c(0x276)](_0x31c48d,_0x4c35bc,_0x7c4053){const _0x449746=_0x1a7b4c;if(!_0x4c35bc)return;const _0x4da3e1=Math[_0x449746(0x19a)](0x0,Math[_0x449746(0x150)](Number(_0x7c4053)||0x0));this[_0x449746(0x1ef)]={'open':!![],'timerEntity':_0x4c35bc,'h':Math[_0x449746(0x150)](_0x4da3e1/0xe10),'m':Math[_0x449746(0x150)](_0x4da3e1%0xe10/0x3c),'s':_0x4da3e1%0x3c,'hasOverride':this[_0x449746(0x290)](_0x4c35bc)};}['_closeDurationEditor'](){const _0x26cf9f=_0x1a7b4c;this[_0x26cf9f(0x1ef)]=null;}[_0x1a7b4c(0x217)](_0x57956b,_0x453a8b){const _0xbd74ab=_0x1a7b4c;if(!this[_0xbd74ab(0x1ef)])return;let _0x46b85b=parseInt(_0x453a8b,0xa);if(!Number['isFinite'](_0x46b85b)||_0x46b85b<0x0)_0x46b85b=0x0;if(_0x57956b==='m'||_0x57956b==='s')_0x46b85b=Math[_0xbd74ab(0x1d8)](_0x46b85b,0x3b);if(_0x57956b==='h')_0x46b85b=Math[_0xbd74ab(0x1d8)](_0x46b85b,0x63);this[_0xbd74ab(0x1ef)]={...this[_0xbd74ab(0x1ef)],[_0x57956b]:_0x46b85b};}[_0x1a7b4c(0x251)](){const _0x984575=_0x1a7b4c;if(!this[_0x984575(0x1ef)])return;const {timerEntity:_0x16876c,h:_0x196459,m:_0x278e26,s:_0x29c2f5}=this[_0x984575(0x1ef)],_0x230a31=_0x196459*0xe10+_0x278e26*0x3c+_0x29c2f5;_0x16876c&&_0x230a31>0x0&&(this[_0x984575(0x14c)][_0x984575(0x17e)](_0x16876c,_0x230a31),this['_saveDurationOverrides']()),this[_0x984575(0x1ef)]=null,this['__recomputeTickNeedAndApply']();}[_0x1a7b4c(0x248)](){const _0x2ec6f0=_0x1a7b4c;if(!this[_0x2ec6f0(0x1ef)])return;const {timerEntity:_0x5eb7d2}=this[_0x2ec6f0(0x1ef)];_0x5eb7d2&&this[_0x2ec6f0(0x14c)][_0x2ec6f0(0x1bf)](_0x5eb7d2)&&(this[_0x2ec6f0(0x14c)][_0x2ec6f0(0x1eb)](_0x5eb7d2),this[_0x2ec6f0(0x198)]()),this['_durationEditor']=null;}[_0x1a7b4c(0x1be)](_0x4c64ec,_0x30bcda){const _0x2cdd55=_0x1a7b4c;if(!this[_0x2cdd55(0x16f)]||!_0x4c64ec)return;const _0x1a05e2=_0x4c64ec[_0x2cdd55(0x24c)]('.')[0x0];let _0x162b76;switch(_0x1a05e2){case _0x2cdd55(0x229):_0x162b76=_0x30bcda==='on'?_0x2cdd55(0x25f):_0x2cdd55(0x194);break;case _0x2cdd55(0x24a):_0x162b76=_0x30bcda==='on'?_0x2cdd55(0x285):_0x2cdd55(0x1b4);break;case _0x2cdd55(0x215):_0x162b76=_0x30bcda==='on'?_0x2cdd55(0x215):_0x2cdd55(0x19f);break;default:_0x162b76=_0x30bcda==='on'?_0x2cdd55(0x1db):'turn_off';break;}this['hass']['callService'](_0x1a05e2,_0x162b76,{'entity_id':_0x4c64ec});}[_0x1a7b4c(0x22e)](_0x32c534){const _0xee469b=_0x1a7b4c;if(!_0x32c534)return![];const _0xccd901=_0x32c534[_0xee469b(0x18f)][_0xee469b(0x24c)]('.')[0x0],_0x1cbced=_0x32c534[_0xee469b(0x20d)];switch(_0xccd901){case _0xee469b(0x229):return _0x1cbced===_0xee469b(0x1c5);case _0xee469b(0x24a):return _0x1cbced===_0xee469b(0x1ad)||_0x1cbced===_0xee469b(0x23b);case _0xee469b(0x215):return _0x1cbced===_0xee469b(0x21d);case _0xee469b(0x203):return['playing',_0xee469b(0x172),'on'][_0xee469b(0x279)](_0x1cbced);default:return _0x1cbced==='on';}}[_0x1a7b4c(0x182)](){const _0x5ef005=_0x1a7b4c;if(!HaLitBase||!haHtml)return'';if(!this[_0x5ef005(0x16f)]||!this['_config'])return haHtml``;const _0x5662c1=Date[_0x5ef005(0x156)]();return haHtml`
      <ha-card>
        ${this['_config'][_0x5ef005(0x200)]?haHtml`<div class="card-header">${this[_0x5ef005(0x1f0)][_0x5ef005(0x200)]}</div>`:''}
        <div class="container">
          ${this[_0x5ef005(0x1f0)][_0x5ef005(0x266)]&&this['_config'][_0x5ef005(0x266)][_0x5ef005(0x269)](_0x127845=>this[_0x5ef005(0x288)](_0x127845,_0x5662c1))}
        </div>
      </ha-card>
      ${this[_0x5ef005(0x255)]()}
      ${this[_0x5ef005(0x280)]()}
    `;}[_0x1a7b4c(0x280)](){const _0x4a5ec2=_0x1a7b4c;if(!this[_0x4a5ec2(0x232)])return'';const _0x1c7a18=this[_0x4a5ec2(0x1f0)]?.['labels']||{};return haHtml`
      <div class="stbc-modal" @click=${()=>this[_0x4a5ec2(0x243)]()}>
        <div class="stbc-modal-card" @click=${_0xa521d8=>_0xa521d8[_0x4a5ec2(0x149)]()}>
          <div class="confirm-callout">
            <ha-icon icon="mdi:alert-outline"></ha-icon>
            <span>${_0x1c7a18[_0x4a5ec2(0x26d)]||_0x4a5ec2(0x231)}</span>
          </div>
          <div class="duration-actions">
            <button
              class="dlg-btn dlg-btn-text"
              @click=${()=>this[_0x4a5ec2(0x243)]()}
            >${_0x1c7a18['start_confirm_cancel']||_0x4a5ec2(0x188)}</button>
            <button
              class="dlg-btn dlg-btn-primary"
              @click=${()=>this[_0x4a5ec2(0x261)]()}
            >${_0x1c7a18[_0x4a5ec2(0x171)]||_0x4a5ec2(0x284)}</button>
          </div>
        </div>
      </div>
    `;}['_renderDurationDialog'](){const _0x8e7cf=_0x1a7b4c;if(!this['_durationEditor']||!this['_durationEditor'][_0x8e7cf(0x1ad)])return'';const _0xaefa5c=this[_0x8e7cf(0x1f0)]?.['labels']||{},_0x34f377=this['_durationEditor'];return haHtml`
      <ha-dialog
        open
        hideActions
        heading="${_0xaefa5c['edit_duration_title']||'Set\x20duration'}"
        @closed=${()=>this[_0x8e7cf(0x186)]()}
      >
        <div class="duration-dialog-body">
          <div class="duration-fields">
            <label class="duration-field">
              <span class="duration-field-label">${_0xaefa5c[_0x8e7cf(0x22d)]||'Hours'}</span>
              <input
                type="number"
                min="0"
                max="99"
                inputmode="numeric"
                .value=${String(_0x34f377['h'])}
                @input=${_0x72cf14=>this[_0x8e7cf(0x217)]('h',_0x72cf14[_0x8e7cf(0x256)]['value'])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0xaefa5c[_0x8e7cf(0x209)]||_0x8e7cf(0x1ea)}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x34f377['m'])}
                @input=${_0x13d116=>this[_0x8e7cf(0x217)]('m',_0x13d116[_0x8e7cf(0x256)][_0x8e7cf(0x1b8)])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0xaefa5c[_0x8e7cf(0x1d5)]||_0x8e7cf(0x1cb)}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x34f377['s'])}
                @input=${_0x1f5974=>this[_0x8e7cf(0x217)]('s',_0x1f5974[_0x8e7cf(0x256)][_0x8e7cf(0x1b8)])}
              />
            </label>
          </div>
          <div class="duration-actions">
            <button
              class="dlg-btn dlg-btn-text"
              @click=${()=>this[_0x8e7cf(0x186)]()}
            >${_0xaefa5c[_0x8e7cf(0x18d)]||_0x8e7cf(0x188)}</button>
            ${_0x34f377['hasOverride']?haHtml`<button
                  class="dlg-btn dlg-btn-text dlg-btn-reset"
                  @click=${()=>this['_resetDurationOverride']()}
                >${_0xaefa5c[_0x8e7cf(0x21e)]||_0x8e7cf(0x1a2)}</button>`:''}
            <button
              class="dlg-btn dlg-btn-primary"
              @click=${()=>this[_0x8e7cf(0x251)]()}
            >${_0xaefa5c['edit_duration_apply']||_0x8e7cf(0x142)}</button>
          </div>
        </div>
      </ha-dialog>
    `;}[_0x1a7b4c(0x288)](_0x184127,_0x57c7b2){const _0x53993a=_0x1a7b4c,_0xfec74f=_0x184127[_0x53993a(0x27e)],_0x1c3793=_0x184127[_0x53993a(0x23a)],_0x49bf4a=_0x184127['sensor'],_0x231e58=_0x184127['battery'];if(!_0xfec74f)return haHtml`<div class="warning">Entity 'switch' is not defined.</div>`;const _0x245130=this[_0x53993a(0x16f)][_0x53993a(0x162)]||{},_0x59a766=_0x245130[_0xfec74f],_0x492494=_0x1c3793?_0x245130[_0x1c3793]:undefined,_0x3c1ec1=_0x49bf4a?_0x245130[_0x49bf4a]:undefined;let _0x1a9b60;if(typeof _0x231e58===_0x53993a(0x20b)&&_0x245130[_0x231e58])_0x1a9b60=_0x245130[_0x231e58];else _0x231e58!==undefined&&_0x231e58!==null&&_0x231e58!==''&&Number[_0x53993a(0x250)](Number(_0x231e58))?_0x1a9b60={'state':String(Number(_0x231e58)),'attributes':{'unit_of_measurement':'%'}}:_0x1a9b60=undefined;if(!_0x59a766)return haHtml`<div class="warning">Entity not found: ${_0xfec74f}</div>`;const _0x1b02b0=this[_0x53993a(0x22e)](_0x59a766),_0x1f51f6=['unavailable',_0x53993a(0x1b3)]['includes'](_0x59a766[_0x53993a(0x20d)]),_0x9ee651=_0x184127[_0x53993a(0x294)]||this[_0x53993a(0x1f0)][_0x53993a(0x294)],_0x29eec5=this[_0x53993a(0x163)][_0x53993a(0x1bf)](_0xfec74f),_0x20b754=_0x29eec5&&_0x492494?_0x492494[_0x53993a(0x20d)]===_0x53993a(0x240):_0x1b02b0,_0x2293af={...this[_0x53993a(0x1f0)][_0x53993a(0x20e)],..._0x184127[_0x53993a(0x20e)]||{}},_0x32c331={...this[_0x53993a(0x1f0)][_0x53993a(0x1e0)],..._0x184127[_0x53993a(0x1e0)]||{}},_0x44f3c9={...this[_0x53993a(0x1f0)]['labels'],..._0x184127[_0x53993a(0x174)]||{}},_0x447861=this[_0x53993a(0x26c)](_0x492494?.['attributes']?.['duration']),_0x1aef7a=_0x492494?.[_0x53993a(0x20d)]==='active',_0xd5200e=_0x1aef7a?_0x447861:this[_0x53993a(0x25d)](_0x184127,_0x492494),_0xfbffd1=_0x184127['editable_duration']!==undefined?!!_0x184127[_0x53993a(0x178)]:!!this[_0x53993a(0x1f0)]['editable_duration'],_0x518631=_0xfbffd1&&!!_0x1c3793&&!_0x20b754;let _0x51a46a=0x0;if(_0x1b02b0){const _0x4991c5=Date[_0x53993a(0x196)](_0x59a766[_0x53993a(0x1e7)]);!Number['isNaN'](_0x4991c5)&&(_0x51a46a=Math[_0x53993a(0x1d8)]((_0x57c7b2-_0x4991c5)/0x3e8,0x708));}let _0x4685fb=0x0;if(_0x492494?.[_0x53993a(0x20d)]===_0x53993a(0x240)&&_0xd5200e>0x0){const _0xb5d07f=Date[_0x53993a(0x196)](_0x492494[_0x53993a(0x1e7)]),_0x3c65eb=(Number[_0x53993a(0x27b)](_0xb5d07f)?_0x57c7b2:_0xb5d07f)+_0xd5200e*0x3e8,_0x5438b9=Math[_0x53993a(0x19a)](0x0,(_0x3c65eb-_0x57c7b2)/0x3e8);_0x4685fb=Math[_0x53993a(0x19a)](0x0,_0xd5200e-_0x5438b9);}else _0x20b754&&(_0x4685fb=_0x51a46a);const _0x4a0787=this['calculateActivePercent'](_0x4685fb,_0xd5200e);let _0x5c3179=_0x53993a(0x1ce)+_0x2293af['ready']+';';if(_0x1f51f6)_0x5c3179=_0x53993a(0x1ce)+_0x2293af[_0x53993a(0x179)]+';';else{if(_0x20b754)_0x5c3179=_0x53993a(0x1ce)+_0x2293af['on']+';';}const _0x4e150a=_0x53993a(0x1ce)+_0x2293af[_0x53993a(0x262)]+';',_0xb2ab38='background-color:\x20'+_0x2293af[_0x53993a(0x167)]+';',_0x1a6cd8=_0x53993a(0x15c)+_0x2293af[_0x53993a(0x143)]+';',_0x58f8f5=haHtml`
      <div class="timer-controls">
        ${!_0x20b754&&_0x1c3793?haHtml`<button
              class="control-btn start"
              style="${_0x4e150a}"
              @click=${()=>this[_0x53993a(0x1a4)](_0x1c3793,_0xfec74f,_0x184127,_0xd5200e)}
            >
              <ha-icon icon="${_0x32c331[_0x53993a(0x19c)]}" style="${_0x1a6cd8}"></ha-icon>
            </button>`:''}
        ${_0x20b754&&_0x1c3793?haHtml`<button
              class="control-btn stop"
              style="${_0xb2ab38}"
              @click=${()=>this[_0x53993a(0x144)](_0x1c3793,_0xfec74f,_0x184127)}
            >
              <ha-icon icon="${_0x32c331['stop']}" style="${_0x1a6cd8}"></ha-icon>
            </button>`:''}
      </div>
    `,_0x30e521=this[_0x53993a(0x1e8)](_0x4685fb,_0x44f3c9)+_0x53993a(0x1a6)+this[_0x53993a(0x1e8)](_0xd5200e,_0x44f3c9),_0x498a3a=_0x518631?haHtml`<span
          class="duration-editable"
          title="${_0x44f3c9[_0x53993a(0x24f)]}"
          @click=${()=>this['_openDurationEditor'](_0x184127,_0x1c3793,_0xd5200e)}
        >
          ${_0x30e521}
          <ha-icon icon="mdi:pencil" class="edit-icon"></ha-icon>
        </span>`:haHtml`<span>${_0x30e521}</span>`;return haHtml`
      <div class="entity-card">
        <div class="header">
          <div class="title" style="${_0x20b754?_0x53993a(0x15c)+_0x2293af['on']:''}">
            ${_0x184127[_0x53993a(0x1dd)]||_0x59a766[_0x53993a(0x20c)]['friendly_name']||_0xfec74f}
            ${this[_0x53993a(0x1c4)](_0x1a9b60)}
          </div>
          <div class="status" style="${_0x5c3179}">
            ${this[_0x53993a(0x1d0)](_0x59a766,_0x492494,_0x44f3c9,_0x20b754)}
          </div>
        </div>

        <div class="control-wrapper ${_0x9ee651}">
          ${_0x9ee651===_0x53993a(0x1a7)?_0x58f8f5:''}
          <div class="timeline-container">
            <div class="progress-bar">
              <div
                class="progress-fill"
                style="width: ${_0x4a0787}%; background-color: ${_0x2293af[_0x53993a(0x274)]};"
              ></div>
            </div>
            <div class="time-info">
              <span>${this[_0x53993a(0x267)](_0x3c1ec1,_0x59a766,_0x44f3c9,_0x57c7b2,_0x20b754)}</span>
              ${_0x498a3a}
            </div>
          </div>
          ${_0x9ee651===_0x53993a(0x15a)?_0x58f8f5:''}
        </div>
      </div>
    `;}async[_0x1a7b4c(0x1a4)](_0x330b23,_0x2be3ee,_0x3b009e,_0x47c0a8){const _0x10d972=_0x1a7b4c,_0xff720=!_0x3b009e?.[_0x10d972(0x1a5)]&&_0x330b23;if(_0xff720){this['_startConfirm']={'timerEntity':_0x330b23,'controllableEntity':_0x2be3ee,'entityConfig':_0x3b009e,'totalDuration':_0x47c0a8};return;}this[_0x10d972(0x275)](_0x330b23,_0x2be3ee,_0x3b009e,_0x47c0a8);}[_0x1a7b4c(0x261)](){const _0x2af5a5=_0x1a7b4c,_0x58e465=this[_0x2af5a5(0x232)];this[_0x2af5a5(0x232)]=null;if(!_0x58e465)return;this[_0x2af5a5(0x275)](_0x58e465[_0x2af5a5(0x1f2)],_0x58e465[_0x2af5a5(0x219)],_0x58e465['entityConfig'],_0x58e465['totalDuration']);}[_0x1a7b4c(0x243)](){this['_startConfirm']=null;}['_performStart'](_0x571b66,_0x204710,_0x2ae827,_0x1ce752){const _0x5eecb9=_0x1a7b4c;if(!_0x2ae827[_0x5eecb9(0x1a5)])this[_0x5eecb9(0x1be)](_0x204710,'on');if(!_0x2ae827[_0x5eecb9(0x1a5)]&&_0x571b66&&_0x204710){const _0x5f1c86=Number[_0x5eecb9(0x250)](_0x1ce752)&&_0x1ce752>0x0?Date['now']()+_0x1ce752*0x3e8:null;this[_0x5eecb9(0x1c8)](_0x571b66,_0x204710,_0x5f1c86);}const _0x490819={'entity_id':_0x571b66};this[_0x5eecb9(0x193)](_0x2ae827)&&Number[_0x5eecb9(0x250)](_0x1ce752)&&_0x1ce752>0x0&&(_0x490819['duration']=this[_0x5eecb9(0x17a)](_0x1ce752)),this[_0x5eecb9(0x16f)]['callService'](_0x5eecb9(0x23a),_0x5eecb9(0x19c),_0x490819);}async[_0x1a7b4c(0x144)](_0x31f159,_0x3b0245,_0x51c3af){const _0x39e31f=_0x1a7b4c;this[_0x39e31f(0x1fd)](_0x31f159);if(_0x31f159)await this[_0x39e31f(0x16f)][_0x39e31f(0x1b0)](_0x39e31f(0x23a),_0x39e31f(0x1b7),{'entity_id':_0x31f159});if(!_0x3b0245)return;if(_0x51c3af?.[_0x39e31f(0x1a5)])return;if(this[_0x39e31f(0x163)]['has'](_0x3b0245)){const _0x98747e=this['_config']?.[_0x39e31f(0x266)]?.['some'](_0x1412b3=>_0x1412b3[_0x39e31f(0x27e)]===_0x3b0245&&_0x1412b3[_0x39e31f(0x23a)]&&_0x1412b3[_0x39e31f(0x23a)]!==_0x31f159&&this[_0x39e31f(0x16f)][_0x39e31f(0x162)]?.[_0x1412b3[_0x39e31f(0x23a)]]?.[_0x39e31f(0x20d)]===_0x39e31f(0x240));if(_0x98747e)return;}this[_0x39e31f(0x1be)](_0x3b0245,'off');}[_0x1a7b4c(0x26c)](_0x181ed4){const _0x10f781=_0x1a7b4c;if(!_0x181ed4)return 0x0;if(typeof _0x181ed4==='string'&&_0x181ed4[_0x10f781(0x279)](':')){const _0x4e0a95=_0x181ed4[_0x10f781(0x24c)](':');if(_0x4e0a95[_0x10f781(0x195)]===0x3){const _0x2ec201=parseInt(_0x4e0a95[0x0],0xa),_0x1d9a74=parseInt(_0x4e0a95[0x1],0xa),_0x18b689=parseInt(_0x4e0a95[0x2],0xa);return(Number[_0x10f781(0x27b)](_0x2ec201)?0x0:_0x2ec201)*0xe10+(Number['isNaN'](_0x1d9a74)?0x0:_0x1d9a74)*0x3c+(Number['isNaN'](_0x18b689)?0x0:_0x18b689);}}const _0x210d95=typeof _0x181ed4===_0x10f781(0x16c)?_0x181ed4:parseFloat(_0x181ed4);return Number[_0x10f781(0x250)](_0x210d95)?_0x210d95:0x0;}[_0x1a7b4c(0x28f)](_0x8c3ba1,_0x18c630){const _0x3a1f5e=_0x1a7b4c;if(!(_0x18c630>0x0))return 0x0;const _0x485e49=_0x8c3ba1/_0x18c630*0x64;return Math[_0x3a1f5e(0x1d8)](0x64,Math[_0x3a1f5e(0x19a)](0x0,_0x485e49));}['formatTime'](_0x2e1998,_0x110745){const _0x3ba646=_0x1a7b4c,_0x30a38a=Number(_0x2e1998);if(!Number[_0x3ba646(0x250)](_0x30a38a)||_0x30a38a<=0x0)return _0x110745[_0x3ba646(0x1e4)];const _0x2a2327=Math[_0x3ba646(0x150)](_0x30a38a/0x3c),_0x2510e8=Math[_0x3ba646(0x150)](_0x30a38a%0x3c);return''+_0x2a2327+_0x110745[_0x3ba646(0x1f6)]+'\x20'+String(_0x2510e8)[_0x3ba646(0x1d7)](0x2,'0')+_0x110745[_0x3ba646(0x153)];}['_renderBattery'](_0x374c16){const _0x35fa29=_0x1a7b4c;if(!_0x374c16)return'';const _0x458ef8=_0x374c16[_0x35fa29(0x20d)];if(_0x458ef8==null||[_0x35fa29(0x179),_0x35fa29(0x1b3),''][_0x35fa29(0x279)](String(_0x458ef8)))return'';const _0x144f63=Number(_0x458ef8),_0x3b004f=Number[_0x35fa29(0x250)](_0x144f63),_0x367f4c=_0x374c16[_0x35fa29(0x20c)]?.[_0x35fa29(0x28e)]||(_0x3b004f?'%':''),_0xe57e31=_0x3b004f?''+Math[_0x35fa29(0x189)](_0x144f63)+_0x367f4c:''+_0x458ef8+(_0x367f4c?'\x20'+_0x367f4c:''),_0x1677a3=_0x374c16[_0x35fa29(0x20c)]||{},_0x19d344=_0x1677a3['is_charging']===!![]||_0x1677a3[_0x35fa29(0x26f)]===!![]||[_0x35fa29(0x26f),'on'][_0x35fa29(0x279)](String(_0x1677a3[_0x35fa29(0x146)]??'')['toLowerCase']());let _0x46ceca='mdi:battery';if(_0x3b004f){const _0x4bd56a=Math[_0x35fa29(0x19a)](0x0,Math[_0x35fa29(0x1d8)](0x64,_0x144f63)),_0x3dcf4e=Math['round'](_0x4bd56a/0xa)*0xa;_0x19d344?_0x46ceca=_0x3dcf4e<=0x0?_0x35fa29(0x260):_0x3dcf4e>=0x64?_0x35fa29(0x16d):_0x35fa29(0x221)+_0x3dcf4e:_0x46ceca=_0x3dcf4e<=0x0?_0x35fa29(0x1c9):_0x3dcf4e>=0x64?_0x35fa29(0x1cd):_0x35fa29(0x252)+_0x3dcf4e;}return haHtml`<span class="battery"><ha-icon icon="${_0x46ceca}"></ha-icon>${_0xe57e31}</span>`;}[_0x1a7b4c(0x1d0)](_0x1513cd,_0x5ce9cd,_0x1cb709,_0xf6bd40){const _0x269d19=_0x1a7b4c;if(!_0x1513cd)return _0x1cb709[_0x269d19(0x1fa)];if([_0x269d19(0x179),'unknown']['includes'](_0x1513cd[_0x269d19(0x20d)]))return _0x1cb709[_0x269d19(0x1fa)];const _0x286656=_0xf6bd40!==undefined?_0xf6bd40:this['_isActive'](_0x1513cd);if(_0x286656)return _0x1cb709[_0x269d19(0x230)];return _0x1cb709[_0x269d19(0x212)];}[_0x1a7b4c(0x267)](_0x3b1e2e,_0x4391e7,_0x1138e0,_0x2062e8,_0xb1424f){const _0x5d9bff=_0x1a7b4c,_0x1eae57=_0xb1424f!==undefined?_0xb1424f:this['_isActive'](_0x4391e7);if(_0x1eae57)return _0x1138e0[_0x5d9bff(0x21f)];if(!_0x3b1e2e||!_0x3b1e2e['state'])return'';const _0x2f7903=Date[_0x5d9bff(0x196)](_0x3b1e2e['state']);if(Number[_0x5d9bff(0x27b)](_0x2f7903))return _0x3b1e2e['state'];const _0x15067e=Math[_0x5d9bff(0x150)]((_0x2062e8-_0x2f7903)/0x3e8),_0x381c31=Math['floor'](_0x15067e/0x3c),_0x62b182=Math[_0x5d9bff(0x150)](_0x381c31/0x3c),_0x5ad89c=Math[_0x5d9bff(0x150)](_0x62b182/0x18);if(_0x15067e<0x3c)return _0x1138e0[_0x5d9bff(0x25b)];if(_0x381c31<0x3c)return _0x381c31+'\x20'+_0x1138e0[_0x5d9bff(0x1c3)];if(_0x62b182<0x18)return _0x62b182+'\x20'+_0x1138e0[_0x5d9bff(0x1d3)];return _0x5ad89c+'\x20'+_0x1138e0[_0x5d9bff(0x242)];}}customElements[_0x1a7b4c(0x155)](_0x1a7b4c(0x17c),SwitchAndTimerBarCard);function _0x1949(){const _0x1e5ab8=['customCards','right','move','color:\x20','Override\x20global\x20button\x20position\x20for\x20this\x20entity\x20only.','Switch\x20and\x20Timer\x20Bar\x20Card:\x20\x27entities\x27\x20is\x20not\x20a\x20list\x20or\x20is\x20missing.','2732570hWNmCy','0m\x2000s','#F44336','states','__sharedSwitches','paused','_computeEntitySig','querySelector','button_stop','__tickMs','Position','8YkviBh','properties','number','mdi:battery-charging-100','push','hass','_toggleEntityExpand','start_confirm_ok','streaming','Right','labels','Set\x20duration','Shown\x20at\x20the\x20top\x20of\x20the\x20card.\x20Leave\x20empty\x20to\x20hide.','Just\x20now','editable_duration','unavailable','_secondsToHHMMSS','removeEventListener','switch-and-timer-bar-card','dispatchEvent','set','sensor.example_last_watered','key','requestUpdate','render','__lastOffAt','__armedTimers','__offDebounceMs','_closeDurationEditor','tagName','Cancel','round','__startTick','__lastEntitySig','Invalid\x20configuration.','edit_duration_cancel','input_datetime','entity_id','_scrollEntityIntoView','7888590QvbyPM','getStubConfig','_hasAnyDurationOverride','open_cover','length','parse','object','_saveDurationOverrides','#000000','max','battery','start','forEach','Unavailable','unlock','Hours','switch.example_switch','Reset\x20to\x20default','entities.','_handleStart','timer_and_entity_connected_via_automation','\x20/\x20','left','sensor','_renderColorOptions','renderRoot','__armedStorageKey','74746huJCsH','open','scrollIntoView','_onDragOver','callService','_onDrop','html','unknown','close_valve','ha-dialog','edit_duration_apply','finish','value','Left','minutes\x20ago','.labels','config-changed','_valueChanged','_callService','has','keydown','__interval','css','last_on_ago_minutes','_renderBattery','closed','fromEntries','splice','_armTimer','mdi:battery-outline','_onDragStart','Seconds','localStorage','mdi:battery','background-color:\x20','entries','getStatusText','_dispatchConfig','150mqcseH','last_on_ago_hours','_onDragLeave','edit_duration_seconds','timer.example_timer','padStart','min','_pruneDefaults','_expanded','turn_on','Watering','name','__reconciledOnce','connectedCallback','icons','days\x20ago','Entity\x20#','findIndex','time_format_zero','Active','_renderEntitySection','last_changed','formatTime','Last\x20run\x20sensor\x20(optional)','Minutes','delete','Click\x20to\x20change\x20duration','__durationStorageKey','checked','_durationEditor','_config','10TPwYkD','timerEntity','_renderEntityPicker','_renderLabelOptions','18ugrnNR','time_unit_minutes','getItem','_dragOverIndex','_timer','status_unavailable','.switch','updated','_disarmTimer','_renderIconOptions','_entityTabs','title','Switch\x20&\x20Timer\x20Bar\x20Card','__recomputeTickNeedAndApply','media_player','prototype','entity_','26ZlSLVY','replace','global_overrides','edit_duration_minutes','_reorderEntities','string','attributes','state','colors','some','error','mwc-dialog','status_ready','type','__onConfirmKeyDown','lock','idle','_onDurationFieldChange','friendly_name','controllableEntity','nearest','Optional.\x20If\x20set\x20(HH:MM:SS\x20or\x20seconds),\x20this\x20overrides\x20the\x20timer\x20helper’s\x20configured\x20duration\x20when\x20starting\x20from\x20this\x20card.\x20Leave\x20empty\x20to\x20use\x20the\x20helper\x20default.','filter','unlocked','edit_duration_reset','last_on_active','_closeSensorHelp','mdi:battery-charging-','switch-and-timer-bar-card:durations','\x20(copy)','\x20label-row--','off','finishes_at','isArray','get','cover','4008433RFwmAT','_getBuiltInDefaults','.sensor','edit_duration_hours','_isActive','preventDefault','status_on','This\x20timer\x20switches\x20the\x20device\x20off\x20from\x20your\x20browser.\x20If\x20no\x20dashboard\x20is\x20open\x20when\x20the\x20timer\x20ends,\x20the\x20device\x20won\x27t\x20turn\x20off.\x20For\x20unattended\x20use,\x20enable\x20“Automation\x20Link”\x20for\x20this\x20entity\x20and\x20let\x20a\x20Home\x20Assistant\x20automation\x20handle\x20the\x20switch-off.','_startConfirm','_loadArmedTimers','#FFFFFF','mdi:stop','Battery\x20(optional)','startsWith','Use\x20global','Where\x20Start/Stop\x20buttons\x20appear\x20by\x20default\x20for\x20all\x20entities.','timer','opening','text/plain','light','_reconcileMissedTimers','__needsTick','active','hours\x20ago','last_on_ago_days','_cancelStart','_renderSensorPickerWithHelp','_getEffectiveGlobal','Control\x20entity\x20(switch\x20/\x20light\x20/\x20cover\x20/\x20valve\x20/\x20lock\x20/\x20etc.)','trim','_resetDurationOverride','start_confirm_cancel','valve','duration','split','setItem','_removeEntity','edit_duration_tooltip','isFinite','_applyDurationEditor','mdi:battery-','createElement','104228KxFvyQ','_renderDurationDialog','target','#2196F3','finishesAt','smooth','configValue','last_on_now','[data-entity-index=\x22','_getEffectiveDuration','stringify','close_cover','mdi:battery-charging-outline','_confirmStart','button_start','getData','styles','.timer','entities','getLastWateringText','_loadDurationOverrides','map','setConfig','Ready','parseDuration','start_confirm_body','_resetPath','charging','_saveArmedTimers','_maybeReconcile','dataTransfer','general','progress_fill','_performStart','_openDurationEditor','_addEntity','_mainTab','includes','switch-and-timer-bar-card:armed','isNaN','_showSensorHelp','4802232SUZOrA','switch','detail','_renderStartConfirmDialog','DEFAULTS','_duplicateEntity','disconnectedCallback','Start\x20anyway','open_valve','.battery','charAt','renderEntity','.icons','#4CAF50','.colors','HA-SWITCH','warn','unit_of_measurement','calculateActivePercent','_hasUIDurationOverride','.entity-head','_tip','__itemsCache','button_position','mdi:play','Apply','icon','_handleStop','dropdown','battery_state','_openSensorHelp','global','stopPropagation','setData','keys','__durationOverrides','fan','ha-panel-lovelace','control','floor','43057Cdfdan','\x20field--','time_unit_seconds','clear','define','now','drag-over','_dragFromIndex'];_0x1949=function(){return _0x1e5ab8;};return _0x1949();}class SwitchAndTimerBarCardEditor extends HaLitBase{static get[_0x1a7b4c(0x16b)](){return{'hass':{},'_config':{'state':!![]},'_expanded':{'state':!![]},'_dragOverIndex':{'state':!![]},'_showSensorHelp':{'state':!![]},'_mainTab':{'state':!![]},'_entityTabs':{'state':!![]}};}constructor(){const _0x609132=_0x1a7b4c;super(),this['__itemsCache']=new Map(),this['__lastEntitySig']=null,this['_expanded']={'global_overrides':![],'entities':![]},this[_0x609132(0x1f8)]=null,this[_0x609132(0x158)]=null,this[_0x609132(0x27c)]=![],this[_0x609132(0x278)]=_0x609132(0x273),this[_0x609132(0x1ff)]={},this[_0x609132(0x147)]=_0x3fff67=>{const _0x2585e7=_0x609132;if(_0x3fff67)_0x3fff67[_0x2585e7(0x149)]();this[_0x2585e7(0x27c)]=!![];},this[_0x609132(0x220)]=()=>{const _0x3b0cfe=_0x609132;this[_0x3b0cfe(0x27c)]=![];};}['setConfig'](_0x2d2481){const _0x423ee9=_0x1a7b4c,_0x1b8d86=JSON[_0x423ee9(0x196)](JSON[_0x423ee9(0x25e)](_0x2d2481||{}));if(!Array[_0x423ee9(0x227)](_0x1b8d86['entities']))_0x1b8d86[_0x423ee9(0x266)]=[];_0x1b8d86['colors']=_0x1b8d86[_0x423ee9(0x20e)]||{},_0x1b8d86[_0x423ee9(0x1e0)]=_0x1b8d86['icons']||{},_0x1b8d86[_0x423ee9(0x174)]=_0x1b8d86['labels']||{},_0x1b8d86[_0x423ee9(0x266)]['forEach']((_0x453ec7,_0x4f0e31)=>{const _0x59b38f=_0x423ee9;if(this[_0x59b38f(0x1da)]['entity_'+_0x4f0e31]===undefined)this[_0x59b38f(0x1da)][_0x59b38f(0x205)+_0x4f0e31]=![];}),this[_0x423ee9(0x1f0)]=_0x1b8d86;}['shouldUpdate'](_0xc1a96){const _0x2a7365=_0x1a7b4c;if(_0xc1a96['has'](_0x2a7365(0x1f0))||_0xc1a96[_0x2a7365(0x1bf)](_0x2a7365(0x1da))||_0xc1a96[_0x2a7365(0x1bf)](_0x2a7365(0x1f8))||_0xc1a96[_0x2a7365(0x1bf)](_0x2a7365(0x27c))||_0xc1a96[_0x2a7365(0x1bf)](_0x2a7365(0x278))||_0xc1a96[_0x2a7365(0x1bf)](_0x2a7365(0x1ff)))return!![];if(_0xc1a96[_0x2a7365(0x1bf)](_0x2a7365(0x16f))){const _0x1af0f5=this[_0x2a7365(0x165)](this[_0x2a7365(0x16f)]);if(_0x1af0f5!==this[_0x2a7365(0x18b)])return this[_0x2a7365(0x18b)]=_0x1af0f5,this[_0x2a7365(0x293)][_0x2a7365(0x154)](),!![];return![];}return!![];}[_0x1a7b4c(0x165)](_0x5a9394){const _0x5ec9eb=_0x1a7b4c,_0x361ae3=_0x5a9394?.[_0x5ec9eb(0x162)]||{};let _0x4b7e60=0x0;for(const _0x47d7ba in _0x361ae3)_0x4b7e60++;return''+_0x4b7e60;}[_0x1a7b4c(0x1d9)](_0x36e30e){const _0x3f9a18=_0x1a7b4c,_0x5331e2=SwitchAndTimerBarCard['DEFAULTS'],_0x5a4f59=JSON[_0x3f9a18(0x196)](JSON[_0x3f9a18(0x25e)](_0x36e30e||{}));for(const _0x21b84c of[_0x3f9a18(0x174),'colors',_0x3f9a18(0x1e0)]){const _0x1c00e3=_0x5331e2[_0x21b84c],_0x52c878=_0x5a4f59[_0x21b84c];if(_0x52c878&&typeof _0x52c878==='object'&&!Array[_0x3f9a18(0x227)](_0x52c878)&&_0x1c00e3){for(const _0x33f028 of Object[_0x3f9a18(0x14b)](_0x52c878)){if(_0x33f028 in _0x1c00e3&&_0x52c878[_0x33f028]===_0x1c00e3[_0x33f028])delete _0x52c878[_0x33f028];}if(Object[_0x3f9a18(0x14b)](_0x52c878)[_0x3f9a18(0x195)]===0x0)delete _0x5a4f59[_0x21b84c];}}for(const _0x5bdb34 of Object[_0x3f9a18(0x14b)](_0x5331e2)){if(_0x5bdb34===_0x3f9a18(0x266))continue;if(_0x5331e2[_0x5bdb34]&&typeof _0x5331e2[_0x5bdb34]===_0x3f9a18(0x197))continue;if(_0x5bdb34 in _0x5a4f59&&_0x5a4f59[_0x5bdb34]===_0x5331e2[_0x5bdb34])delete _0x5a4f59[_0x5bdb34];}return _0x5a4f59;}['_dispatchConfig'](_0x3d443f){const _0x281171=_0x1a7b4c,_0x1dec5b=this[_0x281171(0x1d9)](_0x3d443f);this[_0x281171(0x1f0)]=_0x1dec5b,this[_0x281171(0x181)](),this[_0x281171(0x17d)](new CustomEvent(_0x281171(0x1bc),{'detail':{'config':_0x1dec5b},'bubbles':!![],'composed':!![]}));}[_0x1a7b4c(0x1bd)](_0x37163b){const _0xd55b9c=_0x1a7b4c;if(!this[_0xd55b9c(0x1f0)]||!this[_0xd55b9c(0x16f)])return;const _0x6768d3=_0x37163b[_0xd55b9c(0x256)],_0x236858=_0x6768d3['configValue']||_0x6768d3['getAttribute'](_0xd55b9c(0x25a));if(!_0x236858)return;const _0x40d473=_0x236858[_0xd55b9c(0x24c)]('.');let _0x377057;if(_0x6768d3[_0xd55b9c(0x187)]===_0xd55b9c(0x28c))_0x377057=_0x6768d3[_0xd55b9c(0x1ee)];else{if(_0x37163b[_0xd55b9c(0x27f)]?.['value']!==undefined)_0x377057=_0x37163b['detail'][_0xd55b9c(0x1b8)];else{if(_0x6768d3[_0xd55b9c(0x1b8)]!==undefined)_0x377057=_0x6768d3[_0xd55b9c(0x1b8)];else _0x377057='';}}if(_0x377057===_0xd55b9c(0x148))_0x377057='';const _0x3c79f2=JSON[_0xd55b9c(0x196)](JSON[_0xd55b9c(0x25e)](this[_0xd55b9c(0x1f0)]));let _0x2bbfe7=_0x3c79f2;for(let _0x34f9e0=0x0;_0x34f9e0<_0x40d473['length']-0x1;_0x34f9e0++){const _0x4c37bc=_0x40d473[_0x34f9e0];if(_0x2bbfe7[_0x4c37bc]===undefined)_0x2bbfe7[_0x4c37bc]=!isNaN(parseInt(_0x40d473[_0x34f9e0+0x1],0xa))?[]:{};_0x2bbfe7=_0x2bbfe7[_0x4c37bc];}const _0x32dded=_0x40d473[_0x40d473[_0xd55b9c(0x195)]-0x1];if(_0x377057===''||_0x377057===null||Array[_0xd55b9c(0x227)](_0x377057)&&_0x377057[_0xd55b9c(0x195)]===0x0){delete _0x2bbfe7[_0x32dded];if(_0x40d473[_0xd55b9c(0x195)]>0x1){let _0x3caa3e=_0x3c79f2;for(let _0x25d4f8=0x0;_0x25d4f8<_0x40d473[_0xd55b9c(0x195)]-0x2;_0x25d4f8++)_0x3caa3e=_0x3caa3e[_0x40d473[_0x25d4f8]];if(Object[_0xd55b9c(0x14b)](_0x2bbfe7)['length']===0x0&&_0x3caa3e[_0x40d473[_0x40d473[_0xd55b9c(0x195)]-0x2]])delete _0x3caa3e[_0x40d473[_0x40d473[_0xd55b9c(0x195)]-0x2]];}}else _0x2bbfe7[_0x32dded]=_0x377057;this['_dispatchConfig'](_0x3c79f2);}['_toggleExpand'](_0x13c7e2){const _0x8628f0=_0x1a7b4c;this[_0x8628f0(0x1da)]={...this['_expanded'],[_0x13c7e2]:!this[_0x8628f0(0x1da)][_0x13c7e2]};}['_toggleEntityExpand'](_0x10f0c7){const _0x29e225=_0x1a7b4c,_0x1ff7ce=_0x29e225(0x205)+_0x10f0c7,_0x35995f=!!this[_0x29e225(0x1da)][_0x1ff7ce];if(_0x35995f){this[_0x29e225(0x1da)]={...this[_0x29e225(0x1da)],[_0x1ff7ce]:![]};return;}const _0x2559f6={...this[_0x29e225(0x1da)]};Object[_0x29e225(0x14b)](_0x2559f6)[_0x29e225(0x21c)](_0x316b95=>_0x316b95['startsWith'](_0x29e225(0x205)))['forEach'](_0x219cfd=>_0x2559f6[_0x219cfd]=![]),_0x2559f6[_0x1ff7ce]=!![],_0x2559f6[_0x29e225(0x266)]=!![],this['_expanded']=_0x2559f6,requestAnimationFrame(()=>{const _0x3fa981=_0x29e225;requestAnimationFrame(()=>this[_0x3fa981(0x190)](_0x10f0c7));});}[_0x1a7b4c(0x190)](_0xf74720){const _0x433268=_0x1a7b4c,_0x54a12f=this[_0x433268(0x1aa)]?.[_0x433268(0x166)](_0x433268(0x25c)+_0xf74720+'\x22]');if(!_0x54a12f)return;const _0x1c2ff6=_0x54a12f[_0x433268(0x166)](_0x433268(0x291))||_0x54a12f;try{_0x1c2ff6[_0x433268(0x1ae)]({'behavior':_0x433268(0x259),'block':_0x433268(0x19c),'inline':_0x433268(0x21a)});}catch(_0x4557ea){_0x1c2ff6[_0x433268(0x1ae)](!![]);}}['_addEntity']=()=>{const _0x3c03f7=_0x1a7b4c,_0x1e267b=JSON[_0x3c03f7(0x196)](JSON[_0x3c03f7(0x25e)](this[_0x3c03f7(0x1f0)]));_0x1e267b[_0x3c03f7(0x266)]=_0x1e267b['entities']||[],_0x1e267b[_0x3c03f7(0x266)][_0x3c03f7(0x16e)]({'name':'','switch':'','timer':'','sensor':'','timer_and_entity_connected_via_automation':!![]});const _0x107ec9=_0x1e267b[_0x3c03f7(0x266)][_0x3c03f7(0x195)]-0x1,_0x536ea3={...this[_0x3c03f7(0x1da)]};Object['keys'](_0x536ea3)[_0x3c03f7(0x21c)](_0x31fa15=>_0x31fa15[_0x3c03f7(0x237)](_0x3c03f7(0x205)))[_0x3c03f7(0x19d)](_0xc4fc27=>_0x536ea3[_0xc4fc27]=![]),_0x536ea3[_0x3c03f7(0x205)+_0x107ec9]=!![],_0x536ea3['entities']=!![],this[_0x3c03f7(0x1da)]=_0x536ea3,this[_0x3c03f7(0x1d1)](_0x1e267b);};['_removeEntity'](_0x3d6b98){const _0x18c040=_0x1a7b4c,_0x345d29=JSON[_0x18c040(0x196)](JSON[_0x18c040(0x25e)](this['_config']));_0x345d29['entities']['splice'](_0x3d6b98,0x1);const _0x5b58ca={...this[_0x18c040(0x1da)]};Object[_0x18c040(0x14b)](_0x5b58ca)[_0x18c040(0x21c)](_0x5e54a1=>_0x5e54a1[_0x18c040(0x237)](_0x18c040(0x205)))[_0x18c040(0x19d)](_0x3590aa=>delete _0x5b58ca[_0x3590aa]),_0x345d29[_0x18c040(0x266)][_0x18c040(0x19d)]((_0x4bb9c8,_0x295654)=>_0x5b58ca['entity_'+_0x295654]=![]),this[_0x18c040(0x1da)]=_0x5b58ca,this['_dispatchConfig'](_0x345d29);}['_duplicateEntity'](_0x2aed37){const _0x474d36=_0x1a7b4c,_0x150f37=JSON[_0x474d36(0x196)](JSON[_0x474d36(0x25e)](this[_0x474d36(0x1f0)])),_0x1c60d7=JSON[_0x474d36(0x196)](JSON[_0x474d36(0x25e)](_0x150f37[_0x474d36(0x266)][_0x2aed37]));if(_0x1c60d7[_0x474d36(0x1dd)])_0x1c60d7[_0x474d36(0x1dd)]=_0x1c60d7[_0x474d36(0x1dd)]+_0x474d36(0x223);_0x150f37[_0x474d36(0x266)][_0x474d36(0x1c7)](_0x2aed37+0x1,0x0,_0x1c60d7);const _0x216e98={...this[_0x474d36(0x1da)]};Object[_0x474d36(0x14b)](_0x216e98)[_0x474d36(0x21c)](_0x4639d2=>_0x4639d2[_0x474d36(0x237)]('entity_'))[_0x474d36(0x19d)](_0x133aa9=>_0x216e98[_0x133aa9]=![]),_0x216e98[_0x474d36(0x205)+(_0x2aed37+0x1)]=!![],_0x216e98[_0x474d36(0x266)]=!![],this[_0x474d36(0x1da)]=_0x216e98,this[_0x474d36(0x1d1)](_0x150f37);}[_0x1a7b4c(0x1ca)](_0x13886f,_0x20af45){const _0x1e5608=_0x1a7b4c;this[_0x1e5608(0x158)]=_0x13886f;try{_0x20af45['dataTransfer']['effectAllowed']=_0x1e5608(0x15b),_0x20af45[_0x1e5608(0x272)][_0x1e5608(0x14a)](_0x1e5608(0x23c),String(_0x13886f));}catch(_0xa4cba){}}[_0x1a7b4c(0x1af)](_0x272353,_0x35260b){const _0x2dc5fd=_0x1a7b4c;_0x35260b[_0x2dc5fd(0x22f)](),this[_0x2dc5fd(0x1f8)]=_0x272353;try{_0x35260b[_0x2dc5fd(0x272)]['dropEffect']=_0x2dc5fd(0x15b);}catch(_0x31bcd4){}}[_0x1a7b4c(0x1d4)](_0x43103d,_0x38b3fb){}[_0x1a7b4c(0x1b1)](_0x519ebf,_0x1c5f77){const _0x1c5dd6=_0x1a7b4c;_0x1c5f77[_0x1c5dd6(0x22f)]();let _0x59e2e1=this[_0x1c5dd6(0x158)];try{const _0x58f9b2=_0x1c5f77[_0x1c5dd6(0x272)][_0x1c5dd6(0x263)]('text/plain'),_0x4557e1=parseInt(_0x58f9b2,0xa);if(!Number[_0x1c5dd6(0x27b)](_0x4557e1))_0x59e2e1=_0x4557e1;}catch(_0x139c68){}if(_0x59e2e1===null||_0x59e2e1===undefined)return;this['_reorderEntities'](_0x59e2e1,_0x519ebf),this['_dragFromIndex']=null,this[_0x1c5dd6(0x1f8)]=null;}[_0x1a7b4c(0x20a)](_0x165064,_0x37baa7){const _0x17e2a3=_0x1a7b4c;if(_0x165064===_0x37baa7)return;const _0x5f1a0f=JSON['parse'](JSON['stringify'](this['_config'])),_0x3b4d89=_0x5f1a0f[_0x17e2a3(0x266)]||[];if(_0x165064<0x0||_0x165064>=_0x3b4d89[_0x17e2a3(0x195)]||_0x37baa7<0x0||_0x37baa7>=_0x3b4d89[_0x17e2a3(0x195)])return;const _0x1d13ac=(this[_0x17e2a3(0x1f0)][_0x17e2a3(0x266)]||[])[_0x17e2a3(0x1e3)]((_0x204d1c,_0x4494ee)=>!!this[_0x17e2a3(0x1da)]['entity_'+_0x4494ee]),[_0x318d8d]=_0x3b4d89[_0x17e2a3(0x1c7)](_0x165064,0x1);_0x3b4d89[_0x17e2a3(0x1c7)](_0x37baa7,0x0,_0x318d8d);let _0x53f872=_0x1d13ac;if(_0x1d13ac===_0x165064)_0x53f872=_0x37baa7;else{if(_0x165064<_0x1d13ac&&_0x37baa7>=_0x1d13ac)_0x53f872=_0x1d13ac-0x1;else{if(_0x165064>_0x1d13ac&&_0x37baa7<=_0x1d13ac)_0x53f872=_0x1d13ac+0x1;}}const _0x22000c={...this[_0x17e2a3(0x1da)]};Object[_0x17e2a3(0x14b)](_0x22000c)[_0x17e2a3(0x21c)](_0x191820=>_0x191820[_0x17e2a3(0x237)](_0x17e2a3(0x205)))['forEach'](_0x5f1b4b=>delete _0x22000c[_0x5f1b4b]),_0x3b4d89[_0x17e2a3(0x19d)]((_0x40ba04,_0x345033)=>_0x22000c['entity_'+_0x345033]=![]);if(_0x53f872>=0x0&&_0x53f872<_0x3b4d89[_0x17e2a3(0x195)])_0x22000c[_0x17e2a3(0x205)+_0x53f872]=!![];this[_0x17e2a3(0x1da)]=_0x22000c,this[_0x17e2a3(0x1d1)](_0x5f1a0f);}['_renderEntityPicker'](_0x2977fa,_0xa50500,_0x4366c2,_0x2abe0d,_0x310c72=''){const _0x33fb16=_0x1a7b4c,_0x22efff=Array['isArray'](_0x2abe0d)?_0x2abe0d:undefined,_0x5fd9fa=_0x310c72?_0x33fb16(0x152)+_0x310c72:'',_0x298795=_0x310c72?'\x20field-label--'+_0x310c72:'';return haHtml`
      <div class="field${_0x5fd9fa}">
        <div class="field-label${_0x298795}">${_0x2977fa}</div>
        <div class="picker-wrap">
          <ha-selector
            .hass=${this['hass']}
            .label=${''}
            .selector=${_0x22efff?{'entity':{'domain':_0x22efff}}:{'entity':{}}}
            .value=${_0xa50500||''}
            .configValue=${_0x4366c2}
            @value-changed=${this[_0x33fb16(0x1bd)]}
          ></ha-selector>
        </div>
      </div>
    `;}[_0x1a7b4c(0x244)](_0x349aa1,_0x15c421,_0x1508f7,_0x2e7c61=''){const _0x2fd7e7=_0x1a7b4c,_0x2671a8=_0x2e7c61?'\x20field--'+_0x2e7c61:'',_0xe3dfc8=_0x2e7c61?_0x2fd7e7(0x224)+_0x2e7c61:'';return haHtml`
      <div class="field${_0x2671a8}">
        <div class="label-row${_0xe3dfc8}">
          <div class="label-text">${_0x349aa1}</div>
          <button class="help-btn" type="button" title="Help" @click=${this['_openSensorHelp']}>
            <span class="help-q">?</span>
          </button>
        </div>

        <div class="picker-wrap">
          <ha-selector
            .hass=${this[_0x2fd7e7(0x16f)]}
            .label=${''}
            .selector=${{'entity':{'domain':['sensor',_0x2fd7e7(0x18e)]}}}
            .value=${_0x15c421||''}
            .configValue=${_0x1508f7}
            @value-changed=${this['_valueChanged']}
          ></ha-selector>
        </div>
      </div>
    `;}[_0x1a7b4c(0x22b)](_0x23d4a8){const _0x3e7d01=_0x1a7b4c,_0x146220={'colors':{'on':_0x3e7d01(0x257),'ready':_0x3e7d01(0x28a),'unavailable':_0x3e7d01(0x161),'button_start':_0x3e7d01(0x28a),'button_stop':_0x3e7d01(0x257),'icon':_0x3e7d01(0x234),'progress_fill':'#2196F3'},'icons':{'start':_0x3e7d01(0x141),'stop':_0x3e7d01(0x235)},'labels':{'status_on':_0x3e7d01(0x1dc),'status_ready':_0x3e7d01(0x26b),'status_unavailable':_0x3e7d01(0x19e),'last_on_active':_0x3e7d01(0x1e5),'last_on_now':'Just\x20now','last_on_ago_minutes':'minutes\x20ago','last_on_ago_hours':_0x3e7d01(0x241),'last_on_ago_days':_0x3e7d01(0x1e1),'time_format_zero':_0x3e7d01(0x160),'time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':_0x3e7d01(0x175),'edit_duration_hours':_0x3e7d01(0x1a0),'edit_duration_minutes':'Minutes','edit_duration_seconds':_0x3e7d01(0x1cb),'edit_duration_apply':'Apply','edit_duration_reset':_0x3e7d01(0x1a2),'edit_duration_cancel':'Cancel','edit_duration_tooltip':_0x3e7d01(0x1ec),'start_confirm_body':_0x3e7d01(0x231),'start_confirm_ok':'Start\x20anyway','start_confirm_cancel':_0x3e7d01(0x188)}};return _0x146220[_0x23d4a8];}[_0x1a7b4c(0x245)](_0x2344d8){const _0x31409d=_0x1a7b4c;return{...this[_0x31409d(0x22b)](_0x2344d8),...this[_0x31409d(0x1f0)]?.[_0x2344d8]||{}};}['_resetPath'](_0x5b4010){const _0xb93986=_0x1a7b4c,_0x7aa449=JSON[_0xb93986(0x196)](JSON[_0xb93986(0x25e)](this[_0xb93986(0x1f0)])),_0x3667c5=_0x5b4010['split']('.');let _0x3ffc0e=_0x7aa449;for(let _0x1689ad=0x0;_0x1689ad<_0x3667c5[_0xb93986(0x195)]-0x1;_0x1689ad++){_0x3ffc0e=_0x3ffc0e?.[_0x3667c5[_0x1689ad]];if(!_0x3ffc0e)break;}if(_0x3ffc0e&&typeof _0x3ffc0e===_0xb93986(0x197))delete _0x3ffc0e[_0x3667c5[_0x3667c5['length']-0x1]];this[_0xb93986(0x1d1)](_0x7aa449);}[_0x1a7b4c(0x292)](_0x384d46){return haHtml`<span class="tip-wrap" tabindex="-1">
      <svg class="tip-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      <span class="tip-box">${_0x384d46}</span>
    </span>`;}[_0x1a7b4c(0x1a9)](_0x5e6737,_0x4646fe,_0x265538){const _0x99adf0=_0x1a7b4c,_0x50a17e=_0x5e6737||{},_0x613cbd=_0x265538||this[_0x99adf0(0x22b)](_0x99adf0(0x20e));return haHtml`
      <div class="color-grid">
        ${Object['keys'](_0x613cbd)[_0x99adf0(0x269)](_0x4fc0c6=>{const _0x445e71=_0x99adf0,_0x4e0246=_0x4fc0c6[_0x445e71(0x207)](/_/g,'\x20'),_0x236921=_0x50a17e[_0x4fc0c6]||_0x613cbd[_0x4fc0c6]||_0x445e71(0x199);return haHtml`
            <div class="color-tile">
              <span class="color-name">${_0x4e0246}</span>
              <input
                class="color-swatch"
                type="color"
                .value="${_0x236921}"
                @input=${_0x16f7f8=>this['_valueChanged']({'target':{'configValue':_0x4646fe+'.'+_0x4fc0c6,'value':_0x16f7f8[_0x445e71(0x256)][_0x445e71(0x1b8)]},'detail':{'value':_0x16f7f8[_0x445e71(0x256)][_0x445e71(0x1b8)]}})}
              />
              <input
                class="ed-input color-hex"
                type="text"
                .value="${_0x50a17e[_0x4fc0c6]||''}"
                placeholder="${_0x613cbd[_0x4fc0c6]}"
                .configValue="${_0x4646fe}.${_0x4fc0c6}"
                @change=${this[_0x445e71(0x1bd)]}
              />
            </div>
          `;})}
      </div>
    `;}[_0x1a7b4c(0x1fe)](_0x54168f,_0x3142ab,_0x2bfbdd){const _0xa33092=_0x1a7b4c,_0x247192=_0x54168f||{},_0x220357=_0x2bfbdd||this[_0xa33092(0x22b)](_0xa33092(0x1e0));return haHtml`
      <div class="grid grid-2">
        ${Object['keys'](_0x220357)[_0xa33092(0x269)](_0x4d1a1a=>haHtml`
            <div class="field">
              <ha-icon-picker
                label="${_0x4d1a1a[_0xa33092(0x287)](0x0)['toUpperCase']()+_0x4d1a1a['slice'](0x1)} Icon"
                .value="${_0x247192[_0x4d1a1a]||''}"
                .placeholder="${_0x220357[_0x4d1a1a]}"
                .configValue="${_0x3142ab}.${_0x4d1a1a}"
                @value-changed=${this[_0xa33092(0x1bd)]}
              ></ha-icon-picker>
            </div>
          `)}
      </div>
    `;}[_0x1a7b4c(0x1f4)](_0x44b87c,_0xe2716f,_0x1ad506){const _0x237211=_0x1a7b4c,_0xc8f83=new Set(['edit_duration_title',_0x237211(0x22d),_0x237211(0x209),_0x237211(0x1d5),_0x237211(0x1b6),_0x237211(0x21e),'edit_duration_cancel',_0x237211(0x24f),_0x237211(0x26d),_0x237211(0x171),_0x237211(0x249)]),_0x1f0cb7=_0x44b87c||{},_0x4e86f8=_0x1ad506||this[_0x237211(0x22b)](_0x237211(0x174)),_0x3864c0=Object['keys'](_0x4e86f8)[_0x237211(0x21c)](_0x43a1c8=>!_0xc8f83[_0x237211(0x1bf)](_0x43a1c8));return haHtml`
      <div class="ovr-grid">
        ${_0x3864c0['map'](_0x56008e=>haHtml`
            <label class="ovr-field">
              <span class="ovr-label">${_0x56008e[_0x237211(0x207)](/_/g,'\x20')}</span>
              <input
                class="ed-input"
                type="text"
                .value="${_0x1f0cb7[_0x56008e]||''}"
                placeholder="${_0x4e86f8[_0x56008e]}"
                .configValue="${_0xe2716f}.${_0x56008e}"
                @change=${this[_0x237211(0x1bd)]}
              />
            </label>
          `)}
      </div>
    `;}['_renderSensorHelpDialog'](){const _0x3fba9a=_0x1a7b4c,_0x1e88df=customElements[_0x3fba9a(0x228)](_0x3fba9a(0x1b5))?_0x3fba9a(0x1b5):_0x3fba9a(0x211),_0x28482a='template:\x0a\x20\x20-\x20trigger:\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20event\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_type:\x20timer.finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_data:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20timer.zone_1_timer\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20state\x0a\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20switch.zone_1\x20\x20\x20#\x20For\x20non-switch\x20domains,\x20change\x20to\x20your\x20entity\x0a\x20\x20\x20\x20\x20\x20\x20\x20from:\x20\x27on\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20to:\x20\x27off\x27\x0a\x20\x20\x20\x20sensor:\x0a\x20\x20\x20\x20\x20\x20-\x20name:\x20zone_1_is_finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20state:\x20\x22{{\x20now().timestamp()\x20|\x20as_datetime\x20}}\x22';if(_0x1e88df===_0x3fba9a(0x1b5))return haHtml`
        <ha-dialog
          .open=${this['_showSensorHelp']}
          @closed=${this[_0x3fba9a(0x220)]}
          heading="How to create a trigger-based sensor"
        >
          <div class="help-content">
            <div class="help-title">🧪 How to create a trigger-based sensor</div>
            <div class="help-text">
              To show "last run" on the card, you can create a template sensor that updates when the timer finishes
              (works for all domains) and/or when the device turns off. Example below uses both a
              <code>timer.finished</code> event and a switch turning off; adapt the second trigger for your domain if needed.
            </div>
            <pre class="code"><code>${_0x28482a}</code></pre>
          </div>
          <mwc-button slot="primaryAction" @click=${this[_0x3fba9a(0x220)]}>Close</mwc-button>
        </ha-dialog>
      `;return haHtml`
      <mwc-dialog
        ?open=${this[_0x3fba9a(0x27c)]}
        @closed=${this[_0x3fba9a(0x220)]}
        heading="How to create a trigger-based sensor"
      >
        <div class="help-content">
          <div class="help-title">🧪 How to create a trigger-based sensor</div>
          <div class="help-text">
            To show "last run" on the card, you can create a template sensor that updates when the timer finishes
            (works for all domains) and/or when the device turns off. Example below uses both a
            <code>timer.finished</code> event and a switch turning off; adapt the second trigger for your domain if needed.
          </div>
          <pre class="code"><code>${_0x28482a}</code></pre>
        </div>
        <mwc-button slot="primaryAction" @click=${this[_0x3fba9a(0x220)]}>Close</mwc-button>
      </mwc-dialog>
    `;}[_0x1a7b4c(0x182)](){const _0x1be9a9=_0x1a7b4c;if(!this[_0x1be9a9(0x16f)]||!this[_0x1be9a9(0x1f0)])return haHtml``;const _0x18e23c=!this[_0x1be9a9(0x1da)]['global_overrides'],_0x10f473=!this[_0x1be9a9(0x1da)]['entities'],_0x5e1353=this[_0x1be9a9(0x278)]||_0x1be9a9(0x273);return haHtml`
      <div class="editor">
        <!-- GLOBAL SETTINGS PANEL -->
        <div class="panel ${_0x18e23c?'':_0x1be9a9(0x1ad)}">
          <div class="panel-header" @click=${()=>this['_toggleExpand'](_0x1be9a9(0x208))}>
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

          ${_0x18e23c?'':haHtml`
            <div class="panel-body">
              <div class="tabs">
                <button class="tb ${_0x5e1353==='general'?_0x1be9a9(0x240):''}" @click=${()=>{const _0x4aa479=_0x1be9a9;this[_0x4aa479(0x278)]=_0x4aa479(0x273);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  General
                </button>
                <button class="tb ${_0x5e1353===_0x1be9a9(0x1e0)?'active':''}" @click=${()=>{const _0x45eae6=_0x1be9a9;this[_0x45eae6(0x278)]=_0x45eae6(0x1e0);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  Icons
                </button>
                <button class="tb ${_0x5e1353==='colors'?'active':''}" @click=${()=>{const _0x54afbe=_0x1be9a9;this[_0x54afbe(0x278)]=_0x54afbe(0x20e);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                  Colors
                </button>
                <button class="tb ${_0x5e1353===_0x1be9a9(0x174)?_0x1be9a9(0x240):''}" @click=${()=>{const _0xf585b0=_0x1be9a9;this['_mainTab']=_0xf585b0(0x174);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                  Labels
                </button>
              </div>

              <!-- General Tab -->
              <div class="tc ${_0x5e1353==='general'?_0x1be9a9(0x240):''}">
                <div class="fg">
                  <div class="fgl">Card</div>
                  <div class="grid grid-pair">
                    <div class="field">
                      <div class="field-label">Title ${this['_tip'](_0x1be9a9(0x176))}</div>
                      <input
                        class="ed-input"
                        type="text"
                        .value="${this[_0x1be9a9(0x1f0)][_0x1be9a9(0x200)]||''}"
                        .configValue=${'title'}
                        @change=${this['_valueChanged']}
                      />
                    </div>

                    <div class="field">
                      <div class="field-label">Button Position ${this[_0x1be9a9(0x292)](_0x1be9a9(0x239))}</div>
                      <div class="picker-wrap">
                        <ha-selector
                          .hass=${this['hass']}
                          .label=${_0x1be9a9(0x169)}
                          .selector=${{'select':{'options':[{'value':_0x1be9a9(0x1a7),'label':_0x1be9a9(0x1b9)},{'value':_0x1be9a9(0x15a),'label':'Right'}],'mode':_0x1be9a9(0x145)}}}
                          .value=${this[_0x1be9a9(0x1f0)]['button_position']||'left'}
                          .configValue=${'button_position'}
                          @value-changed=${this[_0x1be9a9(0x1bd)]}
                        ></ha-selector>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-2">
                    <div class="field">
                      <div class="field-label">Editable duration (global default) ${this['_tip']('Default\x20for\x20all\x20entities.\x20If\x20enabled,\x20users\x20can\x20tap\x20the\x20total\x20time\x20on\x20the\x20card\x20to\x20change\x20the\x20duration.\x20Each\x20entity\x20can\x20still\x20override\x20this.')}</div>
                      <div class="toggle-row">
                        <label class="si">
                          <div class="st">
                            <ha-switch
                              .checked="${!!this[_0x1be9a9(0x1f0)]['editable_duration']}"
                              .configValue=${_0x1be9a9(0x178)}
                              @change=${this['_valueChanged']}
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
              <div class="tc ${_0x5e1353===_0x1be9a9(0x20e)?_0x1be9a9(0x240):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Colors</div>
                    <button class="reset-btn" @click=${()=>this[_0x1be9a9(0x26e)]('colors')}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this[_0x1be9a9(0x1a9)](this[_0x1be9a9(0x1f0)][_0x1be9a9(0x20e)],_0x1be9a9(0x20e),this[_0x1be9a9(0x22b)](_0x1be9a9(0x20e)))}
                </div>
              </div>

              <!-- Icons Tab -->
              <div class="tc ${_0x5e1353===_0x1be9a9(0x1e0)?_0x1be9a9(0x240):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Icons</div>
                    <button class="reset-btn" @click=${()=>this[_0x1be9a9(0x26e)](_0x1be9a9(0x1e0))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this['_renderIconOptions'](this['_config'][_0x1be9a9(0x1e0)],_0x1be9a9(0x1e0),this[_0x1be9a9(0x22b)](_0x1be9a9(0x1e0)))}
                </div>
              </div>

              <!-- Labels Tab -->
              <div class="tc ${_0x5e1353===_0x1be9a9(0x174)?_0x1be9a9(0x240):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Labels</div>
                    <button class="reset-btn" @click=${()=>this[_0x1be9a9(0x26e)](_0x1be9a9(0x174))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this[_0x1be9a9(0x1f4)](this['_config']['labels'],_0x1be9a9(0x174),this[_0x1be9a9(0x22b)](_0x1be9a9(0x174)))}
                </div>
              </div>
            </div>
          `}
        </div>

        <!-- ENTITIES PANEL -->
        <div class="panel ${_0x10f473?'':'open'}">
          <div class="panel-header" @click=${()=>this['_toggleExpand'](_0x1be9a9(0x266))}>
            <div class="panel-icon ent-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
            <div class="panel-text">
              <span class="panel-title">Entities <span class="badge">${(this[_0x1be9a9(0x1f0)][_0x1be9a9(0x266)]||[])['length']}</span></span>
              <span class="panel-subtitle">Drag & drop to reorder. Click entity to expand.</span>
            </div>
            <span class="panel-chevron">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </div>

          ${_0x10f473?'':haHtml`
            <div class="panel-body entity-list">
              ${(this[_0x1be9a9(0x1f0)]['entities']||[])[_0x1be9a9(0x269)]((_0x476d61,_0x46d991)=>this['_renderEntitySection'](_0x476d61,_0x46d991))}
              <button class="add-btn" @click=${this[_0x1be9a9(0x277)]}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add Entity
              </button>
            </div>
          `}
        </div>
      </div>

      ${this['_renderSensorHelpDialog']()}
    `;}[_0x1a7b4c(0x1e6)](_0x47513a,_0x405697){const _0x40e7eb=_0x1a7b4c,_0x45b997=_0x40e7eb(0x1a3)+_0x405697,_0x1558c2=!!this['_expanded'][_0x40e7eb(0x205)+_0x405697],_0x1553c3=_0x47513a[_0x40e7eb(0x1dd)]?.[_0x40e7eb(0x247)]()?_0x47513a[_0x40e7eb(0x1dd)]:this['hass']?.[_0x40e7eb(0x162)]?.[_0x47513a[_0x40e7eb(0x27e)]]?.['attributes']?.[_0x40e7eb(0x218)]||_0x40e7eb(0x1e2)+(_0x405697+0x1),_0x34f617=this[_0x40e7eb(0x1f8)]===_0x405697,_0x460974=this[_0x40e7eb(0x1ff)][_0x405697]||'general';return haHtml`
      <div
        class="ec ${_0x1558c2?_0x40e7eb(0x1ad):''} ${_0x34f617?_0x40e7eb(0x157):''}"
        data-entity-index="${_0x405697}"
        @dragover=${_0x10626c=>this[_0x40e7eb(0x1af)](_0x405697,_0x10626c)}
        @drop=${_0x1fb938=>this[_0x40e7eb(0x1b1)](_0x405697,_0x1fb938)}
        @dragleave=${_0x4737c0=>this[_0x40e7eb(0x1d4)](_0x405697,_0x4737c0)}
      >
        <div class="eh" @click=${()=>this[_0x40e7eb(0x170)](_0x405697)}>
          <div class="ed"
            title="Drag to reorder"
            draggable="true"
            @dragstart=${_0x39a707=>this[_0x40e7eb(0x1ca)](_0x405697,_0x39a707)}
            @click=${_0x2eb5b3=>_0x2eb5b3[_0x40e7eb(0x149)]()}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>
          </div>
          <div class="ei">
            <span class="en">${_0x1553c3}</span>
          </div>
          <div class="ea">
            <button class="etb" @click=${_0x61eb10=>{const _0x356708=_0x40e7eb;_0x61eb10[_0x356708(0x149)](),this[_0x356708(0x170)](_0x405697);}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <button class="edup" title="Duplicate" @click=${_0x59135f=>{const _0x52474e=_0x40e7eb;_0x59135f[_0x52474e(0x149)](),this[_0x52474e(0x282)](_0x405697);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
            <button class="edb" @click=${_0x56cb1c=>{const _0x336df5=_0x40e7eb;_0x56cb1c[_0x336df5(0x149)](),this[_0x336df5(0x24e)](_0x405697);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>

        ${_0x1558c2?haHtml`
          <div class="eb">
            <div class="tabs">
              <button class="tb ${_0x460974===_0x40e7eb(0x273)?_0x40e7eb(0x240):''}" @click=${()=>{const _0x5f3850=_0x40e7eb;this[_0x5f3850(0x1ff)]={...this[_0x5f3850(0x1ff)],[_0x405697]:_0x5f3850(0x273)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                General
              </button>
              <button class="tb ${_0x460974===_0x40e7eb(0x1e0)?_0x40e7eb(0x240):''}" @click=${()=>{const _0x43c132=_0x40e7eb;this['_entityTabs']={...this['_entityTabs'],[_0x405697]:_0x43c132(0x1e0)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                Icons
              </button>
              <button class="tb ${_0x460974===_0x40e7eb(0x20e)?_0x40e7eb(0x240):''}" @click=${()=>{const _0x5939ad=_0x40e7eb;this['_entityTabs']={...this[_0x5939ad(0x1ff)],[_0x405697]:_0x5939ad(0x20e)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                Colors
              </button>
              <button class="tb ${_0x460974===_0x40e7eb(0x174)?_0x40e7eb(0x240):''}" @click=${()=>{const _0x417809=_0x40e7eb;this[_0x417809(0x1ff)]={...this[_0x417809(0x1ff)],[_0x405697]:'labels'};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                Labels
              </button>
            </div>

            <!-- Entity General Tab -->
            <div class="tc ${_0x460974==='general'?_0x40e7eb(0x240):''}">
              <div class="fg">
                <div class="fgl">Entity Setup</div>
                <div class="grid grid-pair">
                  <div class="field">
                    <div class="field-label">Display Name ${this['_tip']('Optional\x20custom\x20name.\x20If\x20empty,\x20card\x20uses\x20entity\x20friendly\x20name.')}</div>
                    <input
                      class="ed-input"
                      type="text"
                      .value="${_0x47513a['name']||''}"
                      .configValue="${_0x45b997}.name"
                      @change=${this['_valueChanged']}
                    />
                  </div>

                  <div class="field">
                    <div class="field-label">Button Position ${this[_0x40e7eb(0x292)](_0x40e7eb(0x15d))}</div>
                    <div class="picker-wrap">
                      <ha-selector
                        .hass=${this['hass']}
                        .label=${'Position'}
                        .selector=${{'select':{'options':[{'value':_0x40e7eb(0x148),'label':_0x40e7eb(0x238)},{'value':_0x40e7eb(0x1a7),'label':_0x40e7eb(0x1b9)},{'value':_0x40e7eb(0x15a),'label':_0x40e7eb(0x173)}],'mode':_0x40e7eb(0x145)}}}
                        .value=${_0x47513a[_0x40e7eb(0x294)]||_0x40e7eb(0x148)}
                        .configValue="${_0x45b997}.button_position"
                        @value-changed=${this[_0x40e7eb(0x1bd)]}
                      ></ha-selector>
                    </div>
                  </div>
                </div>
              </div>

              <div class="fg">
                <div class="fgl">Entities</div>
                <div class="grid grid-2">
                  ${this[_0x40e7eb(0x1f3)](_0x40e7eb(0x246),_0x47513a[_0x40e7eb(0x27e)]||'',_0x45b997+_0x40e7eb(0x1fb),[_0x40e7eb(0x27e),_0x40e7eb(0x23d),_0x40e7eb(0x229),'valve','lock',_0x40e7eb(0x203),'input_boolean',_0x40e7eb(0x14d)],_0x40e7eb(0x14f))}
                  ${this[_0x40e7eb(0x1f3)]('Timer\x20entity',_0x47513a[_0x40e7eb(0x23a)]||'',_0x45b997+_0x40e7eb(0x265),[_0x40e7eb(0x23a)],_0x40e7eb(0x23a))}
                </div>
                <div class="grid grid-2">
                  ${this[_0x40e7eb(0x244)](_0x40e7eb(0x1e9),_0x47513a[_0x40e7eb(0x1a8)]||'',_0x45b997+_0x40e7eb(0x22c),_0x40e7eb(0x1a8))}
                  <div class="field">
                    <div class="field-label">Automation Link ${this[_0x40e7eb(0x292)]('If\x20enabled,\x20card\x20only\x20starts/stops\x20the\x20timer;\x20your\x20automation\x20controls\x20the\x20entity.\x20If\x20disabled,\x20card\x20turns\x20entity\x20on/off\x20directly.')}</div>
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${_0x47513a['timer_and_entity_connected_via_automation']!==![]}"
                            .configValue="${_0x45b997}.timer_and_entity_connected_via_automation"
                            @change=${this[_0x40e7eb(0x1bd)]}
                          ></ha-switch>
                        </div>
                        <div class="sl">
                          <span class="sn">Timer ↔ Entity linked via automation</span>
                        </div>
                      </label>
                    </div>
                    ${_0x47513a[_0x40e7eb(0x1a5)]===![]?haHtml`<div class="inline-warn">
                          <ha-icon icon="mdi:alert-outline"></ha-icon>
                          <span>Direct control runs in your browser — the device won't switch off if no dashboard is open when the timer ends. For unattended use, keep this on and add a <code>timer.finished</code> automation (see the Help panel).</span>
                        </div>`:''}
                  </div>
                </div>
                <div class="grid grid-2">
                  ${this[_0x40e7eb(0x1f3)](_0x40e7eb(0x236),_0x47513a[_0x40e7eb(0x19b)]||'',_0x45b997+_0x40e7eb(0x286),[_0x40e7eb(0x1a8)],'battery')}
                </div>
                <div class="grid grid-2">
                  <div class="field field--duration">
                    <div class="field-label field-label--duration">Default duration override ${this['_tip'](_0x40e7eb(0x21b))}</div>
                    <input
                      class="ed-input"
                      type="text"
                      placeholder="e.g. 00:10:00"
                      .value="${_0x47513a[_0x40e7eb(0x24b)]??''}"
                      .configValue="${_0x45b997}.duration"
                      @change=${this[_0x40e7eb(0x1bd)]}
                    />
                  </div>
                  <div class="field field--editable-duration">
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${!!_0x47513a[_0x40e7eb(0x178)]}"
                            .configValue="${_0x45b997}.editable_duration"
                            @change=${this[_0x40e7eb(0x1bd)]}
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
            <div class="tc ${_0x460974===_0x40e7eb(0x20e)?_0x40e7eb(0x240):''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Colors</div>
                  <button class="reset-btn" @click=${()=>this[_0x40e7eb(0x26e)](_0x45b997+_0x40e7eb(0x28b))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global colors for this entity. Unset values inherit from global settings.</div>
                ${this[_0x40e7eb(0x1a9)](_0x47513a['colors'],_0x45b997+_0x40e7eb(0x28b),this[_0x40e7eb(0x245)](_0x40e7eb(0x20e)))}
              </div>
            </div>

            <!-- Entity Icons Tab -->
            <div class="tc ${_0x460974==='icons'?_0x40e7eb(0x240):''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Icons</div>
                  <button class="reset-btn" @click=${()=>this[_0x40e7eb(0x26e)](_0x45b997+'.icons')}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global icons for this entity. Unset values inherit from global settings.</div>
                ${this[_0x40e7eb(0x1fe)](_0x47513a[_0x40e7eb(0x1e0)],_0x45b997+_0x40e7eb(0x289),this[_0x40e7eb(0x245)]('icons'))}
              </div>
            </div>

            <!-- Entity Labels Tab -->
            <div class="tc ${_0x460974===_0x40e7eb(0x174)?_0x40e7eb(0x240):''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Labels</div>
                  <button class="reset-btn" @click=${()=>this['_resetPath'](_0x45b997+_0x40e7eb(0x1bb))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global labels for this entity. Unset values inherit from global settings.</div>
                ${this[_0x40e7eb(0x1f4)](_0x47513a[_0x40e7eb(0x174)],_0x45b997+_0x40e7eb(0x1bb),this['_getEffectiveGlobal'](_0x40e7eb(0x174)))}
              </div>
            </div>
          </div>
        `:''}
      </div>
    `;}static get[_0x1a7b4c(0x264)](){return haCss`
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
    `;}}customElements['define']('switch-and-timer-bar-card-editor',SwitchAndTimerBarCardEditor),window[_0x1a7b4c(0x159)]=window[_0x1a7b4c(0x159)]||[];!window[_0x1a7b4c(0x159)][_0x1a7b4c(0x20f)](_0x19c9c4=>_0x19c9c4[_0x1a7b4c(0x213)]===_0x1a7b4c(0x17c))&&window['customCards'][_0x1a7b4c(0x16e)]({'type':_0x1a7b4c(0x17c),'name':_0x1a7b4c(0x201),'description':_0x1a7b4c(0x201),'preview':!![]});

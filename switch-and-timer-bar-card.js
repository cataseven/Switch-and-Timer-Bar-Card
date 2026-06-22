const _0xdd4cd0=_0x2035;function _0x2035(_0x186ba1,_0x56f6d1){_0x186ba1=_0x186ba1-0x16a;const _0x235ad6=_0x235a();let _0x2035d9=_0x235ad6[_0x186ba1];return _0x2035d9;}(function(_0x4b869a,_0x54662a){const _0x40b956=_0x2035,_0x3c500e=_0x4b869a();while(!![]){try{const _0x4d80c1=-parseInt(_0x40b956(0x23a))/0x1*(parseInt(_0x40b956(0x278))/0x2)+parseInt(_0x40b956(0x26d))/0x3*(parseInt(_0x40b956(0x193))/0x4)+parseInt(_0x40b956(0x21a))/0x5*(-parseInt(_0x40b956(0x1ee))/0x6)+parseInt(_0x40b956(0x199))/0x7+-parseInt(_0x40b956(0x1f1))/0x8*(parseInt(_0x40b956(0x28d))/0x9)+parseInt(_0x40b956(0x25f))/0xa+-parseInt(_0x40b956(0x2ac))/0xb*(parseInt(_0x40b956(0x245))/0xc);if(_0x4d80c1===_0x54662a)break;else _0x3c500e['push'](_0x3c500e['shift']());}catch(_0x241fcc){_0x3c500e['push'](_0x3c500e['shift']());}}}(_0x235a,0xe55f1));let HaLitBase,haHtml,haCss;{const base=window[_0xdd4cd0(0x265)]||(customElements[_0xdd4cd0(0x1a7)](_0xdd4cd0(0x213))?Object[_0xdd4cd0(0x283)](customElements['get'](_0xdd4cd0(0x213))):null);if(!base||!base[_0xdd4cd0(0x223)]?.[_0xdd4cd0(0x1c3)]||!base[_0xdd4cd0(0x223)]?.[_0xdd4cd0(0x1e5)]){const msg=_0xdd4cd0(0x18d);console['error'](msg),HaLitBase=class{},haHtml=()=>'',haCss=()=>'';}else HaLitBase=base,haHtml=base[_0xdd4cd0(0x223)][_0xdd4cd0(0x1c3)],haCss=base[_0xdd4cd0(0x223)][_0xdd4cd0(0x1e5)];}class SwitchAndTimerBarCard extends HaLitBase{static get[_0xdd4cd0(0x1ac)](){return{'hass':{},'_config':{},'_timer':{},'_durationEditor':{},'_startConfirm':{}};}static get[_0xdd4cd0(0x181)](){const _0x480a77=_0xdd4cd0;return{'button_position':_0x480a77(0x183),'colors':{'on':_0x480a77(0x1d2),'ready':_0x480a77(0x1ef),'unavailable':_0x480a77(0x27c),'button_start':_0x480a77(0x1ef),'button_stop':_0x480a77(0x1d2),'icon':_0x480a77(0x28c),'progress_fill':_0x480a77(0x1d2)},'icons':{'start':_0x480a77(0x1b8),'stop':_0x480a77(0x27a)},'labels':{'status_on':_0x480a77(0x29b),'status_ready':_0x480a77(0x18a),'status_unavailable':_0x480a77(0x27f),'last_on_active':'Active','last_on_now':'Just\x20now','last_on_ago_minutes':_0x480a77(0x21e),'last_on_ago_hours':_0x480a77(0x271),'last_on_ago_days':_0x480a77(0x18b),'time_format_zero':_0x480a77(0x216),'time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':'Set\x20duration','edit_duration_hours':'Hours','edit_duration_minutes':_0x480a77(0x205),'edit_duration_seconds':_0x480a77(0x1a4),'edit_duration_apply':_0x480a77(0x201),'edit_duration_reset':_0x480a77(0x29d),'edit_duration_cancel':'Cancel','edit_duration_tooltip':_0x480a77(0x298),'start_confirm_body':_0x480a77(0x191),'start_confirm_ok':_0x480a77(0x2b9),'start_confirm_cancel':_0x480a77(0x2ba)}};}static async[_0xdd4cd0(0x2c2)](){const _0x1fecf7=_0xdd4cd0;return document[_0x1fecf7(0x276)](_0x1fecf7(0x211));}static[_0xdd4cd0(0x173)](){const _0x36a395=_0xdd4cd0;return{'title':_0x36a395(0x2ab),'entities':[{'name':'Front\x20Yard','switch':_0x36a395(0x20d),'timer':_0x36a395(0x194),'sensor':_0x36a395(0x281),'timer_and_entity_connected_via_automation':!![]}]};}static get[_0xdd4cd0(0x196)](){return haCss`
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
      .confirm-dontshow {
        align-items: center;
        color: var(--secondary-text-color);
        cursor: pointer;
        display: flex;
        font-size: 0.88em;
        gap: 8px;
        margin: 8px 2px 2px;
        user-select: none;
      }
      .confirm-dontshow input { cursor: pointer; margin: 0; }
    `;}constructor(){const _0x18ad44=_0xdd4cd0;super(),this['__interval']=null,this['__tickMs']=0x3e8,this['__needsTick']=![],this[_0x18ad44(0x21c)]=new Map(),this[_0x18ad44(0x220)]=0x9c4,this['__sharedSwitches']=new Set(),this[_0x18ad44(0x16e)]=new Map(),this[_0x18ad44(0x204)]='switch-and-timer-bar-card:durations',this[_0x18ad44(0x186)](),this[_0x18ad44(0x2b2)]=new Map(),this[_0x18ad44(0x1f2)]=_0x18ad44(0x1ad),this[_0x18ad44(0x231)](),this[_0x18ad44(0x1d3)]=![],this[_0x18ad44(0x240)]=null,this[_0x18ad44(0x192)]=![],this[_0x18ad44(0x2a4)]=_0x25ed44=>{const _0x112c3e=_0x18ad44;if(_0x25ed44[_0x112c3e(0x237)]==='Escape'&&this[_0x112c3e(0x240)])this[_0x112c3e(0x25e)]();},this[_0x18ad44(0x284)]=null;}[_0xdd4cd0(0x186)](){const _0x1155b0=_0xdd4cd0;try{const _0xeffd35=window['localStorage']?.[_0x1155b0(0x1cd)](this[_0x1155b0(0x204)]);if(!_0xeffd35)return;const _0x553429=JSON['parse'](_0xeffd35);_0x553429&&typeof _0x553429===_0x1155b0(0x1c6)&&(this['__durationOverrides']=new Map(Object[_0x1155b0(0x202)](_0x553429)));}catch(_0x5995bc){}}[_0xdd4cd0(0x1ce)](){const _0x16e7d2=_0xdd4cd0;try{const _0xb178cc=Object[_0x16e7d2(0x259)](this[_0x16e7d2(0x16e)]);window[_0x16e7d2(0x200)]?.[_0x16e7d2(0x1cb)](this[_0x16e7d2(0x204)],JSON[_0x16e7d2(0x291)](_0xb178cc));}catch(_0x58094d){}}['_loadArmedTimers'](){const _0x227cf1=_0xdd4cd0;try{const _0x40968c=window['localStorage']?.['getItem'](this[_0x227cf1(0x1f2)]);if(!_0x40968c)return;const _0x57331d=JSON[_0x227cf1(0x258)](_0x40968c);_0x57331d&&typeof _0x57331d===_0x227cf1(0x1c6)&&(this[_0x227cf1(0x2b2)]=new Map(Object['entries'](_0x57331d)));}catch(_0x56aa38){}}['_saveArmedTimers'](){const _0x213dd9=_0xdd4cd0;try{const _0xdefd80=Object[_0x213dd9(0x259)](this[_0x213dd9(0x2b2)]);window[_0x213dd9(0x200)]?.[_0x213dd9(0x1cb)](this[_0x213dd9(0x1f2)],JSON[_0x213dd9(0x291)](_0xdefd80));}catch(_0x235b0b){}}[_0xdd4cd0(0x236)](_0x43d103,_0x4ae2ee,_0x2b23e3){const _0x22b1ff=_0xdd4cd0;if(!_0x43d103||!_0x4ae2ee)return;const _0xe9cbe=Number[_0x22b1ff(0x1f0)](_0x2b23e3)?_0x2b23e3:null,_0x4be5b0=this[_0x22b1ff(0x2b2)]['get'](_0x43d103);if(_0x4be5b0&&_0x4be5b0[_0x22b1ff(0x1cf)]===_0x4ae2ee&&_0x4be5b0[_0x22b1ff(0x19a)]===_0xe9cbe)return;this[_0x22b1ff(0x2b2)][_0x22b1ff(0x189)](_0x43d103,{'switch':_0x4ae2ee,'finishesAt':_0xe9cbe}),this[_0x22b1ff(0x296)]();}['_disarmTimer'](_0x26508b){const _0x2e272d=_0xdd4cd0;if(!_0x26508b||!this['__armedTimers'][_0x2e272d(0x267)](_0x26508b))return;this[_0x2e272d(0x2b2)][_0x2e272d(0x2c6)](_0x26508b),this[_0x2e272d(0x296)]();}[_0xdd4cd0(0x1fa)](){const _0x58afed=_0xdd4cd0;if(this[_0x58afed(0x1d3)])return;if(!this['hass']||!this[_0x58afed(0x2a3)]?.[_0x58afed(0x1ea)])return;this[_0x58afed(0x1d3)]=!![],this['_reconcileMissedTimers']();}[_0xdd4cd0(0x184)](){const _0xc6f2e=_0xdd4cd0;if(!this[_0xc6f2e(0x2b6)]||!this[_0xc6f2e(0x2b2)][_0xc6f2e(0x19e)])return;const _0x3664b0=this['hass'][_0xc6f2e(0x17a)]||{},_0x41dae7=new Map();for(const _0x3f6f7e of this[_0xc6f2e(0x2a3)]?.['entities']||[]){if(_0x3f6f7e['timer_and_entity_connected_via_automation'])continue;if(_0x3f6f7e[_0xc6f2e(0x1c2)]&&_0x3f6f7e['switch'])_0x41dae7[_0xc6f2e(0x189)](_0x3f6f7e[_0xc6f2e(0x1c2)],_0x3f6f7e);}let _0x36ebfd=![];for(const [_0x5e5a18,_0x4c8f62]of[...this[_0xc6f2e(0x2b2)][_0xc6f2e(0x202)]()]){const _0x5569d2=_0x41dae7[_0xc6f2e(0x1a7)](_0x5e5a18),_0x456729=_0x3664b0[_0x5e5a18];if(!_0x5569d2||!_0x456729){this[_0xc6f2e(0x2b2)]['delete'](_0x5e5a18),_0x36ebfd=!![];continue;}const _0x562424=_0x456729[_0xc6f2e(0x187)];if(_0x562424===_0xc6f2e(0x17e)||_0x562424==='paused'){if(_0x562424===_0xc6f2e(0x17e)){const _0x1d7c08=Date[_0xc6f2e(0x258)](_0x456729[_0xc6f2e(0x2b5)]?.[_0xc6f2e(0x29f)]||''),_0x22a4a3=Number[_0xc6f2e(0x1f0)](_0x1d7c08)?_0x1d7c08:null;_0x4c8f62['finishesAt']!==_0x22a4a3&&(this[_0xc6f2e(0x2b2)][_0xc6f2e(0x189)](_0x5e5a18,{'switch':_0x5569d2['switch'],'finishesAt':_0x22a4a3}),_0x36ebfd=!![]);}continue;}const _0x3e94cb=_0x5569d2[_0xc6f2e(0x1cf)],_0xa842b2=_0x3664b0[_0x3e94cb];if(_0xa842b2&&this[_0xc6f2e(0x268)](_0xa842b2)){let _0x286bd4=![];this[_0xc6f2e(0x1aa)]['has'](_0x3e94cb)&&(_0x286bd4=(this[_0xc6f2e(0x2a3)][_0xc6f2e(0x1ea)]||[])[_0xc6f2e(0x218)](_0x4b77b1=>_0x4b77b1['switch']===_0x3e94cb&&_0x4b77b1[_0xc6f2e(0x1c2)]&&_0x4b77b1[_0xc6f2e(0x1c2)]!==_0x5e5a18&&_0x3664b0[_0x4b77b1['timer']]?.['state']===_0xc6f2e(0x17e)));if(!_0x286bd4){const _0x42e762=Date[_0xc6f2e(0x177)](),_0x2e4a80=this[_0xc6f2e(0x21c)]['get'](_0x3e94cb)||0x0;_0x42e762-_0x2e4a80>=this[_0xc6f2e(0x220)]&&(this[_0xc6f2e(0x21c)][_0xc6f2e(0x189)](_0x3e94cb,_0x42e762),this[_0xc6f2e(0x1e3)](_0x3e94cb,_0xc6f2e(0x1ed)));}}this[_0xc6f2e(0x2b2)][_0xc6f2e(0x2c6)](_0x5e5a18),_0x36ebfd=!![];}if(_0x36ebfd)this[_0xc6f2e(0x296)]();}[_0xdd4cd0(0x224)](_0x25b39d){const _0x81abc8=_0xdd4cd0;if(!_0x25b39d)throw new Error('Invalid\x20configuration.');const _0x552758=SwitchAndTimerBarCard['DEFAULTS'],_0x49a778=JSON[_0x81abc8(0x258)](JSON[_0x81abc8(0x291)](_0x25b39d));(!_0x49a778[_0x81abc8(0x1ea)]||!Array[_0x81abc8(0x286)](_0x49a778[_0x81abc8(0x1ea)]))&&(console[_0x81abc8(0x22e)](_0x81abc8(0x1f6)),_0x49a778[_0x81abc8(0x1ea)]=[]);_0x49a778[_0x81abc8(0x1ea)]['forEach'](_0x37c376=>{const _0x250b27=_0x81abc8;_0x37c376[_0x250b27(0x1ca)]===undefined&&(_0x37c376[_0x250b27(0x1ca)]=!![]);}),this['_config']={..._0x552758,..._0x49a778,'colors':{..._0x552758[_0x81abc8(0x239)],..._0x49a778[_0x81abc8(0x239)]||{}},'icons':{..._0x552758[_0x81abc8(0x1a0)],..._0x49a778[_0x81abc8(0x1a0)]||{}},'labels':{..._0x552758['labels'],..._0x49a778['labels']||{}}};const _0x266e8c=new Map();for(const _0x318f2e of this[_0x81abc8(0x2a3)]['entities']){if(_0x318f2e['switch'])_0x266e8c[_0x81abc8(0x189)](_0x318f2e['switch'],(_0x266e8c[_0x81abc8(0x1a7)](_0x318f2e[_0x81abc8(0x1cf)])||0x0)+0x1);}this['__sharedSwitches']=new Set(Array[_0x81abc8(0x24b)](_0x266e8c[_0x81abc8(0x202)]())[_0x81abc8(0x28b)](([,_0x1e6ffb])=>_0x1e6ffb>0x1)[_0x81abc8(0x1c4)](([_0x35c14e])=>_0x35c14e)),this[_0x81abc8(0x285)]();}['connectedCallback'](){const _0x5e65ec=_0xdd4cd0;super[_0x5e65ec(0x19b)]?.(),this[_0x5e65ec(0x285)](),this[_0x5e65ec(0x1fa)](),window[_0x5e65ec(0x274)](_0x5e65ec(0x195),this[_0x5e65ec(0x2a4)]);}[_0xdd4cd0(0x16a)](){const _0x4a2d44=_0xdd4cd0;super[_0x4a2d44(0x16a)]?.(),this[_0x4a2d44(0x1f3)](),window[_0x4a2d44(0x228)](_0x4a2d44(0x195),this[_0x4a2d44(0x2a4)]),this[_0x4a2d44(0x1d3)]=![];}[_0xdd4cd0(0x1d0)](_0x545278){const _0x44661f=_0xdd4cd0;if(_0x545278[_0x44661f(0x267)](_0x44661f(0x2b6))){this['__recomputeTickNeedAndApply'](),this['_maybeReconcile']();if(!this['_config']?.[_0x44661f(0x1ea)])return;const _0x27e5af=_0x545278[_0x44661f(0x1a7)]('hass');for(const _0x41f1f0 of this[_0x44661f(0x2a3)][_0x44661f(0x1ea)]){if(_0x41f1f0[_0x44661f(0x1ca)])continue;const _0x1c9592=_0x41f1f0[_0x44661f(0x1c2)],_0x1de3c3=_0x41f1f0[_0x44661f(0x1cf)];if(!_0x1c9592||!_0x1de3c3)continue;const _0x1426bd=this['hass']?.[_0x44661f(0x17a)]?.[_0x1c9592],_0x2395b2=this['hass']?.[_0x44661f(0x17a)]?.[_0x1de3c3];if(!_0x1426bd)continue;if(_0x1426bd[_0x44661f(0x187)]==='active'){const _0x570f86=Date[_0x44661f(0x258)](_0x1426bd[_0x44661f(0x2b5)]?.['finishes_at']||'');this[_0x44661f(0x236)](_0x1c9592,_0x1de3c3,_0x570f86);}const _0x188017=_0x27e5af?.[_0x44661f(0x17a)]?.[_0x1c9592];if(!_0x188017)continue;if(_0x188017[_0x44661f(0x187)]===_0x44661f(0x17e)&&_0x1426bd[_0x44661f(0x187)]===_0x44661f(0x176)){this['_disarmTimer'](_0x1c9592);if(!_0x2395b2)continue;if(!this[_0x44661f(0x268)](_0x2395b2))continue;if(this['__sharedSwitches']['has'](_0x1de3c3)){const _0x6efa27=this[_0x44661f(0x2a3)][_0x44661f(0x1ea)][_0x44661f(0x218)](_0x4254d1=>_0x4254d1['switch']===_0x1de3c3&&_0x4254d1[_0x44661f(0x1c2)]&&_0x4254d1[_0x44661f(0x1c2)]!==_0x1c9592&&this[_0x44661f(0x2b6)]['states']?.[_0x4254d1['timer']]?.[_0x44661f(0x187)]===_0x44661f(0x17e));if(_0x6efa27)continue;}const _0x35ab90=Date[_0x44661f(0x177)](),_0x8f0d2e=this['__lastOffAt']['get'](_0x1de3c3)||0x0;if(_0x35ab90-_0x8f0d2e<this[_0x44661f(0x220)])continue;this[_0x44661f(0x21c)][_0x44661f(0x189)](_0x1de3c3,_0x35ab90),this[_0x44661f(0x1e3)](_0x1de3c3,'off');}}}}[_0xdd4cd0(0x234)](){const _0x45277c=_0xdd4cd0;if(this[_0x45277c(0x1da)])return;this[_0x45277c(0x1da)]=setInterval(()=>{const _0xc86c51=_0x45277c;this[_0xc86c51(0x1b6)]=Date[_0xc86c51(0x177)]();},this['__tickMs']);}[_0xdd4cd0(0x1f3)](){const _0x59ddf0=_0xdd4cd0;if(!this['__interval'])return;clearInterval(this['__interval']),this[_0x59ddf0(0x1da)]=null;}[_0xdd4cd0(0x285)](){const _0x215ac4=_0xdd4cd0;if(!this[_0x215ac4(0x2b6)]||!this[_0x215ac4(0x2a3)]?.[_0x215ac4(0x1ea)]?.['length']){this[_0x215ac4(0x262)]=![],this[_0x215ac4(0x1f3)]();return;}const _0x170b7=this[_0x215ac4(0x2b6)][_0x215ac4(0x17a)]||{};let _0x578f62=![];for(const _0x25f8a6 of this[_0x215ac4(0x2a3)][_0x215ac4(0x1ea)]){const _0x39cf41=_0x25f8a6['switch'];if(!_0x39cf41)continue;const _0x15f420=_0x25f8a6[_0x215ac4(0x1c2)],_0x327daa=_0x15f420?_0x170b7[_0x15f420]:null;if(this[_0x215ac4(0x1aa)]['has'](_0x39cf41)){if(_0x327daa&&_0x327daa['state']===_0x215ac4(0x17e)){_0x578f62=!![];break;}continue;}const _0x2131de=_0x170b7[_0x39cf41];if(_0x2131de&&this[_0x215ac4(0x268)](_0x2131de)){_0x578f62=!![];break;}if(_0x327daa&&_0x327daa[_0x215ac4(0x187)]===_0x215ac4(0x17e)){_0x578f62=!![];break;}}this[_0x215ac4(0x262)]=_0x578f62;if(_0x578f62)this[_0x215ac4(0x234)]();else this[_0x215ac4(0x1f3)]();}['_getEffectiveDuration'](_0x5def57,_0x1cde2f){const _0x12c610=_0xdd4cd0,_0x116219=_0x5def57?.[_0x12c610(0x1c2)];if(_0x116219&&this['__durationOverrides'][_0x12c610(0x267)](_0x116219)){const _0xfaae71=Number(this[_0x12c610(0x16e)]['get'](_0x116219));if(Number['isFinite'](_0xfaae71)&&_0xfaae71>=0x0)return _0xfaae71;}if(_0x5def57&&_0x5def57[_0x12c610(0x26f)]!==undefined&&_0x5def57[_0x12c610(0x26f)]!==null&&_0x5def57[_0x12c610(0x26f)]!==''){const _0xb393a9=this[_0x12c610(0x1e8)](_0x5def57[_0x12c610(0x26f)]);if(_0xb393a9>0x0)return _0xb393a9;}return this[_0x12c610(0x1e8)](_0x1cde2f?.[_0x12c610(0x2b5)]?.[_0x12c610(0x26f)]);}[_0xdd4cd0(0x27b)](_0x3188c8){const _0x4b3a27=_0xdd4cd0,_0x26d26a=_0x3188c8?.[_0x4b3a27(0x1c2)];if(_0x26d26a&&this[_0x4b3a27(0x16e)][_0x4b3a27(0x267)](_0x26d26a))return!![];if(_0x3188c8?.['duration']!==undefined&&_0x3188c8[_0x4b3a27(0x26f)]!==null&&_0x3188c8[_0x4b3a27(0x26f)]!=='')return!![];return![];}['_hasUIDurationOverride'](_0x42823d){const _0x30224f=_0xdd4cd0;return!!(_0x42823d&&this['__durationOverrides'][_0x30224f(0x267)](_0x42823d));}[_0xdd4cd0(0x1c8)](_0x4e1a0f){const _0x20e7c3=_0xdd4cd0,_0x510b80=Math['max'](0x0,Math['floor'](Number(_0x4e1a0f)||0x0)),_0x3a4a8f=Math[_0x20e7c3(0x1fd)](_0x510b80/0xe10),_0x204488=Math[_0x20e7c3(0x1fd)](_0x510b80%0xe10/0x3c),_0x3affa1=_0x510b80%0x3c,_0x46ea31=_0x3ea7c6=>String(_0x3ea7c6)[_0x20e7c3(0x266)](0x2,'0');return _0x46ea31(_0x3a4a8f)+':'+_0x46ea31(_0x204488)+':'+_0x46ea31(_0x3affa1);}[_0xdd4cd0(0x1b1)](_0x531577,_0x11bade,_0x58a523){const _0x2a9638=_0xdd4cd0;if(!_0x11bade)return;const _0x5609e1=Math['max'](0x0,Math[_0x2a9638(0x1fd)](Number(_0x58a523)||0x0));this[_0x2a9638(0x284)]={'open':!![],'timerEntity':_0x11bade,'h':Math['floor'](_0x5609e1/0xe10),'m':Math[_0x2a9638(0x1fd)](_0x5609e1%0xe10/0x3c),'s':_0x5609e1%0x3c,'hasOverride':this['_hasUIDurationOverride'](_0x11bade)};}[_0xdd4cd0(0x23c)](){const _0x2cd480=_0xdd4cd0;this[_0x2cd480(0x284)]=null;}['_onDurationFieldChange'](_0x169ab2,_0x3b6d43){const _0x27ae11=_0xdd4cd0;if(!this[_0x27ae11(0x284)])return;let _0x13cc6c=parseInt(_0x3b6d43,0xa);if(!Number['isFinite'](_0x13cc6c)||_0x13cc6c<0x0)_0x13cc6c=0x0;if(_0x169ab2==='m'||_0x169ab2==='s')_0x13cc6c=Math['min'](_0x13cc6c,0x3b);if(_0x169ab2==='h')_0x13cc6c=Math['min'](_0x13cc6c,0x63);this[_0x27ae11(0x284)]={...this[_0x27ae11(0x284)],[_0x169ab2]:_0x13cc6c};}[_0xdd4cd0(0x1cc)](){const _0x477aa0=_0xdd4cd0;if(!this[_0x477aa0(0x284)])return;const {timerEntity:_0x3246bd,h:_0x2f9e8e,m:_0x46675a,s:_0x11258c}=this[_0x477aa0(0x284)],_0xc856c7=_0x2f9e8e*0xe10+_0x46675a*0x3c+_0x11258c;_0x3246bd&&_0xc856c7>0x0&&(this[_0x477aa0(0x16e)][_0x477aa0(0x189)](_0x3246bd,_0xc856c7),this['_saveDurationOverrides']()),this['_durationEditor']=null,this['__recomputeTickNeedAndApply']();}[_0xdd4cd0(0x1fb)](){const _0x1059fc=_0xdd4cd0;if(!this[_0x1059fc(0x284)])return;const {timerEntity:_0x1dbc56}=this['_durationEditor'];_0x1dbc56&&this[_0x1059fc(0x16e)][_0x1059fc(0x267)](_0x1dbc56)&&(this[_0x1059fc(0x16e)]['delete'](_0x1dbc56),this[_0x1059fc(0x1ce)]()),this[_0x1059fc(0x284)]=null;}[_0xdd4cd0(0x1e3)](_0x140732,_0x27b463){const _0x3d9519=_0xdd4cd0;if(!this[_0x3d9519(0x2b6)]||!_0x140732)return;const _0x45ce7f=_0x140732[_0x3d9519(0x1bf)]('.')[0x0];let _0x2220da;switch(_0x45ce7f){case'cover':_0x2220da=_0x27b463==='on'?_0x3d9519(0x238):_0x3d9519(0x2b1);break;case _0x3d9519(0x2a2):_0x2220da=_0x27b463==='on'?_0x3d9519(0x2b7):_0x3d9519(0x1b3);break;case _0x3d9519(0x1bb):_0x2220da=_0x27b463==='on'?'lock':_0x3d9519(0x2ad);break;default:_0x2220da=_0x27b463==='on'?_0x3d9519(0x206):'turn_off';break;}this['hass'][_0x3d9519(0x249)](_0x45ce7f,_0x2220da,{'entity_id':_0x140732});}[_0xdd4cd0(0x268)](_0x6d8742){const _0x49e215=_0xdd4cd0;if(!_0x6d8742)return![];const _0x409b47=_0x6d8742[_0x49e215(0x25a)][_0x49e215(0x1bf)]('.')[0x0],_0x13ed20=_0x6d8742[_0x49e215(0x187)];switch(_0x409b47){case _0x49e215(0x1ab):return _0x13ed20===_0x49e215(0x18e);case _0x49e215(0x2a2):return _0x13ed20===_0x49e215(0x20a)||_0x13ed20===_0x49e215(0x1d6);case _0x49e215(0x1bb):return _0x13ed20===_0x49e215(0x1bc);case _0x49e215(0x28e):return['playing',_0x49e215(0x261),'on'][_0x49e215(0x1dc)](_0x13ed20);default:return _0x13ed20==='on';}}[_0xdd4cd0(0x246)](){const _0x250b12=_0xdd4cd0;if(!HaLitBase||!haHtml)return'';if(!this[_0x250b12(0x2b6)]||!this[_0x250b12(0x2a3)])return haHtml``;const _0x3b3e9b=Date[_0x250b12(0x177)]();return haHtml`
      <ha-card>
        ${this[_0x250b12(0x2a3)]['title']?haHtml`<div class="card-header">${this[_0x250b12(0x2a3)][_0x250b12(0x2bb)]}</div>`:''}
        <div class="container">
          ${this['_config'][_0x250b12(0x1ea)]&&this[_0x250b12(0x2a3)][_0x250b12(0x1ea)][_0x250b12(0x1c4)](_0x11c5c7=>this['renderEntity'](_0x11c5c7,_0x3b3e9b))}
        </div>
      </ha-card>
      ${this[_0x250b12(0x208)]()}
      ${this[_0x250b12(0x19c)]()}
    `;}[_0xdd4cd0(0x19c)](){const _0x5a56c8=_0xdd4cd0;if(!this[_0x5a56c8(0x240)])return'';const _0x572234=this[_0x5a56c8(0x2a3)]?.[_0x5a56c8(0x1e2)]||{};return haHtml`
      <div class="stbc-modal" @click=${()=>this[_0x5a56c8(0x25e)]()}>
        <div class="stbc-modal-card" @click=${_0x1837bf=>_0x1837bf[_0x5a56c8(0x2a1)]()}>
          <div class="confirm-callout">
            <ha-icon icon="mdi:alert-outline"></ha-icon>
            <span>${_0x572234[_0x5a56c8(0x1db)]||'This\x20timer\x20switches\x20the\x20device\x20off\x20via\x20your\x20browser.\x20If\x20no\x20dashboard\x20tab\x20is\x20open\x20on\x20your\x20browser\x20or\x20your\x20HA\x20app\x20is\x20closed\x20when\x20the\x20timer\x20ends,\x20the\x20device\x20won\x27t\x20turn\x20off.\x20For\x20unattended\x20use,\x20enable\x20“Automation\x20Link”\x20for\x20this\x20entity\x20and\x20let\x20a\x20Home\x20Assistant\x20automation\x20handle\x20the\x20switch-off.'}</span>
          </div>
          <label class="confirm-dontshow">
            <input
              type="checkbox"
              .checked=${!!this[_0x5a56c8(0x192)]}
              @change=${_0x57ca0c=>{const _0x48bfed=_0x5a56c8;this[_0x48bfed(0x192)]=_0x57ca0c[_0x48bfed(0x198)][_0x48bfed(0x188)];}}
            />
            <span>${_0x572234[_0x5a56c8(0x210)]||_0x5a56c8(0x1c9)}</span>
          </label>
          <div class="duration-actions">
            <button
              class="dlg-btn dlg-btn-text"
              @click=${()=>this[_0x5a56c8(0x25e)]()}
            >${_0x572234[_0x5a56c8(0x1a2)]||_0x5a56c8(0x2ba)}</button>
            <button
              class="dlg-btn dlg-btn-primary"
              @click=${()=>this[_0x5a56c8(0x207)]()}
            >${_0x572234['start_confirm_ok']||_0x5a56c8(0x2b9)}</button>
          </div>
        </div>
      </div>
    `;}[_0xdd4cd0(0x208)](){const _0x347a23=_0xdd4cd0;if(!this['_durationEditor']||!this[_0x347a23(0x284)][_0x347a23(0x20a)])return'';const _0x3183d2=this['_config']?.['labels']||{},_0x44de4a=this['_durationEditor'];return haHtml`
      <ha-dialog
        open
        hideActions
        heading="${_0x3183d2[_0x347a23(0x269)]||'Set\x20duration'}"
        @closed=${()=>this[_0x347a23(0x23c)]()}
      >
        <div class="duration-dialog-body">
          <div class="duration-fields">
            <label class="duration-field">
              <span class="duration-field-label">${_0x3183d2[_0x347a23(0x1d5)]||_0x347a23(0x1e1)}</span>
              <input
                type="number"
                min="0"
                max="99"
                inputmode="numeric"
                .value=${String(_0x44de4a['h'])}
                @input=${_0x4e00f2=>this[_0x347a23(0x1b4)]('h',_0x4e00f2['target'][_0x347a23(0x209)])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0x3183d2[_0x347a23(0x277)]||'Minutes'}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x44de4a['m'])}
                @input=${_0x3d5370=>this['_onDurationFieldChange']('m',_0x3d5370[_0x347a23(0x198)][_0x347a23(0x209)])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0x3183d2[_0x347a23(0x2c3)]||_0x347a23(0x1a4)}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x44de4a['s'])}
                @input=${_0x23c3f8=>this['_onDurationFieldChange']('s',_0x23c3f8['target']['value'])}
              />
            </label>
          </div>
          <div class="duration-actions">
            <button
              class="dlg-btn dlg-btn-text"
              @click=${()=>this['_closeDurationEditor']()}
            >${_0x3183d2['edit_duration_cancel']||_0x347a23(0x2ba)}</button>
            ${_0x44de4a[_0x347a23(0x250)]?haHtml`<button
                  class="dlg-btn dlg-btn-text dlg-btn-reset"
                  @click=${()=>this['_resetDurationOverride']()}
                >${_0x3183d2[_0x347a23(0x1c7)]||'Reset\x20to\x20default'}</button>`:''}
            <button
              class="dlg-btn dlg-btn-primary"
              @click=${()=>this[_0x347a23(0x1cc)]()}
            >${_0x3183d2[_0x347a23(0x1dd)]||_0x347a23(0x201)}</button>
          </div>
        </div>
      </ha-dialog>
    `;}[_0xdd4cd0(0x23d)](_0x88655b,_0x28852c){const _0x307b39=_0xdd4cd0,_0x55de51=_0x88655b[_0x307b39(0x1cf)],_0x1cd672=_0x88655b['timer'],_0x2cc0ee=_0x88655b[_0x307b39(0x2a7)],_0x24aea9=_0x88655b['battery'];if(!_0x55de51)return haHtml`<div class="warning">Entity 'switch' is not defined.</div>`;const _0x337ec0=this['hass'][_0x307b39(0x17a)]||{},_0x2e63ea=_0x337ec0[_0x55de51],_0x1ba6d4=_0x1cd672?_0x337ec0[_0x1cd672]:undefined,_0x2381bf=_0x2cc0ee?_0x337ec0[_0x2cc0ee]:undefined;let _0x2d00db;if(typeof _0x24aea9===_0x307b39(0x24d)&&_0x337ec0[_0x24aea9])_0x2d00db=_0x337ec0[_0x24aea9];else _0x24aea9!==undefined&&_0x24aea9!==null&&_0x24aea9!==''&&Number['isFinite'](Number(_0x24aea9))?_0x2d00db={'state':String(Number(_0x24aea9)),'attributes':{'unit_of_measurement':'%'}}:_0x2d00db=undefined;if(!_0x2e63ea)return haHtml`<div class="warning">Entity not found: ${_0x55de51}</div>`;const _0x1b48ca=this['_isActive'](_0x2e63ea),_0x4bb234=[_0x307b39(0x1b2),'unknown']['includes'](_0x2e63ea[_0x307b39(0x187)]),_0x5eb9e7=_0x88655b['button_position']||this[_0x307b39(0x2a3)][_0x307b39(0x270)],_0x4a883c=this[_0x307b39(0x1aa)]['has'](_0x55de51),_0x3e2655=_0x4a883c&&_0x1ba6d4?_0x1ba6d4['state']===_0x307b39(0x17e):_0x1b48ca,_0x335e13={...this[_0x307b39(0x2a3)][_0x307b39(0x239)],..._0x88655b[_0x307b39(0x239)]||{}},_0x16734d={...this[_0x307b39(0x2a3)]['icons'],..._0x88655b[_0x307b39(0x1a0)]||{}},_0x5124d4={...this[_0x307b39(0x2a3)][_0x307b39(0x1e2)],..._0x88655b[_0x307b39(0x1e2)]||{}},_0x3e98b3=this[_0x307b39(0x1e8)](_0x1ba6d4?.[_0x307b39(0x2b5)]?.[_0x307b39(0x26f)]),_0x18d75a=_0x1ba6d4?.[_0x307b39(0x187)]===_0x307b39(0x17e),_0x806bb4=_0x18d75a?_0x3e98b3:this[_0x307b39(0x1d1)](_0x88655b,_0x1ba6d4),_0x32057c=_0x88655b[_0x307b39(0x1ae)]!==undefined?!!_0x88655b['editable_duration']:!!this[_0x307b39(0x2a3)][_0x307b39(0x1ae)],_0x5e9273=_0x32057c&&!!_0x1cd672&&!_0x3e2655;let _0x5325dd=0x0;if(_0x1b48ca){const _0x3265d5=Date[_0x307b39(0x258)](_0x2e63ea[_0x307b39(0x17c)]);!Number[_0x307b39(0x230)](_0x3265d5)&&(_0x5325dd=Math[_0x307b39(0x25c)]((_0x28852c-_0x3265d5)/0x3e8,0x708));}let _0x3cac25=0x0;if(_0x1ba6d4?.['state']===_0x307b39(0x17e)&&_0x806bb4>0x0){const _0x2d6c15=Date[_0x307b39(0x258)](_0x1ba6d4['last_changed']),_0x255dfc=(Number[_0x307b39(0x230)](_0x2d6c15)?_0x28852c:_0x2d6c15)+_0x806bb4*0x3e8,_0x4bdc61=Math[_0x307b39(0x226)](0x0,(_0x255dfc-_0x28852c)/0x3e8);_0x3cac25=Math[_0x307b39(0x226)](0x0,_0x806bb4-_0x4bdc61);}else _0x3e2655&&(_0x3cac25=_0x5325dd);const _0x1b8d23=this[_0x307b39(0x212)](_0x3cac25,_0x806bb4);let _0x1e8843='background-color:\x20'+_0x335e13[_0x307b39(0x22f)]+';';if(_0x4bb234)_0x1e8843=_0x307b39(0x1a3)+_0x335e13['unavailable']+';';else{if(_0x3e2655)_0x1e8843='background-color:\x20'+_0x335e13['on']+';';}const _0xa2ad21='background-color:\x20'+_0x335e13[_0x307b39(0x27e)]+';',_0x543df3=_0x307b39(0x1a3)+_0x335e13[_0x307b39(0x24e)]+';',_0x4882d7=_0x307b39(0x1c5)+_0x335e13['icon']+';',_0x528443=haHtml`
      <div class="timer-controls">
        ${!_0x3e2655&&_0x1cd672?haHtml`<button
              class="control-btn start"
              style="${_0xa2ad21}"
              @click=${()=>this[_0x307b39(0x16c)](_0x1cd672,_0x55de51,_0x88655b,_0x806bb4)}
            >
              <ha-icon icon="${_0x16734d['start']}" style="${_0x4882d7}"></ha-icon>
            </button>`:''}
        ${_0x3e2655&&_0x1cd672?haHtml`<button
              class="control-btn stop"
              style="${_0x543df3}"
              @click=${()=>this[_0x307b39(0x1c0)](_0x1cd672,_0x55de51,_0x88655b)}
            >
              <ha-icon icon="${_0x16734d[_0x307b39(0x21d)]}" style="${_0x4882d7}"></ha-icon>
            </button>`:''}
      </div>
    `,_0x4d8709=this[_0x307b39(0x17d)](_0x3cac25,_0x5124d4)+'\x20/\x20'+this[_0x307b39(0x17d)](_0x806bb4,_0x5124d4),_0x1956ae=_0x5e9273?haHtml`<span
          class="duration-editable"
          title="${_0x5124d4[_0x307b39(0x24c)]}"
          @click=${()=>this[_0x307b39(0x1b1)](_0x88655b,_0x1cd672,_0x806bb4)}
        >
          ${_0x4d8709}
          <ha-icon icon="mdi:pencil" class="edit-icon"></ha-icon>
        </span>`:haHtml`<span>${_0x4d8709}</span>`;return haHtml`
      <div class="entity-card">
        <div class="header">
          <div class="title" style="${_0x3e2655?'color:\x20'+_0x335e13['on']:''}">
            ${_0x88655b['name']||_0x2e63ea[_0x307b39(0x2b5)]['friendly_name']||_0x55de51}
            ${this['_renderBattery'](_0x2d00db)}
          </div>
          <div class="status" style="${_0x1e8843}">
            ${this[_0x307b39(0x18c)](_0x2e63ea,_0x1ba6d4,_0x5124d4,_0x3e2655)}
          </div>
        </div>

        <div class="control-wrapper ${_0x5eb9e7}">
          ${_0x5eb9e7===_0x307b39(0x183)?_0x528443:''}
          <div class="timeline-container">
            <div class="progress-bar">
              <div
                class="progress-fill"
                style="width: ${_0x1b8d23}%; background-color: ${_0x335e13[_0x307b39(0x174)]};"
              ></div>
            </div>
            <div class="time-info">
              <span>${this[_0x307b39(0x1ff)](_0x2381bf,_0x2e63ea,_0x5124d4,_0x28852c,_0x3e2655)}</span>
              ${_0x1956ae}
            </div>
          </div>
          ${_0x5eb9e7===_0x307b39(0x190)?_0x528443:''}
        </div>
      </div>
    `;}async[_0xdd4cd0(0x16c)](_0x3a9238,_0x5015ed,_0x4683d7,_0x5941cd){const _0x452ded=_0xdd4cd0,_0x2d2f28=!_0x4683d7?.[_0x452ded(0x1ca)]&&_0x3a9238&&!this['_isStartWarnSuppressed']();if(_0x2d2f28){this[_0x452ded(0x192)]=![],this[_0x452ded(0x240)]={'timerEntity':_0x3a9238,'controllableEntity':_0x5015ed,'entityConfig':_0x4683d7,'totalDuration':_0x5941cd};return;}this['_performStart'](_0x3a9238,_0x5015ed,_0x4683d7,_0x5941cd);}[_0xdd4cd0(0x207)](){const _0x449cb7=_0xdd4cd0,_0x25f0e0=this[_0x449cb7(0x240)];this[_0x449cb7(0x240)]=null;if(!_0x25f0e0)return;if(this[_0x449cb7(0x192)])this['_suppressStartWarn']();this[_0x449cb7(0x192)]=![],this[_0x449cb7(0x2c0)](_0x25f0e0['timerEntity'],_0x25f0e0[_0x449cb7(0x1e7)],_0x25f0e0['entityConfig'],_0x25f0e0[_0x449cb7(0x17f)]);}[_0xdd4cd0(0x25e)](){const _0x5407b8=_0xdd4cd0;this[_0x5407b8(0x240)]=null,this[_0x5407b8(0x192)]=![];}[_0xdd4cd0(0x288)](){const _0x45b345=_0xdd4cd0;try{const _0x40cda0=Array[_0x45b345(0x286)](this['_config']?.[_0x45b345(0x1ea)])?this[_0x45b345(0x2a3)][_0x45b345(0x1ea)]:[],_0x3957da=_0x40cda0[_0x45b345(0x1c4)](_0x20ea60=>{const _0x43f57a=_0x45b345,_0x4f3b00=_0x20ea60?.[_0x43f57a(0x1ca)]!==![]?'1':'0';return[_0x20ea60?.[_0x43f57a(0x1cf)]||'',_0x20ea60?.[_0x43f57a(0x1c2)]||'',_0x20ea60?.[_0x43f57a(0x2a7)]||'',_0x4f3b00][_0x43f57a(0x29c)]('>');})[_0x45b345(0x29c)]('|');return'c'+this[_0x45b345(0x1e6)](_0x3957da);}catch(_0x28f85c){return'default';}}[_0xdd4cd0(0x1e6)](_0x43e6ea){const _0x70afa3=_0xdd4cd0;let _0x6b1faa=0x1505;for(let _0x19f5cf=0x0;_0x19f5cf<_0x43e6ea['length'];_0x19f5cf++)_0x6b1faa=(_0x6b1faa<<0x5)+_0x6b1faa+_0x43e6ea[_0x70afa3(0x19d)](_0x19f5cf)|0x0;return(_0x6b1faa>>>0x0)[_0x70afa3(0x282)](0x24);}[_0xdd4cd0(0x290)](){const _0x13a601=_0xdd4cd0;try{const _0xb01b9a=JSON[_0x13a601(0x258)](window['localStorage'][_0x13a601(0x1cd)](_0x13a601(0x16b))||'{}');return!!(_0xb01b9a&&_0xb01b9a[this[_0x13a601(0x288)]()]);}catch(_0x123221){return![];}}['_suppressStartWarn'](){const _0x2fb62b=_0xdd4cd0;try{const _0x1a78ef=_0x2fb62b(0x16b);let _0x3bc631={};try{_0x3bc631=JSON['parse'](window[_0x2fb62b(0x200)][_0x2fb62b(0x1cd)](_0x1a78ef)||'{}')||{};}catch(_0x549fb9){_0x3bc631={};}_0x3bc631[this[_0x2fb62b(0x288)]()]=!![],window['localStorage'][_0x2fb62b(0x1cb)](_0x1a78ef,JSON[_0x2fb62b(0x291)](_0x3bc631));}catch(_0x5278d0){}}[_0xdd4cd0(0x2c0)](_0x2ec86d,_0x5ea9aa,_0x5e108a,_0x97bba6){const _0x16964d=_0xdd4cd0;if(!_0x5e108a['timer_and_entity_connected_via_automation'])this[_0x16964d(0x1e3)](_0x5ea9aa,'on');if(!_0x5e108a['timer_and_entity_connected_via_automation']&&_0x2ec86d&&_0x5ea9aa){const _0xecfc04=Number['isFinite'](_0x97bba6)&&_0x97bba6>0x0?Date['now']()+_0x97bba6*0x3e8:null;this[_0x16964d(0x236)](_0x2ec86d,_0x5ea9aa,_0xecfc04);}const _0x2208d6={'entity_id':_0x2ec86d};this[_0x16964d(0x27b)](_0x5e108a)&&Number[_0x16964d(0x1f0)](_0x97bba6)&&_0x97bba6>0x0&&(_0x2208d6[_0x16964d(0x26f)]=this[_0x16964d(0x1c8)](_0x97bba6)),this[_0x16964d(0x2b6)][_0x16964d(0x249)](_0x16964d(0x1c2),'start',_0x2208d6);}async[_0xdd4cd0(0x1c0)](_0x4a11f9,_0x1c7139,_0x373d19){const _0x522ebb=_0xdd4cd0;this[_0x522ebb(0x2a0)](_0x4a11f9);if(_0x4a11f9)await this[_0x522ebb(0x2b6)]['callService'](_0x522ebb(0x1c2),_0x522ebb(0x25b),{'entity_id':_0x4a11f9});if(!_0x1c7139)return;if(_0x373d19?.[_0x522ebb(0x1ca)])return;if(this[_0x522ebb(0x1aa)][_0x522ebb(0x267)](_0x1c7139)){const _0x58030b=this[_0x522ebb(0x2a3)]?.[_0x522ebb(0x1ea)]?.[_0x522ebb(0x218)](_0x542fc9=>_0x542fc9[_0x522ebb(0x1cf)]===_0x1c7139&&_0x542fc9[_0x522ebb(0x1c2)]&&_0x542fc9[_0x522ebb(0x1c2)]!==_0x4a11f9&&this[_0x522ebb(0x2b6)][_0x522ebb(0x17a)]?.[_0x542fc9[_0x522ebb(0x1c2)]]?.[_0x522ebb(0x187)]===_0x522ebb(0x17e));if(_0x58030b)return;}this[_0x522ebb(0x1e3)](_0x1c7139,_0x522ebb(0x1ed));}['parseDuration'](_0x314f51){const _0x1de146=_0xdd4cd0;if(!_0x314f51)return 0x0;if(typeof _0x314f51===_0x1de146(0x24d)&&_0x314f51['includes'](':')){const _0xe82297=_0x314f51[_0x1de146(0x1bf)](':');if(_0xe82297[_0x1de146(0x26e)]===0x3){const _0x19f141=parseInt(_0xe82297[0x0],0xa),_0x3a8746=parseInt(_0xe82297[0x1],0xa),_0x5a324b=parseInt(_0xe82297[0x2],0xa);return(Number[_0x1de146(0x230)](_0x19f141)?0x0:_0x19f141)*0xe10+(Number[_0x1de146(0x230)](_0x3a8746)?0x0:_0x3a8746)*0x3c+(Number[_0x1de146(0x230)](_0x5a324b)?0x0:_0x5a324b);}}const _0x221560=typeof _0x314f51==='number'?_0x314f51:parseFloat(_0x314f51);return Number['isFinite'](_0x221560)?_0x221560:0x0;}[_0xdd4cd0(0x212)](_0xc188d2,_0x245982){const _0x419c3b=_0xdd4cd0;if(!(_0x245982>0x0))return 0x0;const _0x5293c0=_0xc188d2/_0x245982*0x64;return Math[_0x419c3b(0x25c)](0x64,Math['max'](0x0,_0x5293c0));}[_0xdd4cd0(0x17d)](_0x1cc720,_0x1a5c24){const _0x72f140=_0xdd4cd0,_0x16034f=Number(_0x1cc720);if(!Number[_0x72f140(0x1f0)](_0x16034f)||_0x16034f<=0x0)return _0x1a5c24[_0x72f140(0x244)];const _0x4818f6=Math[_0x72f140(0x1fd)](_0x16034f/0x3c),_0x373f68=Math[_0x72f140(0x1fd)](_0x16034f%0x3c);return''+_0x4818f6+_0x1a5c24['time_unit_minutes']+'\x20'+String(_0x373f68)[_0x72f140(0x266)](0x2,'0')+_0x1a5c24[_0x72f140(0x29e)];}[_0xdd4cd0(0x1fe)](_0x5ee222){const _0x529838=_0xdd4cd0;if(!_0x5ee222)return'';const _0x2323bc=_0x5ee222['state'];if(_0x2323bc==null||[_0x529838(0x1b2),_0x529838(0x1e4),''][_0x529838(0x1dc)](String(_0x2323bc)))return'';const _0x45bb46=Number(_0x2323bc),_0x141523=Number['isFinite'](_0x45bb46),_0x5233b3=_0x5ee222[_0x529838(0x2b5)]?.[_0x529838(0x23e)]||(_0x141523?'%':''),_0x3f9d63=_0x141523?''+Math['round'](_0x45bb46)+_0x5233b3:''+_0x2323bc+(_0x5233b3?'\x20'+_0x5233b3:''),_0x2995b9=_0x5ee222[_0x529838(0x2b5)]||{},_0xc29844=_0x2995b9['is_charging']===!![]||_0x2995b9[_0x529838(0x260)]===!![]||[_0x529838(0x260),'on'][_0x529838(0x1dc)](String(_0x2995b9[_0x529838(0x253)]??'')[_0x529838(0x1af)]());let _0x1d029b='mdi:battery';if(_0x141523){const _0x64f803=Math[_0x529838(0x226)](0x0,Math[_0x529838(0x25c)](0x64,_0x45bb46)),_0x37a263=Math[_0x529838(0x182)](_0x64f803/0xa)*0xa;_0xc29844?_0x1d029b=_0x37a263<=0x0?_0x529838(0x1f9):_0x37a263>=0x64?_0x529838(0x215):_0x529838(0x1a5)+_0x37a263:_0x1d029b=_0x37a263<=0x0?'mdi:battery-outline':_0x37a263>=0x64?_0x529838(0x1d8):_0x529838(0x263)+_0x37a263;}return haHtml`<span class="battery"><ha-icon icon="${_0x1d029b}"></ha-icon>${_0x3f9d63}</span>`;}[_0xdd4cd0(0x18c)](_0x6475de,_0x1b9479,_0x38b0d8,_0x4c6ffe){const _0x498156=_0xdd4cd0;if(!_0x6475de)return _0x38b0d8['status_unavailable'];if([_0x498156(0x1b2),_0x498156(0x1e4)][_0x498156(0x1dc)](_0x6475de[_0x498156(0x187)]))return _0x38b0d8[_0x498156(0x227)];const _0x426a6c=_0x4c6ffe!==undefined?_0x4c6ffe:this[_0x498156(0x268)](_0x6475de);if(_0x426a6c)return _0x38b0d8[_0x498156(0x217)];return _0x38b0d8[_0x498156(0x1d4)];}[_0xdd4cd0(0x1ff)](_0x1d9aa3,_0x547990,_0x5917a7,_0x425ad5,_0x4c4f6f){const _0x52975f=_0xdd4cd0,_0x41c5ec=_0x4c4f6f!==undefined?_0x4c4f6f:this[_0x52975f(0x268)](_0x547990);if(_0x41c5ec)return _0x5917a7[_0x52975f(0x28a)];if(!_0x1d9aa3||!_0x1d9aa3[_0x52975f(0x187)])return'';const _0x52a9a1=Date[_0x52975f(0x258)](_0x1d9aa3['state']);if(Number[_0x52975f(0x230)](_0x52a9a1))return _0x1d9aa3['state'];const _0x23f629=Math[_0x52975f(0x1fd)]((_0x425ad5-_0x52a9a1)/0x3e8),_0x1bf00d=Math[_0x52975f(0x1fd)](_0x23f629/0x3c),_0x3373e7=Math[_0x52975f(0x1fd)](_0x1bf00d/0x3c),_0x57e122=Math['floor'](_0x3373e7/0x18);if(_0x23f629<0x3c)return _0x5917a7[_0x52975f(0x2bc)];if(_0x1bf00d<0x3c)return _0x1bf00d+'\x20'+_0x5917a7[_0x52975f(0x1b5)];if(_0x3373e7<0x18)return _0x3373e7+'\x20'+_0x5917a7['last_on_ago_hours'];return _0x57e122+'\x20'+_0x5917a7['last_on_ago_days'];}}function _0x235a(){const _0x54b1fe=['Don’t\x20show\x20again\x20for\x20this\x20card','timer_and_entity_connected_via_automation','setItem','_applyDurationEditor','getItem','_saveDurationOverrides','switch','updated','_getEffectiveDuration','#2196F3','__reconciledOnce','status_ready','edit_duration_hours','opening','_getEffectiveGlobal','mdi:battery','findIndex','__interval','start_confirm_body','includes','edit_duration_apply','dispatchEvent','template:\x0a\x20\x20-\x20trigger:\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20event\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_type:\x20timer.finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_data:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20timer.zone_1_timer\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20state\x0a\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20switch.zone_1\x20\x20\x20#\x20For\x20non-switch\x20domains,\x20change\x20to\x20your\x20entity\x0a\x20\x20\x20\x20\x20\x20\x20\x20from:\x20\x27on\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20to:\x20\x27off\x27\x0a\x20\x20\x20\x20sensor:\x0a\x20\x20\x20\x20\x20\x20-\x20name:\x20zone_1_is_finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20state:\x20\x22{{\x20now().timestamp()\x20|\x20as_datetime\x20}}\x22','_onDragStart','Hours','labels','_callService','unknown','css','_hashStr','controllableEntity','parseDuration','Control\x20entity\x20(switch\x20/\x20light\x20/\x20cover\x20/\x20valve\x20/\x20lock\x20/\x20etc.)','entities','_mainTab','light','off','66DJkADs','#4CAF50','isFinite','8vtLapN','__armedStorageKey','__stopTick','.battery','global_overrides','Switch\x20and\x20Timer\x20Bar\x20Card:\x20\x27entities\x27\x20is\x20not\x20a\x20list\x20or\x20is\x20missing.','define','_renderSensorPickerWithHelp','mdi:battery-charging-outline','_maybeReconcile','_resetDurationOverride','Right','floor','_renderBattery','getLastWateringText','localStorage','Apply','entries','smooth','__durationStorageKey','Minutes','turn_on','_confirmStart','_renderDurationDialog','value','open','\x20(copy)','renderRoot','switch.example_switch','[data-entity-index=\x22','fan','start_confirm_dont_show','switch-and-timer-bar-card-editor','calculateActivePercent','ha-panel-lovelace','Just\x20now','mdi:battery-charging-100','0m\x2000s','status_on','some','_tip','38635rgvCeQ','toUpperCase','__lastOffAt','stop','minutes\x20ago','effectAllowed','__offDebounceMs','entities.','_removeEntity','prototype','setConfig','_getBuiltInDefaults','max','status_unavailable','removeEventListener','tagName','.switch','customCards','replace','Default\x20for\x20all\x20entities.\x20If\x20enabled,\x20users\x20can\x20tap\x20the\x20total\x20time\x20on\x20the\x20card\x20to\x20change\x20the\x20duration.\x20Each\x20entity\x20can\x20still\x20override\x20this.','warn','ready','isNaN','_loadArmedTimers','_entityTabs','trim','__startTick','splice','_armTimer','key','close_cover','colors','412273eSuQyS','_renderEntityPicker','_closeDurationEditor','renderEntity','unit_of_measurement','_toggleEntityExpand','_startConfirm','_reorderEntities','.colors','\x20field--','time_format_zero','6145164YASaNH','render','battery','Optional\x20custom\x20name.\x20If\x20empty,\x20card\x20uses\x20entity\x20friendly\x20name.','callService','Timer\x20entity','from','edit_duration_tooltip','string','button_stop','drag-over','hasOverride','_renderColorOptions','push','battery_state','Left','_showSensorHelp','scrollIntoView','getAttribute','parse','fromEntries','entity_id','finish','min','startsWith','_cancelStart','14766240HFSiak','charging','streaming','__needsTick','mdi:battery-','.entity-head','LitElement','padStart','has','_isActive','edit_duration_title','_onDragLeave','_duplicateEntity','__itemsCache','3959565tryBoC','length','duration','button_position','hours\x20ago','_resetPath','#000000','addEventListener','_pruneDefaults','createElement','edit_duration_minutes','2YkCWEV','control','mdi:stop','_hasAnyDurationOverride','#F44336','setData','button_start','Unavailable','keys','sensor.example_last_watered','toString','getPrototypeOf','_durationEditor','__recomputeTickNeedAndApply','isArray','_valueChanged','_cardWarnKey','__lastEntitySig','last_on_active','filter','#FFFFFF','14354343XfSAxv','media_player','slice','_isStartWarnSuppressed','stringify','Use\x20global','friendly_name','ha-dialog','HA-SWITCH','_saveArmedTimers','Battery\x20(optional)','Click\x20to\x20change\x20duration','configValue','forEach','Watering','join','Reset\x20to\x20default','time_unit_seconds','finishes_at','_disarmTimer','stopPropagation','valve','_config','__onConfirmKeyDown','_dispatchConfig','.timer','sensor','_dragOverIndex','_closeSensorHelp','Shown\x20at\x20the\x20top\x20of\x20the\x20card.\x20Leave\x20empty\x20to\x20hide.','Irrigation\x20Control','33lIdxPW','unlock','global','getData','_expanded','open_cover','__armedTimers','_toggleExpand','_renderIconOptions','attributes','hass','open_valve','_dragFromIndex','Start\x20anyway','Cancel','title','last_on_now','Entity\x20#','shouldUpdate','_addEntity','_performStart','config-changed','getConfigElement','edit_duration_seconds','dataTransfer','.icons','delete','disconnectedCallback','switch-and-timer-bar-card:nostartwarn','_handleStart','detail','__durationOverrides','_renderEntitySection','name','start_confirm_ok','.labels','getStubConfig','progress_fill','querySelector','idle','now','mwc-dialog','_scrollEntityIntoView','states','Where\x20Start/Stop\x20buttons\x20appear\x20by\x20default\x20for\x20all\x20entities.','last_changed','formatTime','active','totalDuration','move','DEFAULTS','round','left','_reconcileMissedTimers','dropEffect','_loadDurationOverrides','state','checked','set','Ready','days\x20ago','getStatusText','switch-and-timer-bar-card:\x20Lit\x20not\x20found.\x20This\x20card\x20must\x20run\x20inside\x20Home\x20Assistant.','closed','_onDragOver','right','This\x20timer\x20switches\x20the\x20device\x20off\x20via\x20your\x20browser.\x20If\x20no\x20dashboard\x20tab\x20is\x20open\x20on\x20your\x20browser\x20or\x20your\x20HA\x20app\x20is\x20closed\x20when\x20the\x20timer\x20ends,\x20the\x20device\x20won\x27t\x20turn\x20off.\x20For\x20unattended\x20use,\x20enable\x20“Automation\x20Link”\x20for\x20this\x20entity\x20and\x20let\x20a\x20Home\x20Assistant\x20automation\x20handle\x20the\x20switch-off.','__dontShowStartChecked','4QAXGil','timer.example_timer','keydown','styles','entity_','target','12400598zjrzHf','finishesAt','connectedCallback','_renderStartConfirmDialog','charCodeAt','size','Last\x20run\x20sensor\x20(optional)','icons','_computeEntitySig','start_confirm_cancel','background-color:\x20','Seconds','mdi:battery-charging-','Override\x20global\x20button\x20position\x20for\x20this\x20entity\x20only.','get','clear','preventDefault','__sharedSwitches','cover','properties','switch-and-timer-bar-card:armed','editable_duration','toLowerCase','dropdown','_openDurationEditor','unavailable','close_valve','_onDurationFieldChange','last_on_ago_minutes','_timer','general','mdi:play','Set\x20duration','_openSensorHelp','lock','unlocked','Active','_onDrop','split','_handleStop','_renderLabelOptions','timer','html','map','color:\x20','object','edit_duration_reset','_secondsToHHMMSS'];_0x235a=function(){return _0x54b1fe;};return _0x235a();}customElements[_0xdd4cd0(0x1f7)]('switch-and-timer-bar-card',SwitchAndTimerBarCard);class SwitchAndTimerBarCardEditor extends HaLitBase{static get[_0xdd4cd0(0x1ac)](){return{'hass':{},'_config':{'state':!![]},'_expanded':{'state':!![]},'_dragOverIndex':{'state':!![]},'_showSensorHelp':{'state':!![]},'_mainTab':{'state':!![]},'_entityTabs':{'state':!![]}};}constructor(){const _0x2876b1=_0xdd4cd0;super(),this[_0x2876b1(0x26c)]=new Map(),this['__lastEntitySig']=null,this[_0x2876b1(0x2b0)]={'global_overrides':![],'entities':![]},this[_0x2876b1(0x2a8)]=null,this[_0x2876b1(0x2b8)]=null,this[_0x2876b1(0x255)]=![],this[_0x2876b1(0x1eb)]='general',this[_0x2876b1(0x232)]={},this[_0x2876b1(0x1ba)]=_0x2538df=>{const _0x30d5b0=_0x2876b1;if(_0x2538df)_0x2538df[_0x30d5b0(0x2a1)]();this[_0x30d5b0(0x255)]=!![];},this['_closeSensorHelp']=()=>{const _0x4faed8=_0x2876b1;this[_0x4faed8(0x255)]=![];};}[_0xdd4cd0(0x224)](_0x33705a){const _0x4f864d=_0xdd4cd0,_0x2c6d23=JSON[_0x4f864d(0x258)](JSON[_0x4f864d(0x291)](_0x33705a||{}));if(!Array[_0x4f864d(0x286)](_0x2c6d23[_0x4f864d(0x1ea)]))_0x2c6d23[_0x4f864d(0x1ea)]=[];_0x2c6d23[_0x4f864d(0x239)]=_0x2c6d23[_0x4f864d(0x239)]||{},_0x2c6d23[_0x4f864d(0x1a0)]=_0x2c6d23['icons']||{},_0x2c6d23[_0x4f864d(0x1e2)]=_0x2c6d23[_0x4f864d(0x1e2)]||{},_0x2c6d23[_0x4f864d(0x1ea)][_0x4f864d(0x29a)]((_0x3f9b5f,_0xecef72)=>{const _0x51ebfb=_0x4f864d;if(this[_0x51ebfb(0x2b0)][_0x51ebfb(0x197)+_0xecef72]===undefined)this[_0x51ebfb(0x2b0)]['entity_'+_0xecef72]=![];}),this[_0x4f864d(0x2a3)]=_0x2c6d23;}[_0xdd4cd0(0x2be)](_0xd22ea9){const _0x51fc6d=_0xdd4cd0;if(_0xd22ea9[_0x51fc6d(0x267)]('_config')||_0xd22ea9[_0x51fc6d(0x267)](_0x51fc6d(0x2b0))||_0xd22ea9[_0x51fc6d(0x267)](_0x51fc6d(0x2a8))||_0xd22ea9[_0x51fc6d(0x267)](_0x51fc6d(0x255))||_0xd22ea9[_0x51fc6d(0x267)]('_mainTab')||_0xd22ea9[_0x51fc6d(0x267)]('_entityTabs'))return!![];if(_0xd22ea9[_0x51fc6d(0x267)]('hass')){const _0x56124e=this[_0x51fc6d(0x1a1)](this[_0x51fc6d(0x2b6)]);if(_0x56124e!==this[_0x51fc6d(0x289)])return this[_0x51fc6d(0x289)]=_0x56124e,this['__itemsCache'][_0x51fc6d(0x1a8)](),!![];return![];}return!![];}[_0xdd4cd0(0x1a1)](_0x1ef140){const _0x5ea3f9=_0xdd4cd0,_0x17a88b=_0x1ef140?.[_0x5ea3f9(0x17a)]||{};let _0x31334c=0x0;for(const _0x1f5fdd in _0x17a88b)_0x31334c++;return''+_0x31334c;}[_0xdd4cd0(0x275)](_0x40118f){const _0x5e9cdf=_0xdd4cd0,_0x4484f3=SwitchAndTimerBarCard[_0x5e9cdf(0x181)],_0x4cdf6c=JSON[_0x5e9cdf(0x258)](JSON[_0x5e9cdf(0x291)](_0x40118f||{}));for(const _0x2c85f5 of[_0x5e9cdf(0x1e2),_0x5e9cdf(0x239),'icons']){const _0x24a303=_0x4484f3[_0x2c85f5],_0x146ba6=_0x4cdf6c[_0x2c85f5];if(_0x146ba6&&typeof _0x146ba6===_0x5e9cdf(0x1c6)&&!Array[_0x5e9cdf(0x286)](_0x146ba6)&&_0x24a303){for(const _0x3c7218 of Object[_0x5e9cdf(0x280)](_0x146ba6)){if(_0x3c7218 in _0x24a303&&_0x146ba6[_0x3c7218]===_0x24a303[_0x3c7218])delete _0x146ba6[_0x3c7218];}if(Object['keys'](_0x146ba6)[_0x5e9cdf(0x26e)]===0x0)delete _0x4cdf6c[_0x2c85f5];}}for(const _0x425b3e of Object[_0x5e9cdf(0x280)](_0x4484f3)){if(_0x425b3e===_0x5e9cdf(0x1ea))continue;if(_0x4484f3[_0x425b3e]&&typeof _0x4484f3[_0x425b3e]==='object')continue;if(_0x425b3e in _0x4cdf6c&&_0x4cdf6c[_0x425b3e]===_0x4484f3[_0x425b3e])delete _0x4cdf6c[_0x425b3e];}return _0x4cdf6c;}[_0xdd4cd0(0x2a5)](_0x4e41d5){const _0x4a8ada=_0xdd4cd0,_0xac52e9=this[_0x4a8ada(0x275)](_0x4e41d5);this[_0x4a8ada(0x2a3)]=_0xac52e9,this['requestUpdate'](),this[_0x4a8ada(0x1de)](new CustomEvent(_0x4a8ada(0x2c1),{'detail':{'config':_0xac52e9},'bubbles':!![],'composed':!![]}));}[_0xdd4cd0(0x287)](_0x441286){const _0x2428f8=_0xdd4cd0;if(!this['_config']||!this[_0x2428f8(0x2b6)])return;const _0x48bb86=_0x441286[_0x2428f8(0x198)],_0x2c5719=_0x48bb86[_0x2428f8(0x299)]||_0x48bb86[_0x2428f8(0x257)]('configValue');if(!_0x2c5719)return;const _0x67614c=_0x2c5719[_0x2428f8(0x1bf)]('.');let _0x512474;if(_0x48bb86[_0x2428f8(0x229)]===_0x2428f8(0x295))_0x512474=_0x48bb86[_0x2428f8(0x188)];else{if(_0x441286[_0x2428f8(0x16d)]?.['value']!==undefined)_0x512474=_0x441286[_0x2428f8(0x16d)][_0x2428f8(0x209)];else{if(_0x48bb86[_0x2428f8(0x209)]!==undefined)_0x512474=_0x48bb86[_0x2428f8(0x209)];else _0x512474='';}}if(_0x512474===_0x2428f8(0x2ae))_0x512474='';const _0x455d88=JSON['parse'](JSON[_0x2428f8(0x291)](this[_0x2428f8(0x2a3)]));let _0x50cc88=_0x455d88;for(let _0x82d259=0x0;_0x82d259<_0x67614c[_0x2428f8(0x26e)]-0x1;_0x82d259++){const _0x53d453=_0x67614c[_0x82d259];if(_0x50cc88[_0x53d453]===undefined)_0x50cc88[_0x53d453]=!isNaN(parseInt(_0x67614c[_0x82d259+0x1],0xa))?[]:{};_0x50cc88=_0x50cc88[_0x53d453];}const _0x32816e=_0x67614c[_0x67614c[_0x2428f8(0x26e)]-0x1];if(_0x512474===''||_0x512474===null||Array[_0x2428f8(0x286)](_0x512474)&&_0x512474['length']===0x0){delete _0x50cc88[_0x32816e];if(_0x67614c[_0x2428f8(0x26e)]>0x1){let _0x2c5489=_0x455d88;for(let _0x7e7882=0x0;_0x7e7882<_0x67614c[_0x2428f8(0x26e)]-0x2;_0x7e7882++)_0x2c5489=_0x2c5489[_0x67614c[_0x7e7882]];if(Object[_0x2428f8(0x280)](_0x50cc88)[_0x2428f8(0x26e)]===0x0&&_0x2c5489[_0x67614c[_0x67614c['length']-0x2]])delete _0x2c5489[_0x67614c[_0x67614c[_0x2428f8(0x26e)]-0x2]];}}else _0x50cc88[_0x32816e]=_0x512474;this[_0x2428f8(0x2a5)](_0x455d88);}[_0xdd4cd0(0x2b3)](_0x333e2a){const _0x1a5a8e=_0xdd4cd0;this[_0x1a5a8e(0x2b0)]={...this['_expanded'],[_0x333e2a]:!this[_0x1a5a8e(0x2b0)][_0x333e2a]};}[_0xdd4cd0(0x23f)](_0x35d006){const _0x3988f4=_0xdd4cd0,_0x8fdb81=_0x3988f4(0x197)+_0x35d006,_0x47c78e=!!this[_0x3988f4(0x2b0)][_0x8fdb81];if(_0x47c78e){this[_0x3988f4(0x2b0)]={...this[_0x3988f4(0x2b0)],[_0x8fdb81]:![]};return;}const _0x559391={...this[_0x3988f4(0x2b0)]};Object[_0x3988f4(0x280)](_0x559391)[_0x3988f4(0x28b)](_0x291f46=>_0x291f46[_0x3988f4(0x25d)](_0x3988f4(0x197)))[_0x3988f4(0x29a)](_0x5069b2=>_0x559391[_0x5069b2]=![]),_0x559391[_0x8fdb81]=!![],_0x559391[_0x3988f4(0x1ea)]=!![],this[_0x3988f4(0x2b0)]=_0x559391,requestAnimationFrame(()=>{const _0x3a0119=_0x3988f4;requestAnimationFrame(()=>this[_0x3a0119(0x179)](_0x35d006));});}[_0xdd4cd0(0x179)](_0x4ce92e){const _0x30187f=_0xdd4cd0,_0xe76091=this[_0x30187f(0x20c)]?.['querySelector'](_0x30187f(0x20e)+_0x4ce92e+'\x22]');if(!_0xe76091)return;const _0x1185a7=_0xe76091[_0x30187f(0x175)](_0x30187f(0x264))||_0xe76091;try{_0x1185a7[_0x30187f(0x256)]({'behavior':_0x30187f(0x203),'block':'start','inline':'nearest'});}catch(_0x587239){_0x1185a7[_0x30187f(0x256)](!![]);}}[_0xdd4cd0(0x2bf)]=()=>{const _0x2168b=_0xdd4cd0,_0x28ce12=JSON['parse'](JSON[_0x2168b(0x291)](this[_0x2168b(0x2a3)]));_0x28ce12['entities']=_0x28ce12['entities']||[],_0x28ce12['entities'][_0x2168b(0x252)]({'name':'','switch':'','timer':'','sensor':'','timer_and_entity_connected_via_automation':!![]});const _0x42ca3d=_0x28ce12[_0x2168b(0x1ea)][_0x2168b(0x26e)]-0x1,_0x5b3495={...this['_expanded']};Object['keys'](_0x5b3495)['filter'](_0x51de52=>_0x51de52[_0x2168b(0x25d)]('entity_'))[_0x2168b(0x29a)](_0xa42df7=>_0x5b3495[_0xa42df7]=![]),_0x5b3495['entity_'+_0x42ca3d]=!![],_0x5b3495[_0x2168b(0x1ea)]=!![],this[_0x2168b(0x2b0)]=_0x5b3495,this[_0x2168b(0x2a5)](_0x28ce12);};['_removeEntity'](_0xee2359){const _0x463479=_0xdd4cd0,_0xfc0657=JSON['parse'](JSON[_0x463479(0x291)](this[_0x463479(0x2a3)]));_0xfc0657[_0x463479(0x1ea)][_0x463479(0x235)](_0xee2359,0x1);const _0x24e75e={...this[_0x463479(0x2b0)]};Object[_0x463479(0x280)](_0x24e75e)['filter'](_0x3e7ab8=>_0x3e7ab8[_0x463479(0x25d)](_0x463479(0x197)))[_0x463479(0x29a)](_0x382d9d=>delete _0x24e75e[_0x382d9d]),_0xfc0657['entities'][_0x463479(0x29a)]((_0x521364,_0x47fc49)=>_0x24e75e[_0x463479(0x197)+_0x47fc49]=![]),this[_0x463479(0x2b0)]=_0x24e75e,this[_0x463479(0x2a5)](_0xfc0657);}[_0xdd4cd0(0x26b)](_0x2e2168){const _0x604a92=_0xdd4cd0,_0x1518c4=JSON[_0x604a92(0x258)](JSON[_0x604a92(0x291)](this[_0x604a92(0x2a3)])),_0x3e59d9=JSON[_0x604a92(0x258)](JSON[_0x604a92(0x291)](_0x1518c4['entities'][_0x2e2168]));if(_0x3e59d9['name'])_0x3e59d9[_0x604a92(0x170)]=_0x3e59d9[_0x604a92(0x170)]+_0x604a92(0x20b);_0x1518c4['entities']['splice'](_0x2e2168+0x1,0x0,_0x3e59d9);const _0x478ed1={...this['_expanded']};Object['keys'](_0x478ed1)[_0x604a92(0x28b)](_0x5b0469=>_0x5b0469['startsWith'](_0x604a92(0x197)))[_0x604a92(0x29a)](_0x4f15e0=>_0x478ed1[_0x4f15e0]=![]),_0x478ed1['entity_'+(_0x2e2168+0x1)]=!![],_0x478ed1[_0x604a92(0x1ea)]=!![],this['_expanded']=_0x478ed1,this[_0x604a92(0x2a5)](_0x1518c4);}[_0xdd4cd0(0x1e0)](_0x231d49,_0x106a17){const _0x239d46=_0xdd4cd0;this['_dragFromIndex']=_0x231d49;try{_0x106a17[_0x239d46(0x2c4)][_0x239d46(0x21f)]=_0x239d46(0x180),_0x106a17[_0x239d46(0x2c4)][_0x239d46(0x27d)]('text/plain',String(_0x231d49));}catch(_0x481724){}}[_0xdd4cd0(0x18f)](_0x1823f7,_0x5655aa){const _0x47f9ee=_0xdd4cd0;_0x5655aa[_0x47f9ee(0x1a9)](),this['_dragOverIndex']=_0x1823f7;try{_0x5655aa['dataTransfer'][_0x47f9ee(0x185)]=_0x47f9ee(0x180);}catch(_0x13363f){}}[_0xdd4cd0(0x26a)](_0x5f18b5,_0x3732c3){}[_0xdd4cd0(0x1be)](_0x44d533,_0x474b26){const _0x568576=_0xdd4cd0;_0x474b26['preventDefault']();let _0x5b734e=this[_0x568576(0x2b8)];try{const _0x14f868=_0x474b26[_0x568576(0x2c4)][_0x568576(0x2af)]('text/plain'),_0x201068=parseInt(_0x14f868,0xa);if(!Number['isNaN'](_0x201068))_0x5b734e=_0x201068;}catch(_0x54170f){}if(_0x5b734e===null||_0x5b734e===undefined)return;this[_0x568576(0x241)](_0x5b734e,_0x44d533),this[_0x568576(0x2b8)]=null,this[_0x568576(0x2a8)]=null;}[_0xdd4cd0(0x241)](_0x447a7f,_0x17c336){const _0x1a3649=_0xdd4cd0;if(_0x447a7f===_0x17c336)return;const _0x20ffaa=JSON[_0x1a3649(0x258)](JSON[_0x1a3649(0x291)](this['_config'])),_0x889135=_0x20ffaa[_0x1a3649(0x1ea)]||[];if(_0x447a7f<0x0||_0x447a7f>=_0x889135[_0x1a3649(0x26e)]||_0x17c336<0x0||_0x17c336>=_0x889135['length'])return;const _0x579c8c=(this[_0x1a3649(0x2a3)][_0x1a3649(0x1ea)]||[])[_0x1a3649(0x1d9)]((_0x2c4bd0,_0x5a5121)=>!!this['_expanded']['entity_'+_0x5a5121]),[_0x5457c9]=_0x889135['splice'](_0x447a7f,0x1);_0x889135[_0x1a3649(0x235)](_0x17c336,0x0,_0x5457c9);let _0x54a40f=_0x579c8c;if(_0x579c8c===_0x447a7f)_0x54a40f=_0x17c336;else{if(_0x447a7f<_0x579c8c&&_0x17c336>=_0x579c8c)_0x54a40f=_0x579c8c-0x1;else{if(_0x447a7f>_0x579c8c&&_0x17c336<=_0x579c8c)_0x54a40f=_0x579c8c+0x1;}}const _0x3b82e6={...this['_expanded']};Object[_0x1a3649(0x280)](_0x3b82e6)[_0x1a3649(0x28b)](_0x1e0578=>_0x1e0578[_0x1a3649(0x25d)]('entity_'))[_0x1a3649(0x29a)](_0x5414c5=>delete _0x3b82e6[_0x5414c5]),_0x889135[_0x1a3649(0x29a)]((_0x513e9f,_0x264d56)=>_0x3b82e6['entity_'+_0x264d56]=![]);if(_0x54a40f>=0x0&&_0x54a40f<_0x889135[_0x1a3649(0x26e)])_0x3b82e6[_0x1a3649(0x197)+_0x54a40f]=!![];this[_0x1a3649(0x2b0)]=_0x3b82e6,this[_0x1a3649(0x2a5)](_0x20ffaa);}[_0xdd4cd0(0x23b)](_0x176245,_0x50ad7a,_0x14a0ab,_0x1e3136,_0x533cdc=''){const _0x4bc8e0=_0xdd4cd0,_0x38ef8f=Array['isArray'](_0x1e3136)?_0x1e3136:undefined,_0x3143ff=_0x533cdc?'\x20field--'+_0x533cdc:'',_0x1fd6e8=_0x533cdc?'\x20field-label--'+_0x533cdc:'';return haHtml`
      <div class="field${_0x3143ff}">
        <div class="field-label${_0x1fd6e8}">${_0x176245}</div>
        <div class="picker-wrap">
          <ha-selector
            .hass=${this[_0x4bc8e0(0x2b6)]}
            .label=${undefined}
            .selector=${_0x38ef8f?{'entity':{'domain':_0x38ef8f}}:{'entity':{}}}
            .value=${_0x50ad7a||''}
            .configValue=${_0x14a0ab}
            @value-changed=${this[_0x4bc8e0(0x287)]}
          ></ha-selector>
        </div>
      </div>
    `;}['_renderSensorPickerWithHelp'](_0x46e01a,_0x154485,_0xedf7fe,_0x3cd96f=''){const _0x3423cb=_0xdd4cd0,_0x73e3e2=_0x3cd96f?_0x3423cb(0x243)+_0x3cd96f:'',_0x1c3338=_0x3cd96f?'\x20label-row--'+_0x3cd96f:'';return haHtml`
      <div class="field${_0x73e3e2}">
        <div class="label-row${_0x1c3338}">
          <div class="label-text">${_0x46e01a}</div>
          <button class="help-btn" type="button" title="Help" @click=${this['_openSensorHelp']}>
            <span class="help-q">?</span>
          </button>
        </div>

        <div class="picker-wrap">
          <ha-selector
            .hass=${this['hass']}
            .label=${undefined}
            .selector=${{'entity':{'domain':[_0x3423cb(0x2a7),'input_datetime']}}}
            .value=${_0x154485||''}
            .configValue=${_0xedf7fe}
            @value-changed=${this[_0x3423cb(0x287)]}
          ></ha-selector>
        </div>
      </div>
    `;}[_0xdd4cd0(0x225)](_0x124021){const _0x305351=_0xdd4cd0,_0x1c77a2={'colors':{'on':_0x305351(0x1d2),'ready':_0x305351(0x1ef),'unavailable':'#F44336','button_start':_0x305351(0x1ef),'button_stop':_0x305351(0x1d2),'icon':_0x305351(0x28c),'progress_fill':_0x305351(0x1d2)},'icons':{'start':_0x305351(0x1b8),'stop':_0x305351(0x27a)},'labels':{'status_on':'Watering','status_ready':_0x305351(0x18a),'status_unavailable':_0x305351(0x27f),'last_on_active':_0x305351(0x1bd),'last_on_now':_0x305351(0x214),'last_on_ago_minutes':_0x305351(0x21e),'last_on_ago_hours':_0x305351(0x271),'last_on_ago_days':_0x305351(0x18b),'time_format_zero':_0x305351(0x216),'time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':_0x305351(0x1b9),'edit_duration_hours':_0x305351(0x1e1),'edit_duration_minutes':_0x305351(0x205),'edit_duration_seconds':_0x305351(0x1a4),'edit_duration_apply':_0x305351(0x201),'edit_duration_reset':_0x305351(0x29d),'edit_duration_cancel':_0x305351(0x2ba),'edit_duration_tooltip':_0x305351(0x298),'start_confirm_body':_0x305351(0x191),'start_confirm_ok':'Start\x20anyway','start_confirm_cancel':'Cancel'}};return _0x1c77a2[_0x124021];}[_0xdd4cd0(0x1d7)](_0x373271){const _0x2bf3c7=_0xdd4cd0;return{...this[_0x2bf3c7(0x225)](_0x373271),...this[_0x2bf3c7(0x2a3)]?.[_0x373271]||{}};}[_0xdd4cd0(0x272)](_0x1892f2){const _0x2b05f3=_0xdd4cd0,_0x4ba0e4=JSON[_0x2b05f3(0x258)](JSON[_0x2b05f3(0x291)](this[_0x2b05f3(0x2a3)])),_0x80788e=_0x1892f2['split']('.');let _0x3d0815=_0x4ba0e4;for(let _0x3b2677=0x0;_0x3b2677<_0x80788e[_0x2b05f3(0x26e)]-0x1;_0x3b2677++){_0x3d0815=_0x3d0815?.[_0x80788e[_0x3b2677]];if(!_0x3d0815)break;}if(_0x3d0815&&typeof _0x3d0815===_0x2b05f3(0x1c6))delete _0x3d0815[_0x80788e[_0x80788e[_0x2b05f3(0x26e)]-0x1]];this[_0x2b05f3(0x2a5)](_0x4ba0e4);}[_0xdd4cd0(0x219)](_0x50be20){return haHtml`<span class="tip-wrap" tabindex="-1">
      <svg class="tip-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      <span class="tip-box">${_0x50be20}</span>
    </span>`;}[_0xdd4cd0(0x251)](_0x3e2df8,_0x28aca9,_0x2a4863){const _0x4472e4=_0xdd4cd0,_0x52917a=_0x3e2df8||{},_0x22a523=_0x2a4863||this[_0x4472e4(0x225)](_0x4472e4(0x239));return haHtml`
      <div class="color-grid">
        ${Object['keys'](_0x22a523)['map'](_0x139cf2=>{const _0x3c7619=_0x4472e4,_0x309553=_0x139cf2[_0x3c7619(0x22c)](/_/g,'\x20'),_0x2bbfaa=_0x52917a[_0x139cf2]||_0x22a523[_0x139cf2]||_0x3c7619(0x273);return haHtml`
            <div class="color-tile">
              <span class="color-name">${_0x309553}</span>
              <input
                class="color-swatch"
                type="color"
                .value="${_0x2bbfaa}"
                @input=${_0xc12fcb=>this['_valueChanged']({'target':{'configValue':_0x28aca9+'.'+_0x139cf2,'value':_0xc12fcb[_0x3c7619(0x198)][_0x3c7619(0x209)]},'detail':{'value':_0xc12fcb[_0x3c7619(0x198)][_0x3c7619(0x209)]}})}
              />
              <input
                class="ed-input color-hex"
                type="text"
                .value="${_0x52917a[_0x139cf2]||''}"
                placeholder="${_0x22a523[_0x139cf2]}"
                .configValue="${_0x28aca9}.${_0x139cf2}"
                @change=${this[_0x3c7619(0x287)]}
              />
            </div>
          `;})}
      </div>
    `;}[_0xdd4cd0(0x2b4)](_0x4debe0,_0x5dbf01,_0x2118e8){const _0x52355c=_0xdd4cd0,_0x21de92=_0x4debe0||{},_0x12483c=_0x2118e8||this[_0x52355c(0x225)]('icons');return haHtml`
      <div class="grid grid-2">
        ${Object[_0x52355c(0x280)](_0x12483c)[_0x52355c(0x1c4)](_0x15f910=>haHtml`
            <div class="field">
              <ha-icon-picker
                label="${_0x15f910['charAt'](0x0)[_0x52355c(0x21b)]()+_0x15f910[_0x52355c(0x28f)](0x1)} Icon"
                .value="${_0x21de92[_0x15f910]||''}"
                .placeholder="${_0x12483c[_0x15f910]}"
                .configValue="${_0x5dbf01}.${_0x15f910}"
                @value-changed=${this[_0x52355c(0x287)]}
              ></ha-icon-picker>
            </div>
          `)}
      </div>
    `;}[_0xdd4cd0(0x1c1)](_0x113c64,_0x12bf0c,_0x58cb8a){const _0x41c6b2=_0xdd4cd0,_0x22232a=new Set([_0x41c6b2(0x269),_0x41c6b2(0x1d5),_0x41c6b2(0x277),_0x41c6b2(0x2c3),'edit_duration_apply',_0x41c6b2(0x1c7),'edit_duration_cancel',_0x41c6b2(0x24c),_0x41c6b2(0x1db),_0x41c6b2(0x171),_0x41c6b2(0x1a2)]),_0x435871=_0x113c64||{},_0x385f2b=_0x58cb8a||this[_0x41c6b2(0x225)](_0x41c6b2(0x1e2)),_0x162fac=Object[_0x41c6b2(0x280)](_0x385f2b)[_0x41c6b2(0x28b)](_0x1a453c=>!_0x22232a[_0x41c6b2(0x267)](_0x1a453c));return haHtml`
      <div class="ovr-grid">
        ${_0x162fac['map'](_0x46b2cb=>haHtml`
            <label class="ovr-field">
              <span class="ovr-label">${_0x46b2cb[_0x41c6b2(0x22c)](/_/g,'\x20')}</span>
              <input
                class="ed-input"
                type="text"
                .value="${_0x435871[_0x46b2cb]||''}"
                placeholder="${_0x385f2b[_0x46b2cb]}"
                .configValue="${_0x12bf0c}.${_0x46b2cb}"
                @change=${this[_0x41c6b2(0x287)]}
              />
            </label>
          `)}
      </div>
    `;}['_renderSensorHelpDialog'](){const _0x233947=_0xdd4cd0,_0x34f208=customElements[_0x233947(0x1a7)](_0x233947(0x294))?_0x233947(0x294):_0x233947(0x178),_0x343cb6=_0x233947(0x1df);if(_0x34f208===_0x233947(0x294))return haHtml`
        <ha-dialog
          .open=${this[_0x233947(0x255)]}
          @closed=${this[_0x233947(0x2a9)]}
          heading="How to create a trigger-based sensor"
        >
          <div class="help-content">
            <div class="help-title">🧪 How to create a trigger-based sensor</div>
            <div class="help-text">
              To show "last run" on the card, you can create a template sensor that updates when the timer finishes
              (works for all domains) and/or when the device turns off. Example below uses both a
              <code>timer.finished</code> event and a switch turning off; adapt the second trigger for your domain if needed.
            </div>
            <pre class="code"><code>${_0x343cb6}</code></pre>
          </div>
          <mwc-button slot="primaryAction" @click=${this[_0x233947(0x2a9)]}>Close</mwc-button>
        </ha-dialog>
      `;return haHtml`
      <mwc-dialog
        ?open=${this[_0x233947(0x255)]}
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
          <pre class="code"><code>${_0x343cb6}</code></pre>
        </div>
        <mwc-button slot="primaryAction" @click=${this[_0x233947(0x2a9)]}>Close</mwc-button>
      </mwc-dialog>
    `;}['render'](){const _0x143180=_0xdd4cd0;if(!this['hass']||!this[_0x143180(0x2a3)])return haHtml``;const _0x1690fb=!this[_0x143180(0x2b0)][_0x143180(0x1f5)],_0x81bbbc=!this[_0x143180(0x2b0)][_0x143180(0x1ea)],_0x3f15f0=this[_0x143180(0x1eb)]||_0x143180(0x1b7);return haHtml`
      <div class="editor">
        <!-- GLOBAL SETTINGS PANEL -->
        <div class="panel ${_0x1690fb?'':_0x143180(0x20a)}">
          <div class="panel-header" @click=${()=>this[_0x143180(0x2b3)](_0x143180(0x1f5))}>
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

          ${_0x1690fb?'':haHtml`
            <div class="panel-body">
              <div class="tabs">
                <button class="tb ${_0x3f15f0===_0x143180(0x1b7)?_0x143180(0x17e):''}" @click=${()=>{const _0x38be64=_0x143180;this[_0x38be64(0x1eb)]=_0x38be64(0x1b7);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  General
                </button>
                <button class="tb ${_0x3f15f0===_0x143180(0x1a0)?'active':''}" @click=${()=>{const _0x58fcc7=_0x143180;this[_0x58fcc7(0x1eb)]=_0x58fcc7(0x1a0);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  Icons
                </button>
                <button class="tb ${_0x3f15f0===_0x143180(0x239)?'active':''}" @click=${()=>{const _0x2e486b=_0x143180;this[_0x2e486b(0x1eb)]=_0x2e486b(0x239);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                  Colors
                </button>
                <button class="tb ${_0x3f15f0==='labels'?'active':''}" @click=${()=>{const _0x59c328=_0x143180;this[_0x59c328(0x1eb)]=_0x59c328(0x1e2);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                  Labels
                </button>
              </div>

              <!-- General Tab -->
              <div class="tc ${_0x3f15f0===_0x143180(0x1b7)?'active':''}">
                <div class="fg">
                  <div class="fgl">Card</div>
                  <div class="grid grid-pair">
                    <div class="field">
                      <div class="field-label">Title ${this['_tip'](_0x143180(0x2aa))}</div>
                      <input
                        class="ed-input"
                        type="text"
                        .value="${this['_config']['title']||''}"
                        .configValue=${_0x143180(0x2bb)}
                        @change=${this[_0x143180(0x287)]}
                      />
                    </div>

                    <div class="field">
                      <div class="field-label">Button Position ${this['_tip'](_0x143180(0x17b))}</div>
                      <div class="picker-wrap">
                        <ha-selector
                          .hass=${this['hass']}
                          .label=${'Position'}
                          .selector=${{'select':{'options':[{'value':_0x143180(0x183),'label':_0x143180(0x254)},{'value':_0x143180(0x190),'label':_0x143180(0x1fc)}],'mode':'dropdown'}}}
                          .value=${this[_0x143180(0x2a3)][_0x143180(0x270)]||_0x143180(0x183)}
                          .configValue=${_0x143180(0x270)}
                          @value-changed=${this[_0x143180(0x287)]}
                        ></ha-selector>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-2">
                    <div class="field">
                      <div class="field-label">Editable duration (global default) ${this['_tip'](_0x143180(0x22d))}</div>
                      <div class="toggle-row">
                        <label class="si">
                          <div class="st">
                            <ha-switch
                              .checked="${!!this[_0x143180(0x2a3)][_0x143180(0x1ae)]}"
                              .configValue=${_0x143180(0x1ae)}
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
              <div class="tc ${_0x3f15f0==='colors'?'active':''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Colors</div>
                    <button class="reset-btn" @click=${()=>this[_0x143180(0x272)](_0x143180(0x239))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this[_0x143180(0x251)](this[_0x143180(0x2a3)][_0x143180(0x239)],_0x143180(0x239),this[_0x143180(0x225)](_0x143180(0x239)))}
                </div>
              </div>

              <!-- Icons Tab -->
              <div class="tc ${_0x3f15f0==='icons'?_0x143180(0x17e):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Icons</div>
                    <button class="reset-btn" @click=${()=>this[_0x143180(0x272)](_0x143180(0x1a0))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this[_0x143180(0x2b4)](this[_0x143180(0x2a3)][_0x143180(0x1a0)],_0x143180(0x1a0),this[_0x143180(0x225)]('icons'))}
                </div>
              </div>

              <!-- Labels Tab -->
              <div class="tc ${_0x3f15f0===_0x143180(0x1e2)?_0x143180(0x17e):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Labels</div>
                    <button class="reset-btn" @click=${()=>this[_0x143180(0x272)](_0x143180(0x1e2))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this[_0x143180(0x1c1)](this[_0x143180(0x2a3)][_0x143180(0x1e2)],_0x143180(0x1e2),this[_0x143180(0x225)](_0x143180(0x1e2)))}
                </div>
              </div>
            </div>
          `}
        </div>

        <!-- ENTITIES PANEL -->
        <div class="panel ${_0x81bbbc?'':_0x143180(0x20a)}">
          <div class="panel-header" @click=${()=>this[_0x143180(0x2b3)]('entities')}>
            <div class="panel-icon ent-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
            <div class="panel-text">
              <span class="panel-title">Entities <span class="badge">${(this[_0x143180(0x2a3)][_0x143180(0x1ea)]||[])['length']}</span></span>
              <span class="panel-subtitle">Drag & drop to reorder. Click entity to expand.</span>
            </div>
            <span class="panel-chevron">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </div>

          ${_0x81bbbc?'':haHtml`
            <div class="panel-body entity-list">
              ${(this['_config']['entities']||[])[_0x143180(0x1c4)]((_0x3b3cff,_0x39b859)=>this[_0x143180(0x16f)](_0x3b3cff,_0x39b859))}
              <button class="add-btn" @click=${this[_0x143180(0x2bf)]}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add Entity
              </button>
            </div>
          `}
        </div>
      </div>

      ${this['_renderSensorHelpDialog']()}
    `;}[_0xdd4cd0(0x16f)](_0x33a63e,_0x48f649){const _0x205bcc=_0xdd4cd0,_0x3c53f9=_0x205bcc(0x221)+_0x48f649,_0x3c3cfc=!!this[_0x205bcc(0x2b0)][_0x205bcc(0x197)+_0x48f649],_0x978b99=_0x33a63e[_0x205bcc(0x170)]?.[_0x205bcc(0x233)]()?_0x33a63e[_0x205bcc(0x170)]:this[_0x205bcc(0x2b6)]?.[_0x205bcc(0x17a)]?.[_0x33a63e[_0x205bcc(0x1cf)]]?.['attributes']?.[_0x205bcc(0x293)]||_0x205bcc(0x2bd)+(_0x48f649+0x1),_0x11f8ce=this['_dragOverIndex']===_0x48f649,_0x4d8355=this[_0x205bcc(0x232)][_0x48f649]||_0x205bcc(0x1b7);return haHtml`
      <div
        class="ec ${_0x3c3cfc?_0x205bcc(0x20a):''} ${_0x11f8ce?_0x205bcc(0x24f):''}"
        data-entity-index="${_0x48f649}"
        @dragover=${_0x14efe8=>this['_onDragOver'](_0x48f649,_0x14efe8)}
        @drop=${_0x1f579f=>this['_onDrop'](_0x48f649,_0x1f579f)}
        @dragleave=${_0x59845a=>this[_0x205bcc(0x26a)](_0x48f649,_0x59845a)}
      >
        <div class="eh" @click=${()=>this['_toggleEntityExpand'](_0x48f649)}>
          <div class="ed"
            title="Drag to reorder"
            draggable="true"
            @dragstart=${_0x29aa91=>this[_0x205bcc(0x1e0)](_0x48f649,_0x29aa91)}
            @click=${_0x1806d1=>_0x1806d1[_0x205bcc(0x2a1)]()}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>
          </div>
          <div class="ei">
            <span class="en">${_0x978b99}</span>
          </div>
          <div class="ea">
            <button class="etb" @click=${_0x30afe2=>{const _0x4ed48c=_0x205bcc;_0x30afe2[_0x4ed48c(0x2a1)](),this[_0x4ed48c(0x23f)](_0x48f649);}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <button class="edup" title="Duplicate" @click=${_0x40457e=>{const _0x5adb16=_0x205bcc;_0x40457e[_0x5adb16(0x2a1)](),this[_0x5adb16(0x26b)](_0x48f649);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
            <button class="edb" @click=${_0x57947b=>{const _0x4c696c=_0x205bcc;_0x57947b[_0x4c696c(0x2a1)](),this[_0x4c696c(0x222)](_0x48f649);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>

        ${_0x3c3cfc?haHtml`
          <div class="eb">
            <div class="tabs">
              <button class="tb ${_0x4d8355===_0x205bcc(0x1b7)?_0x205bcc(0x17e):''}" @click=${()=>{const _0x5e6b10=_0x205bcc;this[_0x5e6b10(0x232)]={...this[_0x5e6b10(0x232)],[_0x48f649]:'general'};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                General
              </button>
              <button class="tb ${_0x4d8355===_0x205bcc(0x1a0)?_0x205bcc(0x17e):''}" @click=${()=>{const _0x551b51=_0x205bcc;this[_0x551b51(0x232)]={...this[_0x551b51(0x232)],[_0x48f649]:_0x551b51(0x1a0)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                Icons
              </button>
              <button class="tb ${_0x4d8355===_0x205bcc(0x239)?'active':''}" @click=${()=>{const _0x40a742=_0x205bcc;this[_0x40a742(0x232)]={...this[_0x40a742(0x232)],[_0x48f649]:_0x40a742(0x239)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                Colors
              </button>
              <button class="tb ${_0x4d8355==='labels'?'active':''}" @click=${()=>{const _0x4295d2=_0x205bcc;this[_0x4295d2(0x232)]={...this[_0x4295d2(0x232)],[_0x48f649]:'labels'};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                Labels
              </button>
            </div>

            <!-- Entity General Tab -->
            <div class="tc ${_0x4d8355===_0x205bcc(0x1b7)?_0x205bcc(0x17e):''}">
              <div class="fg">
                <div class="fgl">Entity Setup</div>
                <div class="grid grid-pair">
                  <div class="field">
                    <div class="field-label">Display Name ${this[_0x205bcc(0x219)](_0x205bcc(0x248))}</div>
                    <input
                      class="ed-input"
                      type="text"
                      .value="${_0x33a63e[_0x205bcc(0x170)]||''}"
                      .configValue="${_0x3c53f9}.name"
                      @change=${this['_valueChanged']}
                    />
                  </div>

                  <div class="field">
                    <div class="field-label">Button Position ${this[_0x205bcc(0x219)](_0x205bcc(0x1a6))}</div>
                    <div class="picker-wrap">
                      <ha-selector
                        .hass=${this['hass']}
                        .label=${'Position'}
                        .selector=${{'select':{'options':[{'value':_0x205bcc(0x2ae),'label':_0x205bcc(0x292)},{'value':'left','label':'Left'},{'value':'right','label':'Right'}],'mode':_0x205bcc(0x1b0)}}}
                        .value=${_0x33a63e[_0x205bcc(0x270)]||'global'}
                        .configValue="${_0x3c53f9}.button_position"
                        @value-changed=${this[_0x205bcc(0x287)]}
                      ></ha-selector>
                    </div>
                  </div>
                </div>
              </div>

              <div class="fg">
                <div class="fgl">Entities</div>
                <div class="grid grid-2">
                  ${this[_0x205bcc(0x23b)](_0x205bcc(0x1e9),_0x33a63e[_0x205bcc(0x1cf)]||'',_0x3c53f9+_0x205bcc(0x22a),[_0x205bcc(0x1cf),_0x205bcc(0x1ec),_0x205bcc(0x1ab),_0x205bcc(0x2a2),_0x205bcc(0x1bb),_0x205bcc(0x28e),'input_boolean',_0x205bcc(0x20f)],_0x205bcc(0x279))}
                  ${this['_renderEntityPicker'](_0x205bcc(0x24a),_0x33a63e[_0x205bcc(0x1c2)]||'',_0x3c53f9+_0x205bcc(0x2a6),['timer'],_0x205bcc(0x1c2))}
                </div>
                <div class="grid grid-2">
                  ${this[_0x205bcc(0x1f8)](_0x205bcc(0x19f),_0x33a63e[_0x205bcc(0x2a7)]||'',_0x3c53f9+'.sensor',_0x205bcc(0x2a7))}
                  <div class="field">
                    <div class="field-label">Automation Link ${this[_0x205bcc(0x219)]('If\x20enabled,\x20card\x20only\x20starts/stops\x20the\x20timer;\x20your\x20automation\x20controls\x20the\x20entity.\x20If\x20disabled,\x20card\x20turns\x20entity\x20on/off\x20directly.')}</div>
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${_0x33a63e[_0x205bcc(0x1ca)]!==![]}"
                            .configValue="${_0x3c53f9}.timer_and_entity_connected_via_automation"
                            @change=${this[_0x205bcc(0x287)]}
                          ></ha-switch>
                        </div>
                        <div class="sl">
                          <span class="sn">Timer ↔ Entity linked via automation</span>
                        </div>
                      </label>
                    </div>
                    ${_0x33a63e[_0x205bcc(0x1ca)]===![]?haHtml`<div class="inline-warn">
                          <ha-icon icon="mdi:alert-outline"></ha-icon>
                          <span>Direct control runs in your browser — the device won't switch off if no dashboard is open when the timer ends. For unattended use, keep this on and add a <code>timer.finished</code> automation (see the Help panel).</span>
                        </div>`:''}
                  </div>
                </div>
                <div class="grid grid-2">
                  ${this[_0x205bcc(0x23b)](_0x205bcc(0x297),_0x33a63e[_0x205bcc(0x247)]||'',_0x3c53f9+_0x205bcc(0x1f4),['sensor'],_0x205bcc(0x247))}
                </div>
                <div class="grid grid-2">
                  <div class="field field--duration">
                    <div class="field-label field-label--duration">Default duration override ${this[_0x205bcc(0x219)]('Optional.\x20If\x20set\x20(HH:MM:SS\x20or\x20seconds),\x20this\x20overrides\x20the\x20timer\x20helper’s\x20configured\x20duration\x20when\x20starting\x20from\x20this\x20card.\x20Leave\x20empty\x20to\x20use\x20the\x20helper\x20default.')}</div>
                    <input
                      class="ed-input"
                      type="text"
                      placeholder="e.g. 00:10:00"
                      .value="${_0x33a63e['duration']??''}"
                      .configValue="${_0x3c53f9}.duration"
                      @change=${this['_valueChanged']}
                    />
                  </div>
                  <div class="field field--editable-duration">
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${!!_0x33a63e[_0x205bcc(0x1ae)]}"
                            .configValue="${_0x3c53f9}.editable_duration"
                            @change=${this[_0x205bcc(0x287)]}
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
            <div class="tc ${_0x4d8355===_0x205bcc(0x239)?'active':''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Colors</div>
                  <button class="reset-btn" @click=${()=>this['_resetPath'](_0x3c53f9+_0x205bcc(0x242))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global colors for this entity. Unset values inherit from global settings.</div>
                ${this[_0x205bcc(0x251)](_0x33a63e[_0x205bcc(0x239)],_0x3c53f9+'.colors',this[_0x205bcc(0x1d7)]('colors'))}
              </div>
            </div>

            <!-- Entity Icons Tab -->
            <div class="tc ${_0x4d8355===_0x205bcc(0x1a0)?_0x205bcc(0x17e):''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Icons</div>
                  <button class="reset-btn" @click=${()=>this[_0x205bcc(0x272)](_0x3c53f9+_0x205bcc(0x2c5))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global icons for this entity. Unset values inherit from global settings.</div>
                ${this['_renderIconOptions'](_0x33a63e[_0x205bcc(0x1a0)],_0x3c53f9+'.icons',this[_0x205bcc(0x1d7)](_0x205bcc(0x1a0)))}
              </div>
            </div>

            <!-- Entity Labels Tab -->
            <div class="tc ${_0x4d8355==='labels'?_0x205bcc(0x17e):''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Labels</div>
                  <button class="reset-btn" @click=${()=>this[_0x205bcc(0x272)](_0x3c53f9+_0x205bcc(0x172))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global labels for this entity. Unset values inherit from global settings.</div>
                ${this['_renderLabelOptions'](_0x33a63e[_0x205bcc(0x1e2)],_0x3c53f9+_0x205bcc(0x172),this[_0x205bcc(0x1d7)](_0x205bcc(0x1e2)))}
              </div>
            </div>
          </div>
        `:''}
      </div>
    `;}static get[_0xdd4cd0(0x196)](){return haCss`
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
    `;}}customElements['define'](_0xdd4cd0(0x211),SwitchAndTimerBarCardEditor),window[_0xdd4cd0(0x22b)]=window[_0xdd4cd0(0x22b)]||[];!window[_0xdd4cd0(0x22b)][_0xdd4cd0(0x218)](_0x72b65f=>_0x72b65f['type']==='switch-and-timer-bar-card')&&window[_0xdd4cd0(0x22b)]['push']({'type':'switch-and-timer-bar-card','name':'Switch\x20&\x20Timer\x20Bar\x20Card','description':'Switch\x20&\x20Timer\x20Bar\x20Card','preview':!![]});

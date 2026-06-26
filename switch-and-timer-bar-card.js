const _0x10d42d=_0x3129;(function(_0x157ea9,_0x2488eb){const _0x12ee34=_0x3129,_0x432dda=_0x157ea9();while(!![]){try{const _0x2e489f=-parseInt(_0x12ee34(0x1dc))/0x1*(parseInt(_0x12ee34(0x1c3))/0x2)+parseInt(_0x12ee34(0x1f9))/0x3+parseInt(_0x12ee34(0x177))/0x4*(-parseInt(_0x12ee34(0x171))/0x5)+-parseInt(_0x12ee34(0x2e6))/0x6+-parseInt(_0x12ee34(0x23c))/0x7+-parseInt(_0x12ee34(0x222))/0x8+parseInt(_0x12ee34(0x2e2))/0x9*(parseInt(_0x12ee34(0x280))/0xa);if(_0x2e489f===_0x2488eb)break;else _0x432dda['push'](_0x432dda['shift']());}catch(_0xfb5dd5){_0x432dda['push'](_0x432dda['shift']());}}}(_0x520e,0xdf12f));let HaLitBase,haHtml,haCss;function _0x3129(_0x28aa00,_0x1eb339){_0x28aa00=_0x28aa00-0x164;const _0x520eb8=_0x520e();let _0x312946=_0x520eb8[_0x28aa00];return _0x312946;}{const base=window['LitElement']||(customElements[_0x10d42d(0x221)](_0x10d42d(0x1a3))?Object[_0x10d42d(0x209)](customElements['get'](_0x10d42d(0x1a3))):null);if(!base||!base[_0x10d42d(0x2bc)]?.['html']||!base[_0x10d42d(0x2bc)]?.[_0x10d42d(0x233)]){const msg=_0x10d42d(0x2d8);console[_0x10d42d(0x21c)](msg),HaLitBase=class{},haHtml=()=>'',haCss=()=>'';}else HaLitBase=base,haHtml=base[_0x10d42d(0x2bc)][_0x10d42d(0x1f7)],haCss=base[_0x10d42d(0x2bc)][_0x10d42d(0x233)];}class SwitchAndTimerBarCard extends HaLitBase{static get[_0x10d42d(0x2a2)](){return{'hass':{},'_config':{},'_timer':{},'_durationEditor':{},'_startConfirm':{}};}static get[_0x10d42d(0x296)](){const _0x1b2a2a=_0x10d42d;return{'button_position':'left','colors':{'on':_0x1b2a2a(0x1d1),'ready':'#4CAF50','unavailable':'#F44336','button_start':'#4CAF50','button_stop':_0x1b2a2a(0x1d1),'icon':_0x1b2a2a(0x19f),'progress_fill':_0x1b2a2a(0x1d1)},'icons':{'start':_0x1b2a2a(0x1fd),'stop':_0x1b2a2a(0x28a)},'labels':{'status_on':_0x1b2a2a(0x1fe),'status_ready':_0x1b2a2a(0x1ea),'status_unavailable':_0x1b2a2a(0x2a3),'time_format_zero':_0x1b2a2a(0x218),'time_unit_hours':'h','time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':_0x1b2a2a(0x2c7),'edit_duration_hours':'Hours','edit_duration_minutes':_0x1b2a2a(0x1ec),'edit_duration_seconds':_0x1b2a2a(0x2b7),'edit_duration_apply':_0x1b2a2a(0x1bc),'edit_duration_reset':'Reset\x20to\x20default','edit_duration_cancel':_0x1b2a2a(0x20f),'edit_duration_tooltip':_0x1b2a2a(0x1c0),'start_confirm_body':_0x1b2a2a(0x2b5),'start_confirm_ok':_0x1b2a2a(0x178),'start_confirm_cancel':'Cancel'}};}static async[_0x10d42d(0x27c)](){const _0x5e56ab=_0x10d42d;return document[_0x5e56ab(0x2df)]('switch-and-timer-bar-card-editor');}static['getStubConfig'](){const _0x12a9e1=_0x10d42d;return{'title':_0x12a9e1(0x195),'entities':[{'name':_0x12a9e1(0x21b),'switch':_0x12a9e1(0x2a4),'timer':'timer.example_timer','timer_and_entity_connected_via_automation':!![],'last_run_sensor':{'entity':_0x12a9e1(0x17c),'name':_0x12a9e1(0x2e8),'icon':_0x12a9e1(0x244),'position':_0x12a9e1(0x26d)}}]};}static get['styles'](){return haCss`
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
        flex-direction: column;
        font-size: 0.85em;
        gap: 0.2rem;
        margin: 0.5rem 0 0 0;
      }
      .ti-row {
        align-items: center;
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .ti-cell { min-width: 0; }
      .ti-cell.ti-left { justify-self: start; text-align: left; }
      .ti-cell.ti-center { justify-self: center; text-align: center; }
      .ti-cell.ti-right { justify-self: end; text-align: right; }
      .sensor-chip {
        align-items: center;
        display: inline-flex;
        gap: 0.3em;
        line-height: 1;
        max-width: 100%;
        min-width: 0;
      }
      .sensor-chip ha-icon {
        --mdc-icon-size: 1.05em;
        align-self: center;
        display: inline-flex;
        flex: 0 0 auto;
        height: 1.05em;
        line-height: 0;
        width: 1.05em;
      }
      .sensor-chip .sensor-name,
      .sensor-chip .sensor-val {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
    `;}constructor(){const _0x4f5e05=_0x10d42d;super(),this[_0x4f5e05(0x200)]=null,this[_0x4f5e05(0x167)]=0x3e8,this['__needsTick']=![],this['__lastOffAt']=new Map(),this[_0x4f5e05(0x274)]=0x9c4,this[_0x4f5e05(0x1d9)]=new Set(),this['__durationOverrides']=new Map(),this[_0x4f5e05(0x196)]=_0x4f5e05(0x1a0),this[_0x4f5e05(0x232)](),this[_0x4f5e05(0x24f)]=new Map(),this[_0x4f5e05(0x214)]=_0x4f5e05(0x253),this[_0x4f5e05(0x1cf)](),this['__reconciledOnce']=![],this[_0x4f5e05(0x189)]=null,this[_0x4f5e05(0x1b1)]=![],this['__onConfirmKeyDown']=_0x15ade9=>{const _0x1d9ad4=_0x4f5e05;if(_0x15ade9[_0x1d9ad4(0x26c)]===_0x1d9ad4(0x2aa)&&this['_startConfirm'])this[_0x1d9ad4(0x2de)]();},this[_0x4f5e05(0x1a8)]=null;}[_0x10d42d(0x232)](){const _0x325d3d=_0x10d42d;try{const _0x46d47d=window[_0x325d3d(0x2b6)]?.[_0x325d3d(0x18a)](this[_0x325d3d(0x196)]);if(!_0x46d47d)return;const _0x24485c=JSON['parse'](_0x46d47d);_0x24485c&&typeof _0x24485c===_0x325d3d(0x240)&&(this[_0x325d3d(0x238)]=new Map(Object[_0x325d3d(0x27a)](_0x24485c)));}catch(_0x54af7c){}}['_saveDurationOverrides'](){const _0x3da010=_0x10d42d;try{const _0x1e34c7=Object[_0x3da010(0x19c)](this[_0x3da010(0x238)]);window[_0x3da010(0x2b6)]?.[_0x3da010(0x203)](this[_0x3da010(0x196)],JSON[_0x3da010(0x2ab)](_0x1e34c7));}catch(_0x14bf58){}}[_0x10d42d(0x1cf)](){const _0xcc6dc1=_0x10d42d;try{const _0x44617d=window[_0xcc6dc1(0x2b6)]?.[_0xcc6dc1(0x18a)](this[_0xcc6dc1(0x214)]);if(!_0x44617d)return;const _0x38f7b7=JSON['parse'](_0x44617d);_0x38f7b7&&typeof _0x38f7b7===_0xcc6dc1(0x240)&&(this[_0xcc6dc1(0x24f)]=new Map(Object['entries'](_0x38f7b7)));}catch(_0x157905){}}[_0x10d42d(0x2b3)](){const _0x36bbe2=_0x10d42d;try{const _0x2b32ad=Object[_0x36bbe2(0x19c)](this[_0x36bbe2(0x24f)]);window['localStorage']?.['setItem'](this['__armedStorageKey'],JSON[_0x36bbe2(0x2ab)](_0x2b32ad));}catch(_0x3bae02){}}[_0x10d42d(0x277)](_0x441e4c,_0x553753,_0x275ab5){const _0x522751=_0x10d42d;if(!_0x441e4c||!_0x553753)return;const _0x2110c8=Number[_0x522751(0x20d)](_0x275ab5)?_0x275ab5:null,_0x398cd9=this[_0x522751(0x24f)][_0x522751(0x221)](_0x441e4c);if(_0x398cd9&&_0x398cd9['switch']===_0x553753&&_0x398cd9[_0x522751(0x208)]===_0x2110c8)return;this[_0x522751(0x24f)]['set'](_0x441e4c,{'switch':_0x553753,'finishesAt':_0x2110c8}),this['_saveArmedTimers']();}[_0x10d42d(0x1a9)](_0x592d7a){const _0x3ef733=_0x10d42d;if(!_0x592d7a||!this[_0x3ef733(0x24f)][_0x3ef733(0x1b5)](_0x592d7a))return;this[_0x3ef733(0x24f)][_0x3ef733(0x1d5)](_0x592d7a),this[_0x3ef733(0x2b3)]();}['_maybeReconcile'](){const _0x129001=_0x10d42d;if(this[_0x129001(0x1fa)])return;if(!this['hass']||!this[_0x129001(0x179)]?.[_0x129001(0x19b)])return;this[_0x129001(0x1fa)]=!![],this[_0x129001(0x2a6)]();}[_0x10d42d(0x2a6)](){const _0x5b898e=_0x10d42d;if(!this[_0x5b898e(0x202)]||!this[_0x5b898e(0x24f)][_0x5b898e(0x21e)])return;const _0x74c1b5=this[_0x5b898e(0x202)]['states']||{},_0xd71fa6=new Map();for(const _0x5e729c of this['_config']?.['entities']||[]){if(_0x5e729c[_0x5b898e(0x1c8)])continue;if(_0x5e729c[_0x5b898e(0x1c6)]&&_0x5e729c['switch'])_0xd71fa6['set'](_0x5e729c[_0x5b898e(0x1c6)],_0x5e729c);}let _0x4047da=![];for(const [_0x2c821d,_0x2835c3]of[...this['__armedTimers'][_0x5b898e(0x27a)]()]){const _0x58471a=_0xd71fa6['get'](_0x2c821d),_0x2aa816=_0x74c1b5[_0x2c821d];if(!_0x58471a||!_0x2aa816){this[_0x5b898e(0x24f)]['delete'](_0x2c821d),_0x4047da=!![];continue;}const _0x4facd6=_0x2aa816[_0x5b898e(0x1d0)];if(_0x4facd6===_0x5b898e(0x191)||_0x4facd6===_0x5b898e(0x2d7)){if(_0x4facd6===_0x5b898e(0x191)){const _0x2854b5=Date[_0x5b898e(0x23a)](_0x2aa816[_0x5b898e(0x25a)]?.['finishes_at']||''),_0x4976a7=Number[_0x5b898e(0x20d)](_0x2854b5)?_0x2854b5:null;_0x2835c3[_0x5b898e(0x208)]!==_0x4976a7&&(this[_0x5b898e(0x24f)]['set'](_0x2c821d,{'switch':_0x58471a['switch'],'finishesAt':_0x4976a7}),_0x4047da=!![]);}continue;}const _0x41077b=_0x58471a[_0x5b898e(0x213)],_0x55d5b2=_0x74c1b5[_0x41077b];if(_0x55d5b2&&this[_0x5b898e(0x273)](_0x55d5b2)){let _0x2fa45c=![];this[_0x5b898e(0x1d9)][_0x5b898e(0x1b5)](_0x41077b)&&(_0x2fa45c=(this['_config'][_0x5b898e(0x19b)]||[])[_0x5b898e(0x1ed)](_0x5cdd3e=>_0x5cdd3e['switch']===_0x41077b&&_0x5cdd3e[_0x5b898e(0x1c6)]&&_0x5cdd3e['timer']!==_0x2c821d&&_0x74c1b5[_0x5cdd3e[_0x5b898e(0x1c6)]]?.['state']===_0x5b898e(0x191)));if(!_0x2fa45c){const _0x4643e5=Date[_0x5b898e(0x29e)](),_0x1a3f87=this[_0x5b898e(0x224)][_0x5b898e(0x221)](_0x41077b)||0x0;_0x4643e5-_0x1a3f87>=this['__offDebounceMs']&&(this[_0x5b898e(0x224)][_0x5b898e(0x245)](_0x41077b,_0x4643e5),this[_0x5b898e(0x1dd)](_0x41077b,_0x5b898e(0x1ac)));}}this['__armedTimers'][_0x5b898e(0x1d5)](_0x2c821d),_0x4047da=!![];}if(_0x4047da)this['_saveArmedTimers']();}[_0x10d42d(0x205)](_0x2f9174){const _0x579ab4=_0x10d42d;if(!_0x2f9174)throw new Error('Invalid\x20configuration.');const _0xeaa063=SwitchAndTimerBarCard['DEFAULTS'],_0x66324d=JSON[_0x579ab4(0x23a)](JSON[_0x579ab4(0x2ab)](_0x2f9174));(!_0x66324d['entities']||!Array['isArray'](_0x66324d[_0x579ab4(0x19b)]))&&(console[_0x579ab4(0x254)](_0x579ab4(0x1f5)),_0x66324d[_0x579ab4(0x19b)]=[]);_0x66324d[_0x579ab4(0x19b)][_0x579ab4(0x18e)](_0x3ba5e1=>{const _0xb9c62c=_0x579ab4;_0x3ba5e1[_0xb9c62c(0x1c8)]===undefined&&(_0x3ba5e1[_0xb9c62c(0x1c8)]=!![]);}),this['_config']={..._0xeaa063,..._0x66324d,'colors':{..._0xeaa063['colors'],..._0x66324d[_0x579ab4(0x2ec)]||{}},'icons':{..._0xeaa063[_0x579ab4(0x259)],..._0x66324d[_0x579ab4(0x259)]||{}},'labels':{..._0xeaa063['labels'],..._0x66324d[_0x579ab4(0x27f)]||{}}};const _0xd1aa1a=new Map();for(const _0x417c39 of this[_0x579ab4(0x179)][_0x579ab4(0x19b)]){if(_0x417c39[_0x579ab4(0x213)])_0xd1aa1a['set'](_0x417c39[_0x579ab4(0x213)],(_0xd1aa1a[_0x579ab4(0x221)](_0x417c39[_0x579ab4(0x213)])||0x0)+0x1);}this[_0x579ab4(0x1d9)]=new Set(Array[_0x579ab4(0x1b7)](_0xd1aa1a[_0x579ab4(0x27a)]())[_0x579ab4(0x241)](([,_0x36918])=>_0x36918>0x1)[_0x579ab4(0x257)](([_0x246679])=>_0x246679)),this['__recomputeTickNeedAndApply']();}[_0x10d42d(0x207)](){const _0x1879d4=_0x10d42d;super[_0x1879d4(0x207)]?.(),this['__recomputeTickNeedAndApply'](),this[_0x1879d4(0x1e0)](),window[_0x1879d4(0x183)](_0x1879d4(0x20a),this[_0x1879d4(0x231)]);}[_0x10d42d(0x24b)](){const _0x251088=_0x10d42d;super[_0x251088(0x24b)]?.(),this[_0x251088(0x180)](),window[_0x251088(0x206)]('keydown',this[_0x251088(0x231)]),this['__reconciledOnce']=![];}['updated'](_0x50b5eb){const _0x268ea9=_0x10d42d;if(_0x50b5eb[_0x268ea9(0x1b5)](_0x268ea9(0x202))){this['__recomputeTickNeedAndApply'](),this[_0x268ea9(0x1e0)]();if(!this[_0x268ea9(0x179)]?.[_0x268ea9(0x19b)])return;const _0xdf55c6=_0x50b5eb['get'](_0x268ea9(0x202));for(const _0x43313d of this[_0x268ea9(0x179)][_0x268ea9(0x19b)]){if(_0x43313d[_0x268ea9(0x1c8)])continue;const _0x47756c=_0x43313d[_0x268ea9(0x1c6)],_0x5da5be=_0x43313d[_0x268ea9(0x213)];if(!_0x47756c||!_0x5da5be)continue;const _0x137817=this['hass']?.[_0x268ea9(0x1e7)]?.[_0x47756c],_0x15cc73=this[_0x268ea9(0x202)]?.[_0x268ea9(0x1e7)]?.[_0x5da5be];if(!_0x137817)continue;if(_0x137817[_0x268ea9(0x1d0)]===_0x268ea9(0x191)){const _0x20207d=Date[_0x268ea9(0x23a)](_0x137817['attributes']?.[_0x268ea9(0x1cc)]||'');this[_0x268ea9(0x277)](_0x47756c,_0x5da5be,_0x20207d);}const _0x16d5d0=_0xdf55c6?.[_0x268ea9(0x1e7)]?.[_0x47756c];if(!_0x16d5d0)continue;if(_0x16d5d0[_0x268ea9(0x1d0)]===_0x268ea9(0x191)&&_0x137817[_0x268ea9(0x1d0)]==='idle'){this[_0x268ea9(0x1a9)](_0x47756c);if(!_0x15cc73)continue;if(!this['_isActive'](_0x15cc73))continue;if(this[_0x268ea9(0x1d9)][_0x268ea9(0x1b5)](_0x5da5be)){const _0x52b77e=this['_config'][_0x268ea9(0x19b)]['some'](_0x21c0a8=>_0x21c0a8[_0x268ea9(0x213)]===_0x5da5be&&_0x21c0a8[_0x268ea9(0x1c6)]&&_0x21c0a8[_0x268ea9(0x1c6)]!==_0x47756c&&this[_0x268ea9(0x202)][_0x268ea9(0x1e7)]?.[_0x21c0a8[_0x268ea9(0x1c6)]]?.[_0x268ea9(0x1d0)]==='active');if(_0x52b77e)continue;}const _0x38d548=Date[_0x268ea9(0x29e)](),_0x367efb=this[_0x268ea9(0x224)][_0x268ea9(0x221)](_0x5da5be)||0x0;if(_0x38d548-_0x367efb<this[_0x268ea9(0x274)])continue;this[_0x268ea9(0x224)]['set'](_0x5da5be,_0x38d548),this[_0x268ea9(0x1dd)](_0x5da5be,_0x268ea9(0x1ac));}}}}[_0x10d42d(0x2e0)](){const _0x505637=_0x10d42d;if(this[_0x505637(0x200)])return;this[_0x505637(0x200)]=setInterval(()=>{const _0x2ad67f=_0x505637;this['_timer']=Date[_0x2ad67f(0x29e)]();},this[_0x505637(0x167)]);}[_0x10d42d(0x180)](){const _0x170669=_0x10d42d;if(!this[_0x170669(0x200)])return;clearInterval(this['__interval']),this[_0x170669(0x200)]=null;}[_0x10d42d(0x1e5)](){const _0x5c9900=_0x10d42d;if(!this[_0x5c9900(0x202)]||!this['_config']?.[_0x5c9900(0x19b)]?.[_0x5c9900(0x246)]){this[_0x5c9900(0x289)]=![],this[_0x5c9900(0x180)]();return;}const _0x9cc19a=this[_0x5c9900(0x202)]['states']||{};let _0xd15898=![];for(const _0x28b52a of this[_0x5c9900(0x179)][_0x5c9900(0x19b)]){const _0x8a5cbc=_0x28b52a[_0x5c9900(0x213)];if(!_0x8a5cbc)continue;const _0x53dab1=_0x28b52a[_0x5c9900(0x1c6)],_0x851790=_0x53dab1?_0x9cc19a[_0x53dab1]:null;if(this['__sharedSwitches'][_0x5c9900(0x1b5)](_0x8a5cbc)){if(_0x851790&&_0x851790[_0x5c9900(0x1d0)]===_0x5c9900(0x191)){_0xd15898=!![];break;}continue;}const _0x492a23=_0x9cc19a[_0x8a5cbc];if(_0x492a23&&this['_isActive'](_0x492a23)){_0xd15898=!![];break;}if(_0x851790&&_0x851790[_0x5c9900(0x1d0)]===_0x5c9900(0x191)){_0xd15898=!![];break;}}this[_0x5c9900(0x289)]=_0xd15898;if(_0xd15898)this[_0x5c9900(0x2e0)]();else this[_0x5c9900(0x180)]();}[_0x10d42d(0x2cb)](_0x15b4e9,_0x39d848){const _0x284cc9=_0x10d42d,_0x5dd38e=_0x15b4e9?.['timer'];if(_0x5dd38e&&this[_0x284cc9(0x238)]['has'](_0x5dd38e)){const _0x51f4ad=Number(this[_0x284cc9(0x238)][_0x284cc9(0x221)](_0x5dd38e));if(Number[_0x284cc9(0x20d)](_0x51f4ad)&&_0x51f4ad>=0x0)return _0x51f4ad;}if(_0x15b4e9&&_0x15b4e9[_0x284cc9(0x19a)]!==undefined&&_0x15b4e9[_0x284cc9(0x19a)]!==null&&_0x15b4e9['duration']!==''){const _0x5a5454=this['parseDuration'](_0x15b4e9[_0x284cc9(0x19a)]);if(_0x5a5454>0x0)return _0x5a5454;}return this[_0x284cc9(0x28f)](_0x39d848?.[_0x284cc9(0x25a)]?.['duration']);}[_0x10d42d(0x174)](_0x29b422){const _0x348b2a=_0x10d42d,_0x13afef=_0x29b422?.[_0x348b2a(0x1c6)];if(_0x13afef&&this['__durationOverrides'][_0x348b2a(0x1b5)](_0x13afef))return!![];if(_0x29b422?.[_0x348b2a(0x19a)]!==undefined&&_0x29b422[_0x348b2a(0x19a)]!==null&&_0x29b422[_0x348b2a(0x19a)]!=='')return!![];return![];}[_0x10d42d(0x1f8)](_0x54334a){const _0x16bba6=_0x10d42d;return!!(_0x54334a&&this[_0x16bba6(0x238)]['has'](_0x54334a));}[_0x10d42d(0x27b)](_0x3b733a){const _0x318726=_0x10d42d,_0x3766cd=Math[_0x318726(0x22f)](0x0,Math['floor'](Number(_0x3b733a)||0x0)),_0x5ecce7=Math[_0x318726(0x22c)](_0x3766cd/0xe10),_0x27bd63=Math[_0x318726(0x22c)](_0x3766cd%0xe10/0x3c),_0x110f36=_0x3766cd%0x3c,_0x3045bf=_0x373c98=>String(_0x373c98)[_0x318726(0x1e9)](0x2,'0');return _0x3045bf(_0x5ecce7)+':'+_0x3045bf(_0x27bd63)+':'+_0x3045bf(_0x110f36);}[_0x10d42d(0x2c1)](_0x921476,_0x61feb6,_0xc9877c){const _0xbb7a52=_0x10d42d;if(!_0x61feb6)return;const _0x18374f=Math['max'](0x0,Math[_0xbb7a52(0x22c)](Number(_0xc9877c)||0x0));this[_0xbb7a52(0x1a8)]={'open':!![],'timerEntity':_0x61feb6,'h':Math[_0xbb7a52(0x22c)](_0x18374f/0xe10),'m':Math[_0xbb7a52(0x22c)](_0x18374f%0xe10/0x3c),'s':_0x18374f%0x3c,'hasOverride':this[_0xbb7a52(0x1f8)](_0x61feb6)};}[_0x10d42d(0x278)](){const _0x59ece8=_0x10d42d;this[_0x59ece8(0x1a8)]=null;}[_0x10d42d(0x2bb)](_0x4ca55a,_0x33a66a){const _0x3230da=_0x10d42d;if(!this[_0x3230da(0x1a8)])return;let _0xc6ca3=parseInt(_0x33a66a,0xa);if(!Number['isFinite'](_0xc6ca3)||_0xc6ca3<0x0)_0xc6ca3=0x0;if(_0x4ca55a==='m'||_0x4ca55a==='s')_0xc6ca3=Math['min'](_0xc6ca3,0x3b);if(_0x4ca55a==='h')_0xc6ca3=Math['min'](_0xc6ca3,0x63);this['_durationEditor']={...this['_durationEditor'],[_0x4ca55a]:_0xc6ca3};}[_0x10d42d(0x1e2)](){const _0x44c922=_0x10d42d;if(!this['_durationEditor'])return;const {timerEntity:_0x579f6d,h:_0x53a717,m:_0x380335,s:_0x3bd3cd}=this['_durationEditor'],_0x1471f9=_0x53a717*0xe10+_0x380335*0x3c+_0x3bd3cd;_0x579f6d&&_0x1471f9>0x0&&(this[_0x44c922(0x238)]['set'](_0x579f6d,_0x1471f9),this[_0x44c922(0x2dc)]()),this[_0x44c922(0x1a8)]=null,this[_0x44c922(0x1e5)]();}['_resetDurationOverride'](){const _0x4e88fb=_0x10d42d;if(!this[_0x4e88fb(0x1a8)])return;const {timerEntity:_0x1a3fc5}=this[_0x4e88fb(0x1a8)];_0x1a3fc5&&this[_0x4e88fb(0x238)]['has'](_0x1a3fc5)&&(this[_0x4e88fb(0x238)][_0x4e88fb(0x1d5)](_0x1a3fc5),this[_0x4e88fb(0x2dc)]()),this['_durationEditor']=null;}[_0x10d42d(0x1dd)](_0x40a54c,_0x3b8191){const _0x12db1a=_0x10d42d;if(!this[_0x12db1a(0x202)]||!_0x40a54c)return;const _0x41fe6c=_0x40a54c[_0x12db1a(0x2c8)]('.')[0x0];let _0x31bb5a;switch(_0x41fe6c){case _0x12db1a(0x1b0):_0x31bb5a=_0x3b8191==='on'?_0x12db1a(0x23d):_0x12db1a(0x256);break;case _0x12db1a(0x216):_0x31bb5a=_0x3b8191==='on'?_0x12db1a(0x248):_0x12db1a(0x185);break;case _0x12db1a(0x271):_0x31bb5a=_0x3b8191==='on'?_0x12db1a(0x271):'unlock';break;default:_0x31bb5a=_0x3b8191==='on'?_0x12db1a(0x181):'turn_off';break;}this[_0x12db1a(0x202)][_0x12db1a(0x16b)](_0x41fe6c,_0x31bb5a,{'entity_id':_0x40a54c});}[_0x10d42d(0x273)](_0x230ddd){const _0x2dc6ac=_0x10d42d;if(!_0x230ddd)return![];const _0x4be4ea=_0x230ddd[_0x2dc6ac(0x265)]['split']('.')[0x0],_0x5735e2=_0x230ddd[_0x2dc6ac(0x1d0)];switch(_0x4be4ea){case _0x2dc6ac(0x1b0):return _0x5735e2===_0x2dc6ac(0x18f);case _0x2dc6ac(0x216):return _0x5735e2===_0x2dc6ac(0x25f)||_0x5735e2===_0x2dc6ac(0x166);case _0x2dc6ac(0x271):return _0x5735e2===_0x2dc6ac(0x272);case _0x2dc6ac(0x2ed):return['playing',_0x2dc6ac(0x1ba),'on'][_0x2dc6ac(0x1d6)](_0x5735e2);default:return _0x5735e2==='on';}}[_0x10d42d(0x18d)](){const _0x3e7904=_0x10d42d;if(!HaLitBase||!haHtml)return'';if(!this[_0x3e7904(0x202)]||!this['_config'])return haHtml``;const _0x453b8a=Date['now']();return haHtml`
      <ha-card>
        ${this[_0x3e7904(0x179)][_0x3e7904(0x1ff)]?haHtml`<div class="card-header">${this[_0x3e7904(0x179)][_0x3e7904(0x1ff)]}</div>`:''}
        <div class="container">
          ${this[_0x3e7904(0x179)]['entities']&&this['_config']['entities'][_0x3e7904(0x257)](_0x19c950=>this[_0x3e7904(0x176)](_0x19c950,_0x453b8a))}
        </div>
      </ha-card>
      ${this[_0x3e7904(0x26f)]()}
      ${this['_renderStartConfirmDialog']()}
    `;}['_renderStartConfirmDialog'](){const _0x2f2722=_0x10d42d;if(!this[_0x2f2722(0x189)])return'';const _0x1280ba=this['_config']?.[_0x2f2722(0x27f)]||{};return haHtml`
      <div class="stbc-modal" @click=${()=>this[_0x2f2722(0x2de)]()}>
        <div class="stbc-modal-card" @click=${_0x374a12=>_0x374a12['stopPropagation']()}>
          <div class="confirm-callout">
            <ha-icon icon="mdi:alert-outline"></ha-icon>
            <span>${_0x1280ba[_0x2f2722(0x190)]||'This\x20timer\x20switches\x20the\x20device\x20off\x20via\x20your\x20browser.\x20If\x20no\x20dashboard\x20tab\x20is\x20open\x20on\x20your\x20browser\x20or\x20your\x20HA\x20app\x20is\x20closed\x20when\x20the\x20timer\x20ends,\x20the\x20device\x20won\x27t\x20turn\x20off.\x20For\x20unattended\x20use,\x20enable\x20“Automation\x20Link”\x20for\x20this\x20entity\x20and\x20let\x20a\x20Home\x20Assistant\x20automation\x20handle\x20the\x20switch-off.'}</span>
          </div>
          <label class="confirm-dontshow">
            <input
              type="checkbox"
              .checked=${!!this['__dontShowStartChecked']}
              @change=${_0x5ceb56=>{const _0x45e427=_0x2f2722;this[_0x45e427(0x1b1)]=_0x5ceb56[_0x45e427(0x1f0)]['checked'];}}
            />
            <span>${_0x1280ba[_0x2f2722(0x19e)]||'Don’t\x20show\x20again\x20for\x20this\x20card'}</span>
          </label>
          <div class="duration-actions">
            <button
              class="dlg-btn dlg-btn-text"
              @click=${()=>this[_0x2f2722(0x2de)]()}
            >${_0x1280ba[_0x2f2722(0x186)]||'Cancel'}</button>
            <button
              class="dlg-btn dlg-btn-primary"
              @click=${()=>this[_0x2f2722(0x2a8)]()}
            >${_0x1280ba[_0x2f2722(0x17d)]||_0x2f2722(0x178)}</button>
          </div>
        </div>
      </div>
    `;}[_0x10d42d(0x26f)](){const _0x7b731a=_0x10d42d;if(!this[_0x7b731a(0x1a8)]||!this[_0x7b731a(0x1a8)][_0x7b731a(0x25f)])return'';const _0x14f951=this[_0x7b731a(0x179)]?.['labels']||{},_0x5a975f=this[_0x7b731a(0x1a8)];return haHtml`
      <ha-dialog
        open
        hideActions
        heading="${_0x14f951[_0x7b731a(0x2ea)]||'Set\x20duration'}"
        @closed=${()=>this[_0x7b731a(0x278)]()}
      >
        <div class="duration-dialog-body">
          <div class="duration-fields">
            <label class="duration-field">
              <span class="duration-field-label">${_0x14f951[_0x7b731a(0x1da)]||_0x7b731a(0x262)}</span>
              <input
                type="number"
                min="0"
                max="99"
                inputmode="numeric"
                .value=${String(_0x5a975f['h'])}
                @input=${_0x110dfc=>this['_onDurationFieldChange']('h',_0x110dfc[_0x7b731a(0x1f0)][_0x7b731a(0x2e9)])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0x14f951[_0x7b731a(0x1bb)]||_0x7b731a(0x1ec)}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x5a975f['m'])}
                @input=${_0x27219f=>this['_onDurationFieldChange']('m',_0x27219f[_0x7b731a(0x1f0)][_0x7b731a(0x2e9)])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0x14f951['edit_duration_seconds']||_0x7b731a(0x2b7)}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x5a975f['s'])}
                @input=${_0x5d06e2=>this[_0x7b731a(0x2bb)]('s',_0x5d06e2[_0x7b731a(0x1f0)][_0x7b731a(0x2e9)])}
              />
            </label>
          </div>
          <div class="duration-actions">
            <button
              class="dlg-btn dlg-btn-text"
              @click=${()=>this['_closeDurationEditor']()}
            >${_0x14f951[_0x7b731a(0x27e)]||_0x7b731a(0x20f)}</button>
            ${_0x5a975f['hasOverride']?haHtml`<button
                  class="dlg-btn dlg-btn-text dlg-btn-reset"
                  @click=${()=>this[_0x7b731a(0x2d1)]()}
                >${_0x14f951[_0x7b731a(0x2db)]||_0x7b731a(0x288)}</button>`:''}
            <button
              class="dlg-btn dlg-btn-primary"
              @click=${()=>this[_0x7b731a(0x1e2)]()}
            >${_0x14f951[_0x7b731a(0x252)]||_0x7b731a(0x1bc)}</button>
          </div>
        </div>
      </ha-dialog>
    `;}[_0x10d42d(0x176)](_0x145358,_0x28f1bd){const _0x4bdfa5=_0x10d42d,_0x2a8117=_0x145358['switch'],_0x133811=_0x145358[_0x4bdfa5(0x1c6)],_0x3bbcf7=_0x145358[_0x4bdfa5(0x243)],_0x2c8080=_0x145358[_0x4bdfa5(0x282)];if(!_0x2a8117)return haHtml`<div class="warning">Entity 'switch' is not defined.</div>`;const _0xd64d11=this[_0x4bdfa5(0x202)][_0x4bdfa5(0x1e7)]||{},_0x16b748=_0xd64d11[_0x2a8117],_0x50b8ec=_0x133811?_0xd64d11[_0x133811]:undefined,_0x77eff3=_0x3bbcf7?_0xd64d11[_0x3bbcf7]:undefined;let _0x4a42c5;if(typeof _0x2c8080===_0x4bdfa5(0x2a5)&&_0xd64d11[_0x2c8080])_0x4a42c5=_0xd64d11[_0x2c8080];else _0x2c8080!==undefined&&_0x2c8080!==null&&_0x2c8080!==''&&Number[_0x4bdfa5(0x20d)](Number(_0x2c8080))?_0x4a42c5={'state':String(Number(_0x2c8080)),'attributes':{'unit_of_measurement':'%'}}:_0x4a42c5=undefined;if(!_0x16b748)return haHtml`<div class="warning">Entity not found: ${_0x2a8117}</div>`;const _0x548723=this[_0x4bdfa5(0x273)](_0x16b748),_0x3c387a=[_0x4bdfa5(0x25e),'unknown'][_0x4bdfa5(0x1d6)](_0x16b748[_0x4bdfa5(0x1d0)]);let _0x4c6da5=_0x145358[_0x4bdfa5(0x24d)]||this[_0x4bdfa5(0x179)]['button_position']||_0x4bdfa5(0x26d);if(_0x4c6da5!==_0x4bdfa5(0x2d9))_0x4c6da5=_0x4bdfa5(0x26d);const _0x3c2cb6=this['__sharedSwitches'][_0x4bdfa5(0x1b5)](_0x2a8117),_0x217862=_0x3c2cb6&&_0x50b8ec?_0x50b8ec[_0x4bdfa5(0x1d0)]==='active':_0x548723,_0x2443c0={...this[_0x4bdfa5(0x179)][_0x4bdfa5(0x2ec)],..._0x145358[_0x4bdfa5(0x2ec)]||{}},_0x6a1125={...this[_0x4bdfa5(0x179)][_0x4bdfa5(0x259)],..._0x145358[_0x4bdfa5(0x259)]||{}},_0x40ea07={...this[_0x4bdfa5(0x179)][_0x4bdfa5(0x27f)],..._0x145358[_0x4bdfa5(0x27f)]||{}},_0x463ce=this[_0x4bdfa5(0x28f)](_0x50b8ec?.[_0x4bdfa5(0x25a)]?.['duration']),_0x33b239=_0x50b8ec?.[_0x4bdfa5(0x1d0)]===_0x4bdfa5(0x191),_0x215580=_0x33b239?_0x463ce:this[_0x4bdfa5(0x2cb)](_0x145358,_0x50b8ec),_0x3cff1c=_0x145358[_0x4bdfa5(0x226)]!==undefined?!!_0x145358['editable_duration']:!!this['_config'][_0x4bdfa5(0x226)],_0x2b8865=_0x3cff1c&&!!_0x133811&&!_0x217862;let _0x5560d5=0x0;if(_0x548723){const _0x2a4cc4=Date[_0x4bdfa5(0x23a)](_0x16b748[_0x4bdfa5(0x242)]);!Number[_0x4bdfa5(0x25d)](_0x2a4cc4)&&(_0x5560d5=Math[_0x4bdfa5(0x21d)]((_0x28f1bd-_0x2a4cc4)/0x3e8,0x708));}let _0x2559eb=0x0;if(_0x50b8ec?.[_0x4bdfa5(0x1d0)]===_0x4bdfa5(0x191)&&_0x215580>0x0){const _0x118061=Date[_0x4bdfa5(0x23a)](_0x50b8ec['last_changed']),_0x64b02a=(Number['isNaN'](_0x118061)?_0x28f1bd:_0x118061)+_0x215580*0x3e8,_0x88cdff=Math['max'](0x0,(_0x64b02a-_0x28f1bd)/0x3e8);_0x2559eb=Math[_0x4bdfa5(0x22f)](0x0,_0x215580-_0x88cdff);}else _0x217862&&(_0x2559eb=_0x5560d5);const _0xb23ccb=this[_0x4bdfa5(0x1c5)](_0x2559eb,_0x215580);let _0x41560d=_0x4bdfa5(0x23b)+_0x2443c0['ready']+';';if(_0x3c387a)_0x41560d=_0x4bdfa5(0x23b)+_0x2443c0[_0x4bdfa5(0x25e)]+';';else{if(_0x217862)_0x41560d=_0x4bdfa5(0x23b)+_0x2443c0['on']+';';}const _0x5752ee=_0x4bdfa5(0x23b)+_0x2443c0['button_start']+';',_0x20d2bf=_0x4bdfa5(0x23b)+_0x2443c0[_0x4bdfa5(0x24a)]+';',_0x1e9557=_0x4bdfa5(0x2d4)+_0x2443c0[_0x4bdfa5(0x1c9)]+';',_0x5aba5d=haHtml`
      <div class="timer-controls">
        ${!_0x217862&&_0x133811?haHtml`<button
              class="control-btn start"
              style="${_0x5752ee}"
              @click=${()=>this[_0x4bdfa5(0x1ce)](_0x133811,_0x2a8117,_0x145358,_0x215580)}
            >
              <ha-icon icon="${_0x6a1125[_0x4bdfa5(0x2b2)]}" style="${_0x1e9557}"></ha-icon>
            </button>`:''}
        ${_0x217862&&_0x133811?haHtml`<button
              class="control-btn stop"
              style="${_0x20d2bf}"
              @click=${()=>this['_handleStop'](_0x133811,_0x2a8117,_0x145358)}
            >
              <ha-icon icon="${_0x6a1125[_0x4bdfa5(0x279)]}" style="${_0x1e9557}"></ha-icon>
            </button>`:''}
      </div>
    `,_0x4c13b8=this['formatTime'](_0x2559eb,_0x40ea07)+_0x4bdfa5(0x263)+this[_0x4bdfa5(0x225)](_0x215580,_0x40ea07),_0x3348c4=_0x2b8865?haHtml`<span
          class="duration-editable"
          title="${_0x40ea07[_0x4bdfa5(0x2ad)]}"
          @click=${()=>this[_0x4bdfa5(0x2c1)](_0x145358,_0x133811,_0x215580)}
        >
          ${_0x4c13b8}
          <ha-icon icon="mdi:pencil" class="edit-icon"></ha-icon>
        </span>`:haHtml`<span>${_0x4c13b8}</span>`;return haHtml`
      <div class="entity-card">
        <div class="header">
          <div class="title" style="${_0x217862?_0x4bdfa5(0x2d4)+_0x2443c0['on']:''}">
            ${_0x145358[_0x4bdfa5(0x22b)]||_0x16b748['attributes'][_0x4bdfa5(0x1ca)]||_0x2a8117}
            ${this[_0x4bdfa5(0x23f)](_0x4a42c5)}
          </div>
          <div class="status" style="${_0x41560d}">
            ${this['getStatusText'](_0x16b748,_0x50b8ec,_0x40ea07,_0x217862)}
          </div>
        </div>

        <div class="control-wrapper ${_0x4c6da5}">
          ${_0x4c6da5===_0x4bdfa5(0x26d)?_0x5aba5d:''}
          <div class="timeline-container">
            <div class="progress-bar">
              <div
                class="progress-fill"
                style="width: ${_0xb23ccb}%; background-color: ${_0x2443c0[_0x4bdfa5(0x217)]};"
              ></div>
            </div>
            <div class="time-info">
              ${this[_0x4bdfa5(0x2e3)](_0x145358,_0xd64d11,_0x16b748,_0x40ea07,_0x28f1bd,_0x217862,_0x3348c4)}
            </div>
          </div>
          ${_0x4c6da5===_0x4bdfa5(0x2d9)?_0x5aba5d:''}
        </div>
      </div>
    `;}['_renderTimeInfoRows'](_0x510bcc,_0x8952da,_0x20e84b,_0x19ae9b,_0x51ff6a,_0x4e993e,_0x51c4e3){const _0x52835f=_0x10d42d;let _0x363ec8=[];const _0x240bf7=_0x510bcc[_0x52835f(0x267)];if(_0x240bf7&&_0x240bf7[_0x52835f(0x2dd)])_0x363ec8[_0x52835f(0x251)]({'sensor':_0x240bf7[_0x52835f(0x2dd)],'attribute':_0x240bf7[_0x52835f(0x2ac)],'name':_0x240bf7[_0x52835f(0x22b)],'icon':_0x240bf7[_0x52835f(0x1c9)],'position':_0x240bf7[_0x52835f(0x2cc)]});const _0x30d38b=_0x510bcc[_0x52835f(0x1e8)];if(_0x30d38b&&_0x30d38b[_0x52835f(0x2dd)])_0x363ec8[_0x52835f(0x251)]({'sensor':_0x30d38b[_0x52835f(0x2dd)],'attribute':_0x30d38b[_0x52835f(0x2ac)],'name':_0x30d38b[_0x52835f(0x22b)],'icon':_0x30d38b[_0x52835f(0x1c9)],'position':_0x30d38b['position']});if(!_0x240bf7&&!_0x30d38b){if(Array['isArray'](_0x510bcc[_0x52835f(0x2b4)])){for(const _0x4b9c06 of _0x510bcc[_0x52835f(0x2b4)])if(_0x4b9c06&&_0x4b9c06[_0x52835f(0x243)])_0x363ec8['push']({..._0x4b9c06});}typeof _0x510bcc['sensor']===_0x52835f(0x2a5)&&_0x510bcc['sensor']&&_0x363ec8[_0x52835f(0x1df)]({'sensor':_0x510bcc['sensor'],'position':'left'});}const _0x4b20d4=[];let _0x1b15d7={'right':{'__duration':!![]}};for(const _0x5c2ebc of _0x363ec8){if(!_0x5c2ebc)continue;const _0x1fcee0=['left',_0x52835f(0x20c),_0x52835f(0x2d9)][_0x52835f(0x1d6)](_0x5c2ebc[_0x52835f(0x2cc)])?_0x5c2ebc['position']:_0x52835f(0x26d);_0x1b15d7[_0x1fcee0]&&(_0x4b20d4[_0x52835f(0x251)](_0x1b15d7),_0x1b15d7={}),_0x1b15d7[_0x1fcee0]=_0x5c2ebc;}_0x4b20d4[_0x52835f(0x251)](_0x1b15d7);const _0x55d469=_0x599858=>_0x599858&&_0x599858[_0x52835f(0x260)];return _0x4b20d4[_0x52835f(0x257)](_0x4eedf5=>{const _0x32cd28=_0x52835f,_0x59de31=_0x4eedf5[_0x32cd28(0x26d)]?this['_renderSensorChip'](_0x4eedf5[_0x32cd28(0x26d)],_0x8952da,_0x20e84b,_0x19ae9b,_0x51ff6a,_0x4e993e):'',_0x3f9bc9=_0x4eedf5['center']?this[_0x32cd28(0x1af)](_0x4eedf5[_0x32cd28(0x20c)],_0x8952da,_0x20e84b,_0x19ae9b,_0x51ff6a,_0x4e993e):'',_0x786d06=_0x55d469(_0x4eedf5['right'])?_0x51c4e3:_0x4eedf5[_0x32cd28(0x2d9)]?this[_0x32cd28(0x1af)](_0x4eedf5['right'],_0x8952da,_0x20e84b,_0x19ae9b,_0x51ff6a,_0x4e993e):'';if(!_0x55d469(_0x4eedf5[_0x32cd28(0x2d9)])&&!_0x59de31&&!_0x3f9bc9&&!_0x786d06)return'';return haHtml`
          <div class="ti-row">
            <div class="ti-cell ti-left">${_0x59de31}</div>
            <div class="ti-cell ti-center">${_0x3f9bc9}</div>
            <div class="ti-cell ti-right">${_0x786d06}</div>
          </div>
        `;})[_0x52835f(0x241)](_0x5537a5=>_0x5537a5!=='');}[_0x10d42d(0x1af)](_0x18094a,_0x8a5b8c,_0x406913,_0x2e8aa3,_0x49f881,_0x424beb){const _0x3ce3a5=_0x10d42d,_0x40a290=_0x18094a&&_0x18094a[_0x3ce3a5(0x243)];if(!_0x40a290)return'';const _0x270c4e=_0x8a5b8c[_0x40a290];if(!_0x270c4e)return'';const _0x35f89e=_0x18094a['attribute'];let _0x5cecbf;if(_0x35f89e){_0x5cecbf=_0x270c4e['attributes']?_0x270c4e[_0x3ce3a5(0x25a)][_0x35f89e]:undefined;if(_0x5cecbf===undefined||_0x5cecbf===null||_0x5cecbf==='')return'';}const _0x2371e5=_0x35f89e?_0x5cecbf:_0x270c4e[_0x3ce3a5(0x1d0)],_0x40633e=_0x270c4e['attributes']&&_0x270c4e[_0x3ce3a5(0x25a)]['device_class'];let _0x268949=null;const _0x597dd8=!_0x35f89e&&(_0x40633e===_0x3ce3a5(0x2bf)||_0x40633e===_0x3ce3a5(0x292))||typeof _0x2371e5===_0x3ce3a5(0x2a5)&&/^\d{4}-\d{2}-\d{2}/[_0x3ce3a5(0x29a)](_0x2371e5);if(_0x597dd8){const _0x4ce152=Date[_0x3ce3a5(0x23a)](_0x2371e5);if(!Number[_0x3ce3a5(0x25d)](_0x4ce152))_0x268949=new Date(_0x4ce152);}let _0x13b2bb;if(_0x268949)_0x13b2bb=haHtml`<ha-relative-time .hass=${this[_0x3ce3a5(0x202)]} .datetime=${_0x268949}></ha-relative-time>`;else{let _0x3bf42c='';try{if(_0x35f89e)this['hass']&&typeof this[_0x3ce3a5(0x202)][_0x3ce3a5(0x1c2)]===_0x3ce3a5(0x1d2)&&(_0x3bf42c=this[_0x3ce3a5(0x202)]['formatEntityAttributeValue'](_0x270c4e,_0x35f89e));else this[_0x3ce3a5(0x202)]&&typeof this[_0x3ce3a5(0x202)]['formatEntityState']==='function'&&(_0x3bf42c=this[_0x3ce3a5(0x202)]['formatEntityState'](_0x270c4e));}catch(_0x20e711){_0x3bf42c='';}(_0x3bf42c===undefined||_0x3bf42c===null||_0x3bf42c==='')&&(_0x3bf42c=_0x35f89e?_0x5cecbf!=null?String(_0x5cecbf):'':_0x270c4e[_0x3ce3a5(0x1d0)]);if(_0x3bf42c===undefined||_0x3bf42c===null||_0x3bf42c==='')return'';_0x13b2bb=_0x3bf42c;}return haHtml`
      <span class="sensor-chip">
        ${_0x18094a['icon']?haHtml`<ha-icon icon="${_0x18094a[_0x3ce3a5(0x1c9)]}"></ha-icon>`:''}
        ${_0x18094a[_0x3ce3a5(0x22b)]?haHtml`<span class="sensor-name">${_0x18094a[_0x3ce3a5(0x22b)]}</span>`:''}
        <span class="sensor-val">${_0x13b2bb}</span>
      </span>
    `;}async[_0x10d42d(0x1ce)](_0x298ebc,_0x496733,_0x4b4f43,_0x10148f){const _0x4d2e4c=_0x10d42d,_0x3653ac=!_0x4b4f43?.[_0x4d2e4c(0x1c8)]&&_0x298ebc&&!this[_0x4d2e4c(0x283)]();if(_0x3653ac){this[_0x4d2e4c(0x1b1)]=![],this[_0x4d2e4c(0x189)]={'timerEntity':_0x298ebc,'controllableEntity':_0x496733,'entityConfig':_0x4b4f43,'totalDuration':_0x10148f};return;}this[_0x4d2e4c(0x1bf)](_0x298ebc,_0x496733,_0x4b4f43,_0x10148f);}[_0x10d42d(0x2a8)](){const _0x181d62=_0x10d42d,_0x3c4903=this[_0x181d62(0x189)];this[_0x181d62(0x189)]=null;if(!_0x3c4903)return;if(this[_0x181d62(0x1b1)])this[_0x181d62(0x169)]();this['__dontShowStartChecked']=![],this[_0x181d62(0x1bf)](_0x3c4903['timerEntity'],_0x3c4903[_0x181d62(0x1ad)],_0x3c4903[_0x181d62(0x2b0)],_0x3c4903[_0x181d62(0x2c3)]);}[_0x10d42d(0x2de)](){const _0xbe9004=_0x10d42d;this[_0xbe9004(0x189)]=null,this[_0xbe9004(0x1b1)]=![];}[_0x10d42d(0x1ee)](){const _0x3d529c=_0x10d42d;try{const _0x54f98e=Array[_0x3d529c(0x1a2)](this['_config']?.[_0x3d529c(0x19b)])?this[_0x3d529c(0x179)][_0x3d529c(0x19b)]:[],_0x72f43d=_0x54f98e['map'](_0x29faee=>{const _0x4b2ec3=_0x3d529c,_0x31ed27=_0x29faee?.['timer_and_entity_connected_via_automation']!==![]?'1':'0';return[_0x29faee?.[_0x4b2ec3(0x213)]||'',_0x29faee?.[_0x4b2ec3(0x1c6)]||'',_0x29faee?.[_0x4b2ec3(0x243)]||'',_0x31ed27][_0x4b2ec3(0x223)]('>');})[_0x3d529c(0x223)]('|');return'c'+this['_hashStr'](_0x72f43d);}catch(_0x18cb1c){return'default';}}[_0x10d42d(0x29b)](_0xd1c6d5){const _0x4ae567=_0x10d42d;let _0x4cc6ae=0x1505;for(let _0x1705e9=0x0;_0x1705e9<_0xd1c6d5[_0x4ae567(0x246)];_0x1705e9++)_0x4cc6ae=(_0x4cc6ae<<0x5)+_0x4cc6ae+_0xd1c6d5[_0x4ae567(0x2ba)](_0x1705e9)|0x0;return(_0x4cc6ae>>>0x0)[_0x4ae567(0x1b2)](0x24);}[_0x10d42d(0x283)](){const _0x51132b=_0x10d42d;try{const _0x305338=JSON[_0x51132b(0x23a)](window[_0x51132b(0x2b6)][_0x51132b(0x18a)](_0x51132b(0x275))||'{}');return!!(_0x305338&&_0x305338[this[_0x51132b(0x1ee)]()]);}catch(_0x146568){return![];}}[_0x10d42d(0x169)](){const _0x527fee=_0x10d42d;try{const _0x38d1d3=_0x527fee(0x275);let _0x35d928={};try{_0x35d928=JSON[_0x527fee(0x23a)](window['localStorage'][_0x527fee(0x18a)](_0x38d1d3)||'{}')||{};}catch(_0x1a5a2c){_0x35d928={};}_0x35d928[this[_0x527fee(0x1ee)]()]=!![],window[_0x527fee(0x2b6)]['setItem'](_0x38d1d3,JSON[_0x527fee(0x2ab)](_0x35d928));}catch(_0x364fb1){}}[_0x10d42d(0x1bf)](_0x29845a,_0x38f63e,_0x2e0382,_0x127978){const _0x1a6166=_0x10d42d;if(!_0x2e0382[_0x1a6166(0x1c8)])this['_callService'](_0x38f63e,'on');if(!_0x2e0382[_0x1a6166(0x1c8)]&&_0x29845a&&_0x38f63e){const _0x2d4f24=Number[_0x1a6166(0x20d)](_0x127978)&&_0x127978>0x0?Date['now']()+_0x127978*0x3e8:null;this['_armTimer'](_0x29845a,_0x38f63e,_0x2d4f24);}const _0x595e69={'entity_id':_0x29845a};this[_0x1a6166(0x174)](_0x2e0382)&&Number[_0x1a6166(0x20d)](_0x127978)&&_0x127978>0x0&&(_0x595e69[_0x1a6166(0x19a)]=this[_0x1a6166(0x27b)](_0x127978)),this[_0x1a6166(0x202)]['callService'](_0x1a6166(0x1c6),_0x1a6166(0x2b2),_0x595e69);}async['_handleStop'](_0xa040ae,_0x7433f0,_0x40dd73){const _0x56d0b8=_0x10d42d;this[_0x56d0b8(0x1a9)](_0xa040ae);if(_0xa040ae)await this[_0x56d0b8(0x202)][_0x56d0b8(0x16b)](_0x56d0b8(0x1c6),_0x56d0b8(0x17e),{'entity_id':_0xa040ae});if(!_0x7433f0)return;if(_0x40dd73?.[_0x56d0b8(0x1c8)])return;if(this[_0x56d0b8(0x1d9)][_0x56d0b8(0x1b5)](_0x7433f0)){const _0x64b4b0=this['_config']?.[_0x56d0b8(0x19b)]?.[_0x56d0b8(0x1ed)](_0x135583=>_0x135583[_0x56d0b8(0x213)]===_0x7433f0&&_0x135583[_0x56d0b8(0x1c6)]&&_0x135583[_0x56d0b8(0x1c6)]!==_0xa040ae&&this[_0x56d0b8(0x202)][_0x56d0b8(0x1e7)]?.[_0x135583[_0x56d0b8(0x1c6)]]?.[_0x56d0b8(0x1d0)]===_0x56d0b8(0x191));if(_0x64b4b0)return;}this[_0x56d0b8(0x1dd)](_0x7433f0,_0x56d0b8(0x1ac));}['parseDuration'](_0x332b6a){const _0x1fd526=_0x10d42d;if(!_0x332b6a)return 0x0;if(typeof _0x332b6a===_0x1fd526(0x2a5)&&_0x332b6a[_0x1fd526(0x1d6)](':')){const _0x363565=_0x332b6a[_0x1fd526(0x2c8)](':');if(_0x363565[_0x1fd526(0x246)]===0x3){const _0x24f94f=parseInt(_0x363565[0x0],0xa),_0x131ff0=parseInt(_0x363565[0x1],0xa),_0x3b572d=parseInt(_0x363565[0x2],0xa);return(Number[_0x1fd526(0x25d)](_0x24f94f)?0x0:_0x24f94f)*0xe10+(Number[_0x1fd526(0x25d)](_0x131ff0)?0x0:_0x131ff0)*0x3c+(Number[_0x1fd526(0x25d)](_0x3b572d)?0x0:_0x3b572d);}}const _0x2afb0e=typeof _0x332b6a==='number'?_0x332b6a:parseFloat(_0x332b6a);return Number[_0x1fd526(0x20d)](_0x2afb0e)?_0x2afb0e:0x0;}['calculateActivePercent'](_0x313358,_0x2cd162){const _0x147874=_0x10d42d;if(!(_0x2cd162>0x0))return 0x0;const _0x3e55db=_0x313358/_0x2cd162*0x64;return Math[_0x147874(0x21d)](0x64,Math['max'](0x0,_0x3e55db));}[_0x10d42d(0x225)](_0x18bec0,_0x5cba5d){const _0x361599=_0x10d42d,_0x22c736=Number(_0x18bec0);if(!Number['isFinite'](_0x22c736)||_0x22c736<=0x0)return _0x5cba5d[_0x361599(0x2c5)];const _0x4e6057=Math[_0x361599(0x22c)](_0x22c736),_0xaf9d43=Math[_0x361599(0x22c)](_0x4e6057/0xe10),_0x5d17c4=Math[_0x361599(0x22c)](_0x4e6057%0xe10/0x3c),_0x2e6600=_0x4e6057%0x3c,_0x211a4b=_0x5cba5d[_0x361599(0x276)]??'h',_0x27290f=_0x5cba5d['time_unit_minutes'],_0x1b335b=_0x5cba5d[_0x361599(0x16a)];if(_0xaf9d43>0x0)return''+_0xaf9d43+_0x211a4b+'\x20'+String(_0x5d17c4)[_0x361599(0x1e9)](0x2,'0')+_0x27290f+'\x20'+String(_0x2e6600)[_0x361599(0x1e9)](0x2,'0')+_0x1b335b;return''+_0x5d17c4+_0x27290f+'\x20'+String(_0x2e6600)[_0x361599(0x1e9)](0x2,'0')+_0x1b335b;}[_0x10d42d(0x23f)](_0x4a5fb5){const _0x3517d2=_0x10d42d;if(!_0x4a5fb5)return'';const _0x32da0d=_0x4a5fb5[_0x3517d2(0x1d0)];if(_0x32da0d==null||[_0x3517d2(0x25e),_0x3517d2(0x16e),''][_0x3517d2(0x1d6)](String(_0x32da0d)))return'';const _0xcdc6f8=Number(_0x32da0d),_0x48b035=Number[_0x3517d2(0x20d)](_0xcdc6f8),_0x186a06=_0x4a5fb5[_0x3517d2(0x25a)]?.[_0x3517d2(0x1b4)]||(_0x48b035?'%':''),_0x317901=_0x48b035?''+Math[_0x3517d2(0x192)](_0xcdc6f8)+_0x186a06:''+_0x32da0d+(_0x186a06?'\x20'+_0x186a06:''),_0x3d646b=_0x4a5fb5[_0x3517d2(0x25a)]||{},_0x524f52=_0x3d646b[_0x3517d2(0x24e)]===!![]||_0x3d646b[_0x3517d2(0x237)]===!![]||[_0x3517d2(0x237),'on'][_0x3517d2(0x1d6)](String(_0x3d646b[_0x3517d2(0x197)]??'')[_0x3517d2(0x21a)]());let _0x321c24=_0x3517d2(0x182);if(_0x48b035){const _0xc68fb9=Math[_0x3517d2(0x22f)](0x0,Math[_0x3517d2(0x21d)](0x64,_0xcdc6f8)),_0x513388=Math['round'](_0xc68fb9/0xa)*0xa;_0x524f52?_0x321c24=_0x513388<=0x0?'mdi:battery-charging-outline':_0x513388>=0x64?_0x3517d2(0x2bd):_0x3517d2(0x2be)+_0x513388:_0x321c24=_0x513388<=0x0?'mdi:battery-outline':_0x513388>=0x64?_0x3517d2(0x182):'mdi:battery-'+_0x513388;}return haHtml`<span class="battery"><ha-icon icon="${_0x321c24}"></ha-icon>${_0x317901}</span>`;}[_0x10d42d(0x297)](_0x509115,_0x3549e3,_0x513929,_0x137b88){const _0x5070ed=_0x10d42d;if(!_0x509115)return _0x513929[_0x5070ed(0x29c)];if([_0x5070ed(0x25e),'unknown'][_0x5070ed(0x1d6)](_0x509115[_0x5070ed(0x1d0)]))return _0x513929['status_unavailable'];const _0x3091e0=_0x137b88!==undefined?_0x137b88:this['_isActive'](_0x509115);if(_0x3091e0)return _0x513929[_0x5070ed(0x2a7)];return _0x513929['status_ready'];}[_0x10d42d(0x211)](_0xbcaab3,_0x4a1fd7,_0x3c1b30,_0x56cef0,_0x3b7922){const _0x2987df=_0x10d42d;return _0xbcaab3&&_0xbcaab3[_0x2987df(0x1d0)]?_0xbcaab3[_0x2987df(0x1d0)]:'';}}customElements[_0x10d42d(0x250)](_0x10d42d(0x295),SwitchAndTimerBarCard);function _0x520e(){const _0x54a404=['effectAllowed','_applyDurationEditor','design','renderRoot','__recomputeTickNeedAndApply','_renderSensorPickerWithHelp_REMOVED','states','next_run_sensor','padStart','Ready','Position','Minutes','some','_cardWarnKey','scrollIntoView','target','.timer','_renderLabelOptions','writeText','stopPropagation','Switch\x20and\x20Timer\x20Bar\x20Card:\x20\x27entities\x27\x20is\x20not\x20a\x20list\x20or\x20is\x20missing.','control','html','_hasUIDurationOverride','1585617rhZxFS','__reconciledOnce','_showSensorHelp','_renderEntityPicker','mdi:play','Watering','title','__interval','.entity-head','hass','setItem','entities.','setConfig','removeEventListener','connectedCallback','finishesAt','getPrototypeOf','keydown','mdi:update','center','isFinite','__itemsCache','Cancel','_addEntity','getLastWateringText','detail','switch','__armedStorageKey','text/plain','valve','progress_fill','0m\x2000s','general','toLowerCase','Front\x20Yard','error','min','size','__lastEntitySig','_toggleRunSensor','get','7190648UzvGAD','join','__lastOffAt','formatTime','editable_duration','currentTarget','then','_resetPath','_designColorField','name','floor','charAt','edit_duration_seconds','max','_computeEntitySig','__onConfirmKeyDown','_loadDurationOverrides','css','dropdown','_updateBattery','_onDrop','charging','__durationOverrides','Button\x20icon\x20color','parse','background-color:\x20','12079165mknqkt','close_cover','template:\x0a\x20\x20-\x20trigger:\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20event\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_type:\x20timer.finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_data:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20timer.zone_1_timer\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20state\x0a\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20switch.zone_1\x20\x20\x20#\x20For\x20non-switch\x20domains,\x20change\x20to\x20your\x20entity\x0a\x20\x20\x20\x20\x20\x20\x20\x20from:\x20\x27on\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20to:\x20\x27off\x27\x0a\x20\x20\x20\x20sensor:\x0a\x20\x20\x20\x20\x20\x20-\x20name:\x20zone_1_is_finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20state:\x20\x22{{\x20now().timestamp()\x20|\x20as_datetime\x20}}\x22','_renderBattery','object','filter','last_changed','sensor','mdi:history','set','length','shouldUpdate','open_valve','Last\x20Run\x20Sensor','button_stop','disconnectedCallback','_getBuiltInDefaults','button_position','is_charging','__armedTimers','define','push','edit_duration_apply','switch-and-timer-bar-card:armed','warn','type','open_cover','map','Hours\x20unit','icons','attributes','_dragFromIndex','_scrollEntityIntoView','isNaN','unavailable','open','__duration','Ready\x20text','Hours','\x20/\x20','Seconds\x20unit','entity_id','textContent','last_run_sensor','checked','startsWith','Idle\x20Text','status_ready','key','left','trim','_renderDurationDialog','styles','lock','unlocked','_isActive','__offDebounceMs','switch-and-timer-bar-card:nostartwarn','time_unit_hours','_armTimer','_closeDurationEditor','stop','entries','_secondsToHHMMSS','getConfigElement','light','edit_duration_cancel','labels','30DoLrtz','Next\x20run','battery','_isStartWarnSuppressed','Unavailable\x20text','Ready\x20color','setData','entity_','Reset\x20to\x20default','__needsTick','mdi:stop','_dragOverIndex','Next\x20Run\x20Sensor','.colors.','findIndex','parseDuration','Optional.\x20Show\x20one\x20of\x20the\x20entity’s\x20attributes\x20instead\x20of\x20its\x20state.','dispatchEvent','date',',\x2065%,\x2055%)','_removeEntity','switch-and-timer-bar-card','DEFAULTS','getStatusText','_mainTab','preventDefault','test','_hashStr','status_unavailable','_pruneDefaults','now','_reorderEntities','clipboard','querySelector','properties','Unavailable','switch.example_switch','string','_reconcileMissedTimers','status_on','_confirmStart','_renderSensorsEditor','Escape','stringify','attribute','edit_duration_tooltip','_getEffectiveGlobal','fan','entityConfig','drag-over','start','_saveArmedTimers','sensors','This\x20timer\x20switches\x20the\x20device\x20off\x20via\x20your\x20browser.\x20If\x20no\x20dashboard\x20tab\x20is\x20open\x20on\x20your\x20browser\x20or\x20your\x20HA\x20app\x20is\x20closed\x20when\x20the\x20timer\x20ends,\x20the\x20device\x20won\x27t\x20turn\x20off.\x20For\x20unattended\x20use,\x20enable\x20“Automation\x20Link”\x20for\x20this\x20entity\x20and\x20let\x20a\x20Home\x20Assistant\x20automation\x20handle\x20the\x20switch-off.','localStorage','Seconds','Switch\x20&\x20Timer\x20Bar\x20Card','dataTransfer','charCodeAt','_onDurationFieldChange','prototype','mdi:battery-charging-100','mdi:battery-charging-','timestamp','Optional.\x20If\x20set\x20(HH:MM:SS\x20or\x20seconds),\x20this\x20overrides\x20the\x20timer\x20helper’s\x20configured\x20duration\x20when\x20starting\x20from\x20this\x20card.\x20Leave\x20empty\x20to\x20use\x20the\x20helper\x20default.','_openDurationEditor','toUpperCase','totalDuration','_onDragStart','time_format_zero','_expanded','Set\x20duration','split','ready','Entity\x20#','_getEffectiveDuration','position','config-changed','clear','_designIconField','_toggleBattery','_resetDurationOverride','Copied!','move','color:\x20','replace','_tip','paused','switch-and-timer-bar-card:\x20Lit\x20not\x20found.\x20This\x20card\x20must\x20run\x20inside\x20Home\x20Assistant.','right','.switch','edit_duration_reset','_saveDurationOverrides','entity','_cancelStart','createElement','__startTick','_updateRunSensor','15096663FynxBB','_renderTimeInfoRows','#4CAF50','_dispatchConfig','4665810FWaVQY','_entityDotColor','Last\x20run','value','edit_duration_title','_openSensorHelp','colors','media_player','_renderColorOptions','_onDragOver','opening','__tickMs','tagName','_suppressStartWarn','time_unit_seconds','callService','getAttribute','[data-entity-index=\x22','unknown','Stop\x20icon','dropEffect','1280eXSeJd','requestUpdate','Allowed:\x20switch,\x20light,\x20cover,\x20valve,\x20lock,\x20media_player,\x20input_boolean,\x20fan','_hasAnyDurationOverride','keys','renderEntity','5836YYqusY','Start\x20anyway','_config','_renderRunSensorSlot','_toggleEntityExpand','sensor.example_last_watered','start_confirm_ok','finish','\x20field-label--','__stopTick','turn_on','mdi:battery','addEventListener','#F44336','close_valve','start_confirm_cancel','_closeSensorHelp','nearest','_startConfirm','getItem','Timer\x20entity','_renderIconOptions','render','forEach','closed','start_confirm_body','active','round','_renderSensorHelpDialog','Active\x20text','Irrigation\x20Control','__durationStorageKey','battery_state','customCards','_entityTabs','duration','entities','fromEntries','If\x20enabled,\x20users\x20can\x20tap\x20the\x20total\x20time\x20on\x20the\x20card\x20to\x20change\x20the\x20duration.','start_confirm_dont_show','#FFFFFF','switch-and-timer-bar-card:durations','global','isArray','ha-panel-lovelace','Optional\x20custom\x20name.\x20If\x20empty,\x20card\x20uses\x20entity\x20friendly\x20name.','_toggleExpand','_resetEntityDesign','_renderBatterySlot','_durationEditor','_disarmTimer','hsl(','Start\x20button\x20color','off','controllableEntity','_renderEntitySection','_renderSensorChip','cover','__dontShowStartChecked','toString','\x20field--','unit_of_measurement','has','_migrateSensorsInPlace','from','smooth','_onDragLeave','streaming','edit_duration_minutes','Apply','_duplicateEntity','configValue','_performStart','Click\x20to\x20change\x20duration','_designLabelField','formatEntityAttributeValue','446OEHQVa','_copyHelpYaml','calculateActivePercent','timer','splice','timer_and_entity_connected_via_automation','icon','friendly_name','HA-SWITCH','finishes_at','Copy\x20failed','_handleStart','_loadArmedTimers','state','#2196F3','function','getData','_valueChanged','delete','includes','Where\x20the\x20Start/Stop\x20button\x20appears\x20for\x20this\x20entity.','Minutes\x20unit','__sharedSwitches','edit_duration_hours','time_unit_minutes','3908LmDpzA','_callService','slice','unshift','_maybeReconcile'];_0x520e=function(){return _0x54a404;};return _0x520e();}class SwitchAndTimerBarCardEditor extends HaLitBase{static get['properties'](){return{'hass':{},'_config':{'state':!![]},'_expanded':{'state':!![]},'_dragOverIndex':{'state':!![]},'_showSensorHelp':{'state':!![]},'_mainTab':{'state':!![]},'_entityTabs':{'state':!![]}};}constructor(){const _0x41b34b=_0x10d42d;super(),this[_0x41b34b(0x20e)]=new Map(),this['__lastEntitySig']=null,this['_expanded']={'global_overrides':![],'entities':![]},this['_dragOverIndex']=null,this[_0x41b34b(0x25b)]=null,this['_showSensorHelp']=![],this['_mainTab']=_0x41b34b(0x219),this[_0x41b34b(0x199)]={},this[_0x41b34b(0x2eb)]=_0x18a746=>{if(_0x18a746)_0x18a746['stopPropagation']();this['_showSensorHelp']=!![];},this[_0x41b34b(0x187)]=()=>{const _0x3d0606=_0x41b34b;this[_0x3d0606(0x1fb)]=![];};}[_0x10d42d(0x205)](_0x3103df){const _0x2bf271=_0x10d42d,_0x3a33ea=JSON[_0x2bf271(0x23a)](JSON[_0x2bf271(0x2ab)](_0x3103df||{}));if(!Array[_0x2bf271(0x1a2)](_0x3a33ea[_0x2bf271(0x19b)]))_0x3a33ea[_0x2bf271(0x19b)]=[];_0x3a33ea[_0x2bf271(0x2ec)]=_0x3a33ea['colors']||{},_0x3a33ea[_0x2bf271(0x259)]=_0x3a33ea[_0x2bf271(0x259)]||{},_0x3a33ea[_0x2bf271(0x27f)]=_0x3a33ea['labels']||{};const _0x11f84b=this[_0x2bf271(0x1b6)](_0x3a33ea);_0x3a33ea[_0x2bf271(0x19b)][_0x2bf271(0x18e)]((_0xd26b39,_0x143114)=>{const _0x3ae94a=_0x2bf271;if(this[_0x3ae94a(0x2c6)][_0x3ae94a(0x287)+_0x143114]===undefined)this[_0x3ae94a(0x2c6)][_0x3ae94a(0x287)+_0x143114]=![];}),this[_0x2bf271(0x179)]=_0x3a33ea;if(_0x11f84b){const _0x4f9732=_0x3a33ea;setTimeout(()=>this[_0x2bf271(0x2e5)](_0x4f9732),0x0);}}['_migrateSensorsInPlace'](_0x7d95c3){const _0xbea09e=_0x10d42d;if(!_0x7d95c3||!Array[_0xbea09e(0x1a2)](_0x7d95c3[_0xbea09e(0x19b)]))return![];let _0x1a42fc=![];for(const _0x603267 of _0x7d95c3[_0xbea09e(0x19b)]){if(!_0x603267||typeof _0x603267!=='object')continue;if('sensor'in _0x603267){const _0x4b17a6=_0x603267['sensor'];delete _0x603267['sensor'],_0x1a42fc=!![],typeof _0x4b17a6===_0xbea09e(0x2a5)&&_0x4b17a6&&!_0x603267[_0xbea09e(0x267)]&&(_0x603267[_0xbea09e(0x267)]={'entity':_0x4b17a6,'name':_0xbea09e(0x2e8),'icon':'mdi:history','position':_0xbea09e(0x26d)});}if(Array[_0xbea09e(0x1a2)](_0x603267[_0xbea09e(0x2b4)])){const _0x3c659e=_0x603267[_0xbea09e(0x2b4)][_0xbea09e(0x241)](_0x9cee47=>_0x9cee47&&_0x9cee47[_0xbea09e(0x243)]);delete _0x603267[_0xbea09e(0x2b4)],_0x1a42fc=!![],_0x3c659e[0x0]&&!_0x603267['last_run_sensor']&&(_0x603267[_0xbea09e(0x267)]={'entity':_0x3c659e[0x0]['sensor'],'name':_0x3c659e[0x0][_0xbea09e(0x22b)]||_0xbea09e(0x2e8),'icon':_0x3c659e[0x0][_0xbea09e(0x1c9)]||'mdi:history','position':_0x3c659e[0x0][_0xbea09e(0x2cc)]||'left'}),_0x3c659e[0x1]&&!_0x603267[_0xbea09e(0x1e8)]&&(_0x603267[_0xbea09e(0x1e8)]={'entity':_0x3c659e[0x1][_0xbea09e(0x243)],'name':_0x3c659e[0x1]['name']||_0xbea09e(0x281),'icon':_0x3c659e[0x1][_0xbea09e(0x1c9)]||_0xbea09e(0x20b),'position':_0x3c659e[0x1]['position']||_0xbea09e(0x26d)});}}return _0x1a42fc;}[_0x10d42d(0x247)](_0x182d11){const _0x27ca00=_0x10d42d;if(_0x182d11['has'](_0x27ca00(0x179))||_0x182d11[_0x27ca00(0x1b5)](_0x27ca00(0x2c6))||_0x182d11['has'](_0x27ca00(0x28b))||_0x182d11[_0x27ca00(0x1b5)](_0x27ca00(0x1fb))||_0x182d11[_0x27ca00(0x1b5)](_0x27ca00(0x298))||_0x182d11['has'](_0x27ca00(0x199)))return!![];if(_0x182d11[_0x27ca00(0x1b5)](_0x27ca00(0x202))){const _0x3d1c43=this[_0x27ca00(0x230)](this['hass']);if(_0x3d1c43!==this[_0x27ca00(0x21f)])return this[_0x27ca00(0x21f)]=_0x3d1c43,this[_0x27ca00(0x20e)][_0x27ca00(0x2ce)](),!![];return![];}return!![];}[_0x10d42d(0x230)](_0x11f6bc){const _0x591a2d=_0x10d42d,_0x3b6f74=_0x11f6bc?.[_0x591a2d(0x1e7)]||{};let _0x360510=0x0;for(const _0x223bf7 in _0x3b6f74)_0x360510++;return''+_0x360510;}[_0x10d42d(0x29d)](_0x6e6f6c){const _0x32cbc7=_0x10d42d,_0x23cda4=SwitchAndTimerBarCard[_0x32cbc7(0x296)],_0x2c2109=JSON['parse'](JSON[_0x32cbc7(0x2ab)](_0x6e6f6c||{}));for(const _0x548ae3 of[_0x32cbc7(0x27f),'colors',_0x32cbc7(0x259)]){const _0x3964b6=_0x23cda4[_0x548ae3],_0x19bdfd=_0x2c2109[_0x548ae3];if(_0x19bdfd&&typeof _0x19bdfd===_0x32cbc7(0x240)&&!Array[_0x32cbc7(0x1a2)](_0x19bdfd)&&_0x3964b6){for(const _0x229013 of Object[_0x32cbc7(0x175)](_0x19bdfd)){if(_0x229013 in _0x3964b6&&_0x19bdfd[_0x229013]===_0x3964b6[_0x229013])delete _0x19bdfd[_0x229013];}if(Object[_0x32cbc7(0x175)](_0x19bdfd)[_0x32cbc7(0x246)]===0x0)delete _0x2c2109[_0x548ae3];}}for(const _0x3d1b8c of Object[_0x32cbc7(0x175)](_0x23cda4)){if(_0x3d1b8c==='entities')continue;if(_0x23cda4[_0x3d1b8c]&&typeof _0x23cda4[_0x3d1b8c]===_0x32cbc7(0x240))continue;if(_0x3d1b8c in _0x2c2109&&_0x2c2109[_0x3d1b8c]===_0x23cda4[_0x3d1b8c])delete _0x2c2109[_0x3d1b8c];}return _0x2c2109;}[_0x10d42d(0x2e5)](_0x37651b){const _0x2cb7dc=_0x10d42d,_0x40842c=this['_pruneDefaults'](_0x37651b);this[_0x2cb7dc(0x179)]=_0x40842c,this[_0x2cb7dc(0x172)](),this[_0x2cb7dc(0x291)](new CustomEvent(_0x2cb7dc(0x2cd),{'detail':{'config':_0x40842c},'bubbles':!![],'composed':!![]}));}[_0x10d42d(0x1d4)](_0x1e7417){const _0x3486df=_0x10d42d;if(!this[_0x3486df(0x179)]||!this[_0x3486df(0x202)])return;const _0x33bc0f=_0x1e7417[_0x3486df(0x1f0)],_0x4d3b07=_0x33bc0f['configValue']||_0x33bc0f[_0x3486df(0x16c)](_0x3486df(0x1be));if(!_0x4d3b07)return;const _0x358a79=_0x4d3b07[_0x3486df(0x2c8)]('.');let _0x37aae8;if(_0x33bc0f[_0x3486df(0x168)]===_0x3486df(0x1cb))_0x37aae8=_0x33bc0f['checked'];else{if(_0x1e7417['detail']?.[_0x3486df(0x2e9)]!==undefined)_0x37aae8=_0x1e7417[_0x3486df(0x212)]['value'];else{if(_0x33bc0f['value']!==undefined)_0x37aae8=_0x33bc0f['value'];else _0x37aae8='';}}if(_0x37aae8===_0x3486df(0x1a1))_0x37aae8='';const _0xf52f88=JSON[_0x3486df(0x23a)](JSON['stringify'](this[_0x3486df(0x179)]));let _0x21ca29=_0xf52f88;for(let _0x3ed241=0x0;_0x3ed241<_0x358a79[_0x3486df(0x246)]-0x1;_0x3ed241++){const _0xbd1f92=_0x358a79[_0x3ed241];if(_0x21ca29[_0xbd1f92]===undefined)_0x21ca29[_0xbd1f92]=!isNaN(parseInt(_0x358a79[_0x3ed241+0x1],0xa))?[]:{};_0x21ca29=_0x21ca29[_0xbd1f92];}const _0x4eab88=_0x358a79[_0x358a79[_0x3486df(0x246)]-0x1];if(_0x37aae8===''||_0x37aae8===null||Array[_0x3486df(0x1a2)](_0x37aae8)&&_0x37aae8[_0x3486df(0x246)]===0x0){delete _0x21ca29[_0x4eab88];if(_0x358a79[_0x3486df(0x246)]>0x1){let _0x45e878=_0xf52f88;for(let _0x26a538=0x0;_0x26a538<_0x358a79[_0x3486df(0x246)]-0x2;_0x26a538++)_0x45e878=_0x45e878[_0x358a79[_0x26a538]];if(Object[_0x3486df(0x175)](_0x21ca29)[_0x3486df(0x246)]===0x0&&_0x45e878[_0x358a79[_0x358a79[_0x3486df(0x246)]-0x2]])delete _0x45e878[_0x358a79[_0x358a79[_0x3486df(0x246)]-0x2]];}}else _0x21ca29[_0x4eab88]=_0x37aae8;this['_dispatchConfig'](_0xf52f88);}[_0x10d42d(0x1a5)](_0x3741bc){const _0xb24c7b=_0x10d42d;this['_expanded']={...this['_expanded'],[_0x3741bc]:!this[_0xb24c7b(0x2c6)][_0x3741bc]};}[_0x10d42d(0x17b)](_0x42c1e3){const _0x502d9b=_0x10d42d,_0x2ac3b5=_0x502d9b(0x287)+_0x42c1e3,_0x1c9891=!!this[_0x502d9b(0x2c6)][_0x2ac3b5];if(_0x1c9891){this[_0x502d9b(0x2c6)]={...this[_0x502d9b(0x2c6)],[_0x2ac3b5]:![]};return;}const _0x5977f6={...this['_expanded']};Object['keys'](_0x5977f6)[_0x502d9b(0x241)](_0x31d4cb=>_0x31d4cb[_0x502d9b(0x269)]('entity_'))[_0x502d9b(0x18e)](_0x280673=>_0x5977f6[_0x280673]=![]),_0x5977f6[_0x2ac3b5]=!![],_0x5977f6[_0x502d9b(0x19b)]=!![],this[_0x502d9b(0x2c6)]=_0x5977f6,requestAnimationFrame(()=>{const _0x5060f9=_0x502d9b;requestAnimationFrame(()=>this[_0x5060f9(0x25c)](_0x42c1e3));});}[_0x10d42d(0x25c)](_0x157eaf){const _0xadcbe3=_0x10d42d,_0x332dc0=this[_0xadcbe3(0x1e4)]?.[_0xadcbe3(0x2a1)](_0xadcbe3(0x16d)+_0x157eaf+'\x22]');if(!_0x332dc0)return;const _0x5591c5=_0x332dc0['querySelector'](_0xadcbe3(0x201))||_0x332dc0;try{_0x5591c5[_0xadcbe3(0x1ef)]({'behavior':_0xadcbe3(0x1b8),'block':_0xadcbe3(0x2b2),'inline':_0xadcbe3(0x188)});}catch(_0x484dc5){_0x5591c5[_0xadcbe3(0x1ef)](!![]);}}[_0x10d42d(0x210)]=()=>{const _0x577e3e=_0x10d42d,_0x1a0e06=JSON[_0x577e3e(0x23a)](JSON['stringify'](this[_0x577e3e(0x179)]));_0x1a0e06[_0x577e3e(0x19b)]=_0x1a0e06[_0x577e3e(0x19b)]||[],_0x1a0e06['entities'][_0x577e3e(0x251)]({'name':'','switch':'','timer':'','timer_and_entity_connected_via_automation':!![]});const _0x595f3c=_0x1a0e06[_0x577e3e(0x19b)][_0x577e3e(0x246)]-0x1,_0x1d15d2={...this[_0x577e3e(0x2c6)]};Object['keys'](_0x1d15d2)[_0x577e3e(0x241)](_0x14302e=>_0x14302e[_0x577e3e(0x269)](_0x577e3e(0x287)))[_0x577e3e(0x18e)](_0x4c1fb1=>_0x1d15d2[_0x4c1fb1]=![]),_0x1d15d2[_0x577e3e(0x287)+_0x595f3c]=!![],_0x1d15d2['entities']=!![],this['_expanded']=_0x1d15d2,this[_0x577e3e(0x2e5)](_0x1a0e06);};[_0x10d42d(0x294)](_0x443513){const _0x4035c6=_0x10d42d,_0x211557=JSON[_0x4035c6(0x23a)](JSON[_0x4035c6(0x2ab)](this[_0x4035c6(0x179)]));_0x211557[_0x4035c6(0x19b)][_0x4035c6(0x1c7)](_0x443513,0x1);const _0x116a90={...this['_expanded']};Object[_0x4035c6(0x175)](_0x116a90)['filter'](_0x48a450=>_0x48a450[_0x4035c6(0x269)]('entity_'))['forEach'](_0x3ec1b1=>delete _0x116a90[_0x3ec1b1]),_0x211557[_0x4035c6(0x19b)][_0x4035c6(0x18e)]((_0x588128,_0x7345a1)=>_0x116a90['entity_'+_0x7345a1]=![]),this[_0x4035c6(0x2c6)]=_0x116a90,this[_0x4035c6(0x2e5)](_0x211557);}[_0x10d42d(0x1bd)](_0x4cb845){const _0x4944ea=_0x10d42d,_0x47c72d=JSON[_0x4944ea(0x23a)](JSON[_0x4944ea(0x2ab)](this[_0x4944ea(0x179)])),_0x2b5661=JSON[_0x4944ea(0x23a)](JSON['stringify'](_0x47c72d[_0x4944ea(0x19b)][_0x4cb845]));_0x47c72d['entities'][_0x4944ea(0x1c7)](_0x4cb845+0x1,0x0,_0x2b5661);const _0x2da90e={...this[_0x4944ea(0x2c6)]};Object[_0x4944ea(0x175)](_0x2da90e)[_0x4944ea(0x241)](_0x103c23=>_0x103c23[_0x4944ea(0x269)]('entity_'))[_0x4944ea(0x18e)](_0x4c71d2=>_0x2da90e[_0x4c71d2]=![]),_0x2da90e[_0x4944ea(0x287)+(_0x4cb845+0x1)]=!![],_0x2da90e['entities']=!![],this['_expanded']=_0x2da90e,this[_0x4944ea(0x2e5)](_0x47c72d);}[_0x10d42d(0x2c4)](_0x20330e,_0x22031a){const _0x52a363=_0x10d42d;this[_0x52a363(0x25b)]=_0x20330e;try{_0x22031a['dataTransfer'][_0x52a363(0x1e1)]=_0x52a363(0x2d3),_0x22031a[_0x52a363(0x2b9)][_0x52a363(0x286)](_0x52a363(0x215),String(_0x20330e));}catch(_0x5d320a){}}[_0x10d42d(0x165)](_0x42c35b,_0x30aa94){const _0x87c0d8=_0x10d42d;_0x30aa94['preventDefault'](),this[_0x87c0d8(0x28b)]=_0x42c35b;try{_0x30aa94['dataTransfer'][_0x87c0d8(0x170)]=_0x87c0d8(0x2d3);}catch(_0x2a9140){}}[_0x10d42d(0x1b9)](_0x1e9db6,_0x37d0af){}[_0x10d42d(0x236)](_0x225f37,_0x1a56ae){const _0x235974=_0x10d42d;_0x1a56ae[_0x235974(0x299)]();let _0xb8e176=this['_dragFromIndex'];try{const _0x9b526f=_0x1a56ae['dataTransfer'][_0x235974(0x1d3)](_0x235974(0x215)),_0x50e124=parseInt(_0x9b526f,0xa);if(!Number[_0x235974(0x25d)](_0x50e124))_0xb8e176=_0x50e124;}catch(_0x5ae12e){}if(_0xb8e176===null||_0xb8e176===undefined)return;this[_0x235974(0x29f)](_0xb8e176,_0x225f37),this[_0x235974(0x25b)]=null,this[_0x235974(0x28b)]=null;}[_0x10d42d(0x29f)](_0x2e0697,_0x2b0cea){const _0x3108c0=_0x10d42d;if(_0x2e0697===_0x2b0cea)return;const _0x279f2c=JSON[_0x3108c0(0x23a)](JSON[_0x3108c0(0x2ab)](this[_0x3108c0(0x179)])),_0x3dc5e2=_0x279f2c[_0x3108c0(0x19b)]||[];if(_0x2e0697<0x0||_0x2e0697>=_0x3dc5e2['length']||_0x2b0cea<0x0||_0x2b0cea>=_0x3dc5e2[_0x3108c0(0x246)])return;const _0x3afff3=(this['_config']['entities']||[])[_0x3108c0(0x28e)]((_0x2d35bc,_0xd910bf)=>!!this[_0x3108c0(0x2c6)][_0x3108c0(0x287)+_0xd910bf]),[_0x2f7392]=_0x3dc5e2[_0x3108c0(0x1c7)](_0x2e0697,0x1);_0x3dc5e2[_0x3108c0(0x1c7)](_0x2b0cea,0x0,_0x2f7392);let _0x401eeb=_0x3afff3;if(_0x3afff3===_0x2e0697)_0x401eeb=_0x2b0cea;else{if(_0x2e0697<_0x3afff3&&_0x2b0cea>=_0x3afff3)_0x401eeb=_0x3afff3-0x1;else{if(_0x2e0697>_0x3afff3&&_0x2b0cea<=_0x3afff3)_0x401eeb=_0x3afff3+0x1;}}const _0x724f47={...this['_expanded']};Object[_0x3108c0(0x175)](_0x724f47)['filter'](_0xe0790f=>_0xe0790f['startsWith']('entity_'))[_0x3108c0(0x18e)](_0x3891d8=>delete _0x724f47[_0x3891d8]),_0x3dc5e2['forEach']((_0x2b3c57,_0x4b2274)=>_0x724f47[_0x3108c0(0x287)+_0x4b2274]=![]);if(_0x401eeb>=0x0&&_0x401eeb<_0x3dc5e2[_0x3108c0(0x246)])_0x724f47[_0x3108c0(0x287)+_0x401eeb]=!![];this[_0x3108c0(0x2c6)]=_0x724f47,this['_dispatchConfig'](_0x279f2c);}[_0x10d42d(0x220)](_0x45831d,_0x312722,_0x56606a){const _0xbc3bea=_0x10d42d,_0x3d7c82=JSON[_0xbc3bea(0x23a)](JSON[_0xbc3bea(0x2ab)](this[_0xbc3bea(0x179)])),_0x2d8353=_0x3d7c82['entities']?.[_0x45831d];if(!_0x2d8353)return;_0x56606a?(!_0x2d8353[_0x312722]||typeof _0x2d8353[_0x312722]!==_0xbc3bea(0x240))&&(_0x2d8353[_0x312722]=_0x312722===_0xbc3bea(0x267)?{'name':'Last\x20run','icon':_0xbc3bea(0x244),'position':_0xbc3bea(0x26d)}:{'name':_0xbc3bea(0x281),'icon':'mdi:update','position':'left'}):delete _0x2d8353[_0x312722],this[_0xbc3bea(0x2e5)](_0x3d7c82);}[_0x10d42d(0x2e1)](_0x25ed24,_0x3b0e12,_0x270d71,_0x4714b7){const _0x4677e2=_0x10d42d,_0x1c3f3d=JSON[_0x4677e2(0x23a)](JSON[_0x4677e2(0x2ab)](this[_0x4677e2(0x179)])),_0x5c8ed3=_0x1c3f3d[_0x4677e2(0x19b)]?.[_0x25ed24];if(!_0x5c8ed3)return;if(!_0x5c8ed3[_0x3b0e12]||typeof _0x5c8ed3[_0x3b0e12]!==_0x4677e2(0x240))_0x5c8ed3[_0x3b0e12]={};if(_0x4714b7===''||_0x4714b7===null||_0x4714b7===undefined)delete _0x5c8ed3[_0x3b0e12][_0x270d71];else _0x5c8ed3[_0x3b0e12][_0x270d71]=_0x4714b7;this[_0x4677e2(0x2e5)](_0x1c3f3d);}[_0x10d42d(0x2a9)](_0xeca7c8,_0x34ad02){const _0xd2442a=_0x10d42d;return haHtml`
      ${this[_0xd2442a(0x17a)](_0xeca7c8,_0x34ad02,_0xd2442a(0x267),_0xd2442a(0x249),_0xd2442a(0x244))}
      ${this[_0xd2442a(0x17a)](_0xeca7c8,_0x34ad02,_0xd2442a(0x1e8),_0xd2442a(0x28c),_0xd2442a(0x20b))}
    `;}[_0x10d42d(0x17a)](_0x1ee1c6,_0x411c3a,_0xbec6ac,_0x488980,_0x38b38d){const _0x299bd4=_0x10d42d,_0x3d377a=_0x1ee1c6[_0xbec6ac]&&typeof _0x1ee1c6[_0xbec6ac]===_0x299bd4(0x240)?_0x1ee1c6[_0xbec6ac]:null,_0x5f17e1=!!_0x3d377a,_0x2faeb9=_0x3d377a&&[_0x299bd4(0x26d),_0x299bd4(0x20c),'right'][_0x299bd4(0x1d6)](_0x3d377a[_0x299bd4(0x2cc)])?_0x3d377a[_0x299bd4(0x2cc)]:'left';return haHtml`
      <div class="run-slot ${_0x5f17e1?_0x299bd4(0x25f):''}">
        <div class="run-slot-head">
          <label class="run-slot-toggle">
            <ha-switch
              .checked=${_0x5f17e1}
              @change=${_0x392cfe=>this['_toggleRunSensor'](_0x411c3a,_0xbec6ac,_0x392cfe[_0x299bd4(0x1f0)][_0x299bd4(0x268)])}
            ></ha-switch>
            <span class="run-slot-title">${_0x488980}</span>
          </label>
          ${_0xbec6ac===_0x299bd4(0x267)?haHtml`
                <button
                  class="help-btn"
                  type="button"
                  title="How to create this sensor"
                  @click=${_0x2dacfc=>{const _0x355ceb=_0x299bd4;_0x2dacfc['stopPropagation'](),_0x2dacfc[_0x355ceb(0x299)](),this[_0x355ceb(0x2eb)]();}}
                >
                  <span class="help-q">?</span>
                </button>
              `:''}
        </div>
        ${_0x5f17e1?haHtml`
              <div class="run-slot-body">
                <div class="field">
                  <div class="field-label">Entity</div>
                  <ha-selector
                    .hass=${this['hass']}
                    .label=${undefined}
                    .selector=${{'entity':{}}}
                    .value=${_0x3d377a[_0x299bd4(0x2dd)]||''}
                    @value-changed=${_0x474f7b=>this[_0x299bd4(0x2e1)](_0x411c3a,_0xbec6ac,_0x299bd4(0x2dd),_0x474f7b[_0x299bd4(0x212)]?.[_0x299bd4(0x2e9)])}
                  ></ha-selector>
                </div>
                ${_0x3d377a['entity']?haHtml`
                      <div class="field">
                        <div class="field-label">Attribute ${this['_tip'](_0x299bd4(0x290))}</div>
                        <ha-selector
                          .hass=${this[_0x299bd4(0x202)]}
                          .label=${undefined}
                          .selector=${{'attribute':{'entity_id':_0x3d377a[_0x299bd4(0x2dd)]}}}
                          .value=${_0x3d377a['attribute']||''}
                          @value-changed=${_0x2c730e=>this[_0x299bd4(0x2e1)](_0x411c3a,_0xbec6ac,_0x299bd4(0x2ac),_0x2c730e[_0x299bd4(0x212)]?.[_0x299bd4(0x2e9)])}
                        ></ha-selector>
                      </div>
                    `:''}
                <div class="field">
                  <div class="field-label">Label (shown on card)</div>
                  <input
                    class="ed-input"
                    type="text"
                    placeholder=${_0xbec6ac===_0x299bd4(0x267)?'Last\x20run':_0x299bd4(0x281)}
                    .value=${_0x3d377a[_0x299bd4(0x22b)]||''}
                    @change=${_0x1ea6bb=>this[_0x299bd4(0x2e1)](_0x411c3a,_0xbec6ac,_0x299bd4(0x22b),_0x1ea6bb['target']['value'])}
                  />
                </div>
                <div class="grid-pair">
                  <div class="field">
                    <div class="field-label">Position</div>
                    <select
                      class="ed-input"
                      .value=${_0x2faeb9}
                      @change=${_0x4dce9e=>this[_0x299bd4(0x2e1)](_0x411c3a,_0xbec6ac,_0x299bd4(0x2cc),_0x4dce9e[_0x299bd4(0x1f0)][_0x299bd4(0x2e9)])}
                    >
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                  <div class="field">
                    <div class="field-label">Icon</div>
                    <ha-icon-picker
                      .hass=${this[_0x299bd4(0x202)]}
                      .label=${undefined}
                      .value=${_0x3d377a[_0x299bd4(0x1c9)]||''}
                      .placeholder=${_0x38b38d}
                      @value-changed=${_0xaf39fe=>this[_0x299bd4(0x2e1)](_0x411c3a,_0xbec6ac,_0x299bd4(0x1c9),_0xaf39fe['detail']?.[_0x299bd4(0x2e9)])}
                    ></ha-icon-picker>
                  </div>
                </div>
              </div>
            `:''}
      </div>
    `;}[_0x10d42d(0x2d0)](_0x5ab29b,_0x4dd433){const _0x28fe6b=_0x10d42d,_0x11ec83=JSON['parse'](JSON[_0x28fe6b(0x2ab)](this[_0x28fe6b(0x179)])),_0x12728b=_0x11ec83[_0x28fe6b(0x19b)]?.[_0x5ab29b];if(!_0x12728b)return;if(_0x4dd433){if(_0x12728b[_0x28fe6b(0x282)]===undefined||_0x12728b[_0x28fe6b(0x282)]===null)_0x12728b[_0x28fe6b(0x282)]='';}else delete _0x12728b[_0x28fe6b(0x282)];this[_0x28fe6b(0x2e5)](_0x11ec83);}[_0x10d42d(0x235)](_0x23d1e0,_0x3900a7){const _0x36293c=_0x10d42d,_0xa0e535=JSON[_0x36293c(0x23a)](JSON[_0x36293c(0x2ab)](this[_0x36293c(0x179)])),_0x28e86a=_0xa0e535[_0x36293c(0x19b)]?.[_0x23d1e0];if(!_0x28e86a)return;_0x28e86a[_0x36293c(0x282)]=_0x3900a7===null||_0x3900a7===undefined?'':_0x3900a7,this[_0x36293c(0x2e5)](_0xa0e535);}[_0x10d42d(0x1a7)](_0x29cb92,_0x166835){const _0x3db4ae=_0x10d42d,_0x378629=_0x29cb92['battery']!==undefined&&_0x29cb92['battery']!==null,_0x3f785d=typeof _0x29cb92[_0x3db4ae(0x282)]==='string'?_0x29cb92['battery']:'';return haHtml`
      <div class="run-slot ${_0x378629?_0x3db4ae(0x25f):''}">
        <label class="run-slot-head">
          <ha-switch
            .checked=${_0x378629}
            @change=${_0x3c4e5a=>this[_0x3db4ae(0x2d0)](_0x166835,_0x3c4e5a[_0x3db4ae(0x1f0)][_0x3db4ae(0x268)])}
          ></ha-switch>
          <span class="run-slot-title">Battery</span>
        </label>
        ${_0x378629?haHtml`
              <div class="run-slot-body">
                <div class="field">
                  <div class="field-label">Entity</div>
                  <ha-selector
                    .hass=${this[_0x3db4ae(0x202)]}
                    .label=${undefined}
                    .selector=${{'entity':{}}}
                    .value=${_0x3f785d}
                    @value-changed=${_0x20eb9c=>this['_updateBattery'](_0x166835,_0x20eb9c[_0x3db4ae(0x212)]?.['value'])}
                  ></ha-selector>
                </div>
              </div>
            `:''}
      </div>
    `;}['_renderEntityPicker'](_0x6a10f7,_0x223122,_0x5ef3f1,_0x29e6bc,_0x1f3b72=''){const _0x3bc2d8=_0x10d42d,_0x4eafe1=Array[_0x3bc2d8(0x1a2)](_0x29e6bc)?_0x29e6bc:undefined,_0x34526b=_0x1f3b72?_0x3bc2d8(0x1b3)+_0x1f3b72:'',_0x4a4500=_0x1f3b72?_0x3bc2d8(0x17f)+_0x1f3b72:'';return haHtml`
      <div class="field${_0x34526b}">
        <div class="field-label${_0x4a4500}">${_0x6a10f7}</div>
        <div class="picker-wrap">
          <ha-selector
            .hass=${this[_0x3bc2d8(0x202)]}
            .label=${undefined}
            .selector=${_0x4eafe1?{'entity':{'domain':_0x4eafe1}}:{'entity':{}}}
            .value=${_0x223122||''}
            .configValue=${_0x5ef3f1}
            @value-changed=${this['_valueChanged']}
          ></ha-selector>
        </div>
      </div>
    `;}[_0x10d42d(0x1e6)](){}['_getBuiltInDefaults'](_0x1b68bc){const _0x23b143=_0x10d42d,_0x372820={'colors':{'on':_0x23b143(0x1d1),'ready':'#4CAF50','unavailable':_0x23b143(0x184),'button_start':_0x23b143(0x2e4),'button_stop':_0x23b143(0x1d1),'icon':_0x23b143(0x19f),'progress_fill':_0x23b143(0x1d1)},'icons':{'start':_0x23b143(0x1fd),'stop':_0x23b143(0x28a)},'labels':{'status_on':'Watering','status_ready':'Ready','status_unavailable':'Unavailable','time_format_zero':_0x23b143(0x218),'time_unit_hours':'h','time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':'Set\x20duration','edit_duration_hours':_0x23b143(0x262),'edit_duration_minutes':_0x23b143(0x1ec),'edit_duration_seconds':_0x23b143(0x2b7),'edit_duration_apply':_0x23b143(0x1bc),'edit_duration_reset':'Reset\x20to\x20default','edit_duration_cancel':_0x23b143(0x20f),'edit_duration_tooltip':_0x23b143(0x1c0),'start_confirm_body':_0x23b143(0x2b5),'start_confirm_ok':'Start\x20anyway','start_confirm_cancel':_0x23b143(0x20f)}};return _0x372820[_0x1b68bc];}[_0x10d42d(0x2ae)](_0x17fc10){const _0x58044a=_0x10d42d;return{...this['_getBuiltInDefaults'](_0x17fc10),...this[_0x58044a(0x179)]?.[_0x17fc10]||{}};}[_0x10d42d(0x229)](_0x236ccd){const _0x10f57a=_0x10d42d,_0x28ed73=JSON[_0x10f57a(0x23a)](JSON[_0x10f57a(0x2ab)](this[_0x10f57a(0x179)])),_0x4cbce3=_0x236ccd[_0x10f57a(0x2c8)]('.');let _0x11b3cd=_0x28ed73;for(let _0x11f829=0x0;_0x11f829<_0x4cbce3[_0x10f57a(0x246)]-0x1;_0x11f829++){_0x11b3cd=_0x11b3cd?.[_0x4cbce3[_0x11f829]];if(!_0x11b3cd)break;}if(_0x11b3cd&&typeof _0x11b3cd===_0x10f57a(0x240))delete _0x11b3cd[_0x4cbce3[_0x4cbce3[_0x10f57a(0x246)]-0x1]];this['_dispatchConfig'](_0x28ed73);}[_0x10d42d(0x2d6)](_0x59b239){return haHtml`<span class="tip-wrap" tabindex="-1">
      <svg class="tip-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      <span class="tip-box">${_0x59b239}</span>
    </span>`;}[_0x10d42d(0x164)](_0x559b8,_0x48b318,_0x49c04a){const _0x538f9a=_0x10d42d,_0x33479a=_0x559b8||{},_0x33c924=_0x49c04a||this[_0x538f9a(0x24c)](_0x538f9a(0x2ec));return haHtml`
      <div class="color-grid">
        ${Object[_0x538f9a(0x175)](_0x33c924)['map'](_0x5f2af6=>{const _0x3db00b=_0x538f9a,_0x28dab6=_0x5f2af6[_0x3db00b(0x2d5)](/_/g,'\x20'),_0x5d062a=_0x33479a[_0x5f2af6]||_0x33c924[_0x5f2af6]||'#000000';return haHtml`
            <div class="color-tile">
              <span class="color-name">${_0x28dab6}</span>
              <input
                class="color-swatch"
                type="color"
                .value="${_0x5d062a}"
                @input=${_0x20a6b3=>this['_valueChanged']({'target':{'configValue':_0x48b318+'.'+_0x5f2af6,'value':_0x20a6b3[_0x3db00b(0x1f0)]['value']},'detail':{'value':_0x20a6b3[_0x3db00b(0x1f0)][_0x3db00b(0x2e9)]}})}
              />
              <input
                class="ed-input color-hex"
                type="text"
                .value="${_0x33479a[_0x5f2af6]||''}"
                placeholder="${_0x33c924[_0x5f2af6]}"
                .configValue="${_0x48b318}.${_0x5f2af6}"
                @change=${this[_0x3db00b(0x1d4)]}
              />
            </div>
          `;})}
      </div>
    `;}[_0x10d42d(0x18c)](_0x54a226,_0x4aa65f,_0x2b310b){const _0x41ec09=_0x10d42d,_0x1c26b6=_0x54a226||{},_0x3129cc=_0x2b310b||this[_0x41ec09(0x24c)](_0x41ec09(0x259));return haHtml`
      <div class="grid grid-2">
        ${Object['keys'](_0x3129cc)[_0x41ec09(0x257)](_0x586cae=>haHtml`
            <div class="field">
              <ha-icon-picker
                label="${_0x586cae[_0x41ec09(0x22d)](0x0)[_0x41ec09(0x2c2)]()+_0x586cae[_0x41ec09(0x1de)](0x1)} Icon"
                .value="${_0x1c26b6[_0x586cae]||''}"
                .placeholder="${_0x3129cc[_0x586cae]}"
                .configValue="${_0x4aa65f}.${_0x586cae}"
                @value-changed=${this[_0x41ec09(0x1d4)]}
              ></ha-icon-picker>
            </div>
          `)}
      </div>
    `;}[_0x10d42d(0x1f2)](_0x4efe2c,_0x483c83,_0x54558e){const _0x46d6b8=_0x10d42d,_0x183500=new Set(['edit_duration_title',_0x46d6b8(0x1da),_0x46d6b8(0x1bb),_0x46d6b8(0x22e),'edit_duration_apply',_0x46d6b8(0x2db),_0x46d6b8(0x27e),_0x46d6b8(0x2ad),_0x46d6b8(0x190),_0x46d6b8(0x17d),_0x46d6b8(0x186)]),_0x1d03f7=_0x4efe2c||{},_0x35035d=_0x54558e||this['_getBuiltInDefaults'](_0x46d6b8(0x27f)),_0x5cb035=Object[_0x46d6b8(0x175)](_0x35035d)[_0x46d6b8(0x241)](_0x5b0d55=>!_0x183500['has'](_0x5b0d55));return haHtml`
      <div class="ovr-grid">
        ${_0x5cb035['map'](_0x169933=>haHtml`
            <label class="ovr-field">
              <span class="ovr-label">${_0x169933[_0x46d6b8(0x2d5)](/_/g,'\x20')}</span>
              <input
                class="ed-input"
                type="text"
                .value="${_0x1d03f7[_0x169933]||''}"
                placeholder="${_0x35035d[_0x169933]}"
                .configValue="${_0x483c83}.${_0x169933}"
                @change=${this[_0x46d6b8(0x1d4)]}
              />
            </label>
          `)}
      </div>
    `;}['_designColorField'](_0x10d0e9,_0x3b5b46,_0x56086a,_0x12b463,_0x333269){const _0x518e13=_0x10d42d,_0x541581=_0x10d0e9[_0x518e13(0x2ec)]||{},_0x3a3084=this[_0x518e13(0x2ae)](_0x518e13(0x2ec)),_0x45c1ab=_0x541581[_0x56086a]||_0x3a3084[_0x56086a]||'#000000';return haHtml`
      <div class="field">
        <div class="field-label">${_0x12b463}${_0x333269?this[_0x518e13(0x2d6)](_0x333269):''}</div>
        <div class="cfield-row">
          <input
            class="color-swatch"
            type="color"
            .value="${_0x45c1ab}"
            @input=${_0xddd332=>this[_0x518e13(0x1d4)]({'target':{'configValue':_0x3b5b46+_0x518e13(0x28d)+_0x56086a,'value':_0xddd332['target'][_0x518e13(0x2e9)]},'detail':{'value':_0xddd332['target'][_0x518e13(0x2e9)]}})}
          />
          <input
            class="ed-input color-hex"
            type="text"
            .value="${_0x541581[_0x56086a]||''}"
            placeholder="${_0x3a3084[_0x56086a]}"
            .configValue="${_0x3b5b46}.colors.${_0x56086a}"
            @change=${this[_0x518e13(0x1d4)]}
          />
        </div>
      </div>
    `;}['_designIconField'](_0x233bc1,_0x2ef0c0,_0x746660,_0x1236cc){const _0x6d3e03=_0x10d42d,_0x231457=_0x233bc1['icons']||{},_0x3895b2=this['_getEffectiveGlobal']('icons');return haHtml`
      <div class="field">
        <div class="field-label">${_0x1236cc}</div>
        <ha-icon-picker
          .hass=${this[_0x6d3e03(0x202)]}
          .label=${undefined}
          .value="${_0x231457[_0x746660]||''}"
          .placeholder="${_0x3895b2[_0x746660]}"
          .configValue="${_0x2ef0c0}.icons.${_0x746660}"
          @value-changed=${this[_0x6d3e03(0x1d4)]}
        ></ha-icon-picker>
      </div>
    `;}['_designLabelField'](_0x5ae0eb,_0x2367d2,_0x55cb53,_0xde3a0d,_0x342dd6){const _0x13339c=_0x10d42d,_0x1a984c=_0x5ae0eb[_0x13339c(0x27f)]||{},_0x5549b8=this[_0x13339c(0x2ae)](_0x13339c(0x27f));return haHtml`
      <div class="field">
        <div class="field-label">${_0xde3a0d}${_0x342dd6?this[_0x13339c(0x2d6)](_0x342dd6):''}</div>
        <input
          class="ed-input"
          type="text"
          .value="${_0x1a984c[_0x55cb53]||''}"
          placeholder="${_0x5549b8[_0x55cb53]}"
          .configValue="${_0x2367d2}.labels.${_0x55cb53}"
          @change=${this[_0x13339c(0x1d4)]}
        />
      </div>
    `;}['_resetEntityDesign'](_0x17dc37){const _0x521948=_0x10d42d,_0x142a7c=JSON[_0x521948(0x23a)](JSON[_0x521948(0x2ab)](this[_0x521948(0x179)])),_0x39f7f1=_0x17dc37[_0x521948(0x2c8)]('.');let _0x2039b8=_0x142a7c;for(const _0x5ea257 of _0x39f7f1){_0x2039b8=_0x2039b8&&_0x2039b8[_0x5ea257];if(!_0x2039b8)break;}_0x2039b8&&typeof _0x2039b8===_0x521948(0x240)&&(delete _0x2039b8[_0x521948(0x2ec)],delete _0x2039b8[_0x521948(0x259)],delete _0x2039b8[_0x521948(0x27f)]),this[_0x521948(0x2e5)](_0x142a7c);}[_0x10d42d(0x193)](){const _0x1c9726=_0x10d42d;if(!this[_0x1c9726(0x1fb)])return'';const _0x5c572f=_0x1c9726(0x23e);return haHtml`
      <div class="shelp-modal" @click=${()=>this['_closeSensorHelp']()}>
        <div class="shelp-card" @click=${_0x20c19c=>_0x20c19c[_0x1c9726(0x1f4)]()}>
          <div class="shelp-head">
            <div class="help-title">How to create a "last run" sensor</div>
            <button class="shelp-x" type="button" title="Close" @click=${()=>this['_closeSensorHelp']()}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="help-text">
            To show a "last run" time on the card, create a template sensor that updates when the
            timer finishes (works for every domain) and/or when the device turns off. The example
            below uses both a <code>timer.finished</code> event and a switch turning off - change the
            entity ids to your own, and adapt the second trigger for non-switch domains.
          </div>
          <pre class="code"><code>${_0x5c572f}</code></pre>
          <div class="shelp-actions">
            <button class="shelp-btn" type="button" @click=${_0x3773fb=>this[_0x1c9726(0x1c4)](_0x3773fb,_0x5c572f)}>Copy YAML</button>
            <button class="shelp-btn shelp-btn-primary" type="button" @click=${()=>this['_closeSensorHelp']()}>Close</button>
          </div>
        </div>
      </div>
    `;}['_copyHelpYaml'](_0x5b3656,_0x3687bf){const _0x8c8b19=_0x10d42d,_0x117ae0=_0x5b3656?.[_0x8c8b19(0x227)],_0xc7f9b7=_0xa7d1a3=>{const _0x42b837=_0x8c8b19;if(!_0x117ae0)return;const _0x3923f8=_0x117ae0[_0x42b837(0x266)];_0x117ae0['textContent']=_0xa7d1a3,setTimeout(()=>{_0x117ae0['textContent']=_0x3923f8;},0x578);};try{navigator[_0x8c8b19(0x2a0)]&&navigator[_0x8c8b19(0x2a0)][_0x8c8b19(0x1f3)]?navigator['clipboard'][_0x8c8b19(0x1f3)](_0x3687bf)[_0x8c8b19(0x228)](()=>_0xc7f9b7(_0x8c8b19(0x2d2)),()=>_0xc7f9b7('Copy\x20failed')):_0xc7f9b7(_0x8c8b19(0x1cd));}catch(_0x3db342){_0xc7f9b7(_0x8c8b19(0x1cd));}}[_0x10d42d(0x18d)](){const _0xb51607=_0x10d42d;if(!this[_0xb51607(0x202)]||!this[_0xb51607(0x179)])return haHtml``;const _0x55baf6=!this[_0xb51607(0x2c6)][_0xb51607(0x19b)];return haHtml`
      <div class="editor">
        <!-- CARD TITLE -->
        <div class="field field-inline">
          <div class="field-label">CARD HEADER</div>
          <input
            class="ed-input"
            type="text"
            .value="${this['_config'][_0xb51607(0x1ff)]||''}"
            .configValue=${'title'}
            @change=${this[_0xb51607(0x1d4)]}
          />
        </div>

        <!-- ENTITIES PANEL -->
        <div class="panel ${_0x55baf6?'':_0xb51607(0x25f)}">
          <div class="panel-header" @click=${()=>this[_0xb51607(0x1a5)]('entities')}>
            <div class="panel-icon ent-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
            <div class="panel-text">
              <span class="panel-title">Entities <span class="badge">${(this[_0xb51607(0x179)][_0xb51607(0x19b)]||[])[_0xb51607(0x246)]}</span></span>
              <span class="panel-subtitle">Drag & drop to reorder. Click entity to expand.</span>
            </div>
            <span class="panel-chevron">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </div>

          ${_0x55baf6?'':haHtml`
            <div class="panel-body entity-list">
              ${(this[_0xb51607(0x179)][_0xb51607(0x19b)]||[])[_0xb51607(0x257)]((_0xa92da5,_0x2840ae)=>this['_renderEntitySection'](_0xa92da5,_0x2840ae))}
              <button class="add-btn" @click=${this[_0xb51607(0x210)]}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add Entity
              </button>
            </div>
          `}
        </div>
      </div>

      ${this[_0xb51607(0x193)]()}
    `;}[_0x10d42d(0x2e7)](_0xc6c809,_0x139ded){const _0x5a38dd=_0x10d42d,_0x5707b3=Math[_0x5a38dd(0x192)](_0x139ded*137.508%0x168);return _0x5a38dd(0x1aa)+_0x5707b3+_0x5a38dd(0x293);}[_0x10d42d(0x1ae)](_0x11a4f6,_0x3e5efe){const _0x17f436=_0x10d42d,_0x4ed576=_0x17f436(0x204)+_0x3e5efe,_0x45f84b=!!this[_0x17f436(0x2c6)][_0x17f436(0x287)+_0x3e5efe],_0xda6a2=_0x11a4f6[_0x17f436(0x22b)]?.[_0x17f436(0x26e)]()?_0x11a4f6[_0x17f436(0x22b)]:this[_0x17f436(0x202)]?.[_0x17f436(0x1e7)]?.[_0x11a4f6[_0x17f436(0x213)]]?.[_0x17f436(0x25a)]?.['friendly_name']||_0x17f436(0x2ca)+(_0x3e5efe+0x1),_0x493390=this['_dragOverIndex']===_0x3e5efe,_0x323888=this[_0x17f436(0x199)][_0x3e5efe]||_0x17f436(0x2dd),_0x56cfb3=this[_0x17f436(0x2e7)](_0x11a4f6,_0x3e5efe);return haHtml`
      <div
        class="ec ${_0x45f84b?_0x17f436(0x25f):''} ${_0x493390?_0x17f436(0x2b1):''}"
        style="--ec-accent: ${_0x56cfb3};"
        data-entity-index="${_0x3e5efe}"
        @dragover=${_0x4ba426=>this[_0x17f436(0x165)](_0x3e5efe,_0x4ba426)}
        @drop=${_0x53df59=>this[_0x17f436(0x236)](_0x3e5efe,_0x53df59)}
        @dragleave=${_0x2f9035=>this['_onDragLeave'](_0x3e5efe,_0x2f9035)}
      >
        <div class="eh" @click=${()=>this[_0x17f436(0x17b)](_0x3e5efe)}>
          <div class="ed"
            title="Drag to reorder"
            draggable="true"
            @dragstart=${_0x442148=>this['_onDragStart'](_0x3e5efe,_0x442148)}
            @click=${_0x18b079=>_0x18b079[_0x17f436(0x1f4)]()}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>
          </div>
          <span class="en-dot" style="background:${_0x56cfb3}"></span>
          <div class="ei">
            <span class="en">${_0xda6a2}</span>
          </div>
          <div class="ea">
            <button class="etb" @click=${_0x4cbcd5=>{const _0x500397=_0x17f436;_0x4cbcd5[_0x500397(0x1f4)](),this[_0x500397(0x17b)](_0x3e5efe);}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <button class="edup" title="Duplicate" @click=${_0xc61b61=>{const _0x2b8db6=_0x17f436;_0xc61b61[_0x2b8db6(0x1f4)](),this[_0x2b8db6(0x1bd)](_0x3e5efe);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
            <button class="edb" @click=${_0x54011a=>{const _0x43df2b=_0x17f436;_0x54011a[_0x43df2b(0x1f4)](),this[_0x43df2b(0x294)](_0x3e5efe);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>

        ${_0x45f84b?haHtml`
          <div class="eb">
            <div class="tabs">
              <button class="tb ${_0x323888===_0x17f436(0x2dd)?_0x17f436(0x191):''}" @click=${()=>{const _0xcb15f0=_0x17f436;this['_entityTabs']={...this[_0xcb15f0(0x199)],[_0x3e5efe]:_0xcb15f0(0x2dd)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                Entity
              </button>
              <button class="tb ${_0x323888===_0x17f436(0x1c6)?_0x17f436(0x191):''}" @click=${()=>{const _0x1f329d=_0x17f436;this[_0x1f329d(0x199)]={...this['_entityTabs'],[_0x3e5efe]:_0x1f329d(0x1c6)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M9 2h6"/></svg>
                Timer
              </button>
              <button class="tb ${_0x323888===_0x17f436(0x2b4)?_0x17f436(0x191):''}" @click=${()=>{const _0x1da3a8=_0x17f436;this['_entityTabs']={...this[_0x1da3a8(0x199)],[_0x3e5efe]:_0x1da3a8(0x2b4)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Sensors
              </button>
              <button class="tb ${_0x323888===_0x17f436(0x1e3)?_0x17f436(0x191):''}" @click=${()=>{const _0xfa9642=_0x17f436;this['_entityTabs']={...this[_0xfa9642(0x199)],[_0x3e5efe]:_0xfa9642(0x1e3)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                Design
              </button>
            </div>

            <!-- ENTITY TAB -->
            <div class="tc ${_0x323888===_0x17f436(0x2dd)?'active':''}">
              <div class="fg">
                <div class="grid grid-2">
                  <div class="field">
                    <div class="field-label">Display Name ${this[_0x17f436(0x2d6)](_0x17f436(0x1a4))}</div>
                    <input
                      class="ed-input"
                      type="text"
                      .value="${_0x11a4f6[_0x17f436(0x22b)]||''}"
                      .configValue="${_0x4ed576}.name"
                      @change=${this[_0x17f436(0x1d4)]}
                    />
                  </div>
                </div>
                <div class="grid grid-2">
                  ${this[_0x17f436(0x1fc)](haHtml`Control entity ${this[_0x17f436(0x2d6)](_0x17f436(0x173))}`,_0x11a4f6[_0x17f436(0x213)]||'',_0x4ed576+_0x17f436(0x2da),[_0x17f436(0x213),_0x17f436(0x27d),'cover',_0x17f436(0x216),_0x17f436(0x271),'media_player','input_boolean',_0x17f436(0x2af)],_0x17f436(0x1f6))}
                </div>

              </div>
            </div>

            <!-- TIMER TAB -->
            <div class="tc ${_0x323888===_0x17f436(0x1c6)?'active':''}">
              <div class="fg">
                <div class="grid grid-2">
                  ${this[_0x17f436(0x1fc)](_0x17f436(0x18b),_0x11a4f6[_0x17f436(0x1c6)]||'',_0x4ed576+_0x17f436(0x1f1),['timer'],_0x17f436(0x1c6))}
                </div>
                <div class="grid grid-2">
                  <div class="field">
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${_0x11a4f6[_0x17f436(0x1c8)]!==![]}"
                            .configValue="${_0x4ed576}.timer_and_entity_connected_via_automation"
                            @change=${this[_0x17f436(0x1d4)]}
                          ></ha-switch>
                        </div>
                        <div class="sl">
                          <span class="sn">Timer \u2194 Entity linked via automation ${this[_0x17f436(0x2d6)]('If\x20enabled,\x20card\x20only\x20starts/stops\x20the\x20timer;\x20your\x20automation\x20controls\x20the\x20entity.\x20If\x20disabled,\x20card\x20turns\x20entity\x20on/off\x20directly.')}</span>
                        </div>
                      </label>
                    </div>
                    ${_0x11a4f6[_0x17f436(0x1c8)]===![]?haHtml`<div class="inline-warn">
                          <ha-icon icon="mdi:alert-outline"></ha-icon>
                          <span>Direct control runs in your browser \u2014 the device won't switch off if no dashboard is open when the timer ends. For unattended use, keep this on and add a <code>timer.finished</code> automation (see the Help panel).</span>
                        </div>`:''}
                  </div>
                </div>
                <div class="grid grid-2">
                  <div class="field field--editable-duration">
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${!!_0x11a4f6[_0x17f436(0x226)]}"
                            .configValue="${_0x4ed576}.editable_duration"
                            @change=${this[_0x17f436(0x1d4)]}
                          ></ha-switch>
                        </div>
                        <div class="sl">
                          <span class="sn">Allow Duration Editing ${this[_0x17f436(0x2d6)](_0x17f436(0x19d))}</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="grid grid-2">
                  <div class="field field-inline field-flush">
                    <div class="field-label">Default Duration Override ${this['_tip'](_0x17f436(0x2c0))}</div>
                    <input
                      class="ed-input"
                      type="text"
                      placeholder="e.g. 00:10:00"
                      .value="${_0x11a4f6[_0x17f436(0x19a)]??''}"
                      .configValue="${_0x4ed576}.duration"
                      @change=${this['_valueChanged']}
                    />
                  </div>
                </div>


                <div class="fgl" style="margin-top:14px">Time format</div>
                <div class="grid grid-2">
                  ${this[_0x17f436(0x1c1)](_0x11a4f6,_0x4ed576,'time_format_zero',_0x17f436(0x26a))}
                </div>
                <div class="grid grid-triple">
                  ${this[_0x17f436(0x1c1)](_0x11a4f6,_0x4ed576,_0x17f436(0x276),_0x17f436(0x258))}
                  ${this[_0x17f436(0x1c1)](_0x11a4f6,_0x4ed576,_0x17f436(0x1db),_0x17f436(0x1d8))}
                  ${this[_0x17f436(0x1c1)](_0x11a4f6,_0x4ed576,_0x17f436(0x16a),_0x17f436(0x264))}
                </div>
              </div>
            </div>

            <!-- SENSORS TAB -->
            <div class="tc ${_0x323888===_0x17f436(0x2b4)?_0x17f436(0x191):''}">
              <div class="fg">
                ${this['_renderSensorsEditor'](_0x11a4f6,_0x3e5efe)}
                ${this[_0x17f436(0x1a7)](_0x11a4f6,_0x3e5efe)}
              </div>
            </div>

            <!-- DESIGN TAB -->
            <div class="tc ${_0x323888===_0x17f436(0x1e3)?_0x17f436(0x191):''}">
              <div class="fg">
                <div class="fgl-row">
                  <button class="reset-btn" @click=${()=>this[_0x17f436(0x1a6)](_0x4ed576)}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="grid grid-2">
                  <div class="field">
                    <div class="field-label">Button Position ${this[_0x17f436(0x2d6)](_0x17f436(0x1d7))}</div>
                    <div class="picker-wrap">
                      <ha-selector
                        .hass=${this[_0x17f436(0x202)]}
                        .label=${_0x17f436(0x1eb)}
                        .selector=${{'select':{'options':[{'value':_0x17f436(0x26d),'label':'Left'},{'value':_0x17f436(0x2d9),'label':'Right'}],'mode':_0x17f436(0x234)}}}
                        .value=${_0x11a4f6[_0x17f436(0x24d)]===_0x17f436(0x2d9)?_0x17f436(0x2d9):'left'}
                        .configValue="${_0x4ed576}.button_position"
                        @value-changed=${this[_0x17f436(0x1d4)]}
                      ></ha-selector>
                    </div>
                  </div>
                </div>

                <div class="grid grid-pair">
                  ${this[_0x17f436(0x2cf)](_0x11a4f6,_0x4ed576,'start','Start\x20icon')}
                  ${this[_0x17f436(0x22a)](_0x11a4f6,_0x4ed576,'button_start',_0x17f436(0x1ab))}
                </div>
                <div class="grid grid-pair">
                  ${this[_0x17f436(0x2cf)](_0x11a4f6,_0x4ed576,_0x17f436(0x279),_0x17f436(0x16f))}
                  ${this['_designColorField'](_0x11a4f6,_0x4ed576,_0x17f436(0x24a),'Stop\x20button\x20color')}
                </div>
                <div class="grid grid-pair">
                  ${this[_0x17f436(0x22a)](_0x11a4f6,_0x4ed576,'icon',_0x17f436(0x239))}
                  ${this['_designColorField'](_0x11a4f6,_0x4ed576,'progress_fill','Progress\x20bar\x20fill')}
                </div>

                <div class="fgl" style="margin-top:14px">Status labels &amp; colors</div>
                <div class="grid grid-pair">
                  ${this[_0x17f436(0x1c1)](_0x11a4f6,_0x4ed576,_0x17f436(0x2a7),_0x17f436(0x194))}
                  ${this[_0x17f436(0x22a)](_0x11a4f6,_0x4ed576,'on','Active\x20color')}
                </div>
                <div class="grid grid-pair">
                  ${this[_0x17f436(0x1c1)](_0x11a4f6,_0x4ed576,_0x17f436(0x26b),_0x17f436(0x261))}
                  ${this['_designColorField'](_0x11a4f6,_0x4ed576,_0x17f436(0x2c9),_0x17f436(0x285))}
                </div>
                <div class="grid grid-pair">
                  ${this[_0x17f436(0x1c1)](_0x11a4f6,_0x4ed576,_0x17f436(0x29c),_0x17f436(0x284))}
                  ${this[_0x17f436(0x22a)](_0x11a4f6,_0x4ed576,_0x17f436(0x25e),'Unavailable\x20color')}
                </div>
              </div>
            </div>
          </div>
        `:''}
      </div>
    `;}static get[_0x10d42d(0x270)](){return haCss`
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
      .panel-subtitle { font-size: 11.5px; color: var(--ts); }

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
        gap: 5px; padding: 9px 8px;
        border: none; background: none; border-radius: 8px;
        font-size: 11.5px; font-weight: 600; color: var(--ts);
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
        font-size: 12.5px; font-weight: 600;
        text-transform: uppercase; letter-spacing: .05em;
        color: var(--tx); margin-bottom: 12px; padding: 9px 0;
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
      .grid-triple { grid-template-columns: 1fr 1fr 1fr; }

      /* ===== Field ===== */
      .field { display: grid; gap: 2px; min-width: 0; }
      .field.field-inline { grid-template-columns: auto 1fr; align-items: center; gap: 10px; padding-left: 15px }
      .field.field-inline .field-label { padding-top: 0; white-space: nowrap; }
      .field.field-inline.field-flush { padding-left: 0; }

      .label-row--sensor .help-btn { margin-top: 20px; }

      /* ---- Sensors (multi) editor ---- */
      .run-slot {
        background: var(--sf);
        border: 1px solid var(--bd);
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 10px 12px;
      }
      .run-slot.open { border-color: rgba(var(--acr), .35); }
      .run-slot-head {
        align-items: center;
        display: inline-flex;
        gap: 10px;
      }
      .run-slot-toggle {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex: 1;
        gap: 10px;
        min-width: 0;
        user-select: none;
      }
      .run-slot-title { font-size: 13px; font-weight: 600; }
      .run-slot-body { display: grid; gap: 8px; margin-top: 10px; }

      .field-label {
        font-size: 12.5px; font-weight: 500; color: var(--ts);
        margin: 2px 0; letter-spacing: .01em;
        display: flex; align-items: center; gap: 3px; padding-top: 14px
      }
      .hint { font-size: 11.5px; color: var(--ts); line-height: 1.5; opacity: .85; }
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
      .cfield-row { display: flex; align-items: center; gap: 6px; }
      .cfield-row .color-swatch { width: 48px; height: 32px; flex-shrink: 0; }
      .cfield-row .color-hex { flex: 1; min-width: 0; }

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
        border: 1px solid var(--ec-accent, var(--bd)); border-radius: var(--rd);
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
      .en-dot {
        flex: 0 0 auto;
        width: 10px; height: 10px; border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(255,255,255,.18), 0 1px 2px rgba(0,0,0,.25);
      }
      .en {
        font-weight: 600; font-size: 13px;
        text-transform: uppercase; letter-spacing: .03em;
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
        padding: 0; line-height: 1; flex: 0 0 auto;
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

      /* ===== Sensor-help modal ===== */
      .shelp-modal {
        position: fixed; inset: 0; z-index: 9999;
        display: flex; align-items: center; justify-content: center;
        padding: 16px; background: rgba(0, 0, 0, .55);
      }
      .shelp-card {
        width: 100%; max-width: 560px; box-sizing: border-box;
        background: var(--bg); border: 1px solid var(--bd); border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, .45);
        padding: 18px 20px; display: grid; gap: 12px;
      }
      .shelp-head {
        display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
      }
      .shelp-x {
        flex: 0 0 auto; width: 30px; height: 30px; border-radius: 8px;
        border: none; background: none; color: var(--ts); cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        transition: background .15s, color .15s;
      }
      .shelp-x:hover { background: var(--sf); color: var(--tx); }
      .shelp-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 2px; }
      .shelp-btn {
        border: 1px solid var(--bd); background: var(--sf); color: var(--tx);
        border-radius: 10px; padding: 8px 14px; min-width: 96px;
        font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all .15s;
      }
      .shelp-btn:hover { border-color: var(--ac); background: rgba(var(--acr), .08); }
      .shelp-btn-primary { background: var(--ac); border-color: var(--ac); color: #fff; }
      .shelp-btn-primary:hover { filter: brightness(1.06); }

      /* ===== Responsive ===== */
      @media (max-width: 500px) {
        .grid-2 { grid-template-columns: 1fr; }
        .grid-3 { grid-template-columns: 1fr 1fr; }
        .grid-pair { grid-template-columns: 1fr; }
        .color-grid { grid-template-columns: repeat(2, 1fr); }
        .tabs { flex-wrap: wrap; }
        .tb { font-size: 10px; padding: 6px 6px; }
      }
    `;}}customElements[_0x10d42d(0x250)]('switch-and-timer-bar-card-editor',SwitchAndTimerBarCardEditor),window['customCards']=window[_0x10d42d(0x198)]||[];!window[_0x10d42d(0x198)]['some'](_0x11ba19=>_0x11ba19[_0x10d42d(0x255)]===_0x10d42d(0x295))&&window['customCards'][_0x10d42d(0x251)]({'type':_0x10d42d(0x295),'name':_0x10d42d(0x2b8),'description':_0x10d42d(0x2b8),'preview':!![]});

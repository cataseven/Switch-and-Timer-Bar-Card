function _0x2563(_0x3b08fa,_0x399f5b){_0x3b08fa=_0x3b08fa-0x1ce;const _0x59e249=_0x59e2();let _0x25630e=_0x59e249[_0x3b08fa];return _0x25630e;}const _0xdd16b5=_0x2563;(function(_0x2f2057,_0x3b95b9){const _0x2016f9=_0x2563,_0x4e16f8=_0x2f2057();while(!![]){try{const _0x161126=parseInt(_0x2016f9(0x2d9))/0x1*(-parseInt(_0x2016f9(0x1e4))/0x2)+parseInt(_0x2016f9(0x2a5))/0x3*(parseInt(_0x2016f9(0x250))/0x4)+parseInt(_0x2016f9(0x27a))/0x5*(parseInt(_0x2016f9(0x2de))/0x6)+parseInt(_0x2016f9(0x269))/0x7*(-parseInt(_0x2016f9(0x1d9))/0x8)+parseInt(_0x2016f9(0x1cf))/0x9+-parseInt(_0x2016f9(0x236))/0xa+parseInt(_0x2016f9(0x294))/0xb*(-parseInt(_0x2016f9(0x23b))/0xc);if(_0x161126===_0x3b95b9)break;else _0x4e16f8['push'](_0x4e16f8['shift']());}catch(_0x4742c8){_0x4e16f8['push'](_0x4e16f8['shift']());}}}(_0x59e2,0x88f92));let HaLitBase,haHtml,haCss;{const base=window[_0xdd16b5(0x26b)]||(customElements[_0xdd16b5(0x2c8)](_0xdd16b5(0x279))?Object[_0xdd16b5(0x243)](customElements['get'](_0xdd16b5(0x279))):null);if(!base||!base[_0xdd16b5(0x1e3)]?.[_0xdd16b5(0x2f0)]||!base[_0xdd16b5(0x1e3)]?.['css']){const msg='switch-and-timer-bar-card:\x20Lit\x20not\x20found.\x20This\x20card\x20must\x20run\x20inside\x20Home\x20Assistant.';console[_0xdd16b5(0x248)](msg),HaLitBase=class{},haHtml=()=>'',haCss=()=>'';}else HaLitBase=base,haHtml=base['prototype'][_0xdd16b5(0x2f0)],haCss=base[_0xdd16b5(0x1e3)]['css'];}class SwitchAndTimerBarCard extends HaLitBase{static get[_0xdd16b5(0x1ef)](){return{'hass':{},'_config':{},'_timer':{},'_durationEditor':{}};}static get['DEFAULTS'](){const _0x41d83e=_0xdd16b5;return{'button_position':_0x41d83e(0x2ee),'colors':{'on':_0x41d83e(0x1e9),'ready':'#4CAF50','unavailable':_0x41d83e(0x230),'button_start':_0x41d83e(0x21d),'button_stop':_0x41d83e(0x1e9),'icon':_0x41d83e(0x257),'progress_fill':_0x41d83e(0x1e9)},'icons':{'start':_0x41d83e(0x2b5),'stop':_0x41d83e(0x2e5)},'labels':{'status_on':_0x41d83e(0x22c),'status_ready':_0x41d83e(0x28b),'status_unavailable':_0x41d83e(0x1d1),'last_on_active':'Active','last_on_now':_0x41d83e(0x2a0),'last_on_ago_minutes':_0x41d83e(0x1d8),'last_on_ago_hours':_0x41d83e(0x2a6),'last_on_ago_days':_0x41d83e(0x1d5),'time_format_zero':_0x41d83e(0x25a),'time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':_0x41d83e(0x24a),'edit_duration_hours':_0x41d83e(0x1f3),'edit_duration_minutes':_0x41d83e(0x272),'edit_duration_seconds':'Seconds','edit_duration_apply':_0x41d83e(0x28c),'edit_duration_reset':_0x41d83e(0x291),'edit_duration_cancel':_0x41d83e(0x234),'edit_duration_tooltip':_0x41d83e(0x221)}};}static async['getConfigElement'](){return document['createElement']('switch-and-timer-bar-card-editor');}static[_0xdd16b5(0x1f1)](){const _0x188cb9=_0xdd16b5,_0x406bd6=this[_0x188cb9(0x1f6)];return{'title':'Irrigation\x20Control',..._0x406bd6,'entities':[{'name':_0x188cb9(0x1f9),'switch':_0x188cb9(0x21b),'timer':'timer.example_timer','sensor':_0x188cb9(0x225),'timer_and_entity_connected_via_automation':!![]}]};}static get[_0xdd16b5(0x29a)](){return haCss`
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
    `;}constructor(){const _0x36c2e3=_0xdd16b5;super(),this[_0x36c2e3(0x2a2)]=null,this[_0x36c2e3(0x24e)]=0x3e8,this['__needsTick']=![],this[_0x36c2e3(0x2ad)]=new Map(),this[_0x36c2e3(0x255)]=0x9c4,this[_0x36c2e3(0x1e6)]=new Set(),this['__durationOverrides']=new Map(),this[_0x36c2e3(0x2a8)]=_0x36c2e3(0x242),this[_0x36c2e3(0x2f1)](),this[_0x36c2e3(0x2e1)]=null;}['_loadDurationOverrides'](){const _0x55bccb=_0xdd16b5;try{const _0x130ec3=window[_0x55bccb(0x233)]?.['getItem'](this[_0x55bccb(0x2a8)]);if(!_0x130ec3)return;const _0x9358e3=JSON[_0x55bccb(0x2a7)](_0x130ec3);_0x9358e3&&typeof _0x9358e3===_0x55bccb(0x1df)&&(this['__durationOverrides']=new Map(Object[_0x55bccb(0x283)](_0x9358e3)));}catch(_0x2102b1){}}['_saveDurationOverrides'](){const _0x3df763=_0xdd16b5;try{const _0x759800=Object[_0x3df763(0x293)](this[_0x3df763(0x203)]);window['localStorage']?.[_0x3df763(0x1ec)](this[_0x3df763(0x2a8)],JSON[_0x3df763(0x26f)](_0x759800));}catch(_0x250f00){}}[_0xdd16b5(0x2d6)](_0x5c4dca){const _0x29b6d0=_0xdd16b5;if(!_0x5c4dca)throw new Error(_0x29b6d0(0x1ee));const _0x2ea54a=SwitchAndTimerBarCard[_0x29b6d0(0x1f6)],_0x3c866d=JSON[_0x29b6d0(0x2a7)](JSON[_0x29b6d0(0x26f)](_0x5c4dca));(!_0x3c866d[_0x29b6d0(0x2d1)]||!Array[_0x29b6d0(0x259)](_0x3c866d[_0x29b6d0(0x2d1)]))&&(console['warn'](_0x29b6d0(0x2c7)),_0x3c866d[_0x29b6d0(0x2d1)]=[]);_0x3c866d[_0x29b6d0(0x2d1)]['forEach'](_0x18eeb4=>{const _0x1e2888=_0x29b6d0;_0x18eeb4['timer_and_entity_connected_via_automation']===undefined&&(_0x18eeb4[_0x1e2888(0x245)]=!![]);}),this[_0x29b6d0(0x22e)]={..._0x2ea54a,..._0x3c866d,'colors':{..._0x2ea54a['colors'],..._0x3c866d[_0x29b6d0(0x1fe)]||{}},'icons':{..._0x2ea54a[_0x29b6d0(0x28a)],..._0x3c866d[_0x29b6d0(0x28a)]||{}},'labels':{..._0x2ea54a[_0x29b6d0(0x2c9)],..._0x3c866d['labels']||{}}};const _0x4945d7=new Map();for(const _0x36b6ac of this[_0x29b6d0(0x22e)][_0x29b6d0(0x2d1)]){if(_0x36b6ac['switch'])_0x4945d7['set'](_0x36b6ac[_0x29b6d0(0x1f4)],(_0x4945d7[_0x29b6d0(0x2c8)](_0x36b6ac['switch'])||0x0)+0x1);}this[_0x29b6d0(0x1e6)]=new Set(Array[_0x29b6d0(0x1f7)](_0x4945d7['entries']())['filter'](([,_0x1916d9])=>_0x1916d9>0x1)[_0x29b6d0(0x20d)](([_0x191558])=>_0x191558)),this[_0x29b6d0(0x267)]();}[_0xdd16b5(0x1e0)](){const _0x114975=_0xdd16b5;super['connectedCallback']?.(),this[_0x114975(0x267)]();}[_0xdd16b5(0x1ff)](){const _0x5e3142=_0xdd16b5;super[_0x5e3142(0x1ff)]?.(),this[_0x5e3142(0x210)]();}['updated'](_0x3e096e){const _0x48a33d=_0xdd16b5;if(_0x3e096e[_0x48a33d(0x27c)](_0x48a33d(0x26c))){this['__recomputeTickNeedAndApply']();const _0x50c4b6=_0x3e096e['get'](_0x48a33d(0x26c));if(!_0x50c4b6||!this[_0x48a33d(0x22e)]?.[_0x48a33d(0x2d1)])return;for(const _0x3aad1b of this['_config'][_0x48a33d(0x2d1)]){if(_0x3aad1b[_0x48a33d(0x245)])continue;const _0x4cf904=_0x3aad1b[_0x48a33d(0x258)],_0x969d62=_0x3aad1b[_0x48a33d(0x1f4)];if(!_0x4cf904||!_0x969d62)continue;const _0x2e523c=_0x50c4b6['states']?.[_0x4cf904],_0x3d3759=this[_0x48a33d(0x26c)]?.['states']?.[_0x4cf904],_0x12f6dc=this[_0x48a33d(0x26c)]?.[_0x48a33d(0x1dc)]?.[_0x969d62];if(!_0x2e523c||!_0x3d3759)continue;if(_0x2e523c[_0x48a33d(0x1e1)]===_0x48a33d(0x2e4)&&_0x3d3759['state']===_0x48a33d(0x254)){if(!_0x12f6dc)continue;if(!this['_isActive'](_0x12f6dc))continue;if(this[_0x48a33d(0x1e6)][_0x48a33d(0x27c)](_0x969d62)){const _0x3129ef=this['_config'][_0x48a33d(0x2d1)]['some'](_0x5b7c6a=>_0x5b7c6a['switch']===_0x969d62&&_0x5b7c6a['timer']&&_0x5b7c6a[_0x48a33d(0x258)]!==_0x4cf904&&this['hass'][_0x48a33d(0x1dc)]?.[_0x5b7c6a[_0x48a33d(0x258)]]?.[_0x48a33d(0x1e1)]==='active');if(_0x3129ef)continue;}const _0x3f0091=Date['now'](),_0x5a263d=this[_0x48a33d(0x2ad)]['get'](_0x969d62)||0x0;if(_0x3f0091-_0x5a263d<this[_0x48a33d(0x255)])continue;this[_0x48a33d(0x2ad)][_0x48a33d(0x228)](_0x969d62,_0x3f0091),this[_0x48a33d(0x1db)](_0x969d62,'off');}}}}[_0xdd16b5(0x290)](){const _0x406a62=_0xdd16b5;if(this[_0x406a62(0x2a2)])return;this['__interval']=setInterval(()=>{const _0x137db9=_0x406a62;this['_timer']=Date[_0x137db9(0x26a)]();},this['__tickMs']);}['__stopTick'](){const _0x3c35b2=_0xdd16b5;if(!this['__interval'])return;clearInterval(this['__interval']),this[_0x3c35b2(0x2a2)]=null;}['__recomputeTickNeedAndApply'](){const _0x3e68fa=_0xdd16b5;if(!this['hass']||!this['_config']?.['entities']?.[_0x3e68fa(0x20b)]){this['__needsTick']=![],this['__stopTick']();return;}const _0x181f10=this[_0x3e68fa(0x26c)]['states']||{};let _0xfabc7b=![];for(const _0x2f7fed of this[_0x3e68fa(0x22e)]['entities']){const _0x337b06=_0x2f7fed[_0x3e68fa(0x1f4)];if(!_0x337b06)continue;const _0x1c3c24=_0x2f7fed['timer'],_0x328883=_0x1c3c24?_0x181f10[_0x1c3c24]:null;if(this[_0x3e68fa(0x1e6)][_0x3e68fa(0x27c)](_0x337b06)){if(_0x328883&&_0x328883[_0x3e68fa(0x1e1)]===_0x3e68fa(0x2e4)){_0xfabc7b=!![];break;}continue;}const _0x4ef282=_0x181f10[_0x337b06];if(_0x4ef282&&this[_0x3e68fa(0x249)](_0x4ef282)){_0xfabc7b=!![];break;}if(_0x328883&&_0x328883[_0x3e68fa(0x1e1)]===_0x3e68fa(0x2e4)){_0xfabc7b=!![];break;}}this[_0x3e68fa(0x2b8)]=_0xfabc7b;if(_0xfabc7b)this['__startTick']();else this['__stopTick']();}[_0xdd16b5(0x229)](_0x1578b1,_0x4ff995){const _0x257f28=_0xdd16b5,_0x5a5f23=_0x1578b1?.[_0x257f28(0x258)];if(_0x5a5f23&&this[_0x257f28(0x203)][_0x257f28(0x27c)](_0x5a5f23)){const _0xc82af7=Number(this[_0x257f28(0x203)][_0x257f28(0x2c8)](_0x5a5f23));if(Number[_0x257f28(0x1eb)](_0xc82af7)&&_0xc82af7>=0x0)return _0xc82af7;}if(_0x1578b1&&_0x1578b1[_0x257f28(0x1de)]!==undefined&&_0x1578b1['duration']!==null&&_0x1578b1[_0x257f28(0x1de)]!==''){const _0x5c29d8=this['parseDuration'](_0x1578b1['duration']);if(_0x5c29d8>0x0)return _0x5c29d8;}return this[_0x257f28(0x2cd)](_0x4ff995?.[_0x257f28(0x1da)]?.['duration']);}[_0xdd16b5(0x262)](_0x1d2dbf){const _0x3a9ffb=_0xdd16b5,_0x471b47=_0x1d2dbf?.['timer'];if(_0x471b47&&this[_0x3a9ffb(0x203)][_0x3a9ffb(0x27c)](_0x471b47))return!![];if(_0x1d2dbf?.['duration']!==undefined&&_0x1d2dbf[_0x3a9ffb(0x1de)]!==null&&_0x1d2dbf[_0x3a9ffb(0x1de)]!=='')return!![];return![];}[_0xdd16b5(0x2b3)](_0x436afb){const _0x5693ee=_0xdd16b5;return!!(_0x436afb&&this[_0x5693ee(0x203)]['has'](_0x436afb));}[_0xdd16b5(0x2c5)](_0x3759ca){const _0x10b54c=_0xdd16b5,_0x438332=Math[_0x10b54c(0x1ce)](0x0,Math['floor'](Number(_0x3759ca)||0x0)),_0x564fe9=Math[_0x10b54c(0x1e8)](_0x438332/0xe10),_0xa0d1ad=Math[_0x10b54c(0x1e8)](_0x438332%0xe10/0x3c),_0x408ab7=_0x438332%0x3c,_0x46974e=_0x48d54b=>String(_0x48d54b)[_0x10b54c(0x295)](0x2,'0');return _0x46974e(_0x564fe9)+':'+_0x46974e(_0xa0d1ad)+':'+_0x46974e(_0x408ab7);}[_0xdd16b5(0x2d3)](_0x1cff3f,_0x58970a,_0x5a465c){const _0x4bcc43=_0xdd16b5;if(!_0x58970a)return;const _0x4d2d55=Math[_0x4bcc43(0x1ce)](0x0,Math[_0x4bcc43(0x1e8)](Number(_0x5a465c)||0x0));this['_durationEditor']={'open':!![],'timerEntity':_0x58970a,'h':Math[_0x4bcc43(0x1e8)](_0x4d2d55/0xe10),'m':Math[_0x4bcc43(0x1e8)](_0x4d2d55%0xe10/0x3c),'s':_0x4d2d55%0x3c,'hasOverride':this[_0x4bcc43(0x2b3)](_0x58970a)};}['_closeDurationEditor'](){const _0x57bc69=_0xdd16b5;this[_0x57bc69(0x2e1)]=null;}[_0xdd16b5(0x2dc)](_0x34d8ed,_0x106d73){const _0x32edcb=_0xdd16b5;if(!this[_0x32edcb(0x2e1)])return;let _0x2483b5=parseInt(_0x106d73,0xa);if(!Number[_0x32edcb(0x1eb)](_0x2483b5)||_0x2483b5<0x0)_0x2483b5=0x0;if(_0x34d8ed==='m'||_0x34d8ed==='s')_0x2483b5=Math['min'](_0x2483b5,0x3b);if(_0x34d8ed==='h')_0x2483b5=Math[_0x32edcb(0x2cb)](_0x2483b5,0x63);this['_durationEditor']={...this[_0x32edcb(0x2e1)],[_0x34d8ed]:_0x2483b5};}[_0xdd16b5(0x2ef)](){const _0x221a92=_0xdd16b5;if(!this['_durationEditor'])return;const {timerEntity:_0x5e728d,h:_0x51e07e,m:_0x3c1702,s:_0x2e1704}=this[_0x221a92(0x2e1)],_0xb84b55=_0x51e07e*0xe10+_0x3c1702*0x3c+_0x2e1704;_0x5e728d&&_0xb84b55>0x0&&(this[_0x221a92(0x203)][_0x221a92(0x228)](_0x5e728d,_0xb84b55),this[_0x221a92(0x1dd)]()),this['_durationEditor']=null,this[_0x221a92(0x267)]();}[_0xdd16b5(0x25d)](){const _0x5ec2c6=_0xdd16b5;if(!this[_0x5ec2c6(0x2e1)])return;const {timerEntity:_0x1cd44f}=this['_durationEditor'];_0x1cd44f&&this[_0x5ec2c6(0x203)][_0x5ec2c6(0x27c)](_0x1cd44f)&&(this[_0x5ec2c6(0x203)][_0x5ec2c6(0x26e)](_0x1cd44f),this[_0x5ec2c6(0x1dd)]()),this[_0x5ec2c6(0x2e1)]=null;}[_0xdd16b5(0x1db)](_0x249400,_0x38d297){const _0x5db28c=_0xdd16b5;if(!this[_0x5db28c(0x26c)]||!_0x249400)return;const _0x92eb0d=_0x249400[_0x5db28c(0x2da)]('.')[0x0];let _0x1d8bfe;switch(_0x92eb0d){case _0x5db28c(0x23c):_0x1d8bfe=_0x38d297==='on'?_0x5db28c(0x2bb):_0x5db28c(0x268);break;case _0x5db28c(0x2ca):_0x1d8bfe=_0x38d297==='on'?_0x5db28c(0x261):'close_valve';break;case _0x5db28c(0x24f):_0x1d8bfe=_0x38d297==='on'?_0x5db28c(0x24f):_0x5db28c(0x20f);break;default:_0x1d8bfe=_0x38d297==='on'?_0x5db28c(0x2d8):_0x5db28c(0x1f0);break;}this[_0x5db28c(0x26c)][_0x5db28c(0x2be)](_0x92eb0d,_0x1d8bfe,{'entity_id':_0x249400});}[_0xdd16b5(0x249)](_0x2b5863){const _0x556232=_0xdd16b5;if(!_0x2b5863)return![];const _0x109d78=_0x2b5863[_0x556232(0x2e3)][_0x556232(0x2da)]('.')[0x0],_0x199560=_0x2b5863['state'];switch(_0x109d78){case'cover':return _0x199560===_0x556232(0x278);case'valve':return _0x199560===_0x556232(0x2cc)||_0x199560===_0x556232(0x28d);case _0x556232(0x24f):return _0x199560===_0x556232(0x238);case _0x556232(0x297):return[_0x556232(0x2c4),'streaming','on'][_0x556232(0x1ea)](_0x199560);default:return _0x199560==='on';}}[_0xdd16b5(0x1d2)](){const _0x523bd4=_0xdd16b5;if(!HaLitBase||!haHtml)return'';if(!this[_0x523bd4(0x26c)]||!this['_config'])return haHtml``;const _0xe2b55f=Date[_0x523bd4(0x26a)]();return haHtml`
      <ha-card>
        ${this[_0x523bd4(0x22e)]['title']?haHtml`<div class="card-header">${this[_0x523bd4(0x22e)][_0x523bd4(0x264)]}</div>`:''}
        <div class="container">
          ${this[_0x523bd4(0x22e)][_0x523bd4(0x2d1)]&&this[_0x523bd4(0x22e)][_0x523bd4(0x2d1)][_0x523bd4(0x20d)](_0x4f8e88=>this[_0x523bd4(0x2ec)](_0x4f8e88,_0xe2b55f))}
        </div>
      </ha-card>
      ${this[_0x523bd4(0x1d0)]()}
    `;}['_renderDurationDialog'](){const _0x48df20=_0xdd16b5;if(!this[_0x48df20(0x2e1)]||!this['_durationEditor']['open'])return'';const _0x598676=this[_0x48df20(0x22e)]?.[_0x48df20(0x2c9)]||{},_0x8dd8b5=this[_0x48df20(0x2e1)];return haHtml`
      <ha-dialog
        open
        hideActions
        heading="${_0x598676[_0x48df20(0x2eb)]||_0x48df20(0x24a)}"
        @closed=${()=>this[_0x48df20(0x215)]()}
      >
        <div class="duration-dialog-body">
          <div class="duration-fields">
            <label class="duration-field">
              <span class="duration-field-label">${_0x598676[_0x48df20(0x1e2)]||_0x48df20(0x1f3)}</span>
              <input
                type="number"
                min="0"
                max="99"
                inputmode="numeric"
                .value=${String(_0x8dd8b5['h'])}
                @input=${_0x52d473=>this[_0x48df20(0x2dc)]('h',_0x52d473[_0x48df20(0x1fc)]['value'])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0x598676[_0x48df20(0x2a9)]||_0x48df20(0x272)}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x8dd8b5['m'])}
                @input=${_0x29dcf5=>this['_onDurationFieldChange']('m',_0x29dcf5[_0x48df20(0x1fc)][_0x48df20(0x205)])}
              />
            </label>
            <span class="duration-sep">:</span>
            <label class="duration-field">
              <span class="duration-field-label">${_0x598676['edit_duration_seconds']||'Seconds'}</span>
              <input
                type="number"
                min="0"
                max="59"
                inputmode="numeric"
                .value=${String(_0x8dd8b5['s'])}
                @input=${_0x473c31=>this[_0x48df20(0x2dc)]('s',_0x473c31[_0x48df20(0x1fc)][_0x48df20(0x205)])}
              />
            </label>
          </div>
          <div class="duration-actions">
            <button
              class="dlg-btn dlg-btn-text"
              @click=${()=>this[_0x48df20(0x215)]()}
            >${_0x598676['edit_duration_cancel']||_0x48df20(0x234)}</button>
            ${_0x8dd8b5[_0x48df20(0x22a)]?haHtml`<button
                  class="dlg-btn dlg-btn-text dlg-btn-reset"
                  @click=${()=>this[_0x48df20(0x25d)]()}
                >${_0x598676[_0x48df20(0x25e)]||_0x48df20(0x291)}</button>`:''}
            <button
              class="dlg-btn dlg-btn-primary"
              @click=${()=>this[_0x48df20(0x2ef)]()}
            >${_0x598676[_0x48df20(0x1f2)]||_0x48df20(0x28c)}</button>
          </div>
        </div>
      </ha-dialog>
    `;}['renderEntity'](_0x2ee8d8,_0x24f37c){const _0x4ad38e=_0xdd16b5,_0x5d0b1c=_0x2ee8d8['switch'],_0x361b76=_0x2ee8d8[_0x4ad38e(0x258)],_0x2aa1e7=_0x2ee8d8[_0x4ad38e(0x256)],_0x49eb1e=_0x2ee8d8[_0x4ad38e(0x208)];if(!_0x5d0b1c)return haHtml`<div class="warning">Entity 'switch' is not defined.</div>`;const _0x4b9573=this['hass'][_0x4ad38e(0x1dc)]||{},_0x5e89b6=_0x4b9573[_0x5d0b1c],_0x1f53f6=_0x361b76?_0x4b9573[_0x361b76]:undefined,_0x502773=_0x2aa1e7?_0x4b9573[_0x2aa1e7]:undefined,_0x546212=_0x49eb1e?_0x4b9573[_0x49eb1e]:undefined;if(!_0x5e89b6)return haHtml`<div class="warning">Entity not found: ${_0x5d0b1c}</div>`;const _0x2e42f0=this[_0x4ad38e(0x249)](_0x5e89b6),_0x73aea=[_0x4ad38e(0x213),'unknown']['includes'](_0x5e89b6[_0x4ad38e(0x1e1)]),_0x713d3b=_0x2ee8d8['button_position']||this[_0x4ad38e(0x22e)][_0x4ad38e(0x284)],_0x36755a=this[_0x4ad38e(0x1e6)]['has'](_0x5d0b1c),_0x3ec5f9=_0x36755a&&_0x1f53f6?_0x1f53f6[_0x4ad38e(0x1e1)]===_0x4ad38e(0x2e4):_0x2e42f0,_0x17875d={...this[_0x4ad38e(0x22e)][_0x4ad38e(0x1fe)],..._0x2ee8d8[_0x4ad38e(0x1fe)]||{}},_0x8e1fbc={...this[_0x4ad38e(0x22e)][_0x4ad38e(0x28a)],..._0x2ee8d8['icons']||{}},_0x4d4859={...this[_0x4ad38e(0x22e)][_0x4ad38e(0x2c9)],..._0x2ee8d8[_0x4ad38e(0x2c9)]||{}},_0x549c74=this[_0x4ad38e(0x2cd)](_0x1f53f6?.[_0x4ad38e(0x1da)]?.[_0x4ad38e(0x1de)]),_0x46480a=_0x1f53f6?.['state']===_0x4ad38e(0x2e4),_0x1c6c54=_0x46480a?_0x549c74:this['_getEffectiveDuration'](_0x2ee8d8,_0x1f53f6),_0x5abbaf=_0x2ee8d8[_0x4ad38e(0x2cf)]!==undefined?!!_0x2ee8d8[_0x4ad38e(0x2cf)]:!!this['_config'][_0x4ad38e(0x2cf)],_0x53a68d=_0x5abbaf&&!!_0x361b76&&!_0x3ec5f9;let _0x2312c9=0x0;if(_0x2e42f0){const _0x5e87ca=Date[_0x4ad38e(0x2a7)](_0x5e89b6['last_changed']);!Number[_0x4ad38e(0x26d)](_0x5e87ca)&&(_0x2312c9=Math[_0x4ad38e(0x2cb)]((_0x24f37c-_0x5e87ca)/0x3e8,0x708));}let _0x80417c=0x0;if(_0x1f53f6?.[_0x4ad38e(0x1e1)]===_0x4ad38e(0x2e4)&&_0x1c6c54>0x0){const _0x309cba=Date[_0x4ad38e(0x2a7)](_0x1f53f6['last_changed']),_0x4d1f80=(Number[_0x4ad38e(0x26d)](_0x309cba)?_0x24f37c:_0x309cba)+_0x1c6c54*0x3e8,_0x4b8508=Math['max'](0x0,(_0x4d1f80-_0x24f37c)/0x3e8);_0x80417c=Math[_0x4ad38e(0x1ce)](0x0,_0x1c6c54-_0x4b8508);}else _0x3ec5f9&&(_0x80417c=_0x2312c9);const _0x4c4830=this[_0x4ad38e(0x23d)](_0x80417c,_0x1c6c54);let _0x557484=_0x4ad38e(0x263)+_0x17875d['ready']+';';if(_0x73aea)_0x557484=_0x4ad38e(0x263)+_0x17875d['unavailable']+';';else{if(_0x3ec5f9)_0x557484=_0x4ad38e(0x263)+_0x17875d['on']+';';}const _0x2bc68e='background-color:\x20'+_0x17875d[_0x4ad38e(0x1fb)]+';',_0xbe694c=_0x4ad38e(0x263)+_0x17875d[_0x4ad38e(0x226)]+';',_0x445bcc=_0x4ad38e(0x2c1)+_0x17875d[_0x4ad38e(0x20e)]+';',_0x4fd25c=haHtml`
      <div class="timer-controls">
        ${!_0x3ec5f9&&_0x361b76?haHtml`<button
              class="control-btn start"
              style="${_0x2bc68e}"
              @click=${()=>this[_0x4ad38e(0x1fd)](_0x361b76,_0x5d0b1c,_0x2ee8d8,_0x1c6c54)}
            >
              <ha-icon icon="${_0x8e1fbc[_0x4ad38e(0x2ea)]}" style="${_0x445bcc}"></ha-icon>
            </button>`:''}
        ${_0x3ec5f9&&_0x361b76?haHtml`<button
              class="control-btn stop"
              style="${_0xbe694c}"
              @click=${()=>this[_0x4ad38e(0x2b6)](_0x361b76,_0x5d0b1c,_0x2ee8d8)}
            >
              <ha-icon icon="${_0x8e1fbc[_0x4ad38e(0x28e)]}" style="${_0x445bcc}"></ha-icon>
            </button>`:''}
      </div>
    `,_0x10a3c7=this[_0x4ad38e(0x2e0)](_0x80417c,_0x4d4859)+'\x20/\x20'+this[_0x4ad38e(0x2e0)](_0x1c6c54,_0x4d4859),_0x1c1684=_0x53a68d?haHtml`<span
          class="duration-editable"
          title="${_0x4d4859[_0x4ad38e(0x204)]}"
          @click=${()=>this['_openDurationEditor'](_0x2ee8d8,_0x361b76,_0x1c6c54)}
        >
          ${_0x10a3c7}
          <ha-icon icon="mdi:pencil" class="edit-icon"></ha-icon>
        </span>`:haHtml`<span>${_0x10a3c7}</span>`;return haHtml`
      <div class="entity-card">
        <div class="header">
          <div class="title" style="${_0x3ec5f9?_0x4ad38e(0x2c1)+_0x17875d['on']:''}">
            ${_0x2ee8d8[_0x4ad38e(0x2ba)]||_0x5e89b6[_0x4ad38e(0x1da)][_0x4ad38e(0x292)]||_0x5d0b1c}
            ${this[_0x4ad38e(0x237)](_0x546212)}
          </div>
          <div class="status" style="${_0x557484}">
            ${this['getStatusText'](_0x5e89b6,_0x1f53f6,_0x4d4859,_0x3ec5f9)}
          </div>
        </div>

        <div class="control-wrapper ${_0x713d3b}">
          ${_0x713d3b===_0x4ad38e(0x2ee)?_0x4fd25c:''}
          <div class="timeline-container">
            <div class="progress-bar">
              <div
                class="progress-fill"
                style="width: ${_0x4c4830}%; background-color: ${_0x17875d[_0x4ad38e(0x209)]};"
              ></div>
            </div>
            <div class="time-info">
              <span>${this[_0x4ad38e(0x2a3)](_0x502773,_0x5e89b6,_0x4d4859,_0x24f37c,_0x3ec5f9)}</span>
              ${_0x1c1684}
            </div>
          </div>
          ${_0x713d3b===_0x4ad38e(0x253)?_0x4fd25c:''}
        </div>
      </div>
    `;}async['_handleStart'](_0x4efcf9,_0x14968a,_0x1c63b1,_0x3cdd5d){const _0x560b55=_0xdd16b5;if(!_0x1c63b1[_0x560b55(0x245)])this[_0x560b55(0x1db)](_0x14968a,'on');const _0x42f2c7={'entity_id':_0x4efcf9};this['_hasAnyDurationOverride'](_0x1c63b1)&&Number[_0x560b55(0x1eb)](_0x3cdd5d)&&_0x3cdd5d>0x0&&(_0x42f2c7[_0x560b55(0x1de)]=this['_secondsToHHMMSS'](_0x3cdd5d)),this[_0x560b55(0x26c)]['callService'](_0x560b55(0x258),_0x560b55(0x2ea),_0x42f2c7);}async[_0xdd16b5(0x2b6)](_0x11779a,_0x1c84dc,_0x477783){const _0x56d0cd=_0xdd16b5;if(_0x11779a)await this[_0x56d0cd(0x26c)][_0x56d0cd(0x2be)](_0x56d0cd(0x258),_0x56d0cd(0x260),{'entity_id':_0x11779a});if(!_0x1c84dc)return;if(_0x477783?.[_0x56d0cd(0x245)])return;if(this['__sharedSwitches'][_0x56d0cd(0x27c)](_0x1c84dc)){const _0x2ea4f1=this['_config']?.['entities']?.[_0x56d0cd(0x2d0)](_0x145646=>_0x145646[_0x56d0cd(0x1f4)]===_0x1c84dc&&_0x145646[_0x56d0cd(0x258)]&&_0x145646[_0x56d0cd(0x258)]!==_0x11779a&&this['hass']['states']?.[_0x145646['timer']]?.[_0x56d0cd(0x1e1)]==='active');if(_0x2ea4f1)return;}this[_0x56d0cd(0x1db)](_0x1c84dc,'off');}['parseDuration'](_0x4a9f9b){const _0x5154d6=_0xdd16b5;if(!_0x4a9f9b)return 0x0;if(typeof _0x4a9f9b===_0x5154d6(0x246)&&_0x4a9f9b[_0x5154d6(0x1ea)](':')){const _0x11b762=_0x4a9f9b[_0x5154d6(0x2da)](':');if(_0x11b762['length']===0x3){const _0x15e706=parseInt(_0x11b762[0x0],0xa),_0x1cfdd8=parseInt(_0x11b762[0x1],0xa),_0x10dbb1=parseInt(_0x11b762[0x2],0xa);return(Number['isNaN'](_0x15e706)?0x0:_0x15e706)*0xe10+(Number[_0x5154d6(0x26d)](_0x1cfdd8)?0x0:_0x1cfdd8)*0x3c+(Number['isNaN'](_0x10dbb1)?0x0:_0x10dbb1);}}const _0xd6d05b=typeof _0x4a9f9b===_0x5154d6(0x2f2)?_0x4a9f9b:parseFloat(_0x4a9f9b);return Number[_0x5154d6(0x1eb)](_0xd6d05b)?_0xd6d05b:0x0;}[_0xdd16b5(0x23d)](_0x305364,_0x7b9875){const _0x31e10e=_0xdd16b5;if(!(_0x7b9875>0x0))return 0x0;const _0x209f60=_0x305364/_0x7b9875*0x64;return Math[_0x31e10e(0x2cb)](0x64,Math[_0x31e10e(0x1ce)](0x0,_0x209f60));}[_0xdd16b5(0x2e0)](_0x26bab1,_0x2f31f6){const _0x298b84=_0xdd16b5,_0x23d9df=Number(_0x26bab1);if(!Number[_0x298b84(0x1eb)](_0x23d9df)||_0x23d9df<=0x0)return _0x2f31f6[_0x298b84(0x282)];const _0x4a823a=Math[_0x298b84(0x1e8)](_0x23d9df/0x3c),_0x5ed2c6=Math['floor'](_0x23d9df%0x3c);return''+_0x4a823a+_0x2f31f6['time_unit_minutes']+'\x20'+String(_0x5ed2c6)[_0x298b84(0x295)](0x2,'0')+_0x2f31f6['time_unit_seconds'];}[_0xdd16b5(0x237)](_0x4cadbb){const _0x143e5f=_0xdd16b5;if(!_0x4cadbb)return'';const _0x10f17b=_0x4cadbb[_0x143e5f(0x1e1)];if(_0x10f17b==null||['unavailable','unknown','']['includes'](String(_0x10f17b)))return'';const _0x114b78=Number(_0x10f17b),_0x20a09c=Number[_0x143e5f(0x1eb)](_0x114b78),_0x50dcae=_0x4cadbb[_0x143e5f(0x1da)]?.['unit_of_measurement']||(_0x20a09c?'%':''),_0x34fda1=_0x20a09c?''+Math[_0x143e5f(0x298)](_0x114b78)+_0x50dcae:''+_0x10f17b+(_0x50dcae?'\x20'+_0x50dcae:''),_0x3d02df=_0x4cadbb[_0x143e5f(0x1da)]||{},_0x5e8dc3=_0x3d02df[_0x143e5f(0x23a)]===!![]||_0x3d02df[_0x143e5f(0x275)]===!![]||['charging','on'][_0x143e5f(0x1ea)](String(_0x3d02df['battery_state']??'')['toLowerCase']());let _0x136d96=_0x143e5f(0x201);if(_0x20a09c){const _0x3ba0c8=Math[_0x143e5f(0x1ce)](0x0,Math[_0x143e5f(0x2cb)](0x64,_0x114b78)),_0x431166=Math[_0x143e5f(0x298)](_0x3ba0c8/0xa)*0xa;_0x5e8dc3?_0x136d96=_0x431166<=0x0?'mdi:battery-charging-outline':_0x431166>=0x64?_0x143e5f(0x206):'mdi:battery-charging-'+_0x431166:_0x136d96=_0x431166<=0x0?_0x143e5f(0x247):_0x431166>=0x64?'mdi:battery':'mdi:battery-'+_0x431166;}return haHtml`<span class="battery"><ha-icon icon="${_0x136d96}"></ha-icon>${_0x34fda1}</span>`;}[_0xdd16b5(0x235)](_0x2fbf47,_0x1a1189,_0x61c967,_0x4f0be7){const _0x2075b1=_0xdd16b5;if(!_0x2fbf47)return _0x61c967[_0x2075b1(0x252)];if([_0x2075b1(0x213),'unknown']['includes'](_0x2fbf47[_0x2075b1(0x1e1)]))return _0x61c967[_0x2075b1(0x252)];const _0x478bc7=_0x4f0be7!==undefined?_0x4f0be7:this['_isActive'](_0x2fbf47);if(_0x478bc7)return _0x61c967[_0x2075b1(0x200)];return _0x61c967[_0x2075b1(0x23e)];}[_0xdd16b5(0x2a3)](_0x36b5fa,_0xe2ac7e,_0x4b0569,_0x3c6c17,_0x3dfff5){const _0x4fc5e0=_0xdd16b5,_0xfe1e8=_0x3dfff5!==undefined?_0x3dfff5:this['_isActive'](_0xe2ac7e);if(_0xfe1e8)return _0x4b0569[_0x4fc5e0(0x2b4)];if(!_0x36b5fa||!_0x36b5fa['state'])return'';const _0x522129=Date[_0x4fc5e0(0x2a7)](_0x36b5fa[_0x4fc5e0(0x1e1)]);if(Number[_0x4fc5e0(0x26d)](_0x522129))return _0x36b5fa[_0x4fc5e0(0x1e1)];const _0x40d780=Math[_0x4fc5e0(0x1e8)]((_0x3c6c17-_0x522129)/0x3e8),_0x2026de=Math[_0x4fc5e0(0x1e8)](_0x40d780/0x3c),_0x1608cb=Math[_0x4fc5e0(0x1e8)](_0x2026de/0x3c),_0x2aefa0=Math['floor'](_0x1608cb/0x18);if(_0x40d780<0x3c)return _0x4b0569[_0x4fc5e0(0x202)];if(_0x2026de<0x3c)return _0x2026de+'\x20'+_0x4b0569[_0x4fc5e0(0x280)];if(_0x1608cb<0x18)return _0x1608cb+'\x20'+_0x4b0569[_0x4fc5e0(0x296)];return _0x2aefa0+'\x20'+_0x4b0569['last_on_ago_days'];}}customElements['define'](_0xdd16b5(0x21f),SwitchAndTimerBarCard);class SwitchAndTimerBarCardEditor extends HaLitBase{static get[_0xdd16b5(0x1ef)](){return{'hass':{},'_config':{'state':!![]},'_expanded':{'state':!![]},'_dragOverIndex':{'state':!![]},'_showSensorHelp':{'state':!![]},'_mainTab':{'state':!![]},'_entityTabs':{'state':!![]}};}constructor(){const _0x324785=_0xdd16b5;super(),this['__itemsCache']=new Map(),this[_0x324785(0x23f)]=null,this[_0x324785(0x281)]={'global_overrides':![],'entities':![]},this[_0x324785(0x2b7)]=null,this['_dragFromIndex']=null,this[_0x324785(0x2ab)]=![],this[_0x324785(0x2e2)]=_0x324785(0x299),this[_0x324785(0x207)]={},this['_openSensorHelp']=_0x473942=>{const _0x50590e=_0x324785;if(_0x473942)_0x473942[_0x50590e(0x2c6)]();this[_0x50590e(0x2ab)]=!![];},this['_closeSensorHelp']=()=>{this['_showSensorHelp']=![];};}[_0xdd16b5(0x2d6)](_0x2ffd47){const _0x16dd0c=_0xdd16b5,_0x46dd45=JSON[_0x16dd0c(0x2a7)](JSON[_0x16dd0c(0x26f)](_0x2ffd47||{}));if(!Array[_0x16dd0c(0x259)](_0x46dd45['entities']))_0x46dd45[_0x16dd0c(0x2d1)]=[];_0x46dd45[_0x16dd0c(0x1fe)]=_0x46dd45[_0x16dd0c(0x1fe)]||{},_0x46dd45[_0x16dd0c(0x28a)]=_0x46dd45[_0x16dd0c(0x28a)]||{},_0x46dd45[_0x16dd0c(0x2c9)]=_0x46dd45[_0x16dd0c(0x2c9)]||{},_0x46dd45[_0x16dd0c(0x2d1)]['forEach']((_0x2a32fa,_0xf852b0)=>{const _0x3d4e55=_0x16dd0c;if(this[_0x3d4e55(0x281)][_0x3d4e55(0x2c2)+_0xf852b0]===undefined)this['_expanded'][_0x3d4e55(0x2c2)+_0xf852b0]=![];}),this[_0x16dd0c(0x22e)]=_0x46dd45;}['shouldUpdate'](_0x562e1e){const _0x58ab46=_0xdd16b5;if(_0x562e1e[_0x58ab46(0x27c)](_0x58ab46(0x22e))||_0x562e1e[_0x58ab46(0x27c)](_0x58ab46(0x281))||_0x562e1e[_0x58ab46(0x27c)](_0x58ab46(0x2b7))||_0x562e1e[_0x58ab46(0x27c)](_0x58ab46(0x2ab))||_0x562e1e[_0x58ab46(0x27c)](_0x58ab46(0x2e2))||_0x562e1e['has'](_0x58ab46(0x207)))return!![];if(_0x562e1e[_0x58ab46(0x27c)](_0x58ab46(0x26c))){const _0x4ea51b=this[_0x58ab46(0x2a1)](this['hass']);if(_0x4ea51b!==this[_0x58ab46(0x23f)])return this['__lastEntitySig']=_0x4ea51b,this[_0x58ab46(0x21c)]['clear'](),!![];return![];}return!![];}[_0xdd16b5(0x2a1)](_0x519f77){const _0x3aa7dd=_0xdd16b5,_0x20a110=_0x519f77?.[_0x3aa7dd(0x1dc)]||{};let _0x441bb5=0x0;for(const _0x273695 in _0x20a110)_0x441bb5++;return''+_0x441bb5;}[_0xdd16b5(0x220)](_0xe2bb30){const _0x24696a=_0xdd16b5;this[_0x24696a(0x22e)]=_0xe2bb30,this[_0x24696a(0x2d7)](),this[_0x24696a(0x29b)](new CustomEvent(_0x24696a(0x1e7),{'detail':{'config':_0xe2bb30},'bubbles':!![],'composed':!![]}));}[_0xdd16b5(0x2bf)](_0x2c2f54){const _0x300670=_0xdd16b5;if(!this[_0x300670(0x22e)]||!this[_0x300670(0x26c)])return;const _0x459c14=_0x2c2f54['target'],_0x33ae4d=_0x459c14[_0x300670(0x223)]||_0x459c14[_0x300670(0x29c)]('configValue');if(!_0x33ae4d)return;const _0x300796=_0x33ae4d[_0x300670(0x2da)]('.');let _0x42f343;if(_0x459c14[_0x300670(0x2ae)]===_0x300670(0x2dd))_0x42f343=_0x459c14[_0x300670(0x2b9)];else{if(_0x2c2f54[_0x300670(0x2e9)]?.['value']!==undefined)_0x42f343=_0x2c2f54[_0x300670(0x2e9)]['value'];else{if(_0x459c14[_0x300670(0x205)]!==undefined)_0x42f343=_0x459c14['value'];else _0x42f343='';}}if(_0x42f343===_0x300670(0x2bd))_0x42f343='';const _0x1264c7=JSON[_0x300670(0x2a7)](JSON[_0x300670(0x26f)](this[_0x300670(0x22e)]));let _0x48b973=_0x1264c7;for(let _0x3162df=0x0;_0x3162df<_0x300796[_0x300670(0x20b)]-0x1;_0x3162df++){const _0x4ce423=_0x300796[_0x3162df];if(_0x48b973[_0x4ce423]===undefined)_0x48b973[_0x4ce423]=!isNaN(parseInt(_0x300796[_0x3162df+0x1],0xa))?[]:{};_0x48b973=_0x48b973[_0x4ce423];}const _0x2f1deb=_0x300796[_0x300796[_0x300670(0x20b)]-0x1];if(_0x42f343===''||_0x42f343===null||Array[_0x300670(0x259)](_0x42f343)&&_0x42f343['length']===0x0){delete _0x48b973[_0x2f1deb];if(_0x300796[_0x300670(0x20b)]>0x1){let _0x5d4a2c=_0x1264c7;for(let _0x1cdac3=0x0;_0x1cdac3<_0x300796[_0x300670(0x20b)]-0x2;_0x1cdac3++)_0x5d4a2c=_0x5d4a2c[_0x300796[_0x1cdac3]];if(Object[_0x300670(0x2c0)](_0x48b973)[_0x300670(0x20b)]===0x0&&_0x5d4a2c[_0x300796[_0x300796[_0x300670(0x20b)]-0x2]])delete _0x5d4a2c[_0x300796[_0x300796[_0x300670(0x20b)]-0x2]];}}else _0x48b973[_0x2f1deb]=_0x42f343;this['_dispatchConfig'](_0x1264c7);}[_0xdd16b5(0x271)](_0x290beb){const _0x4a4286=_0xdd16b5;this[_0x4a4286(0x281)]={...this[_0x4a4286(0x281)],[_0x290beb]:!this['_expanded'][_0x290beb]};}[_0xdd16b5(0x2c3)](_0xe007d){const _0x1c113a=_0xdd16b5,_0x106c1d=_0x1c113a(0x2c2)+_0xe007d,_0x1fea23=!!this[_0x1c113a(0x281)][_0x106c1d];if(_0x1fea23){this[_0x1c113a(0x281)]={...this[_0x1c113a(0x281)],[_0x106c1d]:![]};return;}const _0x28a30a={...this[_0x1c113a(0x281)]};Object[_0x1c113a(0x2c0)](_0x28a30a)[_0x1c113a(0x2e7)](_0x483793=>_0x483793[_0x1c113a(0x2af)]('entity_'))['forEach'](_0x117f66=>_0x28a30a[_0x117f66]=![]),_0x28a30a[_0x106c1d]=!![],_0x28a30a[_0x1c113a(0x2d1)]=!![],this['_expanded']=_0x28a30a,requestAnimationFrame(()=>{const _0x370f9a=_0x1c113a;requestAnimationFrame(()=>this[_0x370f9a(0x1ed)](_0xe007d));});}[_0xdd16b5(0x1ed)](_0x17bdc0){const _0x30a35c=_0xdd16b5,_0xedbb67=this['renderRoot']?.[_0x30a35c(0x1d4)]('[data-entity-index=\x22'+_0x17bdc0+'\x22]');if(!_0xedbb67)return;const _0x1c1133=_0xedbb67[_0x30a35c(0x1d4)](_0x30a35c(0x29f))||_0xedbb67;try{_0x1c1133[_0x30a35c(0x25f)]({'behavior':_0x30a35c(0x21a),'block':'start','inline':_0x30a35c(0x232)});}catch(_0x591bd1){_0x1c1133[_0x30a35c(0x25f)](!![]);}}[_0xdd16b5(0x240)]=()=>{const _0x203d55=_0xdd16b5,_0x3feaca=JSON[_0x203d55(0x2a7)](JSON[_0x203d55(0x26f)](this['_config']));_0x3feaca['entities']=_0x3feaca[_0x203d55(0x2d1)]||[],_0x3feaca['entities'][_0x203d55(0x222)]({'name':'','switch':'','timer':'','sensor':'','timer_and_entity_connected_via_automation':!![]});const _0x2e3b8a=_0x3feaca['entities']['length']-0x1,_0x3b41e7={...this[_0x203d55(0x281)]};Object[_0x203d55(0x2c0)](_0x3b41e7)[_0x203d55(0x2e7)](_0x246b36=>_0x246b36[_0x203d55(0x2af)](_0x203d55(0x2c2)))['forEach'](_0x4cb009=>_0x3b41e7[_0x4cb009]=![]),_0x3b41e7[_0x203d55(0x2c2)+_0x2e3b8a]=!![],_0x3b41e7[_0x203d55(0x2d1)]=!![],this[_0x203d55(0x281)]=_0x3b41e7,this[_0x203d55(0x220)](_0x3feaca);};[_0xdd16b5(0x241)](_0x5f45c5){const _0x4e0d83=_0xdd16b5,_0x421396=JSON['parse'](JSON[_0x4e0d83(0x26f)](this[_0x4e0d83(0x22e)]));_0x421396['entities'][_0x4e0d83(0x27e)](_0x5f45c5,0x1);const _0x247ac9={...this[_0x4e0d83(0x281)]};Object[_0x4e0d83(0x2c0)](_0x247ac9)[_0x4e0d83(0x2e7)](_0x2a529c=>_0x2a529c['startsWith']('entity_'))[_0x4e0d83(0x274)](_0x3b44da=>delete _0x247ac9[_0x3b44da]),_0x421396[_0x4e0d83(0x2d1)][_0x4e0d83(0x274)]((_0x235fe3,_0x566e1)=>_0x247ac9['entity_'+_0x566e1]=![]),this[_0x4e0d83(0x281)]=_0x247ac9,this[_0x4e0d83(0x220)](_0x421396);}['_duplicateEntity'](_0x1fb9dc){const _0x3799b0=_0xdd16b5,_0x36fbc6=JSON[_0x3799b0(0x2a7)](JSON[_0x3799b0(0x26f)](this[_0x3799b0(0x22e)])),_0x4b91e3=JSON[_0x3799b0(0x2a7)](JSON['stringify'](_0x36fbc6[_0x3799b0(0x2d1)][_0x1fb9dc]));if(_0x4b91e3['name'])_0x4b91e3[_0x3799b0(0x2ba)]=_0x4b91e3[_0x3799b0(0x2ba)]+_0x3799b0(0x273);_0x36fbc6[_0x3799b0(0x2d1)]['splice'](_0x1fb9dc+0x1,0x0,_0x4b91e3);const _0x1fe16f={...this[_0x3799b0(0x281)]};Object[_0x3799b0(0x2c0)](_0x1fe16f)[_0x3799b0(0x2e7)](_0x30559b=>_0x30559b[_0x3799b0(0x2af)](_0x3799b0(0x2c2)))[_0x3799b0(0x274)](_0x14a172=>_0x1fe16f[_0x14a172]=![]),_0x1fe16f[_0x3799b0(0x2c2)+(_0x1fb9dc+0x1)]=!![],_0x1fe16f['entities']=!![],this['_expanded']=_0x1fe16f,this['_dispatchConfig'](_0x36fbc6);}['_onDragStart'](_0x1b09cc,_0x1b3aff){const _0x50caf4=_0xdd16b5;this[_0x50caf4(0x25b)]=_0x1b09cc;try{_0x1b3aff['dataTransfer'][_0x50caf4(0x1f5)]=_0x50caf4(0x270),_0x1b3aff['dataTransfer'][_0x50caf4(0x1fa)](_0x50caf4(0x20a),String(_0x1b09cc));}catch(_0x553494){}}[_0xdd16b5(0x27d)](_0x51a6d0,_0x125180){const _0x318079=_0xdd16b5;_0x125180[_0x318079(0x251)](),this[_0x318079(0x2b7)]=_0x51a6d0;try{_0x125180[_0x318079(0x2d2)][_0x318079(0x2ac)]=_0x318079(0x270);}catch(_0x53de57){}}['_onDragLeave'](_0x1d6091,_0x32bef3){}[_0xdd16b5(0x29d)](_0x731c8f,_0xd2688a){const _0x1e47e9=_0xdd16b5;_0xd2688a['preventDefault']();let _0xb97917=this[_0x1e47e9(0x25b)];try{const _0x353711=_0xd2688a[_0x1e47e9(0x2d2)][_0x1e47e9(0x1d3)](_0x1e47e9(0x20a)),_0x455221=parseInt(_0x353711,0xa);if(!Number['isNaN'](_0x455221))_0xb97917=_0x455221;}catch(_0x5d558a){}if(_0xb97917===null||_0xb97917===undefined)return;this[_0x1e47e9(0x1d6)](_0xb97917,_0x731c8f),this['_dragFromIndex']=null,this[_0x1e47e9(0x2b7)]=null;}[_0xdd16b5(0x1d6)](_0x45d0be,_0x192589){const _0x35e74f=_0xdd16b5;if(_0x45d0be===_0x192589)return;const _0x25b6dc=JSON['parse'](JSON[_0x35e74f(0x26f)](this[_0x35e74f(0x22e)])),_0x57e37c=_0x25b6dc[_0x35e74f(0x2d1)]||[];if(_0x45d0be<0x0||_0x45d0be>=_0x57e37c[_0x35e74f(0x20b)]||_0x192589<0x0||_0x192589>=_0x57e37c[_0x35e74f(0x20b)])return;const _0x5ab28f=(this[_0x35e74f(0x22e)][_0x35e74f(0x2d1)]||[])[_0x35e74f(0x265)]((_0x2c161b,_0x2edf3b)=>!!this[_0x35e74f(0x281)][_0x35e74f(0x2c2)+_0x2edf3b]),[_0x4b86d5]=_0x57e37c['splice'](_0x45d0be,0x1);_0x57e37c[_0x35e74f(0x27e)](_0x192589,0x0,_0x4b86d5);let _0x139a57=_0x5ab28f;if(_0x5ab28f===_0x45d0be)_0x139a57=_0x192589;else{if(_0x45d0be<_0x5ab28f&&_0x192589>=_0x5ab28f)_0x139a57=_0x5ab28f-0x1;else{if(_0x45d0be>_0x5ab28f&&_0x192589<=_0x5ab28f)_0x139a57=_0x5ab28f+0x1;}}const _0x38f8ce={...this[_0x35e74f(0x281)]};Object[_0x35e74f(0x2c0)](_0x38f8ce)[_0x35e74f(0x2e7)](_0x57a2a5=>_0x57a2a5[_0x35e74f(0x2af)]('entity_'))[_0x35e74f(0x274)](_0x2a720c=>delete _0x38f8ce[_0x2a720c]),_0x57e37c[_0x35e74f(0x274)]((_0x5ef07a,_0x1e386b)=>_0x38f8ce['entity_'+_0x1e386b]=![]);if(_0x139a57>=0x0&&_0x139a57<_0x57e37c['length'])_0x38f8ce[_0x35e74f(0x2c2)+_0x139a57]=!![];this[_0x35e74f(0x281)]=_0x38f8ce,this[_0x35e74f(0x220)](_0x25b6dc);}[_0xdd16b5(0x216)](_0x3c2d5a,_0x3963b0,_0xfc1e83,_0x5b3298){const _0x20508c=_0xdd16b5,_0x5e6e42=Array[_0x20508c(0x259)](_0x5b3298)?_0x5b3298:undefined;return haHtml`
      <div class="field">
        <div class="picker-wrap">
          <ha-selector
            .hass=${this[_0x20508c(0x26c)]}
            .label=${_0x3c2d5a}
            .selector=${_0x5e6e42?{'entity':{'domain':_0x5e6e42}}:{'entity':{}}}
            .value=${_0x3963b0||''}
            .configValue=${_0xfc1e83}
            @value-changed=${this[_0x20508c(0x2bf)]}
          ></ha-selector>
        </div>
      </div>
    `;}['_renderSensorPickerWithHelp'](_0x5588f1,_0x1d738d,_0x38d71c){const _0x3a8184=_0xdd16b5;return haHtml`
      <div class="field">
        <div class="label-row">
          <div class="label-text">${_0x5588f1}</div>
          <button class="help-btn" type="button" title="Help" @click=${this[_0x3a8184(0x224)]}>
            <span class="help-q">?</span>
          </button>
        </div>

        <div class="picker-wrap">
          <ha-selector
            .hass=${this[_0x3a8184(0x26c)]}
            .label=${''}
            .selector=${{'entity':{'domain':[_0x3a8184(0x256),_0x3a8184(0x2ed)]}}}
            .value=${_0x1d738d||''}
            .configValue=${_0x38d71c}
            @value-changed=${this['_valueChanged']}
          ></ha-selector>
        </div>
      </div>
    `;}[_0xdd16b5(0x2bc)](_0x336adc){const _0x11fd13=_0xdd16b5,_0x9a7b8f={'colors':{'on':'#2196F3','ready':_0x11fd13(0x21d),'unavailable':_0x11fd13(0x230),'button_start':_0x11fd13(0x21d),'button_stop':_0x11fd13(0x1e9),'icon':_0x11fd13(0x285),'progress_fill':'#2196F3'},'icons':{'start':_0x11fd13(0x2b5),'stop':'mdi:stop'},'labels':{'status_on':_0x11fd13(0x22c),'status_ready':_0x11fd13(0x28b),'status_unavailable':_0x11fd13(0x1d1),'last_on_active':_0x11fd13(0x22b),'last_on_now':'Just\x20now','last_on_ago_minutes':'minutes\x20ago','last_on_ago_hours':'hours\x20ago','last_on_ago_days':_0x11fd13(0x1d5),'time_format_zero':_0x11fd13(0x25a),'time_unit_minutes':'m','time_unit_seconds':'s','edit_duration_title':'Set\x20duration','edit_duration_hours':_0x11fd13(0x1f3),'edit_duration_minutes':_0x11fd13(0x272),'edit_duration_seconds':'Seconds','edit_duration_apply':_0x11fd13(0x28c),'edit_duration_reset':_0x11fd13(0x291),'edit_duration_cancel':_0x11fd13(0x234),'edit_duration_tooltip':_0x11fd13(0x221)}};return _0x9a7b8f[_0x336adc];}['_getEffectiveGlobal'](_0x1f79e3){const _0x36e5f2=_0xdd16b5;return{...this[_0x36e5f2(0x2bc)](_0x1f79e3),...this[_0x36e5f2(0x22e)]?.[_0x1f79e3]||{}};}[_0xdd16b5(0x1d7)](_0xf53c80){const _0x5ebc82=_0xdd16b5,_0x4dae51=JSON[_0x5ebc82(0x2a7)](JSON[_0x5ebc82(0x26f)](this['_config'])),_0x31b672=_0xf53c80[_0x5ebc82(0x2da)]('.');let _0x148f46=_0x4dae51;for(let _0x155fff=0x0;_0x155fff<_0x31b672['length']-0x1;_0x155fff++){_0x148f46=_0x148f46?.[_0x31b672[_0x155fff]];if(!_0x148f46)break;}if(_0x148f46&&typeof _0x148f46===_0x5ebc82(0x1df))delete _0x148f46[_0x31b672[_0x31b672[_0x5ebc82(0x20b)]-0x1]];this[_0x5ebc82(0x220)](_0x4dae51);}['_tip'](_0x36a00d){return haHtml`<span class="tip-wrap" tabindex="-1">
      <svg class="tip-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      <span class="tip-box">${_0x36a00d}</span>
    </span>`;}[_0xdd16b5(0x217)](_0x1a9a85,_0x5c12b6,_0x68238){const _0x135f11=_0xdd16b5,_0x341246=_0x1a9a85||{},_0x22819c=_0x68238||this[_0x135f11(0x2bc)](_0x135f11(0x1fe));return haHtml`
      <div class="grid grid-3">
        ${Object[_0x135f11(0x2c0)](_0x22819c)['map'](_0xbc3034=>{const _0x196598=_0x135f11,_0x3d7ea3=_0xbc3034[_0x196598(0x2e8)](/_/g,'\x20')['replace'](/\b\w/g,_0x45366f=>_0x45366f['toUpperCase']());return haHtml`
            <div class="field">
              <div class="field-label">${_0x3d7ea3}</div>
              <div class="color-row">
                <input
                  class="color-input"
                  type="color"
                  .value="${_0x341246[_0xbc3034]||_0x22819c[_0xbc3034]||''}"
                  @input=${_0x5b689d=>this[_0x196598(0x2bf)]({'target':{'configValue':_0x5c12b6+'.'+_0xbc3034,'value':_0x5b689d['target']['value']},'detail':{'value':_0x5b689d[_0x196598(0x1fc)]['value']}})}
                />
                <ha-textfield
                  label="Hex"
                  .value="${_0x341246[_0xbc3034]||''}"
                  .placeholder="${_0x22819c[_0xbc3034]}"
                  .configValue="${_0x5c12b6}.${_0xbc3034}"
                  @change=${this[_0x196598(0x2bf)]}
                ></ha-textfield>
              </div>
            </div>
          `;})}
      </div>
    `;}[_0xdd16b5(0x287)](_0x46d574,_0x2346ca,_0x1deecf){const _0xd793bf=_0xdd16b5,_0x2edbb8=_0x46d574||{},_0xf31f6=_0x1deecf||this[_0xd793bf(0x2bc)](_0xd793bf(0x28a));return haHtml`
      <div class="grid grid-2">
        ${Object[_0xd793bf(0x2c0)](_0xf31f6)[_0xd793bf(0x20d)](_0x9281c2=>haHtml`
            <div class="field">
              <ha-icon-picker
                label="${_0x9281c2[_0xd793bf(0x218)](0x0)[_0xd793bf(0x1f8)]()+_0x9281c2[_0xd793bf(0x239)](0x1)} Icon"
                .value="${_0x2edbb8[_0x9281c2]||''}"
                .placeholder="${_0xf31f6[_0x9281c2]}"
                .configValue="${_0x2346ca}.${_0x9281c2}"
                @value-changed=${this[_0xd793bf(0x2bf)]}
              ></ha-icon-picker>
            </div>
          `)}
      </div>
    `;}[_0xdd16b5(0x212)](_0x899ab0,_0x11b8c7,_0x437c61){const _0x1b2fc1=_0xdd16b5,_0x1d6665=_0x899ab0||{},_0x3e6f8d=_0x437c61||this[_0x1b2fc1(0x2bc)]('labels');return haHtml`
      <div class="grid grid-2">
        ${Object[_0x1b2fc1(0x2c0)](_0x3e6f8d)[_0x1b2fc1(0x20d)](_0x140b66=>haHtml`
            <div class="field">
              <ha-textfield
                label="${_0x140b66['replace'](/_/g,'\x20')}"
                .value="${_0x1d6665[_0x140b66]||''}"
                .placeholder="${_0x3e6f8d[_0x140b66]}"
                .configValue="${_0x11b8c7}.${_0x140b66}"
                @change=${this[_0x1b2fc1(0x2bf)]}
              ></ha-textfield>
            </div>
          `)}
      </div>
    `;}[_0xdd16b5(0x28f)](){const _0x534299=_0xdd16b5,_0x1b12ad=customElements[_0x534299(0x2c8)](_0x534299(0x219))?_0x534299(0x219):_0x534299(0x27b),_0x336c0c='template:\x0a\x20\x20-\x20trigger:\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20event\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_type:\x20timer.finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20event_data:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20timer.zone_1_timer\x0a\x20\x20\x20\x20\x20\x20-\x20trigger:\x20state\x0a\x20\x20\x20\x20\x20\x20\x20\x20entity_id:\x20switch.zone_1\x20\x20\x20#\x20For\x20non-switch\x20domains,\x20change\x20to\x20your\x20entity\x0a\x20\x20\x20\x20\x20\x20\x20\x20from:\x20\x27on\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20to:\x20\x27off\x27\x0a\x20\x20\x20\x20sensor:\x0a\x20\x20\x20\x20\x20\x20-\x20name:\x20zone_1_is_finished\x0a\x20\x20\x20\x20\x20\x20\x20\x20state:\x20\x22{{\x20now().timestamp()\x20|\x20as_datetime\x20}}\x22';if(_0x1b12ad==='ha-dialog')return haHtml`
        <ha-dialog
          .open=${this[_0x534299(0x2ab)]}
          @closed=${this[_0x534299(0x2aa)]}
          heading="How to create a trigger-based sensor"
        >
          <div class="help-content">
            <div class="help-title">🧪 How to create a trigger-based sensor</div>
            <div class="help-text">
              To show "last run" on the card, you can create a template sensor that updates when the timer finishes
              (works for all domains) and/or when the device turns off. Example below uses both a
              <code>timer.finished</code> event and a switch turning off; adapt the second trigger for your domain if needed.
            </div>
            <pre class="code"><code>${_0x336c0c}</code></pre>
          </div>
          <mwc-button slot="primaryAction" @click=${this[_0x534299(0x2aa)]}>Close</mwc-button>
        </ha-dialog>
      `;return haHtml`
      <mwc-dialog
        ?open=${this['_showSensorHelp']}
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
          <pre class="code"><code>${_0x336c0c}</code></pre>
        </div>
        <mwc-button slot="primaryAction" @click=${this[_0x534299(0x2aa)]}>Close</mwc-button>
      </mwc-dialog>
    `;}[_0xdd16b5(0x1d2)](){const _0xef347c=_0xdd16b5;if(!this['hass']||!this[_0xef347c(0x22e)])return haHtml``;const _0x18b7ee=!this[_0xef347c(0x281)][_0xef347c(0x1e5)],_0x343aa2=!this['_expanded'][_0xef347c(0x2d1)],_0x5cd0a9=this[_0xef347c(0x2e2)]||'general';return haHtml`
      <div class="editor">
        <!-- GLOBAL SETTINGS PANEL -->
        <div class="panel ${_0x18b7ee?'':_0xef347c(0x2cc)}">
          <div class="panel-header" @click=${()=>this[_0xef347c(0x271)](_0xef347c(0x1e5))}>
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

          ${_0x18b7ee?'':haHtml`
            <div class="panel-body">
              <div class="tabs">
                <button class="tb ${_0x5cd0a9===_0xef347c(0x299)?_0xef347c(0x2e4):''}" @click=${()=>{const _0x3a28f6=_0xef347c;this[_0x3a28f6(0x2e2)]='general';}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  General
                </button>
                <button class="tb ${_0x5cd0a9===_0xef347c(0x1fe)?_0xef347c(0x2e4):''}" @click=${()=>{const _0x1cc275=_0xef347c;this[_0x1cc275(0x2e2)]=_0x1cc275(0x1fe);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                  Colors
                </button>
                <button class="tb ${_0x5cd0a9==='icons'?_0xef347c(0x2e4):''}" @click=${()=>{const _0x28595d=_0xef347c;this[_0x28595d(0x2e2)]=_0x28595d(0x28a);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  Icons
                </button>
                <button class="tb ${_0x5cd0a9==='labels'?'active':''}" @click=${()=>{const _0x2ff4f8=_0xef347c;this[_0x2ff4f8(0x2e2)]=_0x2ff4f8(0x2c9);}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                  Labels
                </button>
              </div>

              <!-- General Tab -->
              <div class="tc ${_0x5cd0a9==='general'?_0xef347c(0x2e4):''}">
                <div class="fg">
                  <div class="fgl">Card</div>
                  <div class="grid grid-2">
                    <div class="field">
                      <div class="field-label">Title ${this['_tip'](_0xef347c(0x2ce))}</div>
                      <ha-textfield
                        label="Title"
                        .value="${this['_config'][_0xef347c(0x264)]||''}"
                        .configValue=${_0xef347c(0x264)}
                        @change=${this[_0xef347c(0x2bf)]}
                      ></ha-textfield>
                    </div>

                    <div class="field">
                      <div class="field-label">Button Position ${this[_0xef347c(0x24c)]('Where\x20Start/Stop\x20buttons\x20appear\x20by\x20default\x20for\x20all\x20entities.')}</div>
                      <div class="picker-wrap">
                        <ha-selector
                          .hass=${this[_0xef347c(0x26c)]}
                          .label=${_0xef347c(0x2b2)}
                          .selector=${{'select':{'options':[{'value':_0xef347c(0x2ee),'label':'Left'},{'value':_0xef347c(0x253),'label':'Right'}],'mode':_0xef347c(0x22f)}}}
                          .value=${this[_0xef347c(0x22e)][_0xef347c(0x284)]||'left'}
                          .configValue=${_0xef347c(0x284)}
                          @value-changed=${this[_0xef347c(0x2bf)]}
                        ></ha-selector>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-2">
                    <div class="field">
                      <div class="field-label">Editable duration (global default) ${this[_0xef347c(0x24c)](_0xef347c(0x24b))}</div>
                      <div class="toggle-row">
                        <label class="si">
                          <div class="st">
                            <ha-switch
                              .checked="${!!this[_0xef347c(0x22e)]['editable_duration']}"
                              .configValue=${_0xef347c(0x2cf)}
                              @change=${this[_0xef347c(0x2bf)]}
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
              <div class="tc ${_0x5cd0a9===_0xef347c(0x1fe)?_0xef347c(0x2e4):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Colors</div>
                    <button class="reset-btn" @click=${()=>this[_0xef347c(0x1d7)](_0xef347c(0x1fe))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this[_0xef347c(0x217)](this[_0xef347c(0x22e)][_0xef347c(0x1fe)],'colors',this[_0xef347c(0x2bc)](_0xef347c(0x1fe)))}
                </div>
              </div>

              <!-- Icons Tab -->
              <div class="tc ${_0x5cd0a9==='icons'?_0xef347c(0x2e4):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Icons</div>
                    <button class="reset-btn" @click=${()=>this[_0xef347c(0x1d7)](_0xef347c(0x28a))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this[_0xef347c(0x287)](this[_0xef347c(0x22e)][_0xef347c(0x28a)],_0xef347c(0x28a),this['_getBuiltInDefaults'](_0xef347c(0x28a)))}
                </div>
              </div>

              <!-- Labels Tab -->
              <div class="tc ${_0x5cd0a9===_0xef347c(0x2c9)?_0xef347c(0x2e4):''}">
                <div class="fg">
                  <div class="fgl-row">
                    <div class="fgl">Labels</div>
                    <button class="reset-btn" @click=${()=>this[_0xef347c(0x1d7)](_0xef347c(0x2c9))}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                      Reset
                    </button>
                  </div>
                  ${this['_renderLabelOptions'](this[_0xef347c(0x22e)]['labels'],_0xef347c(0x2c9),this[_0xef347c(0x2bc)](_0xef347c(0x2c9)))}
                </div>
              </div>
            </div>
          `}
        </div>

        <!-- ENTITIES PANEL -->
        <div class="panel ${_0x343aa2?'':_0xef347c(0x2cc)}">
          <div class="panel-header" @click=${()=>this[_0xef347c(0x271)](_0xef347c(0x2d1))}>
            <div class="panel-icon ent-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
            <div class="panel-text">
              <span class="panel-title">Entities <span class="badge">${(this['_config']['entities']||[])['length']}</span></span>
              <span class="panel-subtitle">Drag & drop to reorder. Click entity to expand.</span>
            </div>
            <span class="panel-chevron">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </div>

          ${_0x343aa2?'':haHtml`
            <div class="panel-body entity-list">
              ${(this[_0xef347c(0x22e)]['entities']||[])[_0xef347c(0x20d)]((_0x5b1218,_0x343d30)=>this['_renderEntitySection'](_0x5b1218,_0x343d30))}
              <button class="add-btn" @click=${this['_addEntity']}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add Entity
              </button>
            </div>
          `}
        </div>
      </div>

      ${this[_0xef347c(0x28f)]()}
    `;}['_renderEntitySection'](_0x26ab24,_0x353c9b){const _0x4c602a=_0xdd16b5,_0x252f15=_0x4c602a(0x231)+_0x353c9b,_0xf3a42=!!this[_0x4c602a(0x281)][_0x4c602a(0x2c2)+_0x353c9b],_0xdfe9ef=_0x26ab24[_0x4c602a(0x2ba)]?.[_0x4c602a(0x2e6)]()?_0x26ab24['name']:this[_0x4c602a(0x26c)]?.[_0x4c602a(0x1dc)]?.[_0x26ab24[_0x4c602a(0x1f4)]]?.[_0x4c602a(0x1da)]?.['friendly_name']||_0x4c602a(0x2a4)+(_0x353c9b+0x1),_0x3aef6f=this[_0x4c602a(0x2b7)]===_0x353c9b,_0x28d5bc=this[_0x4c602a(0x207)][_0x353c9b]||_0x4c602a(0x299);return haHtml`
      <div
        class="ec ${_0xf3a42?_0x4c602a(0x2cc):''} ${_0x3aef6f?_0x4c602a(0x24d):''}"
        data-entity-index="${_0x353c9b}"
        @dragover=${_0x2a9172=>this['_onDragOver'](_0x353c9b,_0x2a9172)}
        @drop=${_0x5d947e=>this[_0x4c602a(0x29d)](_0x353c9b,_0x5d947e)}
        @dragleave=${_0xb98710=>this['_onDragLeave'](_0x353c9b,_0xb98710)}
      >
        <div class="eh" @click=${()=>this['_toggleEntityExpand'](_0x353c9b)}>
          <div class="ed"
            title="Drag to reorder"
            draggable="true"
            @dragstart=${_0x46e803=>this[_0x4c602a(0x289)](_0x353c9b,_0x46e803)}
            @click=${_0x361b94=>_0x361b94['stopPropagation']()}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>
          </div>
          <div class="ei">
            <span class="en">${_0xdfe9ef}</span>
          </div>
          <div class="ea">
            <button class="etb" @click=${_0x50231b=>{const _0x4a7153=_0x4c602a;_0x50231b[_0x4a7153(0x2c6)](),this[_0x4a7153(0x2c3)](_0x353c9b);}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <button class="edup" title="Duplicate" @click=${_0x4cd930=>{const _0x34beb4=_0x4c602a;_0x4cd930[_0x34beb4(0x2c6)](),this['_duplicateEntity'](_0x353c9b);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
            <button class="edb" @click=${_0x21c540=>{const _0x98bf63=_0x4c602a;_0x21c540[_0x98bf63(0x2c6)](),this[_0x98bf63(0x241)](_0x353c9b);}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>

        ${_0xf3a42?haHtml`
          <div class="eb">
            <div class="tabs">
              <button class="tb ${_0x28d5bc===_0x4c602a(0x299)?_0x4c602a(0x2e4):''}" @click=${()=>{const _0x1bfcec=_0x4c602a;this[_0x1bfcec(0x207)]={...this[_0x1bfcec(0x207)],[_0x353c9b]:_0x1bfcec(0x299)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                General
              </button>
              <button class="tb ${_0x28d5bc===_0x4c602a(0x1fe)?_0x4c602a(0x2e4):''}" @click=${()=>{const _0x36b918=_0x4c602a;this[_0x36b918(0x207)]={...this[_0x36b918(0x207)],[_0x353c9b]:_0x36b918(0x1fe)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                Colors
              </button>
              <button class="tb ${_0x28d5bc==='icons'?_0x4c602a(0x2e4):''}" @click=${()=>{const _0x2a9948=_0x4c602a;this['_entityTabs']={...this[_0x2a9948(0x207)],[_0x353c9b]:_0x2a9948(0x28a)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                Icons
              </button>
              <button class="tb ${_0x28d5bc===_0x4c602a(0x2c9)?_0x4c602a(0x2e4):''}" @click=${()=>{const _0x3f8d70=_0x4c602a;this[_0x3f8d70(0x207)]={...this[_0x3f8d70(0x207)],[_0x353c9b]:_0x3f8d70(0x2c9)};}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                Labels
              </button>
            </div>

            <!-- Entity General Tab -->
            <div class="tc ${_0x28d5bc===_0x4c602a(0x299)?_0x4c602a(0x2e4):''}">
              <div class="fg">
                <div class="fgl">Entity Setup</div>
                <div class="grid grid-2">
                  <div class="field">
                    <div class="field-label">Display Name ${this[_0x4c602a(0x24c)](_0x4c602a(0x286))}</div>
                    <ha-textfield
                      label="Name"
                      .value="${_0x26ab24[_0x4c602a(0x2ba)]||''}"
                      .configValue="${_0x252f15}.name"
                      @change=${this[_0x4c602a(0x2bf)]}
                    ></ha-textfield>
                  </div>

                  <div class="field">
                    <div class="field-label">Button Position ${this[_0x4c602a(0x24c)]('Override\x20global\x20button\x20position\x20for\x20this\x20entity\x20only.')}</div>
                    <div class="picker-wrap">
                      <ha-selector
                        .hass=${this['hass']}
                        .label=${'Position'}
                        .selector=${{'select':{'options':[{'value':_0x4c602a(0x2bd),'label':'Use\x20global'},{'value':_0x4c602a(0x2ee),'label':_0x4c602a(0x244)},{'value':_0x4c602a(0x253),'label':_0x4c602a(0x2b1)}],'mode':_0x4c602a(0x22f)}}}
                        .value=${_0x26ab24[_0x4c602a(0x284)]||'global'}
                        .configValue="${_0x252f15}.button_position"
                        @value-changed=${this[_0x4c602a(0x2bf)]}
                      ></ha-selector>
                    </div>
                  </div>
                </div>
              </div>

              <div class="fg">
                <div class="fgl">Entities</div>
                <div class="grid grid-2">
                  ${this[_0x4c602a(0x216)](_0x4c602a(0x2db),_0x26ab24[_0x4c602a(0x1f4)]||'',_0x252f15+'.switch',[_0x4c602a(0x1f4),'light',_0x4c602a(0x23c),_0x4c602a(0x2ca),_0x4c602a(0x24f),_0x4c602a(0x297),_0x4c602a(0x22d),'fan'])}
                  ${this['_renderEntityPicker'](_0x4c602a(0x211),_0x26ab24[_0x4c602a(0x258)]||'',_0x252f15+_0x4c602a(0x214),[_0x4c602a(0x258)])}
                </div>
                <div class="grid grid-2">
                  ${this[_0x4c602a(0x266)](_0x4c602a(0x227),_0x26ab24[_0x4c602a(0x256)]||'',_0x252f15+_0x4c602a(0x2d5))}
                  <div class="field">
                    <div class="field-label">Automation Link ${this['_tip']('If\x20enabled,\x20card\x20only\x20starts/stops\x20the\x20timer;\x20your\x20automation\x20controls\x20the\x20entity.\x20If\x20disabled,\x20card\x20turns\x20entity\x20on/off\x20directly.')}</div>
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${_0x26ab24[_0x4c602a(0x245)]!==![]}"
                            .configValue="${_0x252f15}.timer_and_entity_connected_via_automation"
                            @change=${this[_0x4c602a(0x2bf)]}
                          ></ha-switch>
                        </div>
                        <div class="sl">
                          <span class="sn">Timer ↔ Entity linked via automation</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="grid grid-2">
                  ${this[_0x4c602a(0x216)](_0x4c602a(0x277),_0x26ab24['battery']||'',_0x252f15+'.battery',[_0x4c602a(0x256)])}
                </div>
                <div class="grid grid-2">
                  <div class="field">
                    <div class="field-label">Default duration override ${this[_0x4c602a(0x24c)](_0x4c602a(0x20c))}</div>
                    <ha-textfield
                      placeholder="e.g. 00:10:00"
                      .value="${_0x26ab24[_0x4c602a(0x1de)]??''}"
                      .configValue="${_0x252f15}.duration"
                      @input=${this[_0x4c602a(0x2bf)]}
                    ></ha-textfield>
                  </div>
                  <div class="field">
                    <div class="field-label">Editable duration ${this[_0x4c602a(0x24c)](_0x4c602a(0x288))}</div>
                    <div class="toggle-row">
                      <label class="si">
                        <div class="st">
                          <ha-switch
                            .checked="${!!_0x26ab24['editable_duration']}"
                            .configValue="${_0x252f15}.editable_duration"
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

            <!-- Entity Colors Tab -->
            <div class="tc ${_0x28d5bc==='colors'?'active':''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Colors</div>
                  <button class="reset-btn" @click=${()=>this[_0x4c602a(0x1d7)](_0x252f15+_0x4c602a(0x25c))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global colors for this entity. Unset values inherit from global settings.</div>
                ${this[_0x4c602a(0x217)](_0x26ab24['colors'],_0x252f15+_0x4c602a(0x25c),this['_getEffectiveGlobal']('colors'))}
              </div>
            </div>

            <!-- Entity Icons Tab -->
            <div class="tc ${_0x28d5bc===_0x4c602a(0x28a)?_0x4c602a(0x2e4):''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Icons</div>
                  <button class="reset-btn" @click=${()=>this[_0x4c602a(0x1d7)](_0x252f15+_0x4c602a(0x276))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global icons for this entity. Unset values inherit from global settings.</div>
                ${this['_renderIconOptions'](_0x26ab24[_0x4c602a(0x28a)],_0x252f15+_0x4c602a(0x276),this[_0x4c602a(0x29e)](_0x4c602a(0x28a)))}
              </div>
            </div>

            <!-- Entity Labels Tab -->
            <div class="tc ${_0x28d5bc==='labels'?'active':''}">
              <div class="fg">
                <div class="fgl-row">
                  <div class="fgl">Override Labels</div>
                  <button class="reset-btn" @click=${()=>this[_0x4c602a(0x1d7)](_0x252f15+_0x4c602a(0x27f))}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Reset
                  </button>
                </div>
                <div class="hint" style="margin-bottom:8px">Override global labels for this entity. Unset values inherit from global settings.</div>
                ${this[_0x4c602a(0x212)](_0x26ab24[_0x4c602a(0x2c9)],_0x252f15+_0x4c602a(0x27f),this[_0x4c602a(0x29e)](_0x4c602a(0x2c9)))}
              </div>
            </div>
          </div>
        `:''}
      </div>
    `;}static get['styles'](){return haCss`
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

      /* ===== Field ===== */
      .field { display: grid; gap: 6px; min-width: 0; }
      .field-label {
        font-size: 11.5px; font-weight: 500; color: var(--ts);
        margin: 2px 0; letter-spacing: .02em;
        display: flex; align-items: center; gap: 2px;
      }
      .hint { font-size: 11px; color: var(--ts); line-height: 1.4; opacity: .7; }
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

      /* ===== Color Row ===== */
      .color-row {
        display: grid; grid-template-columns: 40px 1fr;
        gap: 8px; align-items: center;
        min-width: 0;
      }
      .color-row ha-textfield {
        min-width: 0;
        --ha-color-form-background: var(--sf);
        --mdc-text-field-fill-color: var(--sf);
      }
      .color-input {
        width: 40px; height: 40px;
        border-radius: 8px; border: 1px solid var(--bd);
        background: transparent; padding: 2px; cursor: pointer;
        flex-shrink: 0;
      }

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

      /* ===== Responsive ===== */
      @media (max-width: 500px) {
        .grid-2 { grid-template-columns: 1fr; }
        .grid-3 { grid-template-columns: 1fr 1fr; }
        .tabs { flex-wrap: wrap; }
        .tb { font-size: 10px; padding: 6px 6px; }
      }
    `;}}customElements[_0xdd16b5(0x2b0)](_0xdd16b5(0x2df),SwitchAndTimerBarCardEditor),window[_0xdd16b5(0x2d4)]=window[_0xdd16b5(0x2d4)]||[];!window[_0xdd16b5(0x2d4)][_0xdd16b5(0x2d0)](_0x170c13=>_0x170c13['type']==='switch-and-timer-bar-card')&&window[_0xdd16b5(0x2d4)][_0xdd16b5(0x222)]({'type':_0xdd16b5(0x21f),'name':_0xdd16b5(0x21e),'description':_0xdd16b5(0x21e),'preview':!![]});function _0x59e2(){const _0x412b7e=['Invalid\x20configuration.','properties','turn_off','getStubConfig','edit_duration_apply','Hours','switch','effectAllowed','DEFAULTS','from','toUpperCase','Front\x20Yard','setData','button_start','target','_handleStart','colors','disconnectedCallback','status_on','mdi:battery','last_on_now','__durationOverrides','edit_duration_tooltip','value','mdi:battery-charging-100','_entityTabs','battery','progress_fill','text/plain','length','Optional.\x20If\x20set\x20(HH:MM:SS\x20or\x20seconds),\x20this\x20overrides\x20the\x20timer\x20helper’s\x20configured\x20duration\x20when\x20starting\x20from\x20this\x20card.\x20Leave\x20empty\x20to\x20use\x20the\x20helper\x20default.','map','icon','unlock','__stopTick','Timer\x20entity','_renderLabelOptions','unavailable','.timer','_closeDurationEditor','_renderEntityPicker','_renderColorOptions','charAt','ha-dialog','smooth','switch.example_switch','__itemsCache','#4CAF50','Switch\x20&\x20Timer\x20Bar\x20Card','switch-and-timer-bar-card','_dispatchConfig','Click\x20to\x20change\x20duration','push','configValue','_openSensorHelp','sensor.example_last_watered','button_stop','Last\x20run\x20sensor\x20(optional)','set','_getEffectiveDuration','hasOverride','Active','Watering','input_boolean','_config','dropdown','#F44336','entities.','nearest','localStorage','Cancel','getStatusText','1112490Sfmhyc','_renderBattery','unlocked','slice','is_charging','12dVckWF','cover','calculateActivePercent','status_ready','__lastEntitySig','_addEntity','_removeEntity','switch-and-timer-bar-card:durations','getPrototypeOf','Left','timer_and_entity_connected_via_automation','string','mdi:battery-outline','error','_isActive','Set\x20duration','Default\x20for\x20all\x20entities.\x20If\x20enabled,\x20users\x20can\x20tap\x20the\x20total\x20time\x20on\x20the\x20card\x20to\x20change\x20the\x20duration.\x20Each\x20entity\x20can\x20still\x20override\x20this.','_tip','drag-over','__tickMs','lock','56wsEhJj','preventDefault','status_unavailable','right','idle','__offDebounceMs','sensor','#FFFFFF','timer','isArray','0m\x2000s','_dragFromIndex','.colors','_resetDurationOverride','edit_duration_reset','scrollIntoView','finish','open_valve','_hasAnyDurationOverride','background-color:\x20','title','findIndex','_renderSensorPickerWithHelp','__recomputeTickNeedAndApply','open_cover','434yDlkZX','now','LitElement','hass','isNaN','delete','stringify','move','_toggleExpand','Minutes','\x20(copy)','forEach','charging','.icons','Battery\x20(optional)','closed','ha-panel-lovelace','5rlKRZK','mwc-dialog','has','_onDragOver','splice','.labels','last_on_ago_minutes','_expanded','time_format_zero','entries','button_position','white','Optional\x20custom\x20name.\x20If\x20empty,\x20card\x20uses\x20entity\x20friendly\x20name.','_renderIconOptions','If\x20enabled,\x20users\x20can\x20tap\x20the\x20total\x20time\x20on\x20the\x20card\x20to\x20change\x20the\x20duration.\x20The\x20value\x20is\x20saved\x20in\x20the\x20browser\x20(localStorage).','_onDragStart','icons','Ready','Apply','opening','stop','_renderSensorHelpDialog','__startTick','Reset\x20to\x20default','friendly_name','fromEntries','5544473UzFwHV','padStart','last_on_ago_hours','media_player','round','general','styles','dispatchEvent','getAttribute','_onDrop','_getEffectiveGlobal','.entity-head','Just\x20now','_computeEntitySig','__interval','getLastWateringText','Entity\x20#','179115PQjiDe','hours\x20ago','parse','__durationStorageKey','edit_duration_minutes','_closeSensorHelp','_showSensorHelp','dropEffect','__lastOffAt','tagName','startsWith','define','Right','Position','_hasUIDurationOverride','last_on_active','mdi:play','_handleStop','_dragOverIndex','__needsTick','checked','name','close_cover','_getBuiltInDefaults','global','callService','_valueChanged','keys','color:\x20','entity_','_toggleEntityExpand','playing','_secondsToHHMMSS','stopPropagation','Switch\x20and\x20Timer\x20Bar\x20Card:\x20\x27entities\x27\x20is\x20not\x20a\x20list\x20or\x20is\x20missing.','get','labels','valve','min','open','parseDuration','Shown\x20at\x20the\x20top\x20of\x20the\x20card.\x20Leave\x20empty\x20to\x20hide.','editable_duration','some','entities','dataTransfer','_openDurationEditor','customCards','.sensor','setConfig','requestUpdate','turn_on','38303jXLLny','split','Control\x20entity\x20(switch\x20/\x20light\x20/\x20cover\x20/\x20valve\x20/\x20lock\x20/\x20etc.)','_onDurationFieldChange','HA-SWITCH','4545846ePSoFc','switch-and-timer-bar-card-editor','formatTime','_durationEditor','_mainTab','entity_id','active','mdi:stop','trim','filter','replace','detail','start','edit_duration_title','renderEntity','input_datetime','left','_applyDurationEditor','html','_loadDurationOverrides','number','max','7289964pzGWIS','_renderDurationDialog','Unavailable','render','getData','querySelector','days\x20ago','_reorderEntities','_resetPath','minutes\x20ago','113864pFuASH','attributes','_callService','states','_saveDurationOverrides','duration','object','connectedCallback','state','edit_duration_hours','prototype','18FlHAFm','global_overrides','__sharedSwitches','config-changed','floor','#2196F3','includes','isFinite','setItem','_scrollEntityIntoView'];_0x59e2=function(){return _0x412b7e;};return _0x59e2();}

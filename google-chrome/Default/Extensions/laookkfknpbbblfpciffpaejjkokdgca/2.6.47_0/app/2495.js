(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[2495],{48713:(t,o,e)=>{"use strict";e.d(o,{Z:()=>h});var i=e(20144),n=e(88026),r=e(51726),d=e.n(r),a=e(34952),s=e(12096),p=e(60607);let l={};const c={bind:function(t,o){m.utils.isTouchDevice()&&(t.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{t.dataset.justBoundMobileClickHandler=!1}),100),t.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),l[t.dataset.mobileClickHandlerId]=o.value,t.addEventListener("click",o.value))},unbind:function(t){m.utils.isTouchDevice()&&(t.removeEventListener("click",l[t.dataset.mobileClickHandlerId]),delete l[t.dataset.mobileClickHandlerId],delete t.dataset.mobileClickHandlerId,delete t.dataset.justBoundMobileClickHandler)}};i.Z.use(n.Z,{name:"unreactive"}),i.Z.use(d()),i.Z.use(a.InlineSvgPlugin),i.Z.prototype.$xhr=p.Z,i.Z.prototype.$e=s.Z,i.Z.directive("mobile-click",c),new i.Z({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),i.Z.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const h=i.Z},92495:(t,o,e)=>{"use strict";e.r(o);var i=e(48713),n=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"app-container todo mock-todo show"},[i("div",{staticClass:"app-wrapper nipple nipple-bottom-right"},[i("div",{staticClass:"app todo-app mock-todo-app",attrs:{"data-test":"mock-todo"}},[i("header",{staticClass:"header todo-header"},[i("div",{staticClass:"todo-header-row"},[i("div",{staticClass:"active-list-container has-icon"},[t.providerIcon?i("inline-svg",{staticClass:"provider-icon",attrs:{src:t.providerIcon}}):t._e(),t._v(" "),i("span",{staticClass:"list-name active-list-name",attrs:{title:"Inbox"}},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"list-chooser-toggle icon-wrapper",staticStyle:{display:"inline-flex"}},[i("inline-svg",{staticClass:"icon icon-angle-down",attrs:{src:e(87845)}})],1)],1),t._v(" "),i("div",{staticClass:"todo-header-controls"},[i("div",{staticClass:"todo-header-control more"},[i("div",{staticClass:"icon-wrapper more-toggle"},[i("inline-svg",{staticClass:"icon icon-ellipsis more-icon",attrs:{src:e(20264)}})],1)])])])]),t._v(" "),i("div",{staticClass:"todo-list-wrapper"},[i("ol",{staticClass:"todo-list"},t._l(t.todos,(function(o){return i("li",{key:o,staticClass:"todo-item visible"},[i("span",{staticClass:"todo-item-wrapper has-more"},[t._m(0,!0),t._v(" "),i("span",{staticClass:"todo-item-title"},[t._v(t._s(o))])])])})),0)]),t._v(" "),t._m(1)])]),t._v(" "),i("span",{staticClass:"app-dash toggle"},[t._v("Todo")])])};n._withStripped=!0;const r={name:"MockTodo",data:()=>({title:"Long Term Goals",todos:["Get a Dog","Climb a Mountain","Visit Switzerland"],providerIcon:null}),created(){m.on("mockTodo:overrideContent",this.overrideContent),m.trigger("mockTodo:created")},mounted(){m.trigger("mockTodo:mounted")},destroyed(){m.off("mockTodo:overrideContent",this.overrideContent)},methods:{overrideContent({mockListTitle:t,mockTodos:o,mockProviderIcon:e}={}){t&&(this.title=t),o&&(this.todos=o),e&&(this.providerIcon=e)}}};e(20869);var d=(0,e(51900).Z)(r,n,[function(){var t=this.$createElement,o=this._self._c||t;return o("label",[o("input",{staticClass:"todo-item-checkbox",attrs:{type:"checkbox"}})])},function(){var t=this.$createElement,o=this._self._c||t;return o("footer",{staticClass:"footer-input new-todo-footer"},[o("input",{staticClass:"todo-input todo-new",attrs:{type:"text",placeholder:"New Todo"}})])}],!1,null,"fb28c188",null);d.options.__file="source/addins-vue/mockTodo/MockTodo.vue";const a=d.exports;function s(){const t=document.createElement("div");document.querySelector(".region.bottom-right").appendChild(t);const o=new i.Z({render:t=>t(a)}).$mount(t);m.once("mockTodo:destroy",(()=>{o.$el.remove(),o.$destroy()}))}s(),m.on("mockTodo:mount",s)},36029:(t,o,e)=>{(o=t.exports=e(23645)(!1)).i(e(99900),""),o.push([t.id,"\n.app-wrapper[data-v-fb28c188] { opacity: 1;\n}\n.todo .list-chooser-toggle .icon[data-v-fb28c188] { width: 22px; height: 22px;\n}\n.provider-icon[data-v-fb28c188] { width: 21px;\n}\n\n/* needs to be specific to override */\n.apps.hide-apps .app-container.show-anyway .toggle[data-v-fb28c188] { opacity: 1;\n}\n",""])},99900:(t,o,e)=>{(t.exports=e(23645)(!1)).push([t.id,"/* Todo */\n\n.todo { text-align: right; text-shadow: none; }\n\n.todo .app-container { position: relative; }\n\n.todo .todo-app { height: auto; width: 330px; padding: 0; position: absolute; display: block; opacity: 1; overflow-y: hidden; text-align: left; }\n\t.todo-app.animating::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0) !important; }\n\n\t.todo .drop-zone { width: 37px; position: absolute; top: 4px; bottom: 4px; z-index: 10000; font-size: 14px; opacity: 0; transition: all 0.3s ease-out; visibility: hidden; writing-mode: vertical-rl; }\n\t\t.todo .drop-left-zone { left: 0; }\n\t\t.todo .drop-right-zone { right: 0; }\n\t\t.todo .has-drop-left .drop-left-zone, .todo .has-drop-right .drop-right-zone { opacity: 1; visibility: visible; }\n\n\t\t.todo .bar { padding-top: 12px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; text-align: left; transition: all 0.2s ease; box-shadow: 0 0 10px rgba(0,0,0,0.125); }\n\t\t\t.todo .bar:before { position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: -1; background: rgba(255,255,255,0.275); content: \"\"; }\n\t\t\t\t.todo .hover .bar:before { background: rgba(255,255,255,0.525); }\n\n\t\t\t\t.light .todo .bar:before { background: rgba(0,0,0,0.17); }\n\t\t\t\t\t.light .todo .hover .bar:before { background: rgba(0,0,0,0.21); }\n\n\t\t\t.todo .drop-zone.hover .bar { transform: translateX(0); }\n\n\t\t\t.todo .bar-name { position: relative; font-weight: 500; line-height: 37px; text-transform: capitalize; transform: scale(0); transition: all 0.2s ease; }\n\t\t\t\t.todo .drop-zone.hover .bar-name { transform: scale(1); }\n\n\t\t\t.todo .left-bar { transform: translateX(-37px); overflow: hidden; }\n\t\t\t\t.todo .left-bar, .todo .left-bar:before { border-radius: 0 var(--border-radius) var(--border-radius) 0; }\n\t\t\t\t.todo .has-drop-left .left-bar { transform: translateX(-29px); }\n\n\t\t\t.todo .right-bar { transform: translateX(37px); overflow: hidden; }\n\t\t\t\t.todo .right-bar, .todo .right-bar:before  { border-radius: var(--border-radius) 0 0 var(--border-radius); }\n\t\t\t\t.todo .has-drop-right .right-bar { transform: translateX(29px); }\n\n\n.todo .dropdown-wrapper { position: relative; }\n\t.todo .dropdown { position: absolute; z-index: 10; }\n\t\t.todo .dropdown li { transition-duration: 0s; }\n\n\t\t.todo .dropdown .loading { margin: 2px 0; text-align: center; opacity: 0.7 !important; }\n\t\t\t.todo .dropdown .loading:hover { background: none; }\n\n\t\t/* 'Switch to...' submenu */\n\t\t.todo .dropdown.list-integrations { width: 220px; }\n\t\t\t.todo .list-integrations .dropdown-list-icon { opacity: 1; }\n\n\n.todo .icon-tick { height: 7px; width: 14px; fill: var(--color-icon); vertical-align: 6%; }\n\n\n/* Todo Header */\n.todo-header { --header-padding-top: 5px; min-height: var(--header-height); position: relative; z-index: 2; display: block; cursor: pointer !important;  }\n\t.todo-header-row { height: var(--header-height); position: relative; display: flex; flex-grow: 1; }\n\n\t\t.todo .list-color { width: 5px; position: absolute; top: 11px; bottom: 3px; left: 0; display: inline; border-top-right-radius: 3px; border-bottom-right-radius: 3px; }\n\n\t\t.todo .provider-icon { height: 20px; padding-right: 9px; }\n\t\t\t.momentum-todo .provider-icon { display: none; }\n\t\t\t.todo-ClickUp .provider-icon { margin-top: 2px; }\n\t\t\t.light .todo-GitHub .provider-icon, .light .todo-Microsoft .provider-icon, .light .dropdown-list-icon.GitHub, .light .dropdown-list-icon.icon-GitHub, .light .provider-list li img.GitHub, .light .provider-logo.GitHub { filter: brightness(13%); }\n\n\t\t.todo .list-icon { position: relative; top: 2px; }\n\n\t\t/* Project Chooser */\n\t\t.todo .project-chooser { --left-margin: -8px; margin-right: calc(var(--app-padding) * -1); padding-left: var(--app-padding); flex: 0 0 auto; display: flex; align-items: center; z-index: 5; }\n\n\t\t\t.todo .project-chooser-toggle { height: var(--chooser-height); margin: 2px 5px 0 var(--left-margin); padding: 8px 5px 4px 7px; position: relative; display: inline-block; background: rgba(255,255,255,0); border-radius: var(--border-radius); cursor: pointer; }\n\t\t\t\t.todo .active .project-chooser-toggle { background: rgba(255,255,255,0.12); }\n\n\t\t\t\t.todo .project-chooser .icon-wrapper { padding: 0; display: block; }\n\t\t\t\t\t.todo .project-chooser .icon-wrapper:after { height: auto; width: auto; top: 0; right: 0; bottom: 0; left: 0; border-radius: var(--border-radius); }\n\n\t\t\t\t\t.todo .project-chooser .provider-icon { padding-right: 1px; }\n\n\t\t\t\t\t.todo .project-chooser .todo-menu-dropdown-icon { height: 16px; width: 17px; margin-left: 3px;/* margin-right: 1px;*/ display: inline-block; cursor: pointer; fill: #fff; opacity: 0.5; }\n\t\t\t\t\t\t.light .todo .project-chooser .todo-menu-dropdown-icon { fill: #000; }\n\n\t\t\t\t\t\t.todo-provider-wrapper:hover .todo-menu-dropdown-icon { opacity: 0.8; }\n\n\t\t\t\t\t\t.project-chooser.active .todo-menu-dropdown-icon { opacity: 0.6; }\n\t\t\t\t\t\t\t.light .todo .project-chooser:hover .todo-menu-dropdown-icon { fill: #000; }\n\n\n\t\t\t.todo .project-chooser-dropdown { margin-top: 4px; margin-left: var(--left-margin); min-width: 230px; top: 100%; z-index: 100; transition: transform 0.15s ease; } /* <-- should generalize that transition/use variables */\n\n\t\t\t\t.todo .project-chooser-dropdown .dropdown-list { max-height: 209px; overflow: hidden; overflow-y: auto; }\n\t\t\t\t\t.todo .project-chooser-dropdown.short-list li:last-child { margin-bottom: 20px; }\n\t\t\t\t\t.todo .project-chooser-dropdown li:last-child { margin-bottom: 4px; }\n\n\t\t\t\t\t.todo-header .project-chooser-dropdown .dropdown-list.available-empty { height: 200px; }\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .available-empty li:last-child { margin-bottom: 20px; }\n\n\t\t\t\t\t.todo-header .project-chooser-dropdown li { padding-top: 5px; padding-bottom: 5px; }\n\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .provider-name { margin: 4px 0 -1px; cursor: default; font-weight: 600; opacity: 0.85; }\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .section-title { padding-top: 6px; padding-bottom: 4px; cursor: default; font-weight: 500; font-size: 71.42857%; text-transform: uppercase; cursor: default; opacity: 0.5; }\n\t\t\t\t\t\t\t.project-chooser-dropdown .provider-name:hover, .project-chooser-dropdown .section-title:hover { background: none !important; }\n\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .active-item.highlighted { background: rgba(255, 255, 255,0.15); }\n\t\t\t\t\t\t.light .todo-header .project-chooser-dropdown .active-item.highlighted { background: rgba(0,0,0,0.05); }\n\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .loading-dropdown { text-align: center; opacity: 0.5; }\n\n\n\t\t/* Active List */\n\t\t.todo .active-list-container { min-width: 0; /* <- important, see comment below */ padding-top: var(--header-padding-top); padding-left: var(--app-padding); flex: 1 1 auto; display: inline-flex; align-items: center; transition: all 0.2s ease; }\n\t\t\t/* Ensures todo dropdown ellipsis does not overflow flex container. See link for more info: https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size */\n\t\t\t.todo .active-list-name { font-size: 20px; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize; white-space: nowrap; }\n\n\t\t\t\t.todo .active-list-name.no-caps { text-transform: none; }\n\n\t\t\t/* List Chooser w/ Folders */\t\t\t\n\t\t\t.todo-folders .dropdown { top: var(--header-height); left: var(--safe-zone-padding);  }\n\t\t\t\t.todo-folders.active .dropdown { display: block; }\n\t\t\t\t\n\t\t\t\t.todo-folders .dropdown.nipple-top-left:after { left: 15px }\n\t\t\t\t\n\t\t\t\t.todo-folders .dropdown .list-chooser { max-height: 650px; overflow: auto; }\n\t\n\t\t\t/* List Chooser */\n\t\t\t.todo .list-chooser-toggle { margin: 0 6px; padding: 0; }\n\t\t\t\t.todo .list-chooser-toggle:after { --icon-wrapper-size: 22px; }\n\t\t\t\t\t.todo .list-chooser-toggle .icon { --icon-size: 10px; min-width: 0; margin-top: 2px; }\n\n\t\t\t/* Putting the positioning on this element because the JS is a mess. Ideally we'd just have .list-chooser at the same level as .dropdown */\n\t\t\t.todo .active-list-container .dropdown { top: var(--header-height); }\n\n\t\t\t.todo .list-chooser {  }\n\t\t\t\t.todo .list-chooser.nipple-top-left:after { left: 28px; }\n\t\t\t\t.todo .list-chooser li { --padding-v: 7px; --padding-h: 16px; min-width: 240px; padding: var(--padding-v) var(--padding-h); position: relative; font-size: 0.9375rem; line-height: normal; white-space: nowrap; }\n\n\t\t\t\t\t.todo .list-chooser li:hover { background: rgba(255,255,255,0.1); }\n\t\t\t\t\t\t.light .todo .list-chooser li:hover { background: rgba(255,255,255,0.6); }\n\n\t\t\t\t\t.todo .list-chooser .todo-list-section { padding-left: 38px; }\n\n\t\t\t\t\t.todo .list-chooser .list-color { width: 4px; top: 4px; bottom: 2px; }\n\n\t\t\t\t\t.todo .list-chooser .list-name { opacity: 0.7; line-height: 1.2; white-space: initial; } /* If the vertical alignment breaks, we might need to specify display: inline and vertical-align: baseline. For now, it's inherited from defaults. */\n\t\t\t\t\t\t.todo .todo-list-choice-active .list-name { font-weight: 500; opacity: 1; }\n\n\t\t\t\t\t.todo  .list-chooser .todo-count { margin-left: 3px; opacity: 0.45; font-size: 93.33333%; }\n\n\n\t\t\t\t.todo .list-chooser .todo-list-add-row { max-width: none !important; padding: 0 !important; list-style: none; }\n\t\t\t\t\t.todo .list-chooser .todo-list-add-row li { padding: 0; }\n\n\t\t\t\t\t.todo .todo-list-add-input, .todo-list-add-loading { padding: var(--padding-v) var(--padding-h); line-height: normal; }\n\t\t\t\t\t.todo .todo-list-add-input { width: 100%; opacity: 0.7; border-bottom: none; cursor: pointer; }\n\t\t\t\t\t\t.todo .input-mode .todo-list-add-input { cursor: text; }\n\t\t\t\t\t.todo .todo-list-add-icon { position: absolute; top: var(--padding-v); left: calc(var(--padding-h) - 1px); opacity: 0.7; }\n\t\t\t\t\t\t.todo .todo-list-add-icon .icon-plus { font-size: 14px; opacity: 0.6375; }\n\n\t\t\t\t\t.todo-list-add-row .upsell-row { padding: 5px 16px !important; display: flex; align-items: center; }\n\t\t\t\t\t\t.todo-list-add-row .upsell-row .copy { opacity: 0.5; font-size: 0.875rem; }\n\t\t\t\t\t\t.todo-list-add-row .upsell-row .badge { margin-top: 1px; margin-left: 8px; }\n\n\t\t\t\t\t\t\n\t\t\t\t\t/* Expandable version */\n\t\t\t\t\t.todo-folder {  }\t\t\t\t\t\n\t\t\t\t\t\t.todo-folder .icon-folder { --icon-size: 14px; margin-right: 4px; opacity: 0.4; vertical-align: -9%; }\n\n\t\t\t\t\t\t.todo-folder .icon-tick { margin-left: -1px; opacity: 0.5; transform: rotate(-90deg); vertical-align: 8%; }\n\t\t\t\t\t\t\t.todo-folder.active .icon-tick { transform: rotate(0); -webkit-backface-visibility: hidden; }\n\t\t\t\t\t\t\n\t\t\t\t\t\t.todo-folder .todo-list-section { display: none; }\n\t\t\t\t\t\t\t.todo-folder.active .todo-list-section { display: block; }\n\t\t\t\t\t\t\t\n\n\t\t\t/* ••• Dropdown */\n\t\t\t.todo-header-controls { flex: 0 0 auto; display: flex; }\n\n\t\t\t\t.todo-header .more { height: 100%; position: static; }\n\n\t\t\t\t\t.todo-header .more-toggle, .todo-header .mobile-close { padding:  var(--header-padding-top) calc(var(--app-padding) - 3px) 0 5px !important; position: relative; }\n\n\t\t\t\t\t.todo-header .mobile-close { margin-left: 0px; }\n\n\t\t\t\t\t.todo-actions-dropdown { min-width: auto; margin-top: -6px; right: calc(var(--app-padding) - 7px); bottom: auto; }\n\t\t\t\t\t\t.light .todo-header .dropdown .header { border-bottom: 1px solid #eee; }\n\n\t\t\t\t\t\t.todo .icon-external { opacity: 0.35; }\n\t\t\t\t\t\t.todo .icon-autofocus { --icon-size: 9px; }\n\t\t\t\t\t\t.todo .icon-assigned { --icon-size: 14px; }\n\t\t\t\t\t\t.todo .icon-clear { --icon-size: 14px; stroke: var(--color-icon); }\n\t\t\t\t\t\t.todo .icon-move-to-today { --icon-size: 16px; margin-left: -3px; }\n\t\t\t\t\t\t\t.todo .icon-move-to-today #icon-path-one { fill: var(--color-icon); }\n\t\t\t\t\t\t\t.todo .icon-move-to-today #icon-path-two { stroke: var(--color-icon); }\n\n\n\t\t\t.todo-provider-loading.dropdown-detail { bottom: 0; }\n\t\t\t.todo-provider-loading .loading { display: flex; justify-content: center; align-items: center; height: 100%; padding: 0 !important; margin: 0 !important; }\n\n\n/* Todo Body */\n.todo-list-wrapper { height: 100%; width: 100%; position: relative; z-index: 1; overflow: hidden; transition: max-height 0.3s ease, min-height 0.3s ease, padding 0.3s ease; }\n.todo.has-message .todo-list-wrapper { padding-top: 1rem; }\n/* max-height and min-height transition durations must be the same or the transition will cut out ^ */\n\n\t.todo-list { /* min-height: 213px; */ width: 100%; overflow-x: hidden; overflow-y: auto; transition: opacity 0.2s ease}\n\t\t.todo-list.animating::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0) !important; }\n\t\t.todo-list.dragging { }\n\t\t.todo-list.drop-top-margin { margin-top: -52px; }\n\t\t.todo-list.hide-scroll { overflow-y: hidden; }\n\t\t.todo-list.drop-area { padding: 10px 0; }\n\t\t.todo-list .placeholder { padding: 0; }\n\n\t\t.todo-item { position: relative; display: none; visibility: hidden; opacity: 0; font-size: 1rem; line-height: 1.1875; /* <-- 19px */ }\n\t\t\t/* Linux incompatibility fix from display: block */\n\t\t\t.todo-item.visible { width: 100%; display: inline-block; visibility: visible; opacity: 1; }\n\t\t\t.todo-item.hidden { display: none; }\n\t\t\t.todo-item.transition { transition: visibility 0s, opacity 0.4s ease, margin-top 0.4s ease; }\n\t\t\t.todo-item.drop-area { padding: 8px 0; }\n\t\t\t.todo-item.active { background-color: rgba(255,255,255,0.06); }\n\t\t\t\t.light .todo-item.active { background-color: rgba(0,0,0,0.03); }\n\n\t\t\t.todo-item label { padding-left: var(--app-padding); padding-right: 8px; position: relative; top: 1px; z-index: 10; display: flex; opacity: 1; font-size: 1rem; }\n\t\t\t\t.touch .todo-item label { top: 2px; }\n\t\t\t.todo-item input { width: auto; }\n\n\t\t\t.todo-item-wrapper { padding: 3px 0 2px; display: flex; align-items: baseline; }\n\n\t\t\t\t.todo-item-title { display: block; cursor: default; outline: none; word-wrap: break-word; flex: 1 1 auto; min-width: 0; }\n\t\t\t\t\t.editing > .todo-item-wrapper .todo-item-title { opacity: 0.7; outline: none; -webkit-user-select: text; user-select: text; }\n\t\t\t\t\t.done > .todo-item-wrapper .todo-item-title { opacity: 0.5; text-decoration: line-through; }\n\t\t\t\t\t.done-list .todo-item-title { opacity: 0.6; text-decoration: none; }\n\t\t\t\t\t.todo-item-title:empty:before { visibility: hidden; content: \"!\"; }\n\n\t\t\t.todo-item .more { position: static; }\n\t\t\t\t.todo-item .more-toggle { margin: -3px 0; padding: 0 calc(var(--app-padding) - 1px) 0 8px; z-index: 2; }\n\t\t\t\t\t.todo-item-wrapper:hover .more-toggle { opacity: 0.525; } /* wrapper needed for nested todo hovers */\n\n\t\t\t\t.editing .more { opacity: 0; } /* <-- Check if needed */\n\n\t\t\t\t.todo-item-dropdown { top: 20px; right: calc(var(--app-padding) - 5px); bottom: auto; }\n\t\t\t\t\t.todo-item-dropdown li {  }\n\t\t\t\t\t\t.todo-item-dropdown .list-color { width: 4px; margin: 0; top: 3px; bottom: 2px; }\n\n\t\t\t\t\t.todo-item .icon-wrapper:after { --icon-wrapper-size: 23px; }\n\n\t\t\t\t\t.todo-item .icon-ellipsis { padding-top: 1px; }\n\n\t\t\t\t\t.todo-item-wrapper:hover .icon-wrapper, .todo-item .active .icon-wrapper { opacity: 1; }\n\n\t\t\t\t.todo-item-active > .todo-item-wrapper { display: block; background-color: rgba(255,255,255,0.06); box-shadow: 0 0 0px 2px rgba(255,255,255,0.06); }\n\t\t\t\t\t.light .todo-item-active > .todo-item-wrapper { background-color: rgba(0,0,0,0.03); box-shadow: 0 0 0px 2px rgba(0,0,0,0.03); }\n\n\t\t\t\t.todo-item .control { height: 12px; width: 12px; right: 0; position: absolute; border-radius: 100%; cursor: pointer; line-height: 12px; text-align: center; }\n\n\t\t\t\t.todo-item .loading-icon, .todo-item .error-icon { position: absolute; top: 6px; display: none; }\n\t\t\t\t\t.todo-item .loading > .todo-item-wrapper .loading-icon, .todo-item .failed > .todo-item-wrapper .error-icon { display: inline-block; }\n\n\t\t\t\t\t.todo-item .loading .destroy, .todo-item .failed .destroy { display: none; }\t/* retaining .destroy for now while we have the old todo list active too */\n\t\t\t\t\t.todo-item .loading .more, .todo-item .failed .more { display: none; }\n\n\t\t\t\t\t.todo-item .loading-icon { height: 10px; width: 10px; right: 6px; border-width: 1px; }\n\n\t\t\t\t\t.todo-item .error-icon { top: 4px; right: 13px; }\n\n\n\t\t.todo-section { margin: 0; padding: 12px var(--app-padding) 6px; opacity: 0.75; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }\n\t\t\t.todo-list .todo-section:first-child { padding-top: 5px; }\n\n\t\t\t.todo-section-collapsible { cursor: pointer; }\n\t\t\t\t.todo-section-collapsible:hover, .todo-section-collapsible:active { opacity: 1; }\n\n\t\t\t.todo-section .icon-tick { margin-left: 1px; opacity: 0.5; }\n\t\t\t\t.todo-section-collapsed .icon-tick { transform: rotate(-90deg); -webkit-backface-visibility: hidden; }\n\t\t\t\t.todo-section-collapsible:hover .icon-tick { opacity: 0.85; }\n\n\t\t.todo-subsection { cursor: default; }\n\t\t\t.todo-subsection .todo-item-checkbox { display: none; }\n\t\t\t.todo-subsection .todo-item-title { margin-left: 16px; margin-bottom: -2px; font-size: 13px; opacity: 0.7; }\n\n\t\t.todo-load-more { padding: 8px var(--app-padding) 4px; text-align: center; }\n\t\t\t.todo-load-more .todo-load-more-button, .todo-load-more .todo-load-more-button { padding: 7px 21px; border-radius: 100px; font-size: 12px; transition: opacity 0.2s ease !important; }\n\n\t\t\t.todo-load-more .loading { height: 28px; position: relative; display: block; line-height: 25px; }\n\t\t\t\t.todo-load-more .loading .loading-icon { margin-right: 6px; position: relative; top: -2px; left: 2px; right: auto; }\n\t\t\t\t.todo-load-more .loading .loading-title { font-size: 12px; opacity: 0.9; }\n\n\t\t\t.todo-load-more .todo-load-more-done { height: 28px; font-size: 12px; line-height: 25px; opacity: 0.9; transition: opacity 0.2s ease !important; }\n\n\t\t.todo-list .info { margin-bottom: 8px; padding: 5px 15px; position: relative; background: #333; color: #ccc; }\n\t\t\t.todo-list .info-hide { height: 29px; width: 29px; min-width: 0; padding: 0 !important; position: absolute; top: 0; right: 0; font-size: 70%; line-height: 29px; opacity: .5; text-align: center; }\n\t\t\t.todo-list .info-title { margin: 0 0 1px; font-size: 90%; }\n\t\t\t.todo-list .info-description { margin: 0; font-size: 85%; line-height: 120%; opacity: 0.5; }\n\t\t\t.todo-list .info-action { margin: -3px -15px -5px; padding: 5px 15px !important; font-size: 80%; opacity: 0.8; }\n\n\t\t\t.todo .empty .empty-title { padding: 0; cursor: default; opacity: 0.7; }\n\n\t\t\t.todo .empty .empty-link { display: inline-block; cursor: pointer; transition: opacity 0.3s ease; }\n\t\t\t\t.todo .empty-link .icon { margin-left: 3px; font-size: 16px; line-height: 1; vertical-align: -5%; }\n\t\t\t\t.todo-list .empty .empty-link:hover { opacity: 0.8; }\n\t\t\t.todo-list .empty .new-todo-button { transition: opacity 0.3s ease; }\n\n\t\t.todo-item ol { margin-left: 18px; } /* for nested todos */\n\n.todo-upsell { min-height: 180px; }\n\n/* Todo Footer */\n.todo .footer-input { display: flex; justify-content: space-between; align-items: center; position: static; }\n\n.todo .is-empty .todo-app { overflow: hidden; }\n.todo .is-empty .todo-new { position: absolute; bottom: 0; }\n.todo .is-empty .todo-list { visibility: hidden; }\n.todo .is-empty .empty { display: flex; }\n\n@media screen and (max-width: 450px) {\n\t.todo .todo-header { --header-padding-top: 2px; display: flex; }\n\t\t.todo-actions-dropdown { right: 52px; }\n}\n",""])},23645:t=>{"use strict";t.exports=function(t){var o=[];return o.toString=function(){return this.map((function(o){var e=function(t,o){var e,i=t[1]||"",n=t[3];if(!n)return i;if(o&&"function"==typeof btoa){var r=(e=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"),d=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[i].concat(d).concat([r]).join("\n")}return[i].join("\n")}(o,t);return o[2]?"@media "+o[2]+"{"+e+"}":e})).join("")},o.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var r=this[n][0];null!=r&&(i[r]=!0)}for(n=0;n<t.length;n++){var d=t[n];null!=d[0]&&i[d[0]]||(e&&!d[2]?d[2]=e:e&&(d[2]="("+d[2]+") and ("+e+")"),o.push(d))}},o}},87845:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTE2LjYgOC42TDEyIDEzLjIgNy40IDguNiA2IDEwbDYgNiA2LTZ6Ii8+PC9zdmc+"},20264:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K"},51900:(t,o,e)=>{"use strict";function i(t,o,e,i,n,r,d,a){var s,p="function"==typeof t?t.options:t;if(o&&(p.render=o,p.staticRenderFns=e,p._compiled=!0),i&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),d?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(d)},p._ssrRegister=s):n&&(s=a?function(){n.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:n),s)if(p.functional){p._injectStyles=s;var l=p.render;p.render=function(t,o){return s.call(o),l(t,o)}}else{var c=p.beforeCreate;p.beforeCreate=c?[].concat(c,s):[s]}return{exports:t,options:p}}e.d(o,{Z:()=>i})},20869:(t,o,e)=>{var i=e(36029);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,e(45346).Z)("ed76b036",i,!1,{ssrId:!0})},45346:(t,o,e)=>{"use strict";function i(t,o){for(var e=[],i={},n=0;n<o.length;n++){var r=o[n],d=r[0],a={id:t+":"+n,css:r[1],media:r[2],sourceMap:r[3]};i[d]?i[d].parts.push(a):e.push(i[d]={id:d,parts:[a]})}return e}e.d(o,{Z:()=>m});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},d=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,s=0,p=!1,l=function(){},c=null,h="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t,o,e,n){p=e,c=n||{};var d=i(t,o);return u(d),function(o){for(var e=[],n=0;n<d.length;n++){var a=d[n];(s=r[a.id]).refs--,e.push(s)}for(o?u(d=i(t,o)):d=[],n=0;n<e.length;n++){var s;if(0===(s=e[n]).refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete r[s.id]}}}}function u(t){for(var o=0;o<t.length;o++){var e=t[o],i=r[e.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](e.parts[n]);for(;n<e.parts.length;n++)i.parts.push(v(e.parts[n]));i.parts.length>e.parts.length&&(i.parts.length=e.parts.length)}else{var d=[];for(n=0;n<e.parts.length;n++)d.push(v(e.parts[n]));r[e.id]={id:e.id,refs:1,parts:d}}}}function f(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function v(t){var o,e,i=document.querySelector("style["+h+'~="'+t.id+'"]');if(i){if(p)return l;i.parentNode.removeChild(i)}if(g){var n=s++;i=a||(a=f()),o=w.bind(null,i,n,!1),e=w.bind(null,i,n,!0)}else i=f(),o=y.bind(null,i),e=function(){i.parentNode.removeChild(i)};return o(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;o(t=i)}else e()}}var x,b=(x=[],function(t,o){return x[t]=o,x.filter(Boolean).join("\n")});function w(t,o,e,i){var n=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(o,n);else{var r=document.createTextNode(n),d=t.childNodes;d[o]&&t.removeChild(d[o]),d.length?t.insertBefore(r,d[o]):t.appendChild(r)}}function y(t,o){var e=o.css,i=o.media,n=o.sourceMap;if(i&&t.setAttribute("media",i),c.ssrId&&t.setAttribute(h,o.id),n&&(e+="\n/*# sourceURL="+n.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);
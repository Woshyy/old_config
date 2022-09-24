"use strict";(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[203],{79808:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var i=n(20144),s=n(58701),r=n(96299);const a=new(i.Z.extend({name:"ModalDevPanelManager",data:()=>({experimentMap:(0,r.DV)(),definitions:s.U,pinnedStep:null}),methods:{setStepActive(e,t){m.cmd("modal.open",e,{subStepIndex:t})},setPinnedStepActiveOnDashLoad({stepId:e,subStepIndex:t,experimentId:n,variantId:i}={}){let s;if(n){const t=this.experimentMap[n],r=t&&t.variants[i];s=r&&r.steps[e]}else s=this.definitions[e];s&&(this.toggleStepPinned(s,{stepId:e,subStepIndex:t,experimentId:n,variantId:i}),m.appsReady?this.setStepActive(s,t):this.$e.listenToOnce(m,"appsReady",(()=>{this.setStepActive(s,t)})))},toggleStepPinned(e,{stepId:t,subStepIndex:n,experimentId:i,variantId:s}={}){const r=localStorage.getObject("dev-panel:pinned-step");r?this.objectsMatch(r,{stepId:t,subStepIndex:n,experimentId:i,variantId:s})?(this.$set(e,"pinned",!e.pinned),this.pinnedStep=e.pinned?e:null,this.updateSubStepIndex(e,e.pinned?n:void 0),null===this.pinnedStep&&m.trigger("modal:close")):this.objectsMatch((({stepId:e,experimentId:t,variantId:n})=>({stepId:e,experimentId:t,variantId:n}))(r),{stepId:t,experimentId:i,variantId:s})?this.updateSubStepIndex(e,n):(this.pinnedStep&&(this.$set(this.pinnedStep,"pinned",!1),this.updateSubStepIndex(this.pinnedStep,void 0)),this.$set(e,"pinned",!0),this.updateSubStepIndex(e,n),this.pinnedStep=e):(this.$set(e,"pinned",!0),this.pinnedStep=e,this.updateSubStepIndex(e,n)),e.pinned?localStorage.setObject("dev-panel:pinned-step",{stepId:t,subStepIndex:n,experimentId:i,variantId:s}):localStorage.removeItem("dev-panel:pinned-step")},updateSubStepIndex(e,t){void 0===t?this.$delete(e,"pinnedSubStepIndex"):this.$set(e,"pinnedSubStepIndex",t)},objectsMatch:(e,t)=>new Array(...new Set([...Object.keys(e),...Object.keys(t)])).every((n=>e[n]===t[n]))}}))},23645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,i=e[1]||"",s=e[3];if(!s)return i;if(t&&"function"==typeof btoa){var r=(n=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=s.sources.map((function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"}));return[i].concat(a).concat([r]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},s=0;s<this.length;s++){var r=this[s][0];null!=r&&(i[r]=!0)}for(s=0;s<e.length;s++){var a=e[s];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},51900:(e,t,n)=>{function i(e,t,n,i,s,r,a,d){var o,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),a?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},p._ssrRegister=o):s&&(o=d?function(){s.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:s),o)if(p.functional){p._injectStyles=o;var u=p.render;p.render=function(e,t){return o.call(t),u(e,t)}}else{var c=p.beforeCreate;p.beforeCreate=c?[].concat(c,o):[o]}return{exports:e,options:p}}n.d(t,{Z:()=>i})},45346:(e,t,n)=>{function i(e,t){for(var n=[],i={},s=0;s<t.length;s++){var r=t[s],a=r[0],d={id:e+":"+s,css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(d):n.push(i[a]={id:a,parts:[d]})}return n}n.d(t,{Z:()=>f});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},a=s&&(document.head||document.getElementsByTagName("head")[0]),d=null,o=0,p=!1,u=function(){},c=null,l="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,s){p=n,c=s||{};var a=i(e,t);return v(a),function(t){for(var n=[],s=0;s<a.length;s++){var d=a[s];(o=r[d.id]).refs--,n.push(o)}for(t?v(a=i(e,t)):a=[],s=0;s<n.length;s++){var o;if(0===(o=n[s]).refs){for(var p=0;p<o.parts.length;p++)o.parts[p]();delete r[o.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],i=r[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(S(n.parts[s]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(S(n.parts[s]));r[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function S(e){var t,n,i=document.querySelector("style["+l+'~="'+e.id+'"]');if(i){if(p)return u;i.parentNode.removeChild(i)}if(h){var s=o++;i=d||(d=m()),t=b.bind(null,i,s,!1),n=b.bind(null,i,s,!0)}else i=m(),t=x.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var g,I=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,n,i){var s=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=I(t,s);else{var r=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function x(e,t){var n=t.css,i=t.media,s=t.sourceMap;if(i&&e.setAttribute("media",i),c.ssrId&&e.setAttribute(l,t.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);
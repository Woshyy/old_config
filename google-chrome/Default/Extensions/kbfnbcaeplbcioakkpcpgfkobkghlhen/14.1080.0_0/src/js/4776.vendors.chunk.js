(self.webpackChunk=self.webpackChunk||[]).push([[4776],{15073:(t,e,n)=>{n.d(e,{u:()=>r});var r,i=n(27378),o=n(40327),u=n(98403),a=n(19751),c=n(2844),l=n(85089),f=n(2834),p=n(9223),s=n(5114),d=n(83078),m=n(90845);!function(t){t.Manager=function(e){var n=e.children,r=e.remSize,o=u.Dx(r).pipe(a.shareReplay({refCount:!0,bufferSize:1}));return m.P.useSingleton("RemSize.Manager"),m.P.useSubscriptionTo(o),i.createElement(t.Context.Provider,{value:o},n)},t.DefaultManager=function(e){var n=e.children;return m.P.useSingleton("RemSize.DefaultManager"),i.createElement(t.Manager,{remSize:t.withRemSizeEffect(t.defaultSizeObserver)},n)},t.defaultSizeObserver=c.aj(l.Lw("(max-width: 1359px)"),l.Lw("(min-width: 1600px)"),(function(t,e){return t?14:e?18:16})),t.withRemSizeEffect=function(e,n){return void 0===n&&(n=t.defaultFontSizeSetter),e.pipe(f.b((function(t){return n(s.some(t))})),p.x(n.bind(null,s.none)),a.shareReplay({refCount:!0,bufferSize:1}))},t.defaultFontSizeSetter=function(e){t.setRootCssVar(document.documentElement,e),t.setRootFontSize(e)},t.Context=i.createContext(t.defaultSizeObserver),t.setRootCssVar=function(t,e){t.style.setProperty("--rem",(0,o.pipe)(e,s.map(String),d.QP))},t.setRootFontSize=function(t){document.documentElement.style.fontSize=(0,o.pipe)(t,s.map((function(t){return t+"px"})),d.QP)}}(r||(r={}))},67424:(t,e,n)=>{n.d(e,{t:()=>S});var r,i=n(59312),o=n(27378),u=n(57050),a=n(40327),c=n(5739),l=n(12187),f=n(98403),p=n(77176),s=n(2844),d=n(28043),m=n(71249),h=n(45614),y=n(32426),g=n(19962),b=n(22232),v=n(95574),x=n(5114),k=n(95195);!function(t){var e,n,r;function o(t,n){var r=n.position,o=n.point,u={width:Math.trunc(t.width),height:Math.trunc(t.height)};return g.UL.validate(e.match((function(){return(0,i.pi)({top:o.y,right:o.x,bottom:o.y+u.height,left:o.x-u.width},u)}),(function(){return(0,i.pi)({top:o.y-u.height,right:o.x,bottom:o.y,left:o.x-u.width},u)}),(function(){return(0,i.pi)({top:o.y-u.height,right:o.x+u.width,bottom:o.y,left:o.x},u)}),(function(){return(0,i.pi)({top:o.y,right:o.x+u.width,bottom:o.y+u.height,left:o.x},u)}))(r))}function u(e){return t.topLeft(g.UL.Point.normalize({x:e.left,y:e.top}))}!function(t){t.topLeft="topLeft",t.topRight="topRight",t.bottomRight="bottomRight",t.bottomLeft="bottomLeft"}(e=t.Position||(t.Position={})),function(t){t.match=function(e,n,r,i){return function(o){switch(o){case t.topRight:return e();case t.bottomRight:return n();case t.bottomLeft:return r();case t.topLeft:return i();default:return(0,b.vE)(o)}}}}(e=t.Position||(t.Position={})),t.topLeft=function(t){return{position:e.topLeft,point:g.UL.Point.normalize(t)}},t.topRight=function(t){return{position:e.topRight,point:g.UL.Point.normalize(t)}},t.bottomRight=function(t){return{position:e.bottomRight,point:g.UL.Point.normalize(t)}},t.bottomLeft=function(t){return{position:e.bottomLeft,point:g.UL.Point.normalize(t)}},t.relativeTo=function(t,e){return{position:t.position,point:g.UL.Point.relativeTo(t.point,e)}},t.empty=t.topLeft(g.UL.Point.empty),t.toRect=o,t.fromRect=u,t.inRect=function(t,e){var n=e.point;return g.UL.hasPoint(t,n)},t.toCss=function(t){var n=t.position,r=t.point;return e.match((function(){return{top:r.y,right:r.x}}),(function(){return{right:r.x,bottom:r.y}}),(function(){return{bottom:r.y,left:r.x}}),(function(){return{top:r.y,left:r.x}}))(n)},function(e){e.create=function(t,e){return(0,b.kG)(t.point.x===e.point.x||t.point.y===e.point.y,"can not form Zone without a common dimension",(function(){return JSON.stringify({a:t,b:e})})),[t,e]},e.bySide=function(n,r){return g.UL.Side.match((function(){return e.create(t.bottomLeft({x:Math.ceil(r.left),y:Math.ceil(r.top)}),t.bottomRight({x:Math.floor(r.right),y:Math.ceil(r.top)}))}),(function(){return e.create(t.topLeft({x:Math.floor(r.right),y:Math.ceil(r.top)}),t.bottomLeft({x:Math.floor(r.right),y:Math.floor(r.bottom)}))}),(function(){return e.create(t.topLeft({x:Math.ceil(r.left),y:Math.floor(r.bottom)}),t.topRight({x:Math.floor(r.right),y:Math.floor(r.bottom)}))}),(function(){return e.create(t.topRight({x:Math.ceil(r.left),y:Math.ceil(r.top)}),t.bottomRight({x:Math.ceil(r.left),y:Math.floor(r.bottom)}))}))(n)}}(n=t.Zone||(t.Zone={})),function(t){t.byAxis=function(t,e){return h.sQ((0,y.getFirstSemigroup)(),m.IX)(g.UL.Axis.toSides(t).map((function(t){return[t,n.bySide(t,e)]})))}}(t.Variants||(t.Variants={})),function(e){function n(t,e){return(0,a.pipe)(g.UL.intersection(t,e),x.map((function(t){var n=t.width/e.width,r=t.height/e.height,i=(Number.isNaN(n)?0:n/2)+(Number.isNaN(r)?0:r/2);return(0,b.kG)(i>=0,"quality can not be negavite: ".concat(i)),(0,b.kG)(i<=1,"quality can be higher than 1: ".concat(i)),i})))}e.empty={quality:0,point:t.empty},e.qualityOfIntersection=n,e.byViewport=function(t,e){return{quality:(0,a.pipe)(n(t,e),x.getOrElse((function(){return 0})))+(0,a.pipe)(g.UL.scale(2,e),k.tS(g.UL.normalize),x.fromEither,x.chain((function(e){return n(t,e)})),x.getOrElse((function(){return 0}))),point:u(e)}},e.fromZone=function(t,n,r){return(0,a.pipe)(m.IX.traverse(k.wE)(r,(function(t){return o(n,t)})),k.tS((function(t){var e=t[0],n=t[1];return g.UL.join(e,n)})),k.tS((function(t){return g.xu.placeIntoRect(n,t)})),k.UI((function(n){return n.map((function(n){return e.byViewport(t,n)}))})))}}(r=t.Qualified||(t.Qualified={})),function(t){t.build=function(t,e,n){return(0,a.pipe)(n,h.UI((function(n){return r.fromZone(t,e,n)})))}}(t.QualifiedVariants||(t.QualifiedVariants={})),function(t){var e;!function(t){t[t.left=0]="left",t[t.middle=1]="middle",t[t.right=2]="right",t[t.edges=20]="edges",t[t.any=210]="any"}(e=t.Placement||(t.Placement={})),t.takeBy=function(t,e){return function(n){return(0,a.pipe)(n,h.To({point:r.empty,side:t},(function(n,r,i){return(0,a.pipe)(i,k.UI((function(i){return i.filter((function(r,i){return e.toString().includes(i.toString())&&t===n})).reduce((function(t,e){return e.quality>t.point.quality?{point:e,side:n}:t}),r)})),v.MH)}))).point}},t.preferBy=function(t,e){return function(n){return(0,a.pipe)(n,h.To({point:r.empty,side:t},(function(n,r,i){return(0,a.pipe)(i,k.UI((function(i){return i.reduce((function(r,i,o){return i.quality>r.point.quality||i.quality===r.point.quality&&e.toString().includes(o.toString())&&t===n?{point:i,side:n}:r}),r)})),v.MH)}))).point}},t.preferTopMiddle=t.preferBy("top",e.middle),t.preferTopEdges=t.preferBy("top",e.edges)}(t.Selector||(t.Selector={}))}(r||(r={}));var S,w=n(83078),U=n(8125),R=n(44060),L=n(101),E=n(89894),C=n(90845);!function(t){!function(t){t.toSelector=function(t){switch(t){case"top":case"topCenter":return{align:"top",selector:r.Selector.preferBy("top",r.Selector.Placement.middle)};case"topRight":return{align:"top",selector:r.Selector.preferBy("top",r.Selector.Placement.right)};case"topLeft":return{align:"top",selector:r.Selector.preferBy("top",r.Selector.Placement.left)};case"bottom":case"bottomCenter":return{align:"bottom",selector:r.Selector.preferBy("bottom",r.Selector.Placement.middle)};case"bottomRight":return{align:"bottom",selector:r.Selector.preferBy("bottom",r.Selector.Placement.right)};case"bottomLeft":return{align:"bottom",selector:r.Selector.preferBy("bottom",r.Selector.Placement.left)};case"left":return{align:"left",selector:r.Selector.preferBy("left",r.Selector.Placement.middle)};case"right":return{align:"right",selector:r.Selector.preferBy("right",r.Selector.Placement.middle)};case"auto":case"center":return{align:g.UL.Axis.vertical,selector:r.Selector.preferBy("top",r.Selector.Placement.middle)};default:return(0,b.vE)(t)}}}(t.Alignment||(t.Alignment={})),t.ByPoint=function(t){var e=t.point,n=t.className,u=(0,i._T)(t,["point","className"]);return o.createElement(c.F.div,(0,i.pi)({"data-role":"positioned-container",style:e.pipe(p.U(w.dH(r.toCss,{})))},(0,l.Sh)(N.wrapper,n,e.pipe(p.U((function(t){return x.isNone(t)?N.hidden:""})))),u))};var e=function(e){var i,a=C.P.useRectWatcher(),c=a.rect,l=a.onMount,s=f.Dx(e.rect),d=f.Dx(e.pinTargetRect),h=m(e.align),y=n(s,c,h,null!==(i=e.selector)&&void 0!==i?i:r.Selector.preferTopMiddle,d,"relative"===e.position);return o.createElement(t.ByPoint,{mount:l,className:e.className,point:y.pipe(p.U(x.map((function(t){return t.tangentialPoint}))))},!0===e.withPin&&y.pipe(p.U((0,u.ls)(x.chain((function(t){return t.median})),x.map((function(e){return o.createElement(t.Pin,{point:e,key:"pin"})})),x.toNullable))),e.children)};t.ByAbsoluteRect=function(t){return o.createElement(e,(0,i.pi)({},t,{position:"absolute"}))},t.ByRelativeRect=function(t){return o.createElement(e,(0,i.pi)({},t,{position:"relative"}))},t.Pin=function(t){var e=f.Dx(t.point).pipe(p.U((function(t){return t.side})),p.U((function(t){return G[t]}))),n=f.Dx(t.point).pipe(p.U((function(t){return t.point})),p.U((function(t){var e=t.x;return{top:t.y,left:e}})));return o.createElement(c.F.i,(0,i.pi)({"data-role":"pin",style:n},(0,l.Sh)(e,G.wrapper)))};var n=function(t,e,n,i,u,c){return s.aj(t,o.useContext(L.l.Context).pipe(p.U((function(t){return t.rect}))),e.pipe(d.x(x.getEq(g.xu.eq).equals)),u).pipe(p.U((function(t){var e=t[0],o=t[1],u=t[2],l=t[3];return(0,a.pipe)(u,x.map((function(t){var u=r.QualifiedVariants.build(o,t,n(e)),f=i(u).point,p=(0,a.pipe)(r.toRect(t,f),x.fromEither,x.chain((function(t){return(0,a.pipe)(g.UL.getMedian(e,t),x.map((function(e){return{anchorMedian:e,bodyRect:t}})))})),x.chain((function(t){var e=t.anchorMedian,n=t.bodyRect;if(void 0!==l){var i=g.UL.stickToSide(g.UL.Side.invert(e.side),l)(n);return f=r.fromRect(i),(0,a.pipe)(g.UL.getMedian(l,i),x.map((function(t){var e=t.side,n=t.point;return{side:e,point:g.UL.Point.relativeTo(n,i)}})))}return(0,a.pipe)(x.some(e),x.map((function(t){var e=t.side,r=t.point;return{side:e,point:g.UL.Point.relativeTo(r,n)}})))})));return{tangentialPoint:r.relativeTo(f,c?e:o),median:p}})))})))},m=function(t){return void 0===t&&(t=g.UL.Axis.both),(0,U.CI)(g.UL.Axis,t)?function(e){return r.Variants.byAxis(t,e)}:function(e){var n;return(n={})[t]=r.Zone.bySide(t,e),n}}}(S||(S={}));var M={position:"absolute",border:"".concat(E.ux.px(7)," solid ").concat(R.Il.BackgroundTooltip),transform:"translate(".concat(E.ux.px(-7),", ").concat(E.ux.px(-7),")")},T={borderTopColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",$nest:{"& + *":{transform:"translateY(".concat(E.ux.px(7),")")}}},P={borderTopColor:"transparent",borderRightColor:"transparent",borderBottomColor:"transparent",$nest:{"& + *":{transform:"translateX(".concat(E.ux.px(-7),")")}}},z={borderRightColor:"transparent",borderBottomColor:"transparent",borderLeftColor:"transparent",$nest:{"& + *":{transform:"translateY(".concat(E.ux.px(-7),")")}}},I={borderTopColor:"transparent",borderBottomColor:"transparent",borderLeftColor:"transparent",$nest:{"& + *":{transform:"translateX(".concat(E.ux.px(7),")")}}},G=E.ux.stylesheet({wrapper:[M],top:[T],right:[P],bottom:[z],left:[I]}),N=E.ux.stylesheet({hidden:[{visibility:"hidden",opacity:0}],wrapper:[{position:"absolute",transition:"opacity .2s"}]})},8965:(t,e,n)=>{n.d(e,{$:()=>d});var r,i=n(59312),o=n(27378),u=n(5739),a=n(12187),c=n(98403),l=n(22232),f=n(44060),p=n(89894),s=n(40456);function d(t){var e=t.wrapperClassName,n=t.variation,r=t.isIdle,a=(t.ref,t.label),l=(0,i._T)(t,["wrapperClassName","variation","isIdle","ref","label"]);return o.createElement(u.F.span,{"data-role":"spinner",role:"status","aria-busy":!Boolean(r),"aria-live":Boolean(r)?"off":"polite","aria-label":null!=a?a:"Content is loading.",className:e},c.ab(n,(function(t){return o.createElement(d.Svg,(0,i.pi)({},l,{type:t,isIdle:r}))})))}!function(t){t.getClassName=function(t){return function(e){switch(e){case"red":return t.red;case"green":return t.green;case"blue":return t.blue;case"white":return t.white;case"violet":return t.violet;case"yellow":return t.yellow;case"yellowPremium":return t.yellowPremium;case"orange":return t.orange;case"gray":return t.gray;case"cyan":return t.cyan;default:return(0,l.vE)(e)}}},t.Svg=function(e){var n=e.className,r=e.size,u=void 0===r?64:r,c=e.strokeWidth,f=void 0===c?2:c,p=e.type,s=e.name,d=e.isIdle,m=(0,i._T)(e,["className","size","strokeWidth","type","name","isIdle"]),h=o.useRef(null),g=o.useRef(null);return o.useEffect((function(){return(0,l.kG)(null!==h.current,"groupEl should be already created"),g.current=h.current.animate({transform:["rotate(0deg)","rotate(360deg)"]},{duration:2e3,easing:"linear",fill:"forwards",iterations:1/0}),function(){return g.current.cancel()}}),[]),o.useEffect((function(){(0,l.kG)(null!==g.current,"groupAnimation should be already created");var t=g.current;Boolean(t.play)&&(!0===d?t.pause():"running"!==t.playState&&t.play())})),o.createElement("svg",(0,i.pi)({"data-role":s},(0,a.Sh)(n),{viewBox:"25 25 50 50",width:u,height:u,"aria-hidden":!0},m),o.createElement("g",{transform:"translate(50 50)"},o.createElement("g",{ref:h},o.createElement("circle",(0,i.pi)({},(0,a.Sh)(E.path,!0===d&&y,t.getClassName(E)(p)),{cx:"50",cy:"50",r:"20",fill:"none",transform:"translate(-50 -50)",strokeWidth:f,strokeMiterlimit:"10"})))))}}(d||(d={}));var m=200,h=p.ux.keyframes({"0%":{strokeDasharray:"1px, ".concat(p.ux.px(m)),strokeDashoffset:p.ux.px(1)},"50%":{strokeDasharray:"89px, ".concat(p.ux.px(m)),strokeDashoffset:p.ux.px(-35)},"100%":{strokeDasharray:"89px, ".concat(p.ux.px(m)),strokeDashoffset:p.ux.px(-124)}}),y="spinnerIdle",g={animation:"".concat(h," 2s ease-in-out infinite"),strokeDasharray:"1px, ".concat(p.ux.px(m)),strokeDashoffset:p.ux.px(1),strokeLinecap:"round",$nest:(r={},r["&.".concat(y)]={animationIterationCount:0},r)},b={stroke:f.Il.CoreRed50},v={stroke:f.Il.CoreGreen50},x={stroke:f.Il.CoreBlue50},k={stroke:f.Il.CoreNeutral0},S={stroke:s.lh},w={stroke:s.AX},U={stroke:f.Il.CoreYellow60},R={stroke:s.FW},L={stroke:f.Il.CoreCyan50},E=p.ux.stylesheet({path:[g],red:[b],green:[v],blue:[x],white:[k],violet:[S],yellow:[w],orange:[U],gray:[R],cyan:[L]})},16027:(t,e,n)=>{n.d(e,{Z:()=>o,UI:()=>Se});var r={};n.r(r),n.d(r,{audit:()=>G.U,auditTime:()=>N.e,buffer:()=>B.f,bufferCount:()=>A.j,bufferTime:()=>_.e,bufferToggle:()=>q.P,bufferWhen:()=>F.R,catchError:()=>D.K,combineAll:()=>O.c,combineLatest:()=>W.a,concat:()=>V.z,concatAll:()=>j.u,concatMap:()=>Q.b,concatMapTo:()=>Z.w,count:()=>K.Q,debounce:()=>X.D,debounceTime:()=>R.b,defaultIfEmpty:()=>$.d,delay:()=>E.g,delayWhen:()=>H.j,dematerialize:()=>J.D,distinct:()=>Y.E,distinctUntilChanged:()=>tt.x,distinctUntilKeyChanged:()=>et.g,elementAt:()=>nt.T,endWith:()=>rt.l,every:()=>it.y,exhaust:()=>ot.b,exhaustMap:()=>ut.z,expand:()=>at.jn,filter:()=>x.h,finalize:()=>ct.x,find:()=>lt.sE,findIndex:()=>ft.c,first:()=>C.P,flatMap:()=>vt.VS,groupBy:()=>pt.v,ignoreElements:()=>st.l,isEmpty:()=>dt.x,last:()=>mt.Z,map:()=>k.U,mapTo:()=>U.h,materialize:()=>ht.i,max:()=>yt.F,merge:()=>gt.T,mergeAll:()=>bt.J,mergeMap:()=>vt.zg,mergeMapTo:()=>xt.j,mergeScan:()=>kt.fU,min:()=>St.V,multicast:()=>wt.O,observeOn:()=>Ut.QV,onErrorResumeNext:()=>Rt.h,pairwise:()=>Lt.G,partition:()=>Et.u,pluck:()=>S.j,publish:()=>Ct.n,publishBehavior:()=>Mt.n,publishLast:()=>Tt.C,publishReplay:()=>T._,race:()=>Pt.S,reduce:()=>zt.u,refCount:()=>P.x,repeat:()=>It.r,repeatWhen:()=>Gt.a,retry:()=>Nt.X,retryWhen:()=>Bt.a,sample:()=>At.U,sampleTime:()=>_t.b,scan:()=>w.R,sequenceEqual:()=>qt.NF,share:()=>Ft.B,shareReplay:()=>Dt.d,single:()=>Ot.Z,skip:()=>Wt.T,skipLast:()=>Vt.W,skipUntil:()=>jt.u,skipWhile:()=>Qt.n,startWith:()=>L.O,subscribeOn:()=>Zt.R,switchAll:()=>Kt.B,switchMap:()=>v.w,switchMapTo:()=>Xt.c,take:()=>$t.q,takeLast:()=>Ht.h,takeUntil:()=>Jt.R,takeWhile:()=>Yt.o,tap:()=>b.b,throttle:()=>te.P,throttleTime:()=>ee.p,throwIfEmpty:()=>ne.T,timeInterval:()=>re.J,timeout:()=>ie.V,timeoutWith:()=>oe.L,timestamp:()=>ue.A,toArray:()=>ae.q,window:()=>ce.u,windowCount:()=>le.r,windowTime:()=>fe.I,windowToggle:()=>pe.j,windowWhen:()=>se.Q,withLatestFrom:()=>de.M,zip:()=>me.$,zipAll:()=>he.h});var i,o,u=n(59312),a=n(5114),c=n(19429),l=n(45614),f=n(93756),p=n(57050),s=n(24209),d=n(83401),m=n(2844),h=n(40151),y=n(76974),g=n(44586),b=n(2834),v=n(66310),x=n(85985),k=n(77176),S=n(24713),w=n(67434),U=n(17343),R=n(78674),L=n(93508),E=n(13444),C=n(50628),M=n(40327),T=n(48403),P=n(95343);!function(t){t.split=function(t){var e=(0,M.pipe)(t,T._(1),P.x());return{animation:(0,M.pipe)(e,x.h((function(t){return"root"===t.action.key})),k.U((function(t){return{key:t.key,action:t.action.action}}))),action:(0,M.pipe)(e,x.h((function(t){return"children"===t.action.key})),k.U((function(t){return{key:t.key,action:t.action.action}})))}}}(i||(i={})),function(t){function e(t){return c.UI(t)}function n(t){return c.I_(t)}function r(t,e){return function(n){return(0,p.zG)(t,x.h((function(t){return t.key===e&&t.action.animationType===n})),k.U((function(t){return t.action})),L.O({kind:"init"}),v.w((function(t){return"end"===t.kind?(0,y.of)(t):(0,p.zG)((0,y.of)({kind:"end",animationType:n}),E.g("start"===t.kind?T:M))})),C.P())}}t.fromSideEffect=function(t,e){return function(n){return(0,s.T)(n.pipe(b.b(t),v.w((function(){return d.C}))),(r=e)instanceof g.y?r:(0,y.of)(r));var r}},t.patchState=e,t.extendActions=n,t.patch=function(t,r){return(0,p.ls)(n(t),e(r))},t.replaceActions=function(t){return c.I_((0,p.ls)(t,v.w((function(){return d.C}))))},t.composeKnot=function(t){return c.VF((function(e){return(0,m.aj)(Object.keys(t).map((function(n){return t[n](e.pipe(x.h((function(t){return t.key===n})),k.U((function(t){return t.action})))).pipe(k.U((function(t){var e;return(e={})[n]=t,e})))}))).pipe(k.U((function(t){return t.reduce((function(t,e){return(0,u.pi)((0,u.pi)({},t),e)}))})))}))},t.composeUnion=function(t,e){return c.VF((function(n){return(0,p.zG)(e(n),v.w((function(e){var r=Object.entries(e)[0],i=r[0],o=r[1];return(0,p.zG)(n,x.h((function(t){return t.key===o})),k.U((function(t){return t.action})),t[o],k.U((function(t){var e;return(0,u.pi)((0,u.pi)({},t),((e={})[i]=o,e))})))})))}))},t.animatingFlow=function(t,e){return function(n){var c=i.split(n),d=c.action,m=c.animation,y=0;return(0,p.zG)(d,x.h((function(t){return t.key===String(y)})),S.j("action"),t,w.R(function(t,e){return function(n,r){var i,o,u=e(),c=a.fromNullable(n[u]),l=(0,p.zG)(c,a.map((function(t){return t.children}))),s=t(l,r);if(a.isNone(s))return(i={})[u]={root:a.none,children:r},i;var d=((o={})[u+1]={root:f.EK(s.value),children:r},o),m=f.IS(s.value);return a.isSome(m)&&a.isSome(l)&&(d[u]={root:m,children:l.value}),d}}(e,(function(){return y})),{}),b.b((function(t){return y=Number(Object.keys(t).pop())})),v.w(function(t,e){return function(n){var i=String(e()-1),c=String(e()),f=(0,p.zG)(a.fromNullable(n[i]),a.chain((function(t){return t.root})),a.map(r(t,i)),a.fold((function(){return h.E}),p.yR),U.h(l.EG(i))),d=(0,p.zG)(n[c].root,a.map(r(t,c)),a.fold((function(){return h.E}),p.yR),U.h((function(t){var e=(0,u.pi)({},t);return e[c]=(0,u.pi)((0,u.pi)({},e[c]),{root:a.none}),e})));return(0,p.zG)((0,s.T)(f,d),w.R((function(t,e){return e(t)}),n),R.b(o),L.O(n))}}(m,(function(){return y}))))}};var o=100,M=500,T=10*M}(o||(o={}));var z=n(27378),I=n(32952),G=n(50133),N=n(66081),B=n(36919),A=n(76257),_=n(17160),q=n(41608),F=n(77150),D=n(91224),O=n(91023),W=n(57091),V=n(94123),j=n(44212),Q=n(71032),Z=n(58),K=n(22815),X=n(87847),$=n(31524),H=n(87938),J=n(15789),Y=n(94607),tt=n(28043),et=n(40649),nt=n(87830),rt=n(39719),it=n(50481),ot=n(87451),ut=n(97884),at=n(58524),ct=n(9223),lt=n(22447),ft=n(43918),pt=n(78146),st=n(49143),dt=n(98606),mt=n(68706),ht=n(83840),yt=n(80018),gt=n(95093),bt=n(68425),vt=n(85321),xt=n(93781),kt=n(40184),St=n(24371),wt=n(24755),Ut=n(80544),Rt=n(80334),Lt=n(16118),Et=n(53804),Ct=n(62962),Mt=n(71193),Tt=n(92449),Pt=n(55875),zt=n(38934),It=n(36303),Gt=n(11838),Nt=n(75458),Bt=n(62365),At=n(13718),_t=n(13685),qt=n(33241),Ft=n(38194),Dt=n(34891),Ot=n(17174),Wt=n(55935),Vt=n(65943),jt=n(42833),Qt=n(93497),Zt=n(92403),Kt=n(69935),Xt=n(598),$t=n(23063),Ht=n(51639),Jt=n(2768),Yt=n(8473),te=n(25031),ee=n(55721),ne=n(4750),re=n(23095),ie=n(89068),oe=n(97425),ue=n(91969),ae=n(35052),ce=n(50337),le=n(6643),fe=n(83782),pe=n(99597),se=n(45586),de=n(41398),me=n(53441),he=n(9229),ye=n(5739),ge="root",be=n(73975),ve=n(95300);function xe(t){return(0,p.ls)(tt.x(),w.R((function(e,n){return t.reduceWithIndex(n,new Map,(function(t,n,r){var i=e.get(t);return void 0!==i?(n.set(t,i),i.next(r)):n.set(t,new ve.X(r)),n}))}),new Map),tt.x((e=be.f7((function(){return!0})),{equals:function(t,n){var r;if(t===n)return!0;if(t.size===n.size){for(var i=t.keys(),o=void 0;null===(r=(o=i.next()).done)||void 0===r||!r;)if(!n.has(o.value)||!e.equals(t.get(o.value),n.get(o.value)))return!1;return!0}return!1}}).equals));var e}var ke=n(98036);var Se,we=function(){function t(t){this._keySelector=t}return t.prototype.call=function(t,e){return e.subscribe(new Ue(t,this._keySelector))},t}(),Ue=function(t){function e(e,n){var r=t.call(this,e)||this;return r.destination=e,r._keySelector=n,r.attemptedToUnsubscribe=!1,r.count=0,r._currentGroup=a.none,r}return(0,u.ZT)(e,t),e.prototype._next=function(t){var e=this,n=this._keySelector(t);(0,M.pipe)(this._currentGroup,a.fold((function(){return e._createGroup(n,t)}),(function(r){var i=r.key,o=r.group;i!==n?(o.complete(),e._currentGroup=a.none,e._createGroup(n,t)):o.closed||o.next(t)})))},e.prototype._createGroup=function(t,e){var n=new ve.X(e);this._currentGroup=a.some({key:t,group:n}),this.destination.next(new pt.T(t,n,this))},e.prototype._error=function(t){(0,M.pipe)(this._currentGroup,a.map((function(e){return e.group.error(t)}))),this._currentGroup=a.none,this.destination.error(t)},e.prototype._complete=function(){(0,M.pipe)(this._currentGroup,a.map((function(t){return t.group.complete()}))),this._currentGroup=a.none,this.destination.complete()},e.prototype.unsubscribe=function(){this.closed||(this.attemptedToUnsubscribe=!0,0===this.count&&t.prototype.unsubscribe.call(this))},e}(ke.L);function Re(t,e){return(0,M.pipe)(e,Se.mapAction((function(e){return{key:t,action:e}})),c.UI((function(e){return null===e?e:z.cloneElement(e,{key:t})})))}function Le(t,e,n){var r,i;if(Ce(t)&&e.length>0)return{grid:t.grid,child:Le(t.child,e,n)};if(Ee(t)&&e.length>0){var o=e[0],a=e.slice(1);return{grid:t.grid,children:(0,u.pi)((0,u.pi)({},t.children),(r={},r[o]=Le(t.children[o],a,n),r))}}if(Me(t)&&e.length>0)return{foldable:t.foldable,of:Le(t.of,e,n)};if(Te(t)&&e.length>0){o=e[0],a=e.slice(1);return{tag:t.tag,members:(0,u.pi)((0,u.pi)({},t.members),(i={},i[o]=Le(t.members[o],a,n),i))}}return n(t)}function Ee(t){return"children"in t}function Ce(t){return"child"in t}function Me(t){return"foldable"in t}function Te(t){return"members"in t}function Pe(t){return z.createElement(ye.F.Fragment,{children:t})}!function(t){function e(t){return Ce(t)?function(n){var r=new Proxy({},{get:function(){var r;return e(t.child)({children:null,notify:n.notify,state:null!==(r=n.state)&&void 0!==r?r:h.E})}});return t.grid({children:r,state:h.E,notify:p.Q1})}:Ee(t)?function(n){return(0,M.pipe)(n.state,xe(l.IM),k.U((function(r){var i=(0,M.pipe)(t.children,l.Su((function(t,i){return Re(t,e(i))({children:null,notify:n.notify,state:r.get(t)||h.E})})));return t.grid({children:i,state:r.get(ge)||h.E,notify:function(t){return n.notify({key:ge,action:t})}})})),Pe)}:Me(t)?function(n){return(0,M.pipe)(n.state,xe(t.foldable),w.R((function(r,i){var o=new Map;return i.forEach((function(i,u){var a=r.get(u);if(void 0!==a)o.set(u,a);else{var c=Re(u,e(t.of));o.set(u,c({children:null,notify:n.notify,state:i}))}})),o}),new Map),k.U((function(t){var e=new Array;return t.forEach((function(t){return e.push(t)})),e})),Pe)}:Te(t)?function(n){return(0,M.pipe)(n.state,(r=t.tag,function(t){return t.pipe((function(t){return t.lift(new we((function(t){return t[r]})))}))}),k.U((function(r){return Re(r.key,e(t.members[r.key]))({children:null,notify:n.notify,state:r})})),Pe);var r}:t}function n(t,e,r){return Ee(t)?{grid:n(t.grid,e,r),children:t.children}:Me(t)?{foldable:t.foldable,of:n(t.of,e,r)}:function(n){return t({children:n.children,notify:(0,M.pipe)(n.notify,c.I_(r)),state:(0,M.pipe)(n.state,k.U(e))})}}!function(e){e.empty=function(){return null},e.make=function(e){return t.Grid.make(e)}}(t.Node||(t.Node={})),function(t){t.make=function(t){return function(e){var n=e.children,i=e.state,o=e.notify;return z.createElement(t,{slots:n,state:i,notify:function(t){return function(){return o(t)}},view:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return(0,M.pipe)(i,S.j.apply(r,t),tt.x())}})}}}(t.Grid||(t.Grid={})),function(t){t.make=function(t,e){return{grid:t,child:e}}}(t.Composite||(t.Composite={})),function(t){t.make=function(t,e){return{grid:t,children:e}}}(t.Knot||(t.Knot={})),function(t){t.make=function(t){return{grid:function(t){return Pe((0,M.pipe)(t.children,l.KM((function(t,e){return e}))))},children:t}}}(t.Group||(t.Group={})),function(t){t.make=function(t,e){return{foldable:t,of:e}}}(t.List||(t.List={})),function(e){e.make=function(t,e){return{tag:t,members:e}},e.asOption=function(e){return{tag:"_tag",members:{Some:t.Group.make({value:e}),None:t.Node.empty}}}}(t.Union||(t.Union={})),function(t){t.make=function(t,e){return function(n){var r;return z.createElement(ye.F.div,((r={})["data-purpose"]="animation-wrapper",r.children=n.children.children,r.className=(0,M.pipe)(n.state,k.U((0,p.ls)(a.map((function(n){return Boolean(t[n])?t[n]:e[n]})),a.toUndefined)),tt.x()),r.onAnimationStart=(0,M.pipe)(n.state,k.U(a.fold((function(){return p.Q1}),(function(t){return function(){return n.notify({kind:"start",animationType:t})}})))),r.onAnimationEnd=(0,M.pipe)(n.state,k.U(a.fold((function(){return p.Q1}),(function(t){return function(){return n.notify({kind:"end",animationType:t})}})))),r))}}}(t.Transition||(t.Transition={})),function(e){e.make=function(e,n){return t.List.make(l.IM,t.Knot.make(e,{children:n}))}}(t.Animated||(t.Animated={})),t.mount=function(t,n){var r=new I.xQ;return e(t)({children:null,notify:function(t){return r.next(t)},state:(0,M.pipe)(n(r),T._(1),P.x())})},t.patch=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){return function(n){return Le(n,t,e)}}},t.mapAction=function(t){return function(e){return n(e,p.yR,t)}},t.contramapState=function(t){return function(e){return n(e,t,p.yR)}},t.squash=e,t.promap=n}(Se||(Se={}))}}]);
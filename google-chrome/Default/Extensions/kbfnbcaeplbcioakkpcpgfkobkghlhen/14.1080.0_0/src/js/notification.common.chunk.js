(self.webpackChunk=self.webpackChunk||[]).push([[1599],{99028:(e,t,n)=>{n.r(t),n.d(t,{NotificationComponent:()=>m});var i=n(5872),s=n(88326),o=n(27378),a=n(31542),r=n(19106),l=n(37151);const c={disable:{title:"Grammarly is now turned off on ",text:"The extension will remain disabled on this website until you enable it from the toolbar icon."},disableOnTab:{title:"Grammarly is temporarily turned off on ",text:"We will be here next time you visit this website. You can enable it from the toolbar icon."},reminder:{title:"Your writing is still not being checked on ",text:"Are you communicating at your best? Switch the extension back on and be confident about your writing."}};class m extends o.Component{constructor(e){super(e),this.onMouseEnter=()=>{clearTimeout(this._hideTimeout)},this.onMouseLeave=()=>{this._hideTimeout=setTimeout(this.cancel,3e3)},this.cancel=()=>{this._node?(this._node.style.opacity="0",this._node.addEventListener("transitionend",(()=>{this.props.remove()}),!1)):this.props.remove()},this.doNotShowReminderAgain=()=>{this.props.disableReminder(),r.J.disableReminderDoNotShowAgainButtonClick("reminder"),this.cancel()},this.state={styles:{}}}componentDidMount(){const e=(0,a.findDOMNode)(this.refs.gNotification);e.style.setProperty("transition","none","important"),this._requestAnimationFrame=requestAnimationFrame((()=>{e.style.setProperty("transition","opacity 0.35s cubic-bezier(0.255,0.89,0.25,1.135),transform 0.35s cubic-bezier(0.255,0.89,0.25,1.135)","important"),requestAnimationFrame((()=>{if(e.style.opacity="1",e.style.transform){const t=e.style.transform.split("(")[1].split(")")[0].split(","),n=parseInt(t[0],10),i=parseInt(t[1],10);e.style.transform=`translate(${n}px, ${i+this.props.componentHeightProxy}px)`}}))})),this._node=e,this.setState((()=>({styles:this.props.styles}))),this._hideTimeout=setTimeout(this.cancel,5e3)}componentWillUnmount(){cancelAnimationFrame(this._requestAnimationFrame)}renderButtons(){switch(this.props.type){case"disable":return o.createElement("div",null,o.createElement(s.M,{clickHandler:this.cancel},o.createElement("button",{className:l.action},"Got it")),o.createElement(s.M,{clickHandler:this.props.enableOnDomain},o.createElement("button",{className:(0,i.cs)(l.action,l.secondary)},"Enable now")));case"disableOnTab":return o.createElement(s.M,{clickHandler:this.cancel},o.createElement("button",{className:l.action},"Got it"));case"reminder":return o.createElement("div",null,o.createElement(s.M,{clickHandler:this.props.enableOnDomain},o.createElement("button",{className:l.action},"Enable Grammarly")),o.createElement(s.M,{clickHandler:this.doNotShowReminderAgain},o.createElement("button",{className:(0,i.cs)(l.action,l.secondary)},"Don’t show this again")));default:return}}render(){const{text:e,title:t}=c[this.props.type];return o.createElement("div",{ref:"gNotification","data-grammarly-part":"notification",className:(0,i.cs)(l.notification,l[this.props.type]),style:this.state.styles,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},o.createElement("p",{className:l.title},t+this.props.domain),o.createElement("p",{className:l.text},e),this.renderButtons(),o.createElement(s.M,{clickHandler:this.cancel},o.createElement("button",{className:l.close})))}}},37151:e=>{e.exports={notification:"C168L",reminder:"Bceks",title:"oFJmt",text:"_1Nl27",disableOnTab:"_3Hozr",disable:"_2UKFt",bold:"_21cg9",action:"_2Ctb9",secondary:"_1363u",close:"_3u7YX"}}}]);
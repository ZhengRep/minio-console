(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1581,4882,7981,1569,9581,6662,222],{1581:function(e,t,n){"use strict";n.r(t);var r=n(29439),o=n(1413),a=n(72791),i=n(40986),c=n(29945),s=n(11135),l=n(25787),d=n(61889),u=n(45248),p=n(23814),f=n(81159),m=n(21435),h=n(56028),v=n(84741),Z=n(87995),b=n(81551),x=n(31776),g=n(82342),k=n(80184);t.default=(0,l.Z)((function(e){return(0,s.Z)((0,o.Z)((0,o.Z)({},p.DF),p.ID))}))((function(e){var t=e.classes,n=e.open,o=e.enabled,s=e.cfg,l=e.selectedBucket,p=e.closeModalAndRefresh,w=(0,b.TL)(),y=(0,a.useState)(!1),C=(0,r.Z)(y,2),j=C[0],S=C[1],F=(0,a.useState)(!1),z=(0,r.Z)(F,2),P=z[0],R=z[1],N=(0,a.useState)("1"),I=(0,r.Z)(N,2),M=I[0],q=I[1],L=(0,a.useState)("Ti"),B=(0,r.Z)(L,2),O=B[0],E=B[1],A=(0,a.useState)(!1),_=(0,r.Z)(A,2),T=_[0],W=_[1];(0,a.useEffect)((function(){if(o&&(R(!0),s)){var e=(0,u.Am)(s.quota||0,!0,!1,!0);q(e.total.toString()),E(e.unit),W(!0)}}),[o,s]),(0,a.useEffect)((function(){W(!P||/^\d*(?:\.\d{1,2})?$/.test(M))}),[P,M]);return(0,k.jsx)(h.Z,{modalOpen:n,onClose:function(){p()},title:"Enable Bucket Quota",titleIcon:(0,k.jsx)(c.Wqw,{}),children:(0,k.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),!j&&T&&x.h.buckets.setBucketQuota(l,{enabled:P,amount:parseInt((0,u.Pw)(M,O,!0)),quota_type:"hard"}).then((function(){S(!1),p()})).catch((function(e){S(!1),w((0,Z.zb)((0,g.g)(e.error)))}))},children:(0,k.jsxs)(d.ZP,{container:!0,children:[(0,k.jsxs)(d.ZP,{item:!0,xs:12,className:t.formScrollable,children:[(0,k.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,k.jsx)(f.Z,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:P,onChange:function(e){R(e.target.checked)},label:"Enabled"})}),P&&(0,k.jsx)(a.Fragment,{children:(0,k.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,k.jsx)(d.ZP,{container:!0,children:(0,k.jsx)(d.ZP,{item:!0,xs:12,children:(0,k.jsx)(m.Z,{id:"quota_size",name:"quota_size",onChange:function(e){q(e.target.value),e.target.validity.valid?W(!0):W(!1)},label:"Quota",value:M,required:!0,min:"1",overlayObject:(0,k.jsx)(v.Z,{id:"quota_unit",onUnitChange:function(e){E(e)},unitSelected:O,unitsList:(0,u.zQ)(["Ki"]),disabled:!1}),error:T?"":"Please enter a valid quota"})})})})})]}),(0,k.jsxs)(d.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,k.jsx)(c.zxk,{id:"cancel",type:"button",variant:"regular",disabled:j,onClick:function(){p()},label:"Cancel"}),(0,k.jsx)(c.zxk,{id:"save",type:"submit",variant:"callAction",disabled:j||!T,label:"Save"})]}),j&&(0,k.jsx)(d.ZP,{item:!0,xs:12,children:(0,k.jsx)(i.Z,{})})]})})})}))},81159:function(e,t,n){"use strict";var r=n(4942),o=n(1413),a=n(72791),i=n(11135),c=n(25787),s=n(9955),l=n(30829),d=n(20068),u=n(20890),p=n(61889),f=n(23814),m=n(29945),h=n(28182),v=n(80184),Z=(0,c.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);t.Z=(0,c.Z)((function(e){return(0,i.Z)((0,o.Z)((0,o.Z)({indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},f.OR),f.YI))}))((function(e){var t=e.label,n=void 0===t?"":t,i=e.onChange,c=e.value,s=e.id,f=e.name,b=e.checked,x=void 0!==b&&b,g=e.disabled,k=void 0!==g&&g,w=e.switchOnly,y=void 0!==w&&w,C=e.tooltip,j=void 0===C?"":C,S=e.description,F=void 0===S?"":S,z=e.classes,P=e.indicatorLabels,R=e.extraInputProps,N=void 0===R?{}:R,I=(0,v.jsxs)(a.Fragment,{children:[!y&&(0,v.jsx)("span",{className:(0,h.Z)(z.indicatorLabel,(0,r.Z)({},z.indicatorLabelOn,!x)),children:P&&P.length>1?P[1]:"OFF"}),(0,v.jsx)(Z,{checked:x,onChange:i,color:"primary",name:f,inputProps:(0,o.Z)({"aria-label":"primary checkbox"},N),disabled:k,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:c,id:s}),!y&&(0,v.jsx)("span",{className:(0,h.Z)(z.indicatorLabel,(0,r.Z)({},z.indicatorLabelOn,x)),children:P?P[0]:"ON"})]});return y?I:(0,v.jsx)("div",{children:(0,v.jsxs)(p.ZP,{container:!0,alignItems:"center",children:[(0,v.jsx)(p.ZP,{item:!0,xs:12,sm:8,md:8,children:""!==n&&(0,v.jsxs)(l.Z,{htmlFor:s,className:z.inputLabel,children:[(0,v.jsx)("span",{children:n}),""!==j&&(0,v.jsx)("div",{className:z.tooltipContainer,children:(0,v.jsx)(d.Z,{title:j,placement:"top-start",children:(0,v.jsx)("div",{className:z.tooltip,children:(0,v.jsx)(m.byK,{})})})})]})}),(0,v.jsx)(p.ZP,{item:!0,xs:12,sm:""!==n?4:12,md:""!==n?4:12,textAlign:"right",justifyContent:"end",className:z.switchContainer,children:I}),""!==F&&(0,v.jsx)(p.ZP,{item:!0,xs:12,textAlign:"left",children:(0,v.jsx)(u.Z,{component:"p",className:z.fieldDescription,children:F})})]})})}))},21435:function(e,t,n){"use strict";var r=n(29439),o=n(1413),a=n(72791),i=n(27391),c=n(61889),s=n(30829),l=n(20068),d=n(13400),u=n(20165),p=n(3579),f=n(11135),m=n(72455),h=n(25787),v=n(23814),Z=n(29945),b=n(28182),x=n(80184),g=(0,m.Z)((function(e){return(0,f.Z)((0,o.Z)({},v.gM))}));function k(e){var t=g();return(0,x.jsx)(i.Z,(0,o.Z)({InputProps:{classes:t}},e))}t.Z=(0,h.Z)((function(e){return(0,f.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},v.YI),v.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,n=e.onChange,i=e.value,f=e.id,m=e.name,h=e.type,v=void 0===h?"text":h,g=e.autoComplete,w=void 0===g?"off":g,y=e.disabled,C=void 0!==y&&y,j=e.multiline,S=void 0!==j&&j,F=e.tooltip,z=void 0===F?"":F,P=e.index,R=void 0===P?0:P,N=e.error,I=void 0===N?"":N,M=e.required,q=void 0!==M&&M,L=e.placeholder,B=void 0===L?"":L,O=e.min,E=e.max,A=e.overlayId,_=e.overlayIcon,T=void 0===_?null:_,W=e.overlayObject,D=void 0===W?null:W,V=e.extraInputProps,$=void 0===V?{}:V,K=e.overlayAction,Q=e.noLabelMinWidth,H=void 0!==Q&&Q,U=e.pattern,X=void 0===U?"":U,G=e.autoFocus,Y=void 0!==G&&G,J=e.classes,ee=e.className,te=void 0===ee?"":ee,ne=e.onKeyPress,re=e.onFocus,oe=e.onPaste,ae=(0,o.Z)({"data-index":R},$),ie=(0,a.useState)(!1),ce=(0,r.Z)(ie,2),se=ce[0],le=ce[1];"number"===v&&O&&(ae.min=O),"number"===v&&E&&(ae.max=E),""!==X&&(ae.pattern=X);var de=T,ue=v;return"password"===v&&null===T&&(de=se?(0,x.jsx)(u.Z,{}):(0,x.jsx)(p.Z,{}),ue=se?"text":"password"),(0,x.jsx)(a.Fragment,{children:(0,x.jsxs)(c.ZP,{container:!0,className:(0,b.Z)(""!==te?te:"",""!==I?J.errorInField:J.inputBoxContainer),children:[""!==t&&(0,x.jsxs)(s.Z,{htmlFor:f,className:H?J.noMinWidthLabel:J.inputLabel,children:[(0,x.jsxs)("span",{children:[t,q?"*":""]}),""!==z&&(0,x.jsx)("div",{className:J.tooltipContainer,children:(0,x.jsx)(l.Z,{title:z,placement:"top-start",children:(0,x.jsx)("div",{className:J.tooltip,children:(0,x.jsx)(Z.byK,{})})})})]}),(0,x.jsxs)("div",{className:J.textBoxContainer,children:[(0,x.jsx)(k,{id:f,name:m,fullWidth:!0,value:i,autoFocus:Y,disabled:C,onChange:n,type:ue,multiline:S,autoComplete:w,inputProps:ae,error:""!==I,helperText:I,placeholder:B,className:J.inputRebase,onKeyPress:ne,onFocus:re,onPaste:oe}),de&&(0,x.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==t?"withLabel":""),children:(0,x.jsx)(d.Z,{onClick:K?function(){K()}:function(){return le(!se)},id:A,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:de})}),D&&(0,x.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==t?"withLabel":""),children:D})]})]})})}))},84741:function(e,t,n){"use strict";var r=n(29439),o=n(72791),a=n(11135),i=n(25787),c=n(71715),s=n(77865),l=n(80184);t.Z=(0,i.Z)((function(e){return(0,a.Z)({buttonTrigger:{border:"#F0F2F2 1px solid",borderRadius:3,color:"#838383",backgroundColor:"#fff",fontSize:12}})}))((function(e){var t=e.classes,n=e.id,a=e.unitSelected,i=e.unitsList,d=e.disabled,u=void 0!==d&&d,p=e.onUnitChange,f=o.useState(null),m=(0,r.Z)(f,2),h=m[0],v=m[1],Z=Boolean(h),b=function(e){v(null),""!==e&&p&&p(e)};return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)("button",{id:"".concat(n,"-button"),"aria-controls":"".concat(n,"-menu"),"aria-haspopup":"true","aria-expanded":Z?"true":void 0,onClick:function(e){v(e.currentTarget)},className:t.buttonTrigger,disabled:u,type:"button",children:a}),(0,l.jsx)(c.Z,{id:"".concat(n,"-menu"),"aria-labelledby":"".concat(n,"-button"),anchorEl:h,open:Z,onClose:function(){b("")},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:i.map((function(e){return(0,l.jsx)(s.Z,{onClick:function(){return b(e.value)},children:e.label},"itemUnit-".concat(e.value,"-").concat(e.label))}))})]})}))},3579:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");t.Z=i},20165:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.Z=i},45649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(28610)},93840:function(e,t,n){"use strict";var r=n(72791).createContext(void 0);t.Z=r},76147:function(e,t,n){"use strict";function r(e){var t=e.props,n=e.states,r=e.muiFormControl;return n.reduce((function(e,n){return e[n]=t[n],r&&"undefined"===typeof t[n]&&(e[n]=r[n]),e}),{})}n.d(t,{Z:function(){return r}})},52930:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(72791),o=n(93840);function a(){return r.useContext(o.Z)}},17133:function(e,t,n){"use strict";var r=n(4942),o=n(63366),a=n(87462),i=n(72791),c=n(28182),s=n(94419),l=n(76147),d=n(52930),u=n(14036),p=n(31402),f=n(66934),m=n(10843),h=n(80184),v=["children","className","color","component","disabled","error","filled","focused","required"],Z=(0,f.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return(0,a.Z)({},t.root,"secondary"===n.color&&t.colorSecondary,n.filled&&t.filled)}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,a.Z)({color:(n.vars||n).palette.text.secondary},n.typography.body1,(t={lineHeight:"1.4375em",padding:0,position:"relative"},(0,r.Z)(t,"&.".concat(m.Z.focused),{color:(n.vars||n).palette[o.color].main}),(0,r.Z)(t,"&.".concat(m.Z.disabled),{color:(n.vars||n).palette.text.disabled}),(0,r.Z)(t,"&.".concat(m.Z.error),{color:(n.vars||n).palette.error.main}),t))})),b=(0,f.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,t){return t.asterisk}})((function(e){var t=e.theme;return(0,r.Z)({},"&.".concat(m.Z.error),{color:(t.vars||t).palette.error.main})})),x=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiFormLabel"}),r=n.children,i=n.className,f=n.component,x=void 0===f?"label":f,g=(0,o.Z)(n,v),k=(0,d.Z)(),w=(0,l.Z)({props:n,muiFormControl:k,states:["color","required","focused","disabled","error","filled"]}),y=(0,a.Z)({},n,{color:w.color||"primary",component:x,disabled:w.disabled,error:w.error,filled:w.filled,focused:w.focused,required:w.required}),C=function(e){var t=e.classes,n=e.color,r=e.focused,o=e.disabled,a=e.error,i=e.filled,c=e.required,l={root:["root","color".concat((0,u.Z)(n)),o&&"disabled",a&&"error",i&&"filled",r&&"focused",c&&"required"],asterisk:["asterisk",a&&"error"]};return(0,s.Z)(l,m.M,t)}(y);return(0,h.jsxs)(Z,(0,a.Z)({as:x,ownerState:y,className:(0,c.Z)(C.root,i),ref:t},g,{children:[r,w.required&&(0,h.jsxs)(b,{ownerState:y,"aria-hidden":!0,className:C.asterisk,children:["\u2009","*"]})]}))}));t.Z=x},10843:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(75878),o=n(21217);function a(e){return(0,o.Z)("MuiFormLabel",e)}var i=(0,r.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);t.Z=i},30829:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(4942),o=n(63366),a=n(87462),i=n(72791),c=n(94419),s=n(28182),l=n(76147),d=n(52930),u=n(17133),p=n(10843),f=n(31402),m=n(66934),h=n(75878),v=n(21217);function Z(e){return(0,v.Z)("MuiInputLabel",e)}(0,h.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var b=n(80184),x=["disableAnimation","margin","shrink","variant","className"],g=(0,m.ZP)(u.Z,{shouldForwardProp:function(e){return(0,m.FO)(e)||"classes"===e},name:"MuiInputLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,r.Z)({},"& .".concat(p.Z.asterisk),t.asterisk),t.root,n.formControl&&t.formControl,"small"===n.size&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},n.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===n.size&&{transform:"translate(0, 17px) scale(1)"},n.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!n.disableAnimation&&{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})},"filled"===n.variant&&(0,a.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===n.size&&{transform:"translate(12px, 13px) scale(1)"},n.shrink&&(0,a.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===n.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===n.variant&&(0,a.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===n.size&&{transform:"translate(14px, 9px) scale(1)"},n.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))})),k=i.forwardRef((function(e,t){var n=(0,f.Z)({name:"MuiInputLabel",props:e}),r=n.disableAnimation,i=void 0!==r&&r,u=n.shrink,p=n.className,m=(0,o.Z)(n,x),h=(0,d.Z)(),v=u;"undefined"===typeof v&&h&&(v=h.filled||h.focused||h.adornedStart);var k=(0,l.Z)({props:n,muiFormControl:h,states:["size","variant","required"]}),w=(0,a.Z)({},n,{disableAnimation:i,formControl:h,shrink:v,size:k.size,variant:k.variant,required:k.required}),y=function(e){var t=e.classes,n=e.formControl,r=e.size,o=e.shrink,i={root:["root",n&&"formControl",!e.disableAnimation&&"animated",o&&"shrink","small"===r&&"sizeSmall",e.variant],asterisk:[e.required&&"asterisk"]},s=(0,c.Z)(i,Z,t);return(0,a.Z)({},t,s)}(w);return(0,b.jsx)(g,(0,a.Z)({"data-shrink":v,ownerState:w,ref:t,className:(0,s.Z)(y.root,p)},m,{classes:y}))}))},9955:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(4942),o=n(63366),a=n(87462),i=n(72791),c=n(28182),s=n(94419),l=n(12065),d=n(14036),u=n(97278),p=n(31402),f=n(66934),m=n(75878),h=n(21217);function v(e){return(0,h.Z)("MuiSwitch",e)}var Z=(0,m.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),b=n(80184),x=["className","color","edge","size","sx"],g=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.edge&&t["edge".concat((0,d.Z)(n.edge))],t["size".concat((0,d.Z)(n.size))]]}})((function(e){var t,n=e.ownerState;return(0,a.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===n.edge&&{marginLeft:-8},"end"===n.edge&&{marginRight:-8},"small"===n.size&&(t={width:40,height:24,padding:7},(0,r.Z)(t,"& .".concat(Z.thumb),{width:16,height:16}),(0,r.Z)(t,"& .".concat(Z.switchBase),(0,r.Z)({padding:4},"&.".concat(Z.checked),{transform:"translateX(16px)"})),t))})),k=(0,f.ZP)(u.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var n=e.ownerState;return[t.switchBase,(0,r.Z)({},"& .".concat(Z.input),t.input),"default"!==n.color&&t["color".concat((0,d.Z)(n.color))]]}})((function(e){var t,n=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:n.vars?n.vars.palette.Switch.defaultColor:"".concat("light"===n.palette.mode?n.palette.common.white:n.palette.grey[300]),transition:n.transitions.create(["left","transform"],{duration:n.transitions.duration.shortest})},(0,r.Z)(t,"&.".concat(Z.checked),{transform:"translateX(20px)"}),(0,r.Z)(t,"&.".concat(Z.disabled),{color:n.vars?n.vars.palette.Switch.defaultDisabledColor:"".concat("light"===n.palette.mode?n.palette.grey[100]:n.palette.grey[600])}),(0,r.Z)(t,"&.".concat(Z.checked," + .").concat(Z.track),{opacity:.5}),(0,r.Z)(t,"&.".concat(Z.disabled," + .").concat(Z.track),{opacity:n.vars?n.vars.opacity.switchTrackDisabled:"".concat("light"===n.palette.mode?.12:.2)}),(0,r.Z)(t,"& .".concat(Z.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,n=e.theme,o=e.ownerState;return(0,a.Z)({"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},(0,r.Z)(t,"&.".concat(Z.checked),(0,r.Z)({color:(n.vars||n).palette[o.color].main,"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette[o.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(Z.disabled),{color:n.vars?n.vars.palette.Switch["".concat(o.color,"DisabledColor")]:"".concat("light"===n.palette.mode?(0,l.$n)(n.palette[o.color].main,.62):(0,l._j)(n.palette[o.color].main,.55))})),(0,r.Z)(t,"&.".concat(Z.checked," + .").concat(Z.track),{backgroundColor:(n.vars||n).palette[o.color].main}),t))})),w=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),y=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),C=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiSwitch"}),r=n.className,i=n.color,l=void 0===i?"primary":i,u=n.edge,f=void 0!==u&&u,m=n.size,h=void 0===m?"medium":m,Z=n.sx,C=(0,o.Z)(n,x),j=(0,a.Z)({},n,{color:l,edge:f,size:h}),S=function(e){var t=e.classes,n=e.edge,r=e.size,o=e.color,i=e.checked,c=e.disabled,l={root:["root",n&&"edge".concat((0,d.Z)(n)),"size".concat((0,d.Z)(r))],switchBase:["switchBase","color".concat((0,d.Z)(o)),i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,s.Z)(l,v,t);return(0,a.Z)({},t,u)}(j),F=(0,b.jsx)(y,{className:S.thumb,ownerState:j});return(0,b.jsxs)(g,{className:(0,c.Z)(S.root,r),sx:Z,ownerState:j,children:[(0,b.jsx)(k,(0,a.Z)({type:"checkbox",icon:F,checkedIcon:F,ref:t,ownerState:j},C,{classes:(0,a.Z)({},S,{root:S.switchBase})})),(0,b.jsx)(w,{className:S.track,ownerState:j})]})}))},97278:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(29439),o=n(63366),a=n(87462),i=n(72791),c=n(28182),s=n(94419),l=n(14036),d=n(66934),u=n(98278),p=n(52930),f=n(95080),m=n(75878),h=n(21217);function v(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=n(80184),b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,d.ZP)(f.Z)((function(e){var t=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),g=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),k=i.forwardRef((function(e,t){var n=e.autoFocus,i=e.checked,d=e.checkedIcon,f=e.className,m=e.defaultChecked,h=e.disabled,k=e.disableFocusRipple,w=void 0!==k&&k,y=e.edge,C=void 0!==y&&y,j=e.icon,S=e.id,F=e.inputProps,z=e.inputRef,P=e.name,R=e.onBlur,N=e.onChange,I=e.onFocus,M=e.readOnly,q=e.required,L=void 0!==q&&q,B=e.tabIndex,O=e.type,E=e.value,A=(0,o.Z)(e,b),_=(0,u.Z)({controlled:i,default:Boolean(m),name:"SwitchBase",state:"checked"}),T=(0,r.Z)(_,2),W=T[0],D=T[1],V=(0,p.Z)(),$=h;V&&"undefined"===typeof $&&($=V.disabled);var K="checkbox"===O||"radio"===O,Q=(0,a.Z)({},e,{checked:W,disabled:$,disableFocusRipple:w,edge:C}),H=function(e){var t=e.classes,n=e.checked,r=e.disabled,o=e.edge,a={root:["root",n&&"checked",r&&"disabled",o&&"edge".concat((0,l.Z)(o))],input:["input"]};return(0,s.Z)(a,v,t)}(Q);return(0,Z.jsxs)(x,(0,a.Z)({component:"span",className:(0,c.Z)(H.root,f),centerRipple:!0,focusRipple:!w,disabled:$,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){R&&R(e),V&&V.onBlur&&V.onBlur(e)},ownerState:Q,ref:t},A,{children:[(0,Z.jsx)(g,(0,a.Z)({autoFocus:n,checked:i,defaultChecked:m,className:H.input,disabled:$,id:K?S:void 0,name:P,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;D(t),N&&N(e,t)}},readOnly:M,ref:z,required:L,ownerState:Q,tabIndex:B,type:O},"checkbox"===O&&void 0===E?{}:{value:E},F)),W?d:j]}))}))},31260:function(e,t,n){"use strict";var r=n(78949);t.Z=r.Z},28610:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return a.Z},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return l.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return k},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return v},useControlled:function(){return Z.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return g.Z}});var r=n(55902),o=n(14036),a=n(31260),i=n(76189),c=n(83199);var s=function(e,t){return function(){return null}},l=n(19103),d=n(98301),u=n(17602);n(87462);var p=function(e,t){return function(){return null}},f=n(62971).Z,m=n(40162),h=n(67384);var v=function(e,t,n,r,o){return null},Z=n(98278),b=n(89683),x=n(42071),g=n(23031),k={configure:function(e){r.Z.configure(e)}}},19103:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(72791);var o=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},78949:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),(function(){}))}n.d(t,{Z:function(){return r}})},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=1581.bec44ff2.chunk.js.map
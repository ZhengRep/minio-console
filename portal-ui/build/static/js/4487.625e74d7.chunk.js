"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4487],{77926:function(e,n,a){a.r(n),a.d(n,{default:function(){return D}});var t=a(23430),i=a(18489),s=a(50390),o=a(34424),r=a(25594),l=a(66946),c=a(86509),d=a(4285),u=a(30324),m=a(77555),p=a(29399),f=a(73481),x=a(35044),h=a(74268),v=a(4182),Z=a(72462),g=a(44149),j=a(76352),b=a(66964),C=a(12066),k=a(14602),N=a(94187),S=a(47554),y=a(62449),M=a(70331),E=a(97538),w=a(62559),P=(0,y.Z)((function(e){return(0,c.Z)((0,i.Z)({},Z.gM))}));function I(e){var n=P();return(0,w.jsx)(C.Z,(0,i.Z)({InputProps:{classes:n}},e))}var B=(0,d.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)({},Z.YI),Z.Hr))}))((function(e){var n=e.classes,a=e.id,o=e.name,l=e.onChange,c=e.options,d=e.label,u=e.tooltip,m=void 0===u?"":u,p=e.value,f=e.disabled,x=void 0!==f&&f,h=(0,s.useState)(c[0]),v=(0,t.Z)(h,2),Z=v[0],g=v[1];return(0,w.jsx)(s.Fragment,{children:(0,w.jsxs)(r.ZP,{item:!0,xs:12,className:n.fieldContainer,children:[""!==d&&(0,w.jsxs)(k.Z,{htmlFor:a,className:n.inputLabel,children:[(0,w.jsx)("span",{children:d}),""!==m&&(0,w.jsx)("div",{className:n.tooltipContainer,children:(0,w.jsx)(N.Z,{title:m,placement:"top-start",children:(0,w.jsx)("div",{className:n.tooltip,children:(0,w.jsx)(E.Z,{})})})})]}),(0,w.jsx)(S.Z,{fullWidth:!0,children:(0,w.jsx)(M.Z,{id:a,options:c,getOptionLabel:function(e){return e.label},isOptionEqualToValue:function(e){return e.value===p},disabled:x,renderInput:function(e){return(0,w.jsx)(I,(0,i.Z)((0,i.Z)({},e),{},{name:o}))},value:Z,onChange:function(e,n){n&&(l(n.value),g(n))},autoHighlight:!0})})]})})})),L=a(63548),F=(0,o.$j)(null,{setModalErrorSnackMessage:g.zb}),D=(0,d.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)({arnField:{"& div div .MuiOutlinedInput-root":{padding:0}}},Z.DF),Z.ID))}))(F((function(e){var n=e.classes,a=e.open,i=e.selectedBucket,o=e.closeModalAndRefresh,c=e.setModalErrorSnackMessage,d=(0,s.useState)(!1),Z=(0,t.Z)(d,2),g=Z[0],C=Z[1],k=(0,s.useState)(""),N=(0,t.Z)(k,2),S=N[0],y=N[1],M=(0,s.useState)(""),E=(0,t.Z)(M,2),P=E[0],I=E[1],F=(0,s.useState)(""),D=(0,t.Z)(F,2),O=D[0],T=D[1],R=(0,s.useState)([]),z=(0,t.Z)(R,2),W=z[0],H=z[1],A=(0,s.useState)([]),G=(0,t.Z)(A,2),$=G[0],q=G[1],U=(0,s.useCallback)((function(){C(!0),u.Z.invoke("GET","/api/v1/admin/arns").then((function(e){var n=[];null!==e.arns&&(n=e.arns),C(!1),q(n)})).catch((function(e){C(!1),c(e)}))}),[c]);(0,s.useEffect)((function(){U()}),[U]);var V=function(e,n){var a=W.indexOf(n),t=[];-1===a?t=t.concat(W,n):0===a?t=t.concat(W.slice(1)):a===W.length-1?t=t.concat(W.slice(0,-1)):a>0&&(t=t.concat(W.slice(0,a),W.slice(a+1))),H(t)},Y=$.map((function(e){return{label:e,value:e}}));return(0,w.jsx)(j.Z,{modalOpen:a,onClose:function(){o()},title:"Subscribe To Bucket Events",titleIcon:(0,w.jsx)(L.c3,{}),children:(0,w.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),g||(C(!0),u.Z.invoke("POST","/api/v1/buckets/".concat(i,"/events"),{configuration:{arn:O,events:W,prefix:S,suffix:P},ignoreExisting:!0}).then((function(){C(!1),o()})).catch((function(e){C(!1),c(e)})))},children:(0,w.jsxs)(r.ZP,{container:!0,children:[(0,w.jsxs)(r.ZP,{item:!0,xs:12,className:n.formScrollable,children:[(0,w.jsx)(r.ZP,{item:!0,xs:12,className:"".concat(n.arnField," ").concat(n.formFieldRow),children:(0,w.jsx)(B,{onChange:function(e){T(e)},id:"select-access-policy",name:"select-access-policy",label:"ARN",value:O,options:Y})}),(0,w.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,w.jsx)(b.Z,{id:"prefix-input",name:"prefix-input",label:"Prefix",value:S,onChange:function(e){y(e.target.value)}})}),(0,w.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,w.jsx)(b.Z,{id:"suffix-input",name:"suffix-input",label:"Suffix",value:P,onChange:function(e){I(e.target.value)}})}),(0,w.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,w.jsxs)(v.Z,{size:"medium",children:[(0,w.jsx)(m.Z,{className:n.minTableHeader,children:(0,w.jsxs)(p.Z,{children:[(0,w.jsx)(f.Z,{children:"Select"}),(0,w.jsx)(f.Z,{children:"Event"})]})}),(0,w.jsx)(x.Z,{children:[{label:"PUT - Object Uploaded",value:"put"},{label:"GET - Object accessed",value:"get"},{label:"DELETE - Object Deleted",value:"delete"}].map((function(e){return(0,w.jsxs)(p.Z,{onClick:function(n){return V(0,e.value)},children:[(0,w.jsx)(f.Z,{padding:"checkbox",children:(0,w.jsx)(h.Z,{value:e.value,color:"primary",inputProps:{"aria-label":"secondary checkbox"},onChange:function(n){return V(0,e.value)},checked:W.includes(e.value)})}),(0,w.jsx)(f.Z,{className:n.wrapCell,children:e.label})]},"group-".concat(e.value))}))})]})})]}),(0,w.jsxs)(r.ZP,{item:!0,xs:12,className:n.modalButtonBar,children:[(0,w.jsx)(l.Z,{type:"button",variant:"outlined",color:"primary",disabled:g,onClick:function(){o()},children:"Cancel"}),(0,w.jsx)(l.Z,{type:"submit",variant:"contained",color:"primary",disabled:g,children:"Save"})]})]})})})})))},66964:function(e,n,a){var t=a(18489),i=a(50390),s=a(12066),o=a(25594),r=a(14602),l=a(94187),c=a(95467),d=a(86509),u=a(62449),m=a(4285),p=a(72462),f=a(97538),x=a(62559),h=(0,u.Z)((function(e){return(0,d.Z)((0,t.Z)({},p.gM))}));function v(e){var n=h();return(0,x.jsx)(s.Z,(0,t.Z)({InputProps:{classes:n}},e))}n.Z=(0,m.Z)((function(e){return(0,d.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},p.YI),p.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var n=e.label,a=e.onChange,s=e.value,d=e.id,u=e.name,m=e.type,p=void 0===m?"text":m,h=e.autoComplete,Z=void 0===h?"off":h,g=e.disabled,j=void 0!==g&&g,b=e.multiline,C=void 0!==b&&b,k=e.tooltip,N=void 0===k?"":k,S=e.index,y=void 0===S?0:S,M=e.error,E=void 0===M?"":M,w=e.required,P=void 0!==w&&w,I=e.placeholder,B=void 0===I?"":I,L=e.min,F=e.max,D=e.overlayIcon,O=void 0===D?null:D,T=e.overlayObject,R=void 0===T?null:T,z=e.extraInputProps,W=void 0===z?{}:z,H=e.overlayAction,A=e.noLabelMinWidth,G=void 0!==A&&A,$=e.pattern,q=void 0===$?"":$,U=e.autoFocus,V=void 0!==U&&U,Y=e.classes,_=(0,t.Z)({"data-index":y},W);return"number"===p&&L&&(_.min=L),"number"===p&&F&&(_.max=F),""!==q&&(_.pattern=q),(0,x.jsx)(i.Fragment,{children:(0,x.jsxs)(o.ZP,{container:!0,className:" ".concat(""!==E?Y.errorInField:Y.inputBoxContainer),children:[""!==n&&(0,x.jsxs)(r.Z,{htmlFor:d,className:G?Y.noMinWidthLabel:Y.inputLabel,children:[(0,x.jsxs)("span",{children:[n,P?"*":""]}),""!==N&&(0,x.jsx)("div",{className:Y.tooltipContainer,children:(0,x.jsx)(l.Z,{title:N,placement:"top-start",children:(0,x.jsx)("div",{className:Y.tooltip,children:(0,x.jsx)(f.Z,{})})})})]}),(0,x.jsxs)("div",{className:Y.textBoxContainer,children:[(0,x.jsx)(v,{id:d,name:u,fullWidth:!0,value:s,autoFocus:V,disabled:j,onChange:a,type:p,multiline:C,autoComplete:Z,inputProps:_,error:""!==E,helperText:E,placeholder:B,className:Y.inputRebase}),O&&(0,x.jsx)("div",{className:"".concat(Y.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,x.jsx)(c.Z,{onClick:H?function(){H()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:O})}),R&&(0,x.jsx)("div",{className:"".concat(Y.overlayAction," ").concat(""!==n?"withLabel":""),children:R})]})]})})}))},76352:function(e,n,a){a.d(n,{Z:function(){return M}});var t,i=a(23430),s=a(18489),o=a(50390),r=a(34424),l=a(95467),c=a(97771),d=a(84402),u=a(78426),m=a(93085),p=a(86509),f=a(4285),x=a(72462),h=a(44149),v=a(38342),Z=a.n(v),g=a(92125),j=a(19538),b=a(21278),C=a(62559),k=function(){clearInterval(t)},N={displayErrorMessage:h.zb},S=(0,r.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),N)((0,f.Z)((function(e){return(0,p.Z)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var n=e.classes,a=e.modalSnackMessage,s=e.displayErrorMessage,r=e.customStyle,l=(0,o.useState)(!1),c=(0,i.Z)(l,2),d=c[0],u=c[1],m=(0,o.useState)(!1),p=(0,i.Z)(m,2),f=p[0],x=p[1],h=(0,o.useCallback)((function(){x(!1)}),[]);(0,o.useEffect)((function(){f||(s({detailedError:"",errorMessage:""}),u(!1))}),[s,f]),(0,o.useEffect)((function(){""!==a.message&&"error"===a.type&&x(!0)}),[h,a.message,a.type]);var v=Z()(a,"message",""),N=Z()(a,"detailedErrorMsg","");return"error"!==a.type||""===v?null:(0,C.jsx)(o.Fragment,{children:(0,C.jsxs)("div",{className:"".concat(n.modalErrorContainer," ").concat(f?n.modalErrorShow:""),style:r,onMouseOver:k,onMouseLeave:function(){t=setInterval(h,1e4)},children:[(0,C.jsx)("button",{className:n.closeButton,onClick:h,children:(0,C.jsx)(b.Z,{})}),(0,C.jsxs)("div",{className:n.errorTitle,children:[(0,C.jsx)("span",{className:n.messageIcon,children:(0,C.jsx)(j.Z,{})}),(0,C.jsx)("span",{className:n.errorLabel,children:v})]}),""!==N&&(0,C.jsxs)(o.Fragment,{children:[(0,C.jsx)("div",{className:n.detailsContainerLink,children:(0,C.jsxs)("button",{className:n.detailsButton,onClick:function(){u(!d)},children:["Details",(0,C.jsx)(g.Z,{className:"".concat(n.arrowElement," ").concat(d?n.arrowOpen:"")})]})}),(0,C.jsx)("div",{className:"".concat(n.extraDetailsContainer," ").concat(d?n.extraDetailsOpen:""),children:N})]})]})})}))),y=(0,r.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:h.MK}),M=(0,f.Z)((function(e){return(0,p.Z)((0,s.Z)((0,s.Z)({},x.Qw),{},{root:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},x.sN))}))(y((function(e){var n=e.onClose,a=e.modalOpen,t=e.title,r=e.children,p=e.classes,f=e.wideLimit,x=void 0===f||f,h=e.modalSnackMessage,v=e.noContentPadding,Z=e.setModalSnackMessage,g=e.titleIcon,j=void 0===g?null:g,k=(0,o.useState)(!1),N=(0,i.Z)(k,2),y=N[0],M=N[1];(0,o.useEffect)((function(){Z("")}),[Z]),(0,o.useEffect)((function(){if(h){if(""===h.message)return void M(!1);"error"!==h.type&&M(!0)}}),[h]);var E=x?{classes:{paper:p.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},w="";return h&&(w=h.detailedErrorMsg,(""===h.detailedErrorMsg||h.detailedErrorMsg.length<5)&&(w=h.message)),(0,C.jsxs)(d.Z,(0,s.Z)((0,s.Z)({open:a,classes:p},E),{},{scroll:"paper",onClose:function(e,a){"backdropClick"!==a&&n()},className:p.root,children:[(0,C.jsxs)(u.Z,{className:p.title,children:[(0,C.jsxs)("div",{className:p.titleText,children:[j," ",t]}),(0,C.jsx)("div",{className:p.closeContainer,children:(0,C.jsx)(l.Z,{"aria-label":"close",className:p.closeButton,onClick:n,disableRipple:!0,size:"small",children:(0,C.jsx)(b.Z,{})})})]}),(0,C.jsx)(S,{}),(0,C.jsx)(c.Z,{open:y,className:p.snackBarModal,onClose:function(){M(!1),Z("")},message:w,ContentProps:{className:"".concat(p.snackBar," ").concat(h&&"error"===h.type?p.errorSnackBar:"")},autoHideDuration:h&&"error"===h.type?1e4:5e3}),(0,C.jsx)(m.Z,{className:v?"":p.content,children:r})]}))})))}}]);
//# sourceMappingURL=4487.625e74d7.chunk.js.map
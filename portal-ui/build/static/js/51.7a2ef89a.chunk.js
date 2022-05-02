"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[51],{23804:function(e,n,t){t(72791);var i=t(11135),r=t(25787),a=t(61889),s=t(80184);n.Z=(0,r.Z)((function(e){return(0,i.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,i=e.title,r=e.help;return(0,s.jsx)("div",{className:n.root,children:(0,s.jsxs)(a.ZP,{container:!0,children:[(0,s.jsxs)(a.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,i]}),(0,s.jsx)(a.ZP,{item:!0,xs:12,className:n.helpText,children:r})]})})}))},51:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var i=t(29439),r=t(1413),a=t(72791),s=t(60364),o=t(11135),l=t(25787),c=t(26181),d=t.n(c),u=t(61889),x=t(85543),p=t(23814),f=t(42649),m=t(81207),h=t(89673),Z=t(55818),v=t(20890),g=t(3721),j=t(36151),y=t(40986),_=t(56028),b=t(21435),S=t(37516),k=t(17420),C=t(90673),E=t(83679),P=t(80184),N={setModalErrorSnackMessage:f.zb},F=(0,s.$j)(null,N),I=(0,l.Z)((function(e){return(0,o.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({dateSelector:{"& div":{borderBottom:0,marginBottom:0,"& div:nth-child(2)":{border:"1px solid #EAEAEA",paddingLeft:5,"& div":{border:0}}}},formFieldRowAccordion:{"& .MuiPaper-root":{padding:0}}},p.bK),p.ID),p.DF),p.QV))}))(F((function(e){var n,t,s,o,l,c=e.classes,p=e.closeModalAndRefresh,f=e.selectedBucket,N=e.lifecycleRule,F=e.open,I=e.setModalErrorSnackMessage,T=(0,a.useState)(!0),M=(0,i.Z)(T,2),A=M[0],R=M[1],B=(0,a.useState)(!1),L=(0,i.Z)(B,2),O=L[0],D=L[1],w=(0,a.useState)(""),V=(0,i.Z)(w,2),G=V[0],z=V[1],K=(0,a.useState)(!1),W=(0,i.Z)(K,2),H=W[0],Y=W[1],Q=(0,a.useState)([]),U=(0,i.Z)(Q,2),$=U[0],q=U[1],J=(0,a.useState)(""),X=(0,i.Z)(J,2),ee=X[0],ne=X[1],te=(0,a.useState)(""),ie=(0,i.Z)(te,2),re=ie[0],ae=ie[1],se=(0,a.useState)(""),oe=(0,i.Z)(se,2),le=oe[0],ce=oe[1],de=(0,a.useState)(!1),ue=(0,i.Z)(de,2),xe=ue[0],pe=ue[1],fe=(0,a.useState)("0"),me=(0,i.Z)(fe,2),he=me[0],Ze=me[1],ve=(0,a.useState)("0"),ge=(0,i.Z)(ve,2),je=ge[0],ye=ge[1],_e=(0,a.useState)("expiry"),be=(0,i.Z)(_e,2),Se=be[0],ke=be[1],Ce=(0,a.useState)("0"),Ee=(0,i.Z)(Ce,2),Pe=Ee[0],Ne=Ee[1],Fe=(0,a.useState)("0"),Ie=(0,i.Z)(Fe,2),Te=Ie[0],Me=Ie[1],Ae=(0,a.useState)(!1),Re=(0,i.Z)(Ae,2),Be=Re[0],Le=Re[1];(0,a.useEffect)((function(){A&&m.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){var n=d()(e,"items",[]);if(null!==n&&n.length>=1){var t=n.map((function(e){var n=e.type,t=d()(e,"".concat(n,".name"),"");return{label:t,value:t}}));q(t),t.length>0&&ae(t[0].value)}R(!1)})).catch((function(e){R(!1)}))}),[A]),(0,a.useEffect)((function(){var e=!0;"expiry"!==Se&&""===re&&(e=!1),Le(e)}),[Se,Pe,Te,re]),(0,a.useEffect)((function(){var e;"Enabled"===N.status&&Y(!0);var n,t,i,r,a,s,o=!1;(N.transition&&(N.transition.days&&0!==N.transition.days&&(Me(N.transition.days.toString()),ke("transition"),o=!0),N.transition.noncurrent_transition_days&&0!==N.transition.noncurrent_transition_days&&(ye(N.transition.noncurrent_transition_days.toString()),ke("transition"),o=!0),N.transition.date&&"0001-01-01T00:00:00Z"!==N.transition.date&&(ke("transition"),o=!0)),N.expiration&&(N.expiration.days&&0!==N.expiration.days&&(Ne(N.expiration.days.toString()),ke("expiry"),o=!1),N.expiration.noncurrent_expiration_days&&0!==N.expiration.noncurrent_expiration_days&&(Ze(N.expiration.noncurrent_expiration_days.toString()),ke("expiry"),o=!1),N.expiration.date&&"0001-01-01T00:00:00Z"!==N.expiration.date&&(ke("expiry"),o=!1)),o)?(ae((null===(n=N.transition)||void 0===n?void 0:n.storage_class)||""),ye((null===(t=N.transition)||void 0===t||null===(i=t.noncurrent_transition_days)||void 0===i?void 0:i.toString())||"0"),ce((null===(r=N.transition)||void 0===r?void 0:r.noncurrent_storage_class)||"")):Ze((null===(a=N.expiration)||void 0===a||null===(s=a.noncurrent_expiration_days)||void 0===s?void 0:s.toString())||"0");if(pe(!(null===(e=N.expiration)||void 0===e||!e.delete_marker)),ne(N.prefix||""),N.tags){var l=N.tags.reduce((function(e,n,t){return"".concat(e).concat(0!==t?"&":"").concat(n.key,"=").concat(n.value)}),"");z(l)}}),[N]);return(0,P.jsx)(_.Z,{onClose:function(){p(!1)},modalOpen:F,title:"Edit Lifecycle Configuration",titleIcon:(0,P.jsx)(x.QI,{}),children:(0,P.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),!O&&(D(!0),null!==f&&null!==N)){var n={};if("expiry"===Se){var t,i,a,s={};null!==(t=N.expiration)&&void 0!==t&&t.days&&(null===(i=N.expiration)||void 0===i?void 0:i.days)>0&&(s.expiry_days=parseInt(Pe)),null!==(a=N.expiration)&&void 0!==a&&a.noncurrent_expiration_days&&(s.noncurrentversion_expiration_days=parseInt(he)),n=(0,r.Z)({},s)}else{var o,l,c,d={};null!==(o=N.expiration)&&void 0!==o&&o.days&&(null===(l=N.expiration)||void 0===l?void 0:l.days)>0&&(d.transition_days=parseInt(Pe),d.storage_class=re),null!==(c=N.expiration)&&void 0!==c&&c.noncurrent_expiration_days&&(d.noncurrentversion_transition_days=parseInt(he),d.noncurrentversion_transition_storage_class=le),n=(0,r.Z)({},d)}var u=(0,r.Z)({type:Se,disable:!H,prefix:ee,tags:G,expired_object_delete_marker:xe},n);m.Z.invoke("PUT","/api/v1/buckets/".concat(f,"/lifecycle/").concat(N.id),u).then((function(e){D(!1),p(!0)})).catch((function(e){D(!1),I(e)}))}}(e)},children:(0,P.jsxs)(u.ZP,{container:!0,children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,className:c.formScrollable,children:(0,P.jsxs)(u.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{id:"id",name:"id",label:"Id",value:N.id,onChange:function(){},disabled:!0})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(S.Z,{label:"Status",indicatorLabels:["Enabled","Disabled"],checked:H,value:"user_enabled",id:"rule_status",name:"rule_status",onChange:function(e){Y(e.target.checked)}})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(E.Z,{currentSelection:Se,id:"rule_type",name:"rule_type",label:"Rule Type",selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}],onChange:function(){},disableOptions:!0})}),"expiry"===Se&&(null===(n=N.expiration)||void 0===n?void 0:n.days)&&(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{type:"number",id:"expiry_days",name:"expiry_days",onChange:function(e){Ne(e.target.value)},label:"Expiry Days",value:Pe,min:"0"})}),"expiry"===Se&&(null===(t=N.expiration)||void 0===t?void 0:t.noncurrent_expiration_days)&&(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{type:"number",id:"noncurrentversion_expiration_days",name:"noncurrentversion_expiration_days",onChange:function(e){Ze(e.target.value)},label:"Non-current Expiration Days",value:he,min:"0"})}),"transition"===Se&&(null===(s=N.transition)||void 0===s?void 0:s.days)&&(0,P.jsxs)(a.Fragment,{children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{type:"number",id:"transition_days",name:"transition_days",onChange:function(e){Me(e.target.value)},label:"Transition Days",value:Te,min:"0"})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(C.Z,{label:"Storage Class",id:"storage_class",name:"storage_class",value:re,onChange:function(e){ae(e.target.value)},options:$})})]}),"transition"===Se&&(null===(o=N.transition)||void 0===o?void 0:o.noncurrent_transition_days)&&(0,P.jsxs)(a.Fragment,{children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{type:"number",id:"noncurrentversion_transition_days",name:"noncurrentversion_transition_days",onChange:function(e){ye(e.target.value)},label:"Non-current Transition Days",value:je,min:"0"})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{id:"noncurrentversion_t_SC",name:"noncurrentversion_t_SC",onChange:function(e){ce(e.target.value)},placeholder:"Set Non-current Version Transition Storage Class",label:"Non-current Version Transition Storage Class",value:le})})]}),(0,P.jsx)(u.ZP,{item:!0,xs:12,className:c.formFieldRowAccordion,children:(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(Z.Z,{children:(0,P.jsx)(v.Z,{children:"Filters"})}),(0,P.jsxs)(g.Z,{children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{id:"prefix",name:"prefix",onChange:function(e){ne(e.target.value)},label:"Prefix",value:ee})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(k.Z,{name:"tags",label:"Tags",elements:G,onChange:function(e){z(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})})]})]})}),"expiry"===Se&&(null===(l=N.expiration)||void 0===l?void 0:l.noncurrent_expiration_days)&&(0,P.jsx)(u.ZP,{item:!0,xs:12,className:c.formFieldRowAccordion,children:(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(Z.Z,{children:(0,P.jsx)(v.Z,{children:"Advanced"})}),(0,P.jsx)(g.Z,{children:(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(S.Z,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:xe,onChange:function(e){pe(e.target.checked)},label:"Expired Object Delete Marker"})})})]})})]})}),(0,P.jsxs)(u.ZP,{item:!0,xs:12,className:c.modalButtonBar,children:[(0,P.jsx)(j.Z,{type:"button",variant:"outlined",color:"primary",disabled:O,onClick:function(){p(!1)},children:"Cancel"}),(0,P.jsx)(j.Z,{type:"submit",variant:"contained",color:"primary",disabled:O||!Be,children:"Save"})]}),O&&(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(y.Z,{})})]})})})}))),T=t(56578),M=(0,s.$j)((function(e){return{distributedSetup:e.system.distributedSetup}}),{setModalErrorSnackMessage:f.zb}),A=(0,l.Z)((function(e){return(0,o.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({dateSelector:{"& div":{borderBottom:0,marginBottom:0,"& div:nth-child(2)":{border:"1px solid #EAEAEA",paddingLeft:5,"& div":{border:0}}}},formFieldRowFilter:{"& .MuiPaper-root":{padding:0}}},p.bK),p.ID),p.DF),p.QV))}))(M((function(e){var n=e.open,t=e.closeModalAndRefresh,s=e.classes,o=e.bucketName,l=e.setModalErrorSnackMessage,c=e.distributedSetup,p=(0,a.useState)(!0),f=(0,i.Z)(p,2),N=f[0],F=f[1],I=(0,a.useState)([]),M=(0,i.Z)(I,2),A=M[0],R=M[1],B=(0,a.useState)(!1),L=(0,i.Z)(B,2),O=L[0],D=L[1],w=(0,a.useState)(!1),V=(0,i.Z)(w,2),G=V[0],z=V[1],K=(0,a.useState)(""),W=(0,i.Z)(K,2),H=W[0],Y=W[1],Q=(0,a.useState)(""),U=(0,i.Z)(Q,2),$=U[0],q=U[1],J=(0,a.useState)(""),X=(0,i.Z)(J,2),ee=X[0],ne=X[1],te=(0,a.useState)("expiry"),ie=(0,i.Z)(te,2),re=ie[0],ae=ie[1],se=(0,a.useState)("current"),oe=(0,i.Z)(se,2),le=oe[0],ce=oe[1],de=(0,a.useState)(""),ue=(0,i.Z)(de,2),xe=ue[0],pe=ue[1],fe=(0,a.useState)(!1),me=(0,i.Z)(fe,2),he=me[0],Ze=me[1],ve=(0,a.useState)(!1),ge=(0,i.Z)(ve,2),je=ge[0],ye=ge[1],_e=(0,a.useState)(!0),be=(0,i.Z)(_e,2),Se=be[0],ke=be[1];(0,a.useEffect)((function(){N&&m.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){var n=d()(e,"items",[]);if(null!==n&&n.length>=1){var t=n.map((function(e){var n=e.type,t=d()(e,"".concat(n,".name"),"");return{label:t,value:t}}));R(t),t.length>0&&ne(t[0].value)}F(!1)})).catch((function(e){F(!1)}))}),[N]),(0,a.useEffect)((function(){var e=!0;"expiry"!==re&&""===ee&&(e=!1),Ze(e)}),[re,xe,ee]),(0,a.useEffect)((function(){Se&&c&&m.Z.invoke("GET","/api/v1/buckets/".concat(o,"/versioning")).then((function(e){z(e.is_versioned),ke(!1)})).catch((function(e){l(e),ke(!1)}))}),[Se,l,o,c]);return(0,P.jsxs)(_.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Add Lifecycle Rule",titleIcon:(0,P.jsx)(x.QI,{}),children:[N&&(0,P.jsx)(u.ZP,{container:!0,className:s.loadingBox,children:(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(y.Z,{})})}),!N&&(0,P.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),D(!0),function(){var e={};if("expiry"===re){var n={};"current"===le?n.expiry_days=parseInt(xe):n.noncurrentversion_expiration_days=parseInt(xe),e=(0,r.Z)({},n)}else{var i={};"current"===le?(i.transition_days=parseInt(xe),i.storage_class=ee):(i.noncurrentversion_transition_days=parseInt(xe),i.noncurrentversion_transition_storage_class=ee),e=(0,r.Z)({},i)}var a=(0,r.Z)({type:re,prefix:H,tags:$,expired_object_delete_marker:je},e);m.Z.invoke("POST","/api/v1/buckets/".concat(o,"/lifecycle"),a).then((function(){D(!1),t(!0)})).catch((function(e){D(!1),l(e)}))}()},children:(0,P.jsxs)(u.ZP,{container:!0,children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,className:s.formScrollable,children:(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsxs)(u.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(E.Z,{currentSelection:re,id:"ilm_type",name:"ilm_type",label:"Type of lifecycle",onChange:function(e){ae(e.target.value)},selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}]})}),G&&(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(C.Z,{value:le,id:"object_version",name:"object_version",label:"Object Version",onChange:function(e){ce(e.target.value)},options:[{value:"current",label:"Current Version"},{value:"noncurrent",label:"Non-Current Version"}]})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{id:"expiry_days",name:"expiry_days",onChange:function(e){e.target.validity.valid&&pe(e.target.value)},pattern:"[0-9]*",label:"After",value:xe,overlayObject:(0,P.jsx)(T.Z,{id:"expire-current-unit",unitSelected:"days",unitsList:[{label:"Days",value:"days"}],disabled:!0})})}),"expiry"===re?(0,P.jsx)(a.Fragment,{}):(0,P.jsx)(a.Fragment,{children:(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(C.Z,{label:"To Tier",id:"storage_class",name:"storage_class",value:ee,onChange:function(e){ne(e.target.value)},options:A})})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,className:s.formFieldRowFilter,children:(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(Z.Z,{children:(0,P.jsx)(v.Z,{children:"Filters"})}),(0,P.jsxs)(g.Z,{children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{id:"prefix",name:"prefix",onChange:function(e){Y(e.target.value)},label:"Prefix",value:H})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(k.Z,{name:"tags",label:"Tags",elements:"",onChange:function(e){q(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})})]})]})}),"expiry"===re&&"noncurrent"===le&&(0,P.jsx)(u.ZP,{item:!0,xs:12,className:s.formFieldRowFilter,children:(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(Z.Z,{children:(0,P.jsx)(v.Z,{children:"Advanced"})}),(0,P.jsx)(g.Z,{children:(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(S.Z,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:je,onChange:function(e){ye(e.target.checked)},label:"Expire Delete Marker",description:"Remove the reference to the object if no versions are left"})})})]})})]})})}),(0,P.jsxs)(u.ZP,{item:!0,xs:12,className:s.modalButtonBar,children:[(0,P.jsx)(j.Z,{type:"button",variant:"outlined",color:"primary",disabled:O,onClick:function(){t(!1)},children:"Cancel"}),(0,P.jsx)(j.Z,{type:"submit",variant:"contained",color:"primary",disabled:O||!he,children:"Save"})]}),O&&(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(y.Z,{})})]})})]})}))),R=t(92983),B=t(23804),L=t(60680),O=t(38442),D=t(56087),w=t(40603),V=t(51691),G=t(2148),z=(0,s.$j)(null,{setErrorSnackMessage:f.Ih}),K=(0,l.Z)((function(e){return(0,o.Z)((0,r.Z)({},p.oO))}))(z((function(e){var n=e.onCloseAndRefresh,t=e.deleteOpen,r=e.bucket,s=e.id,o=e.setErrorSnackMessage,l=(0,a.useState)(!1),c=(0,i.Z)(l,2),d=c[0],u=c[1];(0,a.useEffect)((function(){d&&m.Z.invoke("DELETE","/api/v1/buckets/".concat(r,"/lifecycle/").concat(s)).then((function(e){u(!1),n(!0)})).catch((function(e){u(!1),o(e)}))}),[d,r,s,n,o]);return(0,P.jsx)(G.Z,{title:"Delete Lifecycle Rule",confirmText:"Delete",isOpen:t,isLoading:d,onConfirm:function(){u(!0)},titleIcon:(0,P.jsx)(x.Nv,{}),onClose:function(){return n(!1)},confirmationContent:(0,P.jsxs)(V.Z,{children:["Are you sure you want to delete the ",(0,P.jsx)("strong",{children:s})," rule?"]})})}))),W=(0,s.$j)((function(e){return{session:e.console.session,loadingBucket:e.buckets.bucketDetails.loadingBucket,bucketInfo:e.buckets.bucketDetails.bucketInfo}}),{setErrorSnackMessage:f.Ih}),H=(0,l.Z)((function(e){return(0,o.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},p.qg),p.OR),{},{twHeight:{minHeight:400}}))}))(W((function(e){var n=e.classes,t=e.match,r=(e.setErrorSnackMessage,e.loadingBucket),s=(e.bucketInfo,(0,a.useState)(!0)),o=(0,i.Z)(s,2),l=o[0],c=o[1],p=(0,a.useState)([]),f=(0,i.Z)(p,2),h=f[0],Z=f[1],v=(0,a.useState)(!1),g=(0,i.Z)(v,2),j=g[0],y=g[1],_=(0,a.useState)(!1),b=(0,i.Z)(_,2),S=b[0],k=b[1],C=(0,a.useState)(null),E=(0,i.Z)(C,2),N=E[0],F=E[1],T=(0,a.useState)(!1),M=(0,i.Z)(T,2),V=M[0],G=M[1],z=(0,a.useState)(null),W=(0,i.Z)(z,2),H=W[0],Y=W[1],Q=t.params.bucketName,U=(0,O.F)(Q,[D.Ft.S3_GET_LIFECYCLE_CONFIGURATION]);(0,a.useEffect)((function(){r&&c(!0)}),[r,c]),(0,a.useEffect)((function(){l&&(U?m.Z.invoke("GET","/api/v1/buckets/".concat(Q,"/lifecycle")).then((function(e){var n=d()(e,"lifecycle",[]);Z(n||[]),c(!1)})).catch((function(e){console.error(e),Z([]),c(!1)})):c(!1))}),[l,c,Q,U]);var $=[{label:"Type",renderFullObject:!0,renderFunction:function(e){return e?e.expiration&&(e.expiration.days>0||e.expiration.noncurrent_expiration_days)?(0,P.jsx)("span",{children:"Expiry"}):e.transition&&(e.transition.days>0||e.transition.noncurrent_transition_days)?(0,P.jsx)("span",{children:"Transition"}):(0,P.jsx)(a.Fragment,{}):(0,P.jsx)(a.Fragment,{})}},{label:"Version",renderFullObject:!0,renderFunction:function(e){if(!e)return(0,P.jsx)(a.Fragment,{});if(e.expiration){if(e.expiration.days>0)return(0,P.jsx)("span",{children:"Current"});if(e.expiration.noncurrent_expiration_days)return(0,P.jsx)("span",{children:"Non-Current"})}if(e.transition){if(e.transition.days>0)return(0,P.jsx)("span",{children:"Current"});if(e.transition.noncurrent_transition_days)return(0,P.jsx)("span",{children:"Non-Current"})}}},{label:"Tier",elementKey:"storage_class",renderFunction:function(e){var n=d()(e,"transition.storage_class","");return n=d()(e,"transition.noncurrent_storage_class",n)},renderFullObject:!0},{label:"Prefix",elementKey:"prefix"},{label:"After",renderFullObject:!0,renderFunction:function(e){if(!e)return(0,P.jsx)(a.Fragment,{});if(e.expiration){if(e.expiration.days>0)return(0,P.jsxs)("span",{children:[e.expiration.days," days"]});if(e.expiration.noncurrent_expiration_days)return(0,P.jsxs)("span",{children:[e.expiration.noncurrent_expiration_days," days"]})}if(e.transition){if(e.transition.days>0)return(0,P.jsxs)("span",{children:[e.transition.days," days"]});if(e.transition.noncurrent_transition_days)return(0,P.jsxs)("span",{children:[e.transition.noncurrent_transition_days," days"]})}}},{label:"Status",elementKey:"status"}],q=[{type:"view",onClick:function(e){F(e),k(!0)}},{type:"delete",onClick:function(e){Y(e),G(!0)},sendOnlyId:!0}];return(0,P.jsxs)(a.Fragment,{children:[S&&N&&(0,P.jsx)(I,{open:S,closeModalAndRefresh:function(e){k(!1),F(null),e&&c(!0)},selectedBucket:Q,lifecycleRule:N}),j&&(0,P.jsx)(A,{open:j,bucketName:Q,closeModalAndRefresh:function(e){y(!1),e&&c(!0)}}),V&&H&&(0,P.jsx)(K,{id:H,bucket:Q,deleteOpen:V,onCloseAndRefresh:function(e){G(!1),Y(null),e&&c(!0)}}),(0,P.jsxs)(u.ZP,{container:!0,children:[(0,P.jsxs)(u.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,P.jsx)(L.Z,{children:"Lifecycle Rules"}),(0,P.jsx)(O.s,{scopes:[D.Ft.S3_PUT_LIFECYCLE_CONFIGURATION,D.Ft.ADMIN_LIST_TIERS],resource:Q,matchAll:!0,errorProps:{disabled:!0},children:(0,P.jsx)(w.Z,{tooltip:"Add Lifecycle Rule",onClick:function(){y(!0)},text:"Add Lifecycle Rule",icon:(0,P.jsx)(x.dt,{}),color:"primary",variant:"contained"})})]}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(O.s,{scopes:[D.Ft.S3_GET_LIFECYCLE_CONFIGURATION],resource:Q,errorProps:{disabled:!0},children:(0,P.jsx)(R.Z,{itemActions:q,columns:$,isLoading:l,records:h,entityName:"Lifecycle",customEmptyMessage:"There are no Lifecycle rules yet",idField:"id",customPaperHeight:n.twHeight})})}),!l&&(0,P.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,P.jsx)("br",{}),(0,P.jsx)(B.Z,{title:"Lifecycle Rules",iconComponent:(0,P.jsx)(x.y2,{}),help:(0,P.jsxs)(a.Fragment,{children:["MinIO Object Lifecycle Management allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,P.jsx)("br",{}),(0,P.jsx)("br",{}),"You can learn more at our"," ",(0,P.jsx)("a",{href:"https://docs.min.io/minio/baremetal/lifecycle-management/lifecycle-management-overview.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})]})]})]})})))},17420:function(e,n,t){var i=t(93433),r=t(29439),a=t(1413),s=t(72791),o=t(26181),l=t.n(o),c=t(48573),d=t.n(c),u=t(11135),x=t(25787),p=t(61889),f=t(77961),m=t(30829),h=t(20068),Z=t(23814),v=t(21435),g=t(47919),j=t(80184);n.Z=(0,x.Z)((function(e){return(0,u.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},Z.YI),Z.Hr),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},lineInputBoxes:{display:"flex",marginBottom:10},queryDiv:{alignSelf:"center",margin:"0 4px",fontWeight:600}}))}))((function(e){var n=e.elements,t=e.name,a=e.label,o=e.tooltip,c=void 0===o?"":o,u=e.keyPlaceholder,x=void 0===u?"":u,Z=e.valuePlaceholder,y=void 0===Z?"":Z,_=e.onChange,b=e.withBorder,S=void 0!==b&&b,k=e.classes,C=(0,s.useState)([""]),E=(0,r.Z)(C,2),P=E[0],N=E[1],F=(0,s.useState)([""]),I=(0,r.Z)(F,2),T=I[0],M=I[1],A=(0,s.createRef)();(0,s.useEffect)((function(){if(1===P.length&&""===P[0]&&1===T.length&&""===T[0]&&n&&""!==n){var e=n.split("&"),t=[],i=[];e.forEach((function(e){var n=e.split("=");2===n.length&&(t.push(n[0]),i.push(n[1]))})),t.push(""),i.push(""),N(t),M(i)}}),[P,T,n]),(0,s.useEffect)((function(){var e=A.current;e&&P.length>1&&e.scrollIntoView(!1)}),[P]);var R=(0,s.useRef)(!0);(0,s.useLayoutEffect)((function(){R.current?R.current=!1:O()}),[P,T]);var B=function(e){e.persist();var n=(0,i.Z)(P);n[l()(e.target,"dataset.index",0)]=e.target.value,N(n)},L=function(e){e.persist();var n=(0,i.Z)(T);n[l()(e.target,"dataset.index",0)]=e.target.value,M(n)},O=d()((function(){var e="";P.forEach((function(n,t){if(P[t]&&T[t]){var i="".concat(n,"=").concat(T[t]);0!==t&&(i="&".concat(i)),e="".concat(e).concat(i)}})),_(e)}),500),D=T.map((function(e,n){return(0,j.jsxs)(p.ZP,{item:!0,xs:12,className:k.lineInputBoxes,children:[(0,j.jsx)(v.Z,{id:"".concat(t,"-key-").concat(n.toString()),label:"",name:"".concat(t,"-").concat(n.toString()),value:P[n],onChange:B,index:n,placeholder:x}),(0,j.jsx)("span",{className:k.queryDiv,children:":"}),(0,j.jsx)(v.Z,{id:"".concat(t,"-value-").concat(n.toString()),label:"",name:"".concat(t,"-").concat(n.toString()),value:T[n],onChange:L,index:n,placeholder:y,overlayIcon:n===T.length-1?(0,j.jsx)(g.Z,{}):null,overlayAction:function(){!function(){if(""!==P[P.length-1].trim()&&""!==T[T.length-1].trim()){var e=(0,i.Z)(P),n=(0,i.Z)(T);e.push(""),n.push(""),N(e),M(n)}}()}})]},"query-pair-".concat(t,"-").concat(n.toString()))}));return(0,j.jsx)(s.Fragment,{children:(0,j.jsxs)(p.ZP,{item:!0,xs:12,className:k.fieldContainer,children:[(0,j.jsxs)(m.Z,{className:k.inputLabel,children:[(0,j.jsx)("span",{children:a}),""!==c&&(0,j.jsx)("div",{className:k.tooltipContainer,children:(0,j.jsx)(h.Z,{title:c,placement:"top-start",children:(0,j.jsx)(f.Z,{className:k.tooltip})})})]}),(0,j.jsxs)(p.ZP,{item:!0,xs:12,className:"".concat(S?k.inputWithBorder:""),children:[D,(0,j.jsx)("div",{ref:A})]})]})})}))},56028:function(e,n,t){var i=t(29439),r=t(1413),a=t(72791),s=t(60364),o=t(13400),l=t(55646),c=t(5574),d=t(65661),u=t(39157),x=t(11135),p=t(25787),f=t(23814),m=t(42649),h=t(29823),Z=t(28057),v=t(80184),g=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:m.MK});n.Z=(0,p.Z)((function(e){return(0,x.Z)((0,r.Z)((0,r.Z)({},f.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},f.sN))}))(g((function(e){var n=e.onClose,t=e.modalOpen,s=e.title,x=e.children,p=e.classes,f=e.wideLimit,m=void 0===f||f,g=e.modalSnackMessage,j=e.noContentPadding,y=e.setModalSnackMessage,_=e.titleIcon,b=void 0===_?null:_,S=(0,a.useState)(!1),k=(0,i.Z)(S,2),C=k[0],E=k[1];(0,a.useEffect)((function(){y("")}),[y]),(0,a.useEffect)((function(){if(g){if(""===g.message)return void E(!1);"error"!==g.type&&E(!0)}}),[g]);var P=m?{classes:{paper:p.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},N="";return g&&(N=g.detailedErrorMsg,(""===g.detailedErrorMsg||g.detailedErrorMsg.length<5)&&(N=g.message)),(0,v.jsxs)(c.Z,(0,r.Z)((0,r.Z)({open:t,classes:p},P),{},{scroll:"paper",onClose:function(e,t){"backdropClick"!==t&&n()},className:p.root,children:[(0,v.jsxs)(d.Z,{className:p.title,children:[(0,v.jsxs)("div",{className:p.titleText,children:[b," ",s]}),(0,v.jsx)("div",{className:p.closeContainer,children:(0,v.jsx)(o.Z,{"aria-label":"close",id:"close",className:p.closeButton,onClick:n,disableRipple:!0,size:"small",children:(0,v.jsx)(h.Z,{})})})]}),(0,v.jsx)(Z.Z,{isModal:!0}),(0,v.jsx)(l.Z,{open:C,className:p.snackBarModal,onClose:function(){E(!1),y("")},message:N,ContentProps:{className:"".concat(p.snackBar," ").concat(g&&"error"===g.type?p.errorSnackBar:"")},autoHideDuration:g&&"error"===g.type?1e4:5e3}),(0,v.jsx)(u.Z,{className:j?"":p.content,children:x})]}))})))},60680:function(e,n,t){t(72791);var i=t(11135),r=t(25787),a=t(80184);n.Z=(0,r.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var n=e.classes,t=e.children;return(0,a.jsx)("h1",{className:n.root,children:t})}))}}]);
//# sourceMappingURL=51.7a2ef89a.chunk.js.map
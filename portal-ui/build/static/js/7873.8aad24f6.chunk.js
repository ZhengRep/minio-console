"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7873],{81159:function(e,i,n){var t=n(4942),r=n(1413),o=n(72791),a=n(11135),l=n(25787),s=n(9955),c=n(30829),d=n(20068),u=n(20890),p=n(61889),x=n(23814),h=n(75952),f=n(28182),m=n(80184),b=(0,l.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);i.Z=(0,l.Z)((function(e){return(0,a.Z)((0,r.Z)((0,r.Z)({indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},x.OR),x.YI))}))((function(e){var i=e.label,n=void 0===i?"":i,a=e.onChange,l=e.value,s=e.id,x=e.name,g=e.checked,v=void 0!==g&&g,y=e.disabled,Z=void 0!==y&&y,j=e.switchOnly,C=void 0!==j&&j,D=e.tooltip,k=void 0===D?"":D,w=e.description,I=void 0===w?"":w,N=e.classes,E=e.indicatorLabels,P=e.extraInputProps,S=void 0===P?{}:P,F=(0,m.jsxs)(o.Fragment,{children:[!C&&(0,m.jsx)("span",{className:(0,f.Z)(N.indicatorLabel,(0,t.Z)({},N.indicatorLabelOn,!v)),children:E&&E.length>1?E[1]:"OFF"}),(0,m.jsx)(b,{checked:v,onChange:a,color:"primary",name:x,inputProps:(0,r.Z)({"aria-label":"primary checkbox"},S),disabled:Z,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:l,id:s}),!C&&(0,m.jsx)("span",{className:(0,f.Z)(N.indicatorLabel,(0,t.Z)({},N.indicatorLabelOn,v)),children:E?E[0]:"ON"})]});return C?F:(0,m.jsx)("div",{children:(0,m.jsxs)(p.ZP,{container:!0,alignItems:"center",children:[(0,m.jsx)(p.ZP,{item:!0,xs:12,sm:8,md:8,children:""!==n&&(0,m.jsxs)(c.Z,{htmlFor:s,className:N.inputLabel,children:[(0,m.jsx)("span",{children:n}),""!==k&&(0,m.jsx)("div",{className:N.tooltipContainer,children:(0,m.jsx)(d.Z,{title:k,placement:"top-start",children:(0,m.jsx)("div",{className:N.tooltip,children:(0,m.jsx)(h.byK,{})})})})]})}),(0,m.jsx)(p.ZP,{item:!0,xs:12,sm:""!==n?4:12,md:""!==n?4:12,textAlign:"right",justifyContent:"end",className:N.switchContainer,children:F}),""!==I&&(0,m.jsx)(p.ZP,{item:!0,xs:12,textAlign:"left",children:(0,m.jsx)(u.Z,{component:"p",className:N.fieldDescription,children:I})})]})})}))},21435:function(e,i,n){var t=n(29439),r=n(1413),o=n(72791),a=n(27391),l=n(61889),s=n(30829),c=n(20068),d=n(13400),u=n(20165),p=n(3579),x=n(11135),h=n(72455),f=n(25787),m=n(23814),b=n(75952),g=n(28182),v=n(80184),y=(0,h.Z)((function(e){return(0,x.Z)((0,r.Z)({},m.gM))}));function Z(e){var i=y();return(0,v.jsx)(a.Z,(0,r.Z)({InputProps:{classes:i}},e))}i.Z=(0,f.Z)((function(e){return(0,x.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},m.YI),m.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var i=e.label,n=e.onChange,a=e.value,x=e.id,h=e.name,f=e.type,m=void 0===f?"text":f,y=e.autoComplete,j=void 0===y?"off":y,C=e.disabled,D=void 0!==C&&C,k=e.multiline,w=void 0!==k&&k,I=e.tooltip,N=void 0===I?"":I,E=e.index,P=void 0===E?0:E,S=e.error,F=void 0===S?"":S,L=e.required,A=void 0!==L&&L,_=e.placeholder,B=void 0===_?"":_,q=e.min,R=e.max,O=e.overlayId,T=e.overlayIcon,M=void 0===T?null:T,U=e.overlayObject,z=void 0===U?null:U,W=e.extraInputProps,K=void 0===W?{}:W,G=e.overlayAction,Y=e.noLabelMinWidth,$=void 0!==Y&&Y,H=e.pattern,V=void 0===H?"":H,X=e.autoFocus,J=void 0!==X&&X,Q=e.classes,ee=e.className,ie=void 0===ee?"":ee,ne=e.onKeyPress,te=e.onFocus,re=e.onPaste,oe=(0,r.Z)({"data-index":P},K),ae=(0,o.useState)(!1),le=(0,t.Z)(ae,2),se=le[0],ce=le[1];"number"===m&&q&&(oe.min=q),"number"===m&&R&&(oe.max=R),""!==V&&(oe.pattern=V);var de=M,ue=m;return"password"===m&&null===M&&(de=se?(0,v.jsx)(u.Z,{}):(0,v.jsx)(p.Z,{}),ue=se?"text":"password"),(0,v.jsx)(o.Fragment,{children:(0,v.jsxs)(l.ZP,{container:!0,className:(0,g.Z)(""!==ie?ie:"",""!==F?Q.errorInField:Q.inputBoxContainer),children:[""!==i&&(0,v.jsxs)(s.Z,{htmlFor:x,className:$?Q.noMinWidthLabel:Q.inputLabel,children:[(0,v.jsxs)("span",{children:[i,A?"*":""]}),""!==N&&(0,v.jsx)("div",{className:Q.tooltipContainer,children:(0,v.jsx)(c.Z,{title:N,placement:"top-start",children:(0,v.jsx)("div",{className:Q.tooltip,children:(0,v.jsx)(b.byK,{})})})})]}),(0,v.jsxs)("div",{className:Q.textBoxContainer,children:[(0,v.jsx)(Z,{id:x,name:h,fullWidth:!0,value:a,autoFocus:J,disabled:D,onChange:n,type:ue,multiline:w,autoComplete:j,inputProps:oe,error:""!==F,helperText:F,placeholder:B,className:Q.inputRebase,onKeyPress:ne,onFocus:te,onPaste:re}),de&&(0,v.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==i?"withLabel":""),children:(0,v.jsx)(d.Z,{onClick:G?function(){G()}:function(){return ce(!se)},id:O,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:de})}),z&&(0,v.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==i?"withLabel":""),children:z})]})]})})}))},14917:function(e,i,n){n(72791);var t=n(61889),r=n(72455),o=n(80184),a=(0,r.Z)((function(e){return{headerBarIcon:{marginRight:".7rem",color:e.palette.primary.main,"& .min-icon":{width:44,height:44},"@media (max-width: 600px)":{display:"none"}},headerBarSubheader:{color:"grey","@media (max-width: 900px)":{maxWidth:200}},stContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:8,borderBottom:"1px solid #EAEAEA","@media (max-width: 600px)":{flexFlow:"column"}},titleColumn:{height:"auto",justifyContent:"center",display:"flex",flexFlow:"column",alignItems:"flex-start","& h1":{fontSize:19}},leftItems:{display:"flex",alignItems:"center","@media (max-width: 600px)":{flexFlow:"column",width:"100%"}},rightItems:{display:"flex",alignItems:"center","& button":{marginLeft:8},"@media (max-width: 600px)":{width:"100%"}}}}));i.Z=function(e){var i=e.icon,n=e.title,r=e.subTitle,l=e.actions,s=e.className,c=a();return(0,o.jsx)(t.ZP,{container:!0,children:(0,o.jsxs)(t.ZP,{item:!0,xs:12,className:"".concat(c.stContainer," ").concat(s||""),children:[(0,o.jsxs)("div",{className:c.leftItems,children:[i?(0,o.jsx)("div",{className:c.headerBarIcon,children:i}):null,(0,o.jsxs)("div",{className:c.titleColumn,children:[(0,o.jsx)("h1",{style:{margin:0},children:n}),(0,o.jsx)("span",{className:c.headerBarSubheader,children:r})]})]}),(0,o.jsx)("div",{className:c.rightItems,children:l})]})})}},45902:function(e,i,n){var t=n(1413),r=(n(72791),n(53767)),o=n(80184);i.Z=function(e){var i=e.label,n=void 0===i?null:i,a=e.value,l=void 0===a?"-":a,s=e.orientation,c=void 0===s?"column":s,d=e.stkProps,u=void 0===d?{}:d,p=e.lblProps,x=void 0===p?{}:p,h=e.valProps,f=void 0===h?{}:h;return(0,o.jsxs)(r.Z,(0,t.Z)((0,t.Z)({direction:{xs:"column",sm:c}},u),{},{children:[(0,o.jsx)("label",(0,t.Z)((0,t.Z)({style:{marginRight:5,fontWeight:600}},x),{},{children:n})),(0,o.jsx)("label",(0,t.Z)((0,t.Z)({style:{marginRight:5,fontWeight:500}},f),{},{children:l}))]}))}},37099:function(e,i,n){var t=n(72791),r=n(64554),o=n(75952),a=n(80184),l=function(e){var i=e.icon,n=e.description;return(0,a.jsxs)(r.Z,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[i," ",(0,a.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:n})]})};i.Z=function(e){var i=e.helpText,n=e.docLink,s=e.docText,c=e.contents;return(0,a.jsxs)(r.Z,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px"},children:[(0,a.jsxs)(r.Z,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,a.jsx)(o.M9A,{}),(0,a.jsx)("div",{children:i})]}),(0,a.jsxs)(r.Z,{sx:{fontSize:"14px",marginBottom:"15px"},children:[c.map((function(e){return(0,a.jsxs)(t.Fragment,{children:[e.icon&&(0,a.jsx)(r.Z,{sx:{paddingBottom:"20px"},children:(0,a.jsx)(l,{icon:e.icon,description:e.iconDescription})}),(0,a.jsx)(r.Z,{sx:{paddingBottom:"20px"},children:e.text})]})})),(0,a.jsx)(r.Z,{sx:{paddingBottom:"20px"},children:(0,a.jsx)("a",{href:n,target:"_blank",rel:"noopener",children:s})})]})]})}},51270:function(e,i,n){var t=n(29439),r=(n(72791),n(51691)),o=n(9505),a=n(23508),l=n(75952),s=n(87995),c=n(81551),d=n(80184);i.Z=function(e){var i=e.closeDeleteModalAndRefresh,n=e.deleteOpen,u=e.idp,p=e.idpType,x=(0,c.TL)(),h=(0,o.Z)((function(e){i(!0),x((0,s.cN)(!0===e.restart))}),(function(e){return x((0,s.Ih)(e))})),f=(0,t.Z)(h,2),m=f[0],b=f[1];if(!u)return null;var g="_"===u?"Default":u;return(0,d.jsx)(a.Z,{title:"Delete ".concat(g),confirmText:"Delete",isOpen:n,titleIcon:(0,d.jsx)(l.NvT,{}),isLoading:m,onConfirm:function(){b("DELETE","/api/v1/idp/".concat(p,"/").concat(u))},onClose:function(){return i(!1)},confirmButtonProps:{disabled:m},confirmationContent:(0,d.jsxs)(r.Z,{children:["Are you sure you want to delete IDP ",(0,d.jsx)("b",{children:g})," ","configuration? ",(0,d.jsx)("br",{})]})})}},18476:function(e,i,n){var t=n(4942),r=n(74165),o=n(15861),a=n(29439),l=n(1413),s=n(72791),c=n(11135),d=n(25787),u=n(64554),p=n(61889),x=n(23814),h=n(75952),f=n(21435),m=n(57689),b=n(81551),g=n(87995),v=n(9505),y=n(81207),Z=n(74794),j=n(14917),C=n(51270),D=n(81159),k=n(45902),w=n(47974),I=n(80184);i.Z=(0,d.Z)((function(e){return(0,c.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},x.DF),{},{formFieldRow:(0,l.Z)({},x.DF.formFieldRow)},x.oO),{},{pageContainer:{height:"100%"}},x.Bw),x.qg),x.Bz))}))((function(e){var i=e.classes,n=e.formFields,c=e.endpoint,d=e.backLink,x=e.header,N=e.idpType,E=e.icon,P=e.helpBox,S=(0,b.TL)(),F=(0,m.s0)(),L=(0,m.UO)().idpName,A=(0,s.useState)(!0),_=(0,a.Z)(A,2),B=_[0],q=_[1],R=(0,s.useState)(!1),O=(0,a.Z)(R,2),T=O[0],M=O[1],U=(0,s.useState)({}),z=(0,a.Z)(U,2),W=z[0],K=z[1],G=(0,s.useState)({}),Y=(0,a.Z)(G,2),$=Y[0],H=Y[1],V=(0,s.useState)({}),X=(0,a.Z)(V,2),J=X[0],Q=X[1],ee=(0,s.useState)(!1),ie=(0,a.Z)(ee,2),ne=ie[0],te=ie[1],re=(0,s.useState)(!1),oe=(0,a.Z)(re,2),ae=oe[0],le=oe[1],se=(0,v.Z)((function(e){S((0,g.cN)(!0===e.restart))}),(function(e){return S((0,g.Ih)(e))})),ce=(0,a.Z)(se,2),de=ce[0],ue=ce[1],pe=(0,v.Z)((function(e){M(!T),S((0,g.cN)(!0===e.restart))}),(function(e){S((0,g.Ih)(e))})),xe=(0,a.Z)(pe,2),he=xe[0],fe=xe[1],me=function(){ne&&be(J),te(!ne)},be=function(e){var i={};e.info&&e.info.forEach((function(e){"enable"===e.key&&M("on"===e.value),i[e.key]=e.value})),K(i)};(0,s.useEffect)((function(){q(!0)}),[]),(0,s.useEffect)((function(){B&&y.Z.invoke("GET","".concat(c).concat(L)).then((function(e){e&&(Q(e),be(e),function(e){var i={};e.info&&e.info.forEach((function(e){i[e.key]=e.value})),H(i)}(e)),q(!1)})).catch((function(e){S((0,g.Ih)(e)),q(!1)}))}),[S,B,L,c]);var ge=function(){for(var e=0,i=Object.entries(n);e<i.length;e++){var t=(0,a.Z)(i[e],2),r=t[0];if(t[1].required&&(void 0===W[r]||null===W[r]||""===W[r]))return!1}return!0},ve=function(){K({})},ye=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:le(!1),i&&F(d);case 2:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}(),Ze=function(e,i){return"toggle"===i.type?(0,I.jsx)(D.Z,{indicatorLabels:["Enabled","Disabled"],checked:"on"===W[e],value:"is-field-enabled",id:"is-field-enabled",name:"is-field-enabled",label:i.label,tooltip:i.tooltip,onChange:function(i){return K((0,l.Z)((0,l.Z)({},W),{},(0,t.Z)({},e,i.target.checked?"on":"off")))},description:"",disabled:!ne}):(0,I.jsx)(f.Z,{id:e,required:i.required,name:e,label:i.label,tooltip:i.tooltip,error:i.hasError(W[e],ne),value:W[e]?W[e]:"",onChange:function(i){return K((0,l.Z)((0,l.Z)({},W),{},(0,t.Z)({},e,i.target.value)))},placeholder:i.placeholder,disabled:!ne,type:i.type})};return(0,I.jsxs)(p.ZP,{item:!0,xs:12,children:[ae&&L&&(0,I.jsx)(C.Z,{deleteOpen:ae,idp:L,idpType:N,closeDeleteModalAndRefresh:ye}),(0,I.jsx)(w.Z,{label:(0,I.jsx)(h.hbI,{onClick:function(){return F(d)},label:x})}),(0,I.jsx)(Z.Z,{className:i.pageContainer,children:(0,I.jsxs)(u.Z,{children:[(0,I.jsx)(j.Z,{icon:E,title:"_"===L?"Default":L,actions:(0,I.jsxs)(s.Fragment,{children:["_"!==L&&(0,I.jsx)(h.zxk,{id:"delete-idp-config",onClick:function(){le(!0)},label:"Delete Configuration",icon:(0,I.jsx)(h.XHJ,{}),variant:"secondary"}),!ne&&(0,I.jsx)(h.zxk,{id:"edit",type:"button",variant:"callAction",icon:(0,I.jsx)(h.dY8,{}),onClick:me,label:"Edit"}),(0,I.jsx)(h.zxk,{id:"is-configuration-enabled",onClick:function(){return function(e){var i="enable=".concat(e?"on":"off");fe("PUT","".concat(c).concat(L),{input:i})}(!T)},label:T?"Disable":"Enable",disabled:he}),(0,I.jsx)(h.zxk,{id:"refresh-idp-config",onClick:function(){return q(!0)},label:"Refresh",icon:(0,I.jsx)(h.DuK,{})})]})}),ne?(0,I.jsxs)(u.Z,{sx:{display:"grid",padding:"25px",gap:"25px",gridTemplateColumns:{md:"2fr 1.2fr",xs:"1fr"},border:"1px solid #eaeaea"},children:[(0,I.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){e.preventDefault();for(var i="",t=0,r=Object.keys(n);t<r.length;t++){var o=r[t];(W[o]||W[o]!==$[o])&&(i+="".concat(o,"=").concat(W[o]," "))}ue("PUT","".concat(c).concat(L),{input:i}),te(!1)}(e)},children:(0,I.jsx)(p.ZP,{container:!0,item:!0,spacing:"20",sx:{marginTop:1},children:(0,I.jsxs)(p.ZP,{xs:12,item:!0,className:i.fieldBox,children:[Object.entries(n).map((function(e){var n=(0,a.Z)(e,2),t=n[0],r=n[1];return(0,I.jsx)(p.ZP,{item:!0,xs:12,className:i.formFieldRow,children:Ze(t,r)},t)})),(0,I.jsx)(p.ZP,{item:!0,xs:12,textAlign:"right",children:(0,I.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"20px",gap:"15px"},children:[ne&&(0,I.jsx)(h.zxk,{id:"clear",type:"button",variant:"regular",onClick:ve,label:"Clear"}),ne&&(0,I.jsx)(h.zxk,{id:"cancel",type:"button",variant:"regular",onClick:me,label:"Cancel"}),ne&&(0,I.jsx)(h.zxk,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:B||de||!ge(),label:"Save"})]})})]})})}),P]}):(0,I.jsx)(u.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"2fr 1fr"},gridAutoFlow:{xs:"dense",sm:"row"},gap:3,padding:"15px",border:"1px solid #eaeaea"},children:Object.entries(n).map((function(e){var i=(0,a.Z)(e,2),n=i[0],t=i[1];return(0,I.jsx)(k.Z,{label:t.label,value:W[n]?W[n]:""},n)}))})]})})]})}))},79979:function(e,i,n){n.d(i,{DY:function(){return s},Si:function(){return a},f4:function(){return l},iR:function(){return c}});var t=n(50521),r=n(75952),o=n(80184),a=[{text:"MinIO supports using an Active Directory or LDAP (AD/LDAP) service for external management of user identities. Configuring an external IDentity Provider (IDP) enables Single-Sign On (SSO) workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:(0,o.jsx)(t.Z,{}),iconDescription:"Create Configurations"},{text:"MinIO queries the configured Active Directory / LDAP server to verify the credentials specified by the application and optionally return a list of groups in which the user has membership. MinIO supports two modes (Lookup-Bind Mode and Username-Bind Mode) for performing these queries",icon:null,iconDescription:""},{text:"MinIO recommends using Lookup-Bind mode as the preferred method for verifying AD/LDAP credentials. Username-Bind mode is a legacy method retained for backwards compatibility only.",icon:null,iconDescription:""}],l=[{text:"MinIO supports using an OpenID Connect (OIDC) compatible IDentity Provider (IDP) such as Okta, KeyCloak, Dex, Google, or Facebook for external management of user identities.",icon:(0,o.jsx)(r.mBM,{}),iconDescription:"Create Configurations"},{text:"Configuring an external IDP enables Single-Sign On workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:null,iconDescription:""}],s={config_url:{required:!0,hasError:function(e,i){return!e&&i?"Config URL is required":""},label:"Config URL",tooltip:"Config URL for identity provider configuration",placeholder:"https://identity-provider-url/.well-known/openid-configuration",type:"text"},client_id:{required:!0,hasError:function(e,i){return!e&&i?"Client ID is required":""},label:"Client ID",tooltip:"Identity provider Client ID",placeholder:"Enter Client ID",type:"text"},client_secret:{required:!0,hasError:function(e,i){return!e&&i?"Client Secret is required":""},label:"Client Secret",tooltip:"Identity provider Client Secret",placeholder:"Enter Client Secret",type:"password"},claim_name:{required:!1,label:"Claim Name",tooltip:"Claim from which MinIO will read the policy or role to use",placeholder:"Enter Claim Name",type:"text",hasError:function(e,i){return""}},display_name:{required:!1,label:"Display Name",tooltip:"",placeholder:"Enter Display Name",type:"text",hasError:function(e,i){return""}},claim_prefix:{required:!1,label:"Claim Prefix",tooltip:"",placeholder:"Enter Claim Prefix",type:"text",hasError:function(e,i){return""}},scopes:{required:!1,label:"Scopes",tooltip:"",placeholder:"openid,profile,email",type:"text",hasError:function(e,i){return""}},redirect_uri:{required:!1,label:"Redirect URI",tooltip:"",placeholder:"https://console-endpoint-url/oauth_callback",type:"text",hasError:function(e,i){return""}},role_policy:{required:!1,label:"Role Policy",tooltip:"",placeholder:"readonly",type:"text",hasError:function(e,i){return""}},claim_userinfo:{required:!1,label:"Claim User Info",tooltip:"",placeholder:"Claim User Info",type:"toggle",hasError:function(e,i){return""}},redirect_uri_dynamic:{required:!1,label:"Redirect URI Dynamic",tooltip:"",placeholder:"Redirect URI Dynamic",type:"toggle",hasError:function(e,i){return""}}},c={server_addr:{required:!0,hasError:function(e,i){return!e&&i?"Server Address is required":""},label:"Server Address",tooltip:'AD/LDAP server address e.g. "myldapserver.com:636"',placeholder:"myldapserver.com:636",type:"text"},lookup_bind_dn:{required:!0,hasError:function(e,i){return!e&&i?"Lookup Bind DN is required":""},label:"Lookup Bind DN",tooltip:"DN for LDAP read-only service account used to perform DN and group lookups",placeholder:"cn=admin,dc=min,dc=io",type:"text"},lookup_bind_password:{required:!0,hasError:function(e,i){return!e&&i?"Lookup Bind Password is required":""},label:"Lookup Bind Password",tooltip:"Password for LDAP read-only service account used to perform DN and group lookups",placeholder:"admin",type:"password"},user_dn_search_base_dn:{required:!0,hasError:function(e,i){return!e&&i?"User DN Search Base DN is required":""},label:"User DN Search Base",tooltip:"",placeholder:"DC=example,DC=net",type:"text"},user_dn_search_filter:{required:!0,hasError:function(e,i){return!e&&i?"User DN Search Filter is required":""},label:"User DN Search Filter",tooltip:"",placeholder:"(sAMAcountName=%s)",type:"text"},display_name:{required:!1,label:"Display Name",tooltip:"",placeholder:"Enter Display Name",type:"text",hasError:function(e,i){return""}},group_search_base_dn:{required:!1,hasError:function(e,i){return""},label:"Group Search Base DN",tooltip:"",placeholder:"ou=swengg,dc=min,dc=io",type:"text"},group_search_filter:{required:!1,hasError:function(e,i){return""},label:"Group Search Filter",tooltip:"",placeholder:"(&(objectclass=groupofnames)(member=%d))",type:"text"}}}}]);
//# sourceMappingURL=7873.8aad24f6.chunk.js.map
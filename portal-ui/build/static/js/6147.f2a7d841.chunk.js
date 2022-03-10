"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6147],{25534:function(e,n,t){var a=t(18489),s=(t(50390),t(25594)),o=t(86509),i=t(4285),r=t(72462),c=t(62559);n.Z=(0,i.Z)((function(e){return(0,o.Z)((0,a.Z)({},r.Bw))}))((function(e){var n=e.classes,t=e.className,a=void 0===t?"":t,o=e.children;return(0,c.jsx)("div",{className:n.contentSpacer,children:(0,c.jsx)(s.ZP,{container:!0,children:(0,c.jsx)(s.ZP,{item:!0,xs:12,className:a,children:o})})})}))},66721:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var a=t(35531),s=t(23430),o=t(18489),i=t(50390),r=t(34424),c=t(38342),l=t.n(c),u=t(86509),d=t(4285),m=t(25594),p=t(66946),h=t(72462),f=t(28948),g=t(44149),b=t(30324),x=t(8174),v=t(12066),Z=t(62559),j=(0,d.Z)((function(e){return(0,u.Z)({searchField:(0,o.Z)((0,o.Z)({},h.qg.searchField),{},{height:30,padding:0,"& input":{padding:"0 12px",height:28,fontSize:12,fontWeight:600,color:"#393939"},"&.isDisabled":{"&:hover":{borderColor:"#EAEDEE"}},"& input.Mui-disabled":{backgroundColor:"#EAEAEA"}}),labelStyle:{color:"#393939",fontSize:12,marginBottom:4},buttonKit:{display:"flex",alignItems:"center"},fieldContainer:{flexGrow:1,margin:"0 15px"}})}))((function(e){var n=e.classes,t=e.label,a=e.onChange,s=e.value,o=e.placeholder,r=void 0===o?"":o,c=e.id,l=e.name;return(0,Z.jsx)(i.Fragment,{children:(0,Z.jsxs)("div",{className:n.fieldContainer,children:[(0,Z.jsx)("div",{className:n.labelStyle,children:t}),(0,Z.jsx)("div",{className:n.buttonKit,children:(0,Z.jsx)(v.Z,{placeholder:r,id:c,name:l,label:"",onChange:function(e){a(e.target.value)},InputProps:{disableUnderline:!0},className:n.searchField,value:s})})]})})})),S=t(51002),_={time:"Timestamp",api_name:"API Name",access_key:"Access Key",bucket:"Bucket",object:"Object",remote_host:"Remote Host",request_id:"Request ID",user_agent:"User Agent",response_status:"Response Status",response_status_code:"Response Status Code",request_content_length:"Request Content Length",response_content_length:"Response Content Length",time_to_response_ns:"Time to Response NS"},C=(0,d.Z)((function(e){return(0,u.Z)((0,o.Z)({buttonContainer:{textAlign:"right"},objectKeyCol:{fontWeight:700,paddingRight:"10px",textAlign:"left"}},h.oO))}))((function(e){var n=e.modalOpen,t=e.logSearchElement,a=e.onClose,s=e.classes,o=Object.keys(t);return(0,Z.jsx)(i.Fragment,{children:(0,Z.jsx)(S.Z,{modalOpen:n,title:"Full Log Information",onClose:function(){a()},children:(0,Z.jsxs)(m.ZP,{container:!0,children:[(0,Z.jsx)(m.ZP,{item:!0,xs:12,children:(0,Z.jsx)("table",{children:(0,Z.jsx)("tbody",{children:o.map((function(e,n){return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{className:s.objectKeyCol,children:l()(_,e,"".concat(e))}),(0,Z.jsx)("td",{children:l()(t,e,"")})]},"logSearch-".concat(n.toString()))}))})})}),(0,Z.jsx)(m.ZP,{item:!0,xs:12,className:s.buttonContainer,children:(0,Z.jsx)(p.Z,{type:"button",variant:"contained",color:"primary",onClick:a,children:"Close"})})]})})})})),y=t(17778),k=t(35721),E=t(25534),N=t(37354),P=t(49495),A=t(30140),w=t(86362),F=t(8235),L=function(e){var n=e.iconComponent,t=e.entity,a=e.documentationLink;return(0,Z.jsx)(m.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,Z.jsx)(m.ZP,{item:!0,xs:8,children:(0,Z.jsx)(F.Z,{title:"".concat(t," not available"),iconComponent:n,help:(0,Z.jsxs)(i.Fragment,{children:["This feature is not available.",(0,Z.jsx)("br",{}),"Please configure"," ",(0,Z.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:t})," ","first to use this feature."]})})})})},I={setErrorSnackMessage:g.Ih},O=(0,r.$j)((function(e){return{features:e.console.session.features}}),I),R=(0,d.Z)((function(e){return(0,u.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({blockCollapsed:{display:"none",overflowY:"hidden"},filterOpen:{display:"block",marginBottom:12},endLineAction:{marginBottom:15,padding:"0 15px 0 15px",display:"flex",alignItems:"center",justifyContent:"flex-end"},filtersContainer:{display:"flex",justifyContent:"space-between",marginBottom:12},innerContainer:{backgroundColor:"#fff"},noticeLabel:{marginLeft:15,marginBottom:15,fontSize:12,color:"#9C9C9C"},tableFOpen:{height:"calc(100vh - 520px)"},tableFClosed:{height:"calc(100vh - 320px)"}},h.VX),h.S),{},{searchOptions:{display:"flex",padding:15,"@media (max-width: 900px)":{flexFlow:"column"}},formBox:{border:"1px solid #EAEAEA",marginBottom:15},dateRangePicker:{"& div":{marginBottom:0}},advancedButton:{display:"flex",alignItems:"center",justifyContent:"flex-start"}},h.o$),(0,h.Bz)(e.spacing(4))))}))(O((function(e){var n=e.classes,t=e.features,o=e.setErrorSnackMessage,r=(0,i.useState)(!0),c=(0,s.Z)(r,2),u=c[0],d=c[1],h=(0,i.useState)(null),g=(0,s.Z)(h,2),v=g[0],S=g[1],F=(0,i.useState)(null),I=(0,s.Z)(F,2),O=I[0],R=I[1],K=(0,i.useState)(!1),q=(0,s.Z)(K,2),M=q[0],B=q[1],D=(0,i.useState)([]),z=(0,s.Z)(D,2),T=z[0],H=z[1],W=(0,i.useState)(""),G=(0,s.Z)(W,2),U=G[0],Y=G[1],V=(0,i.useState)(""),$=(0,s.Z)(V,2),X=$[0],J=$[1],Q=(0,i.useState)(""),ee=(0,s.Z)(Q,2),ne=ee[0],te=ee[1],ae=(0,i.useState)(""),se=(0,s.Z)(ae,2),oe=se[0],ie=se[1],re=(0,i.useState)(""),ce=(0,s.Z)(re,2),le=ce[0],ue=ce[1],de=(0,i.useState)(""),me=(0,s.Z)(de,2),pe=me[0],he=me[1],fe=(0,i.useState)(""),ge=(0,s.Z)(fe,2),be=ge[0],xe=ge[1],ve=(0,i.useState)("DESC"),Ze=(0,s.Z)(ve,2),je=Ze[0],Se=Ze[1],_e=(0,i.useState)(["time","api_name","access_key","bucket","object","remote_host","request_id","user_agent","response_status"]),Ce=(0,s.Z)(_e,2),ye=Ce[0],ke=Ce[1],Ee=(0,i.useState)(0),Ne=(0,s.Z)(Ee,2),Pe=Ne[0],Ae=Ne[1],we=(0,i.useState)(!1),Fe=(0,s.Z)(we,2),Le=Fe[0],Ie=Fe[1],Oe=(0,i.useState)(!1),Re=(0,s.Z)(Oe,2),Ke=Re[0],qe=Re[1],Me=(0,i.useState)(null),Be=(0,s.Z)(Me,2),De=Be[0],ze=Be[1],Te=null,He=t&&t.includes("log-search"),We=(0,i.useCallback)((function(){if(!Le&&He){Ie(!0);var e="".concat(""!==U?"&fp=bucket:".concat(U):"").concat(""!==le?"&fp=object:".concat(le):"").concat(""!==X?"&fp=api_name:".concat(X):"").concat(""!==ne?"&fp=access_key:".concat(ne):"").concat(""!==pe?"&fp=request_id:".concat(pe):"").concat(""!==oe?"&fp=user_agent:".concat(oe):"").concat(""!==be?"&fp=response_status:".concat(be):"");(e=e.trim()).endsWith(",")&&(e=e.slice(0,-1)),b.Z.invoke("GET","/api/v1/logs/search?q=reqinfo".concat(""!==e?"".concat(e):"","&pageSize=100&pageNo=").concat(Pe,"&order=").concat("DESC"===je?"timeDesc":"timeAsc").concat(null!==v?"&timeStart=".concat(v.toISOString()):"").concat(null!==O?"&timeEnd=".concat(O.toISOString()):"")).then((function(e){var n=e.results||[];d(!1),Ie(!1),H(n),Ae(Pe+1),null!==Te&&Te()})).catch((function(e){d(!1),Ie(!1),o(e)}))}else d(!1),Ie(!1)}),[Le,He,U,le,X,ne,pe,oe,be,Pe,je,v,O,Te,o]);(0,i.useEffect)((function(){u&&(H([]),We())}),[u,je,We]);return(0,Z.jsxs)(i.Fragment,{children:[Ke&&null!==De&&(0,Z.jsx)(C,{logSearchElement:De,modalOpen:Ke,onClose:function(){ze(null),qe(!1)}}),(0,Z.jsx)(k.Z,{label:"Audit Logs"}),(0,Z.jsx)(E.Z,{children:He?(0,Z.jsxs)(i.Fragment,{children:[" ",(0,Z.jsxs)(m.ZP,{xs:12,className:n.formBox,children:[(0,Z.jsxs)(m.ZP,{item:!0,xs:12,className:"".concat(n.searchOptions),children:[(0,Z.jsx)("div",{className:n.dateRangePicker,children:(0,Z.jsx)(y.Z,{setTimeEnd:R,setTimeStart:S,timeEnd:O,timeStart:v})}),(0,Z.jsx)(m.ZP,{item:!0,className:n.advancedButton,children:(0,Z.jsxs)("button",{onClick:function(){B(!M)},className:n.advancedConfiguration,children:[M?"Hide":"Show"," advanced Filters"," ",(0,Z.jsx)("span",{className:M?n.advancedOpen:n.advancedClosed,children:(0,Z.jsx)(N.Z,{})})]})})]}),(0,Z.jsx)(m.ZP,{item:!0,xs:12,className:"".concat(n.blockCollapsed," ").concat(M?n.filterOpen:""),children:(0,Z.jsxs)("div",{className:n.innerContainer,children:[(0,Z.jsxs)("div",{className:n.noticeLabel,children:["Enable your preferred options to get filtered records.",(0,Z.jsx)("br",{}),"You can use '*' to match any character, '.' to signify a single character or '\\' to scape an special character (E.g. mybucket-*)"]}),(0,Z.jsxs)("div",{className:n.filtersContainer,children:[(0,Z.jsx)(j,{onChange:Y,value:U,label:"Bucket",id:"bucket",name:"bucket"}),(0,Z.jsx)(j,{onChange:J,value:X,label:"API Name",id:"api_name",name:"api_name"}),(0,Z.jsx)(j,{onChange:te,value:ne,label:"Access Key",id:"access_key",name:"access_key"}),(0,Z.jsx)(j,{onChange:ie,value:oe,label:"User Agent",id:"user_agent",name:"user_agent"})]}),(0,Z.jsxs)("div",{className:n.filtersContainer,children:[(0,Z.jsx)(j,{onChange:ue,value:le,label:"Object",id:"object",name:"object"}),(0,Z.jsx)(j,{onChange:he,value:pe,label:"Request ID",id:"request_id",name:"request_id"}),(0,Z.jsx)(j,{onChange:xe,value:be,label:"Response Status",id:"response_status",name:"response_status"})]})]})}),(0,Z.jsx)(m.ZP,{item:!0,xs:12,className:n.endLineAction,children:(0,Z.jsx)(p.Z,{type:"button",variant:"contained",color:"primary",onClick:function(){Ae(0),d(!0)},children:"Get Information"})})]}),(0,Z.jsx)(m.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,Z.jsx)(A.s,{scopes:[P.Ft.ADMIN_HEALTH_INFO],resource:P.C3,errorProps:{disabled:!0},children:(0,Z.jsx)(x.Z,{columns:[{label:_.time,elementKey:"time",enableSort:!0},{label:_.api_name,elementKey:"api_name"},{label:_.access_key,elementKey:"access_key"},{label:_.bucket,elementKey:"bucket"},{label:_.object,elementKey:"object"},{label:_.remote_host,elementKey:"remote_host"},{label:_.request_id,elementKey:"request_id"},{label:_.user_agent,elementKey:"user_agent"},{label:_.response_status,elementKey:"response_status",renderFunction:function(e){return(0,Z.jsx)(i.Fragment,{children:(0,Z.jsxs)("span",{children:[e.response_status_code," (",e.response_status,")"]})})},renderFullObject:!0},{label:_.request_content_length,elementKey:"request_content_length",renderFunction:f.ae},{label:_.response_content_length,elementKey:"response_content_length",renderFunction:f.ae},{label:_.time_to_response_ns,elementKey:"time_to_response_ns",renderFunction:f.Yj,contentTextAlign:"right"}],isLoading:u,records:T,entityName:"Logs",customEmptyMessage:"There is no information with this criteria",idField:"request_id",columnsSelector:!0,columnsShown:ye,onColumnChange:function(e,n){var t=(0,a.Z)(ye);n?t.includes(e)||t.push(e):t=ye.filter((function(n){return n!==e})),ke(t)},customPaperHeight:M?n.tableFOpen:n.tableFClosed,sortConfig:{currentSort:"time",currentDirection:je,triggerSort:function(e){var n=l()(e,"sortDirection","DESC");Se(n),Ae(0),d(!0)}},infiniteScrollConfig:{recordsCount:1e6,loadMoreRecords:function(e){return We(),new Promise((function(e){Te=e}))}},itemActions:[{type:"view",onClick:function(e){ze(e),qe(!0)}}],textSelectable:!0})})})]}):(0,Z.jsx)(L,{entity:"Audit Logs",iconComponent:(0,Z.jsx)(w.W1,{}),documentationLink:"https://github.com/minio/operator/tree/master/logsearchapi"})})]})})))},37354:function(e,n,t){var a=t(64119);n.Z=void 0;var s=a(t(66830)),o=t(62559),i=(0,s.default)((0,o.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");n.Z=i},21278:function(e,n,t){var a=t(64119);n.Z=void 0;var s=a(t(66830)),o=t(62559),i=(0,s.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=i},59443:function(e,n,t){var a=t(64119);n.Z=void 0;var s=a(t(66830)),o=t(62559),i=(0,s.default)((0,o.jsx)("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"}),"WatchLater");n.Z=i},7887:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1048),s=t(32793),o=t(50390),i=t(44977),r=t(50076),c=t(8208),l=t(15573),u=t(10594);function d(e){return(0,u.Z)("MuiDialogActions",e)}(0,t(43349).Z)("MuiDialogActions",["root","spacing"]);var m=t(62559),p=["className","disableSpacing"],h=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,s.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=o.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiDialogActions"}),o=t.className,c=t.disableSpacing,u=void 0!==c&&c,f=(0,a.Z)(t,p),g=(0,s.Z)({},t,{disableSpacing:u}),b=function(e){var n=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,r.Z)(t,d,n)}(g);return(0,m.jsx)(h,(0,s.Z)({className:(0,i.Z)(b.root,o),ownerState:g,ref:n},f))}))},65771:function(e,n,t){t.d(n,{Z:function(){return S}});var a=t(36222),s=t(1048),o=t(32793),i=t(50390),r=t(44977),c=t(50076),l=t(91442),u=t(35477),d=t(14478),m=t(23060),p=t(8208),h=t(10594);function f(e){return(0,h.Z)("MuiInputAdornment",e)}var g,b=(0,t(43349).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=t(15573),v=t(62559),Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,l.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active},"filled"===t.variant&&(0,a.Z)({},"&.".concat(b.positionStart,"&:not(.").concat(b.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),S=i.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiInputAdornment"}),a=t.children,p=t.className,h=t.component,b=void 0===h?"div":h,S=t.disablePointerEvents,_=void 0!==S&&S,C=t.disableTypography,y=void 0!==C&&C,k=t.position,E=t.variant,N=(0,s.Z)(t,Z),P=(0,m.Z)()||{},A=E;E&&P.variant,P&&!A&&(A=P.variant);var w=(0,o.Z)({},t,{hiddenLabel:P.hiddenLabel,size:P.size,disablePointerEvents:_,position:k,variant:A}),F=function(e){var n=e.classes,t=e.disablePointerEvents,a=e.hiddenLabel,s=e.position,o=e.size,i=e.variant,r={root:["root",t&&"disablePointerEvents",s&&"position".concat((0,l.Z)(s)),i,a&&"hiddenLabel",o&&"size".concat((0,l.Z)(o))]};return(0,c.Z)(r,f,n)}(w);return(0,v.jsx)(d.Z.Provider,{value:null,children:(0,v.jsx)(j,(0,o.Z)({as:b,ownerState:w,className:(0,r.Z)(F.root,p),ref:n},N,{children:"string"!==typeof a||y?(0,v.jsxs)(i.Fragment,{children:["start"===k?g||(g=(0,v.jsx)("span",{className:"notranslate",children:"\u200b"})):null,a]}):(0,v.jsx)(u.Z,{color:"text.secondary",children:a})}))})}))},18207:function(e,n,t){function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{Z:function(){return a}})},46633:function(e,n,t){function a(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=6147.f2a7d841.chunk.js.map
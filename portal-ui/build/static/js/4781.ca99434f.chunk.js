"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4781],{57314:function(e,t,n){var a=n(1413),l=n(72791),s=n(61889),i=n(30829),o=n(20068),r=n(27391),c=n(11135),d=n(25787),u=n(23814),m=n(84570),x=n(80184);t.Z=(0,d.Z)((function(e){return(0,c.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},u.YI),u.Hr),{},{inputLabel:(0,a.Z)((0,a.Z)({},u.YI.inputLabel),{},{fontSize:14,margin:0,alignItems:"flex-start",paddingTop:"20px",flexWrap:"wrap",display:"flex"}),textBoxContainer:{flexGrow:1,position:"relative"},cssOutlinedInput:{borderColor:"#EAEAEA",padding:16},rootContainer:{"& .MuiOutlinedInput-inputMultiline":(0,a.Z)((0,a.Z)({},u.YI.inputLabel),{},{fontSize:13,minHeight:150}),"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#07193E",borderWidth:1},"& textarea":{color:"#07193E",fontSize:13,fontWeight:600,"&:placeholder":{color:"#858585",opacity:1,fontWeight:400}}}}))}))((function(e){var t=e.label,n=e.onChange,a=e.value,c=e.id,d=e.name,u=e.disabled,h=void 0!==u&&u,p=e.tooltip,Z=void 0===p?"":p,f=e.index,v=void 0===f?0:f,g=e.error,b=void 0===g?"":g,j=e.required,C=void 0!==j&&j,N=e.placeholder,P=void 0===N?"":N,S=e.classes,w={"data-index":v};return(0,x.jsx)(l.Fragment,{children:(0,x.jsxs)(s.ZP,{item:!0,xs:12,className:"".concat(S.fieldContainer," ").concat(""!==b?S.errorInField:""),children:[""!==t&&(0,x.jsxs)(i.Z,{htmlFor:c,className:S.inputLabel,children:[(0,x.jsxs)("span",{children:[t,C?"*":""]}),""!==Z&&(0,x.jsx)("div",{className:S.tooltipContainer,children:(0,x.jsx)(o.Z,{title:Z,placement:"top-start",children:(0,x.jsx)("div",{className:S.tooltip,children:(0,x.jsx)(m.Z,{})})})})]}),(0,x.jsx)("div",{className:S.textBoxContainer,children:(0,x.jsx)(r.Z,{id:c,name:d,fullWidth:!0,value:a,disabled:h,onChange:n,multiline:!0,rows:5,inputProps:w,error:""!==b,helperText:b,placeholder:P,InputLabelProps:{shrink:!0},InputProps:{classes:{notchedOutline:S.cssOutlinedInput,root:S.rootContainer}},variant:"outlined"})})]})})}))},64163:function(e,t,n){var a=n(1413),l=n(72791),s=n(61889),i=n(11135),o=n(25787),r=n(23814),c=n(80184);t.Z=(0,o.Z)((function(e){return(0,i.Z)((0,a.Z)({},r.xx))}))((function(e){var t=e.classes,n=e.label,a=void 0===n?"":n,i=e.content,o=e.multiLine,r=void 0!==o&&o;return(0,c.jsx)(l.Fragment,{children:(0,c.jsxs)(s.ZP,{className:t.prefinedContainer,children:[""!==a&&(0,c.jsx)(s.ZP,{item:!0,xs:12,className:t.predefinedTitle,children:a}),(0,c.jsx)(s.ZP,{item:!0,xs:12,className:t.predefinedList,children:(0,c.jsx)(s.ZP,{item:!0,xs:12,className:r?t.innerContentMultiline:t.innerContent,children:i})})]})})}))},83679:function(e,t,n){var a=n(4942),l=n(1413),s=(n(72791),n(28182)),i=n(61889),o=n(10765),r=n(85523),c=n(61419),d=n(30829),u=n(20068),m=n(11135),x=n(25787),h=n(72455),p=n(23814),Z=n(84570),f=n(80184),v=(0,h.Z)((0,l.Z)({root:{"&:hover":{backgroundColor:"transparent"}}},p.FU)),g=function(e){var t=v();return(0,f.jsx)(c.Z,(0,l.Z)({className:t.root,disableRipple:!0,color:"default",checkedIcon:(0,f.jsx)("span",{className:t.radioSelectedIcon}),icon:(0,f.jsx)("span",{className:t.radioUnselectedIcon})},e))};t.Z=(0,x.Z)((function(e){return(0,m.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},p.YI),p.Hr),{},{optionLabel:{"&.Mui-disabled":{"& .MuiFormControlLabel-label":{color:"#9c9c9c"}},"&:last-child":{marginRight:0},"& .MuiFormControlLabel-label":{fontSize:12,color:"#07193E"}},checkedOption:{"& .MuiFormControlLabel-label":{fontSize:12,color:"#07193E",fontWeight:700}}}))}))((function(e){var t=e.selectorOptions,n=void 0===t?[]:t,l=e.currentSelection,c=e.label,m=e.id,x=e.name,h=e.onChange,p=e.tooltip,v=void 0===p?"":p,b=e.disableOptions,j=void 0!==b&&b,C=e.classes,N=e.displayInColumn,P=void 0!==N&&N;return(0,f.jsxs)(i.ZP,{container:!0,alignItems:"center",children:[(0,f.jsx)(i.ZP,{item:!0,xs:!0,children:(0,f.jsxs)(d.Z,{htmlFor:m,className:C.inputLabel,children:[(0,f.jsx)("span",{children:c}),""!==v&&(0,f.jsx)("div",{className:C.tooltipContainer,children:(0,f.jsx)(u.Z,{title:v,placement:"top-start",children:(0,f.jsx)("div",{children:(0,f.jsx)(Z.Z,{})})})})]})}),(0,f.jsx)(i.ZP,{item:!0,xs:!0,className:C.radioOptionsLayout,children:(0,f.jsx)(o.Z,{"aria-label":m,id:m,name:x,value:l,onChange:h,row:!P,style:{display:"block",textAlign:"right"},children:n.map((function(e){return(0,f.jsx)(r.Z,{value:e.value,control:(0,f.jsx)(g,{}),label:e.label,disabled:j,className:(0,s.Z)(C.optionLabel,(0,a.Z)({},C.checkedOption,e.value===l))},"rd-".concat(x,"-").concat(e.value))}))})})]})}))},84781:function(e,t,n){n.r(t);var a=n(29439),l=n(1413),s=n(72791),i=n(11135),o=n(25787),r=n(61889),c=n(21435),d=n(83679),u=n(23814),m=n(57314),x=n(37516),h=n(64163),p=n(80184);t.default=(0,o.Z)((function(e){return(0,i.Z)((0,l.Z)((0,l.Z)({},u.oO),u.DF))}))((function(e){var t=e.onChange,n=e.classes,l=(0,s.useState)(!1),i=(0,a.Z)(l,2),o=i[0],u=i[1],Z=(0,s.useState)(""),f=(0,a.Z)(Z,2),v=f[0],g=f[1],b=(0,s.useState)(""),j=(0,a.Z)(b,2),C=j[0],N=j[1],P=(0,s.useState)(""),S=(0,a.Z)(P,2),w=S[0],F=S[1],k=(0,s.useState)(""),E=(0,a.Z)(k,2),I=E[0],L=E[1],y=(0,s.useState)(""),O=(0,a.Z)(y,2),R=O[0],M=O[1],_=(0,s.useState)(""),q=(0,a.Z)(_,2),D=q[0],B=q[1],W=(0,s.useState)(""),z=(0,a.Z)(W,2),A=z[0],T=z[1],H=(0,s.useState)("namespace"),Q=(0,a.Z)(H,2),Y=Q[0],U=Q[1],G=(0,s.useState)(""),$=(0,a.Z)(G,2),J=$[0],K=$[1],V=(0,s.useState)(""),X=(0,a.Z)(V,2),ee=X[0],te=X[1],ne=(0,s.useState)(""),ae=(0,a.Z)(ne,2),le=ae[0],se=ae[1],ie=(0,s.useCallback)((function(){return"".concat(R,":").concat(D,"@tcp(").concat(C,":").concat(I,")/").concat(w)}),[R,D,C,I,w]);(0,s.useEffect)((function(){""!==v&&t([{key:"dsn_string",value:v},{key:"table",value:A},{key:"format",value:Y},{key:"queue_dir",value:J},{key:"queue_limit",value:ee},{key:"comment",value:le}])}),[v,A,Y,J,ee,le,t]),(0,s.useEffect)((function(){var e=ie();g(e)}),[R,w,D,I,C,g,ie]);return(0,p.jsxs)(r.ZP,{container:!0,children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)(x.Z,{label:"Enter DNS String",checked:o,id:"checkedB",name:"checkedB",onChange:function(e){if(e.target.checked){var t=ie();g(t)}else{var n=function(e,t){for(var n,a=new Map,l=/(.*?):(.*?)@tcp\((.*?):(.*?)\)\/(.*?)$/gm;null!==(n=l.exec(e));)n.index===l.lastIndex&&l.lastIndex++,a.set("user",n[1]),a.set("password",n[2]),a.set("host",n[3]),a.set("port",n[4]),a.set("dbname",n[5]);return a}(v);N(n.get("host")?n.get("host")+"":""),L(n.get("port")?n.get("port")+"":""),F(n.get("dbname")?n.get("dbname")+"":""),M(n.get("user")?n.get("user")+"":""),B(n.get("password")?n.get("password")+"":"")}u(e.target.checked)},value:"dnsString"})}),o?(0,p.jsx)(s.Fragment,{children:(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(c.Z,{id:"dsn-string",name:"dsn_string",label:"DSN String",value:v,onChange:function(e){g(e.target.value)}})})}):(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsxs)(r.ZP,{item:!0,xs:12,className:n.configureString,children:[(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(c.Z,{id:"host",name:"host",label:"",placeholder:"Enter Host",value:C,onChange:function(e){N(e.target.value)}})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(c.Z,{id:"db-name",name:"db-name",label:"",placeholder:"Enter DB Name",value:w,onChange:function(e){F(e.target.value)}})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(c.Z,{id:"port",name:"port",label:"",placeholder:"Enter Port",value:I,onChange:function(e){L(e.target.value)}})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(c.Z,{id:"user",name:"user",label:"",placeholder:"Enter User",value:R,onChange:function(e){M(e.target.value)}})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(c.Z,{id:"password",name:"password",label:"",placeholder:"Enter Password",type:"password",value:D,onChange:function(e){B(e.target.value)}})})]})}),(0,p.jsx)(h.Z,{label:"Connection String",content:v}),(0,p.jsx)(r.ZP,{item:!0,xs:12,children:(0,p.jsx)("br",{})})]}),(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(c.Z,{id:"table",name:"table",label:"Table",placeholder:"Enter Table Name",value:A,tooltip:"DB table name to store/update events, table is auto-created",onChange:function(e){T(e.target.value)}})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(d.Z,{currentSelection:Y,id:"format",name:"format",label:"Format",onChange:function(e){U(e.target.value)},tooltip:"'namespace' reflects current bucket/object list and 'access' reflects a journal of object operations, defaults to 'namespace'",selectorOptions:[{label:"Namespace",value:"namespace"},{label:"Access",value:"access"}]})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(c.Z,{id:"queue-dir",name:"queue_dir",label:"Queue Dir",placeholder:"Enter Queue Dir",value:J,tooltip:"staging dir for undelivered messages e.g. '/home/events'",onChange:function(e){K(e.target.value)}})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(c.Z,{id:"queue-limit",name:"queue_limit",label:"Queue Limit",placeholder:"Enter Queue Limit",type:"number",value:ee,tooltip:"maximum limit for undelivered messages, defaults to '10000'",onChange:function(e){te(e.target.value)}})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,p.jsx)(m.Z,{id:"comment",name:"comment",label:"Comment",placeholder:"Enter custom notes if any",value:le,onChange:function(e){se(e.target.value)}})})]})}))}}]);
//# sourceMappingURL=4781.ca99434f.chunk.js.map
"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7413],{64163:function(e,n,s){var t=s(1413),a=s(72791),l=s(61889),i=s(11135),o=s(25787),r=s(23814),c=s(80184);n.Z=(0,o.Z)((function(e){return(0,i.Z)((0,t.Z)({},r.xx))}))((function(e){var n=e.classes,s=e.label,t=void 0===s?"":s,i=e.content,o=e.multiLine,r=void 0!==o&&o;return(0,c.jsx)(a.Fragment,{children:(0,c.jsxs)(l.ZP,{className:n.prefinedContainer,children:[""!==t&&(0,c.jsx)(l.ZP,{item:!0,xs:12,className:n.predefinedTitle,children:t}),(0,c.jsx)(l.ZP,{item:!0,xs:12,className:n.predefinedList,children:(0,c.jsx)(l.ZP,{item:!0,xs:12,className:r?n.innerContentMultiline:n.innerContent,children:i})})]})})}))},56028:function(e,n,s){var t=s(29439),a=s(1413),l=s(72791),i=s(60364),o=s(13400),r=s(55646),c=s(5574),u=s(65661),d=s(39157),m=s(11135),f=s(25787),x=s(23814),Z=s(42649),h=s(29823),p=s(28057),g=s(80184),j=(0,i.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:Z.MK});n.Z=(0,f.Z)((function(e){return(0,m.Z)((0,a.Z)((0,a.Z)({},x.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},x.sN))}))(j((function(e){var n=e.onClose,s=e.modalOpen,i=e.title,m=e.children,f=e.classes,x=e.wideLimit,Z=void 0===x||x,j=e.modalSnackMessage,v=e.noContentPadding,b=e.setModalSnackMessage,S=e.titleIcon,k=void 0===S?null:S,N=(0,l.useState)(!1),M=(0,t.Z)(N,2),C=M[0],E=M[1];(0,l.useEffect)((function(){b("")}),[b]),(0,l.useEffect)((function(){if(j){if(""===j.message)return void E(!1);"error"!==j.type&&E(!0)}}),[j]);var P=Z?{classes:{paper:f.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},y="";return j&&(y=j.detailedErrorMsg,(""===j.detailedErrorMsg||j.detailedErrorMsg.length<5)&&(y=j.message)),(0,g.jsxs)(c.Z,(0,a.Z)((0,a.Z)({open:s,classes:f},P),{},{scroll:"paper",onClose:function(e,s){"backdropClick"!==s&&n()},className:f.root,children:[(0,g.jsxs)(u.Z,{className:f.title,children:[(0,g.jsxs)("div",{className:f.titleText,children:[k," ",i]}),(0,g.jsx)("div",{className:f.closeContainer,children:(0,g.jsx)(o.Z,{"aria-label":"close",id:"close",className:f.closeButton,onClick:n,disableRipple:!0,size:"small",children:(0,g.jsx)(h.Z,{})})})]}),(0,g.jsx)(p.Z,{isModal:!0}),(0,g.jsx)(r.Z,{open:C,className:f.snackBarModal,onClose:function(){E(!1),b("")},message:y,ContentProps:{className:"".concat(f.snackBar," ").concat(j&&"error"===j.type?f.errorSnackBar:"")},autoHideDuration:j&&"error"===j.type?1e4:5e3}),(0,g.jsx)(d.Z,{className:v?"":f.content,children:m})]}))})))},57413:function(e,n,s){s.r(n);var t=s(29439),a=s(1413),l=s(72791),i=s(60364),o=s(11135),r=s(25787),c=s(36151),u=s(40986),d=s(61889),m=s(23814),f=s(42649),x=s(81207),Z=s(40228),h=s(56028),p=s(21435),g=s(37516),j=s(64163),v=s(92388),b=s(80184),S={setModalErrorSnackMessage:f.zb},k=(0,i.$j)(null,S);n.default=(0,r.Z)((function(e){return(0,o.Z)((0,a.Z)((0,a.Z)((0,a.Z)({buttonContainer:{textAlign:"right"},userSelector:{"& .MuiPaper-root":{padding:0,marginBottom:15}}},m.DF),m.bK),m.ID))}))(k((function(e){var n=e.open,s=e.selectedGroup,a=e.closeModalAndRefresh,i=e.classes,o=e.setModalErrorSnackMessage,r=(0,l.useState)(""),m=(0,t.Z)(r,2),f=m[0],S=m[1],k=(0,l.useState)(!1),N=(0,t.Z)(k,2),M=N[0],C=N[1],E=(0,l.useState)(!1),P=(0,t.Z)(E,2),y=P[0],B=P[1],F=(0,l.useState)([]),U=(0,t.Z)(F,2),w=U[0],T=U[1],R=(0,l.useState)(!1),A=(0,t.Z)(R,2),D=A[0],z=A[1],G=(0,l.useState)(!1),K=(0,t.Z)(G,2),I=K[0],L=K[1];(0,l.useEffect)((function(){null!==s?z(!0):(S(""),T([]))}),[s]),(0,l.useEffect)((function(){L(""!==f.trim())}),[f,w]),(0,l.useEffect)((function(){if(y){null!==s?x.Z.invoke("PUT","/api/v1/group?name=".concat(encodeURI(f)),{group:f,members:w,status:M?"enabled":"disabled"}).then((function(e){B(!1),a()})).catch((function(e){B(!1),o(e)})):x.Z.invoke("POST","/api/v1/groups",{group:f,members:w}).then((function(e){B(!1),a()})).catch((function(e){B(!1),o(e)}))}}),[y,f,w,M,s,a,o]),(0,l.useEffect)((function(){if(s&&D){x.Z.invoke("GET","/api/v1/group?name=".concat(encodeURI(s))).then((function(e){C("enabled"===e.status),S(e.name),T(e.members)})).catch((function(e){o(e),z(!1)}))}}),[D,s,o]);return(0,b.jsxs)(h.Z,{modalOpen:n,onClose:a,title:null!==s?"Edit Group":"Create Group",titleIcon:(0,b.jsx)(v.ye,{}),children:[null!==s&&(0,b.jsx)("div",{className:i.floatingEnabled,children:(0,b.jsx)(g.Z,{indicatorLabels:["Enabled","Disabled"],checked:M,value:"group_enabled",id:"group-status",name:"group-status",onChange:function(e){C(e.target.checked)},switchOnly:!0})}),(0,b.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),B(!0)},children:(0,b.jsxs)(d.ZP,{container:!0,children:[(0,b.jsxs)(d.ZP,{item:!0,xs:12,className:i.modalFormScrollable,children:[null===s?(0,b.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,b.jsx)(p.Z,{id:"group-name",name:"group-name",label:"Group Name",autoFocus:!0,value:f,onChange:function(e){S(e.target.value)}})}):(0,b.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,b.jsx)(j.Z,{label:"Group Name",content:s})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,className:i.userSelector,children:(0,b.jsx)(Z.Z,{selectedUsers:w,setSelectedUsers:T,editMode:null!==s})})]}),(0,b.jsxs)(d.ZP,{item:!0,xs:12,className:i.buttonContainer,children:[(0,b.jsx)(c.Z,{type:"button",variant:"outlined",color:"primary",className:i.spacerRight,onClick:function(){null===s&&S(""),T([])},children:"Clear"}),(0,b.jsx)(c.Z,{type:"submit",variant:"contained",color:"primary",disabled:y||!I,children:"Save"})]}),y&&(0,b.jsx)(d.ZP,{item:!0,xs:12,children:(0,b.jsx)(u.Z,{})})]})})]})})))},40228:function(e,n,s){var t=s(93433),a=s(29439),l=s(1413),i=s(72791),o=s(60364),r=s(11135),c=s(25787),u=s(40986),d=s(26181),m=s.n(d),f=s(10703),x=s(61889),Z=s(21639),h=s(23814),p=s(42649),g=s(81207),j=s(92983),v=s(59114),b=s(80184),S={setModalErrorSnackMessage:p.zb},k=(0,o.$j)(null,S);n.Z=(0,c.Z)((function(e){return(0,r.Z)((0,l.Z)((0,l.Z)({paper:{display:"flex",overflow:"auto",flexDirection:"column",boxShadow:"none",border:0},tableBlock:(0,l.Z)({},h.VX.tableBlock),searchBox:{flex:1}},h.OR),{},{actionsTitle:{fontSize:14,alignSelf:"center",minWidth:160,marginRight:10},noFound:{textAlign:"center",padding:e.spacing(3),border:"1px solid #EAEAEA",fontSize:".9rem"}},h.jY))}))(k((function(e){var n=e.classes,s=e.selectedUsers,l=e.setSelectedUsers,o=e.editMode,r=void 0!==o&&o,c=e.setModalErrorSnackMessage,d=(0,i.useState)([]),h=(0,a.Z)(d,2),p=h[0],S=h[1],k=(0,i.useState)(!1),N=(0,a.Z)(k,2),M=N[0],C=N[1],E=(0,i.useState)(""),P=(0,a.Z)(E,2),y=P[0],B=P[1],F=(0,i.useCallback)((function(){g.Z.invoke("GET","/api/v1/users").then((function(e){var n=m()(e,"users",[]);n||(n=[]),S(n.sort(Z.LQ)),C(!1)})).catch((function(e){c(e),C(!1)}))}),[c]);(0,i.useEffect)((function(){C(!0)}),[]),(0,i.useEffect)((function(){M&&F()}),[M,F]);var U=s||[],w=p.filter((function(e){return e.accessKey.includes(y)}));return(0,b.jsx)(i.Fragment,{children:(0,b.jsx)(x.ZP,{item:!0,xs:12,children:(0,b.jsxs)(f.Z,{className:n.paper,children:[M&&(0,b.jsx)(u.Z,{}),null!==p&&p.length>0?(0,b.jsxs)(i.Fragment,{children:[(0,b.jsxs)(x.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,b.jsx)("label",{className:n.actionsTitle,children:r?"Edit Members":"Assign Users"}),(0,b.jsx)("div",{className:n.searchBox,children:(0,b.jsx)(v.Z,{placeholder:"Filter Users",adornmentPosition:"end",onChange:B,value:y})})]}),(0,b.jsx)(x.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,b.jsx)(j.Z,{columns:[{label:"Access Key",elementKey:"accessKey"}],onSelect:function(e){var n=e.target,s=n.value,a=n.checked,i=(0,t.Z)(U);return a?i.push(s):i=i.filter((function(e){return e!==s})),l(i),i},selectedItems:U,isLoading:M,records:w,entityName:"Users",idField:"accessKey",customPaperHeight:n.multiSelectTable})})]}):(0,b.jsx)("div",{className:n.noFound,children:"No Users to display"})]})})})})))}}]);
//# sourceMappingURL=7413.73b72a2b.chunk.js.map
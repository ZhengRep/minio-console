"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[247],{40247:function(e,a,n){n.r(a);var t=n(29439),s=n(1413),l=n(72791),i=n(75952),o=n(61889),r=n(11135),c=n(25787),d=n(23814),u=n(21435),m=n(56028),Z=n(81207),g=n(87995),p=n(25469),f=n(80184);a.default=(0,c.Z)((function(e){return(0,r.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},d.DF),d.ID),d.bK))}))((function(e){var a=e.modalOpen,n=e.currentTags,r=e.onCloseAndUpdate,c=e.bucketName,d=e.classes,x=(0,p.TL)(),h=(0,l.useState)(""),v=(0,t.Z)(h,2),b=v[0],j=v[1],k=(0,l.useState)(""),N=(0,t.Z)(k,2),C=N[0],w=N[1],T=(0,l.useState)(!1),y=(0,t.Z)(T,2),B=y[0],S=y[1];return(0,f.jsx)(m.Z,{modalOpen:a,title:"Add New Tag ",onClose:function(){r(!1)},titleIcon:(0,f.jsx)(i.OCT,{}),children:(0,f.jsxs)(o.ZP,{container:!0,children:[(0,f.jsxs)("div",{className:d.spacerBottom,children:[(0,f.jsx)("strong",{children:"Bucket"}),": ",c]}),(0,f.jsx)(o.ZP,{item:!0,xs:12,className:d.formFieldRow,children:(0,f.jsx)(u.Z,{value:b,label:"New Tag Key",id:"newTagKey",name:"newTagKey",placeholder:"Enter New Tag Key",onChange:function(e){j(e.target.value)}})}),(0,f.jsx)(o.ZP,{item:!0,xs:12,className:d.formFieldRow,children:(0,f.jsx)(u.Z,{value:C,label:"New Tag Label",id:"newTagLabel",name:"newTagLabel",placeholder:"Enter New Tag Label",onChange:function(e){w(e.target.value)}})}),(0,f.jsxs)(o.ZP,{item:!0,xs:12,className:d.modalButtonBar,children:[(0,f.jsx)(i.zxk,{id:"clear",type:"button",variant:"regular",onClick:function(){w(""),j("")},label:"Clear"}),(0,f.jsx)(i.zxk,{id:"save-add-bucket-tag",type:"submit",variant:"callAction",color:"primary",disabled:""===C.trim()||""===b.trim()||B,onClick:function(){S(!0);var e={};e[b]=C;var a=(0,s.Z)((0,s.Z)({},n),e);Z.Z.invoke("PUT","/api/v1/buckets/".concat(c,"/tags"),{tags:a}).then((function(e){S(!1),r(!0)})).catch((function(e){x((0,g.zb)(e)),S(!1)}))},label:"Save"})]})]})})}))},56028:function(e,a,n){var t=n(29439),s=n(1413),l=n(72791),i=n(78687),o=n(13400),r=n(55646),c=n(5574),d=n(65661),u=n(39157),m=n(11135),Z=n(25787),g=n(23814),p=n(25469),f=n(29823),x=n(28057),h=n(87995),v=n(80184);a.Z=(0,Z.Z)((function(e){return(0,m.Z)((0,s.Z)((0,s.Z)({},g.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},g.sN))}))((function(e){var a=e.onClose,n=e.modalOpen,m=e.title,Z=e.children,g=e.classes,b=e.wideLimit,j=void 0===b||b,k=e.noContentPadding,N=e.titleIcon,C=void 0===N?null:N,w=(0,p.TL)(),T=(0,l.useState)(!1),y=(0,t.Z)(T,2),B=y[0],S=y[1],E=(0,i.v9)((function(e){return e.system.modalSnackBar}));(0,l.useEffect)((function(){w((0,h.MK)(""))}),[w]),(0,l.useEffect)((function(){if(E){if(""===E.message)return void S(!1);"error"!==E.type&&S(!0)}}),[E]);var K=j?{classes:{paper:g.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},L="";return E&&(L=E.detailedErrorMsg,(""===E.detailedErrorMsg||E.detailedErrorMsg.length<5)&&(L=E.message)),(0,v.jsxs)(c.Z,(0,s.Z)((0,s.Z)({open:n,classes:g},K),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&a()},className:g.root,children:[(0,v.jsxs)(d.Z,{className:g.title,children:[(0,v.jsxs)("div",{className:g.titleText,children:[C," ",m]}),(0,v.jsx)("div",{className:g.closeContainer,children:(0,v.jsx)(o.Z,{"aria-label":"close",id:"close",className:g.closeButton,onClick:a,disableRipple:!0,size:"small",children:(0,v.jsx)(f.Z,{})})})]}),(0,v.jsx)(x.Z,{isModal:!0}),(0,v.jsx)(r.Z,{open:B,className:g.snackBarModal,onClose:function(){S(!1),w((0,h.MK)(""))},message:L,ContentProps:{className:"".concat(g.snackBar," ").concat(E&&"error"===E.type?g.errorSnackBar:"")},autoHideDuration:E&&"error"===E.type?1e4:5e3}),(0,v.jsx)(u.Z,{className:k?"":g.content,children:Z})]}))}))}}]);
//# sourceMappingURL=247.37adf47a.chunk.js.map
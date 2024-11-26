"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[8715],{78715:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var i=a(65043),n=a(73216),s=a(89923),l=a(99161),r=a(64159),c=a(21383),o=a(48793),d=a(88617),p=a(56629),h=a(53518),u=a(96512),g=a(70579);const x=()=>{const e=(0,c.jL)(),t=(0,n.Zp)();let a=new URLSearchParams(document.location.search);const x=a.get("bucketName")||"",m=a.get("ruleID")||"";(0,i.useEffect)((()=>{e((0,r.ph)("bucket-replication-edit"))}),[]);const f=l.zZ.BUCKETS+`/${x}/admin/replication`,[j,b]=(0,i.useState)(!0),[k,S]=(0,i.useState)(!1),[v,y]=(0,i.useState)("1"),[C,w]=(0,i.useState)(""),[E,D]=(0,i.useState)(""),[I,$]=(0,i.useState)(!1),[R,O]=(0,i.useState)(!1),[M,B]=(0,i.useState)(""),[_,A]=(0,i.useState)(""),[T,N]=(0,i.useState)(""),[z,P]=(0,i.useState)(!1),[F,G]=(0,i.useState)(!1),[J,L]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{j&&x&&m&&p.F.buckets.getBucketReplicationRule(x,m).then((e=>{var t;y(e.data.priority?e.data.priority.toString():"");const a=e.data.prefix||"",i=e.data.tags||"";D(a),B(i),A(i),w((null===(t=e.data.destination)||void 0===t?void 0:t.bucket)||""),$(e.data.delete_marker_replication||!1),N(e.data.storageClass||""),P(!!e.data.existingObjects),G(!!e.data.deletes_replication),L("Enabled"===e.data.status),O(!!e.data.metadata_replication),b(!1)})).catch((t=>{e((0,r.C9)((0,h.S)(t.error))),b(!1)}))}),[j,e,x,m]),(0,i.useEffect)((()=>{if(k&&x&&m){const a={arn:C,ruleState:J,prefix:E,tags:_,replicateDeleteMarkers:I,replicateDeletes:F,replicateExistingObjects:z,replicateMetadata:R,priority:parseInt(v),storageClass:T};p.F.buckets.updateMultiBucketReplication(x,m,a).then((()=>{t(f)})).catch((t=>{e((0,r.C9)((0,h.S)(t.error))),S(!1)}))}}),[k,x,m,C,E,_,I,v,F,z,J,R,T,e]),(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(o.A,{label:(0,g.jsx)(s.EGL,{label:"Edit Bucket Replication",onClick:()=>t(f)}),actions:(0,g.jsx)(d.A,{})}),(0,g.jsx)(s.Mxu,{children:(0,g.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>{e.preventDefault(),S(!0)},children:(0,g.jsxs)(s.Hbc,{containerPadding:!1,withBorders:!1,helpBox:(0,g.jsx)(s.lVp,{iconComponent:(0,g.jsx)(s.WBh,{}),title:"Bucket Replication Configuration",help:(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(s.azJ,{sx:{paddingTop:"10px"},children:"For each write operation to the bucket, MinIO checks all configured replication rules for the bucket and applies the matching rule with highest configured priority."}),(0,g.jsx)(s.azJ,{sx:{paddingTop:"10px"},children:"MinIO supports enabling replication of existing objects in a bucket."}),(0,g.jsx)(s.azJ,{sx:{paddingTop:"10px"},children:"MinIO does not enable existing object replication by default. Objects created before replication was configured or while replication is disabled are not synchronized to the target deployment unless replication of existing objects is enabled."}),(0,g.jsx)(s.azJ,{sx:{paddingTop:"10px"},children:"MinIO supports replicating delete operations, where MinIO synchronizes deleting specific object versions and new delete markers. Delete operation replication uses the same replication process as all other replication operations."})," "]})}),children:[(0,g.jsx)(s.dOG,{checked:J,id:"ruleState",name:"ruleState",label:"Rule State",onChange:e=>{L(e.target.checked)}}),(0,g.jsx)(s.EmB,{label:"Destination",sx:{width:"100%"},children:C}),(0,g.jsx)(s.cl_,{id:"priority",name:"priority",onChange:e=>{e.target.validity.valid&&y(e.target.value)},label:"Priority",value:v,pattern:"[0-9]*"}),(0,g.jsx)(s.cl_,{id:"storageClass",name:"storageClass",onChange:e=>{N(e.target.value)},placeholder:"STANDARD_IA,REDUCED_REDUNDANCY etc",label:"Storage Class",value:T}),(0,g.jsxs)("fieldset",{className:"inputItem",children:[(0,g.jsx)("legend",{children:"Object Filters"}),(0,g.jsx)(s.cl_,{id:"prefix",name:"prefix",onChange:e=>{D(e.target.value)},placeholder:"prefix",label:"Prefix",value:E}),(0,g.jsx)(u.A,{name:"tags",label:"Tags",elements:M,onChange:e=>{A(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})]}),(0,g.jsxs)("fieldset",{className:"inputItem",children:[(0,g.jsx)("legend",{children:"Replication Options"}),(0,g.jsx)(s.dOG,{checked:z,id:"repExisting",name:"repExisting",label:"Existing Objects",onChange:e=>{P(e.target.checked)},description:"Replicate existing objects"}),(0,g.jsx)(s.dOG,{checked:R,id:"metadatataSync",name:"metadatataSync",label:"Metadata Sync",onChange:e=>{O(e.target.checked)},description:"Metadata Sync"}),(0,g.jsx)(s.dOG,{checked:I,id:"deleteMarker",name:"deleteMarker",label:"Delete Marker",onChange:e=>{$(e.target.checked)},description:"Replicate soft deletes"}),(0,g.jsx)(s.dOG,{checked:F,id:"repDelete",name:"repDelete",label:"Deletes",onChange:e=>{G(e.target.checked)},description:"Replicate versioned deletes"})]}),(0,g.jsxs)(s.xA9,{item:!0,xs:12,sx:{display:"flex",flexDirection:"row",justifyContent:"end",gap:10,paddingTop:10},children:[(0,g.jsx)(s.$nd,{id:"cancel-edit-replication",type:"button",variant:"regular",disabled:j||k,onClick:()=>{t(f)},label:"Cancel"}),(0,g.jsx)(s.$nd,{id:"save-replication",type:"submit",variant:"callAction",disabled:j||k,label:"Save"})]})]})})})]})}},96512:(e,t,a)=>{a.d(t,{A:()=>d});var i=a(65043),n=a(33097),s=a.n(n),l=a(93950),r=a.n(l),c=a(89923),o=a(70579);const d=e=>{let{elements:t,name:a,label:n,tooltip:l="",keyPlaceholder:d="",valuePlaceholder:p="",onChange:h,withBorder:u=!1}=e;const[g,x]=(0,i.useState)([""]),[m,f]=(0,i.useState)([""]),j=(0,i.createRef)();(0,i.useEffect)((()=>{if(1===g.length&&""===g[0]&&1===m.length&&""===m[0]&&t&&""!==t){const e=t.split("&");let a=[],i=[];e.forEach((e=>{const t=e.split("=");2===t.length&&(a.push(t[0]),i.push(t[1]))})),a.push(""),i.push(""),x(a),f(i)}}),[g,m,t]),(0,i.useEffect)((()=>{const e=j.current;e&&g.length>1&&e.scrollIntoView(!1)}),[g]);const b=(0,i.useRef)(!0);(0,i.useLayoutEffect)((()=>{b.current?b.current=!1:v()}),[g,m]);const k=e=>{e.persist();let t=[...g];const a=s()(e.target,"dataset.index","0");t[parseInt(a)]=e.target.value,x(t)},S=e=>{e.persist();let t=[...m];const a=s()(e.target,"dataset.index","0");t[parseInt(a)]=e.target.value,f(t)},v=r()((()=>{let e="";g.forEach(((t,a)=>{if(g[a]&&m[a]){let i=`${t}=${m[a]}`;0!==a&&(i=`&${i}`),e=`${e}${i}`}})),h(e)}),500),y=m.map(((e,t)=>(0,o.jsxs)(c.xA9,{item:!0,xs:12,className:"lineInputBoxes inputItem",children:[(0,o.jsx)(c.cl_,{id:`${a}-key-${t.toString()}`,label:"",name:`${a}-${t.toString()}`,value:g[t],onChange:k,index:t,placeholder:d}),(0,o.jsx)("span",{className:"queryDiv",children:":"}),(0,o.jsx)(c.cl_,{id:`${a}-value-${t.toString()}`,label:"",name:`${a}-${t.toString()}`,value:m[t],onChange:S,index:t,placeholder:p,overlayIcon:t===m.length-1?(0,o.jsx)(c.REV,{}):null,overlayAction:()=>{(()=>{if(""!==g[g.length-1].trim()&&""!==m[m.length-1].trim()){const e=[...g],t=[...m];e.push(""),t.push(""),x(e),f(t)}})()}})]},`query-pair-${a}-${t.toString()}`)));return(0,o.jsx)(i.Fragment,{children:(0,o.jsxs)(c.xA9,{item:!0,xs:12,sx:{"& .lineInputBoxes":{display:"flex"},"& .queryDiv":{alignSelf:"center",margin:"-15px 4px 0",fontWeight:600}},className:"inputItem",children:[(0,o.jsxs)(c.l1Y,{children:[n,""!==l&&(0,o.jsx)(c.azJ,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,o.jsx)(c.m_M,{tooltip:l,placement:"top",children:(0,o.jsx)(c.NTw,{style:{width:13,height:13}})})})]}),(0,o.jsxs)(c.azJ,{withBorders:u,sx:{padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},children:[y,(0,o.jsx)("div",{ref:j})]})]})})}}}]);
//# sourceMappingURL=8715.08b2d38b.chunk.js.map
"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[985],{10985:(e,s,i)=>{i.r(s),i.d(s,{default:()=>I});var t=i(65043),n=i(89923),o=i(73216),c=i(77403),a=i(99161),r=i(77938),l=i(56483),d=i(64159),u=i(20554),h=i(56629),m=i(64681),x=i(72237),p=i(6681),A=i(48793),j=i(55968),b=i(70579);const f=(0,x.A)(t.lazy((()=>i.e(4676).then(i.bind(i,4676))))),I=()=>{const e=(0,u.jL)(),s=(0,o.Zp)(),[i,x]=(0,t.useState)([]),[I,y]=(0,t.useState)(!1),[M,C]=(0,t.useState)(!1),[P,_]=(0,t.useState)(""),[v,O]=(0,t.useState)(""),S=(0,r._)(a.Ms,[a.OV.ADMIN_GET_POLICY]),E=(0,r._)(a.Ms,a.uA),g=(0,r._)(a.Ms,a.Bc),L=(0,r._)(a.Ms,a.nr),k=(0,r._)(a.Ms,a.yv);(0,t.useEffect)((()=>{w()}),[]),(0,t.useEffect)((()=>{I&&(g?h.F.policies.listPolicies().then((e=>{var s;const i=null!==(s=e.data.policies)&&void 0!==s?s:[];i.sort(((e,s)=>e.name>s.name?1:e.name<s.name?-1:0)),y(!1),x(i)})).catch((s=>{y(!1),e((0,d.C9)(s))})):y(!1))}),[I,y,x,e,g]);const w=()=>{y(!0)},B=[{type:"view",onClick:e=>{s("".concat(a.zZ.POLICIES,"/").concat((0,l.nf)(e.name)))},disableButtonFunction:()=>!S},{type:"delete",onClick:e=>{C(!0),_(e)},sendOnlyId:!0,disableButtonFunction:()=>!E}],D=i.filter((e=>{var s;return null===(s=e.name)||void 0===s?void 0:s.includes(v)}));return(0,t.useEffect)((()=>{e((0,d.ph)("list_policies"))}),[]),(0,b.jsxs)(t.Fragment,{children:[M&&(0,b.jsx)(f,{deleteOpen:M,selectedPolicy:P,closeDeleteModalAndRefresh:e=>{C(!1),e&&w()}}),(0,b.jsx)(A.A,{label:"IAM Policies",actions:(0,b.jsx)(j.A,{})}),(0,b.jsx)(n.Mxu,{children:(0,b.jsxs)(n.xA9,{container:!0,children:[(0,b.jsxs)(n.xA9,{item:!0,xs:12,sx:c._0.actionsTray,children:[(0,b.jsx)(m.A,{onChange:O,placeholder:"Search Policies",value:v,sx:{maxWidth:380}}),(0,b.jsx)(r.R,{scopes:[a.OV.ADMIN_CREATE_POLICY],resource:a.Ms,errorProps:{disabled:!0},children:(0,b.jsx)(p.A,{tooltip:L?"":(0,a.vj)(a.nr,"create a Policy"),children:(0,b.jsx)(n.$nd,{id:"create-policy",label:"Create Policy",variant:"callAction",icon:(0,b.jsx)(n.REV,{}),onClick:()=>{s("".concat(a.zZ.POLICY_ADD))},disabled:!L})})})]}),(0,b.jsx)(n.xA9,{item:!0,xs:12,children:(0,b.jsx)(r.R,{scopes:[a.OV.ADMIN_LIST_USER_POLICIES],resource:a.Ms,errorProps:{disabled:!0},children:(0,b.jsx)(p.A,{tooltip:k?"":(0,a.vj)(a.yv,"view Policy details"),children:(0,b.jsx)(n.bQt,{itemActions:B,columns:[{label:"Name",elementKey:"name"}],isLoading:I,records:D,entityName:"Policies",idField:"name"})})})}),(0,b.jsx)(n.xA9,{item:!0,xs:12,sx:{marginTop:15},children:(0,b.jsx)(n.lVp,{title:"Learn more about IAM POLICIES",iconComponent:(0,b.jsx)(n.n$X,{}),help:(0,b.jsxs)(t.Fragment,{children:["MinIO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.",(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),"MinIO PBAC is built for compatibility with AWS IAM policy syntax, structure, and behavior. The MinIO documentation makes a best-effort to cover IAM-specific behavior and functionality. Consider deferring to the IAM documentation for more complete documentation on AWS IAM-specific topics.",(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),"You can learn more at our"," ",(0,b.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/identity-access-management.html?ref=con#access-management",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})})]})})]})}}}]);
//# sourceMappingURL=985.f5122b3c.chunk.js.map
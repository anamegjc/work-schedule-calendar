(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3983:()=>{},1976:()=>{},4660:()=>{},1581:()=>{},438:(e,a,t)=>{Promise.resolve().then(t.bind(t,5895))},5895:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>h});var r=t(5155),s=t(2115);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((e,a,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===a).join(" ").trim()};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,s.forwardRef)((e,a)=>{let{color:t="currentColor",size:r=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:d="",children:u,iconNode:c,...p}=e;return(0,s.createElement)("svg",{ref:a,...n,width:r,height:r,stroke:t,strokeWidth:i?24*Number(l)/Number(r):l,className:o("lucide",d),...p},[...c.map(e=>{let[a,t]=e;return(0,s.createElement)(a,t)}),...Array.isArray(u)?u:[u]])}),d=(e,a)=>{let t=(0,s.forwardRef)((t,r)=>{let{className:n,...d}=t;return(0,s.createElement)(i,{ref:r,iconNode:a,className:o("lucide-".concat(l(e)),n),...d})});return t.displayName="".concat(e),t},u=d("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),c=d("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);var p=t(1416);let m=()=>{let[e,a]=(0,s.useState)({employeeName:"",position:"",manager:"",month:"January",year:"2025",shifts:Array(31).fill().map(()=>({startTime:"",endTime:"",hours:"0"})),totalHours:"0",timeOff:"",notes:"",approvedBy:"",approvalDate:"",approvalStatus:"pending"});(0,s.useEffect)(()=>{let e=localStorage.getItem("scheduleData");if(e)try{let t=JSON.parse(e),r=Array(31).fill().map((e,a)=>{var r,s,l,o,n,i;return{startTime:(null===(s=t.shifts)||void 0===s?void 0:null===(r=s[a])||void 0===r?void 0:r.startTime)||"",endTime:(null===(o=t.shifts)||void 0===o?void 0:null===(l=o[a])||void 0===l?void 0:l.endTime)||"",hours:(null===(i=t.shifts)||void 0===i?void 0:null===(n=i[a])||void 0===n?void 0:n.hours)||"0"}});a({...t,shifts:r,totalHours:t.totalHours||"0",approvalStatus:t.approvalStatus||"pending",approvalDate:t.approvalDate||""})}catch(e){console.error("Error parsing saved data:",e)}},[]);let t=(t,r,s)=>{if(!r||!s){o(t,"hours","0");return}let[l,n]=r.split(":").map(Number),[i,d]=s.split(":").map(Number),u=7*Math.floor(t/7),c=u+4;if(l<8||l>17||i<8||i>17){alert("Work hours are between 8 AM and 5 PM");return}let p=60*l+n,m=60*i+d;if(m<=p){alert("End time must be after start time");return}let h=m-p;h<0&&(h+=1440);let v=(h/60).toFixed(2),x=[...e.shifts];if(x[t]={...x[t],startTime:r,endTime:s,hours:v},x.slice(u,c+1).reduce((e,a)=>e+parseFloat(a.hours||"0"),0)>20){alert("Total weekly hours cannot exceed 20 hours");return}let g=x.reduce((e,a)=>e+parseFloat(a.hours||"0"),0);if(g>80){alert("Total hours cannot exceed 80 hours");return}let b={...e,shifts:x,totalHours:g.toFixed(2)};a(b),localStorage.setItem("scheduleData",JSON.stringify(b))},l=t=>{let r=[...e.shifts];r[t]={startTime:"",endTime:"",hours:"0"};let s=r.reduce((e,a)=>e+parseFloat(a.hours||"0"),0),l={...e,shifts:r,totalHours:s.toFixed(2)};a(l),localStorage.setItem("scheduleData",JSON.stringify(l))},o=(t,r,s)=>{if("approved"===e.approvalStatus){alert("Schedule is already approved and cannot be modified");return}let l=[...e.shifts];l[t]={...l[t],[r]:s};let o={...e,shifts:l};a(o),localStorage.setItem("scheduleData",JSON.stringify(o))},n=(t,r)=>{if("approved"===e.approvalStatus){alert("Schedule is already approved and cannot be modified");return}let s={...e,[t]:r};a(s),localStorage.setItem("scheduleData",JSON.stringify(s))},i=["January","February","March","April","May","June","July","August","September","October","November","December"],{days:d,blanks:m}=(()=>{let a=new Date("".concat(e.month," 1, ").concat(e.year)),t=new Date(a.getFullYear(),a.getMonth()+1,0).getDate(),r=a.getDay();return{days:Array.from({length:t},(e,a)=>a+1),blanks:Array(r).fill(null)}})();return(0,r.jsx)("div",{className:"max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen",children:(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow p-6 mb-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-2xl font-bold",children:"Monthly Work Schedule"}),(0,r.jsxs)("div",{className:"flex gap-2 mt-2",children:[(0,r.jsx)("select",{className:"p-1 border rounded",value:e.month,onChange:e=>n("month",e.target.value),children:i.map(e=>(0,r.jsx)("option",{value:e,children:e},e))}),(0,r.jsx)("input",{type:"number",className:"p-1 border rounded w-20",value:e.year,onChange:e=>n("year",e.target.value),min:"2000",max:"2100"})]})]}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)("button",{onClick:()=>{let a=[["Employee Name",e.employeeName],["Position",e.position],["Month","".concat(e.month," ").concat(e.year)],["Total Hours",parseFloat(e.totalHours||0)],["Approval Status",e.approvalStatus],["Approved Date",e.approvalDate||"Not Approved"],["Notes",e.notes],[]],t=[["Day","Date","Day of Week","Start Time","End Time","Hours"]],r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];e.shifts.forEach((a,s)=>{let l=new Date(e.year,i.indexOf(e.month),s+1);a.startTime&&a.endTime&&t.push([s+1,l.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),r[l.getDay()],a.startTime,a.endTime,parseFloat(a.hours||0)])});let s=p.utils.aoa_to_sheet([...a,...t]),l=p.utils.book_new();p.utils.book_append_sheet(l,s,"Work Schedule"),p.writeFile(l,"work_schedule_".concat(e.month,"_").concat(e.year,".xlsx"))},className:"flex items-center gap-1 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:[(0,r.jsx)(u,{size:16})," Export"]}),(0,r.jsxs)("button",{onClick:()=>{window.print()},className:"flex items-center gap-1 px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:[(0,r.jsx)(c,{size:16})," Print"]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600 mb-1",children:"Employee Name"}),(0,r.jsx)("input",{className:"w-full p-2 border rounded",value:e.employeeName,onChange:e=>n("employeeName",e.target.value),disabled:"approved"===e.approvalStatus})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600 mb-1",children:"Position"}),(0,r.jsx)("input",{className:"w-full p-2 border rounded",value:e.position,onChange:e=>n("position",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600 mb-1",children:"Manager"}),(0,r.jsx)("input",{className:"w-full p-2 border rounded",value:e.manager,onChange:e=>n("manager",e.target.value)})]})]}),(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:[(0,r.jsx)("div",{className:"grid grid-cols-7 bg-blue-600 text-white font-semibold",children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(e=>(0,r.jsx)("div",{className:"p-2 text-center",children:e},e))}),(0,r.jsx)("div",{className:"grid grid-cols-7",children:[...m,...d].map((a,s)=>{var n,i,d;let u=s%7==0||(s+1)%7==0;return(0,r.jsx)("div",{className:"border p-2 min-h-[120px] ${isWeekend ? 'bg-gray-200 text-gray-400' : ''}",children:a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"font-bold mb-2",children:a}),!u&&(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600",children:"Start Time"}),(0,r.jsx)("input",{type:"time",className:"w-full p-1 border rounded text-sm",value:(null===(n=e.shifts[a-1])||void 0===n?void 0:n.startTime)||"",onChange:e=>{o(a-1,"startTime",e.target.value)}})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600",children:"End Time"}),(0,r.jsx)("input",{type:"time",className:"w-full p-1 border rounded text-sm",value:(null===(i=e.shifts[a-1])||void 0===i?void 0:i.endTime)||"",onChange:e=>{o(a-1,"endTime",e.target.value)}})]}),(0,r.jsxs)("div",{className:"flex space-x-2",children:[(0,r.jsx)("button",{className:"w-1/2 p-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",onClick:()=>{var r,s;let l=null===(r=e.shifts[a-1])||void 0===r?void 0:r.startTime,o=null===(s=e.shifts[a-1])||void 0===s?void 0:s.endTime;t(a-1,l,o)},children:"Done"}),(0,r.jsx)("button",{className:"w-1/2 p-1 bg-red-500 text-white rounded text-sm hover:bg-red-600",onClick:()=>l(a-1),children:"Reset"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600",children:"Hours"}),(0,r.jsx)("input",{type:"text",className:"w-full p-1 border rounded text-sm bg-gray-100",value:(null===(d=e.shifts[a-1])||void 0===d?void 0:d.hours)||"0",readOnly:!0})]})]})]})},s)})})]}),(0,r.jsxs)("div",{className:"mt-6 bg-gray-50 rounded-lg p-4",children:[(0,r.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Monthly Summary"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600 mb-1",children:"Total Hours"}),(0,r.jsx)("input",{className:"w-full p-2 border rounded",value:e.totalHours,onChange:e=>n("totalHours",e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600 mb-1",children:"Time Off Days"}),(0,r.jsx)("input",{className:"w-full p-2 border rounded",value:e.timeOff,onChange:e=>n("timeOff",e.target.value)})]})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600 mb-1",children:"Notes"}),(0,r.jsx)("input",{className:"w-full p-2 border rounded",value:e.notes,onChange:e=>n("notes",e.target.value)})]}),(0,r.jsx)("div",{className:"mt-4 pt-4 border-t",children:(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600 mb-1",children:"Approved By"}),(0,r.jsx)("input",{className:"w-full p-2 border rounded",value:e.approvedBy,onChange:e=>n("approvedBy",e.target.value),disabled:"approved"===e.approvalStatus})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600 mb-1",children:"Approval Status"}),"pending"===e.approvalStatus&&(0,r.jsx)("button",{onClick:()=>{if("managerjpac"!==prompt("Enter manager password to approve:")){alert("Incorrect manager authorization");return}if(parseFloat(e.totalHours)>20){alert("Cannot approve schedule exceeding 20 weekly hours");return}let t={...e,approvalStatus:"approved",approvalDate:new Date().toISOString().split("T")[0]};a(t),localStorage.setItem("scheduleData",JSON.stringify(t))},className:"w-full p-2 bg-green-500 text-white rounded hover:bg-green-600",children:"Approve Schedule"}),"approved"===e.approvalStatus&&(0,r.jsxs)("div",{className:"flex space-x-2",children:[(0,r.jsxs)("div",{className:"w-full p-2 bg-green-100 text-green-800 rounded",children:["Approved on ",e.approvalDate]}),(0,r.jsx)("button",{onClick:()=>{if("managerjpac"!==prompt("Enter manager password to reset approval:")){alert("Incorrect manager authorization");return}let t={...e,approvalStatus:"pending",approvalDate:"",approvedBy:""};a(t),localStorage.setItem("scheduleData",JSON.stringify(t))},className:"w-1/3 p-2 bg-red-500 text-white rounded hover:bg-red-600",children:"Reset"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600 mb-1",children:"Date"}),(0,r.jsx)("input",{type:"date",className:"w-full p-2 border rounded",value:e.approvalDate,onChange:e=>n("approvalDate",e.target.value),disabled:"approved"===e.approvalStatus})]})]})})]})]})})};function h(){return(0,r.jsx)("main",{children:(0,r.jsx)(m,{})})}}},e=>{var a=a=>e(e.s=a);e.O(0,[693,394,441,517,358],()=>a(438)),_N_E=e.O()}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41ad6d42","chunk-3fe07ca4"],{"186c":function(t,e,a){"use strict";a.d(e,"e",(function(){return o})),a.d(e,"f",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return c}));var n=a("b775");function o(t){return Object(n["a"])({url:"/topic/approvalList",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/topic/approval",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/topic/approvalBatch",method:"get",params:t})}function s(){return Object(n["a"])({url:"/topic/approvalInfo",method:"get"})}function l(){return Object(n["a"])({url:"/project/allProject",method:"get"})}function c(t){return Object(n["a"])({url:"/opLog/list",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},o=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,a){var n=s(),o=t-n,l=20,c=0;e="undefined"===typeof e?500:e;var p=function t(){c+=l;var s=Math.easeInOutQuad(c,n,o,e);r(s),c<e?i(t):a&&"function"===typeof a&&a()};p()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:5},pageSizes:{type:Array,default:function(){return[5,10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},p=c,u=(a("b0e7"),a("2877")),f=Object(u["a"])(p,n,o,!1,null,"27ec6736",null);e["a"]=f.exports},"33b3":function(t,e,a){},"5dbc":function(t,e,a){var n=a("d3f4"),o=a("8b97").set;t.exports=function(t,e,a){var i,r=e.constructor;return r!==a&&"function"==typeof r&&(i=r.prototype)!==a.prototype&&n(i)&&o&&o(t,i),t}},"70a4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t._m(0),t._v(" "),a("Hr"),t._v(" "),a("div",{staticClass:"topic-condition"},[a("el-form",{ref:"approvalForm",staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"100px","label-position":"right",model:t.approval}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"Topic名称：",prop:"topicName"}},[a("el-input",{attrs:{placeholder:"请输入Topic名称"},model:{value:t.approval.topicName,callback:function(e){t.$set(t.approval,"topicName",e)},expression:"approval.topicName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"创建者：",prop:"createUser"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.approval.createUser,callback:function(e){t.$set(t.approval,"createUser",e)},expression:"approval.createUser"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"状态：",prop:"topicStatus"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.approval.topicStatus,callback:function(e){t.$set(t.approval,"topicStatus",e)},expression:"approval.topicStatus"}},t._l(t.statusOptions,(function(t,e){return a("el-option",{key:t+e,attrs:{label:t,value:e+1}})})),1)],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"所属项目：",prop:"projectName"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.approval.projectName,callback:function(e){t.$set(t.approval,"projectName",e)},expression:"approval.projectName"}},t._l(t.projectOptions,(function(t,e){return a("el-option",{key:t+e,attrs:{label:t.projectName,value:t.projectName}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"menu-group"},[a("el-button",{attrs:{type:"primary"},on:{click:t.getApprovalList}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"info"},on:{click:function(e){return t.resetForm("approvalForm")}}},[t._v("重置")])],1)],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"table-before"},[a("div",{staticClass:"status-box"},[a("p",{staticStyle:{color:"#FFBB00"}},[t._v("未审批"),a("span",[t._v(t._s(t.approvalInfo.wait))])]),t._v(" "),a("p",[t._v("通过"),a("span",[t._v(t._s(t.approvalInfo.agree))])]),t._v(" "),a("p",[t._v("未通过"),a("span",[t._v(t._s(t.approvalInfo.unAgree))])]),t._v(" "),a("p",{staticClass:"total"},[t._v("总计 "),a("span",[t._v(t._s(t.approvalInfo.total))])])]),t._v(" "),a("div",{staticClass:"operation-box"},[t._m(1),t._v(" "),a("el-button",{attrs:{type:t.iconType},on:{click:function(e){return t.openBatch(2)}}},[t._v("\n        通过\n      ")]),t._v(" "),a("el-button",{attrs:{type:t.iconType},on:{click:function(e){return t.openBatch(3)}}},[t._v("\n        不通过\n      ")])],1)]),t._v(" "),a("div",{staticClass:"approval-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:"","highlight-current-row":"","header-cell-style":{background:"#f7f7f7"}},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"topicName",label:"Topic名称",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectName",label:"所属项目",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createUser",label:"创建者",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"topicStatus",label:"状态",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",{style:"color:"+t.statusStyle[n.topicStatus-1]+";font-size: 12px;"},[t._v("● "+t._s(t.statusOptions[n.topicStatus-1]))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"aclOpUser",label:"审批者",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"最近更新",align:"center",width:"160",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150","class-name":"operation"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("div",[a("span",{staticClass:"view",on:{click:function(e){return t.handleView(n)}}},[t._v("查看")]),t._v(" "),a("div",{staticClass:"option-type",class:1===n.topicStatus?"":"disable"},[1===n.topicStatus?a("span",{on:{click:function(e){return t.open(n,2)}}},[t._v("通过")]):a("span",[t._v("通过")])]),t._v(" "),a("div",{staticClass:"option-type",class:1===n.topicStatus?"":"disable"},[1===n.topicStatus?a("span",{on:{click:function(e){return t.open(n,3)}}},[t._v("不通过")]):a("span",[t._v("不通过")])])])]}}])})],1)],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.approvalInfo.total>0,expression:"approvalInfo.total>0"}],attrs:{total:t.total,page:t.approval.page,limit:t.approval.limit},on:{"update:page":function(e){return t.$set(t.approval,"page",e)},"update:limit":function(e){return t.$set(t.approval,"limit",e)},pagination:t.getApprovalList}}),t._v(" "),a("view-approval",{ref:"viewForm",attrs:{"view-page-visible":t.viewPageVisible,title:t.title,"current-row":t.currentRow},on:{close:t.handleClose}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title"},[a("span",[t._v("审批管理")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"operation-detail"},[a("b",[t._v("批量操作:")])])}],i=(a("ac6a"),a("186c")),r=a("333d"),s=a("d27c"),l={name:"ApprovalManage",components:{Pagination:r["a"],ViewApproval:s["default"]},data:function(){return{list:null,total:0,approvalInfo:{agree:0,unAgree:0,wait:0,total:0},approval:{createUser:"",limit:5,page:1,projectCode:"",topicName:"",topicStatus:null},ids:"",statusOptions:["待审批","已通过","未通过"],statusStyle:["#FFBB00","#32CD32","#1E90FF"],projectOptions:[],title:"",currentRow:null,listLoading:!1,viewPageVisible:!1,iconType:"info"}},watch:{ids:function(t,e){this.iconType=""!==t?"primary":"info"}},created:function(){this.getApprovalList(),this.getProjectList()},methods:{updateList:function(t,e,a){var n=this,o={id:t,topicStatus:e,grantOpinion:a};Object(i["f"])(o).then((function(t){0===t.code?(n.getApprovalList(),n.$message({type:"success",message:t.msg})):n.$message({type:"error",message:t.msg})}))},approvalBatch:function(t,e,a){var n=this,o={ids:t,topicStatus:e,grantOpinion:a};Object(i["a"])(o).then((function(t){0===t.code?(n.$message({type:"success",message:t.msg}),n.getApprovalList()):n.$message({type:"error",message:t.msg})}))},getApprovalList:function(){var t=this;this.listLoading=!0,Object(i["e"])(this.approval).then((function(e){0===e.code?(t.getApprovalNum(),t.list=e.datas.pageData,t.listLoading=!1,t.total=e.datas.count):t.$message({type:"error",message:e.msg})}))},getApprovalNum:function(){var t=this;Object(i["b"])().then((function(e){0===e.code?t.approvalInfo=e.datas:t.$message({type:"error",message:e.msg})}))},getProjectList:function(){var t=this;Object(i["d"])().then((function(e){0===e.code?t.projectOptions=e.datas:t.$message({type:"error",message:e.msg})}))},handleView:function(t){var e=this;this.viewPageVisible=!this.viewPageVisible,this.title="查看审批",this.$nextTick((function(){e.currentRow=t,e.$refs.viewForm.getRowData(t)}))},handleClose:function(t){this.viewPageVisible=!1,t&&t.isSubmit&&this.getApprovalList()},open:function(t,e){var a=this,n=this.$createElement,o=t.id,i=e,r=2===e?"通过":"不通过";this.$prompt(n("div",[n("p",["审批备注：(建议不通过时填写原因)"]),n("textarea",{attrs:{cols:"30",rows:"10"},style:"resize:none;width:100%;height:100px",ref:"reason"},[r])]),"请确认审批操作",{confirmButtonText:"确定",cancelButtonText:"取消",showInput:!1}).then((function(t){t.value;var e=a.$refs.reason.value;a.updateList(o,i,e)})).catch((function(){a.$message({type:"info",message:"取消输入"})}))},resetForm:function(t){this.$refs[t].resetFields()},handleSelectionChange:function(t){var e="";t.forEach((function(t){1===t.topicStatus&&(e+="".concat(t.id,","))})),this.ids=e.substring(0,e.length-1)},openBatch:function(t){var e=this,a=this.$createElement,n=t,o=2===t?"通过":"不通过";"info"!==this.iconType?this.$prompt(a("div",[a("p",["审批备注：(建议不通过时填写原因)"]),a("textarea",{attrs:{cols:"30",rows:"10"},style:"resize:none;width:100%;height:100px",ref:"reason1"},[o])]),"请确认批量审批操作",{confirmButtonText:"确定",cancelButtonText:"取消",showInput:!1}).then((function(t){t.value;var a=e.$refs.reason1.value;e.approvalBatch(e.ids,n,a)})).catch((function(t){console.log(t),e.$message({type:"info",message:"取消输入"})})):this.$message({type:"warning",message:"无可审批事项"})}}},c=l,p=(a("9478"),a("2877")),u=Object(p["a"])(c,n,o,!1,null,null,null);e["default"]=u.exports},7334:function(t,e,a){},"8b97":function(t,e,a){var n=a("d3f4"),o=a("cb7c"),i=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:i}},"92b4":function(t,e,a){"use strict";var n=a("e2bb"),o=a.n(n);o.a},9478:function(t,e,a){"use strict";var n=a("33b3"),o=a.n(n);o.a},aa77:function(t,e,a){var n=a("5ca1"),o=a("be13"),i=a("79e5"),r=a("fdef"),s="["+r+"]",l="​",c=RegExp("^"+s+s+"*"),p=RegExp(s+s+"*$"),u=function(t,e,a){var o={},s=i((function(){return!!r[t]()||l[t]()!=l})),c=o[t]=s?e(f):r[t];a&&(o[a]=c),n(n.P+n.F*s,"String",o)},f=u.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(p,"")),t};t.exports=u},b0e7:function(t,e,a){"use strict";var n=a("7334"),o=a.n(n);o.a},c5f6:function(t,e,a){"use strict";var n=a("7726"),o=a("69a8"),i=a("2d95"),r=a("5dbc"),s=a("6a99"),l=a("79e5"),c=a("9093").f,p=a("11e9").f,u=a("86cc").f,f=a("aa77").trim,v="Number",d=n[v],g=d,m=d.prototype,h=i(a("2aeb")(m))==v,b="trim"in String.prototype,_=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var a,n,o,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var r,l=e.slice(2),c=0,p=l.length;c<p;c++)if(r=l.charCodeAt(c),r<48||r>o)return NaN;return parseInt(l,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof d&&(h?l((function(){m.valueOf.call(a)})):i(a)!=v)?r(new g(_(e)),a,d):_(e)};for(var w,y=a("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;y.length>N;N++)o(g,w=y[N])&&!o(d,w)&&u(d,w,p(g,w));d.prototype=m,m.constructor=d,a("2aba")(n,v,d)}},d27c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container view-user"},[a("el-dialog",{attrs:{title:t.title,visible:t.viewPageVisible,"before-close":t.close,width:"75%","destroy-on-close":"true"},on:{"update:visible":function(e){t.viewPageVisible=e}}},[a("el-row",{staticClass:"topic-setting"},t._l(t.topicCreateInfo,(function(e,n){return a("el-col",{key:n,attrs:{span:8}},[a("b",[t._v(t._s(e.label))]),t._v(" "),a("span",{class:"待审批"===e.value?"needApproval":""},[t._v(t._s(e.value))])])})),1),t._v(" "),a("h2",[t._v("操作日志")]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.tableData,fit:"","highlight-current-row":"","header-cell-style":{background:"#f7f7f7"},border:""}},[a("el-table-column",{attrs:{prop:"opTime",label:"操作时间",width:"160",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"opUser",label:"操作用户",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"opUserDept",label:"所属部门",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"opType",label:"操作类型",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"opDesc",label:"操作说明",align:"center","show-overflow-tooltip":!0}})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.param.page,limit:t.param.limit},on:{"update:page":function(e){return t.$set(t.param,"page",e)},"update:limit":function(e){return t.$set(t.param,"limit",e)},pagination:t.getOP}}),t._v(" "),a("div",{staticClass:"btn_group"},[a("el-button",{on:{click:t.close}},[t._v("关闭")])],1)],1)],1)},o=[],i=a("186c"),r=a("333d"),s={name:"ViewTopic",components:{Pagination:r["a"]},props:{title:{type:String,default:""},viewPageVisible:{type:Boolean,default:!1},currentRow:{type:Object,default:function(){}}},data:function(){return{tableData:[],statusOptions:["待审批","已通过","未通过"],topicCreateInfo:[],listLoading:!1,total:0,param:{page:1,limit:5,opEntry:"",opEntryName:""}}},methods:{getRowData:function(t){var e=t.topicName,a=t.projectName,n=t.partitionNum,o=t.createUser,i=t.createTime,r=t.updateTime,s=t.topicStatus,l=t.topicDesc;this.param.opEntryName=e,this.topicCreateInfo=[{value:e,label:"Topic名称："},{value:a,label:"所属项目："},{value:n,label:"Partition数量："},{value:this.statusOptions[s-1],label:"状态："},{value:o,label:"创建人："},{value:i,label:"创建时间："},{value:r,label:"最近更新："},{value:l,label:"备注："}],this.getOP()},getOP:function(){var t=this;this.listLoading=!0,Object(i["c"])(this.param).then((function(e){e.datas.count>0&&(t.tableData=e.datas.pageData,t.total=e.datas.count),t.listLoading=!1}))},close:function(){this.$emit("close")}}},l=s,c=(a("92b4"),a("2877")),p=Object(c["a"])(l,n,o,!1,null,null,null);e["default"]=p.exports},e2bb:function(t,e,a){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
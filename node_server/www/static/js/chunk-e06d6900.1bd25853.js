(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e06d6900"],{"31b3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{attrs:{inline:!0,model:e.listQuery,"label-position":"left"}},[n("el-form-item",{attrs:{label:"账号:",prop:"username"}},[n("el-input",{attrs:{placeholder:"请输入关键字"},model:{value:e.listQuery.username,callback:function(t){e.$set(e.listQuery,"username",t)},expression:"listQuery.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"用户名:",prop:"nickname"}},[n("el-input",{attrs:{placeholder:"请输入关键字"},model:{value:e.listQuery.nickname,callback:function(t){e.$set(e.listQuery,"nickname",t)},expression:"listQuery.nickname"}})],1),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n          搜索\n        ")]),e._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n          添加\n        ")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":"","header-cell-style":{background:"#f7f7f7"}}},[n("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{label:"用户编号",width:"110",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"账号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.username))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"用户名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.nickname))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"手机号",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.mobile))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"性别",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(0==t.row.sex?"男":"女"))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"创建时间",width:"160",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("parseTime")(t.row.createTime,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"状态",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-switch",{staticClass:"switchStyle",attrs:{"active-text":"正常","inactive-text":"锁定"},on:{change:function(t){return e.statusChange(r,r.id,r.enabled)}},model:{value:r.enabled,callback:function(t){e.$set(r,"enabled",t)},expression:"row.enabled"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"250","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(r.id)}}},[e._v("\n          修改\n        ")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.resetPassword(r.username)}}},[e._v("\n          重置密码\n        ")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.openMessageBox(r.id)}}},[e._v("\n          删除\n        ")])]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"35%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.userInfo,"label-position":"left","label-width":"70px"}},[n("el-form-item",{attrs:{label:"账号",prop:"username"}},[n("el-input",{attrs:{disabled:e.isDisabled,placeholder:"请输入账号"},model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"用户名",prop:"nickname"}},[n("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.userInfo.nickname,callback:function(t){e.$set(e.userInfo,"nickname",t)},expression:"userInfo.nickname"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[n("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.userInfo.mobile,callback:function(t){e.$set(e.userInfo,"mobile",e._n(t))},expression:"userInfo.mobile"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"性别",prop:"sex"}},[n("el-radio",{attrs:{label:"0"},model:{value:e.userInfo.sex,callback:function(t){e.$set(e.userInfo,"sex",t)},expression:"userInfo.sex"}},[e._v("男")]),e._v(" "),n("el-radio",{attrs:{label:"1"},model:{value:e.userInfo.sex,callback:function(t){e.$set(e.userInfo,"sex",t)},expression:"userInfo.sex"}},[e._v("女")])],1),e._v(" "),n("el-form-item",{attrs:{label:"部门",prop:"deptId"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.userInfo.deptId,callback:function(t){e.$set(e.userInfo,"deptId",t)},expression:"userInfo.deptId"}},e._l(e.deptList,(function(e,t){return n("el-option",{key:e+t,attrs:{label:e.deptName,value:e.id}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"项目",prop:"projectId"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.userInfo.projectId,callback:function(t){e.$set(e.userInfo,"projectId",t)},expression:"userInfo.projectId"}},e._l(e.projectList,(function(e,t){return n("el-option",{key:e+t,attrs:{label:e.projectCode,value:e.id}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"角色"}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择"},on:{change:e.rolesChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}},e._l(e.roleOptions,(function(e){return n("el-option",{key:e.id,attrs:{label:e.roleCode,value:e.id}})})),1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("\n        保存\n      ")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"重置密码",visible:e.passFormVisible,width:"30%"},on:{"update:visible":function(t){e.passFormVisible=t}}},[n("el-form",{ref:"passForm",staticClass:"demo-ruleForm",attrs:{model:e.passwordForm,"status-icon":"",rules:e.passRules,"label-position":"left","label-width":"80px"}},[n("el-form-item",{attrs:{label:"新密码:",prop:"pass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.passwordForm.pass,callback:function(t){e.$set(e.passwordForm,"pass",t)},expression:"passwordForm.pass"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"确认密码:",prop:"checkPass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.passwordForm.checkPass,callback:function(t){e.$set(e.passwordForm,"checkPass",t)},expression:"passwordForm.checkPass"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("passForm")}}},[e._v("提交")]),e._v(" "),n("el-button",{on:{click:function(t){return e.resetForm("passForm")}}},[e._v("重置")])],1)],1)],1)],1)},s=[],a=(n("6b54"),n("28a5"),n("c5f6"),n("7cdf"),n("b775"));function i(e){return Object(a["a"])({url:"/user/list",method:"post",data:JSON.stringify(e),headers:{"Content-Type":"application/json;charset=UTF-8"}})}function o(e){return Object(a["a"])({url:"/role/list",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/user/selectById",method:"get",params:e})}function u(e){return Object(a["a"])({url:"/user/updateEnabled",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/user/saveOrUpdate",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/user/resetPasswd",method:"put",params:e})}function p(e){return Object(a["a"])({url:"/user/delete",method:"delete",params:e})}var f=n("3f12"),m=n("805f"),h=n("ed08"),g=n("333d"),b={name:"UserManage",components:{Pagination:g["a"]},filters:{parseTime:h["b"]},data:function(){var e=this,t=function(e,t,n){var r=/^1[3|4|5|6|7|8][0-9]{9}$/;setTimeout((function(){Number.isInteger(+t)?r.test(t)?n():n(new Error("请输入正确的手机号")):n(new Error("请输入数字值"))}),100)},n=function(t,n,r){""===n?r(new Error("请输入密码")):(""!==e.passwordForm.checkPass&&e.$refs.passForm.validateField("checkPass"),r())},r=function(t,n,r){""===n?r(new Error("请再次输入密码")):n!==e.passwordForm.pass?r(new Error("两次输入密码不一致!")):r()};return{total:0,list:null,listQuery:{page:1,limit:5,nickname:"",username:""},roleListQuery:{limit:-1,page:1,roleCode:"",roleName:""},userInfo:{deptId:null,projectId:null,id:null,mobile:"",nickname:"",roleIds:"",sex:"0",username:""},passwordForm:{pass:"",checkPass:""},roleOptions:[],selectedOptions:[],deptList:[],projectList:[],dialogFormVisible:!1,passFormVisible:!1,dialogStatus:"",rules:{mobile:[{validator:t,trigger:"blur"}],username:[{required:!0,message:"用户名是必填的",trigger:"blur"}],deptId:[{required:!0,message:"部门是必填的",trigger:"change"}],projectId:[{required:!0,message:"项目是必填的",trigger:"change"}]},passRules:{pass:[{validator:n,trigger:"blur"}],checkPass:[{validator:r,trigger:"blur"}]},textMap:{update:"修改用户",create:"添加用户"},currentUser:"",listLoading:!0,isDisabled:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,i(this.listQuery).then((function(t){e.list=t.datas.pageData,e.total=t.datas.count,e.listLoading=!1}))},getOptionsList:function(){var e=this;Object(m["b"])().then((function(t){e.deptList=t.datas})),Object(f["b"])().then((function(t){e.projectList=t.datas}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleCreate:function(){var e=this;this.selectedOptions=[],this.dialogStatus="create",this.dialogFormVisible=!0,this.isDisabled=!1,o(this.roleListQuery).then((function(t){e.roleOptions=t.datas.pageData})),this.$nextTick((function(){e.getOptionsList(),e.$refs["dataForm"].resetFields()}))},handleEdit:function(e){var t=this;this.dialogStatus="update",this.dialogFormVisible=!0,this.isDisabled=!0;var n={id:e};this.$nextTick((function(){t.getOptionsList(),t.$refs["dataForm"].resetFields(),l(n).then((function(e){var n=e.datas,r=n.deptId,s=n.projectId,a=n.id,i=n.mobile,o=n.nickname,l=n.roleIds,u=n.roles,c=n.sex,d=n.username;if(l){var p=l.split(","),f=[];for(var m in p)f.push(parseInt(p[m]));t.selectedOptions=f}else t.selectedOptions=[];t.roleOptions=u,t.userInfo={deptId:r,projectId:s,id:a,mobile:i,nickname:o,roleIds:t.selectedOptions.join(),sex:c.toString(),username:d}}))}))},statusChange:function(e,t,n){var r=this,s={id:t,enabled:n};u(s).then((function(t){r.$message({showClose:!0,message:t.msg,type:0===t.code?"success":"warning"}),0!==t.code&&r.$set(e,"enabled",!n)}))},rolesChange:function(){this.userInfo.roleIds=this.selectedOptions.join()},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&c(e.userInfo).then((function(t){0===t.code?(e.dialogFormVisible=!1,e.$notify({title:"Success",message:"create"===e.dialogStatus?"用户添加成功":"信息修改成功",type:"success",duration:2e3}),e.getList()):e.$message({showClose:!0,message:t.msg,type:"error"})}))}))},resetPassword:function(e){var t=this;this.currentUser=e,this.passFormVisible=!0,this.$nextTick((function(){t.$refs["passForm"].resetFields()}))},submitForm:function(e){var t=this,n={newPassword:this.passwordForm.pass,username:this.currentUser};this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;d(n).then((function(e){0===e.code?(t.passFormVisible=!1,t.$notify({title:"Success",message:"密码重置成功",type:"success",duration:2e3})):t.$message({showClose:!0,message:e.msg,type:"error"})}))}))},resetForm:function(e){this.$refs[e].resetFields()},openMessageBox:function(e){var t=this,n={id:e};this.$confirm("此操作将删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){p(n).then((function(e){0===e.code?(t.$message({showClose:!0,type:"success",message:e.msg}),t.getList()):t.$message({showClose:!0,type:"error",message:e.msg})}))})).catch((function(){t.$message({showClose:!0,type:"info",message:"已取消删除"})}))}}},v=b,y=(n("ee82"),n("2877")),_=Object(y["a"])(v,r,s,!1,null,null,null);t["default"]=_.exports},"333d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},s=[];n("c5f6");Math.easeInOutQuad=function(e,t,n,r){return e/=r/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function i(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var r=o(),s=e-r,l=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=l;var o=Math.easeInOutQuad(u,r,s,t);i(o),u<t?a(e):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:5},pageSizes:{type:Array,default:function(){return[5,10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(n("b0e7"),n("2877")),p=Object(d["a"])(c,r,s,!1,null,"27ec6736",null);t["a"]=p.exports},"3f12":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n("b775");function s(e){return Object(r["a"])({url:"/project/list",method:"post",data:JSON.stringify(e),headers:{"Content-Type":"application/json;charset=UTF-8"}})}function a(e){return Object(r["a"])({url:"/project/saveOrUpdate",method:"post",data:JSON.stringify(e),headers:{"Content-Type":"application/json;charset=UTF-8"}})}function i(){return Object(r["a"])({url:"/project/allProject",method:"get"})}function o(e){return Object(r["a"])({url:"/project/selectById",method:"post",params:e})}function l(e){return Object(r["a"])({url:"/project/delete",method:"delete",params:e})}},7334:function(e,t,n){},"7cdf":function(e,t,n){var r=n("5ca1");r(r.S,"Number",{isInteger:n("9c12")})},"805f":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n("b775");function s(e){return Object(r["a"])({url:"/dept/list",method:"post",data:JSON.stringify(e),headers:{"Content-Type":"application/json;charset=UTF-8"}})}function a(e){return Object(r["a"])({url:"/dept/saveOrUpdate",method:"post",data:JSON.stringify(e),headers:{"Content-Type":"application/json;charset=UTF-8"}})}function i(){return Object(r["a"])({url:"/dept/findAll",method:"post"})}function o(e){return Object(r["a"])({url:"/dept/delete",method:"delete",params:e})}},"9c12":function(e,t,n){var r=n("d3f4"),s=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&s(e)===e}},"9cb8":function(e,t,n){},aa77:function(e,t,n){var r=n("5ca1"),s=n("be13"),a=n("79e5"),i=n("fdef"),o="["+i+"]",l="​",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(e,t,n){var s={},o=a((function(){return!!i[e]()||l[e]()!=l})),u=s[e]=o?t(p):i[e];n&&(s[n]=u),r(r.P+r.F*o,"String",s)},p=d.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},b0e7:function(e,t,n){"use strict";var r=n("7334"),s=n.n(r);s.a},c5f6:function(e,t,n){"use strict";var r=n("7726"),s=n("69a8"),a=n("2d95"),i=n("5dbc"),o=n("6a99"),l=n("79e5"),u=n("9093").f,c=n("11e9").f,d=n("86cc").f,p=n("aa77").trim,f="Number",m=r[f],h=m,g=m.prototype,b=a(n("2aeb")(g))==f,v="trim"in String.prototype,y=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():p(t,3);var n,r,s,a=t.charCodeAt(0);if(43===a||45===a){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+t}for(var i,l=t.slice(2),u=0,c=l.length;u<c;u++)if(i=l.charCodeAt(u),i<48||i>s)return NaN;return parseInt(l,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(b?l((function(){g.valueOf.call(n)})):a(n)!=f)?i(new h(y(t)),n,m):y(t)};for(var _,w=n("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;w.length>I;I++)s(h,_=w[I])&&!s(m,_)&&d(m,_,c(h,_));m.prototype=g,g.constructor=m,n("2aba")(r,f,m)}},ee82:function(e,t,n){"use strict";var r=n("9cb8"),s=n.n(r);s.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9d56"],{"8ee8":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("\n    Your roles: "+e._s(e.roles)+"\n  ")]),e._v("\n  Switch roles:\n  "),s("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[s("el-radio-button",{attrs:{label:"editor"}}),e._v(" "),s("el-radio-button",{attrs:{label:"admin"}})],1)],1)},o=[],r={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var t=this;this.$store.dispatch("user/changeRoles",e).then((function(){t.$emit("change")}))}}}},i=r,l=s("2877"),c=Object(l["a"])(i,n,o,!1,null,null,null);t["default"]=c.exports}}]);
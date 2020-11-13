// 定义路由模块
var express = require('express');
var router = express.Router();

/* GET home page. 设置get请求的二级路径和处理请求。*/ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 这里可以定义多个处理请求的方法，设置不同的二级路径即可
module.exports = router;

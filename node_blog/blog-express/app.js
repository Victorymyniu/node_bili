var createError = require('http-errors'); // 检验错误页的处理
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');// 解析 cookie 处理cookie
var logger = require('morgan'); // 记录日志
// 引入定义路由文件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); // 自动生成日志
app.use(express.json()); // （理解重点知识点原理）处理post data（req.headers['content-type'] == 'application/json'）的格式，获取req.body
app.use(express.urlencoded({ extended: false })); // 解析前端Post提交的数据,urlencoded格式，使用系统模块querystring来处理, 获取req.body
app.use(cookieParser()); // 注册解析 cookie插件
app.use(express.static(path.join(__dirname, 'public')));

//处理路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler 抛错处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

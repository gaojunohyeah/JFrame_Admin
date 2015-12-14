'use strict';

var express = require('express');

global.app = express();

//

// 部分公共函数库
global._ = require('lodash');
global.Q = require('q');

// 基础配置参数加载
global.config = require('./config/config');

// 中间件加载
require(config.serverRoot + '/service/express')(app);

// JFrame 初始化
global.JF = require(config.serverRoot + '/core/JFrame');
JF.init();
//console.log(JF);

// 路由模块加载
require(config.serverRoot + '/service/routes')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

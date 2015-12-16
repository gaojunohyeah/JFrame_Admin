/**
 * Created by gaojun on 15/10/27.
 */

'use strict';

var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var ejs = require('ejs');
var swig = require('swig');
var mlogger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var logger = require(config.serverRoot + '/service/logger');

module.exports = function (app) {
  app.set('env', config.environment);

  // 日志系统初始化
  global.logger = logger.init();

  // view engine setup
  app.engine('html', swig.renderFile);
  //app.engine('.html', ejs.__express);
  app.set('view engine', 'html'); //ejs
  app.set('views', config.serverRoot + '/views');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(mlogger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  //app.use(favicon(config.clientRoot + '/favicon.ico'));
  app.use(express.static(config.clientRoot));

  var options = {
    "host": config.RD_host,
    "port": config.RD_port,
    "ttl": config.RD_sessiong_expire,   //Session的有效期
  };
  // 此时req对象还没有session这个属性
  app.use(session({
    store: new RedisStore(options),
    secret: config.APP_KEY,
    resave: false,
    saveUninitialized: false,
  }));
};
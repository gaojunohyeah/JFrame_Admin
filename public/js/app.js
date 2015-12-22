/**
 * Created by gaojun on 15/12/10.
 */

'use strict';

/**
 * 基础配置
 * @type {*|exports|module.exports}
 */
global.config = require('./base/config');
global.enums = require('./enum/enum');

var dep_vars = [
  'ng-admin',
  'ngCookies',
  'http-auth-interceptor',
  'LocalStorageModule',
];

var app = angular.module('jframe', dep_vars);

// custom API flavor
var apiFlavor = require('./base/flavor');
app.config(['RestangularProvider', apiFlavor.requestInterceptor]);
app.config(['RestangularProvider', apiFlavor.responseInterceptor]);

/**
 * 路由模块
 */
app.config(['$urlRouterProvider', '$stateProvider', require('./route/route')]);

/**
 * 运行监听
 */
require('./event/event')(app);

/**
 * controllers,services,directives,filters
 */
require('./controllers/all')(app);
require('./services/all')(app);
require('./directives/all')(app);
require('./filters/all')(app);

/**
 * 基础实体配置
 */
app.config(['NgAdminConfigurationProvider', require('./entity/nga_cfg')]);

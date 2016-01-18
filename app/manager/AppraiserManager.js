/**
 * AppraiserManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 评估师信息表管理器
 *
 * @constructor
 */
var AppraiserManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(AppraiserManager, BaseManager);

module.exports = new AppraiserManager();
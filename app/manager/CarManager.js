/**
 * CarManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 出售车辆信息表管理器
 *
 * @constructor
 */
var CarManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(CarManager, BaseManager);

module.exports = new CarManager();
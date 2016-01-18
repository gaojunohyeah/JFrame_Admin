/**
 * CarEngineManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 车辆发动机信息表管理器
 *
 * @constructor
 */
var CarEngineManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(CarEngineManager, BaseManager);

module.exports = new CarEngineManager();
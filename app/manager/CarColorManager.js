/**
 * CarColorManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 车辆颜色表管理器
 *
 * @constructor
 */
var CarColorManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(CarColorManager, BaseManager);

module.exports = new CarColorManager();
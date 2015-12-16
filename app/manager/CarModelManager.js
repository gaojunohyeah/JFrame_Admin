/**
 * CarModelManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 车辆型号信息表管理器
 *
 * @constructor
 */
var CarModelManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(CarModelManager, BaseManager);

module.exports = new CarModelManager();
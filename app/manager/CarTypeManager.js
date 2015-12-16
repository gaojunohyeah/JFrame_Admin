/**
 * CarTypeManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 车型信息表管理器
 *
 * @constructor
 */
var CarTypeManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(CarTypeManager, BaseManager);

module.exports = new CarTypeManager();
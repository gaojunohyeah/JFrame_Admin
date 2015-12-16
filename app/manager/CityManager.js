/**
 * CityManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 城市信息表管理器
 *
 * @constructor
 */
var CityManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(CityManager, BaseManager);

module.exports = new CityManager();
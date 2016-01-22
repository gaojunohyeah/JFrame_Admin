/**
 * CarImgManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 出售车辆展示图片表管理器
 *
 * @constructor
 */
var CarImgManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(CarImgManager, BaseManager);

module.exports = new CarImgManager();
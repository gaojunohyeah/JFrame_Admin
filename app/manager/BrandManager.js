/**
 * BrandManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 品牌信息表管理器
 *
 * @constructor
 */
var BrandManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(BrandManager, BaseManager);

module.exports = new BrandManager();
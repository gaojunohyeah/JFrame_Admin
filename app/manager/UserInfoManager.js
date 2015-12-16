/**
 * UserInfoManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 用户信息表管理器
 *
 * @constructor
 */
var UserInfoManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(UserInfoManager, BaseManager);

module.exports = new UserInfoManager();
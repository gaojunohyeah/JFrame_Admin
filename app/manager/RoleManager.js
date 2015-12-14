/**
 * RoleManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * gm用户角色信息管理器
 *
 * @constructor
 */
var RoleManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(RoleManager, BaseManager);

module.exports = new RoleManager();
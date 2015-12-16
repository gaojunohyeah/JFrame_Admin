/**
 * GM_RoleManager.js
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
var GM_RoleManager = function () {
  var _this = this;


};

// 添加继承
util.inherits(GM_RoleManager, BaseManager);

module.exports = new GM_RoleManager();
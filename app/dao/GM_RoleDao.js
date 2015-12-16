/**
 * GM_RoleDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * gm用户角色信息数据库层操作类
 *
 * @constructor
 */
var GM_RoleDao = function (GM_RoleModel) {
  this.model = GM_RoleModel;

};

// 添加继承
util.inherits(GM_RoleDao, BaseDao);

module.exports = GM_RoleDao;
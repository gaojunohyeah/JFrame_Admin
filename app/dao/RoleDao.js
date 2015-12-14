/**
 * RoleDao.js
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
var RoleDao = function (RoleModel) {
  this.model = RoleModel;

};

// 添加继承
util.inherits(RoleDao, BaseDao);

module.exports = RoleDao;
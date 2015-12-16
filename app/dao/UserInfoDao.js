/**
 * UserInfoDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 用户信息表数据库层操作类
 *
 * @constructor
 */
var UserInfoDao = function (UserInfoModel) {
  this.model = UserInfoModel;

};

// 添加继承
util.inherits(UserInfoDao, BaseDao);

module.exports = UserInfoDao;
/**
 * GM_UserDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * gm用户信息数据库层操作类
 *
 * @constructor
 */
var GM_UserDao = function (GM_UserModel) {
  this.model = GM_UserModel;

  /**
   * 根据用户名获取用户
   *
   * @param username 用户名
   * @return {*} promise
   */
  this.findByName = function(username){
    return this.model.findOne({
      where: {username: username}
    });
  }
};

// 添加继承
util.inherits(GM_UserDao, BaseDao);

module.exports = GM_UserDao;
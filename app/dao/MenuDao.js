/**
 * MenuDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 菜单信息数据库层操作类
 *
 * @constructor
 */
var MenuDao = function (MenuModel) {
  this.model = MenuModel;

};

// 添加继承
util.inherits(MenuDao, BaseDao);

module.exports = MenuDao;
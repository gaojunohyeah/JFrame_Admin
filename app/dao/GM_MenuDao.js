/**
 * GM_MenuDao.js
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
var GM_MenuDao = function (GM_MenuModel) {
  this.model = GM_MenuModel;

};

// 添加继承
util.inherits(GM_MenuDao, BaseDao);

module.exports = GM_MenuDao;
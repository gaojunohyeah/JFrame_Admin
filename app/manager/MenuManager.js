/**
 * MenuManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 菜单信息管理器
 *
 * @constructor
 */
var MenuManager = function () {
  var _this = this;

  /**
   * 查询所有菜单数据
   */
  this.getAll = function () {
    return JF.dao.MenuDao.queryAll();
  };
};

// 添加继承
util.inherits(MenuManager, BaseManager);

module.exports = new MenuManager();
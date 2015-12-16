/**
 * GM_MenuManager.js
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
var GM_MenuManager = function () {
  var _this = this;

  /**
   * 查询所有菜单数据
   */
  this.getAll = function () {
    return JF.dao.GM_MenuDao.queryList(null, false);
  };
};

// 添加继承
util.inherits(GM_MenuManager, BaseManager);

module.exports = new GM_MenuManager();
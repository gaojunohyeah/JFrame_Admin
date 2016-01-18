/**
 * TagsDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 推荐标签信息表数据库层操作类
 *
 * @constructor
 */
var TagsDao = function (TagsModel) {
  this.model = TagsModel;

};

// 添加继承
util.inherits(TagsDao, BaseDao);

module.exports = TagsDao;
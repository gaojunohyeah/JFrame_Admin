/**
 * AppraiserDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 评估师信息表数据库层操作类
 *
 * @constructor
 */
var AppraiserDao = function (AppraiserModel) {
  this.model = AppraiserModel;

};

// 添加继承
util.inherits(AppraiserDao, BaseDao);

module.exports = AppraiserDao;
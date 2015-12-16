/**
 * BrandDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 品牌信息表数据库层操作类
 *
 * @constructor
 */
var BrandDao = function (BrandModel) {
  this.model = BrandModel;

};

// 添加继承
util.inherits(BrandDao, BaseDao);

module.exports = BrandDao;
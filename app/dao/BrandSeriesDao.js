/**
 * BrandSeriesDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 品牌系列信息表数据库层操作类
 *
 * @constructor
 */
var BrandSeriesDao = function (BrandSeriesModel) {
  this.model = BrandSeriesModel;

};

// 添加继承
util.inherits(BrandSeriesDao, BaseDao);

module.exports = BrandSeriesDao;
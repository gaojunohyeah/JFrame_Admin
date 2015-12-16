/**
 * CarTypeDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 车型信息表数据库层操作类
 *
 * @constructor
 */
var CarTypeDao = function (CarTypeModel) {
  this.model = CarTypeModel;

};

// 添加继承
util.inherits(CarTypeDao, BaseDao);

module.exports = CarTypeDao;
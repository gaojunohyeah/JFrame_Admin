/**
 * CarModelDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 车辆型号信息表数据库层操作类
 *
 * @constructor
 */
var CarModelDao = function (CarModelModel) {
  this.model = CarModelModel;

};

// 添加继承
util.inherits(CarModelDao, BaseDao);

module.exports = CarModelDao;
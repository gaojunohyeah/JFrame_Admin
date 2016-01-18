/**
 * CarColorDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 车辆颜色表数据库层操作类
 *
 * @constructor
 */
var CarColorDao = function (CarColorModel) {
  this.model = CarColorModel;

};

// 添加继承
util.inherits(CarColorDao, BaseDao);

module.exports = CarColorDao;
/**
 * CarDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 出售车辆信息表数据库层操作类
 *
 * @constructor
 */
var CarDao = function (CarModel) {
  this.model = CarModel;

};

// 添加继承
util.inherits(CarDao, BaseDao);

module.exports = CarDao;
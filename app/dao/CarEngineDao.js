/**
 * CarEngineDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 车辆发动机信息表数据库层操作类
 *
 * @constructor
 */
var CarEngineDao = function (CarEngineModel) {
  this.model = CarEngineModel;

};

// 添加继承
util.inherits(CarEngineDao, BaseDao);

module.exports = CarEngineDao;
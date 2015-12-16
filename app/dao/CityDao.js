/**
 * CityDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 城市信息表数据库层操作类
 *
 * @constructor
 */
var CityDao = function (CityModel) {
  this.model = CityModel;

};

// 添加继承
util.inherits(CityDao, BaseDao);

module.exports = CityDao;
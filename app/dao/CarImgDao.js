/**
 * CarImgDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 出售车辆展示图片表数据库层操作类
 *
 * @constructor
 */
var CarImgDao = function (CarImgModel) {
  this.model = CarImgModel;

};

// 添加继承
util.inherits(CarImgDao, BaseDao);

module.exports = CarImgDao;
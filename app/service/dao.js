/**
 * dao实例类
 * Created by auto tool.
 */

'use strict';

var GM_MenuDao = require(config.serverRoot + '/dao/GM_MenuDao');
var GM_RoleDao = require(config.serverRoot + '/dao/GM_RoleDao');
var GM_UserDao = require(config.serverRoot + '/dao/GM_UserDao');
var AppraiserDao = require(config.serverRoot + '/dao/AppraiserDao');
var BrandDao = require(config.serverRoot + '/dao/BrandDao');
var BrandSeriesDao = require(config.serverRoot + '/dao/BrandSeriesDao');
var CarDao = require(config.serverRoot + '/dao/CarDao');
var CarColorDao = require(config.serverRoot + '/dao/CarColorDao');
var CarEngineDao = require(config.serverRoot + '/dao/CarEngineDao');
var CarImgDao = require(config.serverRoot + '/dao/CarImgDao');
var CarModelDao = require(config.serverRoot + '/dao/CarModelDao');
var CarTypeDao = require(config.serverRoot + '/dao/CarTypeDao');
var CityDao = require(config.serverRoot + '/dao/CityDao');
var TagsDao = require(config.serverRoot + '/dao/TagsDao');
var UserInfoDao = require(config.serverRoot + '/dao/UserInfoDao');


module.exports = function (dbs) {
  var dao = {};

  dao.GM_MenuDao = new GM_MenuDao(dbs.GM_Menu);
  dao.GM_RoleDao = new GM_RoleDao(dbs.GM_Role);
  dao.GM_UserDao = new GM_UserDao(dbs.GM_User);
  dao.AppraiserDao = new AppraiserDao(dbs.Appraiser);
  dao.BrandDao = new BrandDao(dbs.Brand);
  dao.BrandSeriesDao = new BrandSeriesDao(dbs.BrandSeries);
  dao.CarDao = new CarDao(dbs.Car);
  dao.CarColorDao = new CarColorDao(dbs.CarColor);
  dao.CarEngineDao = new CarEngineDao(dbs.CarEngine);
  dao.CarImgDao = new CarImgDao(dbs.CarImg);
  dao.CarModelDao = new CarModelDao(dbs.CarModel);
  dao.CarTypeDao = new CarTypeDao(dbs.CarType);
  dao.CityDao = new CityDao(dbs.City);
  dao.TagsDao = new TagsDao(dbs.Tags);
  dao.UserInfoDao = new UserInfoDao(dbs.UserInfo);
  

  return dao;
};
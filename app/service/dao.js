/**
 * dao实例类
 * Created by auto tool.
 */

'use strict';

var GM_MenuDao = require(config.serverRoot + '/dao/GM_MenuDao');
var GM_RoleDao = require(config.serverRoot + '/dao/GM_RoleDao');
var GM_UserDao = require(config.serverRoot + '/dao/GM_UserDao');
var BrandDao = require(config.serverRoot + '/dao/BrandDao');
var CarDao = require(config.serverRoot + '/dao/CarDao');
var CarModelDao = require(config.serverRoot + '/dao/CarModelDao');
var CarTypeDao = require(config.serverRoot + '/dao/CarTypeDao');
var CityDao = require(config.serverRoot + '/dao/CityDao');
var UserInfoDao = require(config.serverRoot + '/dao/UserInfoDao');


module.exports = function (dbs) {
  var dao = {};

  dao.GM_MenuDao = new GM_MenuDao(dbs.GM_Menu);
  dao.GM_RoleDao = new GM_RoleDao(dbs.GM_Role);
  dao.GM_UserDao = new GM_UserDao(dbs.GM_User);
  dao.BrandDao = new BrandDao(dbs.Brand);
  dao.CarDao = new CarDao(dbs.Car);
  dao.CarModelDao = new CarModelDao(dbs.CarModel);
  dao.CarTypeDao = new CarTypeDao(dbs.CarType);
  dao.CityDao = new CityDao(dbs.City);
  dao.UserInfoDao = new UserInfoDao(dbs.UserInfo);
  

  return dao;
};
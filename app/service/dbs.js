/**
 * 数据库模块service类
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');
var Redis = require('ioredis');

var gm_menu = require(config.serverRoot + "/model/GM_Menu");
var gm_role = require(config.serverRoot + "/model/GM_Role");
var gm_user = require(config.serverRoot + "/model/GM_User");
var appraiser = require(config.serverRoot + "/model/Appraiser");
var brand = require(config.serverRoot + "/model/Brand");
var brandseries = require(config.serverRoot + "/model/BrandSeries");
var car = require(config.serverRoot + "/model/Car");
var carcolor = require(config.serverRoot + "/model/CarColor");
var carengine = require(config.serverRoot + "/model/CarEngine");
var carimg = require(config.serverRoot + "/model/CarImg");
var carmodel = require(config.serverRoot + "/model/CarModel");
var cartype = require(config.serverRoot + "/model/CarType");
var city = require(config.serverRoot + "/model/City");
var tags = require(config.serverRoot + "/model/Tags");
var userinfo = require(config.serverRoot + "/model/UserInfo");


// mysql 连接
function loadMysql() {
  return new Sequelize(config.DB_dbname, config.DB_username, config.DB_password, {
    host: config.DB_host,
    port: config.DB_port,
    dialect: config.DB_dialect,

    pool: {
      max: config.DB_maxpool,
      min: config.DB_minpool,
      idle: 10000
    }
  });
}

// 服务器(非admin) mysql 连接
function loadServerMysql() {
  return new Sequelize(config.DB_SERVER_dbname, config.DB_SERVER_username, config.DB_SERVER_password, {
    host: config.DB_SERVER_host,
    port: config.DB_SERVER_port,
    dialect: config.DB_SERVER_dialect,

    pool: {
      max: config.DB_SERVER_maxpool,
      min: config.DB_SERVER_minpool,
      idle: 10000
    }
  });
}

// redis 连接
function loadRedis() {
  return new Redis(config.RD_port, config.RD_host);
}

// 加载操作
// redis连接
exports.redis = loadRedis();

// 数据库连接以及连接池
var sequelize = loadMysql();
exports.sequelize = sequelize;
var serverSequelize = loadServerMysql();
exports.serverSequelize = serverSequelize;

// model映射
exports.GM_Menu = gm_menu.GM_Menu(sequelize);
exports.GM_Role = gm_role.GM_Role(sequelize);
exports.GM_User = gm_user.GM_User(sequelize);
exports.Appraiser = appraiser.Appraiser(serverSequelize);
exports.Brand = brand.Brand(serverSequelize);
exports.BrandSeries = brandseries.BrandSeries(serverSequelize);
exports.Car = car.Car(serverSequelize);
exports.CarColor = carcolor.CarColor(serverSequelize);
exports.CarEngine = carengine.CarEngine(serverSequelize);
exports.CarImg = carimg.CarImg(serverSequelize);
exports.CarModel = carmodel.CarModel(serverSequelize);
exports.CarType = cartype.CarType(serverSequelize);
exports.City = city.City(serverSequelize);
exports.Tags = tags.Tags(serverSequelize);
exports.UserInfo = userinfo.UserInfo(serverSequelize);

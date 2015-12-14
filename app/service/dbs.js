/**
 * 数据库模块service类
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');
var Redis = require('ioredis');

var menu = require(config.serverRoot + "/model/Menu");
var role = require(config.serverRoot + "/model/Role");
var user = require(config.serverRoot + "/model/User");


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

// model映射
exports.Menu = menu.Menu(sequelize);
exports.Role = role.Role(sequelize);
exports.User = user.User(sequelize);

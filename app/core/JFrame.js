/**
 * Created by gaojun on 15/10/27.
 */

'use strict';

// 通用功能模块加载
var util = require(config.serverRoot + '/service/util');

// 通用枚举功能模块加载
var enums = require(config.serverRoot + '/service/enum');

// 数据库模块加载
var dbs = require(config.serverRoot + '/service/dbs');

// 定时器模块加载
var schedule = require(config.serverRoot + '/service/schedule');

// 管理器模块加载
var ma = require(config.serverRoot + '/service/manager');

// 数据库层模块加载
var dao = require(config.serverRoot + '/service/dao')(dbs);

// 其他服务模块加载
var srv = require(config.serverRoot + '/service/service');

// 单例实体集合
function SingleInstance() {
  // 初始化
  this.init = function(){
    this.util = util;
    this.enums = enums;
    this.dbs = dbs;
    this.schedule = schedule;
    this.ma = ma;
    this.dao = dao;
    this.srv = srv;
  }
}

module.exports = new SingleInstance();
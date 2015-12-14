/**
 * dao实例类
 * Created by auto tool.
 */

'use strict';

var MenuDao = require(config.serverRoot + '/dao/MenuDao');
var RoleDao = require(config.serverRoot + '/dao/RoleDao');
var UserDao = require(config.serverRoot + '/dao/UserDao');


module.exports = function (dbs) {
  var dao = {};

  dao.MenuDao = new MenuDao(dbs.Menu);
  dao.RoleDao = new RoleDao(dbs.Role);
  dao.UserDao = new UserDao(dbs.User);
  

  return dao;
};
/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

module.exports = function (nga) {
// create an admin application
  var admin = nga.application(config.name)
    .baseApiUrl('/data/'); // main API endpoint

  // 将 admin 和 nga对象设为全局
  global.admin = admin;
  global.nga = nga;

  // add entities
  admin.addEntity(require('./userinfo'));

  admin.addEntity(require('./GM_Role'));
  admin.addEntity(require('./GM_Menu'));
  admin.addEntity(require('./GM_User'));

  // 页头
  admin.header(require('../../views/header.html'));
  // 首页
  admin.dashboard(require('../base/dashboard')());
  // 菜单在登录之后动态生成

  nga.configure(admin);
};
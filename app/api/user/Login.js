/**
 * Created by gaojun on 15/12/10.
 */

'use strict';

// 登陆请求
module.exports = function (reqData, req, res) {
  var username = reqData.username;
  var password = reqData.password;

  // 进行登录验证
  JF.ma.UserManager.login(username, password, req, res);
};
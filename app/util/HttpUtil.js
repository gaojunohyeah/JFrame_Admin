/**
 * Created by gaojun on 15/11/3.
 */

'use strict';
var fs = require('fs');

/**
 * 创建玩家session
 *
 * @param req request对象
 * @param res response对象
 * @param userinfo 玩家信息
 * @param callback 回调函数
 */
exports.sessionInit = function (req, res, userinfo, callback) {
  //session创建
  req.session.regenerate(function () {
    req.session.userId = userinfo.id;

    var user = userinfo.dataValues;
    delete user.password;
    user.authToken = req.session.id;

    req.session.user = user;
    req.session.save();  //保存一下修改后的Session

    exports.resBack(res, {user: user, ret: JF.enums.ret.SUCCESS});
  });
};

/**
 * 销毁玩家session
 *
 * @param req request对象
 * @param res response对象
 * @param callback 回调函数
 */
exports.sessionDes = function (req, res, callback) {
  // 清除cookie
  res.clearCookie('connect.sid');
  req.session.userId = null;

  // session移除
  req.session.destroy(function () {
    //移除session之后后续的处理

    exports.resBack(res, {});
  })
};

/**
 * 客户端请求返回统一接口
 * 用于封装一些统一行为，例如压缩，加密等
 *
 * @param res response对象
 * @param backData 返回数据
 * @param backPage 返回页面
 */
exports.resBack = function (res, backData, backPage) {
  // 页面不存在,只返回数据
  if (_.isUndefined(backPage) || _.isNull(backPage)) {
    res.send(backData);
  }
  // 返回数据不存在，则重定向
  else if (_.isUndefined(backData) || _.isNull(backData)) {
    res.redirect(backPage);
  }
  // 需要渲染页面
  else {
    res.render(backPage, backData);
  }
};

/**
 * 检查参数
 *
 * @param reqData request对象入参参数
 * @param res response对象
 * @param params 需要检查的参数数组
 */
exports.checkParam = function (reqData, res, params) {
  _.forEach(params, function (param) {
    // 参数不存在
    if (_.isUndefined(reqData[param])
      || _.isNull(reqData[param])) {
      JF.util.http.resBack(res, {ret: JF.enums.ret.PARAM_ERROR});
      return false;
    }
  });

  return true;
};

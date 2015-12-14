/**
 * UserManager.js
 * Created by auto tool.
 */

'use strict';

/**
 * gm用户信息管理器
 *
 * @constructor
 */
var UserManager = function () {
  var _this = this;

  /**
   * gm用户登录验证
   *
   * @param username 用户名
   * @param password 密码
   * @param req request对象
   * @param res response对象
   */
  this.login = function (username, password, req, res) {
    // 查询用户
    var findUser = function () {
      return JF.dao.UserDao.findByName(username);
    };

    // 用户账号密码验证
    var checkUser = function (user) {

      // 用户存在
      if (!_.isUndefined(user) && !_.isNull(user)) {
        // 密码加密
        var psd = JF.util.crypto.getSha1(password + config.APP_KEY);
        console.log('psd is :' + psd);

        // 密码相同
        if (_.isEqual(psd, user.password)) {
          JF.util.http.sessionInit(req, res, user, void 0);
          return;
        }
      }

      // 验证不通过
      throw new Error(JF.enums.ret.USER_TOKEN_ERROR);
    };

    // 异常处理
    var err = function (error) {
      JF.util.http.resBack(res, {ret: JF.util.base.errorFilter(error)});
    };

    Q.fcall(findUser)
      .then(checkUser)
      .catch(err);
  }
};

module.exports = new UserManager();
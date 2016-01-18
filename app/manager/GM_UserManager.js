/**
 * GM_UserManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * gm用户信息管理器
 *
 * @constructor
 */
var GM_UserManager = function () {
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
    var userInfo;
    var roleInfo;

    // 查询用户
    var findUser = function () {
      return JF.dao.GM_UserDao.findByName(username);
    };

    // 用户账号密码验证
    var checkUser = function (user) {

      // 用户存在
      if (!_.isUndefined(user) && !_.isNull(user)) {
        // 密码加密
        var psd = JF.util.crypto.getSha1(password + config.APP_KEY);
        //console.log('psd is :' + psd);

        // 密码相同
        if (_.isEqual(psd, user.password)) {
          // 获取用户角色和菜单信息
          userInfo = user;
          return user;
        }
      }

      // 验证不通过
      throw new Error(JF.enums.ret.USER_TOKEN_ERROR);
    };

    var getRoleData = function (user) {
      return JF.dao.GM_RoleDao.get(user.role);
    };

    var getMenus = function (role) {
      roleInfo = role;
      return JF.ma.GM_MenuManager.getAll();
    };

    var loginEnd = function (menus) {
      var data = {
        user: userInfo.dataValues,
        role: roleInfo.dataValues,
        menus: menus,
      };

      JF.util.http.sessionInit(req, res, data, void 0);
    };

    Q.fcall(findUser)
      .then(checkUser)
      .then(getRoleData)
      .then(getMenus)
      .then(loginEnd)
      .catch(JF.util.http.error.bind(null, res));
  };

  /**
   * 新增数据接口
   *
   * @param res response对象
   * @param reqData 请求入参数据
   * @param mname 模块名称
   */
  this.addNew = function (res, reqData, mname) {
    var model = JF.dbs[mname];
    var mdao = JF.dao[mname + "Dao"];

    // 新增数据
    var addNew = function () {
      var newData = {};
      _.forEach(reqData, function (value, key) {
        if (!_.isUndefined(value) && !_.isNull(value)) {
          newData[key] = value;
        }
      });
      // 密码加密
      newData.password = JF.util.crypto.getSha1(newData.password + config.APP_KEY);

      var entity = model.build(newData);

      // 保存
      return mdao.save(entity);
    };

    var addRes = function (entity) {

      JF.util.http.resBack(res, entity.dataValues);
    };

    Q.fcall(addNew)
      .then(addRes)
      .catch(JF.util.http.error.bind(null, res));
  };
};

// 添加继承
util.inherits(GM_UserManager, BaseManager);

module.exports = new GM_UserManager();
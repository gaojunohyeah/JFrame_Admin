/**
 * MenuManager.js
 * Created by auto tool.
 */

'use strict';

/**
 * 菜单信息管理器
 *
 * @constructor
 */
var MenuManager = function () {
  var _this = this;

  /**
   * 查询列表接口
   *
   * @param res response对象
   * @param query 查询条件
   * @param _page 查询页
   * @param _perPage 每页条数
   * @param _sort 排序key
   * @param _order 排序方式
   */
  this.getList = function (res, query, _page, _perPage, _sort, _order) {
    // 根据条件查询数据
    var queryList = function () {
      return JF.dao.MenuDao.queryList(query, _page, _perPage, _sort, _order);
    };

    var buildList = function (list) {
      var resData = [];
      _.forEach(list, function (data) {
        resData.push(data.dataValues);
      });

      JF.util.http.resBack(res, resData);
    };


    // 异常处理
    var err = function (error) {
      JF.util.http.resBack(res, []);
    };

    Q.fcall(queryList)
      .then(buildList)
      .catch(err);
  };

  /**
   * 查询所有菜单数据
   */
  this.getAll = function () {
    return JF.dao.MenuDao.queryAll();
  };
};

module.exports = new MenuManager();
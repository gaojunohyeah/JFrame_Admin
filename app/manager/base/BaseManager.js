/**
 * Created by gaojun on 15/12/14.
 */

'use strict';

var BaseManager = function () {
};

/**
 * 查询列表接口
 *
 * @param res response对象
 * @param query 查询条件
 * @param mname 模块名称
 * @param _page 查询页
 * @param _perPage 每页条数
 * @param _sort 排序key
 * @param _order 排序方式
 */
BaseManager.prototype.getList = function (res, query, mname, _page, _perPage, _sort, _order) {
  var mdao = JF.dao[mname + "Dao"];

  // 根据条件查询数据
  var queryList = function () {
    return mdao.queryList(query, _page, _perPage, _sort, _order);
  };

  // 根据条件查询数据
  var queryCount = function () {
    return mdao.queryCount(query);
  };

  var buildList = function (list, count) {
    var resData = [];
    _.forEach(list, function (data) {
      resData.push(data.dataValues);
    });

    res.setHeader('Content-Range', count);

    JF.util.http.resBack(res, resData);
  };


  // 异常处理
  var err = function (error) {
    JF.util.http.resBack(res, []);
  };

  Q.all(queryList, queryCount)
    .then(buildList)
    .catch(err);
};

module.exports = BaseManager;
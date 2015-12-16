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
    return mdao.queryList(query, false, _page, _perPage, _sort, _order)
      .catch(JF.util.http.error.bind(null, res));
  };

  // 根据条件查询数据
  var queryCount = function () {
    return mdao.queryCount(query)
      .catch(JF.util.http.error.bind(null, res));
  };

  var buildList = function (list, count) {
    res.setHeader('Content-Range', count);

    JF.util.http.resBack(res, list);
  };

  Q.all([queryList(), queryCount()])
    .spread(buildList)
    .catch(JF.util.http.error.bind(null, res));
};

/**
 * 新增数据接口
 *
 * @param res response对象
 * @param reqData 请求入参数据
 * @param mname 模块名称
 */
BaseManager.prototype.addNew = function (res, reqData, mname) {
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

    var entity = model.build(newData);

    // 保存
    return mdao.save(entity).catch(JF.util.http.error.bind(null, res));
  };

  var addRes = function (entity) {

    JF.util.http.resBack(res, entity.dataValues);
  };

  Q.fcall(addNew)
    .then(addRes)
    .catch(JF.util.http.error.bind(null, res));
};

/**
 * 根据id获取entity数据
 *
 * @param res response对象
 * @param mname 模块名称
 * @param id 数据唯一id
 */
BaseManager.prototype.getById = function (res, mname, id) {
  var mdao = JF.dao[mname + "Dao"];

  var getById = function () {
    return mdao.get(id).catch(JF.util.http.error.bind(null, res));
  };

  var buildRes = function (entity) {
    var reData = {};
    if (!_.isUndefined(entity) && !_.isNull(entity)) {
      reData = entity.dataValues;
    }

    JF.util.http.resBack(res, reData);
  };

  Q.fcall(getById)
    .then(buildRes)
    .catch(JF.util.http.error.bind(null, res));
};

/**
 * 根据id更新entity数据
 *
 * @param res response对象
 * @param reqData 请求数据
 * @param mname 模块名称
 * @param id 实体数据id
 */
BaseManager.prototype.update = function (res, reqData, mname, id) {
  var mdao = JF.dao[mname + "Dao"];

  var getById = function () {
    return mdao.get(id).catch(JF.util.http.error.bind(null, res));
  };

  var modifyEntity = function (entity) {
    if (!_.isUndefined(entity) || !_.isNull(entity)) {
      // 更新
      return mdao.update(entity, reqData).catch(JF.util.http.error.bind(null, res));
    } else {
      throw new Error(JF.enums.ret.ERROR);
    }
  };

  var sucUpdate = function(entity){
    JF.util.http.resBack(res, entity);
  };

  Q.fcall(getById)
    .then(modifyEntity)
    .then(sucUpdate)
    .catch(JF.util.http.error.bind(null, res));
};

/**
 * 根据id删除entity数据
 *
 * @param res response对象
 * @param mname 模块名称
 * @param id 数据唯一id
 */
BaseManager.prototype.delById = function (res, mname, id) {
  var mdao = JF.dao[mname + "Dao"];

  var delById = function () {
    return mdao.delete(id).catch(JF.util.http.error.bind(null, res));
  };

  var buildRes = function (entity) {
    var reData = {};
    if (!_.isUndefined(entity) && !_.isNull(entity)) {
      reData = entity.dataValues;
    }

    JF.util.http.resBack(res, reData);
  };

  Q.fcall(delById)
    .then(buildRes)
    .catch(JF.util.http.error.bind(null, res));
};


module.exports = BaseManager;
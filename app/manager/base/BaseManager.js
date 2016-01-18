/**
 * Created by gaojun on 15/12/14.
 */

'use strict';

var BaseManager = function () {
};

/**
 * 查询时的特殊参数处理
 * @type {{}}
 * :: key 参数键值
 * :: opt 参数操作符 eg: queryParam = {'startTime':'$gte'}
 */
BaseManager.prototype.queryParam = {};

/**
 * 查询条件处理
 * 各个manager可以重写此方法,达到特殊数据修改的目的
 *
 * @param query 查询条件数据
 * @return {{}}
 */
BaseManager.prototype.getListPre = function(query){
  return query;
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

  // 查询条件处理
  var qp = {};
  _.forEach(query, function (value, key) {
    var opt = JF.enums.db.e;
    if (!_.isUndefined(_this.queryParam[key]) && !_.isNull(_this.queryParam[key])) {
      opt = _this.queryParam[key];
    }

    // 根据操作符进行条件拼写
    var param = JF.util.db.buildQueryParam(value, opt);
    if (!_.isUndefined(param) && !_.isNull(param) && !_.isEqual('', param)) {
      qp[key] = param;
    }
  });
  qp = this.getListPre(qp);

  // 根据条件查询数据
  var queryList = function () {
    return mdao.queryList(qp, false, _page, _perPage, _sort, _order);
  };

  // 根据条件查询数据
  var queryCount = function () {
    return mdao.queryCount(query);
  };

  var buildList = function (list, count) {
    res.setHeader('Total_Count', count);

    JF.util.http.resBack(res, list);
  };

  Q.all([queryList(), queryCount()])
    .spread(buildList)
    .catch(JF.util.http.error.bind(null, res));
};

/**
 * 入参数据处理，新增数据前的数据处理方法
 * 各个manager可以重写此方法,达到特殊数据修改的目的
 *
 * @param newData 请求数据
 * @return {{}}
 */
BaseManager.prototype.addNewPre = function(newData){
  return newData;
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

  // 入参对象数据处理
  var newData = {};
  _.forEach(reqData, function (value, key) {
    if (!_.isUndefined(value) && !_.isNull(value)) {
      newData[key] = value;
    }
  });
  newData = this.addNewPre(newData);

  // 新增数据
  var addNew = function () {

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

/**
 * 查询数据处理，查询出数据后的处理方法
 * 各个manager可以重写此方法,达到特殊数据修改的目的
 *
 * @param reData
 * @return {*}
 */
BaseManager.prototype.getByIdSuf = function(reData){
  return reData;
};

/**
 * 根据id获取entity数据
 *
 * @param res response对象
 * @param mname 模块名称
 * @param id 数据唯一id
 */
BaseManager.prototype.getById = function (res, mname, id) {
  var _this = this;
  var mdao = JF.dao[mname + "Dao"];

  var getById = function () {
    return mdao.get(id);
  };

  var buildRes = function (entity) {
    var reData = {};
    if (!_.isUndefined(entity) && !_.isNull(entity)) {
      reData = entity.dataValues;

      // 查询数据处理
      reData = _this.getByIdSuf(reData);
    }

    JF.util.http.resBack(res, reData);
  };

  Q.fcall(getById)
    .then(buildRes)
    .catch(JF.util.http.error.bind(null, res));
};

/**
 * 入参数据处理，更新数据前的数据处理方法
 * 各个manager可以重写此方法,达到特殊数据修改的目的
 *
 * @param upData 更新数据
 * @return {{}}
 */
BaseManager.prototype.updatePre = function(upData){
  return upData;
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
  var _this = this;
  var mdao = JF.dao[mname + "Dao"];

  var getById = function () {
    return mdao.get(id);
  };

  var modifyEntity = function (entity) {
    if (!_.isUndefined(entity) || !_.isNull(entity)) {
      // 更新前数据处理
      reqData = _this.updatePre(reqData);
      // 更新
      return mdao.update(entity, reqData);
    } else {
      throw new Error(JF.enums.ret.ERROR);
    }
  };

  var sucUpdate = function (entity) {
    JF.util.http.resBack(res, entity);
  };

  Q.fcall(getById)
    .then(modifyEntity)
    .then(sucUpdate)
    .catch(JF.util.http.error.bind(null, res));
};

/**
 * 删除数据处理，删除数据后的数据处理方法
 * 各个manager可以重写此方法,达到特殊数据修改的目的
 *
 * @param delData 删除数据
 * @return {{}}
 */
BaseManager.prototype.delByIdSuf = function(delData){
  return delData;
};

/**
 * 根据id删除entity数据
 *
 * @param res response对象
 * @param mname 模块名称
 * @param id 数据唯一id
 */
BaseManager.prototype.delById = function (res, mname, id) {
  var _this = this;
  var mdao = JF.dao[mname + "Dao"];

  var delById = function () {
    return mdao.delete(id);
  };

  var buildRes = function (entity) {
    var reData = {};
    if (!_.isUndefined(entity) && !_.isNull(entity)) {
      reData = entity.dataValues;
    }

    reData = _this.delByIdSuf(reData);

    JF.util.http.resBack(res, reData);
  };

  Q.fcall(delById)
    .then(buildRes)
    .catch(JF.util.http.error.bind(null, res));
};


module.exports = BaseManager;
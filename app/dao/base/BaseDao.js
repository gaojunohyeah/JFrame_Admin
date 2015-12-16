/**
 * Created by gaojun on 15/11/3.
 */

'use strict';

var BaseDao = function () {
};

/**
 * 根据id查询接口
 *
 * @param id
 * @return {*} Promise
 */
BaseDao.prototype.get = function (id) {
  var _this = this;

  // 先从redis获取
  var tableName = this.model.getTableName();
  var deferred = Q.defer();

  var dataHandler = function (data) {
    // 有数据
    if (!_.isUndefined(data) && !_.isNull(data)) {
      var d = _this.model.build(JSON.parse(data), {
        isNewRecord: false
      });

      // 返回新的promise
      deferred.resolve(d);
      return deferred.promise;
    }
    // 无数据，从数据库获取
    else {
      var cacheToRedis = function (data) {
        if (!_.isUndefined(data) && !_.isNull(data)) {
          var d = data.dataValues;
          var jsonStr = JSON.stringify(d);

          // 缓存到redis
          JF.dbs.redis.hset(tableName, id, jsonStr);
          JF.dbs.redis.expire(tableName, config.RD_data_expire);
        }

        // 返回新的promise
        deferred.resolve(data);
        return deferred.promise;
      };

      return _this.model.findById(id).then(cacheToRedis);
    }
  };

  return JF.dbs.redis.hget(tableName, id).then(dataHandler);
};

/**
 * insert接口
 *
 * @param entry 数据对象
 * @return {*} Promise
 */
BaseDao.prototype.save = function (entry) {
  return entry.save();
};

/**
 * update接口
 *
 * @param entry 数据对象
 * @param udata 更新数据
 * @return {*} Promise
 */
BaseDao.prototype.update = function (entry, udata) {
  return entry.update(udata);
};

/**
 * delete接口
 *
 * @param entry 数据ID或者数据对象
 * @return {*} Promise
 */
BaseDao.prototype.delete = function (entry) {
  if (typeof entry === 'number' || typeof entry === 'string') {
    return this.model.destroy({where: {id: entry}});
  } else {
    return entry.destory();
  }
};

/**
 * 基础查询接口
 *
 * @param query 查询条件
 * @param needEntity 查询结果是否需要为实体对象(每个对象带操作方法)
 * @param _page 当前页
 * @param _perPage 每页数据条数
 * @param _sort 排序key
 * @param _order 升序或是降序
 */
BaseDao.prototype.queryList = function (query, needEntity, _page, _perPage, _sort, _order) {
  var params = {
    where: {},
  };

  // 不需要实体
  if (!needEntity) {
    params.raw = !needEntity;
  }

  // 有排序
  if (!_.isUndefined(_page) && !_.isNull(_page)
    && !_.isUndefined(_perPage) && !_.isNull(_perPage)) {
    params.offset = (_page - 1) * _perPage;
    params.limit = _perPage;
  }

  // 有排序
  if (!_.isUndefined(_sort) && !_.isNull(_sort)
    && !_.isUndefined(_order) && !_.isNull(_order)) {
    params.order = _sort + ' ' + _order;
  }

  return this.model.findAll(params);
};

/**
 * 根据查询条件获取数量
 *
 * @param query 查询条件
 * @return {*}
 */
BaseDao.prototype.queryCount = function (query) {
  return this.model.count();
};

module.exports = BaseDao;


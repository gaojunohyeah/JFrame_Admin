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
 * @param entry 数据对象
 * @return {*} Promise
 */
BaseDao.prototype.delete = function (entry) {
  return entry.destory();
};

/**
 * 查询所有数据接口
 */
BaseDao.prototype.queryAll = function () {
  return this.model.findAll();
};

/**
 * 基础查询接口
 *
 * @param query 查询条件
 * @param _page 当前页
 * @param _perPage 每页数据条数
 * @param _sort 排序key
 * @param _order 升序或是降序
 */
BaseDao.prototype.queryList = function (query, _page, _perPage, _sort, _order) {
  var offset = (_page - 1) * _perPage;

  return this.model.findAll({
    where: {},
    offset: offset,
    limit: _perPage,
    order: _sort + ' ' + _order,
  });
};

BaseDao.prototype.queryCount = function(query) {
  return this.model.
};

module.exports = BaseDao;


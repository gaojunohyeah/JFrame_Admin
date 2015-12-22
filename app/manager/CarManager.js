/**
 * CarManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var fs = require('fs');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 出售车辆信息表管理器
 *
 * @constructor
 */
var CarManager = function () {
  var _this = this;

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

      var entity = model.build(newData);

      // 保存
      return mdao.save(entity).catch(JF.util.http.error.bind(null, res));
    };

    var moveImg = function () {
      var img = reqData.showImg;

      //// 缓存到redis(真正保存数据的时候会使用)
      //JF.dbs.redis.hget(RD_file_key, cacheFileName, inputFile.originalFilename);
      //JF.dbs.redis.expire(tableName, config.RD_file_expire);
      // 移动文件
      var uploadedPath = config.uploadPath + '/' + img;
      var dstPath = config.carImgPath + '/' + img;

      fs.rename(uploadedPath, dstPath, function (err) {
        var defer = Q.defer();
        if (err) {
          defer.reject(err);
          //console.log('rename error: ' + err);
        } else {
          defer.resolve();
          //console.log('rename ok');
        }

        return defer.promise;
      });
    };

    var addRes = function (entity) {

      JF.util.http.resBack(res, entity.dataValues);
    };

    Q.fcall(moveImg)
      .then(addNew)
      .then(addRes)
      .catch(JF.util.http.error.bind(null, res));
  };
};

// 添加继承
util.inherits(CarManager, BaseManager);

module.exports = new CarManager();
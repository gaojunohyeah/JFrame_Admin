var express = require('express');
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

var router = express.Router();

var login = require(config.serverRoot + '/api/user/Login');
var logout = require(config.serverRoot + '/api/user/Logout');
var modelGetList = require(config.serverRoot + '/api/data/ModelGetList');
var modelAdd = require(config.serverRoot + '/api/data/ModelAdd');
var modelGet = require(config.serverRoot + '/api/data/ModelGet');
var modelUpdate = require(config.serverRoot + '/api/data/ModelUpdate');
var modelDelete = require(config.serverRoot + '/api/data/ModelDelete');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {});
});

router.get('/*', function (req, res, next) {
  // 开发环境才需要收get请求
  if (JF.util.base.checkDevEnv()) {
    next();
  }
});

/**
 * 登陆 post method, for pro-environment
 */
router.post('/login', function (req, res, next) {
  if (JF.util.http.checkParam(req.body, res, ['user'])) {
    // 登录
    login(req.body.user, req, res);
  }
  //var rData = login(req.body.user);
  //
  //JF.util.http.sessionInit(req, res, req.body.user, rData);
});

/**
 * 登陆 post method, for pro-environment
 */
router.get('/login', function (req, res, next) {
  if (JF.util.http.checkParam(req.query, res, ['username', 'password'])) {
    // 登录
    var user = {
      username: req.query.username,
      password: req.query.password,
    };
    login(user, req, res);
  }
});

/**
 * 登出 post method, for pro-environment
 */
router.post('/logout', function (req, res, next) {
  JF.util.http.sessionDes(req, res, void 0);
});


router.all('/*/*', function (req, res, next) {
  // TODO 登陆session验证
  if (!req.session.userId) {
    var err = new Error('need login first!');
    err.status = 401;
    return next(err); // handle error
  }

  next(); // pass control to the next handler
});

/**
 * 请求某个模块数据(get list)
 */
router.get('/data/:module', function (req, res, next) {
  var mName = req.params.module;

  if (JF.util.http.checkParam(req.query, res,
      ['_page', '_perPage'])) {

    //// 不在自己的module内，则向游戏服请求
    //var isSelf = false;
    //_.forEach(config.gm_self_module, function (moduleName) {
    //  if (_.isEqual(moduleName, mName)) {
    //    isSelf = true;
    //  }
    //});
    //if (!isSelf) {
    //
    //}
    //// 从gm数据库获取
    //else {
    modelGetList(res, req.query, mName);
    //}
  }

  //JF.util.http.resBack(res, []);
});

/**
 * 请求新增某个模块数据(create)
 */
router.post('/data/:module', function (req, res, next) {
  var mName = req.params.module;

  //// 不在自己的module内，则向游戏服请求
  //var isSelf = false;
  //_.forEach(config.gm_self_module, function (moduleName) {
  //  if (_.isEqual(moduleName, mName)) {
  //    isSelf = true;
  //  }
  //});
  //if (!isSelf) {
  //
  //}
  //// 从gm数据库获取
  //else {
  modelAdd(res, req.body, mName);
  //}
});

/**
 * 请求获取某个模块某条数据(get)
 */
router.get('/data/:module/:id', function (req, res, next) {
  var mName = req.params.module;
  var id = req.params.id;

  //// 不在自己的module内，则向游戏服请求
  //var isSelf = false;
  //_.forEach(config.gm_self_module, function (moduleName) {
  //  if (_.isEqual(moduleName, mName)) {
  //    isSelf = true;
  //  }
  //});
  //if (!isSelf) {
  //
  //}
  //// 从gm数据库获取
  //else {
  modelGet(res, mName, id);
  //}
});

/**
 * 请求修改某个模块某条数据(update)
 */
router.put('/data/:module/:id', function (req, res, next) {
  var mName = req.params.module;
  var id = req.params.id;

  //// 不在自己的module内，则向游戏服请求
  //var isSelf = false;
  //_.forEach(config.gm_self_module, function (moduleName) {
  //  if (_.isEqual(moduleName, mName)) {
  //    isSelf = true;
  //  }
  //});
  //if (!isSelf) {
  //
  //}
  //// 从gm数据库获取
  //else {
  modelUpdate(res, req.body, mName, id);
  //}
});

/**
 * 请求删除某个模块某条数据(delete)
 */
router.delete('/data/:module/:id', function (req, res, next) {
  var mName = req.params.module;
  var id = req.params.id;

  //// 不在自己的module内，则向游戏服请求
  //var isSelf = false;
  //_.forEach(config.gm_self_module, function (moduleName) {
  //  if (_.isEqual(moduleName, mName)) {
  //    isSelf = true;
  //  }
  //});
  //if (!isSelf) {
  //
  //}
  //// 从gm数据库获取
  //else {
  modelDelete(res, mName, id);
  //}
});

/**
 *  上传文件
 */
router.post('/file/upload', function (req, res, next) {
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({uploadDir: config.uploadPath});
  //上传完成后处理
  form.parse(req, function (err, fields, files) {
    var filesTmp = JSON.stringify(files, null, 2);

    // 上传失败
    if (err) {
      console.log('parse error: ' + err);
      var error = new Error('file upload error!');
      error.status = 500;
      return next(error);
    }
    // 上传成功
    else {
      console.log('parse files: ' + filesTmp);
      var inputFile = files.file[0];
      //var uploadedPath = inputFile.path;
      //var dstPath = './public/files/' + inputFile.originalFilename;
      //重命名为真实文件名
      //fs.rename(uploadedPath, dstPath, function (err) {
      //  if (err) {
      //    console.log('rename error: ' + err);
      //  } else {
      //    console.log('rename ok');
      //  }
      //});
      // 获取临时文件名
      var cacheFileName = inputFile.path.substring(inputFile.path.lastIndexOf('/') + 1);

      //// 缓存到redis(真正保存数据的时候会使用)
      //JF.dbs.redis.hset(RD_file_key, cacheFileName, inputFile.originalFilename);
      //JF.dbs.redis.expire(tableName, config.RD_file_expire);

      JF.util.http.resBack(res, {file_name: cacheFileName})
    }
  });
});


module.exports = router;

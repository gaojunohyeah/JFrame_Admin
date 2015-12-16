var express = require('express');
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


router.all('/data/*', function (req, res, next) {
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


module.exports = router;

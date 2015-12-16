/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var authSrv = function ($rootScope, $http, authService, localStorageService, reqSrv, $state) {
  var user = {},
    role = {};

  function getUserInfo() {
    return user;
  }

  function getRoleInfo() {
    return role;
  }

  function isLogin() {
    return (!_.isUndefined(user) && null != user && "" != user && 0 < _.size(user));
  }

  var login = function (user) {
    var promise = reqSrv.login(user);

    promise.success(function (data, status, headers, config) {
      if (0 == data.ret) {
        user = data.user;
        role = data.role;

        // 菜单变更事件
        $rootScope.$broadcast('event:menus-changed', data.menus);

        //$http.defaults.headers.common.Authorization = user.authToken;  // Step 1
        // A more secure approach would be to store the token in SharedPreferences for Android, and Keychain for iOS
        localStorageService.set('authorizationToken', user.authToken);
        localStorageService.set('userdata', user);
        localStorageService.set('roledata', data.role);
        localStorageService.set('menudata', data.menus);
        localStorageService.set('logintime', Date.parse(new Date()));

        // Need to inform the http-auth-interceptor that
        // the user has logged in successfully.  To do this, we pass in a function that
        // will configure the request headers with the authorization token so
        // previously failed requests(aka with status == 401) will be resent with the
        // authorization token placed in the header
        authService.loginConfirmed(data, function (config) {  // Step 2 & 3
          config.headers.Authorization = user.authToken;
          return config;
        });

        $rootScope.islogin = true;
      } else {
        status = 401;
        $rootScope.$broadcast('event:auth-login-failed', status);
      }
    })
      .error(function (data, status, headers, config) {
        status = 401;
        $rootScope.$broadcast('event:auth-login-failed', status);
      });
  };

  var logout = function () {
    var promise = reqSrv.logout();
    promise.finally(function (data) {
      user = {};

      localStorageService.remove('authorizationToken');
      localStorageService.remove('userdata');
      localStorageService.remove('roledata');
      localStorageService.remove('menudata');
      //delete $http.defaults.headers.common.Authorization;

      $rootScope.islogin = false;

      $rootScope.$broadcast('event:auth-logout-complete');
    });
  };

  var loginCancelled = function () {
    authService.loginCancelled();
  };

  function init() {
    if (localStorageService.get('authorizationToken')) {
      var lasttime = localStorageService.get('logintime') || 0;
      var now = Date.parse(new Date());
      // 超时，需要重新登录
      if (now - lasttime > config.cookie_expiration_time) {
        user = null;
      } else {
        user = localStorageService.get('userdata');
        role = localStorageService.get('roledata');
      }
    }
  }

  init();

  return {
    login: login,
    logout: logout,
    loginCancelled: loginCancelled,
    getUserInfo: getUserInfo,
    getRoleInfo: getRoleInfo,
    isLogin: isLogin,
  };
};

authSrv.$inject = ['$rootScope', '$http', 'authService', 'localStorageService',
  'reqSrv', '$state'];

module.exports = authSrv;
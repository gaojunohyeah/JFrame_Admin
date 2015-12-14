/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var authSrv = function ($rootScope, $http, authService, localStorageService, reqSrv, $state) {
  var user = {};

  function getUserInfo() {
    return user;
  }

  function isLogin() {
    return (!_.isUndefined(user) && null != user && "" != user && 0 < _.size(user));
  }

  var login = function (user) {
    var promise = reqSrv.login(user);

    promise.success(function (data, status, headers, config) {
      if (0 == data.ret) {
        user = data.user;
        $http.defaults.headers.common.Authorization = user.authToken;  // Step 1
        // A more secure approach would be to store the token in SharedPreferences for Android, and Keychain for iOS
        localStorageService.set('authorizationToken', user.authToken);
        localStorageService.set('userdata', user);

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
      delete $http.defaults.headers.common.Authorization;
      $rootScope.islogin = false;
      $rootScope.$broadcast('event:auth-logout-complete');
    });
  };

  var loginCancelled = function () {
    authService.loginCancelled();
  };

  function init() {
    if (localStorageService.get('authorizationToken')) {
      user = localStorageService.get('userdata');
    }
  }

  init();

  return {
    login: login,
    logout: logout,
    loginCancelled: loginCancelled,
    getUserInfo: getUserInfo,
    isLogin: isLogin,
  };
};

authSrv.$inject = ['$rootScope', '$http', 'authService', 'localStorageService', 'reqSrv', '$state'];

module.exports = authSrv;
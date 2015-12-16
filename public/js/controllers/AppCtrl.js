/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var appCtrl = function ($rootScope, $scope, $state, authSrv, menuSrv) {
  $rootScope.islogin = false;
  $rootScope.user = {};

  /**
   * userInit function
   */
  $rootScope.userInit = function () {
    if (authSrv.isLogin()) {
      $rootScope.$broadcast('event:auth-loginConfirmed', status);
    } else {
      $rootScope.$broadcast('event:auth-loginRequired', status);
    }
  };

  /**
   * 用户登出
   */
  $scope.logout = function () {
    authSrv.logout();
  };

  /**
   * 登陆后的初始化
   */
  $rootScope.init = function () {
    // 根据权限动态添加菜单
    //menuSrv.reloadMenu();
  };

  $scope.$on('event:auth-loginRequired', function (e, rejection) {
    console.log('handling login required');
    $rootScope.islogin = false;
    $state.go('login');
  });

  $scope.$on('event:auth-loginConfirmed', function () {
    $rootScope.islogin = true;

    $rootScope.user = authSrv.getUserInfo();

    // 初始化
    $rootScope.init();

    $state.go('dashboard');
  });

  $scope.$on('event:auth-login-failed', function (e, status) {
    var error = "Login failed.";
    if (status == 401) {
      error = "Invalid Username or Password.";
    }
    $scope.message = error;
  });

  $scope.$on('event:auth-logout-complete', function () {
    console.log("logout complete");
    $rootScope.islogin = false;
    $rootScope.user = {};
    $state.go('login');
    //$state.go('app.home', {}, {reload: true, inherit: false});
  });

  $scope.$on('event:menus-changed', function (e, menus) {
    // 更新菜单数据
    if(!_.isUndefined(menus) && !_.isNull(menus)){
      menuSrv.setMenusInfo(menus);
    }

    // 重载菜单
    menuSrv.reloadMenu();
  });
};

appCtrl.$inject = ['$rootScope', '$scope', '$state', 'authSrv', 'menuSrv'];

module.exports = appCtrl;
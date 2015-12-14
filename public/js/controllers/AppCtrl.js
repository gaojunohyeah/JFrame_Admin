/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var appCtrl = function($rootScope, $scope, $state, authSrv){
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
   * 登陆后根据权限添加菜单
   */
  $rootScope.addMenu = function(){
    var menu = nga.menu()
        .addChild(nga.menu()
          .title('用户管理')
          .icon('<span class="fa fa-users fa-fw"></span>')
          .active(function (path) {
            return path.indexOf('/customers') === 0;
          }) // active() is the function that determines if the menu is active
          .addChild(nga.menu(nga.entity('userinfo')).title('用户管理'))
      )
        .addChild(nga.menu()
          .title('后台管理')
          .icon('<span class="fa fa-users fa-fw"></span>')
          .active(function (path) {
            return path.indexOf('/customers') === 0;
          }) // active() is the function that determines if the menu is active
          .addChild(nga.menu(nga.entity('menu')).title('菜单管理'))
          .addChild(nga.menu(nga.entity('role')).title('角色管理'))
          .addChild(nga.menu(nga.entity('user')).title('gm用户管理'))
      )
      ;

    admin.menu(menu);
  };

  /**
   * 登陆后的初始化
   */
  $rootScope.init = function(){
    // 根据权限动态添加菜单
    $rootScope.addMenu();
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
};

appCtrl.$inject = ['$rootScope', '$scope', '$state', 'authSrv'];

module.exports = appCtrl;
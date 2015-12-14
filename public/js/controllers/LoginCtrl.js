/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var loginCtrl = function ($rootScope, $scope, $state, authSrv) {
  $scope.user = {
    username: '',
    password: '',
  };

  /**
   * 用户登陆
   */
  $scope.login = function () {
    $scope.message = "";

    authSrv.login($scope.user);
  };
};

loginCtrl.$inject = ['$rootScope', '$scope', '$state', 'authSrv'];

module.exports = loginCtrl;
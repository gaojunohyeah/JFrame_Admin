/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var fn = function ($rootScope, $location) {
  /**
   * 登陆监听，如果没有登陆，则跳转登陆页面
   *
   * @param event
   * @param toState
   */
  function routeChangeStart(event, toState) {
    //console.log(toState);
    if (("login" != toState.name || "404" != toState.name)
      && !$rootScope.islogin) {
      $location.path('login');  //设置路由地址
    }
  }

  $rootScope.$on('$stateChangeStart', routeChangeStart);
};

module.exports = fn;


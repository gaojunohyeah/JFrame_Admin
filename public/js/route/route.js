/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var route = function ($urlRouterProvider, $stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'loginCtrl',
  });

  $stateProvider.state('404', {
    url: '/404',
    templateUrl: '/views/404.html',
  });

  $urlRouterProvider.when('', '/login');
  $urlRouterProvider.otherwise('/404');
};

module.exports = route;
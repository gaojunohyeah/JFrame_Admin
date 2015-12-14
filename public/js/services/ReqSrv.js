/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var reqSrv = function ($http) {
  var host = config.local_url;
  return {
    // login request
    login: function (user) {
      return $http.post(host + 'login', {user: user}
        , {ignoreAuthModule: true});
    },
    // logout request
    logout: function () {
      return $http.post(host + 'logout', {}, {ignoreAuthModule: true});
    },
    // game request
    game: function () {
      return $http.post(host + 'game', {});
    },
  }
};

reqSrv.$inject = ['$http'];

module.exports = reqSrv;
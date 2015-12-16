/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

module.exports = function (app) {
  app.factory('authSrv', require('./AuthSrv'));

  app.factory('reqSrv', require('./ReqSrv'));

  app.factory('menuSrv', require('./MenuSrv'));
};
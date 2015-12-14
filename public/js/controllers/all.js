/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

module.exports = function (app) {
  app.controller('appCtrl', require('./AppCtrl'));

  app.controller('loginCtrl', require('./LoginCtrl'));

};
/**
 * Created by gaojun on 15/10/26.
 */

'use strict';

var routes = require('../routes/index');

module.exports = function (app) {
  app.use('/', routes);

};
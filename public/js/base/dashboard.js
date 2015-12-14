/**
 * Created by gaojun on 15/12/12.
 */

'use strict';

module.exports = function () {
  return nga.dashboard()
    .template(require('../../views/dashboard.html'));
};
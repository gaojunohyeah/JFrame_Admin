/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var userinfo = nga.entity('userinfo');

userinfo.listView().fields([
  nga.field('name'),
  nga.field('username'),
  nga.field('email')
]);

module.exports = userinfo;
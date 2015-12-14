/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var role = nga.entity('role');

role.listView().fields([
  nga.field('id'),
  nga.field('name'),
  nga.field('menu')
]);

module.exports = role;
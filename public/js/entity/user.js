/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var user = nga.entity('user');

user.listView().fields([
  nga.field('id'),
  nga.field('username'),
  nga.field('nickname'),
  nga.field('role', 'reference')
    .label('Role')
    .targetEntity(admin.getEntity('role'))
    .targetField(nga.field('name')),
  nga.field('state')
]);

module.exports = user;
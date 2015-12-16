/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var GM_User = nga.entity('GM_User');

GM_User.listView().fields([
  nga.field('id'),
  nga.field('username'),
  nga.field('nickname'),
  nga.field('role', 'reference')
    .label('Role')
    .targetEntity(admin.getEntity('GM_Role'))
    .targetField(nga.field('name')),
  nga.field('state')
]);

// add
GM_User.creationView().fields([
  nga.field('username')
    .label('gm账号')
    .validation({required: true, minlength: 3, maxlength: 20}),
  nga.field('password', 'password')
    .label('gm密码')
    .validation({required: true}),
  nga.field('nickname')
    .label('昵称')
    .validation({required: true, minlength: 1, maxlength: 20}),
  nga.field('role', 'reference')
    .label('角色')
    .targetEntity(admin.getEntity('GM_Role'))
    .targetField(nga.field('name'))
    .validation({required: true}),
  nga.field('state', 'choice')
    .label('状态')
    .choices([
      {label: '禁用', value: 0},
      {label: '正常', value: 1}])
    .validation({required: true}),
]);

// edit
GM_User.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('id')
      .label('gm用户id')
      .editable(false),
    nga.field('username')
      .label('gm账号')
      .editable(false),
    nga.field('nickname')
      .label('昵称')
      .validation({required: true, minlength: 1, maxlength: 20}),
    nga.field('role', 'reference')
      .label('角色')
      .targetEntity(admin.getEntity('GM_Role'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('state', 'choice')
      .label('状态')
      .choices([
        {label: '禁用', value: 0},
        {label: '正常', value: 1}])
      .validation({required: true}),
  ]);

module.exports = GM_User;
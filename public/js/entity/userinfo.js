/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var UserInfo = nga.entity('UserInfo');

// list
UserInfo.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('username')
      .label('账号'),
    nga.field('email')
      .label('邮箱'),
    nga.field('telephone')
      .label('手机号'),
    nga.field('nickname')
      .label('昵称'),
    nga.field('img')
      .label('头像'),
    nga.field('state', 'choice')
      .label('状态')
      .choices([
        {label: '禁用', value: 0},
        {label: '正常', value: 1}])
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('username')
      .label('账号'),
    nga.field('email', 'email')
      .label('邮箱'),
    nga.field('telephone')
      .label('手机号'),
    nga.field('nickname')
      .label('昵称')
  ]);

// edit
UserInfo.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('username')
      .label('账号'),
    nga.field('email', 'email')
      .label('邮箱'),
    nga.field('telephone', 'number')
      .label('手机号'),
    nga.field('nickname')
      .label('昵称')
      .validation({required: true, minlength: 1, maxlength: 20}),
    nga.field('img')
      .label('头像'),
    nga.field('state', 'choice')
      .label('状态')
      .choices([
        {label: '禁用', value: 0},
        {label: '正常', value: 1}])
      .validation({required: true})
  ]);

module.exports = UserInfo;
/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var GM_Menu = nga.entity('GM_Menu');

// list
GM_Menu.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('id')
      .label('ID'),
    nga.field('name')
      .label('菜单名称'),
    nga.field('key')
      .label('实体key'),
    //nga.field('menu')
    //  .title('菜单层级'),
    nga.field('parent', 'reference')
      .label('父菜单')
      .targetEntity(GM_Menu)
      .targetField(nga.field('name')),
    nga.field('isEntity', 'choice')
      .label('绑定实体')
      .choices([
        {label: '否', value: 0},
        {label: '是', value: 1}]),
    nga.field('indexNo')
      .label('排序'),
  ])
  .listActions(['edit', 'delete']);

// add
GM_Menu.creationView()
  .fields([
    nga.field('name')
      .label('菜单名称')
      .validation({required: true, minlength: 1, maxlength: 20}),
    nga.field('key')
      .label('实体key')
      .attributes({placeholder: '绑定的实体key'})
      .validation({minlength: 1, maxlength: 20}),
    //nga.field('menu')
    //  .label('菜单层级')
    //  .validation({required: true}),
    //nga.field('parent', 'reference')
    //  .label('父菜单id')
    //  .targetEntity(menu) // Select a target Entity
    //  .targetField(nga.field('id')),
    nga.field('parent', 'number')
      .label('父菜单id')
      .attributes({value: 0, placeholder: '没有父菜单则填0'}),
    nga.field('isEntity', 'choice')
      .label('绑定实体')
      .choices([
        {label: '否', value: 0},
        {label: '是', value: 1}])
      .validation({required: true}),
    nga.field('link')
      .label('关联页面')
      .attributes({placeholder: '如果绑定了实体则不填'}),
    nga.field('active')
      .label('激活')
      .attributes({placeholder: '激活'}),
    nga.field('icon')
      .label('图标')
      .attributes({placeholder: 'css class名称,多个用空格分隔'}),
    nga.field('indexNo', 'number')
      .label('排序')
      .validation({required: true}),
  ]);

// edit
GM_Menu.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('id')
      .label('菜单id')
      .editable(false),
    nga.field('name')
      .label('菜单名称')
      .validation({required: true, minlength: 1, maxlength: 20}),
    nga.field('key')
      .label('实体key')
      .attributes({placeholder: '绑定的实体key'})
      .validation({minlength: 1, maxlength: 20}),
    nga.field('parent', 'number')
      .label('父菜单id')
      .attributes({value: 0, placeholder: '没有父菜单则填0'}),
    nga.field('isEntity', 'choice')
      .label('绑定实体')
      .choices([
        {label: '否', value: 0},
        {label: '是', value: 1}])
      .validation({required: true}),
    nga.field('link')
      .label('关联页面')
      .attributes({placeholder: '如果绑定了实体则不填'}),
    nga.field('active')
      .label('激活')
      .attributes({placeholder: '激活'}),
    nga.field('icon')
      .label('图标')
      .attributes({placeholder: 'css class名称,多个用空格分隔'}),
    nga.field('indexNo', 'number')
      .label('排序')
      .validation({required: true}),
  ]);


module.exports = GM_Menu;
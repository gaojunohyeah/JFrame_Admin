/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var Car = nga.entity('Car');

// list
Car.listView()
  .fields([
    nga.field('sellId', 'reference')
      .label('车主')
      .targetEntity(admin.getEntity('UserInfo'))
      .targetField(nga.field('nickname')),
    nga.field('appraiserId', 'reference')
      .label('评估师')
      .targetEntity(admin.getEntity('UserInfo'))
      .targetField(nga.field('nickname')),
    nga.field('brandId', 'reference')
      .label('品牌')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name')),
    nga.field('modelId', 'reference')
      .label('车辆型号')
      .targetEntity(admin.getEntity('CarModel'))
      .targetField(nga.field('name')),
    nga.field('price', 'number')
      .label('价格(万)'),
    nga.field('city', 'reference')
      .label('城市')
      .targetEntity(admin.getEntity('City'))
      .targetField(nga.field('name'))
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('sellId')
      .label('车主id'),
    nga.field('sellUserName')
      .label('车主账号'),
    nga.field('appraiserName')
      .label('评估师'),
    nga.field('brandId', 'reference')
      .label('品牌')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name')),
    nga.field('modelName')
      .label('车辆型号'),
    nga.field('price', 'number')
      .label('价格'),
    nga.field('city', 'reference')
      .label('城市')
      .targetEntity(admin.getEntity('City'))
      .targetField(nga.field('name'))
  ]);

// add
Car.creationView()
  .fields([
    nga.field('sellId')//, 'reference')
      .label('车主')
      //.targetEntity(admin.getEntity('UserInfo'))
      //.targetField(nga.field('nickname'))
      .validation({required: true}),
    nga.field('sellDesc', 'wysiwyg')
      .label('车主描述')
      .validation({required: true}),
    nga.field('appraiserId')//, 'reference')
      .label('评估师')
      //.targetEntity(admin.getEntity('UserInfo'))
      //.targetField(nga.field('nickname'))
    .validation({required: true}),
    nga.field('appraiserDesc', 'wysiwyg')
      .label('评估师描述')
      .validation({required: true}),
    nga.field('brandId', 'reference')
      .label('品牌')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('modelId', 'reference')
      .label('车辆型号')
      .targetEntity(admin.getEntity('CarModel'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('price', 'number')
      .label('价格(万)')
      .validation({required: true}),
    nga.field('distance', 'number')
      .label('行驶里程(公里)')
      .validation({required: true}),
    nga.field('startTime', 'date')
      .label('上牌时间')
      .validation({required: true}),
    nga.field('city', 'reference')
      .label('城市')
      .targetEntity(admin.getEntity('City'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('showImg', 'file')
      .label('展示图片')
      .uploadInformation(config.default_file_upload),
    nga.field('tag', 'choices')
      .label('特殊标签'),
  ]);

// edit
Car.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('sellId')//, 'reference')
      .label('车主')
      //.targetEntity(admin.getEntity('UserInfo'))
      //.targetField(nga.field('nickname'))
      .validation({required: true}),
    nga.field('sellDesc', 'wysiwyg')
      .label('车主描述')
      .validation({required: true}),
    nga.field('appraiserId')//, 'reference')
      .label('评估师')
      //.targetEntity(admin.getEntity('UserInfo'))
      //.targetField(nga.field('nickname'))
      .validation({required: true}),
    nga.field('appraiserDesc', 'wysiwyg')
      .label('评估师描述')
      .validation({required: true}),
    nga.field('brandId', 'reference')
      .label('品牌')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('modelId', 'reference')
      .label('车辆型号')
      .targetEntity(admin.getEntity('CarModel'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('price', 'number')
      .label('价格(万)')
      .validation({required: true}),
    nga.field('distance', 'number')
      .label('行驶里程(公里)')
      .validation({required: true}),
    nga.field('startTime', 'date')
      .label('上牌时间')
      .validation({required: true}),
    nga.field('city', 'reference')
      .label('城市')
      .targetEntity(admin.getEntity('City'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    //nga.field('showImg', 'file')
    //  .label('展示图片')
    //  .uploadInformation(config.default_file_upload),
    nga.field('tag', 'choices')
      .label('特殊标签'),
  ]);

module.exports = Car;
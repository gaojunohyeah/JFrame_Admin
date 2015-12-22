/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var CarModel = nga.entity('CarModel');

// list
CarModel.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('brandId', 'reference')
      .label('品牌名')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name')),
    nga.field('name')
      .label('型号名称'),
    nga.field('carType', 'reference')
      .label('车型')
      .targetEntity(admin.getEntity('CarType'))
      .targetField(nga.field('name')),
    nga.field('engine')
      .label('发动机')
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('brandId', 'reference')
      .label('品牌名')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name')),
    nga.field('name')
      .label('型号名称'),
    nga.field('carType', 'reference')
      .label('车型')
      .targetEntity(admin.getEntity('CarType'))
      .targetField(nga.field('name'))
  ]);

// add
CarModel.creationView()
  .fields([
    nga.field('brandId', 'reference')
      .label('品牌名')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('name')
      .label('型号名称')
      .validation({required: true}),
    nga.field('carType', 'reference')
      .label('车型')
      .targetEntity(admin.getEntity('CarType'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('engine')
      .label('发动机')
      .validation({required: true})
  ]);

// edit
CarModel.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('brandId', 'reference')
      .label('品牌名')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('name')
      .label('型号名称')
      .validation({required: true}),
    nga.field('carType', 'reference')
      .label('车型')
      .targetEntity(admin.getEntity('CarType'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('engine')
      .label('发动机')
      .validation({required: true})
  ]);

module.exports = CarModel;
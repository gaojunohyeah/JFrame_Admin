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
    nga.field('brandSeriesId', 'reference')
      .label('品牌系列')
      .targetEntity(admin.getEntity('BrandSeries'))
      .targetField(nga.field('name')),
    nga.field('name')
      .label('型号名称'),
    nga.field('carType', 'reference')
      .label('车型')
      .targetEntity(admin.getEntity('CarType'))
      .targetField(nga.field('name')),
    nga.field('engineId', 'reference')
      .label('发动机')
      .targetEntity(admin.getEntity('CarEngine'))
      .targetField(nga.field('name')),
    nga.field('transmission', 'choice')
      .label('变速箱')
      .choices([
        {label: '自动', value: 0},
        {label: '手动', value: 1}])
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('brandSeriesId', 'reference')
      .label('品牌系列')
      .targetEntity(admin.getEntity('BrandSeries'))
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
    nga.field('name')
      .label('型号名称')
      .validation({required: true}),
    nga.field('brandSeriesId', 'reference')
      .label('品牌系列')
      .targetEntity(admin.getEntity('BrandSeries'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('carType', 'reference')
      .label('车型')
      .targetEntity(admin.getEntity('CarType'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('engineId', 'reference')
      .label('发动机')
      .targetEntity(admin.getEntity('CarEngine'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('transmission', 'choice')
      .label('变速箱')
      .choices([
        {label: '自动', value: 0},
        {label: '手动', value: 1}])
      .validation({required: true})
  ]);

// edit
CarModel.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('name')
      .label('型号名称')
      .validation({required: true}),
    nga.field('brandSeriesId', 'reference')
      .label('品牌系列')
      .targetEntity(admin.getEntity('BrandSeries'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('carType', 'reference')
      .label('车型')
      .targetEntity(admin.getEntity('CarType'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('engineId', 'reference')
      .label('发动机')
      .targetEntity(admin.getEntity('CarEngine'))
      .targetField(nga.field('name'))
      .validation({required: true}),
    nga.field('transmission', 'choice')
      .label('变速箱')
      .choices([
        {label: '自动', value: 0},
        {label: '手动', value: 1}])
      .validation({required: true})
  ]);

module.exports = CarModel;
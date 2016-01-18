/**
 * Created by gaojun on 15/12/26.
 */

'use strict';

var BrandSeries = nga.entity('BrandSeries');

// list
BrandSeries.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('brandId', 'reference')
      .label('品牌')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name')),
    nga.field('name')
      .label('系列名称')
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('brandId', 'reference')
      .label('品牌')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name')),
    nga.field('name')
      .label('系列名称')
  ]);

// add
BrandSeries.creationView()
  .fields([
    nga.field('name')
      .label('系列名称')
      .validation({required: true}),
    nga.field('brandId', 'reference')
      .label('品牌')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name'))
      .validation({required: true})
  ]);

// edit
BrandSeries.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('name')
      .label('系列名称')
      .validation({required: true}),
    nga.field('brandId', 'reference')
      .label('品牌')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('name'))
      .validation({required: true})
  ]);

module.exports = BrandSeries;
/**
 * Created by gaojun on 15/12/26.
 */

'use strict';

var CarColor = nga.entity('CarColor');

// list
CarColor.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('name')
      .label('颜色名称')
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('name')
      .label('颜色名称')
  ]);

// add
CarColor.creationView()
  .fields([
    nga.field('name')
      .label('颜色名称')
      .validation({required: true})
  ]);

// edit
CarColor.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('name')
      .label('颜色名称')
      .validation({required: true})
  ]);

module.exports = CarColor;
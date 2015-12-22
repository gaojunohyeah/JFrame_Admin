/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var CarType = nga.entity('CarType');

// list
CarType.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('name')
      .label('车型名称')
  ])
  .listActions(['edit', 'delete']);

// add
CarType.creationView()
  .fields([
    nga.field('name')
      .label('车型名称')
      .validation({required: true})
  ]);

// edit
CarType.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('name')
      .label('车型名称')
      .validation({required: true})
  ]);

module.exports = CarType;
/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var Tags = nga.entity('Tags');

// list
Tags.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('name')
      .label('标签名')
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('name')
      .label('标签名')
  ]);

// add
Tags.creationView()
  .fields([
    nga.field('name')
      .label('标签名')
      .validation({required: true})
  ]);

// edit
Tags.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('name')
      .label('标签名')
      .validation({required: true})
  ]);

module.exports = Tags;
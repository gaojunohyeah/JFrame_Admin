/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var Brand = nga.entity('Brand');

var letterChoice = [];
_.forEach(enums.base.letter, function (value, key) {
  var c = {
    label: key,
    value: value
  };

  letterChoice.push(c);
});

// list
Brand.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('name')
      .label('品牌名称'),
    nga.field('letter', 'choice')
      .label('首字母')
      .choices(letterChoice)
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('name')
      .label('品牌名称'),
    nga.field('letter', 'choice')
      .label('首字母')
      .choices(letterChoice)
  ]);

// add
Brand.creationView()
  .fields([
    nga.field('name')
      .label('品牌名称')
      .validation({required: true}),
    nga.field('letter', 'choice')
      .label('首字母')
      .choices(letterChoice)
      .validation({required: true})
  ]);

// edit
Brand.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('name')
      .label('品牌名称')
      .validation({required: true}),
    nga.field('letter', 'choice')
      .label('首字母')
      .choices(letterChoice)
      .validation({required: true})
  ]);

module.exports = Brand;
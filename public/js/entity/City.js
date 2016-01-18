/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var City = nga.entity('City');

var areaChoice = [];
_.forEach(enums.area, function (value, key) {
  var c = {
    label: value.name,
    value: value.value
  };

  areaChoice.push(c);
});

// list
City.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('name')
      .label('城市名'),
    nga.field('area', 'choice')
      .label('地域')
      .choices(areaChoice),
    nga.field('hot', 'choice')
      .label('热门')
      .choices([
        {label: '否', value: 0},
        {label: '是', value: 1}])
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('name')
      .label('城市名'),
    nga.field('area', 'choice')
      .label('地域')
      .choices(areaChoice)
  ]);

// add
City.creationView()
  .fields([
    nga.field('name')
      .label('城市名')
      .validation({required: true}),
    nga.field('area', 'choice')
      .label('地域')
      .choices(areaChoice)
      .validation({required: true}),
    nga.field('hot', 'choice')
      .label('热门')
      .choices([
        {label: '否', value: 0},
        {label: '是', value: 1}])
      .validation({required: true})
  ]);

// edit
City.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('name')
      .label('城市名')
      .validation({required: true}),
    nga.field('area', 'choice')
      .label('地域')
      .choices(areaChoice)
      .validation({required: true}),
    nga.field('hot', 'choice')
      .label('热门')
      .choices([
        {label: '否', value: 0},
        {label: '是', value: 1}])
      .validation({required: true})
  ]);

module.exports = City;
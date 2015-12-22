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
      .choices(areaChoice)
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
      .validation({required: true})
  ]);

module.exports = City;
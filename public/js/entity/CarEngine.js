/**
 * Created by gaojun on 15/12/26.
 */

'use strict';

var CarEngine = nga.entity('CarEngine');

var emissionChoice = [];
_.forEach(enums.base.emission, function (value, key) {
  var c = {
    label: value,
    value: key + 1
  };

  emissionChoice.push(c);
});

// list
CarEngine.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('name')
      .label('发动机名称'),
    nga.field('key')
      .label('发动机型号'),
    nga.field('emission')
      .label('排量'),
    nga.field('emissionType', 'choice')
      .label('排放标准')
      .choices(emissionChoice),
    nga.field('intake')
      .label('进气系统'),
    nga.field('maxPs')
      .label('最大马力'),
    nga.field('maxRpm')
      .label('最大功率转速'),
    nga.field('fuelGrade')
      .label('燃油标号')
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('name')
      .label('发动机名称'),
    nga.field('key')
      .label('发动机型号')
  ]);

// add
CarEngine.creationView()
  .fields([
    nga.field('name')
      .label('发动机名称')
      .validation({required: true}),
    nga.field('key')
      .label('发动机型号')
      .validation({required: true}),
    nga.field('emission', 'number')
      .label('排量')
      .validation({required: true}),
    nga.field('emissionType', 'choice')
      .label('排放标准')
      .choices(emissionChoice)
      .validation({required: true}),
    nga.field('intake')
      .label('进气系统')
      .validation({required: true}),
    nga.field('maxPs', 'number')
      .label('最大马力')
      .validation({required: true}),
    nga.field('maxRpm', 'number')
      .label('最大功率转速')
      .validation({required: true}),
    nga.field('fuelGrade')
      .label('燃油标号')
      .validation({required: true})
  ]);

// edit
CarEngine.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('name')
      .label('发动机名称')
      .validation({required: true}),
    nga.field('key')
      .label('发动机型号')
      .validation({required: true}),
    nga.field('emission', 'number')
      .label('排量')
      .validation({required: true}),
    nga.field('emissionType', 'choice')
      .label('排放标准')
      .choices(emissionChoice)
      .validation({required: true}),
    nga.field('intake')
      .label('进气系统')
      .validation({required: true}),
    nga.field('maxPs', 'number')
      .label('最大马力')
      .validation({required: true}),
    nga.field('maxRpm', 'number')
      .label('最大功率转速')
      .validation({required: true}),
    nga.field('fuelGrade')
      .label('燃油标号')
      .validation({required: true})
  ]);

module.exports = CarEngine;
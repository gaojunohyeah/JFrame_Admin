/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var Appraiser = nga.entity('Appraiser');

var areaChoice = [];
_.forEach(enums.area, function (value, key) {
  var c = {
    label: value.name,
    value: value.value
  };

  areaChoice.push(c);
});

// list
Appraiser.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('nickname')
      .label('评估师名称'),
    nga.field('title')
      .label('职称'),
    nga.field('telephone')
      .label('手机号'),
    nga.field('state', 'choice')
      .label('是否激活')
      .choices([
        {label: '否', value: 0},
        {label: '是', value: 1}])
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('nickname')
      .label('评估师名称'),
    nga.field('title')
      .label('职称'),
    nga.field('telephone')
      .label('手机号')
  ]);

// add
Appraiser.creationView()
  .fields([
    nga.field('nickname')
      .label('评估师名称')
      .validation({required: true}),
    nga.field('title')
      .label('职称')
      .validation({required: true}),
    nga.field('telephone', 'number')
      .label('手机号')
      .validation({required: true}),
    //nga.field('showImg', 'file')
    //  .label('展示图片')
    //  .uploadInformation(config.default_file_upload),
    nga.field('state', 'choice')
      .label('是否激活')
      .choices([
        {label: '否', value: 0},
        {label: '是', value: 1}])
      .validation({required: true})
  ]);

// edit
Appraiser.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('nickname')
      .label('评估师名称')
      .validation({required: true}),
    nga.field('title')
      .label('职称')
      .validation({required: true}),
    nga.field('telephone', 'number')
      .label('手机号')
      .validation({required: true}),
    //nga.field('showImg', 'file')
    //  .label('展示图片')
    //  .uploadInformation(config.default_file_upload),
    nga.field('state', 'choice')
      .label('是否激活')
      .choices([
        {label: '否', value: 0},
        {label: '是', value: 1}])
      .validation({required: true})
  ]);

module.exports = Appraiser;
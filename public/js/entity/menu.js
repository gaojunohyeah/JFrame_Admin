/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var menu = nga.entity('menu');

menu.listView()
  .title('Comments')
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('id'),
    nga.field('name'),
    nga.field('menu'),
    nga.field('parent'),
    nga.field('isEntity')
  ]
);

module.exports = menu;
/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var GM_Role = nga.entity('GM_Role');

// list
GM_Role.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
  nga.field('id'),
  nga.field('name'),
  nga.field('menu')
]);


module.exports = GM_Role;
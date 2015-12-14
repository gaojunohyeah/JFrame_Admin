/**
 * Created by gaojun on 15/12/12.
 */

'use strict';

// 登陆请求
module.exports = function (res, reqData, mName) {
  var name = mName.substring(0, 1).toUpperCase() + mName.substring(1);
  var manager = JF.ma[name + 'Manager'];

  var query = null;
  var _page = reqData._page;
  var _perPage = reqData._perPage;
  var _sort = reqData._sort;
  var _order = reqData._order;

  manager.getList(res, query, name, _page, _perPage, _sort, _order);
};
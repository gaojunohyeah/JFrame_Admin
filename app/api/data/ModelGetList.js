/**
 * Created by gaojun on 15/12/12.
 */

'use strict';

module.exports = function (res, reqData, mName) {
  var name = mName.substring(0, 1).toUpperCase() + mName.substring(1);
  var manager = JF.ma[name + 'Manager'];

  var query = {};
  var _page,
    _perPage,
    _sort,
    _order;

  // 参数赋值
  _.forEach(reqData, function (value, key) {
    switch (key) {
      case '_page':
        _page = value;
        break;
      case '_perPage':
        _perPage = value;
        break;
      case '_sort':
        _sort = value;
        break;
      case '_order':
        _order = value;
        break;
      default :
        query[key] = value;
    }
  });

  manager.getList(res, query, name, _page, _perPage, _sort, _order);
};
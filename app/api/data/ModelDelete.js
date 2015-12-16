/**
 * Created by gaojun on 15/12/12.
 */

'use strict';

module.exports = function (res, mName, id) {
  var name = mName.substring(0, 1).toUpperCase() + mName.substring(1);
  var manager = JF.ma[name + 'Manager'];

  manager.delById(res, name, id);
};
/**
 * Created by gaojun on 15/11/3.
 */

'use strict';

/**
 * 构建查询条件
 *
 * @param value 参数值
 * @param operator 参数操作符
 * @return {{}}
 */
exports.buildQueryParam = function (value, operator) {
  var queryParam = {};

  // 根据操作符进行参数处理
  switch (operator) {
    case JF.enums.db.gt:
    case JF.enums.db.gte:
    case JF.enums.db.lt:
    case JF.enums.db.lte:
    case JF.enums.db.ne:
      queryParam[operator] = value;
      break;
    case JF.enums.db.like:
      queryParam[operator] = '%' + value + '%';
      break;
    // 其他全部按 equal 处理
    case JF.enums.db.e:
    default :
      queryParam = value;
      break;
  }

  return queryParam;
};

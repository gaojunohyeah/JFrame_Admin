/**
 * Created by gaojun on 15/11/3.
 */

'use strict';

/**
 * 判断是否是开发环境
 *
 * @returns {boolean}
 */
exports.checkDevEnv = function(){
  var env = app.get('env');

  return env === 'development';
};

/**
 * 异常统一过滤
 *
 * @param error 异常对象
 * @return {*} 异常编号，具体查看JF.enums.ret
 */
exports.errorFilter = function(error){
  var evalue = error.message;
  //console.log(evalue);
  if(!JF.util.check.NonPositiveCheck(evalue)){
    evalue = JF.enums.ret.INNER_ERROR
  }

  return evalue;
};
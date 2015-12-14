/**
 * 验证基类
 * 一些通用的正则规则验证等
 *
 * Created by gaojun on 15/11/3.
 */

'use strict';

/**
 * 验证两次密码正确性
 *
 * @param pwd1 第一次密码
 * @param pwd2 再次密码
 * @returns {boolean} 是否匹配
 */
exports.passwordCheck = function (pwd1, pwd2) {
  return _.isEqual(pwd1, pwd2)
    && !_.isUndefined(pwd1)
    && !_.isNull(pwd1)
    && pwd1.length <= JF.enums.user.PWD_LEN_LIMIT;
};

/**
 * 判断是否是正确的邮箱格式
 * 验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
 * 第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
 * 第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
 * 而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位
 *
 * @param email 邮箱
 * @returns {boolean} 是否格式正确
 */
exports.emailRegCheck = function (email) {
  var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

  return reg.test(email);
};

/**
 * 验证邮箱正确性
 *
 * @param email 邮箱
 * @returns {boolean} 是否匹配
 */
exports.emailCheck = function (email) {
  return exports.emailRegCheck(email)
    && !_.isUndefined(email)
    && !_.isNull(email)
    && email.length <= JF.enums.user.EMAIL_LEN_LIMIT;
};

/**
 * 判断是否是正确的手机格式
 * 验证规则：11位数字，以1开头。
 *
 * @param telephone 手机
 * @returns {boolean} 是否格式正确
 */
exports.telephoneCheck = function (telephone) {
  var reg = /^1\d{10}$/;

  return reg.test(telephone);
};

/**
 * 非正整数验证
 *
 * @param number 数字
 * @returns {boolean} 是否格式正确
 */
exports.NonPositiveCheck = function(number){
  var reg = /^((-\d+)|(0+))$/;

  return reg.test(number);
};

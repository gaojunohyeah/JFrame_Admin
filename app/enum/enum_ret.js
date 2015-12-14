/**
 * Created by gaojun on 15/11/3.
 */

'use strict';

module.exports = {
  /*
   * 返回标识
   * 基础 		-1 -> -100
   * 用户 		-101 -> -200
   */

  // 基础 		-1 -> -100
  SUCCESS:              0,      // 成功
  ERROR:                -1,     // 错误
  PARAM_ERROR:          -2,     // 参数有误
  INNER_ERROR:          -99,    // 内部异常

  // 用户 		-101 -> -200
  USER_PW_UNEQUAL:      -101,   // 两次密码不一致
  USER_EMAIL_REG:       -102,   // 邮箱规则错误
  USER_EMAIL_EXIST:     -103,   // 邮箱已存在
  USER_EMAIL_SRV:       -104,   // 邮件服务器错误
  USER_NO_EXIST:        -105,   // 用户不存在
  USER_TOKEN_ERROR:     -106,   // token失效
};
/**
 * Created by gaojun on 15/11/4.
 */

'use strict';

var crypto = require('crypto');

/**
 * md5 加密
 *
 * @param sourceStr 原始字符串
 * @returns {*}
 */
exports.getMd5 = function(sourceStr){
  var md5 = crypto.createHash('md5');
  md5.update(sourceStr);

  return md5.digest('hex');
};

/**
 * sha1 加密
 *
 * @param sourceStr 原始字符串
 * @returns {*}
 */
exports.getSha1 = function(sourceStr){
  var sha1 = crypto.createHash('sha1');
  sha1.update(sourceStr);

  return sha1.digest('hex');
};
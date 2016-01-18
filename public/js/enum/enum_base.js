/**
 * Created by gaojun on 15/11/3.
 */

'use strict';

var letter = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

// 排放标准
var emission = ['国五', '国四及以上', '国三及以上', '国二及以上'];

module.exports = {
  letter: letter,
  emission: emission,
};
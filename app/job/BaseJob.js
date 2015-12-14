/**
 * Created by gaojun on 15/10/29.
 */

'use strict';

//var schedule = require('node-schedule');

var BaseJob = function(){
};

BaseJob.prototype.jobname = "BaseJob";

/**
 * 定时器初始化
 */
BaseJob.prototype.init = function(){
  console.log("start job -> " + this.jobname);
};

/**
 * 定时任务处理
 */
BaseJob.prototype.job = function(){
  console.log("do job -> " + this.jobname);
};

/**
 * 定时任务结束
 */
BaseJob.prototype.stop = function(){
  console.log("stop job -> " + this.jobname);
};

module.exports = BaseJob;
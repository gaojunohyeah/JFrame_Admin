/**
 * 0点任务
 * Created by gaojun on 15/10/29.
 */

'use strict';

var schedule = require('node-schedule');
var util = require('util');
var BaseJob = require(config.serverRoot + '/job/BaseJob');


var ZeroClockJob = function () {
  this.jobname = "ZeroClockJob";

  /**
   * 定时器初始化
   */
  this.init = function () {
    console.log("start job -> " + this.jobname);
    schedule.scheduleJob('0 0 0 * * *', this.job.bind(null, this.jobname, this.stop));
  };

  /**
   * 定时任务
   */
  this.job = function (jobname) {
    console.log("do job -> " + jobname);
  };
};

// 添加继承
util.inherits(ZeroClockJob, BaseJob);

module.exports = ZeroClockJob;
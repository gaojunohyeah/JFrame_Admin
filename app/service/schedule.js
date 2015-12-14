/**
 * Created by gaojun on 15/10/26.
 */

'use strict';

var schedule = require('node-schedule');
var cluster = require('cluster');

var TestJob = require(config.serverRoot + '/job/TestJob');
var ZeroClockJob = require(config.serverRoot + '/job/ZeroClockJob');

// 启动时需要启动的定时器
function init() {
  // 测试
  if (!cluster.worker) {
    console.log('init normal schedule job on worker -> test');

    // 启动job
    startJobs();
  }
  // 只有一个进程开启定时，其他不需要
  else if (cluster.worker && 1 === cluster.worker.id) {
    console.log('init normal schedule job on worker -> id is ' + cluster.worker.id);

    // 启动job
    startJobs();
  }
}

function startJobs(){
  // TestJob
  //var testJob = new TestJob();
  //testJob.init();

  // 0点任务
  var zeroClockJob = new ZeroClockJob();
  zeroClockJob.init();
}

// 启动
init();

// schedule 的一些方法，用于临时任务
module.exports = {
  /**
   * 添加延时任务，成功则返回job对象
   * @param delayTime 延迟时间(单位:毫秒)
   * @param callback 回调函数
   * @return job对象
   *
   * @example1:
   *  var a = 1,
   *  var b = "haha";
   *  JF.schedule.addSchedule(10, function (){
   *    console.log(a + b)
   *  });
   *
   * @example2:
   *  var a = 1,
   *  var b = "haha";
   *  JF.schedule.addSchedule(10, function (a,b){
   *    console.log(a + b)
   *  }.bind(null, a, b)
   *  );
   */
  addSchedule: function (delayTime, callback) {
    // 延迟时间有误
    if (delayTime <= 0) {
      return null;
    }

    // 计算延时时间
    var now = Date.now();
    var scTime = new Date(now + delayTime);

    // 添加延迟任务
    return schedule.scheduleJob(scTime, callback);
  },

  /**
   * 移除延时任务
   * @param job 延迟任务
   */
  cancelSchedule: function (job) {
    job.cancel();
  },
};
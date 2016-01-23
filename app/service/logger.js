/**
 * Created by gaojun on 15/11/7.
 */

'use strict';

var log4js = require('log4js');

log4js.configure({
  appenders: [
    {
      type: 'console',
      category: "console"

    }, //控制台输出
    {
      type: "dateFile",
      filename: 'logs/log.log',
      pattern: "-yyyy-MM-dd",
      //maxLogSize: 20480,
      //backups: 3,
      alwaysIncludePattern: true,
      category: 'dateFileLog'

    }//日期文件格式
  ],
  replaceConsole: true,   //替换console.log
  levels:{
    dateFileLog: 'debug'
  }
});

var dateFileLog = log4js.getLogger('dateFileLog');
var consoleLog = log4js.getLogger('console');

exports.init = function(){
  var log;
  //if('development' === app.get('env')){
  //  log = consoleLog;
  //}else{
  //  log = dateFileLog;
  //}
  log = dateFileLog;

  // 添加到express中间件
  app.use(log4js.connectLogger(log, {level:'INFO', format:':method :url'}));

  return log
};
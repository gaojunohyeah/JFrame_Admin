/**
 * Created by gaojun on 15/10/26.
 */

'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
  environment: 'development',
  host: 'http://192.168.111.103:3333',

  // 项目基础路径定义
  root: rootPath,
  serverRoot: rootPath + '/app',
  clientRoot: rootPath + '/public',

  // 上传文件相关
  uploadPath: rootPath + '/public/files/cache',
  carImgPath: rootPath + '/public/files/car',

  // 数据库相关参数
  DB_dbname: 'jframe_admin',
  DB_username: 'root',
  DB_password: '',
  DB_host: 'localhost',
  DB_port: 3306,
  DB_dialect: 'mysql',
  DB_maxpool: 5,
  DB_minpool: 0,

  DB_SERVER_dbname: 'jframe',
  DB_SERVER_username: 'root',
  DB_SERVER_password: '',
  DB_SERVER_host: 'localhost',
  DB_SERVER_port: 3306,
  DB_SERVER_dialect: 'mysql',
  DB_SERVER_maxpool: 5,
  DB_SERVER_minpool: 0,

  // redis相关参数
  RD_host: 'localhost',
  RD_port: 14001,
  RD_data_expire: 5 * 60, // 5分钟
  RD_sessiong_expire: 30 * 60, // 30分钟(session保存时间)
  RD_file_key: 'jframe_file_cache_key', // (临时文件缓存key)
  RD_file_expire: 60 * 60, // 60分钟(临时文件缓存保存时间)

  // app key
  APP_KEY: '5D31521F4BC986B0192A0ACFA3E1D354',

  // 邮件服务配置
  mail_base: '', //邮件基础服务，会影响邮件服务的初始化方式
  mail_service: 'Gmail',
  mail_host: 'smtp.163.com',
  mail_port: 25,
  mail_user: 'rajay2015@163.com',
  mail_pwd: 'cpdhtpjfxmnybrfg',

  mail_mailgun_key: 'key-74f6bc9717c2f67e0cce4b5e76d5dd86',
  mail_mailgun_domain: 'sandboxc47a484f71974546a51755d42e70ecbf.mailgun.org',

  mail_sendcloud_user: 'gaojunohyeah_test_aC7pDb',
  mail_sendcloud_key: 'CPATWsXIWeBtPl0R',

  mail_name: 'JFrame',
  mail_sender: 'JFrame <rajay2015@163.com>',

  gm_self_module: ['menu', 'role', 'user'],
  gm_game_host: 'http://192.168.111.103:3000/',
};
/**
 * Created by gaojun on 15/11/3.
 */

'use strict';

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var sc = require('nodemailer-sendcloud-transport');

var mailOption = {};

// 根据邮件服务可能有特殊处理
// mailgun 服务方式
if ("Mailgun" == config.mail_base) {
  var auth = {
    secureConnection: true, // 使用 SSL
    auth: {
      api_key: config.mail_mailgun_key,
      domain: config.mail_mailgun_domain,
    }
  };

  mailOption = mg(auth);
}
// sendcloud 服务方式
else if ("SendCloud" == config.mail_base) {
  auth = {
    secureConnection: true, // 使用 SSL
    auth: {
      api_user: config.mail_sendcloud_user,
      api_key: config.mail_sendcloud_key,
    }
  };

  mailOption = sc(auth);
}
// 其他服务方式
else if (!_.isUndefined(config.mail_base)
  && !_.isNull(config.mail_base)
  && !_.isEqual(config.mail_base, "")) {
  mailOption = {
    service: config.mail_service,
    secureConnection: true, // 使用 SSL
    auth: {
      user: config.mail_user,
      pass: config.mail_pwd,
    }
  }
}
// 其他方式
else {
  mailOption = {
    host: config.mail_host,
    port: config.mail_port,
    secureConnection: true, // 使用 SSL
    auth: {
      user: config.mail_user,
      pass: config.mail_pwd,
    }
  }
}

/**
 * 邮件发送对象
 */
var transporter = nodemailer.createTransport(mailOption);

exports.mail = transporter;
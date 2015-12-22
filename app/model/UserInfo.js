/**
 * UserInfo.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var UserInfo = sequelize.define('userinfo', {
    
      id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: true,
        field: "id",
        
        comment: "唯一ID",
        primaryKey: true,
        autoIncrement: true,
      },
    
      username: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
        field: "username",
        defaultValue: "",
        comment: "用户名",
        
      },
    
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
        field: "email",
        defaultValue: "",
        comment: "邮箱",
        
      },
    
      telephone: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
        field: "telephone",
        defaultValue: "0",
        comment: "手机号",
        
      },
    
      password: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: false,
        field: "password",
        defaultValue: "",
        comment: "密码",
        
      },
    
      nickname: {
        type: Sequelize.STRING(20),
        allowNull: true,
        unique: false,
        field: "nickname",
        defaultValue: "",
        comment: "昵称",
        
      },
    
      img: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: false,
        field: "img",
        defaultValue: "",
        comment: "头像",
        
      },
    
      state: {
        type: Sequelize.INTEGER(30),
        allowNull: true,
        unique: false,
        field: "state",
        defaultValue: 0,
        comment: "状态(0未激活,1已激活)",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['username','password',]
      },
      {
        unique: true,
        fields: ['email','password',]
      },
      {
        unique: true,
        fields: ['telephone','password',]
      },
      
    ],
  });

  UserInfo.sync();

  return UserInfo;
}

exports.UserInfo = function (sequelize) {
  return db_init(sequelize);
};
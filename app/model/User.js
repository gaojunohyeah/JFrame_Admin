/**
 * User.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var User = sequelize.define('user', {
    
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
    
      role: {
        type: Sequelize.INTEGER(5),
        allowNull: true,
        unique: false,
        field: "role",
        defaultValue: 0,
        comment: "角色",
        
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
      
    ],
  });

  User.sync();

  return User;
}

exports.User = function (sequelize) {
  return db_init(sequelize);
};
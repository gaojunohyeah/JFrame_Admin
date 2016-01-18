/**
 * Appraiser.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var Appraiser = sequelize.define('appraiser', {
    
      id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: true,
        field: "id",
        
        comment: "唯一ID",
        primaryKey: true,
        autoIncrement: true,
      },
    
      title: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
        field: "title",
        defaultValue: "",
        comment: "职称",
        
      },
    
      telephone: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
        field: "telephone",
        defaultValue: "0",
        comment: "手机号",
        
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
      
    ],
  });

  Appraiser.sync();

  return Appraiser;
}

exports.Appraiser = function (sequelize) {
  return db_init(sequelize);
};
/**
 * Car.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var Car = sequelize.define('car', {
    
      id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: true,
        field: "id",
        
        comment: "唯一ID",
        primaryKey: true,
        autoIncrement: true,
      },
    
      sellId: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: false,
        field: "sellId",
        defaultValue: 0,
        comment: "车主id",
        
      },
    
      sellDesc: {
        type: Sequelize.STRING(300),
        allowNull: true,
        unique: false,
        field: "sellDesc",
        defaultValue: "",
        comment: "车主描述",
        
      },
    
      appraiserId: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: false,
        field: "appraiserId",
        defaultValue: 0,
        comment: "评估师id",
        
      },
    
      appraiserDesc: {
        type: Sequelize.STRING(300),
        allowNull: true,
        unique: false,
        field: "sellDesc",
        defaultValue: "",
        comment: "评估师描述",
        
      },
    
      brandId: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: false,
        field: "brandId",
        defaultValue: 0,
        comment: "品牌id",
        
      },
    
      modelId: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: false,
        field: "modelId",
        defaultValue: 0,
        comment: "车辆型号id",
        
      },
    
      price: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: false,
        field: "price",
        defaultValue: 0,
        comment: "价格",
        
      },
    
      distance: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        unique: false,
        field: "distance",
        defaultValue: 0,
        comment: "行驶里程",
        
      },
    
      startTime: {
        type: Sequelize.STRING(10),
        allowNull: true,
        unique: false,
        field: "startTime",
        defaultValue: "",
        comment: "上牌时间",
        
      },
    
      city: {
        type: Sequelize.INTEGER(10),
        allowNull: true,
        unique: false,
        field: "city",
        defaultValue: 0,
        comment: "城市id",
        
      },
    
      showImg: {
        type: Sequelize.STRING(200),
        allowNull: true,
        unique: false,
        field: "showImg",
        defaultValue: "",
        comment: "展示图片",
        
      },
    
      tag: {
        type: Sequelize.STRING(20),
        allowNull: true,
        unique: false,
        field: "tag",
        defaultValue: "",
        comment: "特殊标签",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        unique: false,
        fields: ['sellId',]
      },
      {
        unique: false,
        fields: ['appraiserId',]
      },
      {
        unique: false,
        fields: ['city','brandId','price',]
      },
      
    ],
  });

  Car.sync();

  return Car;
}

exports.Car = function (sequelize) {
  return db_init(sequelize);
};
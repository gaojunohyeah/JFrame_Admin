/**
 * CarEngine.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var CarEngine = sequelize.define('carengine', {
    
      id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: true,
        field: "id",
        
        comment: "唯一ID",
        primaryKey: true,
        autoIncrement: true,
      },
    
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false,
        field: "name",
        defaultValue: "",
        comment: "名称",
        
      },
    
      key: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: false,
        field: "key",
        defaultValue: "",
        comment: "型号",
        
      },
    
      emission: {
        type: Sequelize.INTEGER(10),
        allowNull: true,
        unique: false,
        field: "emission",
        defaultValue: 0,
        comment: "排量",
        
      },
    
      emissionType: {
        type: Sequelize.INTEGER(2),
        allowNull: true,
        unique: false,
        field: "emissionType",
        defaultValue: 0,
        comment: "排放标准",
        
      },
    
      intake: {
        type: Sequelize.STRING(20),
        allowNull: true,
        unique: false,
        field: "intake",
        defaultValue: "",
        comment: "进气系统",
        
      },
    
      maxPs: {
        type: Sequelize.INTEGER(10),
        allowNull: true,
        unique: false,
        field: "maxPs",
        defaultValue: 0,
        comment: "最大马力",
        
      },
    
      maxRpm: {
        type: Sequelize.INTEGER(10),
        allowNull: true,
        unique: false,
        field: "maxRpm",
        defaultValue: 0,
        comment: "最大功率转速",
        
      },
    
      fuelGrade: {
        type: Sequelize.STRING(20),
        allowNull: true,
        unique: false,
        field: "fuelGrade",
        defaultValue: "",
        comment: "燃油标号",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        unique: false,
        fields: ['name',]
      },
      
    ],
  });

  CarEngine.sync();

  return CarEngine;
}

exports.CarEngine = function (sequelize) {
  return db_init(sequelize);
};
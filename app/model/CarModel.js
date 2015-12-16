/**
 * CarModel.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var CarModel = sequelize.define('carmodel', {
    
      id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: true,
        field: "id",
        
        comment: "唯一ID",
        primaryKey: true,
        autoIncrement: true,
      },
    
      brandId: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: false,
        field: "brandId",
        defaultValue: 0,
        comment: "品牌id",
        
      },
    
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: false,
        field: "name",
        defaultValue: "",
        comment: "型号名称",
        
      },
    
      carType: {
        type: Sequelize.INTEGER(2),
        allowNull: true,
        unique: false,
        field: "carType",
        defaultValue: 0,
        comment: "车型",
        
      },
    
      engine: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: false,
        field: "engine",
        defaultValue: "",
        comment: "发动机",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        unique: false,
        fields: ['brandId','carType',]
      },
      {
        unique: false,
        fields: ['carType',]
      },
      {
        unique: false,
        fields: ['name',]
      },
      
    ],
  });

  CarModel.sync();

  return CarModel;
}

exports.CarModel = function (sequelize) {
  return db_init(sequelize);
};
/**
 * City.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var City = sequelize.define('city', {
    
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
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: false,
        field: "name",
        defaultValue: "",
        comment: "城市名称",
        
      },
    
      area: {
        type: Sequelize.INTEGER(5),
        allowNull: true,
        unique: false,
        field: "area",
        defaultValue: 0,
        comment: "区域",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        unique: false,
        fields: ['area',]
      },
      
    ],
  });

  City.sync();

  return City;
}

exports.City = function (sequelize) {
  return db_init(sequelize);
};
/**
 * CarColor.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var CarColor = sequelize.define('carcolor', {
    
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
        comment: "颜色名称",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      
    ],
  });

  CarColor.sync();

  return CarColor;
}

exports.CarColor = function (sequelize) {
  return db_init(sequelize);
};
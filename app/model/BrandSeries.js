/**
 * BrandSeries.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var BrandSeries = sequelize.define('brandseries', {
    
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
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: false,
        field: "brandId",
        defaultValue: "",
        comment: "品牌系列",
        
      },
    
      name: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: false,
        field: "name",
        defaultValue: "",
        comment: "系列名称",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        unique: false,
        fields: ['brandId',]
      },
      {
        unique: false,
        fields: ['name',]
      },
      
    ],
  });

  BrandSeries.sync();

  return BrandSeries;
}

exports.BrandSeries = function (sequelize) {
  return db_init(sequelize);
};
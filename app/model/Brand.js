/**
 * Brand.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var Brand = sequelize.define('brand', {
    
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
        comment: "品牌名称",
        
      },
    
      letter: {
        type: Sequelize.INTEGER(2),
        allowNull: true,
        unique: false,
        field: "letter",
        defaultValue: 0,
        comment: "首字母",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        unique: false,
        fields: ['letter',]
      },
      
    ],
  });

  Brand.sync();

  return Brand;
}

exports.Brand = function (sequelize) {
  return db_init(sequelize);
};
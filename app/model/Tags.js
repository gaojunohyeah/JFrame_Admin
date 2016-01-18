/**
 * Tags.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var Tags = sequelize.define('tags', {
    
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
        comment: "推荐标签",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      
    ],
  });

  Tags.sync();

  return Tags;
}

exports.Tags = function (sequelize) {
  return db_init(sequelize);
};
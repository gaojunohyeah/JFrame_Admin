/**
 * Role.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var Role = sequelize.define('role', {
    
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
        comment: "角色名称",
        
      },
    
      menu: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false,
        field: "menu",
        defaultValue: "",
        comment: "菜单权限",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      
    ],
  });

  Role.sync();

  return Role;
}

exports.Role = function (sequelize) {
  return db_init(sequelize);
};
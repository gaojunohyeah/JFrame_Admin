/**
 * GM_Role.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var GM_Role = sequelize.define('gm_role', {
    
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

  GM_Role.sync();

  return GM_Role;
}

exports.GM_Role = function (sequelize) {
  return db_init(sequelize);
};
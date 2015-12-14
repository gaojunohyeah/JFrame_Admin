/**
 * Menu.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var Menu = sequelize.define('menu', {
    
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
        comment: "菜单名称",
        
      },
    
      key: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: false,
        field: "key",
        defaultValue: "",
        comment: "菜单key",
        
      },
    
      menu: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        unique: false,
        field: "menu",
        defaultValue: 1,
        comment: "菜单层级",
        
      },
    
      parent: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        unique: false,
        field: "parent",
        defaultValue: 0,
        comment: "父菜单id",
        
      },
    
      isEntity: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        unique: false,
        field: "isEntity",
        defaultValue: 0,
        comment: "是否是实体",
        
      },
    
      link: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: false,
        field: "link",
        defaultValue: "",
        comment: "关联页面",
        
      },
    
      active: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: false,
        field: "active",
        defaultValue: "",
        comment: "激活",
        
      },
    
      icon: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: false,
        field: "icon",
        defaultValue: "",
        comment: "图标",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      
    ],
  });

  Menu.sync();

  return Menu;
}

exports.Menu = function (sequelize) {
  return db_init(sequelize);
};
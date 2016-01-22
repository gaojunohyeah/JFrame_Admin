/**
 * CarImg.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var CarImg = sequelize.define('carimg', {
    
      id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: true,
        field: "id",
        
        comment: "唯一ID",
        primaryKey: true,
        autoIncrement: true,
      },
    
      carId: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: false,
        field: "carId",
        defaultValue: 0,
        comment: "出售车辆id",
        
      },
    
      imgName: {
        type: Sequelize.STRING(50),
        allowNull: true,
        unique: false,
        field: "imgName",
        defaultValue: "",
        comment: "车辆图片名称",
        
      },
    
      imgType: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        unique: false,
        field: "imgType",
        defaultValue: 0,
        comment: "图片类型",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        unique: false,
        fields: ['carId',]
      },
      
    ],
  });

  CarImg.sync();

  return CarImg;
}

exports.CarImg = function (sequelize) {
  return db_init(sequelize);
};
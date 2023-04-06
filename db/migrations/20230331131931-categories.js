'use strict';
const { CATEGORY_TABLE } = require('../models/category.model');
const { DataTypes, Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name:{
        allowNull:false,
        unique:true,
        type:DataTypes.STRING,
      },
      image:{
        allowNull:false,
        type:DataTypes.STRING,
      },
      createdAt:{
        allowNull:false,
        type:DataTypes.DATE,
        field:'create_at',
        defaultValue: Sequelize.NOW
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE)
  }
};

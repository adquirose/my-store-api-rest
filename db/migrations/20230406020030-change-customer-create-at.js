'use strict';
const { DataTypes, Sequelize } = require('sequelize');

const { CUSTOMER_TABLE } = require('./../models/customer.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'created_at', {
      allowNull:false,
      type:DataTypes.DATE,
      field:'create_at',
      defaultValue: Sequelize.NOW
    });
  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};

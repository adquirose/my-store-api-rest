'use strict';
const { PRODUCT_TABLE, ProductSchema } = require('../models/product.model')
const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.addColumn(PRODUCT_TABLE, 'description', ProductSchema.description)
    await queryInterface.addColumn(PRODUCT_TABLE, 'category_id', ProductSchema.categoryId)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE)
    await queryInterface.removeColumn(PRODUCT_TABLE, 'description')
    await queryInterface.removeColumn(PRODUCT_TABLE, 'category_id')
  }
};

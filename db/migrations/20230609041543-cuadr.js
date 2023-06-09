'use strict';

const {cuadro_clinco_Schema,CUADRO_CLINICO_TABLE} = require('../models/cuadroClinico')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CUADRO_CLINICO_TABLE,cuadro_clinco_Schema)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

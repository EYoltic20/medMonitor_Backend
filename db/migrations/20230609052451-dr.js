'use strict';

const {doctorSchemas,DOCTOR_TABLE,Doctor} = require('../models/doctorModel')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(DOCTOR_TABLE,doctorSchemas);
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

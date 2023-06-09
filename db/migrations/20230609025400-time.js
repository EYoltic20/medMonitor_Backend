'use strict';

const {SINTOM_TABLE,SintomaSchema} = require('../models/sintomasModel');
const {doctorSchemas,DOCTOR_TABLE,Doctor} = require('../models/doctorModel')
module.exports = {
  async up (queryInterface, Sequelize) {
    const {SINTOM_TABLE,SintomaSchema} = require('../models/sintomasModel');
    const {doctorSchemas,DOCTOR_TABLE,Doctor} = require('../models/doctorModel')
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

'use strict';

const {PacienteSchema,PACIENTE_TABLE} = require('../models/pacienteModel')
const {SINTOM_TABLE,SintomaSchema} = require('../models/sintomasModel');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PACIENTE_TABLE,PacienteSchema);
    await queryInterface.createTable(SINTOM_TABLE,SintomaSchema);
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

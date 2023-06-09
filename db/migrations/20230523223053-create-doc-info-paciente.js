'use strict';
const sequelize = require('../../libs/sequelize');
const {doctorSchemas,DOCTOR_TABLE,Doctor} = require('../models/doctorModel')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(DOCTOR_TABLE,doctorSchemas);
  },

  async down (queryInterface, Sequelize) {

  }
};
const sequelize = require('./../libs/sequelize');

const {models} = require('./../libs/sequelize');

class DoctorService{
  async get_all(){
    console.log("k")
    const dr = await models.Doctor.findAll()
    return dr
  }
}

module.exports = DoctorService

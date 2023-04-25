const fake = require('faker');
const boom = require('@hapi/boom')

const {models} = require('./../libs/sequelize')

class PacientesService{
  constructor(){

  }


  async get_all(){
    const pacientes = await models.Paciente.findAll()
    return pacientes
  }

  async get_only_id(id){
    const paciente =  await models.Paciente.findByPk(id);
    return paciente
  }
  async create(new_user){

  }
  async update(id,changes){
    const paciente = this.get_only_id(id)
    const updatePaciente = await paciente.update(changes)
    return updatePaciente

  }
   async delete(id){
     const borrarPaciente = await models.Paciente.destroy({where:{id:id}})
     return borrarPaciente
  }

}

module.exports = PacientesService;

const fake = require('faker');
const boom = require('@hapi/boom')

const {models} = require('./../libs/sequelize');
const { stringify } = require('nodemon/lib/utils');

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
    const paciente  = await models.Paciente.create(new_user);
    return paciente;
  }
  async new_cuadro(new_square){
    const cuadro = await models.Paciente.create(new_square);
    return cuadro
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
  // LOOGIN
  async login(body){
    var {user,password} = body
    const findPacient =  models.Paciente.findOne({
      where:{
        user: user,
        password:password
      }
    })
    return findPacient.id

  }


}

module.exports = PacientesService;

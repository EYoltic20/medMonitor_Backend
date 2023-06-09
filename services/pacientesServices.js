const fake = require('faker');
const boom = require('@hapi/boom')

const {models} = require('./../libs/sequelize');
const { stringify } = require('nodemon/lib/utils');
const { use } = require('../routes/pacientesRoute');

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
    const cuadro = await models.Cuadro.create(new_square);
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
  async get_cuadro(id){
    const cuadro = await models.Cuadro.findAll({where:{
      paciente_id:id
    }})
    return cuadro
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
    console.log((findPacient))
    return findPacient
  }


}


module.exports = PacientesService;

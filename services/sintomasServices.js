const boom = require('@hapi/boom');
const { is } = require('express/lib/request');
const faker = require("faker");
const { it } = require('faker/lib/locales');
const { not } = require('joi');
const { where } = require('sequelize');
const sequelize = require('./../libs/sequelize');

const {models} = require('./../libs/sequelize')

class SintomasService{


  constructor(){

  }

  async all(){
    const sintomas = await models.Sintoma.findAll()
    return sintomas
  }
  async get_sintomas_paciente(pacientes_id){
    const getSintoma = await models.Sintoma.findAll({
      where:{
        paciente_id:pacientes_id
      }
    })
    return getSintoma
  }

  async create_sintome(body){
    const nuevoSintoma = await models.Sintoma.create(body)
    return nuevoSintoma
  }

  async delete(body){
    const {id,paciente_id} = body
    const borrar = await models.Sintoma.destroy({where:{
      id:id,
      paciente_id:paciente_id
    }})
  }
  async updateSintoma(id,changes){
    const sintoma = models.Sintoma.getSintoma(id)
    const response = await sintoma.update(changes)
    return response
  }
  //Terminar trackeo de sintoma
  async endSintom(body){
    const {id,paciente_id} = body;
    const updatedValue = {terminarSintoma:true}
    // const pacienteSintom = await this.get_sintomas_paciente(paciente_id)
    const terminarsintom = await models.Sintoma.update(updatedValue,{
      where:{
        id:id,
        paciente_id:paciente_id
      }
    }
    )
    return terminarsintom
  }
  async startSintoma(body){
    const {id,paciente_id} = body;
    const updatedValue = {terminarSintoma:false}
    // const pacienteSintom = await this.get_sintomas_paciente(paciente_id)
    const startSintom = await models.Sintoma.update(updatedValue,{
      where:{
        id:id,
        paciente_id:paciente_id
      }
    }
    )
    return startSintom
  }
  // Modificar la intensidad y las notas
  async updateIntensidad (body){
    const {id,paciente_id,intensidad,notas} = body
    const pacienteSintom = await this.get_sintomas_paciente(paciente_id)
    const pacienteChange = await pacienteSintom.update(
      {
        intensidad:sequelize.fn('ARRAY_APPEND',sequelize.col("intensidad"),intensidad),
        notas:sequelize.fn('ARRAY_APPEND',sequelize.col("notas"),notas)
      },{
      where:{
        id:id
      }
    }
    )
    return pacienteChange
  }


}

module.exports = SintomasService;

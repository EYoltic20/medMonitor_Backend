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
    const getSintoma = await models.Sintoma.findOne({
      where:{
        paciente_id:pacientes_id
      }
    })
    return getSintoma
  }

  async create_sintome(body){
    // if
    const nuevoSintoma = await models.Sintoma.create(body)
    return nuevoSintoma
  }

  async delete(id){
    // const borrarSintoma = await
  }
  async updateSintoma(id,changes){
    const sintoma = models.Sintoma.getSintoma(id)
    const response = await sintoma.update(changes)
    return response
  }
  //Terminar trackeo de sintoma
  async endSintom(body){
    const {id,paciente_id} = body;
    const newValue = true
    const pacienteSintom = await this.get_sintomas_paciente(paciente_id)
    const terminarsintom = await pacienteSintom.update({
      terminarSintoma:true
    },{
      where:{
        id:id
      }
    }
    )
    return terminarsintom
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

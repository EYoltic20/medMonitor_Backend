const boom = require('@hapi/boom');
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

  async delete(id,paciente_id){

    console.log(id,paciente_id)
    const borrar = await models.Sintoma.destroy({where:{
      id:id,
      paciente_id:paciente_id
    }})
  }
  // async updateSintoma(id,changes){
  //   const sintoma = models.Sintoma.getSintoma(id)
  //   const response = await sintoma.update(changes)
  //   return response
  // }
  //Terminar trackeo de sintoma
  async endSintom(body){
    const {id,pacienteId} = body;
    const updatedValue = {terminarSintoma:true}
    // const pacienteSintom = await this.get_sintomas_paciente(paciente_id)
    const terminarsintom = await models.Sintoma.update(updatedValue,{
      where:{
        id:id,
        pacienteId:pacienteId
      }
    }
    )
    return terminarsintom
  }
  async startSintoma(body){
    const {id,pacienteId} = body;
    const updatedValue = {terminarSintoma:false}
    // const pacienteSintom = await this.get_sintomas_paciente(paciente_id)
    const startSintom = await models.Sintoma.update(updatedValue,{
      where:{
        id:id,
        pacienteId:pacienteId
      }
    }
    )
    return startSintom
  }
  // Modificar la intensidad y las notas
  async updateIntensidad (body){
    const {id,pacienteId,intensidad,notas} = body
    const pacienteChange = await models.Sintoma.update(
      {
        intensidad:sequelize.fn('ARRAY_APPEND',sequelize.col("intensidad"),intensidad),
        notas:sequelize.fn('ARRAY_APPEND',sequelize.col("notas"),notas)
      },{
      where:{
        id:id,
        pacienteId:pacienteId
      }
    }
    )
    return pacienteChange
  }


}


// LOOGIN


module.exports = SintomasService;

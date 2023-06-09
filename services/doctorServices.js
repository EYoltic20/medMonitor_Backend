const sequelize = require('./../libs/sequelize');

const {models} = require('./../libs/sequelize');

class DoctorService{
  async get_all(){
    console.log("k")
    const dr = await models.Doctor.findAll()
    return dr
  }
  async login(body){
    var {user,password} = body

    const dr =  models.Doctor.findOne({
      where:{
        user: user,
        password:password
      }
    })
    console.log((dr))
    return dr
  }
  async create(body){
    const new_dr = await models.Doctor.create(body)
    return new_dr
  }
  async addPaciente(id,paciente_id){
    const new_paciente = await models.Doctor.update({
      paciente:sequelize.fn('ARRAY_APPEND',sequelize.col("paciente"),paciente_id)
    },{
      where:{
        id:id
      }
    }
    )
    return new_paciente
  }
  async borrar(id){
    const borrar = await models.Doctor.destroy({where:{id:id}})
    return
  }
  // async borrar_paciente
}

module.exports = DoctorService

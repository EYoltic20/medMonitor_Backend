const {Model,Sequelize, DataTypes} = require('sequelize');
const {DOCTOR_TABLE} = require('./doctorModel');
const PACIENTE_TABLE = 'paciente';
const PacienteSchema ={
  id:{
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER
  },
  nombre:{
    allowNull:false,
    type:DataTypes.STRING
  },
  user:{
    allowNull:false,
    type:DataTypes.STRING
  },
  apellidoPaterno:{
    allowNull:false,
    type:DataTypes.STRING
  },
  apellidoMaterno:{
    allowNull:false,
    type:DataTypes.STRING
  },
  correo:{
    allowNull:false,
    type:DataTypes.STRING
  },
  password:{
    allowNull:false,
    type:DataTypes.STRING
  },
  gender:{
    allowNull:false,
    type:DataTypes.STRING
  },
  createdAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue:Sequelize.NOW
  },doctor_id:{
    field:"pacienteID",
    allowNull:true,
    type:DataTypes.INTEGER,
    references:{
      model:PACIENTE_TABLE,
      key:"id"
    },
    onUpdate:"CASCADE",
    onDelete:"SET NULL"
  }
}
class Paciente extends Model{
  // Asociacion que tiene
  static associate(models){
    this.hasMany(models.Sintoma,{
      as:"sintoma",
      foreignKey:"paciente_id"
    })
    // this.belongsToMany(models.Doctor,{through:models.Doctor})
  }
  static config(sequelize){
    return{
    sequelize,
    tableName:PACIENTE_TABLE,
    modelName:'Paciente',
    timestamps:true
    }
  }
}
module.exports = {Paciente,PacienteSchema,PACIENTE_TABLE}

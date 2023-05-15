const {Model,Sequelize, DataTypes} = require('sequelize');
const CUADRO_CLINICO_TABLE = "cuadro_clinco"
const {PACIENTE_TABLE} = require('./pacienteModel');
const cuadro_clinco_Schema = {
  id:{
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER
  },
  hipertension_arterial:{
    allowNull:false,
    type:DataTypes.BOOLEAN
  },diabetis_mellitus:{
    allowNull:false,
    type:DataTypes.BOOLEAN

  },colesterol_elevado:{
    allowNull:false,
    type:DataTypes.BOOLEAN
  },obesidad:{
    allowNull:false,
    type:DataTypes.BOOLEAN

  },consumo_tabaco:{
    allowNull:false,
    type:DataTypes.BOOLEAN

  },sedentarismo:{
    allowNull:false,
    type:DataTypes.BOOLEAN

  },mala_alimentacion:{
    allowNull:false,
    type:DataTypes.BOOLEAN

  },mal_sleeping:{
    allowNull:false,
    type:DataTypes.BOOLEAN

  },depresion:{
    allowNull:false,
    type:DataTypes.BOOLEAN

  },anxiety:{
    allowNull:false,
    type:DataTypes.BOOLEAN
  },pacienteId:{
    field:"paciente_id",
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
      model:PACIENTE_TABLE,
      key:"id"
    },
    onUpdate:"CASCADE",
    onDelete:"SET NULL"
  }
}
class Cuadro extends Model{
  static associate(models){
    this.belongsTo(models.Paciente,{
      as:"paciente"
    })

  }
  static config(sequelize){
    return{
    sequelize,
    tableName:CUADRO_CLINICO_TABLE,
    modelName:'Cuadro',
    timestamps:false
    }
  }
}

module.exports = {cuadro_clinco_Schema,CUADRO_CLINICO_TABLE,Cuadro}

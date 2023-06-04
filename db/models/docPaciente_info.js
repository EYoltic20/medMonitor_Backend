const {Model,Sequelize, DataTypes} = require('sequelize');
const DOC_PACIENTE_INFO_TABLE = 'doc_paciente_info';
const {PACIENTE_TABLE} = require('./pacienteModel');


const DOC_PACIENTE_INFO_SCHEMA={
  id:{
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER
  },nombre:{
    allowNull:false,
    type:DataTypes.STRING
  },espcialidad:{
    allowNull:false,
    type:DataTypes.STRING
  },correo:{
    allowNull:false,
    type:DataTypes.STRING
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
class Doc_pac_info extends Model{
  static associate(models){
    this.belongsTo(models.Paciente,{
      as:'paciente'
    })
  }
  static config(sequelize){
    return{
      sequelize,
      tableName:DOC_PACIENTE_INFO_TABLE,
      modelName:"DocInfoPac",
      timestamps:true
    }
  }
}

module.exports = {DOC_PACIENTE_INFO_SCHEMA,DOC_PACIENTE_INFO_TABLE,Doc_pac_info}

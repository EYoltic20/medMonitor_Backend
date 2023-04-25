const {Model,Sequelize, DataTypes} = require('sequelize');

const {PACIENTE_TABLE} = require('./pacienteModel');
const SINTOM_TABLE ='sintoma'

const SintomaSchema ={
  id:{
    allowNull:false,
    primaryKey: true,
    autoIncrement:true,
    type:DataTypes.INTEGER
  },
  name:{
    allowNull:false,
    type:DataTypes.STRING
  },intensidad:{
    allowNull:false,
    type:DataTypes.ARRAY(DataTypes.INTEGER)
  },recordar:{
    allowNull:false,
    type:DataTypes.BOOLEAN
  },terminarSintoma:{
    allowNull:false,
    type:DataTypes.BOOLEAN
  },notas:{
    allowNull:true,
    type:DataTypes.ARRAY(DataTypes.STRING)
  },paciente_id:{
    field:"pacienteID",
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

class Sintoma extends Model{
   static associate(model){
    this.belongsTo(model.Paciente,
      {as:'paciente'}
    )
   }
   static config(sequelize){
     return{
       sequelize,
       tableName:SINTOM_TABLE,
       modelName:"Sintoma",
       timestamps:false
     }
   }
}

module.exports = {Sintoma,SintomaSchema,SINTOM_TABLE}

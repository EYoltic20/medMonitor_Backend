const {Model,Sequelize, DataTypes} = require('sequelize');

const DOCTOR_TABLE = 'doctor';
const doctorSchemas = {
  id:{
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER
  },
  nombre:{
    allowNull:false,
    type:DataTypes.STRING
  },apellido:{
    allowNull:false,
    type:DataTypes.STRING
  },user:{
    allowNull:false,
    type:DataTypes.STRING
  },password:{
    allowNull:false,
    type:DataTypes.STRING
  },correo:{
    allowNull:false,
    type:DataTypes.STRING
  },createdAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue:Sequelize.NOW
  }
}
class Doctor extends Model{
  static associate(models){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName:DOCTOR_TABLE,
      modelName:'Doctor',
      timestamps:false
      }
  }
}

module.exports = {doctorSchemas,DOCTOR_TABLE,Doctor}

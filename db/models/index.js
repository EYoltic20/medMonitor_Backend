const {Paciente,PacienteSchema} = require('./pacienteModel')
const {Sintoma,SintomaSchema} = require('./sintomasModel')
const {Cuadro,cuadro_clinco_Schema}=require("./cuadroClinico")

function setUPModels (sequelize){
  Paciente.init(PacienteSchema,Paciente.config(sequelize));
  Sintoma.init(SintomaSchema,Sintoma.config(sequelize));
  Cuadro.init(cuadro_clinco_Schema,Cuadro.config(sequelize));

  Paciente.associate(sequelize.models);
  Sintoma.associate(sequelize.models);
  Cuadro.associate(sequelize.models);

}
module.exports = setUPModels

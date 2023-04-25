const {Paciente,PacienteSchema} = require('./pacienteModel')
const {Sintoma,SintomaSchema} = require('./sintomasModel')

function setUPModels (sequelize){
  Paciente.init(PacienteSchema,Paciente.config(sequelize));
  Sintoma.init(SintomaSchema,Sintoma.config(sequelize));

  Paciente.associate(sequelize.models);
  Sintoma.associate(sequelize.models);

}
module.exports = setUPModels

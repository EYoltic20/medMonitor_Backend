const {Paciente,PacienteSchema} = require('./pacienteModel')
const {Sintoma,SintomaSchema} = require('./sintomasModel')
const {Cuadro,cuadro_clinco_Schema}=require("./cuadroClinico")
const {Doc_pac_info,DOC_PACIENTE_INFO_SCHEMA}=require('./docPaciente_info')
const {Doctor,doctorSchemas} = require('./doctorModel')

function setUPModels (sequelize){
  Paciente.init(PacienteSchema,Paciente.config(sequelize));
  Sintoma.init(SintomaSchema,Sintoma.config(sequelize));
  Cuadro.init(cuadro_clinco_Schema,Cuadro.config(sequelize));
  Doc_pac_info.init(DOC_PACIENTE_INFO_SCHEMA,Doc_pac_info.config(sequelize))
  Doctor.init(doctorSchemas,Doctor.config(sequelize))

  Paciente.associate(sequelize.models);
  Sintoma.associate(sequelize.models);
  Cuadro.associate(sequelize.models);
  Doc_pac_info.associate(sequelize.models);


}
module.exports = setUPModels

const joi = require('joi');


const sintoma_id = joi.string().uuid();
const estadoSintoma = joi.boolean();
const valorIntensidad = joi.number().integer().min(1).max(10);
const recordar =joi.boolean();
const notas = joi.string();
const paciente_id = joi.string();

const publishSintom  = joi.object({
  sintoma_id : sintoma_id.required(),
  intensidad:valorIntensidad.required(),
  frecuencia:recordar.required(),
  terminar:estadoSintoma.required(),
  notas:notas.required(),
  paciente_id:paciente_id.required()
});


const getSitoma = joi.required({
  paciente_id:paciente_id.required()
})

module.exports = {getSitoma,publishSintom}

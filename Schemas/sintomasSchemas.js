const joi = require('joi');


const sintoma_id = joi.number().integer();
const estadoSintoma = joi.boolean();
const sintoma = joi.string();
const valorIntensidad = joi.number().integer().min(1).max(10);
const recordar =joi.boolean();
const fr = joi.string();
const notas = joi.string();
const paciente_id = joi.string();

const publishSintom  = joi.object({
  id : sintoma_id.required(),
  sintoma : sintoma.required(),
  intensidad:valorIntensidad.required(),
  estado:estadoSintoma.required(),
  frecuencia:fr.required(),
  notas:notas,
  paciente_id:paciente_id.required()
});


const getSitoma = joi.required({
  paciente_id:paciente_id.required()
})

module.exports = {getSitoma,publishSintom}

const id = require('faker/lib/locales/id_ID');
const joi = require('joi');


const sintoma_id = joi.number().integer();
const terminar = joi.boolean();
const sintoma = joi.string();
const valorIntensidad = joi.array().items(joi.number());
const recordar =joi.boolean();
const fr = joi.string();
const notas = joi.array().items(joi.string());
const paciente_id = joi.string();
const intensidad = joi.number();
const nota = joi.string()

const publishSintom  = joi.object({
  id : sintoma_id,
  name : sintoma.required(),
  intensidad:valorIntensidad,
  recordar:recordar,
  terminarSintoma:terminar,
  notas:notas,
  paciente_id:paciente_id.required()
});

const updateSintomValue= joi.object({
  id:sintoma_id.required(),
  paciente_id:paciente_id.required(),
  intensidad:intensidad.required(),
  nota:joi.string()
})

const getSitoma = joi.object({
  paciente_id:paciente_id.required()
})

const endSintom = joi.object({
  id:sintoma_id.required(),
  paciente_id:paciente_id.required()
})
const startSintom = joi.object({
  id:sintoma_id.required(),
  paciente_id:paciente_id.required()
})

module.exports = {getSitoma,publishSintom,updateSintomValue,endSintom,startSintom}

const joi = require('joi');
// Para buscar un sitoma o paciente
const id = joi.string().uuid();
const nombre = joi.string().empty()
const user = joi.string()
const password = joi.string().min(5).max(20)
const email = joi.string().email();
const birthdate = joi.date().iso();
// const gender = joi.bool();




const getPaciente = joi.object({
  id:id.required()
})

const publishNewPacient = joi.object({
  id:id.required(),
  nombre : nombre.required(),
  user:user.required(),
  password:password.required(),
  correo:email.required(),
  birthday:birthdate.required(),
  // gender:gender
})

module.exports = {publishNewPacient,getPaciente}
const express = require('express')
const router = express.Router()
const Docservice  = require('../services/doctorServices')
const service = new Docservice()


// Proximas rutas
// Obtener a todos los doctores
// Obtener Doctor como tal
// Modificar Drs perfil
// Agregar pacientes
// Remover Paciente
// Obtener Pacientes
// Obtener sintomas del paciente

// Routas get
// Obtener todos los doctores
router.get('/',async (req,res,next)=>{
  try{
    console.log("Hey");
    const doctores = await service.get_all()
    res.json(doctores);
  }catch(error){
    next(error)
  }
})
// ROUTAS POST
// ROUTAS PATCH
// ROUTAS DELETE
module.exports = router

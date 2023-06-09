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

    const doctores = await service.get_all()
    res.json(doctores);
  }catch(error){
    next(error)
  }
})
router.post('/login',async(req,res,next)=>{
  try{
    const body  = req.body
    const {id} = await service.login(body)
    res.status(200).json(id)
  }catch(error){
    next(error)
  }
})
router.post('/',async(req,res,next)=>{
  try{
    const body = req.body
    const nuevo_doctores = await service.create(body)
    res.status(200).json("ok")
  }catch(error){
    next(error)
  }


})
router.patch('/nuevo_paciente',async(req,res,next)=>{
  try{
    const {id,paciente_id} = req.body
    const nuevo_paciente = await service.addPaciente(id,paciente_id)
    res.status(200).json("ok")
  }catch(error){
    next(error)
  }
})

router.delete('/borrar',async(req,res,next)=>{
  try{
    const {id} = req.body
    const borrar = await service.borrar(id)
    res.status(200).json("ok")
  }catch(error){
    next(error)
  }
})
// ROUTAS POST
// ROUTAS PATCH
// ROUTAS DELETE
module.exports = router

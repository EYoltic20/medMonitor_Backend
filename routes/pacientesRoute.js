const express = require('express')
const router = express.Router();


const PacientesService = require('../services/pacientesServices')
const service = new PacientesService();
const {getPaciente} = require('../Schemas/pacienteSchema')
const validatorHandler = require('../Middlerwares/validatorHandler');
const boom = require('@hapi/boom')




// GET methods

// Todos los usuarios
router.get('/',async (req,res,next)=>{
  try{
    const pacientes = service.get_all()
    pacientes.then((data)=>{
      res.json(data)
    })
  }catch(error){
    next(error)
  }
});


// SOLO UN USUARIO
router.get('/:id',validatorHandler(getPaciente,'params'),async(req,res,next)=>{
  try{
    const {id} = req.params
    const paciente = await service.get_only_id(parseInt(id));
    res.json(paciente)
  }catch(error){
    next(error)
  }

})


// ,validatorHandler(publishNewPacient,'body')
// POST METHOD
router.post('/',async(req,res,next)=>{
  try{
    const body = req.body
    const response = await service.create(body);
    res.json(response);
  }catch(error){
    next(error)
  }

})
router.post('/cuadro_clinico',async (req,res,next)=>{
  try{
    const body = req.body
    const response = await service.new_cuadro(body)
    res.statusCode(200).json("ok")
  }catch(error){
    next(erro)
  }
});
router.post('/login',async(req,res,next)=>{
  try{
    const body = req.body
    const response = await service.login(body);
    res.statusCode(404).json(response)
  }catch(error){
    res.json("no hackes")
  }

})

// DELETE METHOD
router.delete('/:id',async (req,res,next)=>{
  try{
    const {id} = req.params
    const response = await service.delete(parseInt(id));
    res.json(response);
  }catch(error){
    next(error)
  }

})


module.exports = router;

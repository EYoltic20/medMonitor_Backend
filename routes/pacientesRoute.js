const express = require('express')
const router = express.Router();


const PacientesService = require('../services/pacientesServices')
const service = new PacientesService();
const {publishNewPacient,getPaciente} = require('../Schemas/pacienteSchema')
const validatorHandler = require('../Middlerwares/validatorHandler')




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



// POST METHOD
router.post('/',validatorHandler(publishNewPacient,'body'),async(req,res,next)=>{
  try{
    const body = req.body
    const response = await service.create(body);
    res.json(response);
  }catch(error){
    next(error)
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

const express = require('express')
const router = express.Router();


const SintomasService = require('../services/sintomasServices')
const validatorHandler = require('../Middlerwares/validatorHandler')
const {getSitoma,publishSintom} = require('../Schemas/sintomasSchemas');
const service = new SintomasService();


// GET METHODS
// OBTENER TODOS LOS SINTOMAS
router.get('/',(req,res)=>{
  const sintomas = service.all();
  res.json(sintomas)
})

// OBTENER LOS SINTOMAS DE UN PACIENTE EN ESPECIFICO
router.get('/:id',validatorHandler(getSitoma,'params'),async (req,res,next)=>{
  try{
    const {id} = req.params;
    const sintomas = await service.get_sintomas(id);
    res.json(sintomas)
  }catch(error){
    next(error)
  }

})
// OBTENER UN SINOMA EN ESPECIFICO


// /,validatorHandler(publishSintom,'body')
// POST METHODS
router.post('/',validatorHandler(publishSintom,'body'),async (req,res,next)=>{
  try{
    const body = req.body
    const response = await service.create_sintome(body)
    res.status(200).json(req.body);
  }catch(error){
    next(error)
  }

})

// BORRAR
// router
router.delete('/:id',async (req,res,next)=>{
  try{
    const {id} = req.params;
    const response = await service.delete(parseInt(id))
    res.status(200).json({'status':response})
  }catch(error){
    next(error)
  }

})

module.exports = router;

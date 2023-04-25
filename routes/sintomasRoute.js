const express = require('express')
const router = express.Router();


const SintomasService = require('../services/sintomasServices')
const validatorHandler = require('../Middlerwares/validatorHandler')
const {getSitoma,publishSintom,updateSintomValue,endSintom,startSintom} = require('../Schemas/sintomasSchemas');
const service = new SintomasService();


// GET METHODS
// OBTENER TODOS LOS SINTOMAS
router.get('/',async (req,res,next)=>{
  try{
  const sintomas = service.all();
  sintomas.then((data)=>{
    res.json(data)
  })
  }catch{
    next(error)
  }
})
// ,validatorHandler(getSitoma,'params'
// OBTENER LOS SINTOMAS DE UN PACIENTE EN ESPECIFICO
router.get('/:id',async (req,res,next)=>{
  try{
    const {id} = req.params;
    const sintomas = await service.get_sintomas_paciente(id);
    res.json(sintomas)
  }catch(error){
    next(error)
  }

})
// OBTENER UN SINOMA EN ESPECIFICO


// /,validatorHandler(publishSintom,'body')
// POST METHODS
router.post('/',async (req,res,next)=>{
  try{
    const body = req.body
    const response = await service.create_sintome(body)
    res.status(201).json(response);
  }catch(error){
    next(error)
  }

})
// UPDATE
router.patch('/intensidad',validatorHandler(updateSintomValue),async (req,res,next)=>{
  try{
    const body = req.body;
    const response = await service.updateIntensidad(body)
    res.status(200).json("ok")
  }catch(error){
    next(error)
  }
})
// Terminar sintoma
router.patch('/endSintom',validatorHandler(endSintom),async(req,res,next)=>{
  try{
    const body = req.body;
    const response = await service.endSintom(body)
    res.status(200).json("ok")
  }catch(error){
    next(error)
  }

})
// Comenzar sintoma
//
router.patch('/startSintoma',validatorHandler(startSintom),async(req,res,next)=>{
  try{
    const body = req.body;
    const response = await service.startSintoma(body)
    res.status(200).json("ok")
  }catch(error){
    next(error)
  }
})

// BORRAR
// router
router.delete('/',async (req,res,next)=>{
  try{
    const body = req.body
    const response = await service.delete(parseInt(id))
    res.status(200).json({'status':response})
  }catch(error){
    next(error)
  }

})

module.exports = router;

const express = require('express')
const router = express.Router();

const SintomasService = require('../services/sintomasServices')
const validatorHandler = require('../Middlerwares/validatorHandler')
const {getSitoma,publishSintom} = require('../Schemas/sintomasSchemas');
const { route } = require('./pacientesRoute');
const service = new SintomasService();


// GET METHODS
router.get('/',(req,res)=>{
  const sintomas = service.all();
  res.json(sintomas)
})

router.get('/:id',validatorHandler(getSitoma,'params'),(req,res)=>{
  const {id} = req.params;
  const sintomas = service.get_sintomas(parseInt(id));
  res.json(sintomas)
})
// /,validatorHandler(publishSintom,'body')
// POST METHODS
router.post('/',(req,res)=>{
  const body = req.body
  const response = service.create_sintome(body)
  res.json(response);
})

// BORRAR
router

module.exports = router;

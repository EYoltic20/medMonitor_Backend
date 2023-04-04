const { Route } = require('express');
const express = require('express')
const router = express.Router();
// const PacientesService = require('../services/pacientesServices');
const PacientesService = require('../services/pacientesServices')
const service = new PacientesService();
// const services = new PacientesService();


// GET methods

// Todos los usuarios
router.get('/',(req,res)=>{
  // client.query('SELECT * FROM paciente',(err,result)=>{
  //     if(!err){
  //         res.send(result.rows);
  //     }else{
  //         res.send(err)
  //     }
  // })
  // client.end;
  const pacientes = service.get_all()
  res.json({
    pacientes
  })
});

// SOLO UN USUARIO
router.get('/:id',(req,res)=>{
  const {id} = req.params
  const paciente = service.get_only_id(parseInt(id));
  res.json(paciente)
})



// POST METHOD
router.post('/',(req,res)=>{
  const body = req.body
  const response = service.create(body);
  res.json(response);
})

// DELETE METHOD
router.delete('/:id',(req,res)=>{
  const {id} = req.params
  const response = service.delete(parseInt(id));
  res.json(response);
})


module.exports = router;

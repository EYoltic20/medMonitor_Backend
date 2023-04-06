const express = require('express')
const router = express.Router();


const PacientesService = require('../services/pacientesServices')
const service = new PacientesService();
const {publishNewPacient,getPaciente} = require('../Schemas/pacienteSchema')
const validatorHandler = require('../Middlerwares/validatorHandler')


// GET methods

// Todos los usuarios
router.get('/',(req,res,next)=>{
  // client.query('SELECT * FROM paciente',(err,result)=>{
  //     if(!err){
  //         res.send(result.rows);
  //     }else{
  //         res.send(err)
  //     }
  // })
  // client.end;
  try{
    const pacientes = service.get_all()
    res.json({
      pacientes
    })
  }catch(error){
    next(error)
  }


});

// SOLO UN USUARIO
router.get('/:id',validatorHandler(getPaciente,'params'),async(req,res,next)=>{
  try{
    const {id} = req.params
    const paciente = await service.get_only_id(id);
    res.json(paciente)
  }catch(error){
    next(error)
  }

})



// POST METHOD
router.post('/',validatorHandler(publishNewPacient,'body'),async(req,res)=>{
  try{
    const body = req.body
    const response = await service.create(body);
    res.json(response);
  }catch(erro){
    next(erro)
  }

})

// DELETE METHOD
router.delete('/:id',(req,res)=>{
  const {id} = req.params
  const response = service.delete(parseInt(id));
  res.json(response);
})


module.exports = router;

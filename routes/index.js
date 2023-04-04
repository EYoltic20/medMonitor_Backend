const express = require('express');
const sintomaRoute = require('./sintomasRoute')
const pacienteRoute = require('./pacientesRoute');
function apiRoute(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/pacientes',pacienteRoute);
  router.use('/sintomas',sintomaRoute)
}

module.exports = apiRoute;

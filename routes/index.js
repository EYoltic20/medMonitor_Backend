const express = require('express');
const pacienteRoute = require('./pacientesRoute');
function apiRoute(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/pacientes',pacienteRoute)
}

module.exports = apiRoute;

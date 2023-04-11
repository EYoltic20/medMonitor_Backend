// const client = require('./conections');
const express = require('express');
// const { ClientRequest } = require('http')
const app = express();
const bp = require('body-parser');
const cors = require('cors')
const {logError,boomErrorHandler,errorHandler} = require('./Middlerwares/errorHandler')
// const { port } = require('pg/lib/defaults');

app.set('port',process.env.PORT||3001);
const apiRoute = require('./routes');

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());
// Mids

// ROUTAS
apiRoute(app)

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get("/",(req,res)=>{
  res.send("Hola de mi server")
})




// Conexion
app.listen(app.get('port'),()=>{
  console.log('Server on port',app.get('port'));
});
// client.connect();






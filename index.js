// const client = require('./conections');
const express = require('express');
// const { ClientRequest } = require('http')
const app = express();
const bp = require('body-parser');
const cors = require('cors')
// const { port } = require('pg/lib/defaults');

app.set('port',process.env.PORT||3001);
const apiRoute = require('./routes');


app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
  res.send("Hola de mi server")
})
// ROUTAS
apiRoute(app)



// Conexion
app.listen(app.get('port'),()=>{
  console.log('Server on port',app.get('port'));
});
// client.connect();






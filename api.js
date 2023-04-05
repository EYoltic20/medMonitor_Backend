// const client = require('./conections');
const express = require('express');
const { ClientRequest } = require('http');
const app = express();
const bp = require('body-parser');
const cosr = require('cors')
// const { port } = require('pg/lib/defaults');

const port = process.env.PORT || 3001;
const route = require('./routes');
const apiRoute = require('./routes');


app.use(express.json());
app.use(cors());
// ROUTAS
apiRoute(app)



// Conexion
app.listen(port,()=>{
    console.log("Server is startet")
});
// client.connect();


// tener todos los sintomas de todos los usuarios
 app.get('/sintomas',(req,res)=>{
    client.query(`SELECT * FROM Sintomas `,(err,response)=>{
        if(err){
            res.send(err)
        }else{
            res.send(response.rows)
        }
    })
    client.end;
})


app.get('/sintomas/:id',(req,res)=>{
    var paciente_id = req.params.id
    client.query(`SELECT * FROM Sintomas WHERE paciente_id=${paciente_id}`,(err,response)=>{
        if(err){
            res.send(err.message)
        }else{
            res.send(response.rows)
        }
    })
    client.end;
})


app.post('/sintomas',(req,res)=>{
    const sintoma = req.body;
    let insertQuery= `INSERT INTO Sintomas(paciente_id,intensidad,sintomas,notas,terminar) VALUES (${sintoma.paciente_id},${sintoma.intensidad},'${sintoma.sintomas}','${sintoma.notas}',${sintoma.terminar});`;
    client.query(insertQuery,(err,response)=>{
        if(err){
            console.log("verga " + err.message);
        }else{
            res.send('vientos')
        }
    });
    // client.end;
});

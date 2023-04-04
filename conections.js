const { Client } = require ('pg');
const { isGeneratorFunction } = require('util/types');


// Proximamente mover a modo env
const client   = new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'AjdoqnAouk45',
    database:"Paciente"
})


module.exports = client




// TODO BIEN

//  //Verificando conexcion
// client.query(`SELECT * FROM paciente`,(err,res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//     }
//     client.end;
// })
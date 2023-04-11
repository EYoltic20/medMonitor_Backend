const boom = require('@hapi/boom');
const { is } = require('express/lib/request');
const faker = require("faker");
const { it } = require('faker/lib/locales');

const sintomas_iniciales = ['Tos','Dolor de cabeza','Fiebre','Dolor de garganta','Ojos rojos','Dolor de cuello','Migraña']

class SintomasService{


  constructor(){
    this.sintomas=[]
    this.generate()
  }

  generate(){
    for(let i = 0 ; i<20;i++){
      this.sintomas.push({
        id:i+1,
        sintoma:sintomas_iniciales[Math.floor(Math.random()*7)],
        intensidad:[Math.floor(Math.random()*10+1)],
        frecuencia:faker.date.past(),
        terminar:false,
        notas:[],
        paciente_id:Math.floor(Math.random()*3+1)
      })
    }
  }
  all(){
    return this.sintomas
  }
  async get_sintomas(pacientes_id){
    try{
    return this.sintomas.filter(item =>item.paciente_id == pacientes_id)
    }catch(error){
      return error
    }
  }
  async create_sintome(body){
    try{
      this.sintomas.push({
        ...body
      })
      return 'ok'
    }catch(error){
      throw error
    }
  }

  async delete(id){

    const isInThedb = this.sintomas.find(item => item.id == id)
    if(isInThedb){
      try{
        this.sintomas = this.sintomas.filter((item)=>{
          return item.id !== id
        })
        return 'ok'
      }catch(error){
        return error
      }

    }else{
      throw boom.notFound
    }
  //   const idx = this.sintomas.findIndex(item => item.id === id);
  //   if (idx == -1){
  //     throw boom.notFound
  //   }else{
  //     this.pacientes.splice(idx,1);
  //     return "ok";
  //   }
  }

}

module.exports = SintomasService;

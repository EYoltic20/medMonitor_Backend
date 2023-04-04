const faker = require("faker");

const sintomas_iniciales = ['Tos','Dolor de cabeza','Fiebre','Dolor de garganta','Ojos rojos','Dolor de cuello','Migraña']

class SintomasService{
  constructor(){
    this.sintomas=[]
    this.generate();
  }
  generate(){
    for(let i = 0 ; i<20;i++){
      this.sintomas.push({
        id:faker.datatype.uuid(),
        sintoma:sintomas_iniciales[Math.floor(Math.random()*7+1)],
        intensidad:[Math.floor(Math.random()*10+1)],
        estado:true,
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
  get_sintomas(pacientes_id){
    try{
    return this.sintomas.filter(item =>item.paciente_id == pacientes_id)
    }catch(error){
      return error
    }
  }
  create_sintome(body){
    try{
      this.sintomas.push(body)
      return "ok"
    }catch(error){
      return error
    }
  }

}

module.exports = SintomasService;

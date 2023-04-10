const fake = require('faker');
const boom = require('@hapi/boom')

class PacientesService{
  constructor(){
    this.pacientes = []
    this.generete()
  }

  // GENERAMOS DUMMY DATA
  generete(){
    const names = ['Yoltic','Diego','Alan']
    for (let i = 0 ; i<3; i++){
      this.pacientes.push({
        id:i+1,
        nombre:names[i],
        user:fake.internet.email(),
        password:fake.internet.password(),
        correo:fake.internet.email(),
        birthday:'marzo',
        genero: 'male'
      });
    }
  }
  get_all(){
    return this.pacientes;
  }
  async get_only_id(id){
    const paciente =  this.pacientes.find(item => item.id === id );
    if(!paciente){
      throw boom.notFound("no se encontro el paciente");
    }
    return paciente
  }
  async create(new_user){
    try {
      this.pacientes.push(new_user);
      return 'ok'
    }catch (error){
      throw boom.serverUnavailable
    }
  }

  delete(id){
    const idx = this.pacientes.findIndex(item => item.id === id);
    if (idx == -1){
      return "this user does not exist"
    }else{
      this.pacientes.splice(idx,1);
      return "ok";
    }
  }

}

module.exports = PacientesService;

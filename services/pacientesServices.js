const fake = require('faker');

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
        user:fake.internet.avatar(),
        password:fake.internet.password(),
        correo:fake.internet.email(),
        birthday:[''],
        genero: 'male'
      });
    }
  }
  get_all(){
    return this.pacientes;
  }
  get_only_id(id){
    return this.pacientes.find(item => item.id === id );
  }
  create(new_user){
    try {
      this.pacientes.push(new_user);
      return 'ok'
    }catch (error){
      return error
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


const {Sequelize} = require('sequelize');

const {config} = require('./../config/config');
const setUPModels = require('./../db/models/index.js')

let URI = '';
if(config.isProd){
  URI=config.dbUrl;
}else{
const user = encodeURIComponent(config.dbUser)
const password = encodeURIComponent(config.dbPassword)
URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`
}

const options = {
  dialect:'postgres',
  logging:config.isProd ? false:true,
}

if(config.isProd){
  option.ssl={
    rejectUnauthorized:false
  }
}
const sequelize = new Sequelize (URI,options)

setUPModels(sequelize)
// sequelize.sync()
module.exports = sequelize;

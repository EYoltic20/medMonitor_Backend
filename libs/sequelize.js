
const {Sequelize} = require('sequelize');

const {config} = require('./../config/config');
const setUPModels = require('./../db/models/index.js')


const options = {
  dialect:'postgres',
  logging:config.isProd ? false:true,
}

if(config.isProd){
  option.ssl={
    rejectUnauthorized:false
  }
}
const sequelize = new Sequelize (config.dbUrl,options)

setUPModels(sequelize)
// sequelize.sync()
module.exports = sequelize;

const {Sequelize} = require('sequelize');

const {config} = require('./../config/config');
const setUPModels = require('./../db/models/index.js')



const user = encodeURIComponent(config.dbUser)
const password = encodeURIComponent(config.dbPassword)
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize (URI,{
  dialect:'postgres'
})

setUPModels(sequelize)
// sequelize.sync()
module.exports = sequelize;

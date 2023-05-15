const {config} = require('./../config/config');



const user = encodeURIComponent(config.dbUser)
const password = encodeURIComponent(config.dbPassword)
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions:{
      ssl:{
        rejectUnauthorized:false
      }
    }
  }
}

const environment = process.env.ENVIRONMENT || 'development'


const knexConfig = require('../knexfile')[environment];



module.exports = require('knex')(knexConfig);

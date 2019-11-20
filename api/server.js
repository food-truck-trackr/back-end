const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/user-router');
// const dinerRouter = require('./diners/diners-router');
const trucksRouter = require('./trucks/trucks-router');
const operatorsRouter = require('./operators/operator-router');
const restricted = require('../api/middleware/restricted-middleware');



server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/', usersRouter)
// server.use('/api/diners', restricted, dinerRouter)
server.use('/api/trucks', trucksRouter)
server.use('/api/operators',  operatorsRouter)
// server.use('/api/docs', express.static('./docs'))



server.get('/', () => {
    console.log('welcome to foodtruck trackr')
})

module.exports = server;
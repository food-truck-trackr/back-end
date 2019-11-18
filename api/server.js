const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/user-router.js');
const restricted = require('../middleware/restricted-middleware.js');


server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api', usersRouter)


server.get('/', () => {
    console.log('welcome to foodtruck findr')
})

module.exports = server;
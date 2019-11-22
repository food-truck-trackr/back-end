
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('./users/user-router');

const trucksRouter = require('./trucks/trucks-router');
const operatorsRouter = require('./operators/operator-router');
const restricted = require('../api/middleware/restricted-middleware');
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api', usersRouter)
server.use('/api/trucks', trucksRouter);
server.use('/api/operators',restricted, operatorsRouter);




server.get('/', () => {
    console.log('welcome to foodtruck trackr')
})

module.exports = server;
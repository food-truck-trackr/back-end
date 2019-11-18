  
const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/user-router.js.js.js');

const restricted = require('../api/middleware/restricted-middleware');


server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api', usersRouter)
// middleware
server.use(helmet())
server.use(cors())
server.use(express.json())

// routes
server.get('/', () => {
    console.log('welcome to food truck tracker')
})

module.exports = server;
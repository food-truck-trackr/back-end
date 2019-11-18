  
const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/user-router.js');
const seekerRouter = require('./jobseeker/jobseeker-router.js');
const jobsRouter = require('./jobs/jobs-router.js');
const companiesRouter = require('./company/company-router.js');
const restricted = require('../middleware/restricted-middleware.js');


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
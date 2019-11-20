const server = require('./api/server.js');

const dbPort = process.env.DB_PORT;

require('dotenv').config();

const PORT = process.env.PORT || dbPort || 4000;

server.listen(PORT, () => {
    console.log(`!!! Server is listening on port ${PORT} !!!`)
})
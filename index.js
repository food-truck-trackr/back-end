const server = require('./api/server');

const dbPort = process.env.DB_PORT;

server.use(express.json());

const PORT = process.env.PORT || dbPort || 5000;

server.listen(PORT, () => {
    console.log(`!!! Server is listening on port ${PORT} !!!`)
})
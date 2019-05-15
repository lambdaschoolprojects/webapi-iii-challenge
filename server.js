const express = require('express');
const userRouter = require('./users/userRouter');

const server = express();
server.use(express.json());
const logger = require('./middleware/logger');

server.use(logger);

server.use('/api/user', userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});


module.exports = server;

const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('We have a new connection');

  socket.on('disconnect', () => {
    console.log('User had left');
  });
});

app.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

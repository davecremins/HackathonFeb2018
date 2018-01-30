/* eslint-disable global-require */

/**
 * Socket middleware
 */
module.exports = (server) => {
   const io = require('socket.io')(server);

   io.on('connection', (socket) => {
      socket.emit('connectionMessage', {msg: 'Socket connection successfully established'});
   });

   return io;
 };
/* eslint-disable global-require */

/**
 * Socket middleware
 */
module.exports = (server, opts) => {
   const io = require('socket.io')(server);

   io.on('connection', (socket) => {
      socket.emit('connectionMessage', {msg: 'Socket connection successfully established'});
   });

   if(opts.isDev){
    setInterval(() => { io.emit('area:changeDataForTest'); }, opts.devInterval);
   }

   return io;
 };
const socketIO = require('socket.io');
/**
 * Socket middleware
 */
module.exports = (server, opts) => {
  const io = socketIO(server);
  io.on('connection', (socket) => {
    socket.emit('connectionMessage', { msg: 'Socket connection successfully established' });
  });

  if (opts.isDev) {
    setInterval(() => { io.emit('area:changeDataForTest'); }, opts.devInterval);
  }

  return io;
};

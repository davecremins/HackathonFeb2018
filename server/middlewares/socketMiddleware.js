/* eslint-disable no-console */
const socketIO = require('socket.io');
/**
 * Socket middleware
 */
module.exports = (server, opts) => {
  const io = socketIO(server);
  io.on('connection', (socket) => {
    console.log(`Connection received from ${socket.id}`);

    socket.on('disconnect', () => {
      console.log('disconnection occured');
    });

    socket.on('channel', (data) => {
      socket.join(data.channel);
    });

    socket.on('leave channel', (data) => {
      socket.leave(data.channel);
    });
  });

  if (opts.isDev) {
    setInterval(
      () => { io.to(opts.defaultChannel).emit('changeGraphData'); },
      opts.devInterval
    );
  }

  return io;
};

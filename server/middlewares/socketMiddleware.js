/* eslint-disable no-console */
const socketIO = require('socket.io');


const days = [
  'Mon', 'Tues', 'Wed', 'Thurs', 'Fri',
];

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
      () => {
        io.to(opts.defaultChannel).emit(
        'changeGraphData',
          {
            id: '2312',
            active: true,
            price: Math.floor(Math.random() * ((400 - 1) + 1)) + 1,
            created: days[Math.floor(Math.random() * days.length)],
          });
      },
      opts.devInterval
    );
  }

  return io;
};

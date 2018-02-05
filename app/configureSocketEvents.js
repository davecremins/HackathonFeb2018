/* eslint-disable no-console */
const io = require('socket.io-client');
/**
 * Socket event management
 */
module.exports = () => {
  const socket = io();
  socket.on('connectionMessage', (data) => console.log(data));
  // TODO: Remove from here and place in appropriate container
  socket.on('webhooks:post', (data) => console.log(data));
};

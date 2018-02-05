/**
 * Socket event management
 */
module.exports = () => {
  const io = require('socket.io-client');
  const socket = io();
  socket.on('connectionMessage', (data) => console.log(data));
  socket.on('webhooks:post', (data) => console.log(data));
 };
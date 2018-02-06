import React from 'react';

import io from 'socket.io-client';
const socket = io();

const withWebSocket = (WrappedComponent) => {
    // ...and returns another component...
  class WebSocket extends React.Component {

    constructor() {
      super();
      this.subscribe = this.subscribe.bind(this);
    }

    subscribe(channel, event, callback) {
      socket.emit('channel', {
        channel,
      });

      socket.on(event, callback);
    }

    render() {
      return <WrappedComponent subscribe={this.subscribe} {...this.props} />;
    }
  }


  return WebSocket;
};

export default withWebSocket;

import React from 'react';

import io from 'socket.io-client';
const socket = io();

const withWebSocket = (WrappedComponent) => {
  class WebSocket extends React.Component {

    constructor() {
      super();
      this.state = {
        events: [],
        channels: [],
      };

      this.subscribe = this.subscribe.bind(this);
    }

    componentWillUnmount() {
      this.state.events.forEach((eventSocket) => eventSocket.off());
    }

    subscribe(channel, event, callback) {
      socket.emit('channel', {
        channel,
      });

      const events = this.state.events;
      const eventObj = socket.on(event, callback);
      events.push(eventObj);
      this.setState({ events });
    }

    // unsubscribe() {
    //
    // }

    render() {
      return <WrappedComponent subscribe={this.subscribe} {...this.props} />;
    }
  }

  return WebSocket;
};

export default withWebSocket;

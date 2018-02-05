/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box } from 'rebass';
import messages from './messages';
import AreaChart from '../../components/AreaChart';
import ToolBar from '../../components/Toolbar';

// TODO: Setup a specific room/channel for this component to communicate
const io = require('socket.io-client');
const socket = io();

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Sun', uv: 4000, pv: 2400 },
        { name: 'Monday', uv: 4000, pv: 2400 },
        { name: 'Tue', uv: 3000, pv: 1398 },
        { name: 'Web', uv: 2000, pv: 9800 },
        { name: 'Thurs', uv: 2780, pv: 3908 },
        { name: 'Fri', uv: 1890, pv: 4800 },
        { name: 'Sat', uv: 2390, pv: 3800 },
      ],
    };
  }

  componentDidMount() {
    socket.on('area:changeDataForTest', () => {
      // this.randomizeData();
      this.addNewRecord();
    });
  }

  randomNum(max) {
    return Math.floor(Math.random() * ((max - 1) + 1)) + 1;
  }

  modifyRecord(x) {
    const y = x;
    y.uv += this.randomNum(x.uv);
    y.pv += this.randomNum(x.pv);
    y.amt += this.randomNum(x.amt);
    return y;
  }

  addNewRecord() {
    const records = this.state.data.map((x) => x);
    let rec = records.shift();
    rec = this.modifyRecord(rec);
    records.push(rec);
    this.setState({
      data: records,
    });
  }

  randomizeData() {
    const randomData = this.state.data.map((x) =>
      this.modifyRecord(x)
    );
    this.setState({
      data: randomData,
    });
  }

  render() {
    return (
      <Box>
        <ToolBar />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Box w={1} p={2}>
          <AreaChart data={this.state.data} />
        </Box>
      </Box>
    );
  }
}

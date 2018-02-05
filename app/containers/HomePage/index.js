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
import TwoLevelPieChart from "../../components/TwoLevelPieChart";
import AreaChart from '../components/AreaChart';
const io = require('socket.io-client');
const socket = io();

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      data: [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page G', uv: 7490, pv: 600, amt: 2600 }
      ]
    }
  }

  randomNum(){
    return Math.floor(Math.random() * (800 - 1 + 1)) + 1;
  }

  componentDidMount(){
    socket.on('newData', () => {
      console.log('newData event received');
      const newData = this.state.data.map((x) => {
        x.uv += this.randomNum();
        x.pv += this.randomNum();
        x.amt += this.randomNum();
        return x;
      });

      this.setState({
        data: newData
      });
    });
  }
  render() {
    return (
      <Box>
        <ToolBar />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <AreaChart data={data} />
        <TwoLevelPieChart />
        <Box w={1 / 3}>sdasdasd</Box>
        <AreaChart data={this.state.data} />
      </Box>
    );
  }
}

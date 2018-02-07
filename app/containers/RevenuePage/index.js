/**
 *
 * RevenuePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Box, Flex } from 'rebass';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRevenuePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import RevenueAreaChart from './charts/RevenueAreaChart';
import withWebSocket from '../../hoc/WebSocket/withWebSocket';
import BarChart from '../../components/BarChart';

export class RevenuePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      data: [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 4000, pv: 2400 },
        { name: 'Mar', uv: 3000, pv: 1398 },
        { name: 'Apr', uv: 2000, pv: 9800 },
        { name: 'May', uv: 2780, pv: 3908 },
        { name: 'Jun', uv: 1890, pv: 4800 },
        { name: 'Jul', uv: 2390, pv: 3800 },
        { name: 'Aug', uv: 2390, pv: 3800 },
        { name: 'Oct', uv: 2390, pv: 3800 },
        { name: 'Nov', uv: 2390, pv: 20 },
        { name: 'Dec', uv: 2390, pv: 3800 },
      ],
    };
  }


  componentDidMount() {
    this.props.subscribe('component:homepage', 'changeGraphData', this.handleSomeEvent);
  }

// eslint-disable-next-line no-unused-vars
  handleSomeEvent(data) {
    console.log('Receiving web socket messages, Work in progress');
  }


  render() {
    return (
      <Box p={10}>
        <Helmet>
          <title>RevenuePage</title>
          <meta name="description" content="Description of RevenuePage" />
        </Helmet>
        <h1>Revenue</h1>
        <Flex p={5} mx={-2} wrap>
          <Box w={1 / 2}>
            <RevenueAreaChart data={this.state.data} height={300} dataKey={'uv'} />
          </Box>
          <Box p={5} w={1 / 2}>
            <BarChart data={this.state.data} height={300} />
          </Box>
        </Flex>
      </Box>
    );
  }
}

RevenuePage.propTypes = {
  subscribe: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  revenuepage: makeSelectRevenuePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'revenuePage', reducer });
const withSaga = injectSaga({ key: 'revenuePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withWebSocket,
)(RevenuePage);

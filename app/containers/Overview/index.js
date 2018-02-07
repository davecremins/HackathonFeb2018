/**
 *
 * Overview
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
import makeSelectOverview from './selectors';
import reducer from './reducer';
import saga from './saga';
import AreaChart from '../../components/AreaChart';
import withWebSocket from '../../hoc/WebSocket/withWebSocket';

export class Overview extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
    this.handleSomeEvent = this.handleSomeEvent.bind(this);
  }

  componentDidMount() {
    this.props.subscribe('component:homepage', 'changeGraphData', this.handleSomeEvent);
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

  // eslint-disable-next-line no-unused-vars
  handleSomeEvent(data) {
    console.log('Receiving web socket messages in overview');
    this.addNewRecord();
  }

  render() {
    return (
      <Box>
        <Helmet>
          <title>Overview</title>
          <meta name="description" content="Description of Overview" />
        </Helmet>
        <Flex mx={-2} align={'center'}>
          <Box w={1} p={2}>
            <AreaChart data={this.state.data} />
          </Box>
          <Box w={1 / 2} px={2}>
          </Box>
        </Flex>
      </Box>
    );
  }
}

Overview.propTypes = {
  dispatch: PropTypes.func.isRequired,
  subscribe: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  overview: makeSelectOverview(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'overview', reducer });
const withSaga = injectSaga({ key: 'overview', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withWebSocket,
)(Overview);

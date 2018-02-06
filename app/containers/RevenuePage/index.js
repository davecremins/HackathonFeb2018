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
import ToolBar from '../../components/Toolbar';
import RevenueAreaChart from './charts/RevenueAreaChart';
import withWebSocket from '../../hoc/WebSocket/withWebSocket';

export class RevenuePage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  componentDidMount() {
    this.props.subscribe('component:homepage', 'changeGraphData', this.handleSomeEvent);
  }

// eslint-disable-next-line no-unused-vars
  handleSomeEvent(data) {
    console.log('Receiving web socket messages, Work in progress');
  }


  render() {
    return (
      <Box>
        <Helmet>
          <title>RevenuePage</title>
          <meta name="description" content="Description of RevenuePage" />
        </Helmet>
        <ToolBar />
        <Flex mx={-2} align={'center'}>
          <Box w={1 / 3} px={2}>
            <RevenueAreaChart />
          </Box>
          <Box w={1 / 2} px={2}>
          </Box>
        </Flex>
      </Box>
    );
  }
}

RevenuePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
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

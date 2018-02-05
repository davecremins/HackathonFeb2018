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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRevenuePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import ToolBar from '../../components/Toolbar';

export class RevenuePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>RevenuePage</title>
          <meta name="description" content="Description of RevenuePage" />
        </Helmet>
        <ToolBar />
        sdasds
      </div>
    );
  }
}

RevenuePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
)(RevenuePage);

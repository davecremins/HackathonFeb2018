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
import AreaChart from '../components/AreaChart';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Box>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Box w={1 / 3}>sdasdasd</Box>

        <AreaChart />
      </Box>
    );
  }
}

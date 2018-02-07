/*
 *
 * Overview reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_SUBSCRIPTION,
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  subscriptions: [],
});

function overviewReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case ADD_SUBSCRIPTION:
      return state
        .set('subscriptions',
          state.get('subscriptions').push(action.subscription));
    default:
      return state;
  }
}

export default overviewReducer;

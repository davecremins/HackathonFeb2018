/*
 *
 * Overview actions
 *
 */

import {
  ADD_SUBSCRIPTION,
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function addSubscription(subscription) {
  return {
    type: ADD_SUBSCRIPTION,
    subscription,
  };
}

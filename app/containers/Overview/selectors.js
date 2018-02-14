/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect';

/**
 * Direct selector to the overview state domain
 */
const selectOverviewDomain = (state) => state.get('overview');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Overview
 */

const makeSelectOverview = () => createSelector(
  selectOverviewDomain,
  (substate) => substate.toJS()
);


const aggregate = (subs, sub) => {
  const lastSub = subs.find((item) => item.name === sub.name);

  if (subs.length === 0 || typeof lastSub === 'undefined') {
    subs.push(sub);
  } else if (lastSub.name === sub.name) {
    lastSub.price += sub.price;
  }

  return subs;
};

const getInitial = () => {
  const initial = [
    { name: 'Sun' },
    { name: 'Mon' },
    { name: 'Tues' },
    { name: 'Wed' },
    { name: 'Thurs' },
    { name: 'Fri' },
    { name: 'Sat' },
  ];

  initial.forEach((item) => {
    item.price = 0;
  });

  return initial;
};

const makeSelectSubscriptionsChart = () => createSelector(
  selectOverviewDomain,
  (state) => state
      .get('subscriptions').toJS()
      .map((sub) => ({
        name: sub.created,
        ...sub,
      }))
      .reduce(aggregate, getInitial())
);

export default makeSelectOverview;
export {
  selectOverviewDomain,
  makeSelectSubscriptionsChart,
};

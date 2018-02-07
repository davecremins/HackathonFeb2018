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

const makeSelectSubscriptionsChart = () => createSelector(
  selectOverviewDomain,
  (state) => state
    .get('subscriptions').toJS()
    .map((sub) => ({
      name: sub.created,
      ...sub,
    }))
    .reduce((subs, sub) => {
      const lastSub = subs[subs.length - 1];

      if (subs.length === 0 || lastSub.name !== sub.name) {
        subs.push(sub);
      } else if (lastSub.name === sub.name) {
        lastSub.price += sub.price;
        // lastSub.pv +=pv sub.pv;
      }

      return subs;
    }, [])
);

export default makeSelectOverview;
export {
  selectOverviewDomain,
  makeSelectSubscriptionsChart,
};

import { createSelector } from 'reselect';

/**
 * Direct selector to the revenuePage state domain
 */
const selectRevenuePageDomain = (state) => state.get('revenuePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RevenuePage
 */

const makeSelectRevenuePage = () => createSelector(
  selectRevenuePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectRevenuePage;
export {
  selectRevenuePageDomain,
};

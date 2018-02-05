
import { fromJS } from 'immutable';
import revenuePageReducer from '../reducer';

describe('revenuePageReducer', () => {
  it('returns the initial state', () => {
    expect(revenuePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

/**
 *
 * Asynchronously loads the component for RevenuePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

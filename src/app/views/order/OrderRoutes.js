import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppRfq = Loadable(lazy(() => import('./rfq/AppTable')));
const AppAddNewRfq = Loadable(lazy(() => import('./rfq/Addnew')));
const AppQuotation = Loadable(lazy(() => import('./quotation/AppTable')));
const AppOrder = Loadable(lazy(() => import('./order/AppTable')));
const AppPayment = Loadable(lazy(() => import('./payment/AppTable')));

const materialRoutes = [
  {
    path: '/order/rfq',
    element: <AppRfq />,
  },
  {
    path: '/order/quotation',
    element: <AppQuotation />,
  },
  {
    path: '/order/list',
    element: <AppOrder />,
  },
  {
    path: '/order/payment',
    element: <AppPayment />,
  },
  {
    path: 'order/rfq/addnew',
    element: <AppAddNewRfq />,
  },
];

export default materialRoutes;

import { useRoutes } from 'react-router-dom';

import { Form } from '../components/Form';
import { Check } from '../components/Check';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Form />,
    },
    {
      path: '/check',
      element: <Check />,
    },
  ]);
}

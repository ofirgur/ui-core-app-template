import * as React from 'react';
import { MANAGE_PRODUCTS_INITIAL_STATE } from 'pages/manageProducts/state/initial';
import { ManageProductsContextProvider } from '../../state/context';

import ManageProductsIndex from '../ManageProductsIndex';

const ManageProductsOutlet = () => {
  return (
    <ManageProductsContextProvider initialState={MANAGE_PRODUCTS_INITIAL_STATE}>
      <ManageProductsIndex />
    </ManageProductsContextProvider>
  );
};

export default ManageProductsOutlet;

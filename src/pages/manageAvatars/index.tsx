import React from 'react';
import { MANAGE_PRODUCTS_INITIAL_STATE } from 'pages/manageProducts/utils/state/initial';
import { ManageProductsContextProvider } from './utils/state/context';
import ManageProductsOutlet from './components/ManageProductsOutlet';

const ManageProducts = () => {
  return (
    <ManageProductsContextProvider initialState={MANAGE_PRODUCTS_INITIAL_STATE}>
      <ManageProductsOutlet />
    </ManageProductsContextProvider>
  );
};

export default ManageProducts;

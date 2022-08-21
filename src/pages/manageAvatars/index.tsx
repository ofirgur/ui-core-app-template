import React from 'react';
import { MANAGE_PRODUCTS_INITIAL_STATE } from './utils/state/initial';
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

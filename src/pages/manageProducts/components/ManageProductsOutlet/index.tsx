import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { MANAGE_PRODUCTS_INITIAL_STATE } from 'pages/manageProducts/state/initial';
import { ManageProductsContextProvider } from '../../state/context';

const ManageProductsOutlet = () => {
  return (
    <ManageProductsContextProvider initialState={MANAGE_PRODUCTS_INITIAL_STATE}>
      <Outlet />
    </ManageProductsContextProvider>
  );
};

export default ManageProductsOutlet;

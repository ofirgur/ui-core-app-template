import * as React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import { MANAGE_PRODUCTS_INITIAL_STATE } from 'pages/manageProducts/utils/state/initial';
import { ManageProductsContextProvider } from '../../utils/state/context';
import ManageProductsIndex from '../ManageProductsIndex';
import ManageProductDetails from '../ManageProductDetails';

const ManageProductsOutlet = () => {
  return (
    <ManageProductsContextProvider initialState={MANAGE_PRODUCTS_INITIAL_STATE}>
      <React.Fragment>
        <Outlet />
        <Routes>
          <Route index element={<ManageProductsIndex />} />
          <Route path=":productId" element={<ManageProductDetails />} />
        </Routes>
      </React.Fragment>
    </ManageProductsContextProvider>
  );
};

export default ManageProductsOutlet;

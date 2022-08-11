import * as React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import { MANAGE_PRODUCTS_INITIAL_STATE } from 'pages/manageProducts/state/initial';
import { ManageProductsContextProvider } from '../../state/context';
import ManageProductsIndex from '../ManageProductsIndex';

const ManageProductsOutlet = () => {
  return (
    <ManageProductsContextProvider initialState={MANAGE_PRODUCTS_INITIAL_STATE}>
      <React.Fragment>
        <Outlet />
        <Routes>
          <Route index element={<ManageProductsIndex />} />
          <Route path={'add'} element={<div>Manage Products Add</div>} />
        </Routes>
      </React.Fragment>
    </ManageProductsContextProvider>
  );
};

export default ManageProductsOutlet;

import React from 'react';
import { Route } from 'react-router-dom';
import ManageProductsOutlet from './components/ManageProductsOutlet';
import ManageProductsIndex from './components/ManageProductsIndex';

export const gerManageProductsRoutes = (path: string) => {
  return (
    <Route path={path} element={<ManageProductsOutlet />}>
      <Route index element={<ManageProductsIndex />} />
      <Route path={'add'} element={<div>Manage Products Add</div>} />
    </Route>
  );
};

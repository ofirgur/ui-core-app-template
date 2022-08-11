import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../../routes';
import * as ELEMENTS from '../../elements';

import { gerManageProductsRoutes } from '../../../pages/manageProducts';

const {
  home,
  manageproducts,
  createajob,
  manageavatars,
  managegarments,
  status,
  notFound,
} = routes;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home.pathname} element={ELEMENTS.getAppElement()}>
          <Route index element={<div>Home</div>} />
          {gerManageProductsRoutes(manageproducts.pathname)}
          <Route
            path={createajob.pathname}
            element={ELEMENTS.getCreateAJobElement()}
          />
          <Route
            path={manageavatars.pathname}
            element={ELEMENTS.getManageAvatarsElement()}
          />
          <Route
            path={managegarments.pathname}
            element={ELEMENTS.getManageGarmentsElement()}
          />
          <Route path={status.pathname} element={ELEMENTS.getStatusElement()} />
          <Route
            path={notFound.pathname}
            element={ELEMENTS.getNotFoundElement()}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

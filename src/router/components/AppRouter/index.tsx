import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../../routes';
import * as ELEMENTS from '../../elements';

const {
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
        <Route
          path={manageproducts.pathname}
          element={ELEMENTS.getAppElement()}
        >
          <Route index element={ELEMENTS.getManageProductsElement()} />
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

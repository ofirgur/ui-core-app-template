import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routes from '../../routes';
import * as ELEMENTS from '../../elements';

const {
  home,
  manageproducts,
  createajob,
  manageavatars,
  managegarments,
  status,
  notfound,
} = routes;

const AppRouter = () => {
  const getPathname = (path: string) => `${path}/*`;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={home.path} element={ELEMENTS.getAppElement()}>
          <Route
            index
            element={<Navigate to={manageproducts.path} replace />}
          />
          <Route
            path={getPathname(manageproducts.path)}
            element={ELEMENTS.getManageProductsElement()}
          />
          <Route
            path={getPathname(createajob.path)}
            element={ELEMENTS.getCreateAJobElement()}
          />
          <Route
            path={getPathname(manageavatars.path)}
            element={ELEMENTS.getManageAvatarsElement()}
          />
          <Route
            path={getPathname(managegarments.path)}
            element={ELEMENTS.getManageGarmentsElement()}
          />
          <Route
            path={getPathname(status.path)}
            element={ELEMENTS.getStatusElement()}
          />
          <Route path={notfound.path} element={ELEMENTS.getNotFoundElement()} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

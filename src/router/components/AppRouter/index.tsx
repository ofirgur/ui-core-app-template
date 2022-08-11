import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../../routes';
import * as ELEMENTS from '../../elements';

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
  const getPathname = (path: string) => `${path}/*`;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={home.pathname} element={ELEMENTS.getAppElement()}>
          <Route index element={<div>Home</div>} />
          <Route
            path={getPathname(manageproducts.pathname)}
            element={ELEMENTS.getManageProductsElement()}
          />
          <Route
            path={getPathname(createajob.pathname)}
            element={ELEMENTS.getCreateAJobElement()}
          />
          <Route
            path={getPathname(manageavatars.pathname)}
            element={ELEMENTS.getManageAvatarsElement()}
          />
          <Route
            path={getPathname(managegarments.pathname)}
            element={ELEMENTS.getManageGarmentsElement()}
          />
          <Route
            path={getPathname(status.pathname)}
            element={ELEMENTS.getStatusElement()}
          />
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

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../../routes';
import * as PAGES from '../../elements';

const { dashboard, garments, collections, notFound } = routes;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={dashboard.pathname} element={PAGES.getAppElement()}>
          <Route index element={PAGES.getDashboardElement()} />
          <Route
            path={garments.pathname}
            element={PAGES.getGarmentsElement()}
          />
          <Route
            path={collections.pathname}
            element={PAGES.getCollectionsElement()}
          />
          <Route
            path={notFound.pathname}
            element={PAGES.getNotFoundElement()}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

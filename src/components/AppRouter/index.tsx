import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as PAGES from './elements';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={PAGES.getAppElement()}>
          <Route index element={PAGES.getDashboardElement()} />
          <Route path="garments" element={PAGES.getGarmentsElement()} />
          <Route path="collections" element={PAGES.getCollectionsElement()} />
          <Route path="*" element={PAGES.getNotFoundElement()} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

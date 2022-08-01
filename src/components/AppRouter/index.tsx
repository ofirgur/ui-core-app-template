import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from 'pages/dashboard';
import Garments from 'pages/garments';
import Collections from 'pages/collections';
import NotFoundPage from 'pages/notFoundPage';
import App from '../App';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="garments" element={<Garments />} />
          <Route path="collections" element={<Collections />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

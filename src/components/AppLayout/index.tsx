import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import Main from './components/Main';

const Layout = () => {
  return (
    <BrowserRouter>
      <LeftPanel />
      <Main />
    </BrowserRouter>
  );
};

export default Layout;

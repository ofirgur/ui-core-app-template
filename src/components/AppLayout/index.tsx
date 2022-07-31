import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import Main from './components/Main';
import { AppLayout } from '../AppLayout/styled';

const Layout = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <LeftPanel />
        <Main />
      </AppLayout>
    </BrowserRouter>
  );
};

export default Layout;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import Header from './components/Header';
import Main from './components/Main';

const Layout = () => {
  return (
    <BrowserRouter>
      <LeftPanel />
      <>
        <Header />
        <Main />
      </>
    </BrowserRouter>
  );
};

export default Layout;

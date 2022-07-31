import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import Main from './components/Main';
import { AppLayoutStyled } from '../AppLayout/styled';

const AppLayout = () => {
  return (
    <BrowserRouter>
      <AppLayoutStyled>
        <LeftPanel />
        <Main />
      </AppLayoutStyled>
    </BrowserRouter>
  );
};

export default AppLayout;

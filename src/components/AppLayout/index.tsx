import React from 'react';
import LeftPanel from './components/LeftPanel';
import Main from './components/Main';
import { AppLayoutStyled } from '../AppLayout/styled';

const AppLayout = () => {
  return (
    <AppLayoutStyled>
      <LeftPanel />
      <Main />
    </AppLayoutStyled>
  );
};

export default AppLayout;

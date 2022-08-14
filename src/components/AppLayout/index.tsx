import React from 'react';
//import { useTheme } from 'styled-components';
import LeftPanel from './components/LeftPanel';
import Main from './components/Main';
import { AppLayoutStyled } from '../AppLayout/styled';

const AppLayout = () => {
  //const theme = useTheme();
  //console.log('theme: ', theme);
  return (
    <AppLayoutStyled>
      <LeftPanel />
      <Main />
    </AppLayoutStyled>
  );
};

export default AppLayout;

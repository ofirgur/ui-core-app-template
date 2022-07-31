import React from 'react';
import Header from '../Header';
import Modules from '../Modules';
import { MainStyled } from './styled';

const Main = () => {
  return (
    <MainStyled>
      <Header />
      <Modules />
    </MainStyled>
  );
};

export default Main;

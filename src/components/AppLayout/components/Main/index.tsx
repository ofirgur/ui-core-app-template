import React from 'react';
import Header from '../Header';
import Pages from '../Pages';
import { MainStyled } from './styled';

const Main = () => {
  return (
    <MainStyled>
      <Header />
      <Pages />
    </MainStyled>
  );
};

export default Main;

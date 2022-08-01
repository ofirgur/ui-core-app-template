import React from 'react';
import { Outlet } from 'react-router-dom';
import { PagesStyled } from './styled';

const Pages = () => {
  return (
    <PagesStyled>
      <Outlet />
    </PagesStyled>
  );
};

export default Pages;

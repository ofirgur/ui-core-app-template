import React from 'react';
import { useCurrentRoute } from 'router/hooks';
import { HeaderStyled } from './styled';

const Header = () => {
  const currentRoute = useCurrentRoute();
  console.log('currentRoute: ', currentRoute);
  return <HeaderStyled>{currentRoute?.title}</HeaderStyled>;
};

export default Header;

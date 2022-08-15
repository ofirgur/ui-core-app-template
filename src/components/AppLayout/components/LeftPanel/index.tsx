import React from 'react';
import { useNavigate } from 'react-router-dom';
import STRINGS from '../../../../utils/strings';
import { useCurrentRoute } from 'router/hooks';
import { LIST_ITEMS } from './items';
import {
  StyledLeftPanel,
  StyledLogo,
  StyledList,
  StyledListItem,
} from './styled';

const LeftPanel = () => {
  const currentRoute = useCurrentRoute();
  const navigate = useNavigate();
  const handleNavigate = (pathname: string) => () => {
    navigate(pathname);
  };

  const isActiveRoute = (pathname: string) => {
    if (!currentRoute) return false;
    return currentRoute.pathname.includes(pathname);
  };

  return (
    <StyledLeftPanel>
      <StyledLogo>{STRINGS.Logo}</StyledLogo>
      <StyledList>
        {LIST_ITEMS.map((listItem) => {
          return (
            <StyledListItem
              key={listItem.pathname}
              onClick={handleNavigate(listItem.pathname)}
              active={isActiveRoute(listItem.pathname)}
            >
              {listItem.title}
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledLeftPanel>
  );
};

export default LeftPanel;

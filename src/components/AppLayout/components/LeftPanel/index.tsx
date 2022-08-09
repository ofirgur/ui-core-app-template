import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentRoute } from 'router/hooks';
import { LIST_ITEMS } from './items';
import { LeftPanelStyled, ListItemStyled } from './styled';

const LeftPanel = () => {
  const currentRoute = useCurrentRoute();
  const navigate = useNavigate();
  const handleNavigate = (pathname: string) => () => {
    navigate(pathname);
  };

  return (
    <LeftPanelStyled>
      {LIST_ITEMS.map((listItem) => {
        return (
          <ListItemStyled
            key={listItem.pathname}
            onClick={handleNavigate(listItem.pathname)}
            active={listItem.pathname === currentRoute.pathname}
          >
            {listItem.title}
          </ListItemStyled>
        );
      })}
    </LeftPanelStyled>
  );
};

export default LeftPanel;

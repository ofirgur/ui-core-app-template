import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentRoute } from 'router/hooks';
import routes from 'router/routes';
import { LeftPanelStyled, ListItemStyled } from './styled';

const { dashboard, garments, collections } = routes;

const LeftPanel = () => {
  const currentRoute = useCurrentRoute();
  const navigate = useNavigate();
  const handleNavigate = (pathname: string) => () => {
    navigate(pathname);
  };

  return (
    <LeftPanelStyled>
      <ListItemStyled
        onClick={handleNavigate(dashboard.pathname)}
        active={dashboard.pathname === currentRoute.pathname}
      >
        {dashboard.title}
      </ListItemStyled>
      <ListItemStyled
        onClick={handleNavigate(garments.pathname)}
        active={garments.pathname === currentRoute.pathname}
      >
        {garments.title}
      </ListItemStyled>
      <ListItemStyled
        onClick={handleNavigate(collections.pathname)}
        active={collections.pathname === currentRoute.pathname}
      >
        {collections.title}
      </ListItemStyled>
    </LeftPanelStyled>
  );
};

export default LeftPanel;

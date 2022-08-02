import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from 'router/routes';
import { LeftPanelStyled, ListItemStyled } from './styled';

const { dashboard, garments, collections } = routes;

const LeftPanel = () => {
  const navigate = useNavigate();
  const handleNavigate = (pathname: string) => () => {
    navigate(pathname);
  };

  return (
    <LeftPanelStyled>
      <ListItemStyled onClick={handleNavigate(dashboard.pathname)}>
        {dashboard.title}
      </ListItemStyled>
      <ListItemStyled onClick={handleNavigate(garments.pathname)}>
        {garments.title}
      </ListItemStyled>
      <ListItemStyled onClick={handleNavigate(collections.pathname)}>
        {collections.title}
      </ListItemStyled>
    </LeftPanelStyled>
  );
};

export default LeftPanel;

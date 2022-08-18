import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import STRINGS from '../../../../utils/strings';
import { StyledActionsColumn, StyledLink } from './styled';

type ActionsColumnProps = {
  productId: string;
};

export const ActionsColumn = (props: ActionsColumnProps) => {
  const { productId } = props;
  const navigate = useNavigate();
  const handleInfoClick = () => {
    navigate(productId);
  };

  return (
    <StyledActionsColumn>
      <li>
        <StyledLink onClick={handleInfoClick}>{STRINGS.Info}</StyledLink>
      </li>
      <li>
        <StyledLink>{STRINGS.QA}</StyledLink>
      </li>
      <li>
        <StyledLink>{STRINGS.Sync}</StyledLink>
      </li>
      <li>
        <StyledLink>{STRINGS.Archive}</StyledLink>
      </li>
    </StyledActionsColumn>
  );
};

export default ActionsColumn;

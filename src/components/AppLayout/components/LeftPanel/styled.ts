import styled from '@emotion/styled';
import { blue, grey } from '@mui/material/colors';

export const StyledLeftPanel = styled.div``;

export const StyledLogo = styled.div`
  height: 80px;
  line-height: 80px;
  font-size: 25px;
  font-weight: 600;
  padding: 0 10px;
`;

export const StyledList = styled.ul`
  width: 200px;
`;

type StyledListItemType = {
  active: boolean;
};

export const StyledListItem = styled.li<StyledListItemType>`
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  &:hover {
    background-color: ${blue[300]};
    font-weight: bold;
  }

  ${(p) =>
    p.active &&
    `
    background: ${grey[100]};
    color: #000;
  `}
`;

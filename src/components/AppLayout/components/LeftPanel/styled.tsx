import styled from '@emotion/styled';
import { blue, grey } from '@mui/material/colors';

export const LeftPanelStyled = styled.ul`
  width: 200px;
  margin-top: 70px;
`;

type ListItemStyledType = {
  active: boolean;
};

export const ListItemStyled = styled.li<ListItemStyledType>`
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
  padding: 20px;
  font-size: 20px;
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

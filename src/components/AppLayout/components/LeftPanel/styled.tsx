import styled from '@emotion/styled';
import { blue } from '@mui/material/colors';

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
  padding: 10px;
  font-size: 20px;
  background-color: ${(p) => (p.active ? blue[300] : '')};
  &:hover {
    background-color: ${blue[300]};
  }
`;

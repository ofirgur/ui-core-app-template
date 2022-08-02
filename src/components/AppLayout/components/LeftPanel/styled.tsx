import styled from 'styled-components';
import variables from 'utils/variables';

export const LeftPanelStyled = styled.ul`
  width: ${variables.layout.leftPanel.width}px;
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
  background-color: ${(p) => (p.active ? '#262626' : '')};
  &:hover {
    background-color: #262626;
  }
`;

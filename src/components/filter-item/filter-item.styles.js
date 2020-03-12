import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilterItem = styled(Link)`
  padding: 2rem 3rem;
  height: 3rem;
  border: 1px solid lightyellow;
  border-radius: 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #000;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.filterItemTextColor};
  transition: all 0.2s;
  ${props =>
    props.clickable
      ? `color: ${props.theme.filterItemTextColorDisabled}; pointer-events: none;`
      : ''}
  ${props =>
    props.active ? 'background-color: #54a0eb; border-color: white;' : ''}
    :not(:last-child) {
    margin-right: 1rem;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media only screen and (max-width: 950px) {
    padding: 2rem 2rem;
  }
  @media only screen and (max-width: 800px) {
    padding: 1.5rem 2rem;
    margin: 1rem 1rem 0 1rem;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 450px) {
    padding: 0 1rem;
    margin: 0.7rem 0.7rem 0 0.7rem;
    font-size: 1rem;
  }
`;

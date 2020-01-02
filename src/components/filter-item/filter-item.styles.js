import styled from 'styled-components';

export const FilterItem = styled.div`
  padding: 0.5rem 2rem;
  height: 3rem;
  border: 1px solid lightyellow;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
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
  @media only screen and (max-width: 800px) {
    padding: 0.3rem 1.5rem;
    margin: 1rem 1rem 0 1rem;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 400px) {
    padding: 0 1rem;
    margin: 0.7rem 0.7rem 0 0.7rem;
    font-size: 1rem;
  }
`;

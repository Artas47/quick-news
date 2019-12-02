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
  transition: all 0.2s;
  ${props =>
    props.clickable ? 'color: #ccc; pointer-events: none;' : ''}
  ${props =>
    props.active
      ? 'background-color: #54a0eb; border-color: white;'
      : ''}
    :not(:last-child) {
    margin-right: 1rem;
  }
`;

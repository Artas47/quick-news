import styled from 'styled-components';

export const Filters = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  background-color: ${props => props.theme.filtersBg};
  border-bottom: 2px solid ${props => props.theme.headerBorderBottomColor};

  @media only screen and (max-width: 800px) {
    padding: 7rem 0;
  }
  @media only screen and (max-width: 450px) {
    padding: 7rem 0;
  }
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 800px) {
    margin-bottom: 0;
  }
`;

export const SortBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 800px) {
    margin-bottom: 1.5rem;
  }
`;

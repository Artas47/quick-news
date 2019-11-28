import styled from 'styled-components';

export const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-auto-rows: 30rem;
  grid-auto-flow: dense;
  justify-items: center;
  grid-gap: 3rem;
`;

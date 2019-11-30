import styled from 'styled-components';

export const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-auto-rows: 30rem;
  grid-auto-flow: dense;
  grid-gap: 3rem;

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

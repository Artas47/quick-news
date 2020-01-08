import styled from 'styled-components';

export const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(43rem, 1fr));
  grid-auto-rows: 28rem;
  grid-auto-flow: dense;
  grid-gap: 3rem;
  padding: 2rem 2rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 3rem;
  }
  @media only screen and (max-width: 700px) {
    padding: 1rem 2rem;
  }
`;

export const NewsNotFoundText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  height: 100%;
  transition: all 0.4s;
  color: ${props => props.theme.newsNotFoundTextColor};
`;

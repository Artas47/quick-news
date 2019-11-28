import styled from 'styled-components';

export const NewsItem = styled.div(props => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  gridColumn: `${props.width > 1200 ? 'span 2' : ''}`,
}));

export const NewsItemImg = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(0.5);
`;

export const NewsItemTitle = styled.p`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: white;
  font-size: 3rem;
`;

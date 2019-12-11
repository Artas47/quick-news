import styled from 'styled-components';

export const NewsItem = styled.a(props => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  gridRow: `${props.width > 1200 ? 'span 2' : ''}`,
  gridColumn: `${props.width > 1200 ? 'span 2' : ''}`,
  boxShadow: '0 2rem 2rem rgb(0,0,0,0.6)',
  alignSelf: 'start',
  justifySelf: 'start',
  visibility: `${!props.visibility ? 'visible' : 'hidden'}`,
  transition: 'all 1s'
}));

export const NewsItemImg = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(0.4);
`;

export const NewsItemTitle = styled.p`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: white;
  font-size: 3rem;
  @media only screen and (max-width: 650px) {
    font-size: 2.3rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

export const ImageNotLoaded = styled.div`
  position: absolute;
  font-size: 5rem;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageAndTitleBox = styled.div`
  width: 100%;
  height: 100%;
  visibility: ${props => (props.visibility ? 'visible' : 'hidden')};
`;

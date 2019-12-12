import styled from 'styled-components';
import Background from '../../assets/img-not-found.png';

export const NewsItem = styled.a`
  width: 100%;
  height: 100%;
  position: relative;
  grid-row: ${props => (props.width > 1200 ? 'span 2' : '')};
  grid-column: ${props => (props.width > 1200 ? 'span 2' : '')};
  box-shadow: 0 2rem 2rem rgb(0, 0, 0, 0.6);
  align-self: start;
  justify-self: start;
  visibility: ${props => (!props.visibility ? 'visible' : 'hidden')};
  transition: all 1s;
  background-image: ${props => (props.background ? `url(${Background})` : '')};
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 900px) {
    height: ${props => (props.height === 0 ? '35rem' : '100%')};
    box-shadow: 0 2rem 2rem rgb(0, 0, 0, 0.2);
  }
`;

export const NewsItemImg = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(0.4);
  visibility: ${props => (props.visibility ? 'visible' : 'hidden')};
`;

export const NewsItemTitle = styled.p`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: white;
  font-size: 3rem;
  visibility: ${props => (props.visibility ? 'visible' : 'hidden')};
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

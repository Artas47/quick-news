import styled from 'styled-components';
import { ReactComponent as ArrowRightSVG } from '../../assets/arrow-right2.svg';
import { ReactComponent as CancelSVG } from '../../assets/cross.svg';
import Button from '../button/button';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  position: relative;
  color: white;
  z-index: 3;
  width: 100rem;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 0 1rem 2rem rgb(0, 0, 0, 0.9);
  overflow-y: scroll;
  @media only screen and (max-width: 1200px) {
    width: 70%;
    margin-top: 0;
  }
  @media only screen and (max-width: 900px) {
    height: 80%;
  }
`;

export const ModalImage = styled.div`
  position: relative;
  height: 80%;
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.5886729691876751) 49%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0) 100%
    ),
    ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 900px) {
    height: 60%;
  }
  @media only screen and (max-height: 500px) {
    height: 30rem;
  }
`;

export const ModalDescription = styled.div`
  position: relative;
  padding: 3rem;
  background-color: #575757;
  width: 100%;

  /* @media only screen and (max-width: 1000px) {
    height: 60%;
  } */
  @media only screen and (max-width: 900px) {
    min-height: 40%;
  }
  @media only screen and (max-width: 800px) {
    padding: 2rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 1.5rem;
  }
  @media only screen and (max-width: 400px) {
    padding: 1rem;
  }
  @media only screen and (max-height: 500px) {
    height: 100%;
  }
`;

export const ModalTitle = styled.h3`
  position: absolute;
  bottom: 3rem;
  left: 0;
  padding: 0rem 3rem;
  font-size: 3rem;
  font-weight: 500;
  @media only screen and (max-width: 1000px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 550px) {
    padding: 0rem 2rem;
    bottom: 1rem;
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 450px) {
    font-size: 1.9rem;
    padding: 0rem 1rem;
  }
`;

export const ModalDetails = styled.p`
  font-size: 2.1rem;
  margin-top: 3rem;
  line-height: 1.8;
  letter-spacing: 1px;
  padding: 1rem 0;
  margin-bottom: 6rem;
  @media only screen and (max-width: 800px) {
    margin-top: 2rem;
    font-size: 1.6rem;
    line-height: 1.6;
  }
  @media only screen and (max-width: 650px) {
    margin-bottom: 8rem;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
    line-height: 1.4;
    font-size: 1.4rem;
  }
`;

export const ModalDetailsItem = styled.p`
  :not(:last-child) {
    margin-right: 4rem;
  }
`;

export const ArrowRight = styled(ArrowRightSVG)`
  display: inline-block;
  fill: #fff;
  height: 2rem;
  width: 2rem;
  margin-left: 1.5rem;
`;

export const ModalButton = styled(Button)`
  position: absolute;
  bottom: 2rem;
  right: 4rem;
  margin-top: 5rem;
  word-wrap: normal;
  @media only screen and (max-width: 650px) {
    width: 60%;
    font-size: 1.5rem;
    right: 50%;
    transform: translate(50%, 0);
    padding: 1rem 2rem;
  }
  @media only screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const ModalRelease = styled.p`
  position: absolute;
  top: 2rem;
  right: 4rem;
  font-size: 1.5rem;
  @media only screen and (max-width: 800px) {
    top: 1rem;
    right: 2rem;
  }
  @media only screen and (max-width: 450px) {
    top: 0.5rem;
    right: 1rem;
  }
`;

export const ModalCancel = styled(CancelSVG)`
  position: sticky;
  top: 2rem;
  right: 1rem;
  margin-left: 95%;
  height: 2rem;
  fill: #a9a9a9;
  z-index: 5;
  cursor: pointer;
`;

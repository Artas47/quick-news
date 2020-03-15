import styled, { css } from 'styled-components';

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
  position: sticky;
  color: white;
  z-index: 3;
  width: 110rem;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 0 1rem 2rem rgb(0, 0, 0, 0.9);
  overflow-y: scroll;
  @media only screen and (max-width: 1200px) {
    width: 85rem;
    margin-top: 0;
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
  left: 3rem;
  font-size: 3rem;
  font-weight: 500;
`;

export const ModalPlot = styled.p`
  font-size: 2.1rem;
  margin-top: 3rem;
  line-height: 1.8;
  letter-spacing: 1.3px;
  @media only screen and (max-width: 800px) {
    margin-top: 2rem;
    font-size: 1.6rem;
    line-height: 1.6;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
    line-height: 1.4;
    font-size: 1.4rem;
  }
`;

export const ModalDetails = styled.div`
  display: flex;
  font-size: 1.3rem;
  margin-top: 1rem;
`;

export const ModalDetailsItem = styled.p`
  :not(:last-child) {
    margin-right: 4rem;
  }
`;

import styled from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5vh;
  background-color: #919191;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;

  @media only screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

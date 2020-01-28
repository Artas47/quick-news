import styled from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.footerBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  transition: all 1s;

  @media only screen and (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const PoweredByText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
`;

export const CopyrightText = styled.p`
  font-size: 1.1rem;
`;

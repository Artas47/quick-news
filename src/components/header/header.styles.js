import styled from 'styled-components';

export const Header = styled.div`
  position: sticky;
  width: 100%;
  z-index: 999;
  height: 10rem;
  background-color: ${props => props.theme.headerBg};
  padding: 1rem;
  display: flex;
  justify-content: center;
  top: 0;
  transition: all 1s;
  border-bottom: 2px solid ${props => props.theme.headerBorderBottomColor};
  @media only screen and (max-width: 900px) {
    height: 14rem;
  }
`;

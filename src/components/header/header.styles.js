import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo-name.svg';

export const Header = styled.div`
  width: 100%;
  z-index: 999;
  height: 10rem;
  background-color: ${props => props.theme.headerBg};
  padding: 3rem;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  transition: all 1s;
  border-bottom: 2px solid ${props => props.theme.headerBorderBottomColor};
  @media only screen and (max-width: 850px) {
    height: 14rem;
  }
`;

export const LogoAndName = styled(Logo)`
  position: absolute;
  cursor: pointer;
  fill: ${props => props.theme.headerLogoColor};
  top: 50%;
  left: 3rem;
  transform: translate(0, -50%);
  @media only screen and (max-width: 850px) {
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

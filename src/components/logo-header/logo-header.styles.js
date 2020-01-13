import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo-name.svg';

export const LogoHeader = styled(Logo)`
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

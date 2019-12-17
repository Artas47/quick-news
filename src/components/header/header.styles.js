import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo-name.svg';

export const Header = styled.div`
  width: 100%;
  z-index: 999;
  height: 10rem;
  background-color: white;
  padding: 3rem;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
`;

export const LogoAndName = styled(Logo)`
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translate(0, -50%);
`;

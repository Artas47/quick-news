import styled from 'styled-components';
import { ReactComponent as Settings } from '../../assets/settings.svg';

export const SettingsSvg = styled(Settings)`
  position: absolute;
  top: 3rem;
  right: 11rem;
  fill: #8a8a8a;
  cursor: pointer;
  transition: all 0.2s;
  @media only screen and (max-width: 700px) {
    top: 4.5rem;
    right: 3rem;
  }
  @media only screen and (max-width: 550px) {
    width: 2.5rem;
    top: 3rem;
  }
  @media only screen and (max-width: 450px) {
    right: 2.5rem;
  }
`;

export const SettingsBox = styled.div`
  width: 20rem;
  height: 40rem;
`;

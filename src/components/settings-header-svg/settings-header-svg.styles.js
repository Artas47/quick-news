import styled from 'styled-components';
import { ReactComponent as Settings } from '../../assets/settings.svg';

export const SettingsSvg = styled(Settings)`
  position: absolute;
  top: 3rem;
  right: 11rem;
  fill: #8a8a8a;
  cursor: pointer;
  transition: all 0.2s;
`;

export const SettingsBox = styled.div`
  width: 20rem;
  height: 40rem;
`;

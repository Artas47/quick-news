import React from 'react';
import * as Styled from './settings-header-svg.styles';

const SettingsHeaderSvg = props => {
  const { onClick } = props;
  return <Styled.SettingsSvg onClick={onClick} />;
};

export default SettingsHeaderSvg;

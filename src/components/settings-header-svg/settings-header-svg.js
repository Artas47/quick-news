import React from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './settings-header-svg.styles';
import { toggleSetting } from '../../actions/index';

const SettingsHeaderSvg = () => {
  const dispatch = useDispatch();
  return <Styled.SettingsSvg onClick={() => dispatch(toggleSetting())} />;
};

export default SettingsHeaderSvg;

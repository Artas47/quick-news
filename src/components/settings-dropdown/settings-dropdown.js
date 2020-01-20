import React from 'react';
import { useDispatch } from 'react-redux';
import { themeChange, newsSizeChange } from '../../actions/index';
import * as Styled from './settings-dropdown.styles.';
import ToggleButton from '../toggle-button/toggle-button';

const SettingsBox = () => {
  const dispatch = useDispatch();
  return (
    <Styled.SettingsBox>
      <Styled.SettingsBoxText>Settings</Styled.SettingsBoxText>
      <Styled.OptionBox>
        <Styled.OptionText>Dark mode</Styled.OptionText>
        <Styled.OptionButton>
          <ToggleButton id="theme-toogle-button" onClickAction={() => dispatch(themeChange())} />
        </Styled.OptionButton>
      </Styled.OptionBox>
      <Styled.OptionBox>
        <Styled.OptionText>One sized news</Styled.OptionText>
        <Styled.OptionButton>
          <ToggleButton id="size-toogle-button" onClickAction={() => dispatch(newsSizeChange())} />
        </Styled.OptionButton>
      </Styled.OptionBox>
    </Styled.SettingsBox>
  );
};

export default SettingsBox;

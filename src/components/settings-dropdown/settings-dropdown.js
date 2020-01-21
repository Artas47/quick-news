import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeChange, newsSizeChange } from '../../actions/index';
import * as Styled from './settings-dropdown.styles.';
import Checkbox from '../checkbox/checkbox';

const SettingsBox = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);

  return (
    <Styled.SettingsBox>
      <Styled.SettingsBoxText>Settings</Styled.SettingsBoxText>
      {Object.keys(settings).map(item => {
        const onClickAction = () => {
          switch (item.toString()) {
            case 'oneSizedNews':
              dispatch(newsSizeChange());
              break;
            case 'darkTheme':
              dispatch(themeChange());
              break;
            default:
              break;
          }
        };
        return (
          <Styled.OptionBox key={item}>
            <Styled.OptionText>{settings[item].displayText}</Styled.OptionText>
            <Checkbox
              id="theme-toogle-button"
              isChecked={settings[item].value}
              onClickAction={onClickAction}
            />
          </Styled.OptionBox>
        );
      })}
    </Styled.SettingsBox>
  );
};

export default SettingsBox;

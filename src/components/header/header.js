import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../search-bar/search-bar';
import LanguageChoose from '../language-choose/language-choose';
import BookmarkHeader from '../bookmark-header/bookmark-header';
import LogoHeader from '../logo-header/logo-header';
import SettingsDropdown from '../settings-dropdown/settings-dropdown';
import SettingsHeaderSvg from '../settings-header-svg/settings-header-svg';
import * as Styled from './header.styles';

export const Header = () => {
  const showSettings = useSelector(state => state.settings.showSettings);
  console.log('s', showSettings);
  return (
    <Styled.Header>
      <LogoHeader />
      <SearchBar />
      <LanguageChoose />
      <BookmarkHeader />
      <SettingsHeaderSvg />
      {showSettings ? <SettingsDropdown /> : ''}
    </Styled.Header>
  );
};

export default Header;

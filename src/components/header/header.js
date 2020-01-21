import React, { useState } from 'react';
import SearchBar from '../search-bar/search-bar';
import LanguageChoose from '../language-choose/language-choose';
import BookmarkHeader from '../bookmark-header/bookmark-header';
import LogoHeader from '../logo-header/logo-header';
import SettingsDropdown from '../settings-dropdown/settings-dropdown';
import SettingsHeaderSvg from '../settings-header-svg/settings-header-svg';
import * as Styled from './header.styles';

export const Header = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <Styled.Header>
      <LogoHeader />
      <SearchBar />
      <LanguageChoose />
      <BookmarkHeader />
      <SettingsHeaderSvg onClick={() => setShowSettings(!showSettings)} />
      {showSettings ? <SettingsDropdown /> : ''}
    </Styled.Header>
  );
};

export default Header;

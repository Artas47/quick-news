import React from 'react';
import SearchBar from '../search-bar/search-bar';
import LanguageChoose from '../language-choose/language-choose';
import ThemeToggleButton from '../theme-toggle-button/theme-toggle-button';
import BookmarkHeader from '../bookmark-header/bookmark-header';
import * as Styled from './header.styles';

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.LogoAndName onClick={() => window.scrollTo(0, 0)} />
      <SearchBar />
      <LanguageChoose />
      <ThemeToggleButton />
      <BookmarkHeader />
    </Styled.Header>
  );
};

export default Header;

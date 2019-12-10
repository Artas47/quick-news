import React from 'react';
import SearchBar from '../search-bar/search-bar';
import LanguageChoose from '../language-choose/language-choose';
import * as Styled from './header.styles';

export const Header = () => {
  return (
    <Styled.Header>
      <SearchBar />
      <LanguageChoose />
    </Styled.Header>
  );
};

export default Header;

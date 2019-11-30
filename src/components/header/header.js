import React from 'react';
import SearchBar from '../search-bar/search-bar';
import * as Styled from './header.styles';

export const Header = () => {
  return (
    <Styled.Header>
      <SearchBar />
    </Styled.Header>
  );
};

export default Header;

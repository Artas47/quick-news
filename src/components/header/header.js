import React from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../search-bar/search-bar';
import LanguageChoose from '../language-choose/language-choose';
import { themeChange } from '../../actions/index';
import * as Styled from './header.styles';

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <Styled.Header>
      <Styled.LogoAndName onClick={() => window.scrollTo(0, 0)} />
      <SearchBar />
      <LanguageChoose />
      <button onClick={() => dispatch(themeChange())}>change theme</button>
    </Styled.Header>
  );
};

export default Header;

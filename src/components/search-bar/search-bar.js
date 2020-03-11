import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Styled from './search-bar.styles';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { searchChange, fetchSearchNewsStart } from '../../actions/index';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(state => state.language.activeLanguage);
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const onInputChange = event => {
    setSearchTerm(event.target.value);
    dispatch(searchChange(event.target.value));
  };
  const onSubmit = event => {
    event.preventDefault();
    if (searchTerm.length) {
      history.push(`/search/${searchTerm}/popularity`);
      dispatch(fetchSearchNewsStart(searchTerm, 'popularity', activeLanguage));
    }
  };
  return (
    <Styled.Form onSubmit={onSubmit}>
      <Styled.SearchBar value={searchTerm} onChange={onInputChange} placeholder="Search for news" />
      <Styled.SearchBarBtn type="submit">
        <SearchIcon style={{ width: '2.5rem' }} type="submit" />
      </Styled.SearchBarBtn>
    </Styled.Form>
  );
};

export default SearchBar;

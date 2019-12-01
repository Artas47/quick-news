import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './search-bar.styles';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import {
  searchChange,
  fetchSearchNewsStart,
} from '../../actions/index';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = event => {
    setSearchTerm(event.target.value);
    dispatch(searchChange(event.target.value));
  };
  const onSubmit = event => {
    event.preventDefault();
    if (searchTerm.length) {
      dispatch(fetchSearchNewsStart(searchTerm));
    }
  };
  return (
    <Styled.Form onSubmit={onSubmit}>
      <Styled.SearchBar
        value={searchTerm}
        onChange={onInputChange}
        placeholder={'Search for news'}
      />

      <Styled.SearchBarBtn type="submit">
        <SearchIcon style={{ width: '2.5rem' }} type="submit" />
      </Styled.SearchBarBtn>
    </Styled.Form>
  );
};

export default SearchBar;

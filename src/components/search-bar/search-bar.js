import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './search-bar.styles';
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
    console.log(searchTerm);
    dispatch(fetchSearchNewsStart(searchTerm));
  };
  return (
    <form onSubmit={onSubmit}>
      <Styled.SearchBar
        value={searchTerm}
        onChange={onInputChange}
        placeholder={'Search for news'}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

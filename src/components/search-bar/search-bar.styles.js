import styled from 'styled-components';

export const SearchBar = styled.input`
  width: 30rem;
  padding: 1rem 1.5rem;
  border: none;
  border-bottom: 2px solid darkgrey;
  position: relative;
  font-size: 2rem;
  transition: all 0.2s;

  ::placeholder {
    color: grey;
  }
  :focus {
    outline: none;
    border-bottom-color: #03a9fc;
  }
`;

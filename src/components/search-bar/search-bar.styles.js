import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 40rem;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  padding-left: 0.5rem;
  border: none;
  border-bottom: 2px solid darkgrey;
  position: relative;
  font-size: 2rem;
  transition: all 0.2s;
  :focus {
    outline: none;
    border-bottom-color: #4c8ce0;
  }

  ::placeholder {
    color: grey;
  }
`;

export const SearchBarBtn = styled.button`
  border: none;
  background-color: white;
  margin-left: -5rem;
  z-index: 1000;
  fill: darkgray;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

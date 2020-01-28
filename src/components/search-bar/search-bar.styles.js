import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 40rem;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 900px) {
    margin-bottom: -2.5rem;
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: -4.5rem;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  padding-left: 0.5rem;
  border: none;
  border-bottom: 2px solid darkgrey;
  position: relative;
  color: ${props => props.theme.searchInputTextColor};
  font-size: 2rem;
  transition: border-bottom-color 0.2s, background-color 1s;
  background-color: ${props => props.theme.headerBg};

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
  background-color: ${props => props.theme.headerBg};
  margin-left: -5rem;
  transition: all 1s;
  z-index: 2;
  fill: darkgray;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

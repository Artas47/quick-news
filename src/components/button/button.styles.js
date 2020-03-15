import styled from 'styled-components';

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-size: 2rem;
  padding: 1rem 3rem;
  transition: all 0.2s;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

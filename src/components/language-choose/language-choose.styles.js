import styled from 'styled-components';

export const LanguageChoose = styled.div`
  position: absolute;
  display: flex;
  font-size: 1.5rem;
  top: 2rem;
  right: 3rem;
  user-select: none;

  @media only screen and (max-width: 750px) {
    top: 1rem;
    right: 2rem;
  }
  @media only screen and (max-width: 450px) {
    top: 0.5rem;
    right: 1rem;
  }
`;

export const Language = styled.p`
  cursor: pointer;
  height: 2rem;
  transition: all 1s;
  :not(:last-child) {
    margin-right: 2rem;
  }
  ${props => (props.active ? 'border-bottom: 1px solid black' : '')}
`;

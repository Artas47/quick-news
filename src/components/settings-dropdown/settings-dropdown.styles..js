import styled from 'styled-components';

export const SettingsBox = styled.div`
  position: absolute;
  top: 9rem;
  right: 3rem;
  width: 20rem;
  height: 23rem;
  border: 3px solid #c4c4c4;
  background-color: white;
  z-index: 3;
  display: flex;
  flex-direction: column;
`;

export const SettingsBoxText = styled.p`
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  text-align: center;
  justify-self: flex-start;
`;

export const OptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const OptionText = styled.p`
  font-size: 1.7rem;
`;

import React from 'react';
import * as Styled from './logo-header.styles';
import { useHistory } from 'react-router-dom';

const LogoHeader = () => {
  const history = useHistory();
  return (
    <Styled.LogoHeader
      onClick={() => {
        history.push('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
};

export default LogoHeader;

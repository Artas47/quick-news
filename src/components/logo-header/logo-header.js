import React from 'react';
import * as Styled from './logo-header.styles';

const LogoHeader = () => {
  return <Styled.LogoHeader onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />;
};

export default LogoHeader;

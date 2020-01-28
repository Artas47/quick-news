import React from 'react';
import * as Styled from './footer.styles';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.PoweredByText>powered by NewsAPI.org</Styled.PoweredByText>
      <Styled.CopyrightText>© 2020 Artur Gorzelany All Rights Reserved</Styled.CopyrightText>
    </Styled.Footer>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
// import logo from '/logo.png';

const { colors } = theme;

const StyledContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 10px;
  background-color: ${colors.black};
  width: 100%;
`;

const Header = () => {
  return (
    <StyledContainer>
      <img src="/logo.png" alt="Logo" height="50" width="auto" />
    </StyledContainer>
  );
};

export default Header;

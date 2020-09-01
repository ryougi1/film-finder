/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { theme, mixins } from '../styles';

const { colors } = theme;

const StyledContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 10px;
  background-color: ${colors.black};
  width: 100%;
  z-index: 10;
`;

const Header = () => {
  return (
    <StyledContainer>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="Logo" height="50" width="auto" />
        </a>
      </Link>
    </StyledContainer>
  );
};

export default Header;

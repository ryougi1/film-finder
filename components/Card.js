import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';

const { colors } = theme;

const StyledContainer = styled.div`
  border: 0px solid ${colors.black};
  padding: 25px 12px 18px;
`;

const Details = styled.h2`
  color: #ffffff;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Card = ({ title, releaseDate, posterLink }) => (
  <StyledContainer data-cy="moviecard">
    <StyledImg src={posterLink} />
    <Details>
      {title}
      {'\n'}
      {releaseDate}
    </Details>
  </StyledContainer>
);

export default Card;

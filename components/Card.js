/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Date from './Date';
import { theme } from '../styles';

const { colors } = theme;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border: 4px solid ${colors.black};
  background: ${colors.black};
  width: 350px;
  min-height: 500px;
  cursor: pointer;
  z-index: 5;
`;

const StyledImg = styled.img`
  width: 100%;
  max-height: 450px;
  display: block;
  object-fit: cover;
`;

const StyledText = styled.h3`
  font-size: 22;
  font-weight: 600;
  margin-top: 10px;
  padding: 10px;
  line-height: 100%;
`;

const Card = ({ title, releaseDate, posterLink }) => {
  return (
    <StyledContainer data-cy="moviecard">
      <StyledImg src={posterLink} alt="Poster" />
      <StyledText>
        {`${title} - `}
        <Date dateString={releaseDate} context="card" />
      </StyledText>
    </StyledContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  posterLink: PropTypes.string.isRequired,
};

export default Card;

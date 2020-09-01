import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h2`
  font-size: 28px
  font-weight: 700
`;

const Heading = ({ value }) => <StyledHeading>{value}</StyledHeading>;

Heading.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Heading;

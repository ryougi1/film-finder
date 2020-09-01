import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../styles';

const { colors } = theme;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 90px;
  margin-bottom: 50px;
  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
    min-width: 50vw;
    input {
      background-color: ${colors.white};
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 100%;
      margin: 0 auto;
      padding: 0.75rem;
      color: ${colors.bg};
      font-size: 1.25rem;
      font-weight: 400;
      text-align: center;

      transition: 0.4s ease-out;
      &:hover,
      &:focus {
        box-shadow: 0px 0px 4px 4px ${colors.white};
        background-color: ${colors.lbg1};
      }
    }
  }
`;

const Search = ({ handleInput, search }) => {
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <StyledContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>Find Your Film</h1>
        <label htmlFor="search"> </label>
        <input
          type="text"
          placeholder="E.g. Spiderman"
          onChange={handleInput}
          onKeyPress={search}
          ref={inputElement}
          data-cy="searchBar"
          id="search"
        />
      </form>
    </StyledContainer>
  );
};

Search.propTypes = {
  handleInput: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default Search;

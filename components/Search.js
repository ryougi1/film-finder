import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleInput, search }) => {
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <section>
      <input
        type="text"
        placeholder="E.g. Spiderman"
        onChange={handleInput}
        onKeyPress={search}
        ref={inputElement}
        data-cy="searchBar"
      />
    </section>
  );
};

Search.propTypes = {
  handleInput: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default Search;

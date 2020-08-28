import react, { useRef, useEffect } from "react";

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

export default Search;

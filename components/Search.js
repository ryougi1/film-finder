const Search = ({ handleInput, search }) => {
  return (
    <section>
      <input
        type="text"
        placeholder="E.g. Spiderman"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
};

export default Search;

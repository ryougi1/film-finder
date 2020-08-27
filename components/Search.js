const Search = ({ handleInput }) => {
  return (
    <section>
      <input type="text" placeholder="E.g. Spiderman" onChange={handleInput} />
    </section>
  );
};

export default Search;

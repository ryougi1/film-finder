const API_KEY = "246c9fe0c19d878b718e9fad31dc690f";

export const getTrending = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

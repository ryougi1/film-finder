const API_KEY = '246c9fe0c19d878b718e9fad31dc690f';

export const getTrending = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

export const getMovieById = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
  );
  const data = await res.json();
  return data;
};

export const searchMovie = async (query, pageNr) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${pageNr}`
  );
  const data = await res.json();
  return data;
};

export const getActorById = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}/?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

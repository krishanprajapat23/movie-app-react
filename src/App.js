import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";

//    7581f4b9
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const API_URL = "http://www.omdbapi.com/?apikey=7581f4b9";
  // const movie = {
  //   Title: "Spiderman",
  //   Year: "2012",
  //   imdbID: "tt255456",
  //   Type: "movie",
  //   Poster: "https://imgs.search.brave.com/3c2tmbQDHDtufuksc1OU3ZU87NVbr22xoD7_7YMDa1Q/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3Avb3JpZ2luYWwv/d1pHbGFNeEJBakNJ/WUx6eURXdm9jYW9O/b29aLmpwZw",
  // };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovies(e.target.value)
      // console.log(e.target.value)
    }
  };


  return (
    <div className="app">
    <h1>Movie App</h1>

    <div className="search">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleKeyDown}
        placeholder="Search for movies"
      />
      <span
      onClick={() => searchMovies(searchTerm)}
      >🔍</span>
    </div>

    {movies?.length > 0 ? (
      <div className="container">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.imdbID}/>
        ))}
      </div>
    ) : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
    )}
  </div>
  );
};

export default App;

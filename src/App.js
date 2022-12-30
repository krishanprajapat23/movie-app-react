import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";

//    7581f4b9
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const API_URL = "http://www.omdbapi.com/?apikey=7581f4b9";
  const movie1 = {
    Title: "Spiderman",
    Year: "2022",
    imdbID: "tt255456",
    Type: "movie",
    Poster: "N/A",
  };

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

import React from "react";

const movie = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    // const [movies, setMovies] = useState([])

  return (
    <>
      <div className="movie">
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img
            src={
              Poster !== "N/A"
                ? Poster
                : `https://via.placeholder.com/480`
            }
            alt={Title}
          />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    </>
  );
};


export default movie;
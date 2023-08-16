import "./Movies.css";
import { useState } from "react";
import movies from "../../db/movies.json";
import MoviesWrapper from "./MoviesWrapper";
import MoviesMain from "./MoviesMain";
import Cards from "./Cards";

function Movies() {
  const [moviesList, setMoviesList] = useState(movies);

  const filterComedy = () => {
    let comedyMovies = movies.filter((movie) => {
      return movie.genre.includes("Comedy");
    });
    setMoviesList(comedyMovies);
  };
  const filterDrama = () => {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    setMoviesList(dramaMovies);
  };
  const noFilter = () => setMoviesList(movies);

  return (
    <MoviesMain>
      <div className="actions">
        <button onClick={noFilter}>All</button>
        <button onClick={filterComedy}>Comedy</button>
        <button onClick={filterDrama}>Drama</button>
      </div>
      <MoviesWrapper>
        {moviesList.map((movie) => (
          <Cards key={movie.id} movie={movie}/>
        ))}
      </MoviesWrapper>
    </MoviesMain>
  );
}

export default Movies;

// import "./Movies.css";
import { useState } from "react";
import movies from "../../db/movies.json";
import MoviesWrapper from "./MoviesWrapper";
import MoviesMain from "./MoviesMain";
import Cards from "./Cards";
import MoviesActions from "./MoviesActions";

function Movies() {
  const [moviesList, setMoviesList] = useState(movies);
  const [fadeIn, setFadeIn] = useState(true);

  const changeVisibility = (filteredMovies) => {
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);
      setMoviesList(filteredMovies);
    }, 500);
  };

  const filterComedy = () => {
    let comedyMovies = movies.filter((movie) => {
      return movie.genre.includes("Comedy");
    });
    changeVisibility(comedyMovies);
  };
  const filterDrama = () => {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    changeVisibility(dramaMovies);
  };
  const noFilter = () => {
    setMoviesList(movies);
    changeVisibility(movies);
  };

  return (
    <MoviesMain>
      <MoviesActions
        onFilterComedy={filterComedy}
        onFilterDrama={filterDrama}
        onNoFilter={noFilter}
      />
      <MoviesWrapper>
        {moviesList.map((movie) => (
          <Cards key={movie.id} movie={movie} fadeIn={fadeIn} />
        ))}
      </MoviesWrapper>
    </MoviesMain>
  );
}

export default Movies;

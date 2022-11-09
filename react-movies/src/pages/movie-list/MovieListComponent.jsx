import { useEffect, useState } from 'react';
import { MovieCardComponent } from './MovieCardComponent';
import './MovieListComponent.css';

export function MovieListComponent() {
  const moviesUrl = 'http://localhost:3001/movies';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(moviesUrl)
      .then((response) => response.json())
      .then((moviesFromServer) => {
        setMovies(moviesFromServer);
      });
  }, []);

  return (
    <section>
      <header>
        <h1 className="movie-list--title">
          Movie list
        </h1>
      </header>

      <ul className='movie-list'>
        {movies.map((movie) => {
          return (
            <MovieCardComponent
              Title={movie.Title}
              Year={movie.Year}
              Type={movie.Type}
              Poster={movie.Poster}
              id={movie.id}
              key={movie.id}
            ></MovieCardComponent>
          );
        })}
      </ul>
    </section>
  );
}

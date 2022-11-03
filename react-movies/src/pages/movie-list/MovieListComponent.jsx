import { useEffect, useState } from 'react';
import { MovieCardComponent } from './MovieCardComponent';
import './MovieListComponent.css';

export function MovieListComponent() {
  const moviesUrl = 'http://localhost:3001/movies';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(sessionStorage.getItem('movies'));

    if (movies) {
      setMovies(movies);
    } else {
      fetch(moviesUrl)
        .then((response) => response.json())
        .then((moviesFromServer) => {
          sessionStorage.setItem('movies', JSON.stringify(moviesFromServer))
          setMovies(moviesFromServer);
        });
    }
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
            ></MovieCardComponent>
          );
        })}
      </ul>
    </section>
  );
}

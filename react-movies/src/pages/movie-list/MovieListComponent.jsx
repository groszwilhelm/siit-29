import { useEffect, useState } from 'react';
import { MovieCardComponent } from './MovieCardComponent';
import './MovieListComponent.css';

export function MovieListComponent() {
  const moviesUrl = 'http://localhost:3001/movies';

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [year, setYear] = useState(0);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filters, setFilters] = useState({
    movies: false,
    documentaries: false,
  });

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(moviesUrl)
      .then(response => {
        if (!response.ok) {
          setErrorMessage('There has been a problem, please try again later.');
        } else {
          setErrorMessage(null);
          return response;
        }
      })
      .then((response) => response.json())
      .then((moviesFromServer) => {
        setMovies(moviesFromServer);
        setInitialMovies(moviesFromServer);
      });
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      const filteredMovies = initialMovies
        .filter((movie) => movie.Title.toLowerCase().includes(searchTerm))
        .filter(movie => {

          if (filters.movies && filters.documentaries) {
            return movie.Type === 'movie' || movie.Type === 'documentaries';
          } else if (filters.movies) {
            return movie.Type === 'movie';
          } else if (filters.documentaries) {
            return movie.Type === 'documentaries';
          } else {
            return true;
          }
        })
        .filter((movie) => Number(movie.Year) >= year);

      setMovies(filteredMovies);
    }, 500)

    return () => {
      clearTimeout(timeout);
    }
  }, [searchTerm, initialMovies, filters, year]);

  function searchInputHandler(event) {
    // if (timeout) {
    //   clearTimeout(timeout);
    // }

    // timeout = setTimeout(() => {
    setSearchTerm(event.target.value.toLowerCase());
    // }, 500);
  }

  function filterChangedMovies(event) {
    setFilters({
      ...filters,
      movies: event.target.checked
    });
  }

  function filterChangedDocumentaries(event) {
    setFilters({
      ...filters,
      documentaries: event.target.checked
    });
  }

  return (
    <section>
      <header>
        <h1 className="movie-list--title">
          Movie list
        </h1>
      </header>

      {errorMessage}

      {
        !errorMessage && (<section>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" onChange={searchInputHandler} />

          <label htmlFor="movies">Movies</label>
          <input id="movies" type="checkbox" onChange={filterChangedMovies} />

          <label htmlFor="documentaries">Documentaries</label>
          <input id="documentaries" type="checkbox" onChange={filterChangedDocumentaries} />

          <label htmlFor="year">Year: </label>
          <input id="year" type="text" onChange={(event) => setYear(Number(event.target.value))} />
        </section>
        )
      }

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

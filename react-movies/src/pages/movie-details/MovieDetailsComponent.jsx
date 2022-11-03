import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export function MovieDetails() {
  const movieDetailUrl = 'http://localhost:3001/movies';
  let { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const movies = JSON.parse(sessionStorage.getItem('movies'));
    const movie = movies?.find((movie) => movie.id === movieId);

    if (movie ) {
      setMovieDetails(movie);
    } else {
      fetch(`${movieDetailUrl}/${movieId}`)
        .then((response) => response.json())
        .then((movie) => setMovieDetails(movie))
    }
  }, []);

  return (
    <section>
      <h2>{ movieDetails.Title }</h2>
      <span>{movieDetails.Year}</span>
      <span>{movieDetails.Type}</span>
      <img src={movieDetails.Poster} alt="Movie image" />
    </section>
  )
}

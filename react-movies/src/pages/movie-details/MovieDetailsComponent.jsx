import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

export function MovieDetails() {
  const movieDetailUrl = 'http://localhost:3001/movies';
  let { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${movieDetailUrl}/${movieId}`)
      .then((response) => response.json())
      .then((movie) => setMovieDetails(movie))
  }, []);

  function deleteMovie() {
    fetch(`${movieDetailUrl}/${movieId}`, {
      method: 'DELETE',
    })
      .then(() => {
        navigate('/');
      });
  }

  function editMovie() {
    navigate('./edit');
  }

  return (
    <section>
      <h2>{ movieDetails.Title }</h2>
      <span>{movieDetails.Year}</span>
      <span>{movieDetails.Type}</span>
      <img src={movieDetails.Poster} alt="Movie image" />

      <button onClick={deleteMovie}>Delete</button>
      <button onClick={editMovie}>Edit</button>
    </section>
  )
}

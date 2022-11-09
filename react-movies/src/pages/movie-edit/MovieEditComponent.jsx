import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function MovieEditComponent() {
  const movieDetailUrl = 'http://localhost:3001/movies';
  let { movieId } = useParams();

  const navigate = useNavigate();

  // In react the following are controlled inputs.
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    fetch(`${movieDetailUrl}/${movieId}`)
      .then((response) => response.json())
      .then((movie) => {
        setTitle(movie.Title);
        setYear(movie.Year);
        setType(movie.Type);
        setImg(movie.Poster);
      })
  }, []);

  function selectChange(event) {
    setType(event.target.value);
  }

  function titleChange(event) {
    setTitle(event.target.value);
  }

  function yearChange(event) {
    setYear(event.target.value);
  }

  function imgChange(event) {
    setImg(event.target.value);
  }

  function submit(event) {
    event.preventDefault();

    const body = {
      Title: title,
      Year: year,
      Type: type,
      Poster: img,
    };

    fetch(`${movieDetailUrl}/${movieId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(() => navigate('/movie-details/'+ movieId));
  }

  return (
    <form>
      <div>
        <label htmlFor="title"></label>
        <input id="title" type="text" value={title} onChange={titleChange} />
      </div>

      <div>
        <label htmlFor="year"></label>
        <input id="year" type="number" value={year} onChange={yearChange} />
      </div>

      <div>
        <label htmlFor="img"></label>
        <input id="img" type="text" value={img} onChange={imgChange} />
      </div>

      <div>
        <label htmlFor="type"></label>
        <select 
          id="type" 
          value={type} 
          onChange={selectChange}
        >
          <option value="null" disabled>Please select a value</option>
          <option value="movie">Movie</option>
          <option value="series">TV Series</option>
          <option value="documentaries">Documentaries</option>
        </select>
      </div>

      <button onClick={submit}>Save changes</button>
    </form>
  )
}
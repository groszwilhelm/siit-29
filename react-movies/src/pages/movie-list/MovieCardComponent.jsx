import { Link } from 'react-router-dom';
import movieCardStyles from './MovieCardComponent.module.css';

export function MovieCardComponent(props) {
  const cartUrl = 'http://localhost:3001/cart';
  const { Title, Year, Type, Poster, id } = props;

  function addToCart(event) {
    event.preventDefault();

    fetch(`${cartUrl}?movieId=${id}`)
      .then(response => response.json())
      .then(cartMovies => {
        const [cartMovie] = cartMovies;

        if (cartMovie) {
          updateCartMovieQuantity(cartMovie);
        } else {
          createCartMovie();
        }
      });
  }

  function createCartMovie() {
    fetch(`${cartUrl}`, {
      method: 'POST',
      body: JSON.stringify({ movieId: id, quantity: 1 }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  function updateCartMovieQuantity(cartMovie) {
    fetch(`${cartUrl}/${cartMovie.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity: cartMovie.quantity + 1 }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <Link to={`/movie-details/${id}`}>
      <li>
        <article className={movieCardStyles['movie-card']}>
          <h3 className={movieCardStyles['movie-card--title']}>{Title}</h3>

          <span>{Year}</span>
          <span>{Type}</span>

          <img src={Poster} alt="Movie poster" />
        </article>

        <button onClick={addToCart}>Add to cart</button>
      </li>
    </Link>
  );
}



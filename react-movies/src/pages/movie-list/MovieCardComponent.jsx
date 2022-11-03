import { Link } from 'react-router-dom';
import movieCardStyles from './MovieCardComponent.module.css';

export function MovieCardComponent(props) {
  const { Title, Year, Type, Poster, id } = props;

  return (
    <Link to={`/movie-details/${id}`}>
      <li>
        <article className={movieCardStyles['movie-card']}>
          <h3 className={movieCardStyles['movie-card--title']}>{Title}</h3>

          <span>{Year}</span>
          <span>{Type}</span>

          <img src={Poster} alt="Movie poster" />
        </article>
      </li>
    </Link>
  );
}



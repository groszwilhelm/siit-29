import './App.css';
import { MovieListComponent } from './pages/movie-list/MovieListComponent';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { MovieDetails } from './pages/movie-details/MovieDetailsComponent';

/**
 * SPA -> Single Page Application
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieListComponent />}></Route>
        <Route path='/movie-details/:movieId' element={<MovieDetails />}></Route>
      </Routes>
    </BrowserRouter>
    // <MovieListComponent></MovieListComponent>
  );
}

export default App;

/**
 * 1. Retrieve movies from db.json
 * 2. Create MovieListComponent 
 * 3. Create Template -> Component -> MovieCardComponent
 * 4. MovieDetailsComponent -> Show movie details / Edit movie details / Delete movie
 * 5. Create shopping cart -> Add movies (From: MovieCardComponent, MovieDetailsComponent), Remove Movie
 * 6. AddNewMovieComponent
 * 7. Register / Login
 * 
 * 
 * + Additional suggestions: 
 * - Quantity on movies than can be purchased.
 * - Search for movies + additional filters (Genre / etc)
 */

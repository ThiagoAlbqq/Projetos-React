import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./moviecard.css";

const imageUrl = import.meta.env.VITE_IMG;

const Moviecard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-img"
        src={imageUrl + movie.poster_path}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}> Detalhes </Link>}
    </div>
  );
};

export default Moviecard;

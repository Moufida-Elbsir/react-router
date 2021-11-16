import React from "react";
import StarRating from "./StarRating";
import {Link} from 'react-router-dom'
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      
      <StarRating rating={movie.rating} />
      <img src={movie.image} alt="" />
      <h3>{movie.name}</h3>
      <p>{movie.date}</p>
      <Link to={`/movie/${movie.id}`}>
        <button className="button-31">View Details</button>
      </Link>
    </div>
  );
};
export default MovieCard;

import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  
  const { medium_cover_image, title, summary, genres, id, rating } = movie;
  
  return (
    <div>
      <div className="thum">
        <img src={medium_cover_image} alt={title} />
      </div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}…` : summary}</p>
      <p>평점 : {rating }</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}> {genre}</li>
        ))}
      </ul>
    </div>
  );
};

// Movie.propTypes = {
//   id:PropsType.number.isRequired,
//   medium_cover_image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Movie;

/* 

npm install react-router-dom

*/

import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../styled/Movie.module.css"

const Movie = ({ movie }) => {
  
  const { medium_cover_image, title,year, summary, genres, id, rating } = movie;
  
  return (
    <div className={style.movie}>
      <img src={medium_cover_image} alt={title} className={style.movie__img}/>
      <div>  
        <h2 className={style.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={style.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}…` : summary}</p>
        <p className={style.movie__rating}>평점 : {rating }</p>
        <ul className={style.movie__genres}>
          {genres.map((genre) => (
            <li key={genre}> {genre}</li>
          ))}
        </ul>
      </div>
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

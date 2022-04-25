import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Detail = () => {
  const {id} = useParams();
  console.log(id)

  const [movie, setMovie] = useState([])

  const getMovie = async () => { 
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie)
    setMovie(json.data.movie)
  }

  useEffect(() => { 
    getMovie()
  },[])

  return (
    <>
      <h2>{movie.title}</h2>
      <a href={movie.url} target="_blank">
        <img src={movie.large_cover_image} alt={movie.title} />
      </a>
      <p>{movie.description_intro}</p>
    </>
  );
};

export default Detail;

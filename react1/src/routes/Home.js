import React, { useEffect, useState } from "react";
import GlobalStyle from "../styled/GlobalStyle";
import styled, { keyframes } from "styled-components";
import Movie from "../components/Movie";
import MovieTop from "../components/MovieTop";


const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loading = styled.div`
  position: fixed;
  width:100%;
  height: 100%;
  background: rgba(0,0,0,1);
  &:after{
    content:"";
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid #e0c590; /* Blue */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: ${spin} 2s linear infinite;
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieNo1, setMovieNo1] = useState({});



  const getMovues = async () => {
    // const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
    // const json = await response.json();

    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    const data = json.data.movies;
    setLoading(false);
    setMovies(data.sort((a, b) => b.rating - a.rating));
    setMovieNo1(data[0]);
    
  };
  console.log("movies", movies);

  useEffect(() => {
    getMovues();
  }, []);

  // console.log(movies);
  return (
    <>
      <GlobalStyle />
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <MovieTop movies={movies} />
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {TopContainer, MovieInfo, MovieListRank5 } from "../styled/MovieTopStyle"


const MovieTop = ({ movies }) => {
  const [movieRank, setMovieRank] = useState(movies.slice(0, 5));
  const [movieOn, setMovieOn] = useState(movieRank[0])


  const onChangeSwiper = (index) => { 
    setMovieOn(movieRank[index]);
  }
  
  
  SwiperCore.use([Autoplay]);

  return (
    <>
      <TopContainer coverImg={movieOn.background_image_original}>
        <MovieInfo>
          
          <h3 className="title">{movieOn.title}</h3>
          <p className="movie__rating">
            평점 : <em>{movieOn.rating}</em>
          </p>
          <p className="summary">
            {movieOn.summary.length > 300
              ? `${movieOn.summary.slice(0, 300)}…`
              : movieOn.summary}
          </p>

          <div className="btn_area">
            <a
              href={movieOn.url}
              title="새창열림"
              target="_blank"
              className="btn_more"
            >
              Go Link
            </a>
            {/* <button className="btn_arrow">이전</button> */}
            {/* <button className="btn_arrow">다음</button> */}
          </div>
        </MovieInfo>

        <MovieListRank5 className="movie_list">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSlideChange={(item) => onChangeSwiper(item.realIndex)}
            // onSwiper={(item) => console.log("item", item)}
            centeredSlides={false}
            className="movie_slide"
          >
            {movieRank.map((movie, index) => (
              <SwiperSlide key={movie.id} virtualIndex={index}>
                <img src={movie.medium_cover_image} alt={movie.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MovieListRank5>
      </TopContainer>
    </>
  );
};

export default React.memo(MovieTop);
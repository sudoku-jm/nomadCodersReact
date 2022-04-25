import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const TopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: ${(props) =>
    props.coverImg ? `url(${props.coverImg})` : `#000`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  transition: all .3s;
  &:after {
    content: "";
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.5);
    /* -webkit-backdrop-filter: blur(4px); */
    /* backdrop-filter: blur(4px); */
    z-index: 0;

  }
`;

const MovieInfo = styled.div`
  position: absolute;
  bottom:150px;
  left: 50px;
  color: #fff;
  z-index: 10;
  .title {
    margin: 0 0 30px 0;
    font-size: 50px;
    font-weight: 600;
  }
  .movie_rating {
    margin: 0 0 10px 0;
    em {
      color: yellow;
    }
  }
  .summary {
    width: 45%;
    line-height: 1.8;
    font-size: 14px;
    font-weight: 300;
    color: #ccc;
  }

  .btn_area {
    margin-top: 40px;
    .btn_more {
      color: #fff;
      padding: 10px 40px;
      border: 1px solid #fff;
      border-radius: 30px;
      transition: all 0.3s;
      &:hover {
        background: #e1b254;
        border-color:#e1b254;
        color: #000;
        letter-spacing: 1px;
      }
    }
  }
`;


const MovieListRank5 = styled.div`
  position: absolute;
  right: 0;
  bottom: 100px;
  z-index: 10;
  width: 750px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    transition: all 0.3s;
    vertical-align: bottom;
  }

  .swiper-wrapper {
    display: flex;
    align-items: flex-end;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    transition: all 0.3s;
  }
  .swiper-slide-active {
    width: 270px !important;
  }
`;



const MovieTop = ({ movies }) => {
  const [movieRank, setMovieRank] = useState(movies.slice(0, 5));
  const [movieOn, setMovieOn] = useState(movieRank[0])


  const onChangeSwiper = (index) => { 
    setMovieOn(movieRank[index]);
    console.log('index',index)
  }
  
  
  SwiperCore.use([Autoplay]);

  return (
    <>
      <TopContainer coverImg={movieOn.background_image_original}>
        <MovieInfo>
          
          <h3 className="title">{movieOn.title}</h3>
          <p className="movie_rating">
            평점 : <em>{movieOn.rating}</em>
          </p>
          <p className="summary">
            movieOn.summary
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
            <button className="btn_arrow">이전</button>
            <button className="btn_arrow">다음</button>
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

export default MovieTop;
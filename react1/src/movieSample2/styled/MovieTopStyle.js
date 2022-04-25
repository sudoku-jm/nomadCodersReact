import React from 'react';
import styled from "styled-components";


export const TopContainer = styled.div`
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


export const MovieInfo = styled.div`
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
.movie__rating {
  margin:0 0 10px 0;
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


export const MovieListRank5 = styled.div`
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
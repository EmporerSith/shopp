"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "trending item",
      mainTitle: "WOMEN LOREM IPSUM SALE",
      price: "$20.99",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "trending accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15.99",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "sale offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30.99",
    },
  ];

  return (
    <div className="">
      <div className="container pt-6 lg:pt-0 mb-5">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

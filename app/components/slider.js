"use client";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/slider.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { products } from "../constants/products";
import Product_card from "./cards";

const Card_Slider = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [numSlides, setNumSlides] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setNumSlides(calculateNumSlides(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateNumSlides = (width) => {
    if (width < 700) {
      return 1;
    } else if (width >= 700 && width < 1220) {
      return 2;
    } else if (width >= 1220) {
      return 3;
    } else {
      return 4;
    }
  };
  return (
    <CarouselProvider
      naturalSlideWidth={325}
      naturalSlideHeight={400}
      totalSlides={products.length}
      visibleSlides={numSlides}
      className="slide-root"
    >
      <div className="button-container">
        <ButtonBack className="icon-small black rounded">
          <FaArrowLeft />
        </ButtonBack>
        <ButtonNext className="icon-small black rounded">
          <FaArrowRight />
        </ButtonNext>
      </div>
      <Slider className="slider">
        {products.map((product, index) => (
          <Slide index={index} className="card">
            <Product_card
              name={product.name}
              category={product.category}
              qty={product.qty}
              src={product.src}
              price={product.price}
              key={index}
            />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default Card_Slider;

import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const slides = [
    {
      image: images.Image1,
    },
    {
      image: images.Image2,
    },
    {
      image: images.Image3,
    },
    {
      image: images.Image4,
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 3 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="previous" onClick={prevSlide} />
      <FaArrowAltCircleRight className="next" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="sneakers" className="slider-image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

import React, { useState, useEffect } from "react";
import Image1 from "../assets/image-product-1.jpg";
import Image1Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import Image2 from "../assets/image-product-2.jpg";
import Image2Thumbnail from "../assets/image-product-2-thumbnail.jpg";
import Image3 from "../assets/image-product-3.jpg";
import Image3Thumbnail from "../assets/image-product-3-thumbnail.jpg";
import Image4 from "../assets/image-product-4.jpg";
import Image4Thumbnail from "../assets/image-product-4-thumbnail.jpg";
import { ReactComponent as Plus } from "../assets/icon-plus.svg";
import { ReactComponent as Minus } from "../assets/icon-minus.svg";
import { ReactComponent as Cart } from "../assets/icon-cart.svg";
import "./Hero.css";
import ImageSlider from "./ImageSlider";
import Lightbox from "./Lightbox";

const Hero = ({ getData }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [displayPhoto, setDisplayPhoto] = useState(Image1);
  const [displayLightbox, setDisplayLightbox] = useState(true);
  const [quantity, setQuantity] = useState(0);

  // Change the display photo when the thumbnail is clicked
  function changePhoto(image) {
    setDisplayPhoto(image);
  }

  // Increment or decrement quantity when button is clicked
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  // Reset quantity to 0 once add to cart is clicked and pass quantity value back to App.js
  const resetQuantity = () => {
    getData(quantity);
    setQuantity(0);
  };

  // Show lightbox
  const showLightbox = () => {
    setDisplayLightbox(!displayLightbox);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    const changeHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", changeWidth);
    window.addEventListener("resize", changeHeight);

    return () => {
      window.removeEventListener("resize", changeWidth);
      window.removeEventListener("resize", changeHeight);
    };
  }, [quantity]);

  return (
    <div className="hero">
      <div className="hero__images-container">
        <div className="hero__main-image-container">
          {screenWidth <= 880 || screenHeight <= 700 ? (
            <ImageSlider
              images={{ Image1, Image2, Image3, Image4 }}
              className="hero__image-slider"
            />
          ) : (
            <>
              {displayLightbox ? (
                <Lightbox
                  mainImage={displayPhoto}
                  images={[Image1, Image2, Image3, Image4]}
                />
              ) : (
                <img src={displayPhoto} onClick={showLightbox}></img>
              )}

              <div className="hero__image-thumbnail-container">
                <div
                  className={
                    Image1 === displayPhoto
                      ? "hero__image-thumbnail--active"
                      : ""
                  }
                >
                  <img
                    src={Image1Thumbnail}
                    onClick={() => changePhoto(Image1)}
                  />
                </div>

                <div
                  className={
                    Image2 === displayPhoto
                      ? "hero__image-thumbnail--active"
                      : ""
                  }
                >
                  <img
                    src={Image2Thumbnail}
                    onClick={() => changePhoto(Image2)}
                  />
                </div>

                <div
                  className={
                    Image3 === displayPhoto
                      ? "hero__image-thumbnail--active"
                      : ""
                  }
                >
                  <img
                    src={Image3Thumbnail}
                    onClick={() => changePhoto(Image3)}
                  />
                </div>

                <div
                  className={
                    Image4 === displayPhoto
                      ? "hero__image-thumbnail--active"
                      : ""
                  }
                >
                  <img
                    src={Image4Thumbnail}
                    onClick={() => changePhoto(Image4)}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="hero__content-container">
        <h3 className="hero__content-container_company">SNEAKER COMPANY</h3>
        <h1 className="hero__content-container_sneaker-name">
          Fall Limited Edition Sneakers
        </h1>
        <p className="hero__content-container_description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand eveything the
          weather can offer.
        </p>
        <div className="hero__price-container">
          {/*<div className="hero__price">*/}
          <h2 className="hero__price-container_child price">$125.00</h2>
          <p className="hero__price-container_child discount">50%</p>
          {/*</div>*/}
          <div className="hero__price-container_child prev-price">
            <p>$250.00</p>
          </div>
        </div>
        <div className="hero__add-to-cart-container">
          <div className="hero__qty-selector-container">
            <div className="hero__qty-selector minus" onClick={decrement}>
              <Minus />
            </div>
            <p>{quantity}</p>
            <div className="hero__qty-selector plus" onClick={increment}>
              <Plus />
            </div>
          </div>
          <button className="hero__add-to-cart" onClick={resetQuantity}>
            <Cart fill="white" stroke="white" stroke-width={0} />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

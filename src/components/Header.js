import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import { ReactComponent as Cart } from "../assets/icon-cart.svg";
import { ReactComponent as Hamburger } from "../assets/icon-menu.svg";
import { ReactComponent as Close } from "../assets/icon-close.svg";
import { ReactComponent as Delete } from "../assets/icon-delete.svg";
import Image1Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import "./Header.css";

const Header = ({ cartData, checkClick }) => {
  const [toggleState, setToggleState] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [displayCart, setDisplayCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  // Toggling NavBar State
  const toggleNav = () => setToggleState(!toggleState);
  const toggleCart = () => setDisplayCart(!displayCart);

  const setCartDisplay = () => {
    if (toggleCart) {
      return (
        <div className="navbar__cart--active">
          <div className="navbar__cart-title">
            <h4>Cart</h4>
          </div>
          <div className="navbar__cart-display">
            {cartQuantity == 0 ? (
              <div className="navbar__cart--show_empty">
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <div className="navbar__cart--show_full">
                <div className="navbar__cart-content">
                  <img
                    src={Image1Thumbnail}
                    className="navbar__cart-image"
                  ></img>
                  <div className="navbar__cart-item-description">
                    <p className="navbar__cart-item">
                      Fall Limited Edition Sneakers
                    </p>
                    <p className="navbar__cart-total-cost">
                      $125.00 x {cartData} <b>${125 * cartData}.00</b>
                    </p>
                  </div>
                  <Delete
                    className="navbar__cart-delete"
                    onClick={checkClick}
                  />
                </div>

                <div className="navbar__cart-checkout-button-container">
                  <button className="navbar__cart-checkout-button">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  };

  // Setting Screen Width
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
      setToggleState(false);
    };

    setCartQuantity(cartData);

    /* Setting up so if clicked anywhere outside of shopping cart or navbar 
        it will close */

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [cartData]);

  return (
    <>
      <div className="navbar">
        <div className="navbar__icon" onClick={toggleNav}>
          {toggleState ? <Close /> : <Hamburger />}
        </div>
        <div className="navbar__nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div
          className={`${
            screenWidth <= 950
              ? "navbar__nav-links_container mobile"
              : "navbar__nav-links_container"
          } ${toggleState ? "active" : ""}`}
        >
          <p>
            <a href="#collections">Collections</a>
          </p>
          <p>
            <a href="#men">Men</a>
          </p>
          <p>
            <a href="#women">Women</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
        <>{displayCart ? setCartDisplay() : ""}</>
        <div className="navbar__cart-avatar">
          <Cart
            className="navbar__cart"
            fill="#69707D"
            fill-rule="nonzero"
            onClick={toggleCart}
          />
          <img src={avatar} className="navbar__avatar"></img>
          {cartQuantity > 0 ? (
            <div className="navbar__cart-quantity-icon" onClick={toggleCart}>
              <p>{cartQuantity}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="navbar__border"></div>
    </>
  );
};

export default Header;

/*
 I have to use the notification icon relative with the cart div
 And then
 I have to make the display cart relative with the navbar
*/

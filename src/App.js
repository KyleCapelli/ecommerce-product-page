import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  const [cartData, setCartData] = useState(0);
  const [deleteClick, setDeleteClick] = useState(false);

  const getData = (data) => {
    setCartData(cartData + data);
  };

  const checkClick = (event) => {
    event && setCartData(0);
  };

  return (
    <div>
      <Header cartData={cartData} checkClick={checkClick} />
      <Hero getData={getData} />
    </div>
  );
};

export default App;

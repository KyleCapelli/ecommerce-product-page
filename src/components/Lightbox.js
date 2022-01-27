import React, { useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";

const Lightbox = ({ mainImage, images }) => {
  console.log(images);
  console.log(mainImage);

  return (
    <SRLWrapper>
      <img src={mainImage}></img>
      {images.map((image) => {
        return (
          image !== mainImage && (
            <img style={{ display: "none" }} src={image}></img>
          )
        );
      })}
    </SRLWrapper>
  );
};

export default Lightbox;

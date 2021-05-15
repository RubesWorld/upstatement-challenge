import React, { useState } from "react";
import images from "../images";
import left from "../img/left-arrow.png";
import right from "../img/right-arrow.png";

function Carousel() {
  const [position, setPosition] = useState(0);

  const nextImage = (e) => {
    setPosition(position === images.length - 1 ? 0 : position + 1);
  };
  const previousImage = (e) => {
    setPosition(position === 0 ? images.length - 1 : position - 1);
  };

  console.log(position);

  return (
    <>
      <div className="carousel">
        {images.map((image, index) => {
          return (
            <div
              className={index === position ? "image active" : "slide"}
              key={index}
            >
              {/* if the index matches the position, it will only show that image  */}
              {index === position && (
                <img src={image.image} alt="pics" className="image" />
              )}
            </div>
          );
        })}

        <div className="arrow-div">
          <img
            src={left}
            className="left-arrow"
            alt="left-arrow"
            onClick={previousImage}
          />
          <img
            src={right}
            className="right-arrow"
            alt="right-arrow"
            onClick={nextImage}
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;

import React, { useState } from "react";
import images from "../images";

function Carousel({ mode }) {
  const [position, setPosition] = useState(0);

  const nextImage = (e) => {
    setPosition(position === images.length - 1 ? 0 : position + 1);
  };
  const previousImage = (e) => {
    setPosition(position === 0 ? images.length - 1 : position - 1);
  };

  return (
    <>
      <div className="carousel">
        {images.map((image, index) => {
          return (
            <div
              className={index === position ? "picture active" : "picture"}
              key={index}
            >
              {index === position && (
                <img src={image.image} alt="pics" className="image" />
              )}
            </div>
          );
        })}

        <div className="arrow-div">
          <svg
            className="left-arrow"
            onClick={previousImage}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-reactroot=""
          >
            <path
              className={mode === "light" ? "arrow-fill" : "arrow-fill-dark"}
              d="M16 4V20L8 12L16 4Z"
              undefined="2.5"
            ></path>
          </svg>
          <svg
            className="right-arrow"
            onClick={nextImage}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-reactroot=""
          >
            <path
              className={mode === "light" ? "arrow-fill" : "arrow-fill-dark"}
              d="M8 4V20L16 12L8 4Z"
              undefined="2.5"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Carousel;

import React, { useEffect, useRef } from 'react';

const Slider = () => {
  const imageListRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const maxScrollLeft = useRef(0);

  useEffect(() => {
    const initSlider = () => {
      const imageList = imageListRef.current;
      const prevButton = prevButtonRef.current;
      const nextButton = nextButtonRef.current;
      maxScrollLeft.current = imageList.scrollWidth - imageList.clientWidth;

      const handleButtonClick = (direction) => {
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      };

      prevButton.addEventListener("click", () => handleButtonClick(-1));
      nextButton.addEventListener("click", () => handleButtonClick(1));

      imageList.addEventListener("scroll", () => {
        prevButton.style.display =
          imageList.scrollLeft <= 0 ? "none" : "block";
        nextButton.style.display =
          imageList.scrollLeft >= maxScrollLeft.current ? "none" : "block";
      });
    };

    window.addEventListener("load", initSlider);

    return () => {
      window.removeEventListener("load", initSlider);
    };
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="image-list" ref={imageListRef}>
        {/* Add your images here */}
      </div>
      <button id="prev-slide" className="slide-button" ref={prevButtonRef}>
        Previous
      </button>
      <button id="next-slide" className="slide-button" ref={nextButtonRef}>
        Next
      </button>
    </div>
  );
};

export default Slider;

import React from "react";
import Carousel from "./Carousal";
import "../App.css";

const MainCarousel = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
    "https://via.placeholder.com/800x400?text=Slide+4",
  ];

  return (
    <div className="App">
      <h1>React Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default MainCarousel;

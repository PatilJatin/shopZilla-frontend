import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const ImageSlider = ({ images = [{ secure_url: "" }] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col">
      <div className="w-[400px] flex items-center justify-center relative ">
        <div className="absolute top-50% left-12 md:left-0 ">
          <ArrowCircleLeftIcon onClick={prevImage} />
        </div>
        <img
          src={images[currentIndex]?.secure_url}
          alt={images[currentIndex]?.id}
          width={"100%"}
          height={"300px"}
          className="object-contain aspect-video mx-auto w-[380px] rounded-md"
        />
        <div className="absolute  top-50% right-12 md:right-0 ">
          <ArrowCircleRightIcon onClick={nextImage} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

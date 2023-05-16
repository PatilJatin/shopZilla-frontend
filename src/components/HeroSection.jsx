import React from "react";
import { Banner } from "../assets";
const HeroSection = () => {
  return (
    <img
      src={Banner}
      alt="Banner"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export default HeroSection;

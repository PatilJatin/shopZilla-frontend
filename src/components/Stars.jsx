import React from "react";
import StarRatings from "react-star-ratings";

const Stars = ({ stars, reviews }) => {

  // if (!stars) {
  //   return null;
  // }
  return (
    <div className="flex gap-3 items-baseline">
      <StarRatings
        rating={Math.round(3)}
        starRatedColor="gold"
        starDimension="20px"
        starSpacing="1px"
      />
      <p>{45} customers review</p>
    </div>
  );
};

export default Stars;

import React from "react";
import WeddingCarCard from "./WeddingCarCard ";

 
const WeddingCarList = ({ cars }) => {
  return (
    <div
      className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
mt-8
"
    >
      {cars.map((car) => (
        <WeddingCarCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default React.memo(WeddingCarList);

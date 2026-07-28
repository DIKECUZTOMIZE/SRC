import React from "react";

import { Heart, Fuel, Settings, Users, ArrowUpRight } from "lucide-react";
import WeddingPriceCard from "./WeddingPriceCard ";

const WeddingCarCard = ({ car }) => {
  const imageUrl = car?.image
    ? `http://localhost:3000${car.image}`
    : "https://placehold.co/600x400?text=Wedding+Car";

  return (
    <div
      className="
bg-white
rounded-2xl
border
overflow-hidden
shadow-sm
hover:shadow-xl
transition
"
    >
      <div
        className="
aspect-[16/11]
overflow-hidden
bg-slate-100
"
      >
        <img
          src={imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="
w-full
h-full
object-cover
hover:scale-105
transition
"
        />
      </div>

      <div className="p-4">
        <div
          className="
flex
justify-between
items-center
"
        >
          <h3
            className="
text-xl
font-bold
"
          >
            {car.brand} {car.model}
          </h3>

          <Heart
            size={20}
            className="
text-pink-600
fill-pink-600
"
          />
        </div>

        <p
          className="
text-sm
text-slate-500
"
        >
          {car.classification}
        </p>

        <WeddingPriceCard
          pricePerHour={car.pricePerHour}
          pricePerDay={car.pricePerDay}
        />

        <div
          className="
grid
grid-cols-2
gap-2
mt-4
"
        >
          <div
            className="
bg-slate-50
rounded-lg
p-2
flex gap-2
text-sm
"
          >
            <Fuel size={16} />

            {car.fuel}
          </div>

          <div
            className="
bg-slate-50
rounded-lg
p-2
flex gap-2
text-sm
"
          >
            <Settings size={16} />

            {car.transmission}
          </div>

          <div
            className="
bg-slate-50
rounded-lg
p-2
flex gap-2
text-sm
"
          >
            <Users size={16} />
            {car.seats} Seats
          </div>

          <div
            className="
bg-pink-50
text-pink-700
rounded-lg
p-2
flex gap-2
text-sm
"
          >
            <Heart size={16} />
            Wedding
          </div>
        </div>

        <button
          className="
w-full
mt-5
py-3
rounded-xl
bg-pink-600
hover:bg-pink-700
text-white
font-semibold
flex
justify-center
items-center
gap-2
"
        >
          Book Wedding Car
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(WeddingCarCard);

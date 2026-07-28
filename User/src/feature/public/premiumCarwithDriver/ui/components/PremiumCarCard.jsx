import React from "react";
import { Fuel, Settings, Users, Sparkles, ArrowUpRight } from "lucide-react";
import PremiumPriceCard from "./PremiumPriceCard";

 
const PremiumCarCard = ({ car }) => {
  const imageUrl = car?.image
    ? `http://localhost:3000${car.image}`
    : "https://placehold.co/600x400?text=Premium+Car";

  return (
    <div
      className="
bg-white
rounded-2xl
border
shadow-sm
overflow-hidden
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
w-full h-full
object-cover
hover:scale-105
transition
"
        />

        <span
          className="
absolute
"
        ></span>
      </div>

      <div className="p-4">
        <h3
          className="
text-xl
font-bold
text-slate-900
"
        >
          {car.brand} {car.model}
        </h3>

        <p className="text-sm text-slate-500">{car.classification}</p>

        <PremiumPriceCard
          pricePerHour={car.pricePerHour}
          pricePerDay={car.pricePerDay}
        />

        <div
          className="
grid grid-cols-2
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
bg-purple-50
rounded-lg
p-2
flex gap-2
text-sm
text-purple-700
"
          >
            <Sparkles size={16} />
            Luxury
          </div>
        </div>

        <p
          className="
text-sm
text-slate-500
mt-4
line-clamp-2
"
        >
          {car.description}
        </p>

        <button
          className="
w-full
mt-5
py-3
rounded-xl
bg-purple-600
hover:bg-purple-700
text-white
font-semibold
flex
justify-center
items-center
gap-2
"
        >
          Book Premium Car
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(PremiumCarCard);

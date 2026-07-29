import React from "react";
import {
  Fuel,
  Settings,
  Users,
  PlaneTakeoff,
  ArrowUpRight,
} from "lucide-react";
import AirportPriceCard from "./AirportPriceCard";
import { useNavigate } from "react-router";
const AirportCarCard = ({ car }) => {
  const navigate = useNavigate();

  const imageUrl = car?.image
    ? `http://localhost:3000${car.image}`
    : "https://placehold.co/600x400";

  return (
    <div
      className="
bg-white rounded-2xl
border shadow-sm
overflow-hidden
hover:shadow-xl
transition
"
    >
      <div
        className="
aspect-[16/11]
overflow-hidden
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
      </div>

      <div className="p-4">
        <h3
          className="
text-xl font-bold
text-slate-900
"
        >
          {car.brand} {car.model}
        </h3>

        <p className="text-sm text-slate-500">{car.classification}</p>

        <AirportPriceCard
          pickupPrice={car.pickupPrice}
          dropPrice={car.dropPrice}
        />

        <div
          className="
grid grid-cols-2
gap-2 mt-4
"
        >
          <div className="bg-slate-50 p-2 rounded-lg flex gap-2">
            <Fuel size={16} />

            {car.fuel}
          </div>

          <div className="bg-slate-50 p-2 rounded-lg flex gap-2">
            <Settings size={16} />

            {car.transmission}
          </div>

          <div className="bg-slate-50 p-2 rounded-lg flex gap-2">
            <Users size={16} />
            {car.seats} Seats
          </div>

          <div className="bg-slate-50 p-2 rounded-lg flex gap-2">
            <PlaneTakeoff size={16} />
            Airport
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() =>
            navigate("/home/airportBookingForm", {
              state: { car },
            })
          }
          disabled={car.status !== "Available"}
          className={`w-full mt-5 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition ${
            car.status === "Available"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          {car.status === "Available" ? "Book Airport Transfer" : car.status}
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(AirportCarCard);

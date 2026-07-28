import React from "react";
import {
  Fuel,
  Settings,
  Users,
  Snowflake,
  ArrowUpRight,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router";

 import DriverPriceCard from './DriverPriceCard'

const DriverCarCard = ({ car }) => {
  const navigate = useNavigate();

  const imageUrl = car?.image
    ? `http://localhost:3000${car.image}`
    : "https://placehold.co/600x400?text=No+Image";

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://placehold.co/600x400?text=No+Image";
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {car.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-slate-900">
          {car.brand} {car.model}
        </h3>

        <p className="text-sm text-slate-500">{car.classification}</p>

        {/* Price */}
        <DriverPriceCard
          pricePerHour={car.pricePerHour}
          pricePerDay={car.pricePerDay}
        />

        {/* Driver Charge */}
        {car.driverChargePerDay > 0 && (
          <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-200 p-3">
            <p className="text-sm font-semibold text-emerald-700">
              Driver Charge: ₹{car.driverChargePerDay}/Day
            </p>
          </div>
        )}

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm">
            <Fuel size={16} className="text-emerald-600" />
            <span>{car.fuel}</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm">
            <Settings size={16} className="text-emerald-600" />
            <span>{car.transmission}</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm">
            <Users size={16} className="text-emerald-600" />
            <span>{car.seats} Seats</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm">
            <Snowflake size={16} className="text-emerald-600" />
            <span>AC</span>
          </div>

          {car.loadingCapacity && (
            <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm col-span-2">
              <Truck size={16} className="text-emerald-600" />
              <span>{car.loadingCapacity}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 mt-4 line-clamp-2">
          {car.description}
        </p>

        {/* Button */}
        <button
          onClick={() =>
            navigate("/home/driveBookingForm", {
              state: { car },
            })
          }
          disabled={car.status !== "Available"}
          className={`w-full mt-5 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition ${
            car.status === "Available"
              ? "bg-emerald-600 hover:bg-emerald-700 text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          {car.status === "Available" ? "Book Now" : car.status}
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(DriverCarCard);

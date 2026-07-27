import React from "react";
import { Fuel, Settings, Users, Snowflake, ArrowUpRight } from "lucide-react";
import DriverPriceCard from "./DriverPriceCard";
import { useNavigate } from "react-router";
const DriverCarCard = ({ car }) => {
  let navigate = useNavigate();
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden">
      {/* Image */}
      <div className="relative aspect-16/11 overflow-hidden">
        <img
          src="https://placehold.co/600x400"
          alt="Car"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Available
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-900">
          Toyota Innova Crysta
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          Premium SUV with Professional Driver
        </p>

        <DriverPriceCard pricePerHour={600} pricePerDay={4500} />

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm">
            <Fuel size={16} className="text-emerald-600" />
            Diesel
          </div>

          <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm">
            <Settings size={16} className="text-emerald-600" />
            Manual
          </div>

          <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm">
            <Users size={16} className="text-emerald-600" />7 Seats
          </div>

          <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 text-sm">
            <Snowflake size={16} className="text-emerald-600" />
            AC
          </div>
        </div>

        <button
          onClick={() =>
            navigate("/home/driveBookingForm", {
              state: { car },
            })
          }
          className="w-full mt-5 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Book Now
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(DriverCarCard);

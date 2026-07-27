import React from "react";
import { useNavigate } from "react-router";
import {
  Fuel,
  Gauge,
  Users,
  IndianRupee,
  ArrowRight,
  Clock,
  CalendarDays,
} from "lucide-react";

// Status Badge Helper
const getStatusBadgeStyle = (status = "") => {
  const s = status.toLowerCase();
  switch (s) {
    case "available":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "booked":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "reserved":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "maintenance":
      return "bg-rose-50 text-rose-700 border-rose-200";
    default:
      return "bg-slate-50 text-slate-700 border-slate-200";
  }
};

const CarListCard = ({ car }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/dashboard/cars/details/${car._id}`);
  };

  const statusStyle = getStatusBadgeStyle(car?.status);

  return (
    <div
      onClick={handleDetails}
      className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* --- CAR IMAGE CONTAINER --- */}
        <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden">
 <img
  src={car?.image ? `http://localhost:3000${car.image}` : null}
  alt={car?.model}
  className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
  onError={(e) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200";
  }}
/>

          {/* Classification Badge */}
          {car?.classification && (
            <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
              {car.classification}
            </span>
          )}

          {/* Status Badge */}
          <span
            className={`absolute top-3 right-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md shadow-sm ${statusStyle}`}
          >
            {car?.status || "N/A"}
          </span>
        </div>

        {/* --- CARD CONTENT --- */}
        <div className="p-5 space-y-4">
          {/* Title */}
          <div>
            <h2 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors line-clamp-1">
              {car?.brand} {car?.model}
            </h2>
          </div>

          {/* --- KEY SPECS (Fuel, Transmission, Seats) --- */}
          <div className="grid grid-cols-3 gap-2">
            {/* Fuel */}
            <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-xl p-2 text-center">
              <Fuel size={14} className="text-emerald-600 mb-1" />
              <span className="text-[11px] font-bold text-slate-700 truncate w-full">
                {car?.fuel || "N/A"}
              </span>
            </div>

            {/* Transmission */}
            <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-xl p-2 text-center">
              <Gauge size={14} className="text-emerald-600 mb-1" />
              <span className="text-[11px] font-bold text-slate-700 truncate w-full">
                {car?.transmission || "N/A"}
              </span>
            </div>

            {/* Seats */}
            <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-xl p-2 text-center">
              <Users size={14} className="text-emerald-600 mb-1" />
              <span className="text-[11px] font-bold text-slate-700 truncate w-full">
                {car?.seats ? `${car.seats} Seats` : "N/A"}
              </span>
            </div>
          </div>

          {/* --- DETAILED PRICING BOX (HOURLY & DAILY RATES) --- */}
          <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-3 grid grid-cols-2 gap-2">
            {/* Hourly Rate */}
            <div className="flex items-center gap-2 pr-2 border-r border-emerald-200/60">
              <span className="p-1.5 bg-white text-emerald-600 rounded-lg shadow-2xs shrink-0">
                <Clock size={14} />
              </span>
              <div className="flex flex-col leading-tight truncate">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                  Hourly
                </span>
                <span className="text-xs font-black text-slate-900">
                  ₹{Number(car?.pricePerHour || 100).toLocaleString("en-IN")}{" "}
                  <span className="text-[10px] text-slate-400 font-bold">
                    /hr
                  </span>
                </span>
              </div>
            </div>

            {/* Daily Rate */}
            <div className="flex items-center gap-2 pl-1">
              <span className="p-1.5 bg-emerald-600 text-white rounded-lg shadow-2xs shrink-0">
                <CalendarDays size={14} />
              </span>
              <div className="flex flex-col leading-tight truncate">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                  Daily
                </span>
                <span className="text-xs font-black text-slate-900">
                  ₹{Number(car?.pricePerDay || 300).toLocaleString("en-IN")}{" "}
                  <span className="text-[10px] text-slate-400 font-bold">
                    /day
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ACTION CTA --- */}
      <div className="px-5 pb-5">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleDetails();
          }}
          className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default React.memo(CarListCard);

import React, { useCallback } from "react";
import {
  Car,
  Bus,
  Plane,
  Mountain,
  MapPin,
  HeartHandshake,
  Check,
  Sparkles,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const SERVICES = [
  { id: 1, icon: Car, name: "Self Drive", path: "self-drive" },
  { id: 2, icon: Car, name: "Car with Drive", path: "car-with-drive" },
  {
    id: 3,
    icon: Bus,
    name: "Tempo Traveller Bus",
    path: "tempo-traveller-bus",
  },
  {
    id: 4,
    icon: MapPin,
    name: "Mini Trucks / Goods Carrier",
    path: "goods-carrier",
  },
  { id: 5, icon: Plane, name: "Airport Transfer", path: "airport" },
  { id: 6, icon: HeartHandshake, name: "Wedding Cars", path: "wedding" },
];

const ChooseCar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate],
  );

  return (
    <section className="relative bg-slate-50/80 py-14 sm:py-20 font-sans border-b border-slate-200/60 overflow-hidden">
      {/* Background Decorative Gradient Glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200/80 shadow-xs text-[11px] font-extrabold text-emerald-700 uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles size={13} className="text-emerald-600 animate-pulse" />
            <span>Guwahati Premium Fleet</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Choose Drive Car Rental{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Guwahati
            </span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-lg mx-auto">
            Hassle-free bookings, premium vehicles, and tailor-made travel
            packages. Select your service below to get started:
          </p>
        </div>

        {/* Services Grid (Optimized 6-column layout on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {SERVICES.map((item) => {
            const IconComponent = item.icon;
            const isSelected = location.pathname.includes(item.path);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleServiceClick(item.path)}
                className={`group relative flex flex-col items-center justify-between p-5 sm:p-6 rounded-2xl border transition-all duration-300 outline-none cursor-pointer select-none ${
                  isSelected
                    ? "bg-white border-emerald-500 shadow-xl shadow-emerald-500/10 ring-2 ring-emerald-500/20 -translate-y-1 z-10"
                    : "bg-white/80 backdrop-blur-md border-slate-200/80 hover:border-emerald-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
                }`}
              >
                {/* Active Top Accent Line */}
                {isSelected && (
                  <div className="absolute top-0 inset-x-4 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-full" />
                )}

                {/* Selected Checkmark Badge */}
                {isSelected && (
                  <span className="absolute top-3 right-3 bg-emerald-600 text-white p-1 rounded-full shadow-md animate-in zoom-in-50 duration-200">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                )}

                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                    isSelected
                      ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                      : "bg-slate-100/80 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                  }`}
                >
                  <IconComponent size={21} />
                </div>

                {/* Label */}
                <span
                  className={`text-xs font-bold text-center leading-snug transition-colors ${
                    isSelected
                      ? "text-slate-900 font-extrabold"
                      : "text-slate-600 group-hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ChooseCar);

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
  {
    id: 1,
    icon: Car,
    name: "Self Drive Cars & Mini Trucks",
    path: "self-drive",
  },
  {
    id: 2,
    icon: Car,
    name: "Car & Mini Truck with Driver",
    path: "car-with-driver",
  },
  {
    id: 3,
    icon: Car,
    name: "Premium Car with Driver",
    path: "premium-with-car",
  },
  {
    id: 4,
    icon: Bus,
    name: "Tempo Traveller & Buses",
    path: "tempo-traveller-bus",
  },
  {
    id: 5,
    icon: Plane,
    name: "Airport Transfers",
    path: "airport",
  },
  {
    id: 6,
    icon: HeartHandshake,
    name: "Wedding Car With Decoration",
    path: "wedding",
  },
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
<section className="relative overflow-hidden border-b border-slate-200/60 bg-slate-50 py-8 sm:py-10 lg:py-12">
  {/* Background */}
  <div className="absolute -top-28 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-transparent blur-3xl pointer-events-none" />

  <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
        <Sparkles size={13} className="text-emerald-600" />
        <span>Guwahati Premium Fleet</span>
      </div>

      <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        Choose Drive Car Rental{" "}
        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Guwahati
        </span>
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
        Hassle-free bookings, premium vehicles, and tailor-made travel
        packages. Select your preferred service below to get started.
      </p>
    </div>

    {/* Services */}
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {SERVICES.map((item) => {
        const IconComponent = item.icon;
        const isSelected = location.pathname.includes(item.path);

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleServiceClick(item.path)}
            className={`group relative flex min-h-[160px] flex-col items-center justify-center rounded-2xl border p-6 transition-all duration-300 cursor-pointer ${
              isSelected
                ? "border-emerald-500 bg-white shadow-xl shadow-emerald-500/10 ring-2 ring-emerald-500/20"
                : "border-slate-200 bg-white hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            }`}
          >
            {isSelected && (
              <>
                <div className="absolute inset-x-5 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-500 to-teal-500" />

                <span className="absolute right-3 top-3 rounded-full bg-emerald-600 p-1 text-white">
                  <Check size={10} strokeWidth={3} />
                </span>
              </>
            )}

            <div
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all ${
                isSelected
                  ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600"
              }`}
            >
              <IconComponent size={22} />
            </div>

            <span
              className={`text-center text-sm font-bold leading-snug ${
                isSelected
                  ? "text-slate-900"
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

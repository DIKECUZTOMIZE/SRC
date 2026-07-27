import React from "react";
import {
  Car,
  MapPin,
  Calendar,
  Clock,
  User,
  ShieldCheck,
} from "lucide-react";

const DriverSummary = () => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
      {/* Car Image */}
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src="https://placehold.co/600x350"
          alt="Vehicle"
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Car Name */}
      <h2 className="text-xl font-bold text-slate-900">
        Toyota Innova Crysta
      </h2>

      <p className="text-sm text-slate-500 mb-5">
        Premium SUV with Professional Driver
      </p>

      {/* Vehicle Details */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-slate-600">
            <Car size={16} />
            Vehicle Type
          </span>

          <span className="font-semibold">SUV</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-slate-600">
            <User size={16} />
            Seating
          </span>

          <span className="font-semibold">7 Persons</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-slate-600">
            <Calendar size={16} />
            Rental
          </span>

          <span className="font-semibold">Per Day</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-slate-600">
            <Clock size={16} />
            Driver
          </span>

          <span className="font-semibold text-emerald-600">
            Included
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-slate-600">
            <MapPin size={16} />
            Service
          </span>

          <span className="font-semibold">Local / Outstation</span>
        </div>
      </div>

      {/* Price */}
      <div className="mt-6 rounded-xl bg-white border p-4">
        <div className="flex justify-between">
          <span className="text-slate-500">Starting From</span>

          <span className="text-xl font-bold text-emerald-600">
            ₹4,500 / Day
          </span>
        </div>
      </div>

      {/* Note */}
      <div className="mt-5 flex items-start gap-2 rounded-xl bg-emerald-50 border border-emerald-100 p-3">
        <ShieldCheck
          size={18}
          className="text-emerald-600 mt-0.5"
        />

        <p className="text-xs text-slate-600">
          Professional driver included. Fuel, toll, parking and state taxes
          are charged separately based on actual trip.
        </p>
      </div>
    </div>
  );
};

export default React.memo(DriverSummary);
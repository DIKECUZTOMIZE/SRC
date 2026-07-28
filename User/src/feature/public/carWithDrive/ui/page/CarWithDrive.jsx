import React from "react";
import { SlidersHorizontal } from "lucide-react";

import DriverFilter from "../components/DriverFilter";
import DriverCarCard from "../components/DriverCarCard";
import useCarWithDriver from "../../hook/useCarWithDriver";

const CarWithDriver = () => {
  const { cars, isLoading, isError, error } = useCarWithDriver();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading vehicles...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          {error?.response?.data?.message || "Failed to load vehicles"}
        </p>
      </div>
    );
  }

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 border-b pb-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
            Guwahati Chauffeur Fleet
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            Car With Driver <span className="text-emerald-600">Rentals</span>
          </h2>

          <p className="text-slate-500 mt-2">
            Choose from our available chauffeur-driven vehicles.
          </p>
        </div>

        {/* Filter */}
        <DriverFilter />

        {/* Car List */}

        {cars?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {cars.map((car) => (
              <DriverCarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border mt-8">
            <SlidersHorizontal
              size={40}
              className="mx-auto text-emerald-600 mb-4"
            />

            <h3 className="text-lg font-semibold">No Vehicles Available</h3>

            <p className="text-slate-500 mt-2">
              No chauffeur-driven vehicles are available right now.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(CarWithDriver);

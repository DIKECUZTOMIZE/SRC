import React from "react";
import { Plane } from "lucide-react";

import AirportCarCard from "../components/AirportCarCard";
import useAirportTransfer from "../../hook/useAirportTransfer";

const AirportTransfer = () => {
  const { cars, isLoading, isError, error } = useAirportTransfer();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading airport vehicles...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          {error?.response?.data?.message || "Failed to load airport vehicles"}
        </p>
      </div>
    );
  }

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="mb-8 border-b pb-4">
          <div
            className="
          inline-flex items-center gap-2
          bg-blue-100 text-blue-700
          px-3 py-1 rounded-full
          text-xs font-bold mb-3
          "
          >
            Guwahati Airport Transfer
          </div>

          <h2
            className="
          text-3xl font-bold text-slate-900
          "
          >
            Airport <span className="text-blue-600">Transfer</span>
          </h2>

          <p className="text-slate-500 mt-2">
            Book comfortable airport pickup and drop services.
          </p>
        </div>

        {/* <AirportFilter /> */}

        {cars?.length > 0 ? (
          <div
            className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5 mt-8
          "
          >
            {cars.map((car) => (
              <AirportCarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div
            className="
          text-center py-12
          bg-white rounded-2xl
          border mt-8
          "
          >
            <Plane
              size={40}
              className="
              mx-auto
              text-blue-600
              mb-4
              "
            />

            <h3 className="text-lg font-semibold">
              No Airport Vehicles Available
            </h3>

            <p className="text-slate-500 mt-2">
              Airport transfer cars are not available currently.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(AirportTransfer);

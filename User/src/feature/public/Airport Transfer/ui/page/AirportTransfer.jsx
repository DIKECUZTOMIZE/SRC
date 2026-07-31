import React from "react";
import { Plane } from "lucide-react";

import useAirportTransfer from "../../hook/useAirportTransfer";
import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";

import AirportService from "../components/AirportService";
import { FilterPanel } from "../../../../../shared/components/ui/FilterPanel";
import VehicleCard from "../../../../../shared/components/ui/VehicleCard";

const AirportTransfer = () => {
  const { cars, isLoading, isError, error } = useAirportTransfer();

  return (
    <ApiState isLoading={isLoading} isError={isError} error={error}>
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Guwahati Airport Transfer Fleet"
            title="Airport Transfer"
            subtitle="Cars"
            description="Choose from our available Airport Transfer vehicles."
          />

          <FilterPanel maxDailybudgetClassName="text-[14px]" />

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
                <VehicleCard
                  key={car._id}
                  vehicle={car}

                  // onBookNow={handleBookNow}
                >
                  <AirportService
                    airportType="Airport Transfer"
                    pickupPrice={car.pickupPrice}
                    dropPrice={car.dropPrice}
                    roundTripPrice={car.roundTripPrice}
                  />
                </VehicleCard>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border mt-8">
              <Plane size={40} className="mx-auto text-blue-600 mb-4" />

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
    </ApiState>
  );
};

export default React.memo(AirportTransfer);

/* eslint-disable no-undef */
import React from "react";
import { Plane } from "lucide-react";

import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";
import AirportService from "../components/AirportService";
import { FilterPanel } from "../../../../../shared/components/ui/FilterPanel";
import VehicleCard from "../../../../../shared/components/ui/VehicleCard";
import BlankState from "../../../../../shared/components/ui/BlankState";
import useVehicleFilters from "../../../../../shared/hook/useVehicleFilters";
import useAirportTransfer from "../../hook/useAirportTransfer";

const AirportTransfer = () => {
  const { cars, isLoading, isError, error } = useAirportTransfer();
  const CAR_TYPES = [
    "All",
    ...new Set(cars?.map((car) => car.classification).filter(Boolean)),
  ];
  const {
    filteredCars,

    searchQuery,
    setSearchQuery,

    selectedType,
    setSelectedType,

    selectedSeats,
    setSelectedSeats,

    maxPrice,
    setMaxPrice,

    isFilterActive,
    handleResetFilters,
  } = useVehicleFilters(
    cars,
    20000,
    "pickupPrice",
    "dropPrice",
    "roundTripPrice",
  );
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
          <FilterPanel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            carTypes={CAR_TYPES}
            isFilterActive={isFilterActive}
            handleResetFilters={handleResetFilters}
            maxDailybudgetClassName="text-[14px]"
          />

          {filteredCars?.length > 0 ? (
            <div
              className="
      grid grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-5 mt-8
    "
            >
              {filteredCars.map((car) => (
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
            <BlankState
              icon={Plane}
              iconClassName="text-blue-600"
              title="No Airport Vehicles Available"
              description="Airport transfer cars are not available currently."
            />
          )}
        </div>
      </section>
    </ApiState>
  );
};

export default React.memo(AirportTransfer);

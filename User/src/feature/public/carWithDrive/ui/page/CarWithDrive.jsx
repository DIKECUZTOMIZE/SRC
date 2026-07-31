import React from "react";
import { SlidersHorizontal, Plus, UserRound } from "lucide-react";
import DriverFilter from "../components/DriverFilter";
import DriverCarCard from "../components/DriverCarCard";
import useCarWithDriver from "../../hook/useCarWithDriver";
import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";
import { FilterPanel } from "../../../../../shared/components/ui";

import VehicleCard from "../../../../../shared/components/ui/VehicleCard";
import CarWithDriverService from "../components/CarWithDriverService";
import BlankState from "../../../../../shared/components/ui/BlankState";
import useVehicleFilters from "../../../../../shared/hook/useVehicleFilters";

const CarWithDriver = () => {
  const { cars, isLoading, isError, error } = useCarWithDriver();
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
  } = useVehicleFilters(cars, 20000,"pricePerHour","pricePerDay");
  return (
    <ApiState isLoading={isLoading} isError={isError} error={error}>
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Guwahati Car With Drive Fleet"
            title="Car With Drive"
            subtitle="Cars"
            description="Choose from our available self-drive vehicles."
          />

          {/* Filter */}
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

          {/* Car List */}

          {filteredCars?.length > 0 ? (
            <div
              className="
                                grid grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-4
                                gap-5 mt-8
                              "
            >
              {filteredCars.map(
                (car) => (
                  console.log(car.pricePerDay),
                  (
                    <VehicleCard
                      key={car._id}
                      vehicle={car}

                      // onBookNow={handleBookNow}
                    >
                      <CarWithDriverService
                        driverChargePerDay={car.driverChargePerDay}
                        pricePerDay={car.pricePerDay}
                        pricePerHour={car.pricePerHour}
                      />
                    </VehicleCard>
                  )
                ),
              )}
            </div>
          ) : (
            <BlankState
              icon={UserRound}
              iconClassName="text-blue-600"
              title="No Car With Driver Vehicles Available"
              description="Car With Driver cars are not available currently."
            />
          )}
        </div>
      </section>
    </ApiState>
  );
};

export default React.memo(CarWithDriver);

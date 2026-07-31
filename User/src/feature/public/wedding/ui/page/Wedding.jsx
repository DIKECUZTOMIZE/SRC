import React from "react";
import { Heart, CalendarDays } from "lucide-react";
import useWeddingCar from "../../hook/useWeddingCar";
import WeddingHeader from "../components/WeddingHeader";
import WeddingFilter from "../components/WeddingFilter";
import WeddingCarListCheck from "../components/WeddingCarListCheck";
import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";
import { FilterPanel } from "../../../../../shared/components/ui";
import WeddingCarService from "../components/WeddingCarService";
import VehicleCard from "../../../../../shared/components/ui/VehicleCard";
import BlankState from "../../../../../shared/components/ui/BlankState";
import useVehicleFilters from "../../../../../shared/hook/useVehicleFilters";

const Wedding = () => {
  const { cars, isLoading, isError, error } = useWeddingCar();
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
  } = useVehicleFilters(cars, 20000, "pricePerDay");
  return (
    <ApiState isLoading={isLoading} error={error} isError={isError}>
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <WeddingHeader cars={cars} />

          <SectionHeader
            badge="Guwahati Wedding Fleet"
            title="Wedding"
            subtitle="Cars"
            description="Choose from our available Wedding vehicles."
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
                              gap-5
                              mt-8
                            "
            >
              {filteredCars.map((car) => (
                <VehicleCard
                  key={car._id}
                  vehicle={car}
                  actionLabel="Booking"
                  actionVariant="primary"
                >
                  <WeddingCarService
                    description={car.description}
                    pricePerDay={car.pricePerDay}
                  />
                </VehicleCard>
              ))}
            </div>
          ) : (
            <BlankState
              icon={Heart}
              iconClassName="text-blue-600"
              title="No Wedding Vehicles Available"
              description="Wedding  are not available currently."
            />
          )}

          {/*  */}
        </div>
      </section>
    </ApiState>
  );
};

export default React.memo(Wedding);

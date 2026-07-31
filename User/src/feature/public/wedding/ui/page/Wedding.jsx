import React from "react";
import { Heart, Plane } from "lucide-react";
import useWeddingCar from "../../hook/useWeddingCar";
import WeddingHeader from "../components/WeddingHeader";
import WeddingFilter from "../components/WeddingFilter";
import WeddingCarListCheck from "../components/WeddingCarListCheck";
import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";
import { FilterPanel } from "../../../../../shared/components/ui";
import WeddingCarService from "../components/WeddingCarService";
import VehicleCard from "../../../../../shared/components/ui/VehicleCard";

const Wedding = () => {
  const { cars, isLoading, isError, error } = useWeddingCar();

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
          <FilterPanel maxDailybudgetClassName="text-[14px]" />

          {cars?.length > 0 ? (
            <div
              className="
                              grid grid-cols-1
                              sm:grid-cols-2
                              lg:grid-cols-4
                              gap-5
                              mt-8
                            "
            >
              {cars.map((car) => (
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
            <div
              className="
      text-center
      py-12
      bg-white
      rounded-2xl
      border
      mt-8
    "
            >
              <Plane size={40} className="mx-auto text-blue-600 mb-4" />

              <h3 className="text-lg font-semibold">
                No Tempo Traveller Available
              </h3>

              <p className="text-slate-500 mt-2">
                Tempo Traveller vehicles are not available currently.
              </p>
            </div>
          )}

          {/*  */}
        </div>
      </section>
    </ApiState>
  );
};

export default React.memo(Wedding);

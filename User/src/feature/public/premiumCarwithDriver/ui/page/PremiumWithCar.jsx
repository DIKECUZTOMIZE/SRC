import React from "react";
import { Crown,Plane } from "lucide-react";

import PremiumCarCard from "../components/PremiumCarCard";
import usePremiumCar from "../../hook/usePremiumCar";
import { FilterPanel } from "../../../../../shared/components/ui";
import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";
import VehicleCard from "../../../../../shared/components/ui/VehicleCard";
import PremiumCarService from "../components/PremiumCarService";

const PremiumWithCar = () => {
  const { cars, isLoading, isError, error } = usePremiumCar();

  return (
    <ApiState isLoading={isLoading} isError={isError} error={error}>
      <section
        className="
    py-10 sm:py-14
    px-4 sm:px-6
    bg-slate-50
    min-h-screen
    "
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <SectionHeader
            badge="Guwahati Premium With Car Fleet"
            title="Premium With Car"
            subtitle="Cars"
            description="Choose from our available Premium With Car vehicles."
            // subtitleClassName="text-red-600 text-2xl"
          />

          <FilterPanel maxDailybudgetClassName="text-[14px]" />
          {/* <PremiumFilter /> */}

          {cars?.length > 0 ? (
            <div
              className="
                                grid grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-4
                                gap-5 mt-8
                              "
            >
              {cars.map(
                (car) => (
              
                  (
                    <VehicleCard
                      key={car._id}
                      vehicle={car}
                      actionLabel="Send Enquiry"
                      actionVariant="secondary"
                      // onBookNow={handleBookNow}
                    >
                      <PremiumCarService
                        description={car.description}
                        pricePerDay={car.pricePerDay}
                        pricePerHour={car.pricePerHour}
                      />
                    </VehicleCard>
                  )
                ),
              )}
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

export default React.memo(PremiumWithCar);

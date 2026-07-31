import React from "react";
// import React, { useState, useMemo, useCallback } from "react";
import {
  Users,
  Settings,
  Fuel,
  Snowflake,
  Star,
  CheckCircle2,
  Clock,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Car,
  RotateCcw,
  Eye,
  ArrowUpRight,
  Sparkles,
  Plane,
} from "lucide-react";
import { useUserCars } from "../../../hook/useUserCarsAll";
import SectionHeader from "../../../../../../shared/components/ui/SectionHeader";
import { FilterPanel } from "../../../../../../shared/components/ui";
import AvailableCarService from "./AvailableCarService";
import VehicleCard from "../../../../../../shared/components/ui/VehicleCard";
import BlankState from "../../../../../../shared/components/ui/BlankState";
import ApiState from "../../../../../../shared/components/shared/ApiState";
import useVehicleFilters from "../../../../../../shared/hook/useVehicleFilters";

const AvailableCars = () => {
  const { cars, isLoading, isError, error } = useUserCars();
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
  } = useVehicleFilters(cars, 20000, "pricePerDay", "pricePerHour");
  return (
    <ApiState isLoading={isLoading} isError={isError} error={error}>
      <section
        className="
      py-8 sm:py-10
      px-4 sm:px-6 md:px-8
      bg-gradient-to-b
      from-slate-100/80
      via-slate-50
      to-slate-100/60
      border-b
      border-slate-200/60
    "
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Guwahati Car List Fleet"
            title="Car List"
            subtitle="See"
          />
          <FilterPanel
          showBudget = {false}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
              {filteredCars.map((car) => (
                <VehicleCard key={car._id} vehicle={car} showAction={false}>
                  <AvailableCarService />
                </VehicleCard>
              ))}
            </div>
          ) : (
            <BlankState
              icon={Plane}
              iconClassName="text-blue-600"
              title="No Car List Vehicles Available"
              description="Car are not available currently."
            />
          )}
        </div>
      </section>
    </ApiState>
  );
};

export default React.memo(AvailableCars);

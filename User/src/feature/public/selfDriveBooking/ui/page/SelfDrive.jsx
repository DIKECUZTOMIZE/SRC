/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useCallback } from "react";
import {
  Users,
  Settings,
  Fuel,
  Snowflake,
  Star,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Car,
  RotateCcw,
  Eye,
  Sparkles,
} from "lucide-react";
import { useSelfDriveCars } from "../../hook/useSelfDriveCarsCrad";
import SelfDriveBookingForm from "../../ui/page/SelfDriveBookingForm";
import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";
import { FilterPanel } from "../../../../../shared/components/ui";
import SelfDriveService from "../components/SelfDriveService";
import VehicleCard from "../../../../../shared/components/ui/VehicleCard";

const SelfDrive = () => {
  const { cars, isLoading, isError, error, fetchCars } = useSelfDriveCars();

  // --- FILTER STATES ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [selectedCar, setSelectedCar] = useState(null);

  const carTypes = ["All", "SUV", "MPV", "Hatchback", "Sedan"];

  // Filter Active Check
  const isFilterActive = useMemo(() => {
    return searchQuery !== "" || selectedType !== "All" || maxPrice !== 50000;
  }, [searchQuery, selectedType, maxPrice]);

  // Reset Filters Handler
  const handleResetFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedType("All");
    setMaxPrice(50000);
  }, []);

  // --- FILTER LOGIC ---
  const filteredCars = useMemo(() => {
    return (cars || []).filter((car) => {
      const carName = `${car.brand || ""} ${car.model || ""}`.toLowerCase();
      const matchesSearch = carName.includes(searchQuery.toLowerCase());
      const matchesType =
        selectedType === "All" || car.classification === selectedType;
      const matchesPrice = Number(car.pricePerDay || 0) <= Number(maxPrice);

      return matchesSearch && matchesType && matchesPrice;
    });
  }, [cars, searchQuery, selectedType, maxPrice]);

  return (
    <ApiState isLoading={isLoading} error={error} isError={isError}>
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-slate-50/70 min-h-screen font-sans text-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* --- HEADER SECTION --- */}
          <SectionHeader
            badge="Guwahati  Self Drive Fleet"
            title="Self Drive"
            subtitle="Cars"
            description="Choose from our available Self Drive vehicles."
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
                  <SelfDriveService
                    description={car.description}
                    pricePerDay={car.pricePerDay}
                    pricePerHour={car.pricePerHour}
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

          {/* --- BOOKING MODAL (Rendered Outside Loop) --- */}
          {selectedCar && (
            <SelfDriveBookingForm
              car={selectedCar}
              onClose={() => setSelectedCar(null)}
            />
          )}
        </div>
      </section>
    </ApiState>
  );
};

export default React.memo(SelfDrive);

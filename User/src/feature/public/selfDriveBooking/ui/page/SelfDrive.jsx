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
  KeyRound,
} from "lucide-react";
import { useSelfDriveCars } from "../../hook/useSelfDriveCarsCrad";
import SelfDriveBookingForm from "../../ui/page/SelfDriveBookingForm";
import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";
import { Button, FilterPanel } from "../../../../../shared/components/ui";
import SelfDriveService from "../components/SelfDriveService";
import VehicleCard from "../../../../../shared/components/ui/VehicleCard";
import BlankState from "../../../../../shared/components/ui/BlankState";
import useVehicleFilters from "../../../../../shared/hook/useVehicleFilters";
import { filterPanelToken } from "../../../../../shared/styles";
import Drawer from "../../../../../shared/components/ui/Drawer";
import useBookingModal from "../../../../../shared/hook/useBookingModal";
import BookingModal from "../../../../../shared/components/ui/BookingModal";
import VehicleSummary from "../../../../../shared/components/ui/VehicleSummary";

const SelfDrive = () => {
  const { cars, isLoading, isError, error, fetchCars } = useSelfDriveCars();
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
  const [open, setOpen] = useState(false);
  let { isOpen, selectedVehicle, openBookingModal, closeBookingModal } =
    useBookingModal();
  const prices = [
    {
      label: "pricePerDay",
      value: selectedVehicle?.pricePerDay,
    },
    {
      label: "pricePerHour",
      value: selectedVehicle?.pricePerHour,
    },
  ];
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

          <Button
            variant="primary"
            onClick={() => setOpen(true)}
            className={filterPanelToken.mobileButton}
          >
            Filters
          </Button>

          <div className={filterPanelToken.desktopFilter}>
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
          </div>

          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            title="Filter Vehicles"
            className={filterPanelToken.mobileDrawer}
          >
            {" "}
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
          </Drawer>

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
                  onBookNow={openBookingModal}
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
            <BlankState
              icon={KeyRound}
              iconClassName="text-blue-600"
              title="No  Self Drive Vehicles Available"
              description="Self Drive cars are not available currently."
            />
          )}

          <BookingModal
            open={isOpen}
            onClose={closeBookingModal}
            title="Book Your Vehicle"
            subtitle="Fill details to confirm booking"
            vehicle={selectedVehicle}
          >
            <VehicleSummary vehicle={selectedVehicle} prices={prices} />
            {/* 
                              <BookingForm
                                vehicle={selectedVehicle}
                                onClose={closeBookingModal}
                              /> */}
          </BookingModal>
        </div>
      </section>
    </ApiState>
  );
};

export default React.memo(SelfDrive);

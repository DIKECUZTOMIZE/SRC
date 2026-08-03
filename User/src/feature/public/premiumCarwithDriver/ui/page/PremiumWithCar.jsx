import React, { useState } from "react";
import { Crown, Plane } from "lucide-react";

import PremiumCarCard from "../components/PremiumCarCard";
import usePremiumCar from "../../hook/usePremiumCar";
import { Button, FilterPanel } from "../../../../../shared/components/ui";
import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";
import VehicleCard from "../../../../../shared/components/ui/VehicleCard";
import PremiumCarService from "../components/PremiumCarService";
import BlankState from "../../../../../shared/components/ui/BlankState";
import useVehicleFilters from "../../../../../shared/hook/useVehicleFilters";
import { filterPanelToken } from "../../../../../shared/styles";
import Drawer from "../../../../../shared/components/ui/Drawer";
import BookingModal from "../../../../../shared/components/ui/BookingModal";
import VehicleSummary from "../../../../../shared/components/ui/VehicleSummary";
import useBookingModal from "../../../../../shared/hook/useBookingModal";

const PremiumWithCar = () => {
  const { cars, isLoading, isError, error } = usePremiumCar();
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
  } = useVehicleFilters(cars);
  const [open, setOpen] = useState(false);
  // Booking Model
  let { isOpen, selectedVehicle, openBookingModal, closeBookingModal } =
    useBookingModal();
 
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
            <FilterPanel
              showBudget={false}
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
                                gap-5 mt-8
                              "
            >
              {filteredCars.map((car) => (
                <VehicleCard
                  key={car._id}
                  vehicle={car}
                  actionLabel="Send Enquiry"
                  onBookNow={openBookingModal}
                >
                  <PremiumCarService
                    description={car.description}
                    pricePerDay={car.pricePerDay}
                    pricePerHour={car.pricePerHour}
                  />
                </VehicleCard>
              ))}
            </div>
          ) : (
            <BlankState
              icon={Crown}
              iconClassName="text-blue-600"
              title="No  Premium Vehicles Available"
              description="Premium are not available currently."
            />
          )}

          <BookingModal
            open={isOpen}
            onClose={closeBookingModal}
            title="Book Your Vehicle"
            subtitle="Fill details to confirm booking"
            vehicle={selectedVehicle}
          >
            <VehicleSummary vehicle={selectedVehicle} />
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

export default React.memo(PremiumWithCar);

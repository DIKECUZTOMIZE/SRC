/* eslint-disable no-undef */
import React, { useState } from "react";
import { Plane } from "lucide-react";

import ApiState from "../../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../../shared/components/ui/SectionHeader";
import AirportService from "../components/AirportService";
import { FilterPanel } from "../../../../../shared/components/ui/FilterPanel";
import VehicleCard from "../../../../../shared/components/ui/VehicleCard";
import BlankState from "../../../../../shared/components/ui/BlankState";
import useVehicleFilters from "../../../../../shared/hook/useVehicleFilters";
import useAirportTransfer from "../../hook/useAirportTransfer";

import Drawer from "../../../../../shared/components/ui/Drawer";
import { Button } from "../../../../../shared/components/ui";
import { filterPanelToken } from "../../../../../shared/styles";
import useBookingModal from "../../../../../shared/hook/useBookingModal";
import BookingModal from "../../../../../shared/components/ui/BookingModal";
import VehicleSummary from "../../../../../shared/components/ui/VehicleSummary";
import AirportCarForm from "../components/AirportBookingForm";
import BookingForm from "../../../../../shared/components/ui/Form/Form";
import AirportBookingForm from "../components/AirportBookingForm";

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

  // Drawer
  const [open, setOpen] = useState(false);

  // Booking Model
  let { isOpen, selectedVehicle, openBookingModal, closeBookingModal } =
    useBookingModal();
  const prices = [
    {
      label: "Pickup",
      value: selectedVehicle?.pickupPrice,
    },
    {
      label: "Drop",
      value: selectedVehicle?.dropPrice,
    },
    {
      label: "Round Trip",
      value: selectedVehicle?.roundTripPrice,
    },
  ];

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
                  onBookNow={openBookingModal}
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

          <BookingModal
            open={isOpen}
            onClose={closeBookingModal}
            title="Book Your Vehicle"
            subtitle="Fill details to confirm booking"
            vehicle={selectedVehicle}
          >
            <VehicleSummary
              vehicle={selectedVehicle}
              prices={prices}
              // note="Local airport transfer prices are fixed. For outstation transfers, please submit the booking form. Our team will contact you with the final quotation before confirming your booking."
            />

            <AirportBookingForm
              vehicle={selectedVehicle}
              onClose={closeBookingModal}
            />
          </BookingModal>
        </div>
      </section>
    </ApiState>
  );
};

export default React.memo(AirportTransfer);

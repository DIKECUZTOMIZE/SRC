/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { SlidersHorizontal, Bus } from "lucide-react";
import TempoFilter from "../components/TempoFilter";
import TempoTravellerCard from "../components/TempoTravellerCard";
import useTempoTravellerBus from "../hook/useTempoTravellerBus";
import ApiState from "../../../../shared/components/shared/ApiState";
import SectionHeader from "../../../../shared/components/ui/SectionHeader";
import { FilterPanel } from "../../../../shared/components/ui";
import TempoTravellerService from "../components/TempoTravellerService";
import VehicleCard from "../../../../shared/components/ui/VehicleCard";
import BlankState from "../../../../shared/components/ui/BlankState";
import useVehicleFilters from "../../../../shared/hook/useVehicleFilters";

const TempoTravellerBus = () => {
  const { cars, isLoading, isError, error } = useTempoTravellerBus();
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
  // const [search, setSearch] = useState("");
  return (
    <ApiState isLoading={isLoading} isError={isError} error={error}>
      <section
        className="
py-10
px-4
bg-slate-50
min-h-screen
"
      >
        <div
          className="
  mt-6
  bg-white
  border
  rounded-2xl
  p-6
  space-y-5
  "
        >
          <h3
            className="
    text-2xl
    font-black
    text-emerald-700
  "
          >
            Plan Your Journey With Comfort & Confidence
          </h3>

          <p className="text-sm text-slate-600">
            Choose the right Tempo Traveller or Bus for your family trip,
            picnic, tour package, corporate travel or long-distance journey.
            <br />
            আপোনাৰ family trip, picnic, tour package, corporate travel বা দূৰ
            যাত্ৰাৰ বাবে উপযুক্ত Tempo Traveller অথবা Bus বাছনি কৰক।
          </p>

          <div>
            <h4 className="font-bold text-slate-800">
              🚍 Perfect For Every Type Of Group Travel
            </h4>

            <p className="text-sm text-slate-600 mt-2">
              ✓ Kaziranga Wildlife Tour, Family Trips, Picnic, Outstation
              Travel, School/College Tours, Corporate Trips & Events.
              <br />✓ Kaziranga wildlife tour, family trip, picnic, outstation
              travel, school/college tour আৰু event travel ৰ বাবে উপযুক্ত।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800">
              💰 Budget Friendly Options
            </h4>

            <p className="text-sm text-slate-600 mt-2">
              We provide vehicle options according to your group size, travel
              distance and budget. Contact us and we will suggest the best
              available option.
              <br />
              আপোনাৰ মানুহৰ সংখ্যা, যাত্ৰাৰ দূৰত্ব আৰু budget অনুসৰি আমি উপযুক্ত
              গাড়ীৰ option suggest কৰিম।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800">
              👨‍✈️ Driver & Trip Support
            </h4>

            <p className="text-sm text-slate-600 mt-2">
              Driver availability, route planning, timing and trip details will
              be discussed before confirmation.
              <br />
              Driver availability, route, timing আৰু trip details booking
              confirm কৰাৰ আগতে আলোচনা কৰা হ'ব।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800">
              ✅ Before Booking We Will Inform You
            </h4>

            <ul
              className="
      text-sm
      text-slate-600
      mt-2
      space-y-2
    "
            >
              <li>
                Vehicle condition & availability
                <br />
                গাড়ীৰ অৱস্থা আৰু availability
              </li>

              <li>
                Driver details and travel support
                <br />
                Driver ৰ তথ্য আৰু travel support
              </li>

              <li>
                Estimated trip cost & additional charges (if any)
                <br />
                আনুমানিক খৰচ আৰু extra charge (যদি থাকে)
              </li>

              <li>
                Pickup location, route and timing
                <br />
                Pickup location, route আৰু timing
              </li>
            </ul>
          </div>

          <div
            className="
    bg-emerald-50
    border
    border-emerald-200
    rounded-xl
    p-4
    "
          >
            <h4
              className="
      font-bold
      text-emerald-700
    "
            >
              📞 Easy Enquiry Process
            </h4>

            <p className="text-sm text-slate-700 mt-2">
              Select your vehicle → Share your trip details → Get vehicle &
              pricing information → Confirm your journey.
              <br />
              <br />
              গাড়ী বাছনি কৰক → আপোনাৰ trip details দিয়ক → গাড়ী আৰু price ৰ
              তথ্য লওক → আপোনাৰ যাত্ৰা confirm কৰক।
            </p>

            <p
              className="
      mt-3
      text-sm
      font-semibold
      text-emerald-700
    "
            >
              Contact us on Call / WhatsApp for best vehicle suggestion.
              <br />
              ভাল vehicle suggestion ৰ বাবে Call / WhatsApp কৰক।
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Guwahati TempoTraveller Bus Fleet"
            title="TempoTraveller Bus"
            subtitle="Cars"
            description="Choose from our available TempoTraveller Bus vehicles."
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
                  actionLabel="Send Enquiry"
                  actionVariant="secondary"
                >
                  <TempoTravellerService
                    description={car.description}
                    seats={car.seats}
                  />
                </VehicleCard>
              ))}
            </div>
          ) : (
            <BlankState
              icon={Bus}
              iconClassName="text-blue-600"
              title="No  Tempo Traveller Bus Vehicles Available"
              description="Tempo Traveller Bus  are not available currently."
            />
          )}
        </div>
      </section>
    </ApiState>
  );
};

export default React.memo(TempoTravellerBus);

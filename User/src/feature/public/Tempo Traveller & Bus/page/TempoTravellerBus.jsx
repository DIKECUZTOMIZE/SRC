import React, { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import TempoFilter from "../components/TempoFilter";
import TempoTravellerCard from "../components/TempoTravellerCard";
import useTempoTravellerBus from "../hook/useTempoTravellerBus";

const TempoTravellerBus = () => {
  const { vehicles, isLoading, isError } = useTempoTravellerBus();

  const [search, setSearch] = useState("");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const name = `${vehicle.brand} ${vehicle.model}`.toLowerCase();

      return name.includes(search.toLowerCase());
    });
  }, [vehicles, search]);

  if (isLoading)
    return <p className="text-center py-20">Loading Vehicles...</p>;

  if (isError)
    return (
      <p className="text-center py-20 text-red-500">Something went wrong</p>
    );

  return (
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

  <h3 className="
    text-2xl
    font-black
    text-emerald-700
  ">
    Plan Your Journey With Comfort & Confidence
  </h3>

  <p className="text-sm text-slate-600">
    Choose the right Tempo Traveller or Bus for your family trip,
    picnic, tour package, corporate travel or long-distance journey.
    <br />
    আপোনাৰ family trip, picnic, tour package, corporate travel
    বা দূৰ যাত্ৰাৰ বাবে উপযুক্ত Tempo Traveller অথবা Bus বাছনি কৰক।
  </p>



  <div>
    <h4 className="font-bold text-slate-800">
      🚍 Perfect For Every Type Of Group Travel
    </h4>

    <p className="text-sm text-slate-600 mt-2">
      ✓ Kaziranga Wildlife Tour, Family Trips, Picnic, Outstation Travel,
      School/College Tours, Corporate Trips & Events.
      <br />
      ✓ Kaziranga wildlife tour, family trip, picnic, outstation travel,
      school/college tour আৰু event travel ৰ বাবে উপযুক্ত।
    </p>
  </div>




  <div>
    <h4 className="font-bold text-slate-800">
      💰 Budget Friendly Options
    </h4>

    <p className="text-sm text-slate-600 mt-2">
      We provide vehicle options according to your group size,
      travel distance and budget. Contact us and we will suggest
      the best available option.
      <br />
      আপোনাৰ মানুহৰ সংখ্যা, যাত্ৰাৰ দূৰত্ব আৰু budget অনুসৰি
      আমি উপযুক্ত গাড়ীৰ option suggest কৰিম।
    </p>
  </div>





  <div>
    <h4 className="font-bold text-slate-800">
      👨‍✈️ Driver & Trip Support
    </h4>

    <p className="text-sm text-slate-600 mt-2">
      Driver availability, route planning, timing and trip details
      will be discussed before confirmation.
      <br />
      Driver availability, route, timing আৰু trip details
      booking confirm কৰাৰ আগতে আলোচনা কৰা হ'ব।
    </p>
  </div>





  <div>
    <h4 className="font-bold text-slate-800">
      ✅ Before Booking We Will Inform You
    </h4>

    <ul className="
      text-sm
      text-slate-600
      mt-2
      space-y-2
    ">

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

    <h4 className="
      font-bold
      text-emerald-700
    ">
      📞 Easy Enquiry Process
    </h4>


    <p className="text-sm text-slate-700 mt-2">

      Select your vehicle → Share your trip details →
      Get vehicle & pricing information →
      Confirm your journey.

      <br /><br />

      গাড়ী বাছনি কৰক → আপোনাৰ trip details দিয়ক →
      গাড়ী আৰু price ৰ তথ্য লওক →
      আপোনাৰ যাত্ৰা confirm কৰক।

    </p>


    <p className="
      mt-3
      text-sm
      font-semibold
      text-emerald-700
    ">
      Contact us on Call / WhatsApp for best vehicle suggestion.
      <br />
      ভাল vehicle suggestion ৰ বাবে Call / WhatsApp কৰক।
    </p>


  </div>


</div>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 border-b pb-5">
          <h2
            className="
text-3xl
font-black
"
          >
            Tempo Traveller &
            <span className="text-emerald-600">Bus Rental</span>
          </h2>

          <p className="text-slate-500 mt-2">Group travel vehicles available</p>
        </div>

        <TempoFilter search={search} setSearch={setSearch} />

        {filteredVehicles.length ? (
          <div
            className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
mt-8
"
          >
            {filteredVehicles.map((vehicle) => (
              <TempoTravellerCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div
            className="
bg-white
border
rounded-2xl
py-16
text-center
"
          >
            <SlidersHorizontal className="mx-auto text-emerald-600" />

            <h3 className="font-bold mt-3">No Vehicle Available</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(TempoTravellerBus);

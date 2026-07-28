import React from "react";

import TempoTravellerDetails from "./TempoTravellerDetails";
import BusDetails from "./BusDetails";
import VehicleTypeTempoTravellerBus from "./vehicleTypeTempoTrevellerBus";

const TempoTravellerBusForm = ({
  register,
  handleSubmit,
  onSubmit,

  watch,
}) => {
  const vehicleType = watch("vehicleType");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Select Tempo / Bus */}
      <VehicleTypeTempoTravellerBus register={register} />

      {/* Tempo Traveller Details */}
      {vehicleType === "Tempo Traveller" && (
        <TempoTravellerDetails register={register} />
      )}

      {/* Bus Details */}
      {vehicleType === "Bus" && <BusDetails register={register} />}
    </form>
  );
};

export default TempoTravellerBusForm;

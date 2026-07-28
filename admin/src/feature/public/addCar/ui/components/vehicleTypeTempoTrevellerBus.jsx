import React from "react";

const VehicleTypeTempoTravellerBus = ({ register }) => {
  return (
    <div>
      <label className="text-sm font-bold block mb-2">
        Select Vehicle Type
      </label>

      <select
        {...register("vehicleType")}
        className="w-full border rounded-xl p-3"
      >
        <option value="">
          Select Type
        </option>

        <option value="Tempo Traveller">
          Tempo Traveller
        </option>

        <option value="Bus">
          Bus
        </option>

      </select>
    </div>
  );
};

export default VehicleTypeTempoTravellerBus;
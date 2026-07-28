import React from "react";

const AirportTransferForm = ({ register }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Pickup Price */}
      <div>
        <label className="text-sm font-bold">Pickup Price</label>

        <input
          type="number"
          placeholder="Pickup Price"
          {...register("pickupPrice")}
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* Drop Price */}
      <div>
        <label className="text-sm font-bold">Drop Price</label>

        <input
          type="number"
          placeholder="Drop Price"
          {...register("dropPrice")}
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* Round Trip */}
      <div>
        <label className="text-sm font-bold">Round Trip Price</label>

        <input
          type="number"
          placeholder="Round Trip Price"
          {...register("roundTripPrice")}
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* Status */}
      <div>
        <label className="text-sm font-bold">Status</label>

        <select
          {...register("status")}
          className="w-full border rounded-xl p-3"
        >
          <option value="Available">Available</option>
          <option value="Reserved">Reserved</option>
          <option value="Booked">Booked</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>
    </div>
  );
};

export default AirportTransferForm;

import React from "react";

const WithDriverForm = ({ register, watch }) => {
  const classification = watch("classification");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* Price Per Hour */}
      <div>
        <label className="text-sm font-bold">Price Per Hour</label>

        <input
          type="number"
          placeholder="Price Per Hour"
          {...register("pricePerHour")}
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* Price Per Day */}
      <div>
        <label className="text-sm font-bold">Price Per Day</label>

        <input
          type="number"
          placeholder="Price Per Day"
          {...register("pricePerDay")}
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* Driver Charge */}
      <div>
        <label className="text-sm font-bold">Driver Charge Per Day</label>

        <input
          type="number"
          placeholder="Driver Charge Per Day"
          {...register("driverChargePerDay")}
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

      {/* Loading Capacity */}
      {(classification === "Pickup" || classification === "Mini Truck") && (
        <div>
          <label className="text-sm font-bold">Loading Capacity</label>

          <input
            type="text"
            placeholder="Example: 1 Ton, 2 Ton"
            {...register("loadingCapacity")}
            className="w-full border rounded-xl p-3"
          />
        </div>
      )}
    </div>
  );
};

export default WithDriverForm;

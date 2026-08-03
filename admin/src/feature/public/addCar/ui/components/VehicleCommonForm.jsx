import React from "react";

const VehicleCommonForm = ({ register, watch }) => {
  const vehicleType = watch("vehicleType");

  const classifications =
    vehicleType === "Tempo Traveller"
      ? ["Tempo Traveller"]
      : vehicleType === "Bus"
        ? ["Mini Bus", "Luxury Bus", "Sleeper Bus", "Volvo Bus"]
        : [
            "Hatchback",
            "Sedan",
            "SUV",
            "MUV",
            "Luxury",
            "Pickup",
            "Mini Truck",
          ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Brand */}
      <input
        placeholder="Brand"
        {...register("brand")}
        className="border rounded-xl p-3"
      />

      {/* Model */}
      <input
        placeholder="Model"
        {...register("model")}
        className="border rounded-xl p-3"
      />

      {/* Classification */}
      <select {...register("classification")} className="border rounded-xl p-3">
        <option value="">Select Classification</option>

        {classifications.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Fuel */}
      <select {...register("fuel")} className="border rounded-xl p-3">
        <option value="">Fuel</option>

        <option value="Petrol">Petrol</option>

        <option value="Diesel">Diesel</option>

        <option value="CNG">CNG</option>

        <option value="Electric">Electric</option>
      </select>

      {/* Transmission */}
      <select {...register("transmission")} className="border rounded-xl p-3">
        <option value="">Transmission</option>

        <option value="Manual">Manual</option>

        <option value="Automatic">Automatic</option>
      </select>

      {/* Seats */}
      <input
        type="number"
        placeholder="Seat Capacity"
        {...register("seats")}
        className="border rounded-xl p-3"
      />
      {/* AC Type */}
      <select {...register("acType")} className="border rounded-xl p-3">
        <option value="">AC Type</option>

        <option value="AC">AC</option>

        <option value="Non AC">Non AC</option>
      </select>
      {/* Image */}
      <input
        type="file"
        {...register("image")}
        className="border rounded-xl p-3"
      />

      {/* Description */}
      <textarea
        placeholder="Description"
        {...register("description")}
        className="border rounded-xl p-3 md:col-span-3"
      />
    </div>
  );
};

export default VehicleCommonForm;

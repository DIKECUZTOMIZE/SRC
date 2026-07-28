import React from "react";

const TempoTravellerDetails = ({ register }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Tempo Traveller Details</h3>

      {/* AC */}
      <div>
        <label className="text-sm font-bold">AC Type</label>

        <select
          {...register("acType")}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select AC</option>

          <option value="AC">AC</option>

          <option value="Non AC">Non AC</option>
        </select>
      </div>

      {/* Vehicle Class */}
      <div>
        <label className="text-sm font-bold">Traveller Type</label>

        <select
          {...register("vehicleClass")}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select Type</option>

          <option value="Luxury">Luxury</option>

          <option value="Premium">Premium</option>

          <option value="Normal">Normal</option>
        </select>
      </div>
    </div>
  );
};

export default TempoTravellerDetails;

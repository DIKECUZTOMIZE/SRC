import React from "react";

const BusDetails = ({ register }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Bus Details</h3>

      {/* Bus Type */}
      <div>
        <label className="text-sm font-bold">Bus Type</label>

        <select
          {...register("busType")}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select Bus</option>

          <option value="Mini Bus">Mini Bus</option>

          <option value="Luxury Bus">Luxury Bus</option>

          <option value="Volvo Bus">Volvo Bus</option>
        </select>
      </div>

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
    </div>
  );
};

export default BusDetails;

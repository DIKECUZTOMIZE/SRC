import React from "react";

const WeddingCarForm = ({ register, watch }) => {
  const showDecoration = watch("showDecoration");

  return (
    <div className="space-y-6">
      {/* Car Price */}
      <div>
        <label className="text-sm font-bold">Car Price Per Day</label>

        <input
          type="number"
          placeholder="Car Price Per Day"
          {...register("pricePerDay")}
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
      {/* Show Decoration */}
      <div>
        <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
          <input type="checkbox" {...register("showDecoration")} />
          Add Decoration
        </label>

        <p className="text-xs text-gray-500 mt-1">
          Leave unchecked if this wedding car has no decoration package.
        </p>
      </div>

      {showDecoration && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Decoration Type */}
          <div>
            <label className="text-sm font-bold">Decoration Type</label>

            <select
              {...register("decorationType")}
              className="w-full border rounded-xl p-3"
            >
              <option value="">Select Decoration</option>

              <option value="Simple Decoration">Simple Decoration</option>

              <option value="Royal Flower">Royal Flower</option>

              <option value="Ribbon Decoration">Ribbon Decoration</option>

              <option value="Premium Setup">Premium Setup</option>

              <option value="Customize">Customize</option>
            </select>
          </div>

          {/* Decoration Name */}
          <div>
            <label className="text-sm font-bold">Decoration Name</label>

            <input
              type="text"
              placeholder="Example : Red Rose Theme"
              {...register("decorationName")}
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Decoration Price */}
          <div>
            <label className="text-sm font-bold">Decoration Price</label>

            <input
              type="number"
              placeholder="Decoration Price"
              {...register("decorationPrice")}
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Decoration Images */}
          <div className="md:col-span-2">
            <label className="text-sm font-bold">Decoration Images</label>

            <input
              type="file"
              multiple
              accept="image/*"
              {...register("decorationImages")}
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="text-sm font-bold">Decoration Description</label>

            <textarea
              rows={4}
              placeholder="Write decoration details..."
              {...register("description")}
              className="w-full border rounded-xl p-3"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingCarForm;

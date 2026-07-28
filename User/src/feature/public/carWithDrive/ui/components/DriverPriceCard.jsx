import React from "react";

const DriverPriceCard = ({ pricePerHour, pricePerDay, driverChargePerDay }) => {
  return (
    <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h4 className="text-sm font-bold text-slate-700 mb-3">Pricing</h4>

      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        {/* Hour */}
        <div>
          <p className="text-xs text-slate-500">Per Hour</p>

          <h3 className="text-lg font-bold text-emerald-600">
            ₹{pricePerHour || 0}
          </h3>
        </div>

        <div className="h-10 w-px bg-slate-300"></div>

        {/* Day */}
        <div className="text-right">
          <p className="text-xs text-slate-500">Per Day</p>

          <h3 className="text-lg font-bold text-slate-900">
            ₹{pricePerDay || 0}
          </h3>
        </div>
      </div>

      <div className="mt-3 space-y-2 text-xs text-slate-600">
        {/* Driver Charge */}
        <div className="flex justify-between">
          <span>Driver Charge</span>

          <span className="font-semibold text-emerald-600">
            {driverChargePerDay > 0 ? `₹${driverChargePerDay}/Day` : "Included"}
          </span>
        </div>

        {/* Fuel */}
        <div className="flex justify-between">
          <span>Fuel</span>

          <span>Extra</span>
        </div>

        {/* Toll */}
        <div className="flex justify-between">
          <span>Toll / Parking</span>

          <span>Extra</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DriverPriceCard);

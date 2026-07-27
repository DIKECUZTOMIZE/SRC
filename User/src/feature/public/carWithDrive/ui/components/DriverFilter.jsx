import React from "react";
import { Search } from "lucide-react";

const DriverFilter = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5 mb-8">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Search Vehicle</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Vehicle Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Vehicle Type</label>

          <select className="w-full border rounded-xl p-3">
            <option>All Vehicles</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Hatchback</option>
          </select>
        </div>

        {/* Fuel */}
        <div>
          <label className="block text-sm font-medium mb-1">Fuel Type</label>

          <select className="w-full border rounded-xl p-3">
            <option>All</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>CNG</option>
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-sm font-medium mb-1">Transmission</label>

          <select className="w-full border rounded-xl p-3">
            <option>All</option>
            <option>Manual</option>
            <option>Automatic</option>
          </select>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold">
            <Search size={18} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DriverFilter);

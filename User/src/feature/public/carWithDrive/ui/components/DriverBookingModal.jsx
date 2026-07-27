import React from "react";
import { X } from "lucide-react";
import DriverSummary from "./DriverSummary";
import DriverBookingForm from "./DriverBookingForm";

const DriverBookingModal = ({ car, onClose }) => {
  if (!car) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-2xl font-bold">Book Car With Driver</h2>

          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left */}
          <DriverSummary car={car} />

          {/* Right */}
          <DriverBookingForm car={car} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(DriverBookingModal);

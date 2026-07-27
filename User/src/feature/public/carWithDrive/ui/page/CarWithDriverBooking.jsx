import React from "react";

const CarWithDriverBooking = ({ car, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Car With Driver Booking
          </h2>

          <button
            onClick={onClose}
            className="text-xl font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form className="space-y-6">

          {/* Vehicle */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Vehicle Details</h3>

            <div className="grid md:grid-cols-3 gap-3">

              <input
                value={`${car.brand} ${car.model}`}
                readOnly
                className="border p-2 rounded"
              />

              <input
                value={car.fuel}
                readOnly
                className="border p-2 rounded"
              />

              <input
                value={car.transmission}
                readOnly
                className="border p-2 rounded"
              />

            </div>
          </div>

          {/* Booking */}

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">
              Booking Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <select className="border rounded p-2">
                <option>Per Hour</option>
                <option>Per Day</option>
              </select>

              <input
                type="number"
                placeholder="Hours / Days"
                className="border rounded p-2"
              />

              <input
                type="date"
                className="border rounded p-2"
              />

              <input
                type="time"
                className="border rounded p-2"
              />

            </div>
          </div>

          {/* Journey */}

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">
              Journey Details
            </h3>

            <textarea
              placeholder="Pickup Address"
              className="border rounded p-2 w-full mb-3"
              rows="2"
            />

            <textarea
              placeholder="Drop Address"
              className="border rounded p-2 w-full"
              rows="2"
            />
          </div>

          {/* Customer */}

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">
              Customer Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                placeholder="Full Name"
                className="border rounded p-2"
              />

              <input
                placeholder="Mobile Number"
                className="border rounded p-2"
              />

              <input
                type="email"
                placeholder="Email"
                className="border rounded p-2 md:col-span-2"
              />

            </div>
          </div>

          {/* Payment */}

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">
              Payment
            </h3>

            <select className="border rounded p-2 w-full">
              <option>Cash</option>
              <option>Online</option>
            </select>
          </div>

          {/* Price */}

          <div className="bg-emerald-50 border rounded-lg p-4 flex justify-between">
            <span className="font-semibold">
              Estimated Fare
            </span>

            <span className="text-xl font-bold text-emerald-600">
              ₹{car.pricePerDay}
            </span>
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold"
          >
            Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
};

export default CarWithDriverBooking;
import React from "react";
import {
  User,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Navigation,
  CreditCard,
} from "lucide-react";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
const DriverBookingForm = () => {
  const location = useLocation();

  const car = location.state?.car;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({
      car,
      ...data,
    });
  };
  return (
    <>
      <div>
        <p>name: {car.brand}</p>
        <p>Per Hour: {car.pricePerHour}</p>
        <p>Per Day: {car.pricePerDay}</p>
        <p>fuel: {car.fuel}</p>
        <p>transmission: {car.transmission}</p>
        <p>seats: {car.seats}</p>
        <p>classification: {car.classification}</p>
        <p>model: {car.model}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <h2 className="text-xl font-bold text-slate-900">Booking Details</h2>

        {/* Customer Name */}
        <input
          type="text"
          placeholder="Enter your name"
          {...register("fullName", {
            required: "Full Name is required",
          })}
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}

        {/* Mobile */}
        <input
          type="tel"
          placeholder="Enter mobile number"
          {...register("mobile", {
            required: "Mobile Number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid mobile number",
            },
          })}
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {errors.mobile && (
          <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
        )}

        {/* Pickup */}
        <input
          type="text"
          placeholder="Pickup address"
          {...register("pickupLocation", {
            required: "Pickup Location is required",
          })}
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {errors.pickupLocation && (
          <p className="text-red-500 text-sm mt-1">
            {errors.pickupLocation.message}
          </p>
        )}

        {/* Destination */}
        <input
          type="text"
          placeholder="Destination address"
          {...register("destination", {
            required: "Destination is required",
          })}
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {errors.destination && (
          <p className="text-red-500 text-sm mt-1">
            {errors.destination.message}
          </p>
        )}
        {/* Date & Time */}
        <input
          type="date"
          {...register("journeyDate", {
            required: "Journey Date is required",
          })}
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {errors.journeyDate && (
          <p className="text-red-500 text-sm mt-1">
            {errors.journeyDate.message}
          </p>
        )}

        {/* Trip Type */}
        <select
          {...register("tripType", {
            required: "Trip Type is required",
          })}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select Trip Type</option>
          <option value="Local">Local</option>
          <option value="Outstation">Outstation</option>
          <option value="Airport Pickup">Airport Pickup</option>
          <option value="Airport Drop">Airport Drop</option>
        </select>

        {errors.tripType && (
          <p className="text-red-500 text-sm mt-1">{errors.tripType.message}</p>
        )}

        {/* Payment */}
        <select
          {...register("paymentMethod", {
            required: "Payment Method is required",
          })}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select Payment Method</option>
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
        </select>

        {errors.paymentMethod && (
          <p className="text-red-500 text-sm mt-1">
            {errors.paymentMethod.message}
          </p>
        )}

        {/* Note */}
        <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-3">
          <p className="text-xs text-slate-600">
            Final fare depends on total distance, waiting time, toll, parking
            and applicable taxes.
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition"
        >
          Confirm Booking
        </button>
      </form>
    </>
  );
};

export default React.memo(DriverBookingForm);

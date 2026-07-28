/* eslint-disable no-unused-vars */
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
import useCarWithDriverBooking from "../../hook/useCarWithDriverBooking";
const DriverBookingForm = () => {
  // const location = useLocation();

  // const car = location.state?.car;
  const { car, register, handleSubmit, errors, onSubmit, bookingMutation } =
    useCarWithDriverBooking();
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto space-y-4 bg-white p-5 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold">Booking Details</h2>

        {/* Booking Type */}
        <select
          {...register("bookingType")}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select Booking Type</option>
          <option value="hour">Hour</option>
          <option value="day">Day</option>
        </select>

        {/* Quantity */}
        <input
          type="number"
          placeholder="Enter Quantity"
          {...register("quantity")}
          className="w-full border rounded-xl p-3"
        />

        {/* Trip Type */}
        <select
          {...register("tripType")}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select Trip Type</option>
          <option value="Local">Local</option>
          <option value="Outstation">Outstation</option>
        </select>

        {/* Pickup */}
        <input
          type="text"
          placeholder="Pickup Location"
          {...register("pickupLocation")}
          className="w-full border rounded-xl p-3"
        />

        {/* Destination */}
        <input
          type="text"
          placeholder="Destination"
          {...register("destination")}
          className="w-full border rounded-xl p-3"
        />

        {/* Pickup Date */}
        <input
          type="date"
          {...register("pickupDate")}
          className="w-full border rounded-xl p-3"
        />

        {/* Pickup Time */}
        <input
          type="time"
          {...register("pickupTime")}
          className="w-full border rounded-xl p-3"
        />

        {/* AM PM */}
        <select
          {...register("timePeriod")}
          className="w-full border rounded-xl p-3"
        >
          <option value="">AM / PM</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>

        <h2 className="text-2xl font-bold">Customer Details</h2>

        <input
          type="text"
          placeholder="Full Name"
          {...register("customer.name")}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          {...register("customer.mobile")}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          {...register("customer.email")}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="tel"
          placeholder="WhatsApp Number (Optional)"
          {...register("customer.whatsapp")}
          className="w-full border rounded-xl p-3"
        />

        <h2 className="text-2xl font-bold">Address</h2>

        <textarea
          placeholder="Current Address"
          {...register("address.currentAddress")}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="State"
          {...register("address.state")}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="City"
          {...register("address.city")}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Police Station (Optional)"
          {...register("address.policeStation")}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Pin Code"
          {...register("address.pinCode")}
          className="w-full border rounded-xl p-3"
        />

        <h2 className="text-2xl font-bold">Payment</h2>

        <select
          {...register("paymentMethod")}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select Payment Method</option>
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
        </select>

        <div className="rounded-xl bg-slate-100 p-4">
          <p>Car Charge : ₹0</p>
          <p>Driver Charge : ₹0</p>
          <p>Extra Charge : ₹0</p>

          <hr className="my-2" />

          <p className="font-bold text-lg">Total : ₹0</p>
        </div>

        <label className="flex gap-2 items-start">
          <input type="checkbox" {...register("terms")} />
          <span>I agree to the Terms & Conditions.</span>
        </label>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold"
        >
          Book Now
        </button>
      </form>
    </>
  );
};

export default React.memo(DriverBookingForm);

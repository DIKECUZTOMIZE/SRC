/* eslint-disable no-unused-vars */
import React from "react";
import useSelfDriveBooking from "../../hook/useSelfDriveBooking";

const SelfBooking = ({ car, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    errors,
    onSubmit,
    bookingTypeValue,
    deliveryType,
    amount,
    baseAmount,
    deliveryCharge,
  } = useSelfDriveBooking(car, onClose);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-300">
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-emerald-100/80 overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-xs sm:text-sm">
        {/* Header */}
        <div className="px-4 py-3 bg-white/80 backdrop-blur-sm border-b border-emerald-100 flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md border border-emerald-200">
              Self-Drive Booking
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">
              Book {car.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors font-semibold text-base border border-emerald-100"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            {/* Hidden Form Inputs */}
            <input type="hidden" value={car.id} {...register("vehicleId")} />
            <input type="hidden" value={car.name} {...register("name")} />
            <input type="hidden" value={car.fuel} {...register("fuel")} />
            <input
              type="hidden"
              value={car.transmission}
              {...register("transmission")}
            />
            <input type="hidden" value={car.seats} {...register("seats")} />
            <input
              type="hidden"
              value={car.pricePerHour}
              {...register("pricePerHour", { valueAsNumber: true })}
            />
            <input
              type="hidden"
              value={car.pricePerDay}
              {...register("pricePerDay", { valueAsNumber: true })}
            />

            {/* VEHICLE CARD */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3.5 border border-emerald-100 shadow-sm">
              <h3 className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-2">
                Vehicle Overview
              </h3>
              {/* Car Specs Grid */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
                {[
                  { label: "Name", value: car.brand },
                  { label: "Model", value: car.model },
                  { label: "Fuel", value: car.fuel },
                  { label: "Transmission", value: car.transmission },
                  { label: "Seats", value: `${car.seats} Seats` },
                  {
                    label: "Per Hour",
                    value: `₹${car.pricePerHour}`,
                    isPrice: true,
                  },
                  {
                    label: "Per Day",
                    value: `₹${car.pricePerDay}`,
                    isPrice: true,
                  },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="rounded-md border border-emerald-100/60 bg-emerald-50/50 p-2"
                  >
                    <span className="block text-[10px] text-slate-500">
                      {spec.label}
                    </span>
                    <span
                      className={`font-semibold ${
                        spec.isPrice
                          ? "font-bold text-emerald-700"
                          : "text-slate-800"
                      }`}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              ;
            </div>

            {/* BOOKING DETAILS CARD */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3.5 border border-emerald-100 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-slate-800 border-b border-emerald-100 pb-1.5">
                Booking Schedule & Receive Option
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Booking Type */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Booking Type
                  </label>
                  <select
                    {...register("bookingType", {
                      required: "Please select booking type",
                    })}
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors.bookingType
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  >
                    <option value="">Select Booking Type</option>
                    <option value="day">Per Day</option>
                    <option value="hour">Per Hour</option>
                  </select>
                  {errors.bookingType && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.bookingType.message}
                    </span>
                  )}
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Duration / Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    {...register("quantity", {
                      required: "Enter duration/quantity",
                      valueAsNumber: true,
                      min: { value: 1, message: "Quantity must be at least 1" },
                    })}
                    placeholder={
                      bookingTypeValue === "hour" ? "Total Hours" : "Total Days"
                    }
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors.quantity
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors.quantity && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.quantity.message}
                    </span>
                  )}
                </div>

                {/* Pickup Date */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    {...register("pickupDate", {
                      required: "Pickup date required",
                    })}
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors.pickupDate
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors.pickupDate && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.pickupDate.message}
                    </span>
                  )}
                </div>
                {/* Pickup Time */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Pickup Time
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="10:30"
                      {...register("pickupTime", {
                        required: "Time required",
                      })}
                      className="w-full bg-emerald-50/30 border border-slate-200 rounded-md px-2.5 py-1.5 text-xs outline-none focus:border-emerald-500"
                    />

                    <select
                      {...register("timePeriod", {
                        required: "Select AM/PM",
                      })}
                      className="bg-emerald-50/30 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-bold outline-none focus:border-emerald-500"
                    >
                      <option value="">AM/PM</option>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>

                  {errors.pickupTime && (
                    <p className="text-[10px] text-red-500 mt-1">
                      {errors.pickupTime.message}
                    </p>
                  )}

                  {errors.timePeriod && (
                    <p className="text-[10px] text-red-500 mt-1">
                      {errors.timePeriod.message}
                    </p>
                  )}
                </div>

                {/* Delivery Type */}
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Vehicle Receive Option
                  </label>
                  <select
                    {...register("deliveryType", {
                      required: "Select delivery option",
                    })}
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors.deliveryType
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  >
                    <option value="">Select Option</option>
                    <option value="Pickup">Self Pickup (₹0)</option>
                    <option value="Drop">Home Delivery</option>
                  </select>
                  {errors.deliveryType && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.deliveryType.message}
                    </span>
                  )}
                </div>

                {/* Delivery KM + Address */}
                {deliveryType === "Drop" && (
                  <>
                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Delivery Distance
                      </label>
                      <select
                        {...register("distance", {
                          valueAsNumber: true,
                          required: "Select distance for delivery",
                        })}
                        className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                          errors.distance
                            ? "border-red-500 focus:border-red-500"
                            : "border-slate-200 focus:border-emerald-500"
                        }`}
                      >
                        <option value="">Select KM</option>
                        <option value="3">0 - 3 KM (₹0)</option>
                        <option value="5">3 - 5 KM (₹300)</option>
                        <option value="10">5 - 10 KM (₹500)</option>
                        <option value="20">Above 10 KM (₹1000)</option>
                      </select>
                      {errors.distance && (
                        <span className="text-[10px] text-red-500 mt-0.5 block">
                          {errors.distance.message}
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Delivery Address
                      </label>
                      <textarea
                        {...register("deliveryAddress", {
                          required: "Delivery address is required",
                          minLength: {
                            value: 10,
                            message:
                              "Address must be at least 10 characters long",
                          },
                        })}
                        placeholder="Enter full delivery address..."
                        rows={2}
                        className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none ${
                          errors.deliveryAddress
                            ? "border-red-500 focus:border-red-500"
                            : "border-slate-200 focus:border-emerald-500"
                        }`}
                      />
                      {errors.deliveryAddress && (
                        <span className="text-[10px] text-red-500 mt-0.5 block">
                          {errors.deliveryAddress.message}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* CUSTOMER DETAILS CARD */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3.5 border border-emerald-100 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-slate-800 border-b border-emerald-100 pb-1.5">
                Customer Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Full Name
                  </label>
                  <input
                    {...register("customer.name", {
                      required: "Full Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                    placeholder="Enter Full Name"
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors?.customer?.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors?.customer?.name && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.customer.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Mobile Number
                  </label>
                  <input
                    {...register("customer.mobile", {
                      required: "Mobile Number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter valid 10 digit Indian mobile number",
                      },
                    })}
                    placeholder="Enter Mobile Number"
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors?.customer?.mobile
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors?.customer?.mobile && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.customer.mobile.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("customer.email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter valid email address",
                      },
                    })}
                    placeholder="Enter Email Address"
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors?.customer?.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors?.customer?.email && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.customer.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    {...register("customer.whatsapp", {
                      required: "WhatsApp Number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter valid 10 digit WhatsApp number",
                      },
                    })}
                    placeholder="Enter WhatsApp Number"
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors?.customer?.whatsapp
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors?.customer?.whatsapp && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.customer.whatsapp.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Current Address
                  </label>
                  <textarea
                    {...register("customer.currentAddress", {
                      required: "Current Address is required",
                      minLength: {
                        value: 10,
                        message: "Address must be at least 10 characters long",
                      },
                    })}
                    placeholder="Enter Current Address"
                    rows={2}
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none ${
                      errors?.customer?.currentAddress
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors?.customer?.currentAddress && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.customer.currentAddress.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* ADDRESS DETAILS CARD */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3.5 border border-emerald-100 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-slate-800 border-b border-emerald-100 pb-1.5">
                Location Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    State
                  </label>
                  <select
                    {...register("address.state", {
                      required: "State is required",
                    })}
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors?.address?.state
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  >
                    <option value="">Select State</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                  {errors?.address?.state && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.address.state.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    City
                  </label>
                  <input
                    {...register("address.city", {
                      required: "City is required",
                    })}
                    placeholder="Enter City"
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors?.address?.city
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors?.address?.city && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.address.city.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Police Station
                  </label>
                  <input
                    {...register("address.policeStation", {
                      required: "Police Station is required",
                    })}
                    placeholder="Enter Police Station"
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors?.address?.policeStation
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors?.address?.policeStation && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.address.policeStation.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    PIN Code
                  </label>
                  <input
                    {...register("address.pinCode", {
                      required: "PIN Code is required",
                      pattern: {
                        value: /^[1-9][0-9]{5}$/,
                        message: "Enter valid 6 digit Indian PIN Code",
                      },
                    })}
                    placeholder="Enter PIN Code"
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors?.address?.pinCode
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  />
                  {errors?.address?.pinCode && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.address.pinCode.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* PAYMENT & SUMMARY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Hidden Price State Register */}
              <input
                type="hidden"
                value={baseAmount}
                {...register("baseAmount", { valueAsNumber: true })}
              />
              <input
                type="hidden"
                value={deliveryCharge}
                {...register("deliveryCharge", { valueAsNumber: true })}
              />
              <input
                type="hidden"
                value={amount}
                {...register("totalAmount", { valueAsNumber: true })}
              />

              {/* Payment Option */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3.5 border border-emerald-100 shadow-sm flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-2">
                    Payment Method
                  </h3>
                  <select
                    {...register("paymentMethod", {
                      required: "Select payment method",
                    })}
                    className={`w-full bg-emerald-50/30 border text-slate-800 rounded-md px-2.5 py-1.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                      errors.paymentMethod
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-emerald-500"
                    }`}
                  >
                    <option value="">Select Payment Option</option>
                    <option value="Cash">Cash Payment</option>
                    <option value="Online">Online Payment</option>
                  </select>
                  {errors.paymentMethod && (
                    <span className="text-[10px] text-red-500 mt-0.5 block">
                      {errors.paymentMethod.message}
                    </span>
                  )}
                </div>

                <div className="p-2 bg-emerald-50/80 rounded-md border border-emerald-200/60">
                  <p className="text-[11px] text-emerald-900 leading-snug">
                    <b>Online Payment:</b> Verification ke baad humari team
                    WhatsApp se payment instructions bhejegi.
                  </p>
                </div>
              </div>

              {/* Price Details Breakdown */}
              <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-lg p-3.5 shadow-sm flex flex-col justify-between">
                <h3 className="text-sm font-bold text-emerald-200 mb-2">
                  Price Summary
                </h3>

                <div className="space-y-1.5 text-emerald-100/80">
                  <div className="flex justify-between">
                    <span>Base Charge</span>
                    <span className="font-semibold text-white">
                      ₹ {baseAmount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-semibold text-white">
                      ₹ {deliveryCharge}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-800/80 mt-2 flex justify-between items-baseline">
                  <span className="font-semibold text-emerald-300 text-xs">
                    Total Payable
                  </span>
                  <span className="text-xl font-black text-emerald-400">
                    ₹ {amount}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg shadow-md shadow-emerald-600/20 transition-all active:scale-[0.99] text-sm cursor-pointer"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelfBooking;

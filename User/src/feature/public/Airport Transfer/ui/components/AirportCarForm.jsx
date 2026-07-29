import React from "react";
import { useForm } from "react-hook-form";

const AirportCarForm = ({ vehicle }) => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const bookingData = {
      ...data,

      vehicleId: vehicle?._id,

      vehicle: {
        brand: vehicle?.brand,
        model: vehicle?.model,
        classification: vehicle?.classification,
        fuel: vehicle?.fuel,
        transmission: vehicle?.transmission,
        seats: vehicle?.seats,
        image: vehicle?.image,
        price: vehicle?.pricePerDay,
      },
    };

    console.log(bookingData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl border">
      <h2 className="text-2xl font-bold mb-5">Airport Transfer Booking</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Trip Type */}

        <div>
          <label>Trip Type</label>

          <select
            className="input"
            {...register("tripType", { required: true })}
          >
            <option value="">Select</option>

            <option>Airport Pickup</option>

            <option>Airport Drop</option>

            <option>Round Trip</option>
          </select>
        </div>

        {/* Pickup */}

        <div>
          <label>Pickup Location</label>

          <input
            className="input"
            placeholder="Airport / Location"
            {...register("pickupLocation", { required: true })}
          />
        </div>

        {/* Drop */}

        <div>
          <label>Drop Location</label>

          <input
            className="input"
            placeholder="Hotel / Address"
            {...register("dropLocation", { required: true })}
          />
        </div>

        {/* Date */}

        <div>
          <label>Pickup Date</label>

          <input
            type="date"
            className="input"
            {...register("pickupDate", { required: true })}
          />
        </div>

        {/* Time */}

        <div>
          <label>Pickup Time</label>

          <input
            type="time"
            className="input"
            {...register("pickupTime", { required: true })}
          />
        </div>

        {/* AM PM */}

        <div>
          <label>Time Period</label>

          <select className="input" {...register("timePeriod")}>
            <option>AM</option>

            <option>PM</option>
          </select>
        </div>

        {/* Flight Details */}

        <div>
          <label>Airline Name</label>

          <input
            className="input"
            placeholder="Indigo"
            {...register("flightDetails.airlineName")}
          />
        </div>

        <div>
          <label>Flight Number</label>

          <input
            className="input"
            placeholder="6E123"
            {...register("flightDetails.flightNumber")}
          />
        </div>

        <div>
          <label>Arrival Time</label>

          <input
            className="input"
            placeholder="10:30 PM"
            {...register("flightDetails.arrivalTime")}
          />
        </div>

        {/* Customer */}

        <div>
          <label>Name</label>

          <input
            className="input"
            {...register("customer.name", { required: true })}
          />
        </div>

        <div>
          <label>Mobile</label>

          <input
            className="input"
            {...register("customer.mobile", { required: true })}
          />
        </div>

        <div>
          <label>Email</label>

          <input
            className="input"
            {...register("customer.email", { required: true })}
          />
        </div>

        <div>
          <label>Whatsapp</label>

          <input className="input" {...register("customer.whatsapp")} />
        </div>

        {/* Address */}

        <div className="md:col-span-2">
          <label>Current Address</label>

          <textarea
            className="input"
            {...register("address.currentAddress", { required: true })}
          />
        </div>

        <div>
          <label>City</label>

          <input
            className="input"
            {...register("address.city", { required: true })}
          />
        </div>

        <div>
          <label>State</label>

          <input
            className="input"
            {...register("address.state", { required: true })}
          />
        </div>

        <div>
          <label>Pin Code</label>

          <input
            className="input"
            {...register("address.pinCode", { required: true })}
          />
        </div>

        {/* Payment */}

        <div>
          <label>Payment Method</label>

          <select className="input" {...register("paymentMethod")}>
            <option>Cash</option>

            <option>Online</option>
          </select>
        </div>

        {/* Note */}

        <div className="md:col-span-2">
          <label>Note</label>

          <textarea
            className="input"
            placeholder="Any special request"
            {...register("note")}
          />
        </div>

        <button
          className="
md:col-span-2
bg-blue-600
text-white
py-3
rounded-xl
font-bold
"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default AirportCarForm;

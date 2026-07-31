import { FormProvider, useForm } from "react-hook-form";
// Sections

import BookingDuration from "./form/BookingDuration";
import EventDetails from "./form/EventDetails";
import DecorationSection from "./form/DecorationSection";
import DriverSection from "./form/DriverSection";
import DeliverySection from "./form/DeliverySection";
import CustomerSection from "./form/CustomerSection";
import AddressSection from "./form/AddressSection";
import NotesSection from "./form/NotesSection";
import CarSummary from "./form/CarSummary";

const WeddingBookingForm = () => {
  const methods = useForm({
    defaultValues: {
      bookingDuration: {
        bookingType: "One Day",
        totalDays: 1,
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        timePeriod: "AM",
      },

      eventDetails: {
        bookingFor: "Wedding",
        venueName: "",
        venueAddress: "",
        pickupLocation: "",
        dropLocation: "",
      },

      decoration: {
        decorationType: "",
      },

      driverRequired: "No",

      deliveryType: "Self Pickup",

      deliveryDetails: {
        address: "",
        city: "",
        pinCode: "",
      },

      customer: {
        name: "",
        mobile: "",
        email: "",
        whatsapp: "",
      },

      address: {
        currentAddress: "",
        city: "",
        state: "",
        pinCode: "",
      },

      note: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
      <CarSummary />

      <BookingDuration />

      <EventDetails />

      <DecorationSection />

      <DriverSection />

      <DeliverySection />

      <CustomerSection />

      <AddressSection />

      <NotesSection />

      <div className="flex justify-end gap-4 pt-6">
        <button
          type="button"
          className="px-6 py-3 rounded-lg border border-gray-300"
        >
          Back
        </button>

        <button
          type="submit"
          className="px-8 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Proceed To Payment
        </button>
      </div>
    </form>
  );
};

export default WeddingBookingForm;

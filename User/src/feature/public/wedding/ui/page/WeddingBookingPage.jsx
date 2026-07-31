import { useForm, FormProvider } from "react-hook-form";

import WeddingBookingForm from "../components/WeddingBookingForm";
import WeddingSummary from "../components/WeddingSummary";

const WeddingBookingPage = () => {
  const methods = useForm({
    defaultValues: {
      bookingDuration: {
        bookingType: "One Day",
        totalDays: 1,
      },

      eventDetails: {},

      customer: {},

      address: {},

      driverRequired: "No",

      deliveryType: "Self Pickup",
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            {/* <h1 className="text-3xl font-bold">Wedding Car Booking</h1>

            <p className="text-slate-500 mt-2">
              Complete the form below to reserve your wedding car.
            </p> */}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <WeddingBookingForm />
            </div>

            <div>
              <WeddingSummary />
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default WeddingBookingPage;

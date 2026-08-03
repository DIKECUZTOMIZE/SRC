import { useForm } from "react-hook-form";

const useAirportBooking = (vehicle) => {
  const methods = useForm({
    defaultValues: {
      serviceType: "pickup",
      tripType: "local",
      passengers: 1,
      bags: 0,
      paymentMethod: "cash",
    },
  });

  const serviceType = methods.watch("serviceType");
  const tripType = methods.watch("tripType");

  const onSubmit = async (data) => {
    const bookingData = {
      ...data,
      vehicleId: vehicle?._id,

      vehicle: {
        brand: vehicle?.brand,
        model: vehicle?.model,
        classification: vehicle?.classification,
        seats: vehicle?.seats,
        fuel: vehicle?.fuel,
        transmission: vehicle?.transmission,
        image: vehicle?.image,
      },
    };

    console.log(bookingData);
  };

  return {
    ...methods,          // ⭐ सबसे important
    serviceType,
    tripType,
    onSubmit,
  };
};

export default useAirportBooking;
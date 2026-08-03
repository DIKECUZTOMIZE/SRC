import { useForm } from "react-hook-form";

const useCarWithDriverBooking = (vehicle) => {
  const methods = useForm({
    defaultValues: {
      tripType: "local", // local | outstation

      pickupLocation: "",
      dropLocation: "",

      travelDate: "",
      travelTime: "",
      returnDate: "",
      returnTime: "",

      name: "",
      mobile: "",
      whatsapp: "",
      email: "",

      passengers: 1,

      fullAddress: "",
      landmark: "",
      state: "Assam",
      district: "",
      policeStation: "",
      pincode: "",

      paymentMethod: "cash",

      notes: "",
    },
  });

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

    // await carWithDriverBookingApi(bookingData);
  };

  return {
    ...methods,
    tripType,
    onSubmit,
  };
};

export default useCarWithDriverBooking;

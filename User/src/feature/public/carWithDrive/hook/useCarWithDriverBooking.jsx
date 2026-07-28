import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createDriverBooking } from "../api/driverBooking.api";

const useCarWithDriverBooking = () => {
  const location = useLocation();
  const car = location.state?.car;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const bookingMutation = useMutation({
    mutationFn: createDriverBooking,
  });

  const onSubmit = async (data) => {
    if (!car?._id) {
      console.log("Vehicle id missing");
      return;
    }
    const payload = {
      vehicleId: car._id,
      bookingType: data.bookingType,
      quantity: Number(data.quantity),

      tripType: data.tripType,

      pickupLocation: data.pickupLocation,
      destination: data.destination,

      pickupDate: data.pickupDate,
      pickupTime: data.pickupTime,
      timePeriod: data.timePeriod,

      customer: {
        name: data.customer.name,
        mobile: data.customer.mobile,
        email: data.customer.email,
        whatsapp: data.customer.whatsapp,
      },

      address: {
        currentAddress: data.address.currentAddress,
        state: data.address.state,
        city: data.address.city,
        policeStation: data.address.policeStation,
        pinCode: data.address.pinCode,
      },

      paymentMethod: data.paymentMethod,
    };
    console.log(payload.vehicleId);
    await bookingMutation.mutateAsync(payload);
  };

  return {
    car,
    register,
    handleSubmit,
    errors,
    onSubmit,
    bookingMutation,
  };
};

export default useCarWithDriverBooking;

/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { createSelfDriveBooking } from "../api/selfDriveApi";
import { useNavigate } from "react-router";

const useSelfDriveBooking = (car, onClose) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const bookingTypeValue = watch("bookingType");

  const quantity = Number(watch("quantity") || 0);

  const deliveryType = watch("deliveryType");

  // Distance from user input
  const distance = Number(watch("distance") || 0);

  // Base Price Calculation
  const baseAmount =
    bookingTypeValue === "day"
      ? Number(car.pricePerDay || 0) * quantity
      : bookingTypeValue === "hour"
        ? Number(car.pricePerHour || 0) * quantity
        : 0;

  // Delivery Charge Calculation
  const calculateDeliveryCharge = () => {
    // Self Pickup
    if (deliveryType !== "Drop") {
      return 0;
    }

    // 0-3 KM Free
    if (distance <= 3) {
      return 0;
    }

    // 3-5 KM
    if (distance <= 5) {
      return 300;
    }

    // 5-10 KM
    if (distance <= 10) {
      return 500;
    }

    // Above 10 KM
    return distance * 50;
  };

  const deliveryCharge = calculateDeliveryCharge();

  // Final Amount
  const amount = baseAmount + deliveryCharge;

  const onSubmit = async (data) => {
    try {
      const finalData = {
        // Vehicle
        vehicleId: String(car._id),

        serviceType: "Self Drive",

        name: `${car.brand} ${car.model}`,

        fuel: car.fuel,

        transmission: car.transmission,

        seats: String(car.seats),

        pricePerHour: Number(car.pricePerHour),

        pricePerDay: Number(car.pricePerDay),

        // Booking

        bookingType: data.bookingType,

        quantity: Number(data.quantity),

        pickupDate: data.pickupDate,

        pickupTime: data.timePeriod
          ? `${data.pickupTime} ${data.timePeriod}`
          : data.pickupTime,

        timePeriod: data.timePeriod,
        // Delivery
        deliveryType: data.deliveryType,

        deliveryAddress: data.deliveryAddress || "",

        distance: Number(data.distance || 0),

        // Customer
        customer: {
          name: data.customer.name,

          mobile: data.customer.mobile,

          email: data.customer.email,

          whatsapp: data.customer.whatsapp || "",

          currentAddress: data.customer.currentAddress,
        },

        // Address
        address: {
          state: data.address.state,

          city: data.address.city,

          policeStation: data.address.policeStation || "",

          pinCode: data.address.pinCode,
        },

        // Price
        baseAmount,

        deliveryCharge,

        totalAmount: amount,

        // Payment
        paymentMethod: data.paymentMethod,
      };
      console.log(finalData);
      const response = await createSelfDriveBooking(finalData);

      if (response?.success) {
        navigate(`/home/selfBooking/${response.data._id}`);
      }
    } catch (error) {
      console.log("Booking Error", error.response?.data || error);
    }
  };

  return {
    register,

    handleSubmit,

    watch,

    reset,

    onSubmit,

    bookingTypeValue,

    deliveryType,

    amount,

    baseAmount,

    deliveryCharge,
    errors,
  };
};

export default useSelfDriveBooking;

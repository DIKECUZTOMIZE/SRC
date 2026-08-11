import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";

// =========================================================
// CONFIG
// =========================================================

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_WEDDING_GOOGLE_SCRIPT_URL;

const ADMIN_WHATSAPP_NUMBER = import.meta.env.VITE_ADMIN_WHATSAPP_NUMBER || "";

// =========================================================
// DEFAULT VALUES
// Matches Wedding Booking Form fields exactly
// =========================================================

const DEFAULT_VALUES = {
  // DRIVER
  driverRequired: "no",
  driverDays: 1,

  // DELIVERY
  deliveryType: "pickup",
  deliveryAddress: "",
  deliveryKm: "0-3",

  // DRIVER TRIP
  pickupLocation: "",
  venue: "",

  // RENTAL
  rentalDays: 1,

  // EVENT
  eventDate: "",
  eventTime: "",
  eventPeriod: "AM",

  // WITHOUT DRIVER
  destination: "",

  // GENERAL NOTE
  note: "",

  // DECORATION
  decorationPrice: 0,
  decorationImages: "",
  decorationNote: "",

  // ADDRESS
  landmark: "",
  district: "",
  city: "",
  pincode: "",
  state: "assam",

  // CUSTOMER
  mobile: "",
  whatsapp: "",
  email: "",

  // PAYMENT
  paymentMethod: "cash",

  // FARE
  baseFare: 0,
  driverCharge: 0,
  decorationCharge: 0,
  deliveryCharge: 0,
  totalFare: 0,
};

// =========================================================
// DELIVERY CHARGES
// =========================================================

const getDeliveryCharge = (distance) => {
  switch (distance) {
    case "0-3":
      return 0;

    case "3-5":
      return 300;

    case "5-10":
      return 500;

    case "10+":
      return 1000;

    default:
      return 0;
  }
};

// =========================================================
// SAFE STRING
// =========================================================

const cleanString = (value) => {
  return String(value ?? "").trim();
};

// =========================================================
// SAFE NUMBER
// =========================================================

const cleanNumber = (value, fallback = 0) => {
  const number = Number(value);

  return Number.isFinite(number) ? number : fallback;
};

// =========================================================
// SAFE POSITIVE INTEGER
// =========================================================

const cleanPositiveInteger = (value, fallback = 1) => {
  const number = Math.floor(Number(value));

  if (!Number.isFinite(number) || number < 1) {
    return fallback;
  }

  return number;
};

// =========================================================
// HOOK
// =========================================================

const useWeddingBooking = (vehicle) => {
  const methods = useForm({
    shouldUnregister: true,
    defaultValues: DEFAULT_VALUES,
    mode: "onSubmit",
  });

  const { watch, resetField, clearErrors } = methods;

  // =======================================================
  // WATCH
  // =======================================================

  const driverRequired = watch("driverRequired");
  const deliveryType = watch("deliveryType");
  const eventPeriod = watch("eventPeriod");
  const rentalDays = watch("rentalDays");
  const driverDays = watch("driverDays");
  const deliveryKm = watch("deliveryKm");
  const decorationPrice = watch("decorationPrice");

  // =======================================================
  // SUBMIT LOCK
  // =======================================================

  const submittingRef = useRef(false);

  // =======================================================
  // VEHICLE NORMALIZATION
  // =======================================================

  const vehicleData = useMemo(() => {
    return {
      id: cleanString(vehicle?._id),

      brand: cleanString(vehicle?.brand),

      model: cleanString(vehicle?.model),

      classification: cleanString(vehicle?.classification),

      seats: cleanNumber(vehicle?.seats, 0),

      fuel: cleanString(vehicle?.fuel),

      transmission: cleanString(vehicle?.transmission),

      image: cleanString(vehicle?.image),

      pricePerDay: cleanNumber(vehicle?.pricePerDay, 0),

      driverChargePerDay: cleanNumber(vehicle?.driverChargePerDay, 0),

      decorationType: cleanString(vehicle?.decorationType),

      decorationName: cleanString(vehicle?.decorationName),

      decorationPrice: cleanNumber(vehicle?.decorationPrice, 0),
    };
  }, [vehicle]);

  // =======================================================
  // CLEAR STALE DRIVER DATA
  // =======================================================

  useEffect(() => {
    if (driverRequired === "no") {
      resetField("driverDays", {
        defaultValue: 1,
      });

      resetField("pickupLocation", {
        defaultValue: "",
      });

      resetField("venue", {
        defaultValue: "",
      });

      clearErrors(["driverDays", "pickupLocation", "venue"]);
    }

    if (driverRequired === "yes") {
      clearErrors(["driverDays", "pickupLocation", "venue"]);
    }
  }, [driverRequired, resetField, clearErrors]);

  // =======================================================
  // CLEAR STALE DELIVERY DATA
  // Delivery is relevant only without driver
  // =======================================================

  useEffect(() => {
    if (driverRequired === "yes" || deliveryType === "pickup") {
      resetField("deliveryAddress", {
        defaultValue: "",
      });

      resetField("deliveryKm", {
        defaultValue: "0-3",
      });

      clearErrors(["deliveryAddress", "deliveryKm"]);
    }
  }, [driverRequired, deliveryType, resetField, clearErrors]);

  // =======================================================
  // CLEAR WITHOUT-DRIVER DESTINATION
  // =======================================================

  useEffect(() => {
    if (driverRequired === "yes") {
      resetField("destination", {
        defaultValue: "",
      });

      clearErrors("destination");
    }
  }, [driverRequired, resetField, clearErrors]);

  // =======================================================
  // FARE CALCULATION
  // Same calculation logic as PriceSummaryCard
  // =======================================================

  const calculateFare = (data) => {
    const days = cleanPositiveInteger(data.rentalDays, 1);

    const driverRequiredValue = data.driverRequired === "yes";

    const selectedDriverDays = driverRequiredValue
      ? cleanPositiveInteger(data.driverDays, 1)
      : 0;

    const selectedDecorationPrice = cleanNumber(data.decorationPrice, 0);

    // -----------------------------------------------
    // BASE CAR FARE
    // -----------------------------------------------

    const baseFare = vehicleData.pricePerDay * days;

    // -----------------------------------------------
    // DRIVER
    // -----------------------------------------------

    const driverCharge = driverRequiredValue
      ? vehicleData.driverChargePerDay * selectedDriverDays
      : 0;

    // -----------------------------------------------
    // DECORATION
    // -----------------------------------------------

    const decorationCharge = selectedDecorationPrice;

    // -----------------------------------------------
    // DELIVERY
    // -----------------------------------------------

    const selectedDeliveryType = driverRequiredValue
      ? "pickup"
      : data.deliveryType === "delivery"
        ? "delivery"
        : "pickup";

    const selectedDeliveryKm =
      selectedDeliveryType === "delivery"
        ? cleanString(data.deliveryKm) || "0-3"
        : "";

    const deliveryCharge =
      selectedDeliveryType === "delivery"
        ? getDeliveryCharge(selectedDeliveryKm)
        : 0;

    // -----------------------------------------------
    // TOTAL
    // -----------------------------------------------

    const totalFare =
      baseFare + driverCharge + decorationCharge + deliveryCharge;

    return {
      days,
      driverDays: selectedDriverDays,
      baseFare,
      driverCharge,
      decorationCharge,
      deliveryCharge,
      totalFare,
      deliveryType: selectedDeliveryType,
      deliveryKm: selectedDeliveryKm,
    };
  };

  // =======================================================
  // SUBMIT
  // =======================================================

  const onSubmit = async (data) => {
    if (submittingRef.current) {
      throw new Error("Booking is already being submitted.");
    }

    submittingRef.current = true;

    try {
      // =================================================
      // CONFIG VALIDATION
      // =================================================

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Wedding Google Script URL is missing.");
      }

      if (!ADMIN_WHATSAPP_NUMBER) {
        throw new Error("Admin WhatsApp number is missing.");
      }

      // =================================================
      // VEHICLE VALIDATION
      // =================================================

      if (!vehicleData.id) {
        throw new Error("Wedding vehicle information is missing.");
      }

      // =================================================
      // CUSTOMER
      // =================================================

      const mobile = cleanString(data.mobile);

      if (!mobile) {
        throw new Error("Mobile number is required.");
      }

      // =================================================
      // EVENT
      // =================================================

      const eventDate = cleanString(data.eventDate);

      const eventTime = cleanString(data.eventTime);

      const selectedEventPeriod = data.eventPeriod === "PM" ? "PM" : "AM";

      if (!eventDate) {
        throw new Error("Wedding date is required.");
      }

      if (!eventTime) {
        throw new Error("Event time is required.");
      }

      // =================================================
      // ADDRESS
      // =================================================

      const district = cleanString(data.district);

      const city = cleanString(data.city);

      const pincode = cleanString(data.pincode);

      if (!district) {
        throw new Error("District is required.");
      }

      if (!city) {
        throw new Error("City is required.");
      }

      if (!pincode) {
        throw new Error("PIN code is required.");
      }

      // =================================================
      // DRIVER
      // =================================================

      const currentDriverRequired =
        data.driverRequired === "yes" ? "yes" : "no";

      const currentDriverDays =
        currentDriverRequired === "yes"
          ? cleanPositiveInteger(data.driverDays, 1)
          : 0;

      let pickupLocation = "";
      let venue = "";
      let destination = "";

      if (currentDriverRequired === "yes") {
        pickupLocation = cleanString(data.pickupLocation);

        venue = cleanString(data.venue);

        if (!pickupLocation) {
          throw new Error(
            "Pickup location is required when driver is selected.",
          );
        }

        if (!venue) {
          throw new Error("Wedding venue is required when driver is selected.");
        }
      } else {
        destination = cleanString(data.destination);

        if (!destination) {
          throw new Error(
            "Destination is required when booking without driver.",
          );
        }
      }

      // =================================================
      // DELIVERY
      // =================================================

      const fare = calculateFare(data);

      const deliveryAddress =
        fare.deliveryType === "delivery"
          ? cleanString(data.deliveryAddress)
          : "";

      if (fare.deliveryType === "delivery" && !deliveryAddress) {
        throw new Error("Delivery address is required.");
      }

      // =================================================
      // DECORATION
      // =================================================

      const selectedDecorationPrice = cleanNumber(data.decorationPrice, 0);

      const decorationNote = cleanString(data.decorationNote);

      const decorationImages = data.decorationImages || "";

      // =================================================
      // FINAL BOOKING OBJECT
      // =================================================

      const bookingData = {
        // ---------------------------------------------
        // TYPE
        // ---------------------------------------------

        bookingType: "wedding",

        // ---------------------------------------------
        // DRIVER
        // ---------------------------------------------

        driverRequired: currentDriverRequired,

        driverDays: currentDriverDays,

        // ---------------------------------------------
        // RENTAL
        // ---------------------------------------------

        rentalDays: fare.days,

        // ---------------------------------------------
        // DRIVER TRIP
        // ---------------------------------------------

        pickupLocation,

        venue,

        // ---------------------------------------------
        // DELIVERY
        // ---------------------------------------------

        deliveryType: fare.deliveryType,

        deliveryAddress,

        deliveryKm: fare.deliveryKm,

        // ---------------------------------------------
        // EVENT
        // ---------------------------------------------

        eventDate,
        eventTime,
        eventPeriod: selectedEventPeriod,
        destination,

        // ---------------------------------------------
        // NOTES
        // ---------------------------------------------

        note: cleanString(data.note),

        // ---------------------------------------------
        // DECORATION
        // ---------------------------------------------

        decorationPrice: selectedDecorationPrice,

        decorationImages,

        decorationNote,

        // ---------------------------------------------
        // ADDRESS
        // ---------------------------------------------

        landmark: cleanString(data.landmark),

        district,

        city,

        pincode,

        state: cleanString(data.state) || "assam",

        // ---------------------------------------------
        // CUSTOMER
        // ---------------------------------------------

        mobile,

        whatsapp: cleanString(data.whatsapp),

        email: cleanString(data.email),

        // ---------------------------------------------
        // VEHICLE
        // ---------------------------------------------

        vehicleId: vehicleData.id,

        vehicle: vehicleData,

        // ---------------------------------------------
        // PAYMENT
        // ---------------------------------------------

        paymentMethod: cleanString(data.paymentMethod) || "cash",

        // ---------------------------------------------
        // FARE
        // ---------------------------------------------

        baseFare: fare.baseFare,

        driverCharge: fare.driverCharge,

        decorationCharge: fare.decorationCharge,

        deliveryCharge: fare.deliveryCharge,

        totalFare: fare.totalFare,
      };

      // =================================================
      // DEBUG
      // =================================================

      console.log("FINAL WEDDING BOOKING:", bookingData);

      // =================================================
      // GOOGLE APPS SCRIPT
      // =================================================

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",

        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },

        body: JSON.stringify(bookingData),
      });

      // =================================================
      // HTTP VALIDATION
      // =================================================

      if (!response.ok) {
        throw new Error(`Booking server error: ${response.status}`);
      }

      // =================================================
      // RESPONSE
      // =================================================

      const rawResponse = await response.text();

      let result;

      try {
        result = JSON.parse(rawResponse);
      } catch {
        console.error("Wedding Apps Script returned:", rawResponse);

        throw new Error(
          "Invalid response received from Wedding booking server.",
        );
      }

      // =================================================
      // SERVER VALIDATION
      // =================================================

      if (!result?.success) {
        throw new Error(
          result?.message || "Wedding booking could not be saved.",
        );
      }

      if (!result?.bookingId) {
        throw new Error("Booking was saved but Booking ID was not returned.");
      }

      console.log("Wedding booking saved:", result.bookingId);

      // =================================================
      // WHATSAPP LOCATION
      // =================================================

      let tripText = "";

      if (currentDriverRequired === "yes") {
        tripText = [
          "Driver: With Driver",
          `Driver Days: ${currentDriverDays}`,
          `Pickup Location: ${pickupLocation || "-"}`,
          `Wedding Venue: ${venue || "-"}`,
        ].join("\n");
      } else {
        tripText = [
          "Driver: Without Driver",
          `Destination: ${destination || "-"}`,
          `Pickup / Delivery: ${fare.deliveryType}`,
          fare.deliveryType === "delivery"
            ? `Delivery Address: ${deliveryAddress || "-"}`
            : "",
          fare.deliveryType === "delivery"
            ? `Delivery Distance: ${fare.deliveryKm} KM`
            : "",
        ]
          .filter(Boolean)
          .join("\n");
      }

      // =================================================
      // WHATSAPP MESSAGE
      // =================================================

      const whatsappMessage = `
💍 NEW WEDDING CAR BOOKING

━━━━━━━━━━━━━━━━━━
🆔 BOOKING
━━━━━━━━━━━━━━━━━━
Booking ID: ${result.bookingId}

━━━━━━━━━━━━━━━━━━
👤 CUSTOMER
━━━━━━━━━━━━━━━━━━
Mobile: ${bookingData.mobile}
WhatsApp: ${bookingData.whatsapp || "-"}
Email: ${bookingData.email || "-"}

━━━━━━━━━━━━━━━━━━
💍 WEDDING DETAILS
━━━━━━━━━━━━━━━━━━
Wedding Date: ${bookingData.eventDate}
Event Time: ${bookingData.eventTime} ${bookingData.eventPeriod}
Car Required: ${bookingData.rentalDays} Day${
        bookingData.rentalDays > 1 ? "s" : ""
      }
${tripText}

━━━━━━━━━━━━━━━━━━
🚘 VEHICLE
━━━━━━━━━━━━━━━━━━
Brand: ${bookingData.vehicle.brand || "-"}
Model: ${bookingData.vehicle.model || "-"}
Class: ${bookingData.vehicle.classification || "-"}
Seats: ${bookingData.vehicle.seats || 0}
Fuel: ${bookingData.vehicle.fuel || "-"}
Transmission: ${bookingData.vehicle.transmission || "-"}

━━━━━━━━━━━━━━━━━━
🌸 DECORATION
━━━━━━━━━━━━━━━━━━
Decoration: ₹${bookingData.decorationPrice}
Special Requirement: ${bookingData.decorationNote || "-"}

━━━━━━━━━━━━━━━━━━
📍 ADDRESS
━━━━━━━━━━━━━━━━━━
Landmark: ${bookingData.landmark || "-"}
District: ${bookingData.district || "-"}
City: ${bookingData.city || "-"}
PIN Code: ${bookingData.pincode || "-"}
State: ${bookingData.state}

━━━━━━━━━━━━━━━━━━
💰 FARE
━━━━━━━━━━━━━━━━━━
Car Fare: ₹${bookingData.baseFare}
Driver Charge: ₹${bookingData.driverCharge}
Decoration: ₹${bookingData.decorationCharge}
Delivery: ₹${bookingData.deliveryCharge}
Total Fare: ₹${bookingData.totalFare}

━━━━━━━━━━━━━━━━━━
💳 PAYMENT
━━━━━━━━━━━━━━━━━━
Payment: ${bookingData.paymentMethod}

━━━━━━━━━━━━━━━━━━
📝 NOTES
━━━━━━━━━━━━━━━━━━
${bookingData.note || "-"}

━━━━━━━━━━━━━━━━━━
📌 STATUS
━━━━━━━━━━━━━━━━━━
Pending
      `.trim();

      // =================================================
      // WHATSAPP NUMBER
      // =================================================

      const adminNumber = String(ADMIN_WHATSAPP_NUMBER).replace(/\D/g, "");

      if (!adminNumber) {
        throw new Error("Invalid admin WhatsApp number.");
      }

      // =================================================
      // WHATSAPP URL
      // =================================================

      const whatsappUrl =
        `https://wa.me/${adminNumber}?text=` +
        encodeURIComponent(whatsappMessage);

      // =================================================
      // OPEN WHATSAPP
      // ONLY AFTER SHEET SUCCESS
      // =================================================

      window.location.href = whatsappUrl;

      return result;
    } catch (error) {
      console.error("Wedding booking error:", error);

      throw error;
    } finally {
      submittingRef.current = false;
    }
  };

  // =======================================================
  // RETURN
  // =======================================================

  return {
    ...methods,

    driverRequired,
    deliveryType,

    rentalDays,
    driverDays,

    deliveryKm,
    decorationPrice,

    eventPeriod,

    calculateFare,

    onSubmit,
  };
};

export default useWeddingBooking;

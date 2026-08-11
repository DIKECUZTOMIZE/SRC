import { useEffect } from "react";
import { useForm } from "react-hook-form";

// =========================================================
// CONFIG
// =========================================================

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_SELF_DRIVE_GOOGLE_SCRIPT_URL;

const ADMIN_WHATSAPP_NUMBER = import.meta.env.VITE_ADMIN_WHATSAPP_NUMBER || "";

// =========================================================
// DEFAULT VALUES
// =========================================================

const DEFAULT_VALUES = {
  // RENTAL
  serviceType: "hourly",
  hours: 1,
  days: 1,

  // PICKUP / DELIVERY
  deliveryType: "pickup",
  deliveryAddress: "",
  deliveryKm: "0-3",

  // TRIP
  pickupDate: "",
  pickupTime: "",
  pickupPeriod: "AM",
  destination: "",

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

  // NOTES
  notes: "",

  // PAYMENT
  paymentMethod: "cash",

  // FARE
  baseFare: 0,
  deliveryCharge: 0,
  totalFare: 0,
};

// =========================================================
// DELIVERY CHARGE
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
// HOOK
// =========================================================

const useSelfDriveBooking = (vehicle) => {
  const methods = useForm({
    shouldUnregister: true,
    defaultValues: DEFAULT_VALUES,
  });

  const { watch, resetField, clearErrors } = methods;

  const serviceType = watch("serviceType");
  const deliveryType = watch("deliveryType");

  const hours = watch("hours");
  const days = watch("days");
  const deliveryKm = watch("deliveryKm");

  // =======================================================
  // CLEAR STALE DELIVERY DATA
  // =======================================================

  useEffect(() => {
    if (deliveryType === "pickup") {
      resetField("deliveryAddress", {
        defaultValue: "",
      });

      resetField("deliveryKm", {
        defaultValue: "0-3",
      });

      clearErrors(["deliveryAddress", "deliveryKm"]);
    }

    if (deliveryType === "delivery") {
      clearErrors(["deliveryAddress", "deliveryKm"]);
    }
  }, [deliveryType, resetField, clearErrors]);

  // =======================================================
  // SUBMIT
  // =======================================================

  const onSubmit = async (data) => {
    try {
      // ===================================================
      // CONFIG VALIDATION
      // ===================================================

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Self Drive Google Script URL is missing.");
      }

      if (!ADMIN_WHATSAPP_NUMBER) {
        throw new Error("Admin WhatsApp number is missing.");
      }

      // ===================================================
      // SERVICE TYPE
      // ===================================================

      const currentService = data.serviceType === "daily" ? "daily" : "hourly";

      // ===================================================
      // RENTAL DURATION
      // ===================================================

      const rentalHours =
        currentService === "hourly"
          ? Math.max(1, cleanNumber(data.hours, 1))
          : 0;

      const rentalDays =
        currentService === "daily" ? Math.max(1, cleanNumber(data.days, 1)) : 0;

      // ===================================================
      // DELIVERY
      // ===================================================

      const currentDeliveryType =
        data.deliveryType === "delivery" ? "delivery" : "pickup";

      let deliveryAddress = "";
      let selectedDeliveryKm = "0-3";
      let deliveryCharge = 0;

      if (currentDeliveryType === "delivery") {
        deliveryAddress = cleanString(data.deliveryAddress);

        selectedDeliveryKm = cleanString(data.deliveryKm) || "0-3";

        deliveryCharge = getDeliveryCharge(selectedDeliveryKm);
      }

      // ===================================================
      // VEHICLE DATA
      // ===================================================

      const vehicleData = {
        id: cleanString(vehicle?._id),

        brand: cleanString(vehicle?.brand),

        model: cleanString(vehicle?.model),

        classification: cleanString(vehicle?.classification),

        seats: cleanNumber(vehicle?.seats, 0),

        fuel: cleanString(vehicle?.fuel),

        transmission: cleanString(vehicle?.transmission),

        image: cleanString(vehicle?.image),

        pricePerHour: cleanNumber(vehicle?.pricePerHour, 0),

        pricePerDay: cleanNumber(vehicle?.pricePerDay, 0),
      };

      // ===================================================
      // VEHICLE VALIDATION
      // ===================================================

      if (!vehicleData.id) {
        throw new Error("Vehicle information is missing.");
      }

      // ===================================================
      // BASE FARE
      // ===================================================

      let baseFare = 0;

      if (currentService === "hourly") {
        baseFare = vehicleData.pricePerHour * rentalHours;
      }

      if (currentService === "daily") {
        baseFare = vehicleData.pricePerDay * rentalDays;
      }

      // ===================================================
      // FINAL TOTAL
      // ===================================================

      const totalFare = baseFare + deliveryCharge;

      // ===================================================
      // FINAL BOOKING OBJECT
      // ===================================================

      const bookingData = {
        // -----------------------------------------------
        // BOOKING TYPE
        // -----------------------------------------------

        bookingType: "selfDrive",

        serviceType: currentService,

        // -----------------------------------------------
        // RENTAL
        // -----------------------------------------------

        hours: rentalHours,

        days: rentalDays,

        // -----------------------------------------------
        // PICKUP / DELIVERY
        // -----------------------------------------------

        deliveryType: currentDeliveryType,

        deliveryAddress,

        deliveryKm:
          currentDeliveryType === "delivery" ? selectedDeliveryKm : "",

        // -----------------------------------------------
        // TRIP
        // -----------------------------------------------

        pickupDate: cleanString(data.pickupDate),

        pickupTime: cleanString(data.pickupTime),

        pickupPeriod: cleanString(data.pickupPeriod) || "AM",

        destination: cleanString(data.destination),

        // -----------------------------------------------
        // ADDRESS
        // -----------------------------------------------

        landmark: cleanString(data.landmark),

        district: cleanString(data.district),

        city: cleanString(data.city),

        pincode: cleanString(data.pincode),

        state: cleanString(data.state) || "assam",

        // -----------------------------------------------
        // CUSTOMER
        // -----------------------------------------------

        mobile: cleanString(data.mobile),

        whatsapp: cleanString(data.whatsapp),

        email: cleanString(data.email),

        // -----------------------------------------------
        // NOTES
        // -----------------------------------------------

        notes: cleanString(data.notes),

        // -----------------------------------------------
        // VEHICLE
        // -----------------------------------------------

        vehicleId: vehicleData.id,

        vehicle: vehicleData,

        // -----------------------------------------------
        // PAYMENT
        // -----------------------------------------------

        paymentMethod: cleanString(data.paymentMethod) || "cash",

        // -----------------------------------------------
        // FARE
        // -----------------------------------------------

        baseFare,

        deliveryCharge,

        totalFare,
      };

      // ===================================================
      // DEBUG
      // ===================================================

      console.log("FINAL SELF DRIVE BOOKING:", bookingData);

      // ===================================================
      // GOOGLE SHEET
      // ===================================================

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",

        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },

        body: JSON.stringify(bookingData),
      });

      // ===================================================
      // SERVER RESPONSE
      // ===================================================

      if (!response.ok) {
        throw new Error(`Booking server error: ${response.status}`);
      }

      // ===================================================
      // PARSE RESPONSE
      // ===================================================

      const result = await response.json();

      // ===================================================
      // RESPONSE VALIDATION
      // ===================================================

      if (!result?.success) {
        throw new Error(
          result?.message || "Self Drive booking could not be saved.",
        );
      }

      if (!result?.bookingId) {
        throw new Error("Booking was saved but Booking ID was not returned.");
      }

      console.log("Self Drive booking saved:", result.bookingId);

      // ===================================================
      // RENTAL TEXT
      // ===================================================

      const rentalText =
        currentService === "hourly"
          ? `Hourly Rental: ${rentalHours} Hour${rentalHours > 1 ? "s" : ""}`
          : `Daily Rental: ${rentalDays} Day${rentalDays > 1 ? "s" : ""}`;

      // ===================================================
      // DELIVERY TEXT
      // ===================================================

      const deliveryText =
        currentDeliveryType === "delivery"
          ? [
              "Type: Delivery",
              `Address: ${deliveryAddress || "-"}`,
              `Distance: ${selectedDeliveryKm} KM`,
              `Delivery Charge: ₹${deliveryCharge}`,
            ].join("\n")
          : "Type: Customer Pickup";

      // ===================================================
      // WHATSAPP MESSAGE
      // ===================================================

      const whatsappMessage = `
🚗 NEW SELF DRIVE BOOKING

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
🚘 RENTAL DETAILS
━━━━━━━━━━━━━━━━━━
Rental Type: ${currentService === "hourly" ? "Hourly Rental" : "Daily Rental"}

${rentalText}

Pickup Date: ${bookingData.pickupDate}
Pickup Time: ${bookingData.pickupTime} ${bookingData.pickupPeriod}

Destination: ${bookingData.destination || "-"}

━━━━━━━━━━━━━━━━━━
📦 PICKUP / DELIVERY
━━━━━━━━━━━━━━━━━━
${deliveryText}

━━━━━━━━━━━━━━━━━━
📍 ADDRESS
━━━━━━━━━━━━━━━━━━
Landmark: ${bookingData.landmark || "-"}
District: ${bookingData.district || "-"}
City: ${bookingData.city || "-"}
PIN Code: ${bookingData.pincode || "-"}
State: ${bookingData.state}

━━━━━━━━━━━━━━━━━━
🚗 VEHICLE
━━━━━━━━━━━━━━━━━━
Brand: ${bookingData.vehicle.brand || "-"}
Model: ${bookingData.vehicle.model || "-"}
Class: ${bookingData.vehicle.classification || "-"}
Seats: ${bookingData.vehicle.seats || 0}
Fuel: ${bookingData.vehicle.fuel || "-"}
Transmission: ${bookingData.vehicle.transmission || "-"}

━━━━━━━━━━━━━━━━━━
💰 FARE
━━━━━━━━━━━━━━━━━━
Base Fare: ₹${bookingData.baseFare}
Delivery Charge: ₹${bookingData.deliveryCharge}
Total Fare: ₹${bookingData.totalFare}

━━━━━━━━━━━━━━━━━━
💳 PAYMENT
━━━━━━━━━━━━━━━━━━
Payment: ${bookingData.paymentMethod}

━━━━━━━━━━━━━━━━━━
📝 NOTES
━━━━━━━━━━━━━━━━━━
${bookingData.notes || "-"}

━━━━━━━━━━━━━━━━━━
📌 STATUS
━━━━━━━━━━━━━━━━━━
Pending
`.trim();

      // ===================================================
      // ADMIN WHATSAPP
      // ===================================================

      const adminNumber = String(ADMIN_WHATSAPP_NUMBER).replace(/\D/g, "");

      if (!adminNumber) {
        throw new Error("Invalid admin WhatsApp number.");
      }

      // ===================================================
      // WHATSAPP URL
      // ===================================================

      const whatsappUrl =
        `https://wa.me/${adminNumber}?text=` +
        encodeURIComponent(whatsappMessage);

      // ===================================================
      // OPEN WHATSAPP
      // ONLY AFTER SHEET SUCCESS
      // ===================================================

      window.location.href = whatsappUrl;

      return result;
    } catch (error) {
      console.error("Self Drive booking error:", error);

      throw error;
    }
  };

  // =======================================================
  // RETURN
  // =======================================================

  return {
    ...methods,

    serviceType,

    deliveryType,

    hours,

    days,

    deliveryKm,

    onSubmit,
  };
};

export default useSelfDriveBooking;

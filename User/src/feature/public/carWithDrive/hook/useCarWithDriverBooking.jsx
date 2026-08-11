import { useForm } from "react-hook-form";

const GOOGLE_SCRIPT_URL = import.meta.env
  .VITE_CAR_WITH_DRIVER_GOOGLE_SCRIPT_URL;

const ADMIN_WHATSAPP_NUMBER = import.meta.env.VITE_ADMIN_WHATSAPP_NUMBER || "";

// =========================================================
// DEFAULT VALUES
// =========================================================

const DEFAULT_VALUES = {
  // RENTAL
  serviceType: "hourly",
  hours: 1,
  days: 1,

  // PICKUP
  pickupDate: "",
  pickupTime: "",
  pickupPeriod: "AM",

  pickupLocation: "",
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
  totalFare: 0,
};

// =========================================================
// HOOK
// =========================================================

const useCarWithDriverBooking = (vehicle) => {
  const methods = useForm({
    shouldUnregister: true,
    defaultValues: DEFAULT_VALUES,
  });

  const { watch } = methods;

  const serviceType = watch("serviceType");
  const hours = watch("hours");
  const days = watch("days");

  // =======================================================
  // SUBMIT
  // =======================================================

  const onSubmit = async (data) => {
    try {
      // ===================================================
      // CONFIG VALIDATION
      // ===================================================

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Car With Driver Google Script URL is missing.");
      }

      if (!ADMIN_WHATSAPP_NUMBER) {
        throw new Error("Admin WhatsApp number is missing.");
      }

      // ===================================================
      // NORMALIZE SERVICE TYPE
      // ===================================================

      const currentService = data.serviceType || "hourly";

      // ===================================================
      // RENTAL DURATION
      // ===================================================

      const rentalHours =
        currentService === "hourly" ? Number(data.hours || 1) : 0;

      const rentalDays =
        currentService === "daily" ? Number(data.days || 1) : 0;

      // ===================================================
      // VEHICLE DATA
      // ===================================================

      const vehicleData = {
        id: vehicle?._id || "",
        brand: vehicle?.brand || "",
        model: vehicle?.model || "",
        classification: vehicle?.classification || "",
        seats: Number(vehicle?.seats || 0),
        fuel: vehicle?.fuel || "",
        transmission: vehicle?.transmission || "",
        image: vehicle?.image || "",

        pricePerHour: Number(vehicle?.pricePerHour || 0),
        pricePerDay: Number(vehicle?.pricePerDay || 0),
        driverChargePerDay: Number(vehicle?.driverChargePerDay || 0),
      };

      // ===================================================
      // FARE CALCULATION
      //
      // Same logic as PriceSummaryCard
      // ===================================================

      let baseFare = 0;

      if (currentService === "hourly") {
        baseFare = vehicleData.pricePerHour * rentalHours;
      }

      if (currentService === "daily") {
        baseFare = vehicleData.pricePerDay * rentalDays;
      }

      // Fixed driver charge
      const driverCharge = vehicleData.driverChargePerDay;

      const totalFare = baseFare + driverCharge;

      // ===================================================
      // FINAL BOOKING OBJECT
      // ===================================================

      const bookingData = {
        // RENTAL
        serviceType: currentService,

        hours: rentalHours,

        days: rentalDays,

        // PICKUP
        pickupDate: String(data.pickupDate || "").trim(),

        pickupTime: String(data.pickupTime || "").trim(),

        pickupPeriod: String(data.pickupPeriod || "AM").trim(),

        pickupLocation: String(data.pickupLocation || "").trim(),

        destination: String(data.destination || "").trim(),

        // ADDRESS
        landmark: String(data.landmark || "").trim(),

        district: String(data.district || "").trim(),

        city: String(data.city || "").trim(),

        pincode: String(data.pincode || "").trim(),

        state: String(data.state || "assam").trim(),

        // CUSTOMER
        mobile: String(data.mobile || "").trim(),

        whatsapp: String(data.whatsapp || "").trim(),

        email: String(data.email || "").trim(),

        // NOTES
        notes: String(data.notes || "").trim(),

        // VEHICLE
        vehicleId: vehicleData.id,

        vehicle: vehicleData,

        // PAYMENT
        paymentMethod: String(data.paymentMethod || "cash").trim(),

        // FARE
        baseFare,

        driverCharge,

        totalFare,
      };

      // ===================================================
      // DEBUG
      // ===================================================

      console.log("FINAL CAR WITH DRIVER BOOKING:", bookingData);

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

      if (!response.ok) {
        throw new Error(`Booking server error: ${response.status}`);
      }

      const result = await response.json();

      // ===================================================
      // RESPONSE VALIDATION
      // ===================================================

      if (!result?.success) {
        throw new Error(result?.message || "Booking could not be saved.");
      }

      if (!result?.bookingId) {
        throw new Error("Booking was saved but Booking ID was not returned.");
      }

      console.log("Car With Driver booking saved:", result.bookingId);

      // ===================================================
      // WHATSAPP MESSAGE
      // ===================================================

      const rentalText =
        currentService === "hourly"
          ? `Hourly Rental: ${rentalHours} Hour${rentalHours > 1 ? "s" : ""}`
          : `Daily Rental: ${rentalDays} Day${rentalDays > 1 ? "s" : ""}`;

      const whatsappMessage = `
🚘 NEW CAR WITH DRIVER BOOKING

━━━━━━━━━━━━━━━━━━
🆔 BOOKING
━━━━━━━━━━━━━━━━━━
Booking ID: ${result.bookingId}

━━━━━━━━━━━━━━━━━━
👤 CUSTOMER
━━━━━━━━━━━━━━━━━━
Mobile: ${bookingData.mobile}
WhatsApp: ${bookingData.whatsapp}
Email: ${bookingData.email || "-"}

━━━━━━━━━━━━━━━━━━
🚘 RENTAL DETAILS
━━━━━━━━━━━━━━━━━━
Rental Type: ${currentService === "hourly" ? "Hourly Rental" : "Daily Rental"}
${rentalText}

Pickup Date: ${bookingData.pickupDate}
Pickup Time: ${bookingData.pickupTime} ${bookingData.pickupPeriod}

Pickup Location: ${bookingData.pickupLocation}
Destination: ${bookingData.destination}

━━━━━━━━━━━━━━━━━━
📍 ADDRESS
━━━━━━━━━━━━━━━━━━
Landmark: ${bookingData.landmark || "-"}
District: ${bookingData.district}
City: ${bookingData.city}
PIN Code: ${bookingData.pincode}
State: ${bookingData.state}

━━━━━━━━━━━━━━━━━━
🚗 VEHICLE
━━━━━━━━━━━━━━━━━━
Brand: ${bookingData.vehicle.brand}
Model: ${bookingData.vehicle.model}
Class: ${bookingData.vehicle.classification}
Seats: ${bookingData.vehicle.seats}
Fuel: ${bookingData.vehicle.fuel}
Transmission: ${bookingData.vehicle.transmission}

━━━━━━━━━━━━━━━━━━
💰 FARE
━━━━━━━━━━━━━━━━━━
Car Rental: ₹${bookingData.baseFare}
Driver Charge: ₹${bookingData.driverCharge}
Final Total: ₹${bookingData.totalFare}

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
      // ADMIN WHATSAPP NUMBER
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
      console.error("Car With Driver booking error:", error);

      throw error;
    }
  };

  // =======================================================
  // RETURN
  // =======================================================

  return {
    ...methods,
    serviceType,
    hours,
    days,
    onSubmit,
  };
};

export default useCarWithDriverBooking;

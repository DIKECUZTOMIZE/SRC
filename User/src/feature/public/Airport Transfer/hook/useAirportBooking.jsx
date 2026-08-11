import { useEffect } from "react";
import { useForm } from "react-hook-form";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const ADMIN_WHATSAPP_NUMBER = import.meta.env.VITE_ADMIN_WHATSAPP_NUMBER || "";

const DEFAULT_VALUES = {
  serviceType: "pickup",
  tripType: "local",

  airport: "",
  pickupLocation: "",
  dropLocation: "",
  returnDropLocation: "",

  travelDate: "",
  travelTime: "",
  travelPeriod: "AM",

  passengers: 1,
  bags: 0,

  paymentMethod: "cash",

  totalFare: 0,

  customer: {
    name: "",
    mobile: "",
    whatsapp: "",
    email: "",
  },
};

const useAirportBooking = (vehicle) => {
  const methods = useForm({
    shouldUnregister: true,
    defaultValues: DEFAULT_VALUES,
  });

  const { watch, resetField, clearErrors } = methods;

  const serviceType = watch("serviceType");
  const tripType = watch("tripType");

  // =========================================================
  // CLEAR STALE LOCATION DATA WHEN SERVICE CHANGES
  // =========================================================

  useEffect(() => {
    if (serviceType === "pickup") {
      resetField("dropLocation", {
        defaultValue: "",
      });

      resetField("returnDropLocation", {
        defaultValue: "",
      });

      clearErrors(["dropLocation", "returnDropLocation"]);
    }

    if (serviceType === "drop") {
      resetField("pickupLocation", {
        defaultValue: "",
      });

      resetField("returnDropLocation", {
        defaultValue: "",
      });

      clearErrors(["pickupLocation", "returnDropLocation"]);
    }

    if (serviceType === "roundTrip") {
      // IMPORTANT:
      // Round Trip mein teeno locations preserve hongi.
      // pickupLocation
      // dropLocation
      // returnDropLocation

      clearErrors("dropLocation");
    }
  }, [serviceType, resetField, clearErrors]);

  // =========================================================
  // SUBMIT
  // =========================================================

  const onSubmit = async (data) => {
    try {
      // =====================================================
      // CONFIG VALIDATION
      // =====================================================

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Google Script URL is missing.");
      }

      if (!ADMIN_WHATSAPP_NUMBER) {
        throw new Error("Admin WhatsApp number is missing.");
      }

      // =====================================================
      // NORMALIZE SERVICE TYPE
      // =====================================================

      const currentService = data.serviceType || "pickup";

      // =====================================================
      // LOCATION SANITIZATION
      // =====================================================

      let pickupLocation = "";
      let dropLocation = "";
      let returnDropLocation = "";

      if (currentService === "pickup") {
        pickupLocation = String(data.pickupLocation || "").trim();
      }

      if (currentService === "drop") {
        dropLocation = String(data.dropLocation || "").trim();
      }

      if (currentService === "roundTrip") {
        pickupLocation = String(data.pickupLocation || "").trim();

        dropLocation = String(data.dropLocation || "").trim();

        returnDropLocation = String(data.returnDropLocation || "").trim();
      }

      // =====================================================
      // VEHICLE
      // =====================================================

      const vehicleData = {
        id: vehicle?._id || "",
        brand: vehicle?.brand || "",
        model: vehicle?.model || "",
        classification: vehicle?.classification || "",
        seats: Number(vehicle?.seats || 0),
        fuel: vehicle?.fuel || "",
        transmission: vehicle?.transmission || "",
        image: vehicle?.image || "",
      };

      // =====================================================
      // FARE
      // =====================================================

      let totalFare = 0;

      if (tripType === "local" && vehicle) {
        if (currentService === "pickup") {
          totalFare = Number(vehicle?.pickupPrice || 0);
        }

        if (currentService === "drop") {
          totalFare = Number(vehicle?.dropPrice || 0);
        }

        if (currentService === "roundTrip") {
          totalFare = Number(vehicle?.roundTripPrice || 0);
        }
      }

      // =====================================================
      // FINAL BOOKING OBJECT
      // =====================================================

        const bookingData = {
          serviceType: currentService,

          tripType: data.tripType || "local",

          airport: String(data.airport || "").trim(),

          pickupLocation,
          dropLocation,
          returnDropLocation,

          travelDate: String(data.travelDate || "").trim(),

          travelTime: String(data.travelTime || "").trim(),

          travelPeriod: String(data.travelPeriod || "").trim(),

          passengers: Number(data.passengers || 0),

          bags: Number(data.bags || 0),

          customer: {
            name: String(data.customer?.name || "").trim(),

            mobile: String(data.customer?.mobile || "").trim(),

            whatsapp: String(data.customer?.whatsapp || "").trim(),

            email: String(data.customer?.email || "").trim(),
          },

          vehicleId: vehicleData.id,

          vehicle: vehicleData,

          paymentMethod: data.paymentMethod || "cash",

          totalFare,
        };

      // =====================================================
      // DEBUG
      // =====================================================

      console.log("FINAL AIRPORT BOOKING:", bookingData);

      // =====================================================
      // GOOGLE SHEET
      // =====================================================

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

      if (!result?.success) {
        throw new Error(result?.message || "Booking could not be saved.");
      }

      if (!result?.bookingId) {
        throw new Error("Booking was saved but Booking ID was not returned.");
      }

      console.log("Airport booking saved:", result.bookingId);

      // =====================================================
      // WHATSAPP LOCATION TEXT
      // =====================================================

      let locationText = "";

      if (currentService === "pickup") {
        locationText = `Pickup: ${pickupLocation}`;
      }

      if (currentService === "drop") {
        locationText = `Drop: ${dropLocation}`;
      }

      if (currentService === "roundTrip") {
        locationText = `Pickup: ${pickupLocation}
Drop: ${dropLocation}
Return Drop: ${returnDropLocation}`;
      }

      // =====================================================
      // WHATSAPP MESSAGE
      // =====================================================

      const whatsappMessage = `
🚕 NEW AIRPORT BOOKING

━━━━━━━━━━━━━━━━━━
🆔 BOOKING
━━━━━━━━━━━━━━━━━━
Booking ID: ${result.bookingId}

━━━━━━━━━━━━━━━━━━
👤 CUSTOMER
━━━━━━━━━━━━━━━━━━
Name: ${bookingData.customer.name}
Mobile: ${bookingData.customer.mobile}
WhatsApp: ${bookingData.customer.whatsapp}
Email: ${bookingData.customer.email}

━━━━━━━━━━━━━━━━━━
✈️ TRIP DETAILS
━━━━━━━━━━━━━━━━━━
Service: ${bookingData.serviceType}
Trip Type: ${bookingData.tripType}
Airport: ${bookingData.airport}

${locationText}

Date: ${bookingData.travelDate}
Time: ${bookingData.travelTime} ${bookingData.travelPeriod}

━━━━━━━━━━━━━━━━━━
🚘 VEHICLE
━━━━━━━━━━━━━━━━━━
Brand: ${bookingData.vehicle.brand}
Model: ${bookingData.vehicle.model}
Class: ${bookingData.vehicle.classification}
Seats: ${bookingData.vehicle.seats}
Fuel: ${bookingData.vehicle.fuel}
Transmission: ${bookingData.vehicle.transmission}

━━━━━━━━━━━━━━━━━━
💰 PAYMENT
━━━━━━━━━━━━━━━━━━
Payment: ${bookingData.paymentMethod}
Total Fare: ₹${bookingData.totalFare}

━━━━━━━━━━━━━━━━━━
📌 STATUS
━━━━━━━━━━━━━━━━━━
Pending
`.trim();

      // =====================================================
      // ADMIN WHATSAPP
      // =====================================================

      const adminNumber = String(ADMIN_WHATSAPP_NUMBER).replace(/\D/g, "");

      if (!adminNumber) {
        throw new Error("Invalid admin WhatsApp number.");
      }

      const whatsappUrl =
        `https://wa.me/${adminNumber}?text=` +
        encodeURIComponent(whatsappMessage);

      // =====================================================
      // OPEN WHATSAPP ONLY AFTER SUCCESSFUL SHEET SAVE
      // =====================================================

      window.location.href = whatsappUrl;

      return result;
    } catch (error) {
      console.error("Airport booking error:", error);

      throw error;
    }
  };

  return {
    ...methods,
    serviceType,
    tripType,
    onSubmit,
  };
};

export default useAirportBooking;

import { z } from "zod";

export const createCarValidation = z
  .object({

    // CATEGORY
    category: z.enum([
      "Self Drive",
      "With Driver",
      "Premium Car",
      "Wedding Car",
      "Airport Transfer",
      "Tempo Traveller & Bus",
    ]),


    // TEMPO / BUS TYPE
    vehicleType: z
      .enum([
        "Tempo Traveller",
        "Bus",
      ])
      .optional(),



    // COMMON VEHICLE DETAILS

    brand: z
      .string()
      .trim()
      .min(2),

    model: z
      .string()
      .trim()
      .min(2),


    classification: z.enum([

      // Normal Cars
      "Hatchback",
      "Sedan",
      "SUV",
      "MUV",
      "Luxury",
      "Van",
      "Pickup",
      "Mini Truck",

      // Tempo
      "Tempo Traveller",

      // Bus
      "Mini Bus",
      "Luxury Bus",
      "Sleeper Bus",
      "Volvo Bus",

    ]),



    fuel: z
      .enum([
        "Petrol",
        "Diesel",
        "CNG",
        "Electric",
      ])
      .optional(),



    transmission: z
      .enum([
        "Manual",
        "Automatic",
      ])
      .optional(),



    seats: z
      .coerce
      .number()
      .int()
      .min(1),



    image: z.any().optional(),



    description: z
      .string()
      .trim()
      .min(20),



    // PRICE

    pricePerHour: z
      .coerce
      .number()
      .min(0)
      .optional(),


    pricePerDay: z
      .coerce
      .number()
      .min(0)
      .optional(),


    driverChargePerDay: z
      .coerce
      .number()
      .min(0)
      .optional(),




    // PICKUP / MINI TRUCK

    loadingCapacity:
      z.string()
        .optional(),




    // AIRPORT

    pickupPrice:
      z.coerce
        .number()
        .min(0)
        .optional(),


    dropPrice:
      z.coerce
        .number()
        .min(0)
        .optional(),


    roundTripPrice:
      z.coerce
        .number()
        .min(0)
        .optional(),




    // WEDDING

    showDecoration:
      z.coerce
        .boolean()
        .optional(),



    decorationType:
      z.enum([
        "Simple Decoration",
        "Royal Flower",
        "Ribbon Decoration",
        "Premium Setup",
        "Customize",
      ])
        .optional(),


    decorationName:
      z.string()
        .optional(),


    decorationPrice:
      z.coerce
        .number()
        .min(0)
        .optional(),




    // STATUS

    status:
      z.enum([
        "Available",
        "Reserved",
        "Booked",
        "Maintenance",
      ])
        .default("Available"),

  })



  .superRefine((data, ctx) => {



    // =====================
    // TEMPO / BUS VALIDATION
    // =====================

    if (data.category === "Tempo Traveller & Bus") {


      if (!data.vehicleType) {

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["vehicleType"],
          message: "Vehicle Type is required",
        });

      }



      if (
        data.vehicleType === "Tempo Traveller" &&
        data.classification !== "Tempo Traveller"
      ) {

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["classification"],
          message: "Tempo Traveller classification required",
        });

      }




      if (
        data.vehicleType === "Bus" &&
        ![
          "Mini Bus",
          "Luxury Bus",
          "Sleeper Bus",
          "Volvo Bus",
        ].includes(data.classification)
      ) {

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["classification"],
          message: "Invalid Bus classification",
        });

      }

    }





    // =====================
    // WITH DRIVER
    // =====================

    if (
      data.category === "With Driver" &&
      (!data.driverChargePerDay ||
        data.driverChargePerDay <= 0)
    ) {

      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["driverChargePerDay"],
        message: "Driver Charge Per Day is required",
      });

    }




    // =====================
    // PICKUP / MINI TRUCK
    // =====================

    if (
      (
        data.classification === "Pickup" ||
        data.classification === "Mini Truck"
      )
      &&
      !data.loadingCapacity
    ) {

      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["loadingCapacity"],
        message: "Loading Capacity is required",
      });

    }





    // =====================
    // AIRPORT TRANSFER
    // =====================


    if (data.category === "Airport Transfer") {


      if (!data.pickupPrice || data.pickupPrice <= 0) {

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["pickupPrice"],
          message: "Pickup Price is required",
        });

      }



      if (!data.dropPrice || data.dropPrice <= 0) {

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["dropPrice"],
          message: "Drop Price is required",
        });

      }




      if (!data.roundTripPrice || data.roundTripPrice <= 0) {

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["roundTripPrice"],
          message: "Round Trip Price is required",
        });

      }


    }





    // =====================
    // WEDDING
    // =====================


    if (
      data.category === "Wedding Car" &&
      data.showDecoration
    ) {


      if (!data.decorationType) {

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["decorationType"],
          message: "Decoration Type is required",
        });

      }



      if (!data.decorationName) {

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["decorationName"],
          message: "Decoration Name is required",
        });

      }



      if (
        !data.decorationPrice ||
        data.decorationPrice <= 0
      ) {

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["decorationPrice"],
          message: "Decoration Price is required",
        });

      }


    }



  });
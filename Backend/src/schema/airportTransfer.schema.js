import { z } from "zod";


export const airportTransferBookingSchema = z.object({

    bookingId: z.string(),

    serviceType: z
        .string()
        .default("Airport Transfer"),


    user: z
        .string()
        .nullable()
        .optional(),



    vehicleId: z
        .string()
        .min(1),



    vehicle: z.object({

        brand: z.string(),

        model: z.string(),

        classification: z.string(),

        fuel: z.string()
            .default(""),

        transmission: z.string()
            .default(""),

        seats: z.number()
            .default(0),

        image: z.string()
            .default(""),

        price: z.number()
            .default(0),

    }),





    tripType: z.enum([
        "Airport Pickup",
        "Airport Drop",
        "Round Trip"
    ]),



    pickupLocation: z.string()
        .trim(),


    dropLocation: z.string()
        .trim(),





    flightDetails: z.object({

        airlineName: z.string()
            .default(""),

        flightNumber: z.string()
            .default(""),

        arrivalTime: z.string()
            .default(""),

        departureTime: z.string()
            .default(""),

    })
        .optional(),






    pickupDate: z.coerce.date(),


    pickupTime: z.string(),


    timePeriod: z.enum([
        "AM",
        "PM"
    ]),






    customer: z.object({

        name: z.string()
            .trim(),

        mobile: z.string(),

        email: z.string()
            .email(),

        whatsapp: z.string()
            .default(""),

    }),






    address: z.object({

        currentAddress: z.string(),

        city: z.string(),

        state: z.string(),

        pinCode: z.string(),

    }),






    pricing: z.object({

        pickupPrice: z.number()
            .default(0),

        dropPrice: z.number()
            .default(0),

        roundTripPrice: z.number()
            .default(0),

    }),





    totalAmount: z.number(),






    paymentMethod: z.enum([
        "Cash",
        "Online"
    ]),



    paymentStatus: z.enum([
        "Pending",
        "Paid",
        "Failed",
        "Refunded"
    ])
        .default("Pending"),






    assignedDriver: z.string()
        .nullable()
        .optional(),




    driver: z.object({

        name: z.string()
            .default(""),

        mobile: z.string()
            .default(""),

        image: z.string()
            .default(""),

    })
        .optional(),






    bookingStatus: z.enum([
        "Pending",
        "Contacted",
        "Approved",
        "Rejected",
        "Cancelled",
        "Completed"
    ])
        .default("Pending"),






    rideStatus: z.enum([
        "Not Started",
        "Ongoing",
        "Completed",
        "Cancelled"
    ])
        .default("Not Started"),






    note: z.string()
        .default(""),






    cancellationPolicy: z.object({

        allowedBeforeHours: z.number()
            .default(6),

        cancellationCharge: z.number()
            .default(500),

        cancellationChargeType: z.enum([
            "Fixed",
            "Percentage"
        ])
            .default("Fixed"),

    })
        .optional(),






    cancelReason: z.string()
        .default(""),



    cancelledBy: z.enum([
        "Customer",
        "Admin"
    ])
        .nullable()
        .optional(),



    cancelledAt: z.coerce.date()
        .nullable()
        .optional(),



    cancelAmount: z.number()
        .default(0),



    refundAmount: z.number()
        .default(0),


});
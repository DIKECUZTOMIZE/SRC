import { z } from "zod";


export const createWeddingCarBookingSchema = z.object({

    bookingId: z.string().min(1),

    serviceType: z.string().optional(),

    vehicleId: z.string().min(1),


    vehicle: z.object({

        brand: z.string().min(1),

        model: z.string().min(1),

        classification: z.string().min(1),

        fuel: z.string().optional(),

        transmission: z.string().optional(),

        seats: z.number().optional(),

        image: z.string().optional(),

        pricePerDay: z.number().optional(),

    }),



    bookingFor: z.enum([
        "Wedding",
        "Engagement",
        "Reception",
        "Pre Wedding Shoot",
        "Event",
        "Other"
    ]),


    customEventName: z.string().optional(),



    eventDetails: z.object({

        eventDate: z.string(),

        eventTime: z.string().min(1),

        timePeriod: z.enum([
            "AM",
            "PM"
        ]),

        venueName: z.string().min(1),

        venueAddress: z.string().min(1),

        pickupLocation: z.string().min(1),

        dropLocation: z.string().min(1),

    }),



    decoration: z.object({

        decorationType: z.enum([
            "Our Decoration",
            "Custom Decoration"
        ]),


        decorationId: z.string().optional(),

        decorationName: z.string().optional(),

        decorationImage: z.string().optional(),

        decorationPrice: z.number().optional(),


        customDecoration: z.object({

            images: z.array(
                z.string()
            ).optional(),

            note: z.string().optional(),

        }).optional()

    }),




    bookingDuration: z.object({

        bookingType: z.enum([
            "One Day",
            "Multiple Days"
        ]).optional(),

        totalDays: z.number()
            .min(1)
            .optional(),

    }),





    driverRequired: z.enum([
        "Yes",
        "No"
    ]).optional(),



    assignedDriver: z.string().optional(),



    driver: z.object({

        name: z.string().optional(),

        mobile: z.string().optional(),

        image: z.string().optional(),

        requiredDays: z.number().optional(),

        chargePerDay: z.number().optional(),

        totalCharge: z.number().optional(),

    }).optional(),




    deliveryType: z.enum([
        "Self Pickup",
        "Home Delivery"
    ]).optional(),



    deliveryDetails: z.object({

        address: z.string().optional(),

        charge: z.number().optional(),

    }).optional(),




    customer: z.object({

        name: z.string().min(1),

        mobile: z.string().min(1),

        email: z.string().email().optional(),

        whatsapp: z.string().optional(),

    }),





    address: z.object({

        currentAddress: z.string().optional(),

        city: z.string().optional(),

        state: z.string().optional(),

        pinCode: z.string().optional(),

    }).optional(),





    pricing: z.object({

        carPrice: z.number().default(0),

        decorationPrice: z.number().default(0),

        driverCharge: z.number().default(0),

        deliveryCharge: z.number().default(0),

    }),





    totalAmount: z.number().min(0),




    paymentMethod: z.enum([
        "Cash",
        "Online"
    ]),




    note: z.string().optional(),


});
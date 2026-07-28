import { z } from "zod";

export const driverBookingSchema = z
    .object({
        // Vehicle
        vehicleId: z
            .string()
            .trim()
            .regex(/^[0-9a-fA-F]{24}$/, "Invalid vehicle id"),

        // Booking Details
        bookingType: z.enum(["hour", "day"], {
            message: "Please select booking type",
        }),

        quantity: z.coerce
            .number({
                required_error: "Quantity is required",
            })
            .int("Quantity must be a whole number")
            .min(1, "Quantity must be at least 1"),

        tripType: z.enum(["Local", "Outstation"], {
            message: "Please select trip type",
        }),

        pickupLocation: z
            .string()
            .trim()
            .min(5, "Pickup location must be at least 5 characters")
            .max(150, "Pickup location is too long"),

        destination: z
            .string()
            .trim()
            .min(5, "Destination must be at least 5 characters")
            .max(150, "Destination is too long"),

        pickupDate: z.coerce
            .date({
                required_error: "Pickup date is required",
            })
            .refine(
                (date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return date >= today;
                },
                {
                    message: "Pickup date cannot be in the past",
                }
            ),


        pickupTime: z
            .string()
            .regex(/^(0?[1-9]|1[0-2]):[0-5][0-9]$/, "Invalid pickup time"),

        timePeriod: z.enum(["AM", "PM"], {
            message: "Please select AM/PM",
        }),

        // Customer
        customer: z.object({
            name: z
                .string()
                .trim()
                .min(3, "Name must be at least 3 characters")
                .max(60, "Name is too long")
                .regex(/^[A-Za-zÀ-ÿ\s.'-]+$/, "Invalid name"),

            mobile: z
                .string()
                .trim()
                .regex(/^[6-9]\d{9}$/, "Invalid mobile number"),


            email: z
                .string()
                .trim()
                .toLowerCase()
                .email("Invalid email address"),

            whatsapp: z
                .string()
                .trim()
                .regex(/^[6-9]\d{9}$/, "Invalid WhatsApp number")
                .optional()
                .or(z.literal("")),
        }),
        // Address
        address: z.object({
            currentAddress: z
                .string()
                .trim()
                .min(10, "Address must be at least 10 characters")
                .max(500, "Address is too long"),

            state: z
                .string()
                .trim()
                .min(2, "State is required")
                .max(50, "State is too long")
                .regex(/^[A-Za-zÀ-ÿ\s.'-]+$/, "Invalid state name"),

            city: z
                .string()
                .trim()
                .min(2, "City is required")
                .max(50, "City is too long")
                .regex(/^[A-Za-zÀ-ÿ\s.'-]+$/, "Invalid city name"),

            policeStation: z
                .string()
                .trim()
                .max(100, "Police station name is too long")
                .optional()
                .or(z.literal("")),

            pinCode: z
                .string()
                .regex(/^[1-9][0-9]{5}$/, "Invalid pin code"),
        }),

        // Payment
        paymentMethod: z.enum(["Cash", "Online"], {
            message: "Please select payment method",
        }),
    })
    .strict();
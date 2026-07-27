import { z } from "zod";

export const createSelfDriveBookingSchema = z.object({
  // Vehicle
  vehicleId: z.string().min(1),

  serviceType: z.string().optional(),

  name: z.string().min(1),

  fuel: z.string().min(1),

  transmission: z.string().min(1),

  seats: z.union([z.string(), z.number()]),

  pricePerHour: z.number(),

  pricePerDay: z.number(),

  // Booking
  bookingType: z.enum(["hour", "day"]),

  quantity: z.number().min(1),

  pickupDate: z.string(),

  pickupTime: z.string(),

  timePeriod: z.enum(["AM", "PM"]),

  // Delivery
  deliveryType: z.enum(["Pickup", "Drop"]),

  distance: z.number().default(0),

  deliveryAddress: z.string().optional(),

  // Customer
  customer: z.object({
    name: z.string().min(2),

    mobile: z.string().regex(/^[0-9]{10}$/),

    email: z.string().email(),

    whatsapp: z.string().optional(),

    currentAddress: z.string().min(5),
  }),

  // Address
  address: z.object({
    state: z.string(),

    city: z.string(),

    policeStation: z.string().optional(),

    pinCode: z
      .string()
      .trim()
      .regex(/^[0-9]{6}$/, "PIN Code must be 6 digits"),
  }),

  // Price
  baseAmount: z.number(),

  deliveryCharge: z.number(),

  totalAmount: z.number(),

  // Payment
  paymentMethod: z.enum(["Cash", "Online"]),
});
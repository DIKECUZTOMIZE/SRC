import { z } from "zod";

export const createCarValidation = z.object({
  category: z.enum([
    "Self Drive",
    "Cab",
    "Urbania",
    "Tours",
    "Safari",
    "Airport",
    "Wedding",
  ]),

  brand: z.string().trim().min(2),

  model: z.string().trim().min(2),

  classification: z.enum([
    "Hatchback",
    "Sedan",
    "SUV",
    "MUV",
    "Luxury",
    "Sports",
    "Van",
    "Traveller",
  ]),

  fuel: z.enum([
    "Petrol",
    "Diesel",
    "CNG",
    "Electric",
  ]),

  transmission: z.enum([
    "Manual",
    "Automatic",
  ]),

  seats: z.coerce.number().min(2),

  pricePerHour: z.coerce.number().min(1),

  pricePerDay: z.coerce.number().min(1),

 

  description: z.string().trim().min(20),

  status: z.enum([
    "Available",
    "Reserved",
    "Booked",
    "Maintenance",
  ]).default("Available"),
});
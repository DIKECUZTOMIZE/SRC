import express from "express";
import asyncHandler from "../../../shared/utils/asyncHandle.js";
import { createAirportTransferBooking, getAllAirportTransfer } from "./airportTransfer.controller.js";
import { authMiddleware } from "../../../middleware/auth.middleware.js";
import { validate } from "../../../validator/validate .js";
import { airportTransferBookingSchema } from "../../../schema/airportTransfer.schema.js";



const router = express.Router();

router.get(
    "/vehicles",
    asyncHandler(getAllAirportTransfer)
);

// router.get(
//     "/vehicles/:id",
//     asyncHandler(getAirportTransferById)
// );




// Create Airport Transfer Booking (user)
router.post(
    "/book",
    authMiddleware,
    validate(airportTransferBookingSchema),
    asyncHandler(createAirportTransferBooking)
);
export default router;
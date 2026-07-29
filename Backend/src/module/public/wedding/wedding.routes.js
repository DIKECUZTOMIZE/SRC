import express from "express";
import asyncHandler from "../../../shared/utils/asyncHandle.js";
import { createWeddingCarBooking, getAllWeddingCars } from "./wedding.controller.js";
import { authMiddleware } from "../../../middleware/auth.middleware.js";
import { validate } from "../../../validator/validate .js";
import { createWeddingCarBookingSchema } from "../../../schema/wedding.js";


const router = express.Router();

router.get(
  "/vehicles",
  asyncHandler(getAllWeddingCars)
);

// router.get(
//   "/vehicles/:id",
//   asyncHandler(getWeddingCarById)
// );


// Create Wedding Car Booking (user)
router.post(
  "/book",
  authMiddleware,
  validate(createWeddingCarBookingSchema),
  asyncHandler(createWeddingCarBooking)
);
export default router;
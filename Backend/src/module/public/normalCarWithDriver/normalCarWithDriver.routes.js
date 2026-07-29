import express from 'express'
import asyncHandler from "../../../shared/utils/asyncHandle.js";
import { driverBookingSchema } from '../../../schema/normalDriver.schema.js'
import { createDriverBooking, getAllCarsController } from './normalCarWithDriver.controller.js';
import { authMiddleware } from '../../../middleware/auth.middleware.js';
import { validate } from '../../../validator/validate .js';

const router = express.Router();

// Get all cars for Car With Driver
router.get(
    "/cars", authMiddleware, asyncHandler(getAllCarsController)
);

// Create Booking (User)
router.post(
    "/book",
    authMiddleware,
    validate(driverBookingSchema),
    asyncHandler(createDriverBooking)
);
;

// Get All Bookings (Admin)
// router.get(
//     "/bookings",
//     authMiddleware,
//     authorizationMiddleware("ADMIN"),
//     asyncHandler(getBookings)
// );


// Get Single Booking (Admin)
// router.get(
//     "/bookings/:id",
//     authMiddleware,
//     authorizationMiddleware("ADMIN"),
//     asyncHandler(getBooking)
// );


// Get My Booking (User)
// router.get(
//     "/my-bookings/:id",
//     authMiddleware,
//     asyncHandler(getMyBooking)
// );


// My Booking Status List (User)
// router.get(
//     "/my-bookings-status-list",
//     authMiddleware,
//     asyncHandler(getMyBookingsStatusList)
// );


// My Booking Details (User)
// router.get(
//     "/my-bookings-status-details/:id",
//     authMiddleware,
//     asyncHandler(getMyBookingStatusDetails)
// );


// Cancel Booking (User)
// router.patch(
//     "/my-bookings/:id/cancel",
//     authMiddleware,
//     asyncHandler(cancelBooking)
// );


// Update Booking Status (Admin)
// router.patch(
//     "/bookings/:id/status",
//     authMiddleware,
//     authorizationMiddleware("ADMIN"),
//     asyncHandler(updateBookingStatus)
// );


// Assign Driver (Admin)
// router.patch(
//     "/bookings/:id/assign-driver",
//     authMiddleware,
//     authorizationMiddleware("ADMIN"),
//     asyncHandler(assignDriver)
// );


// Update Booking (Admin)
// router.put(
//     "/booking-update/:id",
//     authMiddleware,
//     authorizationMiddleware("ADMIN"),
//     asyncHandler(updateBooking)
// );


// Delete Booking (Admin)
// router.delete(
//     "/booking-delete/:id",
//     authMiddleware,
//     authorizationMiddleware("ADMIN"),
//     asyncHandler(deleteBooking)
// );

export default router;


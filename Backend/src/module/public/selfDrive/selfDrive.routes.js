import express from "express";
import { createSelfDriveBookingSchema } from "../../../schema/selfDrive.schema.js";
import { validate } from "../../../validator/validate .js";
import {  createSelfDriveBooking, deleteBooking, getBooking, getBookings, getMyBooking, getMyBookingsStatusList, getMyBookingStatusDetails, updateBooking, updateBookingStatus, } from "./selfDrive.controller.js";
import { authMiddleware, authorizationMiddleware } from "../../../middleware/auth.middleware.js";
import asyncHandler from "../../../shared/utils/asyncHandle.js";


const router = express.Router();

// Create Booking(user)
router.post(
    "/book",
    authMiddleware,
    validate(createSelfDriveBookingSchema),
    asyncHandler(createSelfDriveBooking)
);


// Get All Bookings (Admin)
router.get(
    "/bookings",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(getBookings)
);


// Get Single Booking (Admin)
router.get(
    "/bookings/:id",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(getBooking)
);


// Get My Single Booking (User)
router.get(
    "/my-bookings/:id",
    authMiddleware,
    asyncHandler(getMyBooking)
);


// Update booking status (Admin)
router.patch(
    "/bookings/:id/status",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(updateBookingStatus)
);


// Get all bookings of logged-in user status list(user)
router.get(
    "/my-bookings-status-list",
    authMiddleware,
    asyncHandler(getMyBookingsStatusList)
);


// Get single booking details(user)
router.get(
    "/my-bookings-status-details/:id",
    authMiddleware,
    asyncHandler(getMyBookingStatusDetails)
);



// delete booking(admin)
router.delete(
    "/booking-delete/:id",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(deleteBooking)
);



// Update booking (Admin)
router.put(
    "/booking-update/:id",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(updateBooking)
);
export default router;


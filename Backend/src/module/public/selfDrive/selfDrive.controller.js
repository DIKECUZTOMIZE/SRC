import mongoose from "mongoose";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import { updateBookingStatusService, getBookingService, getBookingsService, getMyBookingService, getMyBookingStatusListService, getMyBookingStatusDetailsService, deleteBookingService, updateBookingService, createBookingService } from "./selfDrive.service.js";
import { StatusCodes } from "http-status-codes";
import { nanoid } from "nanoid";
import AddCarModel from "../../../model/carAdd.model.js";
import SelfDriveDao from "../../../dao/SelfDrive.dao.js";
import { getIO } from "../../../socket/server.socket.js";

// Create Self Drive Booking
export const createSelfDriveBooking = async (req, res) => {


  try {


    const bookingData = {

      ...req.body,


      bookingId: `SD-${nanoid(8)}`,


      user: req.user?.userId || null,

    };




    const booking =
      await createBookingService(
        bookingData
      );




    return buildSuccessResponse(

      res,

      "Self drive booking created successfully",

      StatusCodes.CREATED,

      booking

    );



  } catch (error) {


    console.error(
      "Self Drive Booking Error:",
      error
    );



    return res.status(
      error.statusCode || 500
    ).json({

      success: false,

      message: error.message

    });


  }


};

// booking list(admin)
export const getBookings = async (req, res) => {

  try {

    const bookings = await getBookingsService();


    return buildSuccessResponse(
      res,
      "Bookings fetched successfully",
      200,
      bookings
    );


  } catch (error) {

    console.log("get bookings controller:", error);


    return res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

// booking details single(admin)
export const getBooking = async (req, res, next) => {
  try {
    const { id } = req.params;

    const booking = await getBookingService(id);

    return buildSuccessResponse(
      res,
      "Booking fetched successfully",
      200,
      booking
    );
  } catch (error) {
    next(error);
  }
};


// update status (admin )
export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await updateBookingStatusService(id, status);

    return buildSuccessResponse(
      res,
      `Booking ${status} successfully`,
      200,
      booking
    );

  } catch (error) {
    console.log("update booking status controller:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// booking details single (user)
export const getMyBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const booking = await getMyBookingService(id, userId);

    return buildSuccessResponse(
      res,
      "Booking fetched successfully",
      200,
      booking
    );

  } catch (error) {
    console.log("Get My Booking Controller:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// user status list(user)
export const getMyBookingsStatusList = async (req, res) => {
  try {
    const userId = req.user.userId;

    const bookings = await getMyBookingStatusListService(userId);

    return buildSuccessResponse(
      res,
      "Bookings fetched successfully",
      200,
      bookings
    );

  } catch (error) {
    console.log("Get My Booking Controller:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// user status details(user)
export const getMyBookingStatusDetails = async (req, res) => {
  const bookingId = req.params.id;
  const userId = req.user.userId;

  const booking = await getMyBookingStatusDetailsService(
    bookingId,
    userId
  );

  return buildSuccessResponse(
    res,
    "Booking details fetched successfully",
    200,
    booking
  );
};


// delete booking (admin)
export const deleteBooking = async (req, res) => {
  const data = await deleteBookingService(req.params.id);

  return buildSuccessResponse(
    res,
    "Booking deleted successfully",
    200,
    data
  );
};



// Update booking (admin)
export const updateBooking = async (req, res) => {
  const data = await updateBookingService(req.params.id, req.body);

  return buildSuccessResponse(
    res,
    "Booking updated successfully",
    200,
    data
  );
};
import mongoose from "mongoose";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import { updateBookingStatusService, createBookingService, getBookingService, getBookingsService, getMyBookingService, getMyBookingStatusListService, getMyBookingStatusDetailsService, deleteBookingService, updateBookingService } from "./selfDrive.service.js";
import { StatusCodes } from "http-status-codes";
import { nanoid } from "nanoid";
import AddCarModel from "../../../model/carAdd.model.js";
import SelfDriveDao from "../../../dao/SelfDrive.dao.js";
import { getIO } from "../../../socket/server.socket.js";

// Create Self Drive Booking
export const createBookingService = async (data) => {


  const car = await AddCarModel.findById(
    data.vehicleId
  );


  if (!car) {
    throw new Error("Car not found");
  }



  // Vehicle Snapshot

  data.vehicle = {

    brand: car.brand,

    model: car.model,

    fuel: car.fuel,

    transmission: car.transmission,

    seats: car.seats,

    classification: car.classification,

    image: car.image,

    vehicleNumber: car.vehicleNumber || "",

    pricePerHour: car.pricePerHour,

    pricePerDay: car.pricePerDay,

  };





  // Package Snapshot

  data.packageDetails = {

    includedHours: 7,

    graceMinutes: 30,

    billingRule: "Extra Hour"

  };





  // Pricing Snapshot

  data.pricing = {

    hourRate: car.pricePerHour,

    dayRate: car.pricePerDay,

    extraHourRate: 300,

  };





  const calculation =
    calculateBookingAmount({

      bookingType: data.bookingType,

      quantity: data.quantity,

      vehicle: data.vehicle,

    });



  Object.assign(
    data.pricing,
    calculation
  );



  const booking =
    await SelfDriveDao.create(data);




  const io = getIO();


  io.to("admins").emit(
    "new-self-drive-booking",
    booking
  );



  return booking;

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
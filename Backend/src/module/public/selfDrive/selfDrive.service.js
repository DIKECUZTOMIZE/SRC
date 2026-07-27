import SelfDriveDao from "../../../dao/SelfDrive.dao.js";
import { AppError } from "../../../shared/error/appError.js";
import { getIO } from "../../../socket/server.socket.js";

// user form
export const createBookingService = async (data) => {
  // Save Booking using DAO
  const booking = await SelfDriveDao.create(data);

  // Socket instance
  const io = getIO();

  // Send notification to admin room
  io.to("admins").emit("new-booking", booking);

  return booking;
};

// admin get data
export const getBookingsService = async () => {
  const bookings = await SelfDriveDao.getAllBooking();

  return bookings;
};

// details page single data admin
export const getBookingService = async (id) => {
  const booking = await SelfDriveDao.findById(id);

  if (!booking) {
    throw new AppError("Booking not found", 404);
  }

  return booking;
};

// update status
export const updateBookingStatusService = async (id, status) => {
  const booking = await SelfDriveDao.findById(id);

  if (!booking) {
    throw new Error("Booking not found");
  }

  booking.bookingStatus = status;

  await booking.save();

  return booking;
};

// user details page
export const getMyBookingService = async (id, userId) => {

  if (!id || !userId) {
    throw new Error("Missing booking id or user id");
  }

  const booking = await SelfDriveDao.findOne({
    _id: id,
    user: userId,
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  return booking;
};

// user status list page
export const getMyBookingStatusListService = async (userId) => {

  if (!userId) {
    throw new Error("User ID is required");
  }

  const bookings = await SelfDriveDao.getAllBooking({
    user: userId,
  });

  return bookings;
};

// user status details
export const getMyBookingStatusDetailsService = async (
  bookingId,
  userId
) => {
  const booking = await SelfDriveDao.getBookingByIdAndUser(
    bookingId,
    userId
  );

  if (!booking) {
    throw new Error("Booking not found");
  }

  return booking;
};


// delete booking
export const deleteBookingService = async (id) => {
  const booking = await SelfDriveDao.deleteById(id);

  if (!booking) {
    throw new Error("Booking not found");
  }

  return booking;
};

// Update booking (admin)
export const updateBookingService = async (id, body) => {

  return await SelfDriveDao.updateById(id, body);
};
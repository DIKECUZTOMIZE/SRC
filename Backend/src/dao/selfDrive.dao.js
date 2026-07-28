import selfDriveModel from "../model/selfDrive.model.js";

class SelfDriveDAO {
    // Create Booking
    async create(data) {

        return await selfDriveModel.create(data);
    }

    // Get All Bookings
    async getAllBooking(filter = {}) {
        return await selfDriveModel.find(filter).sort({ createdAt: -1 });
    }

    // Get Booking By Mongo ID
    async findById(id) {
        return await selfDriveModel.findById(id);
    }

    // Get Booking By Booking ID
    async findByBookingId(bookingId) {
        return await selfDriveModel.findOne({ bookingId });
    }




    // Find One Booking
    async findOne(filter = {}) {
        return await selfDriveModel.findOne(filter);
    }

    // Get User Specific Booking Details
    async getBookingByIdAndUser(id, userId) {
        return await selfDriveModel.findOne({
            _id: id,
            user: userId,
        });
    }

    // Delete Booking
    async deleteById(id) {
        return await selfDriveModel.findByIdAndDelete(id);
    }

    async updateById(id, body) {
        return await selfDriveModel.findByIdAndUpdate(id, body, {
            returnDocument: "after",
            runValidators: true,
        });
    }


}

export default new SelfDriveDAO();

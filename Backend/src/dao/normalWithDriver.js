import DriverBookingModel from "../model/normalWithCar.model.js";


class NormalWithDriverDao {

    async createBookingDao(payload) {
        return DriverBookingModel.create(payload);
    }

    async getAllBookingsDao() {
        return DriverBookingModel.find().sort({ createdAt: -1 });
    }

    async getBookingByIdDao(id) {
        return DriverBookingModel.findById(id);
    }

    async getUserBookingsDao(userId) {
        return DriverBookingModel.find({ user: userId }).sort({ createdAt: -1 });
    }

    async updateBookingDao(id, payload) {
        return DriverBookingModel.findByIdAndUpdate(
            id,
            payload,
            { new: true }
        );
    }

    async deleteBookingDao(id) {
        return DriverBookingModel.findByIdAndDelete(id);
    }

}

export default new NormalWithDriverDao();
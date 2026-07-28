
import AddCarModel from "../model/carAdd.model.js";
import DriverBookingModel from "../model/normalWithCar.model.js";

class NormalWithDriverDao {
    async getAllCarsDao(filter) {
        return await AddCarModel.find(filter)
            .sort({ createdAt: -1 })
            .lean();
    }

    async createBookingDao(payload) {
        return await DriverBookingModel.create(payload);
    }

    async getAllBookingsDao() {
        return await DriverBookingModel.find().sort({ createdAt: -1 });
    }

    async getBookingByIdDao(id) {
        return await DriverBookingModel.findById(id);
    }

    async getUserBookingsDao(userId) {
        return await DriverBookingModel.find({ user: userId })
            .sort({ createdAt: -1 });
    }

    async updateBookingDao(id, payload) {
        return await DriverBookingModel.findByIdAndUpdate(
            id,
            payload,
            { new: true }
        );
    }

    async deleteBookingDao(id) {
        return await DriverBookingModel.findByIdAndDelete(id);
    }
}

export default new NormalWithDriverDao();
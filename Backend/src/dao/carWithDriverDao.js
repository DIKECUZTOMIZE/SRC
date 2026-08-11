
import AddCarModel from "../model/carAdd.model.js";
import CarWithDriverModel from "../model/carWithDriver.model.js";

class CarWithDriverDao {
    async getAllCarsDao(filter) {
        return await AddCarModel.find(filter)
            .sort({ createdAt: -1 })
            .lean();
    }

    async createBookingDao(payload) {
        return await CarWithDriverModel.create(payload);
    }

    async getAllBookingsDao() {
        return await CarWithDriverModel.find().sort({ createdAt: -1 });
    }

    async getBookingByIdDao(id) {
        return await CarWithDriverModel.findById(id);
    }

    async getUserBookingsDao(userId) {
        return await CarWithDriverModel.find({ user: userId })
            .sort({ createdAt: -1 });
    }

    async updateBookingDao(id, payload) {
        return await CarWithDriverModel.findByIdAndUpdate(
            id,
            payload,
            { new: true }
        );
    }

    async deleteBookingDao(id) {
        return await CarWithDriverModel.findByIdAndDelete(id);
    }
}

export default new CarWithDriverDao();
import CarAddModel from "../model/carAdd.model.js";

class CarAddDAO {
    // CREATE VEHICLE

    async create(data) {
        try {
            return await CarAddModel.create(data);
        } catch (error) {
            console.error("CREATE VEHICLE ERROR:", error);
            throw error;
        }
    }

    // GET ALL CATEGORIES

    async getCategories() {
        return await CarAddModel.distinct("category");
    }

    // GET VEHICLES BY CATEGORY

    async findByCategory(category) {
        return await CarAddModel.find({ category }).sort({
            createdAt: -1,
        });
    }

    // GET VEHICLES BY STATUS

    async findByStatus(status) {
        return await CarAddModel.find({ status }).sort({
            createdAt: -1,
        });
    }

    // GET WEDDING CARS

    async findWeddingCars() {
        return await CarAddModel.find({
            category: "Wedding Car",
        }).sort({
            createdAt: -1,
        });
    }

    // GET PREMIUM CARS

    async findPremiumCars() {
        return await CarAddModel.find({
            category: "Premium Car",
        }).sort({
            createdAt: -1,
        });
    }

    // GET AIRPORT TRANSFER

    async findAirportCars() {
        return await CarAddModel.find({
            category: "Airport Transfer",
        }).sort({
            createdAt: -1,
        });
    }

    // GET ALL VEHICLES

    async findAll() {
        return await CarAddModel.find().sort({
            createdAt: -1,
        });
    }

    // GET SINGLE VEHICLE

    async findById(id) {
        return await CarAddModel.findById(id);
    }

    // UPDATE VEHICLE

    async update(id, data) {
        try {
            return await CarAddModel.findByIdAndUpdate(id, data, {
                new: true,
                runValidators: true,
            });
        } catch (error) {
            console.error("UPDATE VEHICLE ERROR:", error);
            throw error;
        }
    }

    // DELETE VEHICLE

    async delete(id) {
        try {
            return await CarAddModel.findByIdAndDelete(id);
        } catch (error) {
            console.error("DELETE VEHICLE ERROR:", error);
            throw error;
        }
    }
}

export default new CarAddDAO();
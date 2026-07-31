import AirportTransferBookingModel from "../model/airportTrensfer.model.js";
import AddCarModel from "../model/carAdd.model.js";


class AirportTransferDao {

    async findAll(filter) {
        return await AddCarModel.find(filter)
            .sort({ createdAt: -1 })
            .lean();
    }

    async findById(id) {
        return await AddCarModel.findById(id).lean();
    }

    async create(data) {
        return await AirportTransferBookingModel.create(data);


    };
}

export default new AirportTransferDao();
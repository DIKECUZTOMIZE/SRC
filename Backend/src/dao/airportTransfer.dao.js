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

}

export default new AirportTransferDao();
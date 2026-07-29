import AddCarModel from "../model/carAdd.model.js";


class PremiumCarDao {

    async findAll(filter) {
        return await AddCarModel.find(filter)
            .sort({ createdAt: -1 })
            .lean();
    }

    async findById(id) {
        return await AddCarModel.findById(id).lean();
    }

}

export default new PremiumCarDao();
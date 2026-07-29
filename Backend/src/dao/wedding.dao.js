import AddCarModel from "../model/carAdd.model.js";

class WeddingCarDao {
    async findAll(filter) {
 
         const data=await AddCarModel.find(filter).sort({ createdAt: -1 }).lean();
      
         return data
    }

    async findById(id) {
        return await AddCarModel.findById(id).lean();
    }
}

export default new WeddingCarDao();

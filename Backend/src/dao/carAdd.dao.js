import CarAddModel from "../model/carAdd.model.js";

class CarAddDAO {

    async create(data) {
        try {
            return await CarAddModel.create(data);

        } catch (error) {
            console.error("CREATE CAR ERROR:", error);
            throw error;
        }
    }



    async getCategories() {

        return await CarAddModel.distinct("category");

    }




    async findByCategory(category) {

        return await CarAddModel
            .find({
                category: category
            })
            .sort({
                createdAt: -1
            });

    }




    async findAll() {

        return await CarAddModel
            .find()
            .sort({
                createdAt: -1
            });

    }




    async findById(id) {

        return await CarAddModel.findById(id);

    }




    async update(id, data) {

        try {

            return await CarAddModel.findByIdAndUpdate(
                id,
                data,
                {
                    new: true,
                    runValidators: true
                }
            );


        } catch (error) {

            console.error("UPDATE CAR ERROR:", error);
            throw error;

        }

    }





    async delete(id) {

        try {

            return await CarAddModel.findByIdAndDelete(id);


        } catch (error) {

            console.error("DELETE CAR ERROR:", error);
            throw error;

        }

    }


}


export default new CarAddDAO();
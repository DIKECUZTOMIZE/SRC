import AddCarModel from "../model/carAdd.model.js";


class TempoTravellerBusDAO {


    async findAll() {

        return await AddCarModel
            .find({
                category: {
                    $in: [
                        "Tempo Traveller",
                        "Bus",
                        "Tempo Traveller & Bus"
                    ]
                },
                status: "Available"
            })
            .sort({
                createdAt: -1
            });

    }



    async findById(id){

        return await AddCarModel.findOne({
            _id:id,
            category:{
                $in:[
                    "Tempo Traveller",
                    "Bus",
                    "Tempo Traveller & Bus"
                ]
            }
        });

    }


}


export default new TempoTravellerBusDAO();
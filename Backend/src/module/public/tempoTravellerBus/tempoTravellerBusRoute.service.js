import tempoTravellerBusDao from "../../../dao/tempoTravellerBus.dao.js";



export const getAllTempoTravellerBusService = async () => {

    const vehicles =
        await tempoTravellerBusDao.findAll();

    return vehicles;

};




export const getTempoTravellerBusByIdService = async (id) => {

    const vehicle =
        await tempoTravellerBusDao.findById(id);


    if (!vehicle) {

        throw new Error(
            "Vehicle not found"
        );

    }


    return vehicle;

};
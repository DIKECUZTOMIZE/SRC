import airportTransferDao from "../../../dao/airportTransfer.dao.js";

export const getAllAirportTransferService = async () => {
    const filter = {
        category: "Airport Transfer",
        status: "Available",
    };

    return await airportTransferDao.getAllCarsDao(filter);
};

// export const getAirportTransferByIdService = async (id) => {
//   return await airportTransferDao.getCarByIdDao(id);
// };
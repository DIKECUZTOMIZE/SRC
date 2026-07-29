import { StatusCodes } from "http-status-codes";

import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import { getAllPremiumCarsService } from "./premiumWithCar.service.js";

export const getAllPremiumCars = async (req, res) => {

    const vehicles = await getAllPremiumCarsService();
    console.log('ram')
    return buildSuccessResponse(
        res,
        "Premium cars fetched successfully",
        StatusCodes.OK,
        vehicles
    );
};

// export const getPremiumCarById = async (req, res) => {

//     const vehicle = await getPremiumCarByIdService(req.params.id);

//     return buildSuccessResponse(
//         res,
//         "Premium car fetched successfully",
//         StatusCodes.OK,
//         vehicle
//     );
// };
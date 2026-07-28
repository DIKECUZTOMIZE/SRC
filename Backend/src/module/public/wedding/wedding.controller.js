import { StatusCodes } from "http-status-codes";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import { getAllWeddingCarsService } from "./wedding.service.js";

export const getAllWeddingCars = async (req, res) => {

    const vehicles = await getAllWeddingCarsService();

    return buildSuccessResponse(
        res,
        "Wedding cars fetched successfully",
        StatusCodes.OK,
        vehicles
    );
};

// export const getWeddingCarById = async (req, res) => {

//     const vehicle = await getWeddingCarByIdService(req.params.id);

//     return buildSuccessResponse(
//         res,
//         "Wedding car fetched successfully",
//         StatusCodes.OK,
//         vehicle
//     );
// };
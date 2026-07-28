import { StatusCodes } from "http-status-codes";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import {getAllAirportTransferService} from './airportTransfer.service.js'

export const getAllAirportTransfer = async (req, res) => {
    const vehicles = await getAllAirportTransferService();

    return buildSuccessResponse(
        res,
        "Airport Transfer vehicles fetched successfully",
        StatusCodes.OK,
        vehicles
    );
};

// export const getAirportTransferById = async (req, res) => {
//   const vehicle = await getAirportTransferByIdService(req.params.id);

//   return buildSuccessResponse(
//     res,
//     "Airport Transfer vehicle fetched successfully",
//     StatusCodes.OK,
//     vehicle
//   );
// };
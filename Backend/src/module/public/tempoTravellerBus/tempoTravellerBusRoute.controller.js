




// GET ALL

import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import { getAllTempoTravellerBusService } from "./tempoTravellerBusRoute.service.js";

export const getAllTempoTravellerBus = async (req, res) => {


    const data =
        await getAllTempoTravellerBusService();


    return buildSuccessResponse(
        res,
        "Tempo Traveller & Bus fetched successfully",
        200,
        data
    );

};





// GET DETAILS

export const getTempoTravellerBusById = async (req, res) => {


    const data =
        await getTempoTravellerBusByIdService(
            req.params.id
        );


    return buildSuccessResponse(
        res,
        "Vehicle details fetched successfully",
        200,
        data
    );

};
import { StatusCodes } from "http-status-codes";
import { nanoid } from "nanoid";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import { createAirportTransferBookingService, getAllAirportTransferService } from './airportTransfer.service.js'

export const getAllAirportTransfer = async (req, res) => {

    const vehicles = await getAllAirportTransferService();

    return buildSuccessResponse(
        res,
        "Airport Transfer vehicles fetched successfully",
        StatusCodes.OK,
        vehicles
    );
};


// Airport Transfer Controller
export const createAirportTransferBooking = async (req, res) => {

    try {


        const bookingData = {

            ...req.body,

            bookingId: `AT-${nanoid(8)}`,

            user: req.user?.userId || null

        };



        const booking =
            await createAirportTransferBookingService(
                bookingData
            );



        return buildSuccessResponse(
            res,
            "Airport transfer booking created successfully",
            StatusCodes.CREATED,
            booking
        );



    } catch (error) {

        console.error(error);


        return res.status(500).json({

            success: false,

            message: error.message

        });


    }



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
import { StatusCodes } from "http-status-codes";
import { nanoid } from "nanoid";
import { getAllWeddingCarsService } from "./wedding.service.js";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";

export const getAllWeddingCars = async (req, res) => {

    const vehicles = await getAllWeddingCarsService();

    return buildSuccessResponse(
        res,
        "Wedding cars fetched successfully",
        StatusCodes.OK,
        vehicles
    );
};


export const createWeddingCarBooking = async (req, res) => {


    try {


        const bookingData = {


            ...req.body,


            bookingId: `WC-${nanoid(8)}`,


            user: req.user?.userId || null,


        };



        const booking =
            await createWeddingCarBookingService(bookingData);




        return buildSuccessResponse(

            res,

            "Wedding car booking created successfully",

            StatusCodes.CREATED,

            booking

        );



    } catch (error) {


        console.error(
            "Wedding Car Booking Error:",
            error
        );



        return res.status(
            error.statusCode || 500
        ).json({

            success: false,

            message: error.message

        });


    }


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

import { nanoid } from "nanoid";
import { StatusCodes } from "http-status-codes";


import { createBookingService, getAllCarsService } from "./normalCarWithDriver.service.js";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";



export const getAllCarsController = async (req, res) => {

    const cars = await getAllCarsService();

    return buildSuccessResponse(res, 'Cars fetched successfully', StatusCodes.OK, cars)
};


// Create Driver Booking
export const createDriverBooking = async (req, res) => {


    try {


        const bookingData = {

            ...req.body,


            bookingId: `CD-${nanoid(8)}`,


            user: req.user?.userId || null,

        };



        const booking =
            await createDriverBookingService(bookingData);



        return buildSuccessResponse(

            res,

            "Car with driver booking created successfully",

            StatusCodes.CREATED,

            booking

        );



    } catch (error) {


        console.error(
            "Driver Booking Error:",
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
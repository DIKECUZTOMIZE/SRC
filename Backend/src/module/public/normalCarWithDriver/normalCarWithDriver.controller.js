
import { nanoid } from "nanoid";
import { StatusCodes } from "http-status-codes";
 
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import { createBookingService } from "./normalCarWithDriver.service.js";

// Create Driver Booking
export const createBooking = async (req, res) => {
    console.log('rbjhgbj')
    try {

        // data add karna hota multiple esa lena ho tu object banata hei
        const bookingData = {
            ...req.body,
            bookingId: `DRV-${nanoid(8)}`,
            user: req.user?.userId || null,
        };

        // service meh object veja
        const booking = await createBookingService(bookingData);

        // response veja
        return buildSuccessResponse(
            res,
            "Driver booking created successfully",
            StatusCodes.CREATED,
            booking
        );
    } catch (error) {
        console.error("createBooking:", error);

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
        });
    }
};
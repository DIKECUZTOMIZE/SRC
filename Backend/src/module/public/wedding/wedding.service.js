import weddingDao from "../../../dao/wedding.dao.js";
import AddCarModel from "../../../model/carAdd.model.js";
import { calculateWeddingBookingAmount } from "../../../shared/utils/calculateWeddingBookingAmount.js";
import { getIO } from "../../../socket/server.socket.js";



export const getAllWeddingCarsService = async () => {

    const filter = {
        category: "Wedding Car",
        status: "Available",
    };

    return await weddingDao.findAll(filter);
};



// CREATE WEDDING BOOKING
export const createWeddingCarBookingService = async (data) => {


    // 1. Find Vehicle

    const car = await AddCarModel.findById(
        data.vehicleId
    );


    if (!car) {

        throw new Error(
            "Car not found"
        );

    }





    // 2. Vehicle Snapshot

    data.vehicle = {

        brand: car.brand,

        model: car.model,

        classification: car.classification,

        fuel: car.fuel,

        transmission: car.transmission,

        seats: car.seats,

        image: car.image,

        pricePerDay: car.pricePerDay || 0

    };







    // 3. Calculate Amount

    const calculation =
        calculateWeddingBookingAmount({

            pricePerDay:
                car.pricePerDay || 0,


            totalDays:
                data.bookingDuration?.totalDays || 1,


            decorationPrice:
                data.decoration?.decorationPrice || 0,


            driverCharge:
                data.driver?.totalCharge || 0,


            deliveryCharge:
                data.deliveryDetails?.charge || 0,

        });







    // 4. Pricing Snapshot

    data.pricing =
        calculation.pricing;



    data.totalAmount =
        calculation.totalAmount;







    // 5. Create Booking

    const booking =
        await weddingDao.create(data);







    // 6. Socket Notification

    const io = getIO();


    io.to("admins").emit(

        "new-wedding-booking",

        booking

    );







    return booking;


};
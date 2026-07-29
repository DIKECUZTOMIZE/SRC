import weddingDao from "../../../dao/wedding.dao.js";
import AddCarModel from "../../../model/carAdd.model.js";
import { getIO } from "../../../socket/server.socket.js";



export const getAllWeddingCarsService = async () => {

    const filter = {
        category: "Wedding Car",
        status: "Available",
    };


    export const createWeddingCarBookingService = async (data) => {


        const car =
            await AddCarModel.findById(
                data.vehicleId
            );



        if (!car) {

            throw new Error(
                "Car not found"
            );

        }




        // Vehicle Snapshot


        data.vehicle = {

            brand: car.brand,

            model: car.model,

            classification:
                car.classification,

            fuel: car.fuel,

            transmission:
                car.transmission,

            seats: car.seats,

            image: car.image,

            pricePerDay:
                car.pricePerDay

        };







        // Pricing


        data.pricing = {


            carPrice:
                car.pricePerDay *
                (data.bookingDuration?.totalDays || 1),


            decorationPrice:
                data.decoration?.decorationPrice || 0,


            driverCharge:
                data.driver?.totalCharge || 0,


            deliveryCharge:
                data.deliveryDetails?.charge || 0


        };





        data.totalAmount =

            data.pricing.carPrice +

            data.pricing.decorationPrice +

            data.pricing.driverCharge +

            data.pricing.deliveryCharge;






        const booking =
            await weddingDao.create(data);




        const io = getIO();



        io.to("admins").emit(

            "new-wedding-booking",

            booking

        );



        return booking;


    };
    return await weddingDao.findAll(filter);
};
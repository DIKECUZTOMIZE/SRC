import airportTransferDao from "../../../dao/airportTransfer.dao.js";
import AddCarModel from "../../../model/carAdd.model.js";
import { calculateAirportAmount } from "../../../shared/utils/calculateAirportAmount.js";
import { getIO } from "../../../socket/server.socket.js";

export const getAllAirportTransferService = async () => {
    const filter = {
        category: "Airport Transfer",
        status: "Available",
    };

    return await airportTransferDao.findAll(filter);
};




export const createAirportTransferBookingService = async (data) => {


    const car =
        await AddCarModel.findById(
            data.vehicleId
        );



    if (!car) {

        throw new Error(
            "Vehicle not found"
        );

    }



    // vehicle snapshot

    data.vehicle = {


        brand: car.brand,

        model: car.model,

        classification: car.classification,

        fuel: car.fuel,

        transmission: car.transmission,

        seats: car.seats,

        image: car.image,

        basePrice: car.price || 0


    };




    // calculate price


    const calculation =
        calculateAirportAmount({


            tripType: data.tripType,


            pickupPrice:
                car.airportPickupPrice || 0,


            dropPrice:
                car.airportDropPrice || 0,


            roundTripPrice:
                car.roundTripPrice || 0


        });



    data.pricing = {


        pickupPrice:
            car.airportPickupPrice || 0,


        dropPrice:
            car.airportDropPrice || 0,


        roundTripPrice:
            car.roundTripPrice || 0,


        ...calculation


    };



    // save


    const booking =
        await airportTransferDao.create(
            data
        );



    // socket

    const io = getIO();


    io.to("admins")
        .emit(
            "new-airport-booking",
            booking
        );



    return booking;


};
// export const getAirportTransferByIdService = async (id) => {
//   return await airportTransferDao.getCarByIdDao(id);
// };
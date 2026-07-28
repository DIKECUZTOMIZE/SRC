

import normalWithDriver from "../../../dao/normalWithDriver.js";
import AddCarModel from "../../../model/carAdd.model.js";
import { calculateBookingAmount } from "../../../shared/utils/calculateBookingAmount.js";
import { getIO } from "../../../socket/server.socket.js";

export const createBookingService = async (data) => {

    // Check Car
    const car = await AddCarModel.findById(data.vehicleId);

    if (!car) {
        throw new Error("Car not found");
    }

    // Vehicle Snapshot
    data.vehicle = {
        brand: car.brand,
        model: car.model,
        fuel: car.fuel,
        transmission: car.transmission,
        seats: car.seats,
        classification: car.classification,
        image: car.image,
        vehicleNumber: car.vehicleNumber || "",
        pricePerHour: car.pricePerHour,
        pricePerDay: car.pricePerDay,
    };

    // Pricing Snapshot
    data.pricing = {
        carHourRate: car.pricePerHour,
        carDayRate: car.pricePerDay,

        // Fixed Driver Charge
        driverDayRate: 500,

        // Change later from utils
        extraHourRate: 300,
    };


    // Price Calculation
    const calculation = calculateBookingAmount({
        bookingType: data.bookingType,
        quantity: data.quantity,
        vehicle,
    });

    Object.assign(data, calculation);
    // Save Booking
    const booking = await normalWithDriver.create(data);

    // Notify Admin
    const io = getIO();

    io.to("admins").emit(
        "new-driver-booking",
        booking
    );

    return booking;
};
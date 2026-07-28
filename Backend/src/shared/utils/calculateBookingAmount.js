export const calculateBookingAmount = ({
    bookingType,
    quantity,
    vehicle,
}) => {

    const carHourRate = vehicle.pricePerHour;
    const carDayRate = vehicle.pricePerDay;

    // Fixed Driver Day Charge
    const driverDayRate = 500;

    // Extra Hour Charge
    const extraHourRate = Math.round(carHourRate * 0.5);

    let carAmount = 0;
    let driverAmount = 0;
    let extraCharge = 0;

    if (bookingType === "hour") {

        carAmount = quantity * carHourRate;

        driverAmount = driverDayRate;

    } else {

        carAmount = quantity * carDayRate;

        driverAmount = quantity * driverDayRate;
    }

    return {
        pricing: {
            carHourRate,
            carDayRate,
            driverDayRate,
            extraHourRate,
        },
        carAmount,
        driverAmount,
        extraCharge,
        totalAmount:
            carAmount +
            driverAmount +
            extraCharge,
    };
};
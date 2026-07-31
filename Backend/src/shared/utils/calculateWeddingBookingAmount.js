export const calculateWeddingBookingAmount = ({
    pricePerDay = 0,
    totalDays = 1,
    decorationPrice = 0,
    driverCharge = 0,
    deliveryCharge = 0,
}) => {


    const carPrice =
        pricePerDay * totalDays;



    const totalAmount =
        carPrice +
        decorationPrice +
        driverCharge +
        deliveryCharge;



    return {

        pricing: {

            carPrice,

            decorationPrice,

            driverCharge,

            deliveryCharge,

        },


        totalAmount

    };


};
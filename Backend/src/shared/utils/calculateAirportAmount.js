export const calculateAirportAmount = ({
    tripType,
    pickupPrice = 0,
    dropPrice = 0,
    roundTripPrice = 0,
}) => {


    let baseAmount = 0;


    switch(tripType){


        case "Airport Pickup":

            baseAmount = pickupPrice;

            break;



        case "Airport Drop":

            baseAmount = dropPrice;

            break;



        case "Round Trip":

            baseAmount = roundTripPrice;

            break;


        default:

            throw new Error(
                "Invalid trip type"
            );
    }



    const extraCharge = 0;


    const totalAmount =
        baseAmount + extraCharge;



    return {


        baseAmount,


        extraCharge,


        totalAmount

    };


};
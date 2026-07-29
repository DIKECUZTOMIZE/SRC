import mongoose from "mongoose";


const airportTransferBookingSchema = new mongoose.Schema(
    {

        // BOOKING INFO

        bookingId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },


        serviceType: {
            type: String,
            default: "Airport Transfer",
        },



        // LOGIN USER

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,

        },



        // VEHICLE SNAPSHOT
        vehicleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
            required: true,
            index: true
        },
        vehicle: {
            brand: {
                type: String,
                required: true,
            },

            model: {
                type: String,
                required: true,
            },

            classification: {
                type: String,
                required: true,
            },

            fuel: {
                type: String,
                default: "",
            },

            transmission: {
                type: String,
                default: "",
            },

            seats: {
                type: Number,
                default: 0,
            },

            image: {
                type: String,
                default: "",
            },

            basePrice: {
                type: Number,
                default: 0,
            }
        },

        // TRIP DETAILS
        tripType: {
            type: String,
            enum: [
                "Airport Pickup",
                "Airport Drop",
                "Round Trip"
            ],
            required: true,
        },
        pickupLocation: {
            type: String,
            required: true,
            trim: true,
        },
        dropLocation: {
            type: String,
            required: true,
            trim: true,
        },

        // FLIGHT DETAILS OPTIONAL
        flightDetails: {

            airlineName: {
                type: String,
                default: "",
            },

            flightNumber: {
                type: String,
                default: "",
            },

            arrivalTime: {
                type: String,
                default: "",
            },
            departureTime: {
                type: String,
                default: "",
            }
        },

        // DATE TIME
        pickupDate: {
            type: Date,
            required: true,
        },

        pickupTime: {
            type: String,
            required: true,
        },

        timePeriod: {
            type: String,
            enum: [
                "AM",
                "PM"
            ],
            required: true,
        },

        // CUSTOMER
        customer: {
            name: {
                type: String,
                required: true,
                trim: true,
            },
            mobile: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
                lowercase: true,
            },


            whatsapp: {
                type: String,
                default: "",
            }


        },

        // ADDRESS
        address: {
            currentAddress: {
                type: String,
                required: true,
            },

            city: {
                type: String,
                required: true,
            },

            state: {
                type: String,
                required: true,
            },

            pinCode: {
                type: String,
                required: true,
            }

        },

        // PRICE
        pricing: {

            pickupPrice: {
                type: Number,
                default: 0,
            },

            dropPrice: {
                type: Number,
                default: 0,
            },

            roundTripPrice: {
                type: Number,
                default: 0,
            },

            baseAmount: {
                type: Number,
                required: true,
            },

            extraCharge: {
                type: Number,
                default: 0,
            },

            totalAmount: {
                type: Number,
                required: true,
            }

        },

        // PAYMENT
        paymentMethod: {
            type: String,
            enum: [
                "Cash",
                "Online"
            ],
            required: true,
        },
        paymentStatus: {
            type: String,
            enum: [
                "Pending",
                "Paid",
                "Failed",
                "Refunded"
            ],
            default: "Pending",
        },

        // DRIVER ASSIGNMENT
        assignedDriver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
            default: null,
        },
        driver: {
            name: {
                type: String,
                default: "",
            },


            mobile: {
                type: String,
                default: "",
            },


            image: {
                type: String,
                default: "",
            }

        },

        // BOOKING STATUS
        bookingStatus: {
            type: String,
            enum: [
                "Pending",
                "Approved",
                "Rejected",
                "Cancelled",
                "Completed"
            ],
            default: "Pending",

        },

        // RIDE STATUS
        rideStatus: {
            type: String,
            enum: [
                "Not Started",
                "Ongoing",
                "Completed",
                "Cancelled"
            ],
            default: "Not Started",
        },

        // ADMIN NOTE
        note: {
            type: String,
            default: "",
        },

        // CANCELLATION POLICY
        cancellationPolicy: {

            allowedBeforeHours: {
                type: Number,
                default: 6,
                // Pickup se 6 hours pehle tak free cancellation
            },


            cancellationCharge: {
                type: Number,
                default: 500,
                // Late cancellation charge
            },


            cancellationChargeType: {

                type: String,

                enum: [
                    "Fixed",
                    "Percentage"
                ],

                default: "Fixed",

            }

        },

        // CANCELLATION DETAILS
        cancelReason: {

            type: String,

            default: "",

        },
        cancelledBy: {

            type: String,

            enum: [

                "Customer",
                "Admin"

            ],

            default: null,

        },
        cancelledAt: {

            type: Date,

            default: null,

        },
        cancelAmount: {

            type: Number,

            default: 0,

        },
        refundAmount: {

            type: Number,

            default: 0,

        },

    },
    {
        timestamps: true
    });




airportTransferBookingSchema.index({
    user: 1,
    createdAt: -1
});

airportTransferBookingSchema.index({
    bookingStatus: 1
});

airportTransferBookingSchema.index({
    rideStatus: 1
});


const AirportTransferBooking = mongoose.model(
    "AirportTransferBooking",
    airportTransferBookingSchema
);


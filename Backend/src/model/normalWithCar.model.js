import mongoose from "mongoose";

const driverBookingSchema = new mongoose.Schema(
    {

        // BOOKING INFORMATION
        bookingId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },

        serviceType: {
            type: String,
            default: "Car With Driver",
        },


        // CUSTOMER LOGIN USER
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
            index: true,
        },


        // VEHICLE INFORMATION
        vehicleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
            required: true,
            index: true,
        },


        // Vehicle Snapshot
        vehicle: {

            brand: {
                type: String,
                required: true,
            },

            model: {
                type: String,
                required: true,
            },

            fuel: {
                type: String,
                required: true,
            },

            transmission: {
                type: String,
                required: true,
            },

            seats: {
                type: Number,
                required: true,
            },

            classification: {
                type: String,
                required: true,
            },

            image: {
                type: String,
                default: "",
            },

            vehicleNumber: {
                type: String,
                required: true,
            },

            pricePerHour: {
                type: Number,
                default: 0,
            },

            pricePerDay: {
                type: Number,
                default: 0,
            },
        },


        // BOOKING DETAILS

        bookingType: {
            type: String,
            enum: [
                "hour",
                "day"
            ],
            required: true,
        },


        quantity: {
            type: Number,
            required: true,
            min: 1,
        },




        // Trip details
        tripType: {
            type: String,
            enum: [
                "Local",
                "Outstation"
            ],
            required: true,
        },


        pickupLocation: {
            type: String,
            required: true,
            trim: true,
        },


        destination: {
            type: String,
            required: true,
            trim: true,
        },


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



        // package details
        packageDetails: {

            includedHours: {
                type: Number,
                default: 7,
            },

            graceMinutes: {
                type: Number,
                default: 30,
            },

            billingRule: {
                type: String,
                enum: [
                    "Extra Hour",
                    "Next Day"
                ],
                default: "Extra Hour",
            },


        },
        // CUSTOMER DETAILS

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
                trim: true,
            },

            whatsapp: {
                type: String,
                default: "",
            },
        },



        // CUSTOMER ADDRESS

        address: {

            currentAddress: {
                type: String,
                required: true,
            },

            state: {
                type: String,
                required: true,
            },

            city: {
                type: String,
                required: true,
            },

            policeStation: {
                type: String,
                default: "",
            },

            pinCode: {
                type: String,
                required: true,
            },
        },




        // PRICE DETAILS
        pricing: {
            carHourRate: {
                type: Number,
                default: 0,
            },

            carDayRate: {
                type: Number,
                default: 0,
            },

            driverDayRate: {
                type: Number,
                default: 0,
            },

            extraHourRate: {
                type: Number,
                default: 0,
            }

        },
        // Calculated Amounts
        carAmount: {
            type: Number,
            required: true,
        },

        driverAmount: {
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
            },

        },


        assignedAt: {
            type: Date,
            default: null,
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
            index: true
        },




        // ADMIN BOOKING STATUS

        bookingStatus: {
            type: String,
            enum: [
                "Pending",
                "Approved",
                "Rejected",
                "Completed",
                "Cancelled"
            ],
            default: "Pending",
            index: true,
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
            },

            cancellationCharge: {
                type: Number,
                default: 500,
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


        // CANCELLATION

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
        timestamps: true,
    }
);



driverBookingSchema.index({
    user: 1,
    createdAt: -1
});

driverBookingSchema.index({
    assignedDriver: 1
});

driverBookingSchema.index({
    bookingStatus: 1
});

driverBookingSchema.index({
    rideStatus: 1
});


const DriverBookingModel = mongoose.model(
    "DriverBooking",
    driverBookingSchema
);


export default DriverBookingModel;
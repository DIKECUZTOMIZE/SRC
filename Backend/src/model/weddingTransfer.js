import mongoose from "mongoose";


const weddingCarBookingSchema = new mongoose.Schema(
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
            default: "Wedding Car",
        },


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
        },


        vehicle: {

            brand: String,

            model: String,

            classification: String,

            fuel: String,

            transmission: String,

            seats: Number,

            image: String,

            pricePerDay: Number,

        },



        // BOOKING PURPOSE


        bookingFor: {
            type: String,
            enum: [
                "Wedding",
                "Engagement",
                "Reception",
                "Pre Wedding Shoot",
                "Event",
                "Other"
            ],
            required: true,
        },


        customEventName: {
            type: String,
            default: "",
        },





        // EVENT DETAILS


        eventDetails: {


            eventDate: {
                type: Date,
                required: true,
            },


            eventTime: {
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


            venueName: {
                type: String,
                required: true,
            },


            venueAddress: {
                type: String,
                required: true,
            },


            pickupLocation: {
                type: String,
                required: true,
            },


            dropLocation: {
                type: String,
                required: true,
            }

        },






        // DECORATION


        decoration: {


            decorationType: {
                type: String,
                enum: [
                    "Our Decoration",
                    "Custom Decoration",

                ],
                required: true,
            },



            decorationId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Decoration",
                default: null,
            },


            decorationName: {
                type: String,
                default: "",
            },


            decorationImage: {
                type: String,
                default: "",
            },


            decorationPrice: {
                type: Number,
                default: 0,
            },



            customDecoration: {


                images: [String],


                note: {
                    type: String,
                    default: "",
                }

            }


        },

        // booking duration
        bookingDuration: {

            bookingType: {
                type: String,
                enum: [
                    "One Day",
                    "Multiple Days"
                ],
                default: "One Day",
            },

            totalDays: {
                type: Number,
                default: 1,
                min: 1,
            }

        },




        // DRIVER OPTION


        driverRequired: {
            type: String,
            enum: [
                "Yes",
                "No"
            ],
            default: "No",
        },

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


            // Driver kitne din ke liye chahiye

            requiredDays: {
                type: Number,
                default: 0,
            },


            // Ek din ka driver charge

            chargePerDay: {
                type: Number,
                default: 0,
            },


            // Total driver charge

            totalCharge: {
                type: Number,
                default: 0,
            }

        },







        // DELIVERY OPTION


        deliveryType: {
            type: String,
            enum: [
                "Self Pickup",
                "Home Delivery"
            ],
            default: "Self Pickup",
        },


        deliveryDetails: {


            address: {
                type: String,
                default: "",
            },


            charge: {
                type: Number,
                default: 0,
            }

        },







        // CUSTOMER DETAILS


        customer: {


            name: {
                type: String,
                required: true,
            },


            mobile: {
                type: String,
                required: true,
            },


            email: {
                type: String,
                default: "",
            },


            whatsapp: {
                type: String,
                default: "",
            }

        },








        // ADDRESS


        address: {


            currentAddress: String,

            city: String,

            state: String,

            pinCode: String,

        },









        // PRICE


        pricing: {


            carPrice: {
                type: Number,
                default: 0,
            },


            decorationPrice: {
                type: Number,
                default: 0,
            },


            driverCharge: {
                type: Number,
                default: 0,
            },


            deliveryCharge: {
                type: Number,
                default: 0,
            }

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
                default: 24,
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
        }



    },
    {
        timestamps: true
    });





weddingCarBookingSchema.index({
    user: 1,
    createdAt: -1
});


weddingCarBookingSchema.index({
    bookingStatus: 1
});

weddingCarBookingSchema.index({
    rideStatus: 1
});



const WeddingCarBooking = mongoose.model(
    "WeddingCarBooking",
    weddingCarBookingSchema
);



export default WeddingCarBooking;
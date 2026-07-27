import mongoose from "mongoose";

const driverBookingSchema = new mongoose.Schema(
    {
        // =====================================================
        // BOOKING INFORMATION
        // =====================================================
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

        // =====================================================
        // CUSTOMER (LOGIN USER)
        // =====================================================
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
            index: true,
        },

        // =====================================================
        // VEHICLE INFORMATION
        // =====================================================
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

            pricePerHour: {
                type: Number,
                required: true,
            },

            pricePerDay: {
                type: Number,
                required: true,
            },
        },

        // =====================================================
        // BOOKING DETAILS
        // =====================================================
        bookingType: {
            type: String,
            enum: ["hour", "day"],
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
        },

        tripType: {
            type: String,
            enum: ["Local", "Outstation"],
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
            enum: ["AM", "PM"],
            required: true,
        },

        // =====================================================
        // CUSTOMER DETAILS
        // =====================================================
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
                trim: true,
                lowercase: true,
            },

            whatsapp: {
                type: String,
                default: "",
            },
        },

        // =====================================================
        // CUSTOMER ADDRESS
        // =====================================================
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

        // =====================================================
        // BOOKING AMOUNT
        // =====================================================
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
        },

        // =====================================================
        // PAYMENT INFORMATION
        // =====================================================
        paymentMethod: {
            type: String,
            enum: ["Cash", "Online"],
            required: true,
        },

        paymentStatus: {
            type: String,
            enum: ["Pending", "Paid", "Failed", "Refunded"],
            default: "Pending",
        },

        // =====================================================
        // DRIVER ASSIGNMENT
        // =====================================================
        assignedDriver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
            default: null,
        },

        // Driver Snapshot
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

            licenseNumber: {
                type: String,
                default: "",
            },
        },


        // =====================================================
        // BOOKING STATUS
        // =====================================================
        bookingStatus: {
            type: String,
            enum: [
                "Pending",
                "Approved",
                "Rejected",
                "Completed",
                "Cancelled",
            ],
            default: "Pending",
            index: true,
        },

        adminRemark: {
            type: String,
            default: "",
        },

        acceptedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        acceptedAt: {
            type: Date,
            default: null,
        },

        // =====================================================
        // CANCELLATION DETAILS
        // =====================================================
        cancelReason: {
            type: String,
            default: "",
        },

        cancelledBy: {
            type: String,
            enum: ["Customer", "Admin"],
            default: null,
        },

        cancelledAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const DriverBookingModel = mongoose.model(
    "DriverBooking",
    driverBookingSchema
);

export default DriverBookingModel;
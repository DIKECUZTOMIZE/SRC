import mongoose from "mongoose";

const carWithDriverBookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    vehicle: {
      vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true,
      },

      brand: String,
      model: String,

      pricePerHour: Number,
      pricePerDay: Number,
      driverChargePerDay: Number,
    },

    trip: {
      serviceType: {
        type: String,
        enum: ["hourly", "daily"],
        required: true,
      },

      hours: {
        type: Number,
        default: null,
      },

      days: {
        type: Number,
        default: null,
      },

      pickupDate: {
        type: Date,
        required: true,
      },

      pickupTime: {
        type: String,
        required: true,
      },

      pickupPeriod: {
        type: String,
        enum: ["AM", "PM"],
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
    },

    customer: {
      fullName: {
        type: String,
        required: true,
        trim: true,
      },

      mobile: {
        type: String,
        required: true,
        trim: true,
      },

      whatsapp: {
        type: String,
        trim: true,
      },

      email: {
        type: String,
        lowercase: true,
        trim: true,
      },
    },

    address: {
      fullAddress: {
        type: String,
        required: true,
      },

      landmark: String,

      district: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },

      policeStation: {
        type: String,
        required: true,
      },

      state: {
        type: String,
        required: true,
      },

      pincode: {
        type: String,
        required: true,
      },
    },

    payment: {
      method: {
        type: String,
        enum: ["cash", "online"],
        required: true,
      },

      paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed", "refunded"],
        default: "pending",
      },

      transactionId: String,
    },

    pricing: {
      rentalPrice: {
        type: Number,
        default: 0,
      },

      driverCharge: {
        type: Number,
        default: 0,
      },

      totalAmount: {
        type: Number,
        default: 0,
      },
    },

    bookingStatus: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "driver_assigned",
        "ongoing",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },

    notes: {
      type: String,
      default: "",
    },

    adminRemark: {
      type: String,
      default: "",
    },

    driver: {
      driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver",
        default: null,
      },

      assignedAt: Date,
    },
  },
  {
    timestamps: true,
  }
);



const CarWithDriverModel = mongoose.model(
  "CarWithDriverBooking",
  carWithDriverBookingSchema
);



export default CarWithDriverModel;
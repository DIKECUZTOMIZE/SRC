import mongoose from "mongoose";

const selfDriveBookingSchema = new mongoose.Schema(
  {
    // Booking Information
    bookingId: {
      type: String,
      required: true,
      unique: true
    }

    ,
    serviceType: {
      type: String,
      default: "Self Drive",
    },

    // Customer (Login User)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },

    // Vehicle
    // vehicleId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Vehicle",
    //   required: true,
    //   index: true,
    // },
    vehicleId: {
      type: String,
      default: "",
      index: true,
    },
    // Vehicle Snapshot
    name: {
      type: String,
      required: true,
      trim: true,
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

    // Booking
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
    // Delivery
    deliveryType: {
      type: String,
      enum: ["Pickup", "Drop"],
      required: true,
    },

    deliveryAddress: {
      type: String,
      default: "",
    },

    distance: {
      type: Number,
      default: 0,
    },


    // Customer Details
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
        required: true,
      },

      whatsapp: {
        type: String,
        default: "",
      },

      currentAddress: {
        type: String,
        required: true,
      },
    },

    // Address
    address: {
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

    // Price
    baseAmount: {
      type: Number,
      required: true,
    },

    deliveryCharge: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    // Payment
    paymentMethod: {
      type: String,
      enum: ["Cash", "Online"],
      required: true,
    },

    // Booking Status
    bookingStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
      index: true,
    },

    // Admin Remark
    adminRemark: {
      type: String,
      default: "",
    },

    // Admin who accepted
    acceptedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    acceptedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const SelfDriveBooking = mongoose.model(
  "SelfDriveBooking",
  selfDriveBookingSchema
);

export default SelfDriveBooking;
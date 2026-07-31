import mongoose from "mongoose";

const selfDriveBookingSchema = new mongoose.Schema(
  {
    // Booking Information
    bookingId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    serviceType: {
      type: String,
      default: "Self Drive",
    },

    // Customer (Login User)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
     
    },


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

      classification: {
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

      image: {
        type: String,
        default: "",
      },

      vehicleNumber: {
        type: String,
        default: "",
      },

      pricePerHour: {
        type: Number,
        default: 0,
      },

      pricePerDay: {
        type: Number,
        default: 0,
      }

    },

    // package 
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
      }

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
    delivery: {

      type: {
        type: String,
        enum: [
          "Pickup",
          "Drop"
        ],
        required: true,
      },

      address: {
        type: String,
        default: "",
      },

      distance: {
        type: Number,
        default: 0,
      },

      charge: {
        type: Number,
        default: 0,
      }

    },


    // Customer Details
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

      currentAddress: {
        type: String,
        required: true,
        trim: true,
      },
    },

    // Address
    address: {
      state: {
        type: String,
        required: true,
        trim: true,
      },

      city: {
        type: String,
        required: true,
        trim: true,
      },

      pinCode: {
        type: String,
        required: true,
        trim: true,
      },
      policeStation: {
        type: String,
        default: "",
      },


    },


    // pricing
pricing: {

  hourRate: {
    type: Number,
    default: 0,
  },

  dayRate: {
    type: Number,
    default: 0,
  },

  extraHourRate: {
    type: Number,
    default: 0,
  },

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
},

    // Payment
    paymentMethod: {
      type: String,
      enum: ["Cash", "Online"],
      required: true,
    },

    // payment status
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

    // rideStatus
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


    note: {
      type: String,
      default: "",
    },
    // Booking Status
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
     
    },



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

    }, cancelReason: {
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
selfDriveBookingSchema.index({
  user: 1,
  createdAt: -1
});

selfDriveBookingSchema.index({
  bookingStatus: 1
});

selfDriveBookingSchema.index({
  rideStatus: 1
});
const SelfDriveBooking = mongoose.model(
  "SelfDriveBooking",
  selfDriveBookingSchema
);

export default SelfDriveBooking;
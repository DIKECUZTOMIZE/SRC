import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    // CATEGORY
    category: {
      type: String,
      enum: [
        "Self Drive",
        "With Driver",
        "Premium Car",
        "Wedding Car",
        "Airport Transfer",
        "Tempo Traveller & Bus",
      ],
      required: true,
      trim: true,
    },


    // TEMPO / BUS TYPE
    vehicleType: {
      type: String,
      enum: [
        "Tempo Traveller",
        "Bus",
      ],
      default: undefined,
    },


    // VEHICLE DETAILS

    brand: {
      type: String,
      required: true,
      trim: true,
    },


    model: {
      type: String,
      required: true,
      trim: true,
    },


    classification: {
      type: String,
      enum: [

        // Normal Car
        "Hatchback",
        "Sedan",
        "SUV",
        "MUV",
        "Luxury",
        "Van",
        "Pickup",
        "Mini Truck",

        // Tempo
        "Tempo Traveller",

        // Bus
        "Mini Bus",
        "Luxury Bus",
        "Sleeper Bus",
        "Volvo Bus",

      ],
      required: true,
    },



    fuel: {
      type: String,
      enum: [
        "Petrol",
        "Diesel",
        "CNG",
        "Electric",
      ],
      required: false,
    },


    transmission: {
      type: String,
      enum: [
        "Manual",
        "Automatic",
      ],
      required: false,
    },
    // AC TYPE
    // AC TYPE
    acType: {
      type: String,
      enum: [
        "AC",
        "Non AC",
      ],
      default: undefined,
    },

    seats: {
      type: Number,
      required: true,
      min: 1,
    },


    image: {
      type: String,
      default: "",
    },


    description: {
      type: String,
      required: true,
      trim: true,
    },



    // PRICING

    pricePerHour: {
      type: Number,
      default: 0,
      min: 0,
    },


    pricePerDay: {
      type: Number,
      default: 0,
      min: 0,
    },


    driverChargePerDay: {
      type: Number,
      default: 0,
      min: 0,
    },



    // PICKUP / MINI TRUCK

    loadingCapacity: {
      type: String,
      default: "",
      trim: true,
    },



    // AIRPORT

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



    // WEDDING

    showDecoration: {
      type: Boolean,
      default: false,
    },


    decorationType: {
      type: String,
      enum: [
        "",
        "Simple Decoration",
        "Royal Flower",
        "Ribbon Decoration",
        "Premium Setup",
        "Customize",
      ],
      default: "",
    },


    decorationName: {
      type: String,
      default: "",
      trim: true,
    },


    decorationPrice: {
      type: Number,
      default: 0,
    },


    decorationImages: [
      {
        type: String,
      }
    ],



    // STATUS

    status: {
      type: String,
      enum: [
        "Available",
        "Reserved",
        "Booked",
        "Maintenance",
      ],
      default: "Available",
    },

  },
  {
    timestamps: true,
  });


const AddCarModel = mongoose.model(
  "AddCar",
  carSchema
);


export default AddCarModel;
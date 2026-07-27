import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            enum: [
                "Self Drive",
                "Cab",
                "Urbania",
                "Tours",
                "Safari",
                "Airport",
                "Wedding",
            ],
            required: true,
            trim: true,
        },

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
                "Hatchback",
                "Sedan",
                "SUV",
                "MUV",
                "Luxury",
                "Sports",
                "Van",
                "Traveller",
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
            required: true,
        },

        transmission: {
            type: String,
            enum: [
                "Manual",
                "Automatic",
            ],
            required: true,
        },

        seats: {
            type: Number,
            required: true,
            min: 2,
        },

        pricePerHour: {
            type: Number,
            required: true,
            min: 1,
        },

        pricePerDay: {
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
            minlength: 20,
        },

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
    }
);


const AddCarModel = mongoose.model(
    "AddCar",
    carSchema
);


export default AddCarModel;
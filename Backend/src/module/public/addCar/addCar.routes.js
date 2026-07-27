import express from "express";

import asyncHandler from "../../../shared/utils/asyncHandle.js";
import { authMiddleware, authorizationMiddleware } from "../../../middleware/auth.middleware.js";
import { createCar, deleteCar, getAllCars, getCarById, getCarsByCategory, getCategories, getSelfDriveCars, updateCar } from "./addCar.controller.js";

import { createCarValidation } from "../../../schema/createCarValidation.js";
import upload from "../../../middleware/multer.js";
import { validate } from "../../../validator/validate .js";


const router = express.Router();

// create add car
router.post(
    "/create-car",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    upload.single("image"),
    validate(createCarValidation),
    asyncHandler(createCar)
);



// Get All Cars
router.get(
    "/cars",
    authMiddleware,

    asyncHandler(getAllCars)
);


// Get Self Drive Cars
router.get(
    "/cars/self-drive",
    authMiddleware,

    asyncHandler(getSelfDriveCars)
);


// category list(selfDrive,drive with car,tour,)
router.get(
    "/categories",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(getCategories)
);


// category list(selfDrive -list)
router.get(
    "/categories/:category",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(getCarsByCategory)
);



// update single details
router.put(
    "/update-car/:id",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    upload.single("image"),
    validate(createCarValidation),
    asyncHandler(updateCar)
);

// delete card single data
router.delete(
    "/delete-car/:id",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(deleteCar)
);


// details page single
router.get(
    "/:id",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(getCarById)
);


export default router;
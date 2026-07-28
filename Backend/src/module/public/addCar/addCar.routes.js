import express from "express";

import asyncHandler from "../../../shared/utils/asyncHandle.js";

import {
    authMiddleware,
    authorizationMiddleware,
} from "../../../middleware/auth.middleware.js";

import {
    createCar,
    deleteCar,
    getAllCars,
    getCarById,
    getCarsByCategory,
    getCategories,
    getSelfDriveCars,
    updateCar,
} from "./addCar.controller.js";

import { createCarValidation } from "../../../schema/createCarValidation.js";
import upload from "../../../middleware/multer.js";
import { validate } from "../../../validator/validate .js";

const router = express.Router();

/* 
   CREATE VEHICLE
 */

router.post(
    "/create-car",
    authMiddleware,
    authorizationMiddleware("ADMIN"),

    upload.fields([
        {
            name: "image",
            maxCount: 1,
        },
        {
            name: "decorationImages",
            maxCount: 20,
        },
    ]),

    validate(createCarValidation),

    asyncHandler(createCar)
);

/* 
   GET ALL VEHICLES
 */

router.get(
    "/cars",
    authMiddleware,
    asyncHandler(getAllCars)
);

/* 
   SELF DRIVE VEHICLES
 */

router.get(
    "/cars/self-drive",
    authMiddleware,
    asyncHandler(getSelfDriveCars)
);

/* 
   CATEGORY LIST
 */

router.get(
    "/categories",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(getCategories)
);

/* 
   VEHICLES BY CATEGORY
 */

router.get(
    "/categories/:category",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(getCarsByCategory)
);

/* 
   SINGLE VEHICLE
 */

router.get(
    "/:id",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(getCarById)
);

/* 
   UPDATE VEHICLE
 */

router.put(
    "/update-car/:id",
    authMiddleware,
    authorizationMiddleware("ADMIN"),

    upload.fields([
        {
            name: "image",
            maxCount: 1,
        },
        {
            name: "decorationImages",
            maxCount: 20,
        },
    ]),

    validate(createCarValidation),

    asyncHandler(updateCar)
);

/* 
   DELETE VEHICLE
 */

router.delete(
    "/delete-car/:id",
    authMiddleware,
    authorizationMiddleware("ADMIN"),
    asyncHandler(deleteCar)
);

export default router;
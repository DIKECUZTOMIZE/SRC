import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";

import {
    createCarService,
    deleteCarService,
    getAllCarsService,
    getCarByIdService,
    getCarsByCategoryService,
    getCategoriesService,
    getSelfDriveCarsService,
    updateCarService,
} from "./addCar.service.js";

/* 
   CREATE VEHICLE
 */

export const createCar = async (req, res) => {
    const body = { ...req.body };

    // Main Vehicle Image
    if (req.files?.image?.length) {
        body.image = `/uploads/cars/${req.files.image[0].filename}`;
    }

    // Wedding Decoration Images
    if (req.files?.decorationImages?.length) {
        body.decorationImages = req.files.decorationImages.map(
            (file) => `/uploads/cars/${file.filename}`
        );
    }

    const data = await createCarService(body);

    return buildSuccessResponse(
        res,
        "Vehicle added successfully",
        201,
        data
    );
};

/* 
   CATEGORY LIST
 */

export const getCategories = async (req, res) => {
    const data = await getCategoriesService();

    return buildSuccessResponse(
        res,
        "Categories fetched successfully",
        200,
        data
    );
};

/* 
   VEHICLES BY CATEGORY
 */

export const getCarsByCategory = async (req, res) => {
    const { category } = req.params;

    const data = await getCarsByCategoryService(category);

    return buildSuccessResponse(
        res,
        "Vehicles fetched successfully",
        200,
        data
    );
};

/* 
   VEHICLE DETAILS
 */

export const getCarById = async (req, res) => {
    const data = await getCarByIdService(req.params.id);

    return buildSuccessResponse(
        res,
        "Vehicle details fetched successfully",
        200,
        data
    );
};

/* 
   UPDATE VEHICLE
 */

export const updateCar = async (req, res) => {
    const body = { ...req.body };

    // Main Vehicle Image
    if (req.files?.image?.length) {
        body.image = `/uploads/cars/${req.files.image[0].filename}`;
    }

    // Decoration Images
    if (req.files?.decorationImages?.length) {
        body.decorationImages = req.files.decorationImages.map(
            (file) => `/uploads/cars/${file.filename}`
        );
    }

    const data = await updateCarService(req.params.id, body);

    return buildSuccessResponse(
        res,
        "Vehicle updated successfully",
        200,
        data
    );
};

/* 
   DELETE VEHICLE
 */

export const deleteCar = async (req, res) => {
    const data = await deleteCarService(req.params.id);

    return buildSuccessResponse(
        res,
        "Vehicle deleted successfully",
        200,
        data
    );
};

/* 
   ALL VEHICLES
 */

export const getAllCars = async (req, res) => {
    const data = await getAllCarsService();

    return buildSuccessResponse(
        res,
        "All vehicles fetched successfully",
        200,
        data
    );
};

/* 
   SELF DRIVE VEHICLES
 */

export const getSelfDriveCars = async (req, res) => {
    const data = await getSelfDriveCarsService();

    return buildSuccessResponse(
        res,
        "Self Drive vehicles fetched successfully",
        200,
        data
    );
};
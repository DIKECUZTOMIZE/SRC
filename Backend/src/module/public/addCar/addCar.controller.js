import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import { createCarService, deleteCarService, getAllCarsService, getCarByIdService, getCarsByCategoryService, getCategoriesService, getSelfDriveCarsService, updateCarService } from "./addCar.service.js";


export const createCar = async (req, res) => {
    const body = { ...req.body };

    // Image upload
    if (req.file) {
        body.image = `/uploads/cars/${req.file.filename}`;
    }

    const data = await createCarService(body);

    return buildSuccessResponse(
        res,
        "Car added successfully",
        201,
        data
    );
};


export const getCategories = async (req, res) => {
    const data = await getCategoriesService();

    return buildSuccessResponse(
        res,
        "Categories fetched successfully",
        200,
        data
    );
};


export const getCarsByCategory = async (req, res) => {

    const { category } = req.params;


    const data = await getCarsByCategoryService(category);


    return buildSuccessResponse(
        res,
        "Cars fetched successfully",
        200,
        data
    );
};


export const getCarById = async (req, res) => {


    const data = await getCarByIdService(
        req.params.id
    );


    return buildSuccessResponse(
        res,
        "Car details fetched successfully",
        200,
        data
    );

};



export const updateCar = async (req, res) => {

    const data = await updateCarService(req);


    return buildSuccessResponse(
        res,
        "Car updated successfully",
        200,
        data
    );

};



export const deleteCar = async (req, res) => {


    const data = await deleteCarService(req.params.id);


    return buildSuccessResponse(
        res,
        "Car deleted successfully",
        200,
        data
    );

};

export const getAllCars = async (req, res) => {
    console.log('ram')
    const data = await getAllCarsService();

    return buildSuccessResponse(
        res,
        "All cars fetched successfully",
        200,
        data
    );
};

export const getSelfDriveCars = async (req, res) => {
    const data = await getSelfDriveCarsService();

    return buildSuccessResponse(
        res,
        "Self Drive cars fetched successfully",
        200,
        data
    );
};
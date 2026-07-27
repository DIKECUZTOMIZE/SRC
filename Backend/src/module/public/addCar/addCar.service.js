import { createCarValidation } from "../../../schema/createCarValidation.js";
import carAddDao from '../../../dao/carAdd.dao.js'



    export const createCarService = async (data) => {
        try {
            const car = await carAddDao.create({
                category: data.category,
                brand: data.brand,
                model: data.model,
                classification: data.classification,
                fuel: data.fuel,
                transmission: data.transmission,
                seats: Number(data.seats),
                pricePerHour: Number(data.pricePerHour),
                pricePerDay: Number(data.pricePerDay),
                image: data.image,
                description: data.description,
                status: data.status || "Available",
            });

            return car;
        } catch (error) {
            console.error("CREATE CAR ERROR:", error);
            throw error;
        }
    };


export const getCategoriesService = async () => {
    const categories = await carAddDao.getCategories();
    return categories;
};


export const getCarsByCategoryService = async (category) => {
    const cars = await carAddDao.findByCategory(category);
    return cars;

};


export const getCarByIdService = async (id) => {


    const car = await carAddDao.findById(id);


    if (!car) {
        throw new Error("Car not found");
    }


    return car;

};

export const updateCarService = async (req) => {
    const data = {
        category: req.body.category,
        brand: req.body.brand,
        model: req.body.model,
        classification: req.body.classification,
        fuel: req.body.fuel,
        transmission: req.body.transmission,
        seats: req.body.seats,
        pricePerHour: req.body.pricePerHour,
        pricePerDay: req.body.pricePerDay,
        description: req.body.description || "",
        status: req.body.status || "Available",
    };

    if (req.file) {
        data.image = req.file.filename;
    }

    return await carAddDao.update(req.params.id, data);
};


export const deleteCarService = async (id) => {


    const car = await carAddDao.findById(id);



    if (!car) {

        throw new Error(
            "Car not found"
        );

    }



    return await carAddDao.delete(id);

};


export const getAllCarsService = async () => {
    const cars = await carAddDao.findAll();
    return cars;
};

export const getSelfDriveCarsService = async () => {
    const cars = await carAddDao.findByCategory("Self Drive");
    return cars;
};
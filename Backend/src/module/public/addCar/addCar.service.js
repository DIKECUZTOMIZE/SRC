import carAddDao from "../../../dao/carAdd.dao.js";

/* 
   CREATE VEHICLE
 */

export const createCarService = async (data) => {
    try {
        return await carAddDao.create({
            category: data.category,

            brand: data.brand,
            model: data.model,

            classification: data.classification,

            fuel: data.fuel,

            transmission: data.transmission,

            seats: Number(data.seats),

            pricePerHour: Number(data.pricePerHour || 0),

            pricePerDay: Number(data.pricePerDay || 0),

            driverChargePerDay: Number(data.driverChargePerDay || 0),

            pickupPrice: Number(data.pickupPrice || 0),

            dropPrice: Number(data.dropPrice || 0),

            roundTripPrice: Number(data.roundTripPrice || 0),

            loadingCapacity: data.loadingCapacity || "",

            showDecoration: data.showDecoration === "true",

            decorationType: data.decorationType || "",

            decorationName: data.decorationName || "",

            decorationPrice: Number(data.decorationPrice || 0),

            decorationImages: data.decorationImages || [],

            image: data.image || "",

            description: data.description || "",

            status: data.status || "Available",
        });
    } catch (error) {
        console.error("CREATE VEHICLE ERROR:", error);
        throw error;
    }
};

/* 
   CATEGORY LIST
 */

export const getCategoriesService = async () => {
    return await carAddDao.getCategories();
};

/* 
   VEHICLES BY CATEGORY
 */

export const getCarsByCategoryService = async (category) => {
    return await carAddDao.findByCategory(category);
};

/* 
   VEHICLE DETAILS
 */

export const getCarByIdService = async (id) => {
    const car = await carAddDao.findById(id);

    if (!car) {
        throw new Error("Vehicle not found");
    }

    return car;
};

/* 
   UPDATE VEHICLE
 */

export const updateCarService = async (id, body) => {
    const vehicle = await carAddDao.findById(id);

    if (!vehicle) {
        throw new Error("Vehicle not found");
    }

    const data = {
        category: body.category,

        brand: body.brand,

        model: body.model,

        classification: body.classification,

        fuel: body.fuel,

        transmission: body.transmission,

        seats: Number(body.seats),

        pricePerHour: Number(body.pricePerHour || 0),

        pricePerDay: Number(body.pricePerDay || 0),

        driverChargePerDay: Number(body.driverChargePerDay || 0),

        pickupPrice: Number(body.pickupPrice || 0),

        dropPrice: Number(body.dropPrice || 0),

        roundTripPrice: Number(body.roundTripPrice || 0),

        loadingCapacity: body.loadingCapacity || "",

        showDecoration: body.showDecoration === "true",

        decorationType: body.decorationType || "",

        decorationName: body.decorationName || "",

        decorationPrice: Number(body.decorationPrice || 0),

        description: body.description || "",

        status: body.status || "Available",
    };

    if (body.image) {
        data.image = body.image;
    }

    if (body.decorationImages) {
        data.decorationImages = body.decorationImages;
    }

    return await carAddDao.update(id, data);
};

/* 
   DELETE VEHICLE
 */

export const deleteCarService = async (id) => {
    const vehicle = await carAddDao.findById(id);

    if (!vehicle) {
        throw new Error("Vehicle not found");
    }

    return await carAddDao.delete(id);
};

/* 
   ALL VEHICLES
 */

export const getAllCarsService = async () => {
    return await carAddDao.findAll();
};

/* 
   SELF DRIVE VEHICLES
 */

export const getSelfDriveCarsService = async () => {
    return await carAddDao.findByCategory("Self Drive");
};
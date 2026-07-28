import WeddingCarDao from '../../../dao/wedding.js'
export const getAllWeddingCarsService = async () => {
    const filter = {
        category: "Wedding Car",
        status: "Available",
    };

    return await WeddingCarDao.getAllCarsDao(filter);
};
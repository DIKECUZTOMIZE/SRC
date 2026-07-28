import premiumWithCarDao from "../../../dao/premiumWithCar.dao.js";

export const getAllPremiumCarsService = async () => {
    const filter = {
        category: "Premium Car",
        status: "Available",
    };

    return await premiumWithCarDao.getAllCarsDao(filter);
};
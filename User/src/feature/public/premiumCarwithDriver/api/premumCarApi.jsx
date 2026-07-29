import axiosInstance from "../../../../config/axiosInstance";

export const getAllPremiumCars = async () => {
  try {
    const res = await axiosInstance.get("/premium-car/vehicles");

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(
      "Get Premium Cars Error:",
      error.response?.data || error.message,
    );
    console;

    throw error;
  }
};

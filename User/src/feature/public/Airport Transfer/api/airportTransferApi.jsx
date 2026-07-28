import axiosInstance from "../../../../config/axiosInstance";

export const getAllAirportTransferCars = async () => {
  try {
    const response = await axiosInstance.get("/airport-transfer/vehicles", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Get Airport Transfer Cars Error:",
      error.response?.data || error.message,
    );

    throw error;
  }
};

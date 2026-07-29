import axiosInstance from "../../../../config/axiosInstance";

export const getAllAirportTransferCars = async () => {
  console.log("ram");
  try {
    const response = await axiosInstance.get("/airport-transfer/vehicles", {
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Get Airport Transfer Cars Error:",
      error.response?.data || error.message,
    );

    throw error;
  }
};

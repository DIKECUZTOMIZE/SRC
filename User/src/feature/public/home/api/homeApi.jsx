import axiosInstance from "../../../../config/axiosInstance";

// Get All Cars
export const GetAllCarsApi = async () => {
  try {
    const response = await axiosInstance.get("/carAdd/cars", {
      withCredentials: true,
    });
 
    return response.data;
  } catch (error) {
    console.log("GET ALL CARS ERROR:", error.response?.data);
    throw error;
  }
};
 
import axiosInstance from "../../../../config/axiosInstance";

export const getAllNormalWithDriverCars = async () => {
  try {
    const response = await axiosInstance.get("/normalWhitDriver/cars", {
      withCredentials: true,
    });
 console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(
      "Get Normal With Driver Cars Error:",
      error.response?.data || error.message,
    );

    throw error;
  }
};

export const createDriverBooking = async (data) => {
  try {
    const response = await axiosInstance.post("/normalWhitDriver/book", data, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(
      "Validation Errors:",
      JSON.stringify(error.response?.data?.errors, null, 2),
    );

    throw error;
  }
};

import axiosInstance from "../../../../config/axiosInstance";

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

import axiosInstance from "../../../../config/axiosInstance";


export const getAllWeddingCars = async () => {

  try {

    const response = await axiosInstance.get(
      "/wedding-car/vehicles",
      {
        withCredentials: true,
      }
    );


    return response.data;


  } catch (error) {

    console.error(
      "Get Wedding Cars Error:",
      error.response?.data || error.message
    );


    throw error;

  }

};
import axiosInstance from "../../../../config/axiosInstance.jsx";
export const getAllTempoTravellerBus = async () => {
  try {
    const response = await axiosInstance.get("/tempoTravellerBus/vehicles", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error(
      "GET TEMPO BUS ERROR:",
      error.response?.data || error.message,
    );

    throw error;
  }
};

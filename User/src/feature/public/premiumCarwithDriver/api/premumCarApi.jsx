import axios from "axios";

export const getAllPremiumCars = async () => {
  try {
    const res = await axios.get("/api/premium-car/vehicles");

    return res.data;
  } catch (error) {
    console.log(
      "Get Premium Cars Error:",
      error.response?.data || error.message,
    );

    throw error;
  }
};

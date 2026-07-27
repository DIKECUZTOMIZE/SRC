import axiosInstance from "../../../../config/axiosInstance";

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/admin-login", data);

    return response.data;
  } catch (error) {
    console.log("Login API Error:", error.response?.data || error.message);

    throw error;
  }
};

export const getMe = async () => {
  try {
    const response = await axiosInstance.get("/auth/dashboard");

    return response.data;
  } catch (error) {
    console.log("Dashboard API Error:", error.response?.data || error.message);

    throw error;
  }
};

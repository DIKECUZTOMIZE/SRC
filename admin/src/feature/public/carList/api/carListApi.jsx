import axiosInstance from "../../../../config/axiosInstance";

export const GetCategoriesApi = async () => {
  try {
    const response = await axiosInstance.get("/carAdd/categories", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log("Category API Error:", error.response?.data || error.message);

    throw error;
  }
};

export const GetCarsByCategoryApi = async (category) => {
  try {
    const response = await axiosInstance.get(
      `/carAdd/categories/${encodeURIComponent(category)}`,
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    console.log(
      "Category Cars API Error:",
      error.response?.data || error.message,
    );

    throw error;
  }
};

export const GetCarDetailsApi = async (id) => {
  try {
    const response = await axiosInstance.get(`/carAdd/${id}`);

    return response.data;
  } catch (error) {
    console.log(
      "CAR DETAILS API ERROR:",
      error.response?.data || error.message,
    );

    throw error;
  }
};

// DELETE CAR

export const DeleteCarApi = async (id) => {
  try {
    const response = await axiosInstance.delete(`/carAdd/delete-car/${id}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log("DELETE CAR ERROR:", error.response?.data);

    throw error;
  }
};

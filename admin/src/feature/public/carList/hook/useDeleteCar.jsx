import { useState } from "react";
import { DeleteCarApi } from "../api/carListApi";

export const useDeleteCar = () => {
  const [loading, setLoading] = useState(false);

  const deleteCar = async (id) => {
    try {
      setLoading(true);

      const response = await DeleteCarApi(id);

      return response;
    } catch (error) {
      console.log("DELETE ERROR:", error.response?.data || error);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteCar,
    loading,
  };
};

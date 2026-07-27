import { useEffect, useState } from "react";
import { GetCarsByCategoryApi } from "../api/carListApi";

export const useCategoryCarsList = (category) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    try {
      setLoading(true);

      const response = await GetCarsByCategoryApi(category);

      if (response.success) {
        setCars(response.data);
      }
    } catch (error) {
      console.log("Fetch Cars Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      fetchCars();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return {
    cars,
    loading,
  };
};

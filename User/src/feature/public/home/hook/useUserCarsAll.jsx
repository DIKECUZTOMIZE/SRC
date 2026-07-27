import { useEffect, useState } from "react";
import { GetAllCarsApi } from "../api/homeApi";

export const useUserCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    try {
      setLoading(true);

      const response = await GetAllCarsApi();

      if (response.success) {
        setCars(response.data);
      }
    } catch (error) {
      console.log("FETCH ALL CARS ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return {
    cars,
    loading,
    fetchCars,
  };
};

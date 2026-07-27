import { useEffect, useState } from "react";
import { getSelfDriveCarsApi } from "../api/selfDriveApi";

export const useSelfDriveCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    try {
      setLoading(true);

      const res = await getSelfDriveCarsApi();

      setCars(res.data || []);
    } catch (error) {
      console.log(error);
      setCars([]);
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

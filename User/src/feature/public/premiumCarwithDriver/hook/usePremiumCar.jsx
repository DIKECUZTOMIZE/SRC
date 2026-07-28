import { useQuery } from "@tanstack/react-query";
import { getAllPremiumCars } from "../api/premumCarApi";
 
const usePremiumCar = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["premium-cars"],

    queryFn: getAllPremiumCars,
  });

  return {
    cars: data?.data || [],

    isLoading,

    isError,

    error,

    refetch,
  };
};

export default usePremiumCar;

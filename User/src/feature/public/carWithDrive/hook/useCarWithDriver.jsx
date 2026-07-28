import { useQuery } from "@tanstack/react-query";
import { getAllNormalWithDriverCars } from "../api/driverBooking.api";

const useCarWithDriver = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["normal-with-driver-cars"],
    queryFn: getAllNormalWithDriverCars,
  });
 
  return {
    cars: data?.data || [],
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useCarWithDriver;

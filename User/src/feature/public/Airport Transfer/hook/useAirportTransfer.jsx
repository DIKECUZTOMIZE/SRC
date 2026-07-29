import { useQuery } from "@tanstack/react-query";
import { getAllAirportTransferCars } from "../api/airportTransferApi";
 
const useAirportTransfer = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["airport-transfer-cars"],

    queryFn: getAllAirportTransferCars,

    retry: false, // important

    staleTime: 1000 * 60 * 5,
  });

  return {
    cars: data?.data || [],

    isLoading,

    isError,

    error,

    refetch,
  };
};

export default useAirportTransfer;

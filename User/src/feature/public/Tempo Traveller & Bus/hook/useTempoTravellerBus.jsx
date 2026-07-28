import { useQuery } from "@tanstack/react-query";
import { getAllTempoTravellerBus } from "../api/tempotravellerBusApi";

const useTempoTravellerBus = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["tempo-traveller-bus"],

    queryFn: getAllTempoTravellerBus,
  });

  return {
    vehicles: data?.data || [],

    isLoading,

    isError,

    error,

    refetch,
  };
};

export default useTempoTravellerBus;

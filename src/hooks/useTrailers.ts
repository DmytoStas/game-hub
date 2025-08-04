import { useQuery } from "@tanstack/react-query";
import TrailerT from "../entities/trailer";
import APIClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<TrailerT>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;

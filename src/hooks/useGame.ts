import { useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";
import GameT from "../entities/game";

const apiClient = new APIClient<GameT>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;

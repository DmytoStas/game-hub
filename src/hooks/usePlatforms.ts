import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import PlatformT from "../entities/platform";

const apiClient = new APIClient<PlatformT>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;

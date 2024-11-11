import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

type Games = {
  id: number;
  name: string;
};

type FetchGames = {
  count: number;
  results: Games[];
};

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setrError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setrError(e.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error, setGames, setrError };
};

export default useGames;

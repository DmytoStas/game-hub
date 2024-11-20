import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

type Genre = {
  id: number;
  name: string;
};

type FetchGenres = {
  count: number;
  results: Genre[];
};

const useGenres = () => {
  const [genres, setGanres] = useState<Genre[]>([]);
  const [error, setrError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenres>("/games", { signal: controller.signal })
      .then((res) => {
        setGanres(res.data.results);
        setIsLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setrError(e.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;

import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

type Games = {
  id: number;
  name: string;
};

type FetchGames = {
  count: number;
  results: Games[];
};

export default function GameGrid() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setrError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((e) => setrError(e.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

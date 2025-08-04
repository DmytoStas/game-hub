import GenreT from "./genre";
import PlatformT from "./platform";
import PublisherT from "./publishers";

type GameT = {
  id: number;
  name: string;
  slug: string;
  genres: GenreT[];
  publishers: PublisherT[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: PlatformT }[];
  metacritic: number;
  rating_top: number;
};

export default GameT;

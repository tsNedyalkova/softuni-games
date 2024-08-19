import GameListItem from "./game-list-item/GameListItem.jsx";
import { useGetAllGames } from "../../hooks/use-games.js";

export default function GameList() {
  const [games, setGames] = useGetAllGames();
  console.log(games);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.length > 0 ? (
        games.map((game) => <GameListItem key={game._id} {...game} />)
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
}

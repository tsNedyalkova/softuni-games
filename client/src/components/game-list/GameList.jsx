import { useEffect, useState } from "react";
import * as gamesApi from "../../api/games-api.js";
import GameListItem from "./game-list-item/GameListItem.jsx";

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gamesApi.getAll().then((result) => setGames(result));
  }, []);

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

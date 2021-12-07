import Player from "./Player";
import matchData from "../data/matchData";
import playerData from '../data/playerData';
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

const PlayerList = function(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  
  console.log(parsedPlayerData);
  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
    {/* Players will be shown here */}
    <Player />
  </section>
  );
}

export default PlayerList;
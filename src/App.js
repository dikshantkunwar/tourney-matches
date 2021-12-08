import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers.js";
import './App.css';

function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <PlayerList {...parsedPlayerData}/>
      <MatchList { ...matchData } />
    </div>
  );
}

export default App;

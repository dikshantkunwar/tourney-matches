import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;

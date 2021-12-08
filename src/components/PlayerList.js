import Player from "./Player";

const PlayerList = function(props) {
  const parsedPlayerData = Object.values(props);
  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);
  
  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
    {parsedPlayers}
  </section>
  );
}

export default PlayerList;
import Player from "./Player";

const PlayerList = function(props) {
  const onePlayer = props;
  
  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
    {/* Players will be shown here */}
    <Player {...onePlayer} />
  </section>
  );
}

export default PlayerList;
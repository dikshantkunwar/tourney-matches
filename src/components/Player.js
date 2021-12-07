const Player = function() {
  return(
    <article className="Player">
    <h1>John <span>Secret</span> Doe</h1>
    {/* To be shown when there are no wins */}<h2 className="zero">Currently with no wins</h2>
    {/* To be shown when there is 1 win */}<h2>Currently at 1 win</h2>
    {/* To be shown when there is more than one win */}<h2>Currently at 1+ wins</h2>
  </article>
  );
}

export default Player;
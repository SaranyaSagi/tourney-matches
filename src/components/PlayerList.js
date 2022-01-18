import Player from "./Player";

function PlayerList(props){
  const { playerData } = props;
  
  // player={player} is same as {...player}
  const parsedPlayers = playerData.map(player => <Player key={player.gamerTag} {...player} />);

  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
    { parsedPlayers }
  </section>
  );
}

export default PlayerList;
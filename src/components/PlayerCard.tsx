import { IPlayer } from "../interfaces/IPlayer.ts"

function PlayerCard(player: IPlayer) {
  return (
    <div>
      <h5>{player.name}</h5>
      <img src={ player.photo } alt={ player.name } />
      <p>Name: {player.name}</p>
      <p>Position: {player.position}</p>
      <p>Age: {player.age}</p>
    </div>
  )
}

export default PlayerCard
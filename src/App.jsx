import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player"

function App() {
  const [activePlayerSymbol,setActivePlayerSymbol] =useState('X');

  return (
    <div id ="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayerSymbol==='X'} />
        <Player name="Player 2" symbol="O" isActive={activePlayerSymbol==='O'}/>
      </ol>
      <GameBoard onSelectSquare={()=>setActivePlayerSymbol((currentPlayer => currentPlayer==='X'?'O':'X'))}
        currentPlayerSymbol={activePlayerSymbol}/>
    </div>
  );

}

export default App

import { useState } from "react";

const initalGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard({onSelectSquare, currentPlayerSymbol}) {
    const[gameBoard,setGameBoard] = useState(initalGameBoard);
    const handleClick = (rowIndex, colIndex) => {
        setGameBoard(prevGameBoard => {
            const updatedBoard = [...prevGameBoard.map(row => [...row])];
            const temp = updatedBoard[rowIndex][colIndex];
            updatedBoard[rowIndex][colIndex] = temp==null?currentPlayerSymbol:temp; 
            return updatedBoard;
        });
        if (gameBoard[rowIndex][colIndex] == null)
            onSelectSquare();
    };
    return (
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=> (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex)=>(
                            <li key={colIndex}>
                                <button onClick= 
                                {()=>handleClick(rowIndex,colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
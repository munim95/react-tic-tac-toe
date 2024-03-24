import { useState } from "react";

export default function Player({name, symbol, isActive}) {
    const[isEditing, setIsEditing] = useState(false);
    const[playerName, setPlayerName]=useState(name);
    let pName = <span className="player-name">{playerName}</span>;
    if(isEditing)
        pName=<input type="text" required value={playerName} onChange={(event)=>setPlayerName(event.target.value)}/>;
    return (
        <li className={isActive?'active':undefined}>
            <span className="player">
                {pName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={()=>setIsEditing((editing)=>!editing)}>
                {isEditing?'Save':'Edit'}
                </button>
        </li>
    );
}
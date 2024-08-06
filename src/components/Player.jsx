import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick(){
      setIsEditing((editing) => !editing);
      console.log(isEditing);
    }
    function handleChange(event){
      setPlayerName(event.target.value);
    }
    // let btnCaption = "Edit";
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing){
      editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
      // btnCaption="Save";
    }

    return (
            <li>
              <span className="player">
                {editablePlayerName}
                {/* <span className="player-name">{name}</span> */}
                <span className="Player Symbol">{symbol}</span>
              </span>
              {/* <button>Edit</button> */}
              {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
              <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
    );
  }
  
import { useState } from "react";

export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick(){
      setIsEditing((editing) => !editing);
      console.log(isEditing);
    }
    // let btnCaption = "Edit";
    let playerName = <span className="player-name">{name}</span>;

    if(isEditing){
      playerName = <input type="text" required value={name}/>;
      // btnCaption="Save";
    }


    return (
            <li>
              <span className="player">
                {playerName}
                {/* <span className="player-name">{name}</span> */}
                <span className="Player Symbol">{symbol}</span>
              </span>
              {/* <button>Edit</button> */}
              {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
              <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
    );
  }
  
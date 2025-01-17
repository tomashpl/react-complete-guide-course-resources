import {useState} from "react";

export default function Player({initialName, symbol, isActive, onPlayerNameChange}) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);

    const handleEditClick = () => {
        setIsEditing((prevState) => !prevState);
        if (isEditing) onPlayerNameChange(symbol, name);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    let playerName = (
        <span className="player-name"
              onDoubleClick={handleEditClick}>
            {name}
        </span>
    );
    let playerNameInput = (
        <input type="text"
               value={name}
               required
               onKeyUp={(event) => {
                   if (event.key === 'Enter') {
                       handleEditClick();
                   }
               }}
               onChange={handleNameChange}
        />
    );

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {isEditing ? playerNameInput : playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    )
}

import {useRef, useState} from "react";

export default function Player() {
    const [name, setName] = useState('');
    const playerNameInput = useRef();

    const handleClick = () => {
        setName(playerNameInput.current.value)
        playerNameInput.current.value = '';
    }

  return (
    <section id="player">
      <h2>Welcome {name || 'unknown entity'}</h2>
      <p>
        <input 
          type="text" 
          ref={playerNameInput}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

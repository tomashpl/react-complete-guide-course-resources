import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import {useState} from "react";
import Log from "./components/Log/Log";
import {WINNING_COMBINATIONS} from "./data/data";
import GameOver from "./components/GameOver/GameOver.jsx";

const PLAYERS_SYMBOLS = ['⭕️', '❌']
const [PLAYER_1_SYMBOL, PLAYER_2_SYMBOL] = PLAYERS_SYMBOLS;

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function deriveActivePlayer(gameTurns) {
    let currentPlayer = PLAYER_1_SYMBOL

    if (gameTurns.length > 0 && gameTurns[0].player === PLAYER_1_SYMBOL) {
        currentPlayer = PLAYER_2_SYMBOL;
    }

    return currentPlayer;
}

function deriveWinner(gameBoard, gameTurnsLength, players) {
    for (const combination of WINNING_COMBINATIONS) {
        const firstSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
            return [players[firstSymbol], false];
        }
    }

    return [false, gameTurnsLength === 9];
}

function deriveGameBoard(gameTurns) {
    let gameBoard = structuredClone(INITIAL_GAME_BOARD);

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function App() {
    const [players, setPlayers] = useState({
        [PLAYER_1_SYMBOL]: 'Player 1',
        [PLAYER_2_SYMBOL]: 'Player 2',
    });
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const [winner, draw] = deriveWinner(gameBoard, gameTurns.length, players);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameTurns((prevGameTurns) => {
            return [
                {
                    square: {row: rowIndex, col: colIndex},
                    player: deriveActivePlayer(prevGameTurns),
                },
                ...prevGameTurns
            ];
        })
    }

    const handleRematch = () => {
        setGameTurns([]);
    }

    const handlePlayerNameChange = (playerSymbol, name) => {
        setPlayers((prevPlayers) => ({
            ...prevPlayers,
            [playerSymbol]: name,
        }));
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName={players[PLAYER_1_SYMBOL]}
                            symbol={PLAYER_1_SYMBOL}
                            isActive={activePlayer === PLAYER_1_SYMBOL}
                            onPlayerNameChange={handlePlayerNameChange}
                    />
                    <Player initialName={players[PLAYER_2_SYMBOL]}
                            symbol={PLAYER_2_SYMBOL}
                            isActive={activePlayer === PLAYER_2_SYMBOL}
                            onPlayerNameChange={handlePlayerNameChange}
                    />
                </ol>
                {(winner || draw) && <GameOver winner={winner} onRematch={handleRematch}/>}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App

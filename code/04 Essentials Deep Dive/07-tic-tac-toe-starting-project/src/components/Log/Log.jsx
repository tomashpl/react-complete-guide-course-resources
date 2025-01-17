export default function Log({turns}) {
    const log = turns.map(({square, player}, index) => (
        <li className={index === 0 ? 'highlighted' : undefined} key={`${square.row}-${square.col}`}>
            {player}: {square.row}, {square.col}
        </li>
    ))

    return (
        <ol id="log">
            {log}
        </ol>
    )
}

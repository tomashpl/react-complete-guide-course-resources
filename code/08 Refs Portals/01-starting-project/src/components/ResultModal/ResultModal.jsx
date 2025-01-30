import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

// REACT >= 19
// export default function ResultModal({result, targetTime, ...props}) {
//     return (
//         <dialog className="result-modal" {...props}>
//             <h2>You {result ? 'won!' : 'lost...'}</h2>
//             <p>Target time was <strong>{targetTime} seconds.</strong></p>
//             <p>You stopped the timer with <strong>X seconds left.</strong></p>
//             <form method="dialog">
//                 <button>Close</button>
//             </form>
//         </dialog>
//     )
// }

// REACT < 19

const ResultModal = forwardRef(function ResultModal({remainingTime, targetTime, onReset}, ref) {
    const inputRef = useRef(null);
    const userWin = remainingTime > 0;
    const formattedTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / targetTime / 1000) * 100);

    useImperativeHandle(ref, () => ({
        open() {
            inputRef.current.showModal();
        }
    }), [])

    return (
        createPortal(
            <dialog className="result-modal" ref={inputRef} onClose={onReset}>
                <h2>{userWin ? `Your score: ${score}` : 'You lost...'}</h2>
                <p>Target time was <strong>{targetTime} seconds.</strong></p>
                <p>You stopped the timer with <strong>{formattedTime} seconds left.</strong></p>
                <form method="dialog" onSubmit={onReset}>
                    <button>Close</button>
                </form>
            </dialog>,
            document.querySelector("#modal")
        )
    )
})

export default ResultModal;

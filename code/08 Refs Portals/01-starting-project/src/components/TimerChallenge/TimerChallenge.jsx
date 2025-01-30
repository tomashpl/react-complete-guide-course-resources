import {useRef, useState} from "react";
import ResultModal from "../ResultModal/ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const targetTimeIsMilliseconds = targetTime * 1000;
    const [timeRemaining, settimeRemaining] = useState(targetTimeIsMilliseconds);
    const timer = useRef(null);
    const resultModalRef = useRef(null);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTimeIsMilliseconds;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        resultModalRef.current.open();
    }

    const handleReset = () => {
        settimeRemaining(targetTimeIsMilliseconds);
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            settimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
    }

    const handleStop = () => {
        clearInterval(timer.current);
        resultModalRef.current.open();
    }

    return (
        <>
            <section className="challenge">
                <h2>{title}</h2>
                <div className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </div>
                <div className="challenge-button">
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} challenge
                    </button>
                </div>
                <div className={`challenge-status ${timerIsActive ? 'active' : ''}`}>
                    {timerIsActive ? 'Time is running' : 'Timer inactive'}
                </div>
            </section>
            <ResultModal ref={resultModalRef}
                         remainingTime={timeRemaining}
                         targetTime={targetTime}
                         onReset={handleReset}
            />
        </>
    )
}

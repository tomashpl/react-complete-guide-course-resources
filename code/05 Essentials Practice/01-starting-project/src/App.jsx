import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Results from "./components/Results/Results.jsx";
import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 500,
        expectedReturn: 50,
        duration: 12,
    });

    const isUserInputValid = userInput.duration >= 1 && userInput.initialInvestment > 0 && userInput.annualInvestment > 0;

    const handleUserInputChange = (fieldName, value) => {
        setUserInput((prevUserInput) => (
            {...prevUserInput, [fieldName]: +value}
        ))
    }
    return (
        <>
            <Header/>
            <UserInput userInput={userInput}
                       onUserInputChange={handleUserInputChange} />
            { !isUserInputValid && <div className="center"><p>Data is invalid</p></div>}
            { isUserInputValid && <Results userInput={userInput} /> }
        </>
    )
}

export default App

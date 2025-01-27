export default function UserInput({userInput, onUserInputChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <fieldset>
                    <label>Initial investment</label>
                    <input type="number"
                           min="0"
                           step="0.01"
                           required
                           value={userInput.initialInvestment}
                           onChange={(event) => onUserInputChange('initialInvestment', event.target.value)} />
                </fieldset>
                <fieldset>
                    <label>Annual investment</label>
                    <input type="number"
                           required
                           value={userInput.annualInvestment}
                           onChange={(event) => onUserInputChange('annualInvestment', event.target.value)} />
                </fieldset>
            </div>
            <div className="input-group">
                <fieldset>
                    <label>Expected return</label>
                    <input type="number"
                           required
                           value={userInput.expectedReturn}
                           onChange={(event) => onUserInputChange('expectedReturn', event.target.value)} />
                </fieldset>
                <fieldset>
                    <label>Duration</label>
                    <input type="number"
                           min="1"
                           step="1"
                           required
                           value={userInput.duration}
                           onChange={(event) => onUserInputChange('duration', event.target.value)} />
                </fieldset>
            </div>
        </section>
    )
}

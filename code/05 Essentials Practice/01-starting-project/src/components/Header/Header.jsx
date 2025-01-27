import appLogo from '../../assets/investment-calculator-logo.png'

export default function Header(props) {
    return (
        <header id="header">
            <img src={appLogo} alt="App logo" />
            <h1>REACT INVESTMENT CALCULATOR</h1>
        </header>
    )
}
